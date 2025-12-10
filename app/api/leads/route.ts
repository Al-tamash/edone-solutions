import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import * as fs from 'fs';
import * as path from 'path';

// Lead form validation schema
const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  category: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  source: z.string().optional(),
});

export type LeadFormInput = z.infer<typeof leadSchema>;

interface StoredLead extends LeadFormInput {
  id: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
}

// Helper to get leads file path
function getLeadsFilePath(): string {
  return path.join(process.cwd(), 'data', 'leads.json');
}

// Helper to ensure data directory exists
function ensureDataDir(): void {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Helper to read existing leads
function readLeads(): StoredLead[] {
  const filePath = getLeadsFilePath();
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }
  return [];
}

// Helper to write leads
function writeLeads(leads: StoredLead[]): void {
  ensureDataDir();
  const filePath = getLeadsFilePath();
  fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
}

// Generate unique ID
function generateId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validationResult = leadSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const leadData = validationResult.data;

    // Create new lead
    const newLead: StoredLead = {
      ...leadData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    // Store lead (in real production, this would go to a CRM/database)
    try {
      const leads = readLeads();
      leads.push(newLead);
      writeLeads(leads);
    } catch (storageError) {
      // If file storage fails, log but don't fail the request
      // In production, this would be a proper logging system
      console.error('Lead storage error:', storageError);
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you shortly.',
      leadId: newLead.id,
    });

  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process your request. Please try again.' 
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve leads (for admin purposes - should be protected in production)
export async function GET() {
  try {
    const leads = readLeads();
    return NextResponse.json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error('Lead retrieval error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve leads' },
      { status: 500 }
    );
  }
}
