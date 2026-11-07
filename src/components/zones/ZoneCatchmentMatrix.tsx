import React from 'react';
import { useApp } from '../../context/AppContext';
import { ZONES_AND_DISTRICTS } from '../../data/zonesAndDistrictsData';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { Shield, MapPin, Building, ChevronRight, CheckCircle2 } from 'lucide-react';

export const ZoneCatchmentMatrix: React.FC = () => {
  const { setSelectedFranchise } = useApp();

  const apZones = ZONES_AND_DISTRICTS.filter((z) => z.state === 'Andhra Pradesh');
  const tgZones = ZONES_AND_DISTRICTS.filter((z) => z.state === 'Telangana');

  const renderZoneSection = (title: string, zones: typeof ZONES_AND_DISTRICTS, badgeColor: string) => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider ${badgeColor}`}>
          {title}
        </span>
        <span className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] font-bold">4 Approved Regional Zones</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {zones.map((zone) => {
          const franchise = FRANCHISES_DATA.find((f) => f.id === zone.franchiseId);

          return (
            <div
              key={zone.zoneId}
              className="glass-card p-6 flex flex-col justify-between space-y-4 border-2 border-black/10 dark:border-white/10 hover:border-[#FF5500]/40 transition-all duration-200 shadow-sm dark:shadow-tactile"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm bg-[var(--kreeda-surface-elevated)] flex-shrink-0">
                      {franchise?.crestImage ? (
                        <img src={franchise.crestImage} alt={franchise.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bebas text-base font-bold text-[var(--kreeda-text-primary)]">
                          {franchise?.shortCode}
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500]">
                        {zone.zoneName}
                      </span>
                      <h3 className="font-bebas text-2xl sm:text-3xl text-[var(--kreeda-text-primary)] mt-0.5">
                        {zone.franchiseName}
                      </h3>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-[var(--kreeda-text-muted)] block font-medium">Hub City</span>
                    <span className="text-xs sm:text-sm font-bold text-[#FF5500] flex items-center justify-end gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                      {zone.hub}
                    </span>
                  </div>
                </div>

                {/* District Tags */}
                <div>
                  <div className="text-xs font-bold text-[var(--kreeda-text-secondary)] uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Mapped Catchment Districts ({zone.districts.length}):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.districts.map((d) => (
                      <span
                        key={d}
                        className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-medium text-[var(--kreeda-text-primary)]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <button
                  onClick={() => franchise && setSelectedFranchise(franchise)}
                  className="font-bebas text-base tracking-wider uppercase font-bold text-[#FF5500] hover:text-[#FF661A] flex items-center gap-1.5 transition btn-tactile"
                >
                  <span>View Franchise Roster</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-10">
      {/* Andhra Pradesh Matrix */}
      {renderZoneSection('Andhra Pradesh Regional Matrix (DPR Table 19)', apZones, 'bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 font-black')}

      {/* Telangana Matrix */}
      {renderZoneSection('Telangana Regional Grid (DPR Table 20)', tgZones, 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 font-black')}
    </div>
  );
};
