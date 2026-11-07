import React from 'react';
import { Shield, Map, Timer, Trophy, Users, Award } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const stats = [
    { label: 'Regional Franchises', value: '8', icon: Shield, color: 'text-[#FF5500]', bg: 'bg-[#FF5500]/10', border: 'border-[#FF5500]/30', sub: 'AP & TG Powerhouses' },
    { label: 'Telugu States', value: '2', icon: Map, color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10', border: 'border-[#F59E0B]/30', sub: 'Andhra & Telangana' },
    { label: 'Catchment Districts', value: '45+', icon: Users, color: 'text-[#FF661A]', bg: 'bg-[#FF661A]/10', border: 'border-[#FF661A]/30', sub: '100% Talent Mapping' },
    { label: 'Balls Per Innings', value: '60', icon: Timer, color: 'text-[var(--kreeda-text-primary)]', bg: 'bg-black/5 dark:bg-white/10', border: 'border-black/10 dark:border-white/20', sub: '10 High-Octane Overs' },
    { label: 'Championship Trophy', value: '1', icon: Trophy, color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10', border: 'border-[#F59E0B]/30', sub: 'Silverware of Pride' },
  ];

  return (
    <section className="py-6 sm:py-8 w-full px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 bg-[var(--kreeda-surface)]/40 transition-colors duration-200">
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-3.5 sm:p-4 rounded-xl bg-[var(--kreeda-surface)] hover:bg-[var(--kreeda-surface-elevated)] border ${item.border} backdrop-blur-md flex flex-col justify-between transition-all duration-200 group hover:-translate-y-0.5 shadow-sm dark:shadow-tactile`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[var(--kreeda-text-muted)] tracking-wider">
                    Official DPR
                  </span>
                </div>

                <div>
                  <div className={`font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wide leading-none ${item.color}`}>
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[var(--kreeda-text-primary)] mt-1">
                    {item.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[var(--kreeda-text-muted)] mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
