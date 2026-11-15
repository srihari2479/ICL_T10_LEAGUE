import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ALL_DISTRICTS_LIST, ZONES_AND_DISTRICTS } from '../../data/zonesAndDistrictsData';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { Search, MapPin, Shield, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const DistrictSearchTool: React.FC = () => {
  const { setCurrentPage, setSelectedFranchise } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<'ALL' | 'Andhra Pradesh' | 'Telangana'>('ALL');

  const filteredDistricts = ALL_DISTRICTS_LIST.filter((d) => {
    const matchesState = selectedState === 'ALL' || d.state === selectedState;
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.franchiseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.hub.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesSearch;
  });

  const handleApplyWithDistrict = (district: string) => {
    setCurrentPage('register-player');
  };

  const handleViewFranchise = (franchiseId: string) => {
    const f = FRANCHISES_DATA.find((item) => item.id === franchiseId);
    if (f) setSelectedFranchise(f);
  };

  return (
    <div className="space-y-8">
      
      {/* Search Bar & State Filter */}
      <div className="glass-card p-3.5 xs:p-5 sm:p-7 space-y-4 sm:space-y-5 border border-black/10 dark:border-white/10 shadow-sm dark:shadow-tactile">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          
          {/* Input Box - Larger, High UX */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-[#FF5500] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your district (e.g. Srikakulam, Warangal, NTR, Kadapa, Hyderabad)..."
              className="w-full pl-11 pr-11 xs:pl-12 xs:pr-12 py-3 xs:py-3.5 rounded-xl sm:rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-xs sm:text-base focus:outline-none focus:border-[#FF5500] transition shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--kreeda-text-muted)] hover:text-[var(--kreeda-text-primary)] text-xs font-bold px-2 py-1 bg-black/5 dark:bg-white/10 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* State Filter Pills */}
          <div className="w-full sm:w-auto grid grid-cols-3 sm:flex items-center gap-1 p-1 rounded-xl sm:rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 self-start md:self-auto shadow-sm">
            {(['ALL', 'Andhra Pradesh', 'Telangana'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setSelectedState(st)}
                className={`px-2 xs:px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] xs:text-xs sm:text-sm font-bold transition btn-tactile text-center justify-center whitespace-nowrap ${
                  selectedState === st
                    ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow'
                    : 'text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)]'
                }`}
              >
                {st === 'ALL' ? 'All (57)' : st === 'Andhra Pradesh' ? 'AP (26)' : 'TG (31)'}
              </button>
            ))}
          </div>

        </div>

        {/* Search Results Summary */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-[var(--kreeda-text-secondary)] pt-2 border-t border-black/10 dark:border-white/10">
          <span>
            Showing <strong className="text-[var(--kreeda-text-primary)] font-bold">{filteredDistricts.length}</strong> matching districts
          </span>
          <span className="text-[#FF5500] font-semibold text-xs hidden sm:inline">
            *Click "Apply from this District" to auto-route your player trial registration
          </span>
        </div>
      </div>

      {/* Results Grid - 3 Columns on LG, 2 on MD, 1 on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
        {filteredDistricts.map((item, index) => {
          const franchise = FRANCHISES_DATA.find((f) => f.id === item.franchiseId);

          return (
            <div
              key={`${item.name}-${index}`}
              className="glass-card p-3.5 xs:p-5 flex flex-col justify-between space-y-3.5 xs:space-y-4 group hover:border-[#FF5500]/40 transition-all duration-200 shadow-sm dark:shadow-tactile border border-black/10 dark:border-white/10"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] xs:text-xs uppercase font-bold tracking-wider px-2 xs:px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)]">
                      {item.state}
                    </span>
                    <h3 className="font-bebas text-lg sm:text-xl text-[var(--kreeda-text-primary)] mt-1 sm:group-hover:text-[#FF5500] transition truncate">
                      {item.name}
                    </h3>
                  </div>

                  {/* Kreeda Crest Thumbnail */}
                  <div className="w-11 h-11 xs:w-12 xs:h-12 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm bg-[var(--kreeda-surface-elevated)] flex-shrink-0">
                    {franchise?.crestImage ? (
                      <img src={franchise.crestImage} alt={franchise.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bebas text-base text-white">
                        {franchise?.shortCode}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-black/10 dark:border-white/10 space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[var(--kreeda-text-secondary)] font-semibold flex-shrink-0 text-xs">Assigned Franchise:</span>
                    <button
                      onClick={() => handleViewFranchise(item.franchiseId)}
                      className="font-black text-[#FF5500] hover:underline text-right truncate text-xs sm:text-sm"
                    >
                      {item.franchiseName}
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-2 text-[11px] xs:text-xs">
                    <span className="text-[var(--kreeda-text-secondary)] font-semibold flex-shrink-0">Regional Zone:</span>
                    <span className="text-[var(--kreeda-text-primary)] font-bold text-right truncate">{item.zoneName}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 text-[11px] xs:text-xs">
                    <span className="text-[var(--kreeda-text-secondary)] font-semibold flex-shrink-0">Selection Hub:</span>
                    <span className="text-[#FF5500] dark:text-[#F59E0B] font-black flex items-center justify-end gap-1 text-right flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                      {item.hub}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center gap-2">
                <button
                  onClick={() => handleApplyWithDistrict(item.name)}
                  className="w-full py-2.5 px-3 xs:px-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bebas text-sm sm:text-base tracking-wider uppercase font-bold flex items-center justify-center gap-1.5 transition btn-tactile shadow-orange-glow whitespace-nowrap"
                >
                  <span>Apply from this District</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
