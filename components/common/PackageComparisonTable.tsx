"use client";

import { Check, X, Flame } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  basic: boolean | string;
  premium: boolean | string;
  platinum: boolean | string;
  custom: boolean | string;
}

interface PackageComparisonProps {
  title: string;
  tiers: string[];
  features: ComparisonFeature[];
}

export function PackageComparisonTable({ title, tiers, features }: PackageComparisonProps) {
  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-gray-900 dark:text-white mx-auto" />;
    }
    if (value === false) {
      return <span className="text-gray-400">–</span>;
    }
    if (value === "no") {
      return <X className="w-5 h-5 text-red-500 mx-auto" />;
    }
    return <span className="text-sm text-gray-700 dark:text-gray-300">{value}</span>;
  };

  return (
    <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="p-6 lg:p-8 text-center border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
          <Flame className="w-8 h-8 text-orange-500" />
          {title}
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="py-4 px-6 text-left font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                Feature / Benefit
              </th>
              {tiers.map((tier) => (
                <th
                  key={tier}
                  className="py-4 px-4 text-center font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 min-w-[100px]"
                >
                  {tier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={feature.name}
                className={`${
                  index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50/50 dark:bg-gray-800/50'
                } hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
              >
                <td className="py-4 px-6 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">
                  {feature.name}
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-100 dark:border-gray-800">
                  {renderValue(feature.basic)}
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-100 dark:border-gray-800">
                  {renderValue(feature.premium)}
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-100 dark:border-gray-800">
                  {renderValue(feature.platinum)}
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-100 dark:border-gray-800">
                  {renderValue(feature.custom)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
