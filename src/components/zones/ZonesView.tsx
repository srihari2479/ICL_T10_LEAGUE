import React, { useState } from 'react';
import { DistrictSearchTool } from './DistrictSearchTool';
import { ZoneCatchmentMatrix } from './ZoneCatchmentMatrix';
import { MapPin, Search, Grid } from 'lucide-react';

export const ZonesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'SEARCH' | 'MATRIX'>('SEARCH');

  return (
    <div className="w-full pt-3 sm:pt-5 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 xl:px-16 space-y-6 sm:space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
            <MapPin className="w-4 h-4 text-[#F59E0B]" />
            <span>DPR Table 19 &amp; 20 Mapping Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
            ZONES &amp; DISTRICT CATCHMENTS
          </h1>
          <p className="text-sm sm:text-base text-[var(--kreeda-text-secondary)] mt-1 max-w-2xl leading-relaxed">
            Locate your native or permanent residence district to discover your assigned franchise, regional hub, and open trial location.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/15 self-start md:self-auto shadow-sm">
          <button
            onClick={() => setActiveTab('SEARCH')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 btn-tactile ${
              activeTab === 'SEARCH'
                ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow'
                : 'text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Interactive District Search</span>
          </button>

          <button
            onClick={() => setActiveTab('MATRIX')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 btn-tactile ${
              activeTab === 'MATRIX'
                ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow'
                : 'text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <Grid className="w-4 h-4" />
            <span>Zone Catchment Matrix</span>
          </button>
        </div>
      </div>

      {/* Render selected view */}
      {activeTab === 'SEARCH' ? <DistrictSearchTool /> : <ZoneCatchmentMatrix />}

    </div>
  );
};
