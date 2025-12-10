# Edone Solutions Website

A professional marketing website built with Next.js 16, Tailwind CSS v4, and Framer Motion. Features comprehensive service pages, dynamic routes, accessible navigation, and SEO optimization.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📂 Project Structure

```
edone-solutions-web/
├── app/
│   ├── api/leads/          # Lead capture API route
│   ├── services/
│   │   ├── 360/            # 360 Virtual Tours
│   │   │   └── [category]/ # Dynamic category pages
│   │   ├── design/         # Website Design
│   │   │   └── [industry]/ # Dynamic industry pages
│   │   ├── development/    # Website Development
│   │   │   └── [industry]/ # Dynamic industry pages
│   │   └── google-ads/     # Google Ads
│   │       └── [campaign]/ # Dynamic campaign pages
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── common/             # Reusable components
│   │   ├── CaseStudy.tsx   # Case study display
│   │   ├── PricingCard.tsx # Pricing display
│   │   ├── Viewer360.tsx   # 360 panorama embed
│   │   └── TestimonialCard.tsx
│   └── layout/
│       ├── Header.tsx      # Header with dropdown
│       ├── ServicesDropdown.tsx  # Accessible mega menu
│       └── Footer.tsx
├── lib/
│   ├── services-data.ts    # All service/category data
│   ├── types.ts            # TypeScript definitions
│   ├── seo.ts              # SEO/schema utilities
│   └── constants.ts        # Company info
├── public/images/          # Placeholder images
└── data/                   # Lead storage (JSON)
```

---

## 🎨 Customization

### Brand Colors (Tailwind)

Colors are defined in `tailwind.config.ts` under `edone`:

```js
edone: {
  primary: '#F4961E',    // Orange
  secondary: '#F1642F',  // Red-Orange
  accent: '#09A4E6',     // Blue
}
```

### Adding Content

**Services Data**: Edit `lib/services-data.ts` to add/modify:
- 360 Virtual Tour categories
- Website Design industries
- Website Development industries
- Google Ads campaigns
- Case studies, testimonials, pricing

**Images**: Replace placeholders in `public/images/`:
- `services/360/` - 360 tour images
- `case-studies/` - Before/after screenshots
- `clients/` - Client logos
- `samples/` - Design samples

---

## 🌐 Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Configure environment (if needed)
4. Deploy

---

## 📊 Google Ads Landing Page Checklist

When running Google Ads campaigns, ensure:

- [ ] **H1 matches ad headline** - First heading should match the ad copy
- [ ] **Above-fold CTA** - Clear call-to-action visible without scrolling
- [ ] **Fast load time** - Under 3 seconds (check with Lighthouse)
- [ ] **Mobile optimized** - Test on actual mobile devices
- [ ] **Trust signals** - Include testimonials, client logos
- [ ] **Contact form** - Easy form with minimal required fields
- [ ] **Phone number** - Clickable phone link
- [ ] **Clear value proposition** - What visitor gets explained immediately
- [ ] **Conversion tracking** - Google Ads conversion tag installed
- [ ] **No distracting navigation** - Keep focus on conversion

---

## 🔧 API Routes

### POST /api/leads
Captures lead form submissions.

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9494720878",
  "service": "360",
  "category": "hotel",
  "message": "I need a virtual tour..."
}
```

Response:
```json
{
  "success": true,
  "message": "Thank you for your inquiry!",
  "leadId": "lead_123..."
}
```

---

## 📞 Contact Information

- **Phone**: [+91 9494720878](tel:+919494720878)
- **Email**: info@edonesolutions.com
- **Map**: [Google Maps](https://maps.app.goo.gl/MrQuytyqVrEBKwGZ8)

### Social Links
- [Facebook](https://www.facebook.com/Edonesolution/)
- [Instagram](https://www.instagram.com/edonesolutions/)
- [LinkedIn](https://in.linkedin.com/company/edone-solutions)
- [YouTube](https://www.youtube.com/channel/UCcmcsvZI0aZ-PSvpiXuJ3pw)
- [X (Twitter)](https://x.com/edonesolutions)

---

## 📝 License

Proprietary - Edone Solutions © 2024
