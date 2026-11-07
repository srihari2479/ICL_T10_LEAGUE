import React, { useState } from 'react';
import { FAQ_DATA } from '../../data/faqData';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone, 
  ShieldAlert, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  MapPin 
} from 'lucide-react';

export const HelpdeskView: React.FC = () => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const [supportName, setSupportName] = useState('');
  const [supportEmail, setSupportEmail] = useState('');
  const [supportSubject, setSupportSubject] = useState('Player Registration Query');
  const [supportMessage, setSupportMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    if (selectedCategory === 'ALL') return true;
    return faq.category === selectedCategory;
  });

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSupportName('');
      setSupportEmail('');
      setSupportMessage('');
      alert('Your inquiry has been logged! Helpdesk token: ICL-HD-2026-9912. Response within 6 hours.');
    }, 1500);
  };

  return (
    <div className="w-full pt-3 sm:pt-5 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8 sm:space-y-10">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
          <HelpCircle className="w-4 h-4 text-[#F59E0B]" />
          <span>Support &amp; Grievance Cell</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
          HELPDESK, FAQS &amp; INQUIRIES
        </h1>
        <p className="text-sm sm:text-base text-[var(--kreeda-text-secondary)] mt-1 max-w-2xl leading-relaxed">
          Get verified answers regarding player trials, district eligibility, ticket bookings, QR turnstiles, and governance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 8 Cols: FAQ Accordion */}
        <div className="lg:col-span-8 space-y-5">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {['ALL', 'Registrations', 'Catchments & Franchises', 'Tickets', 'Kreeda App'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition btn-tactile ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow'
                    : 'text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10'
                }`}
              >
                {cat === 'ALL' ? 'All Questions' : cat}
              </button>
            ))}
          </div>

          {/* Accordion Items */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = activeFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`glass-card overflow-hidden transition-all duration-200 border-2 ${
                    isOpen ? 'border-[#FF5500] bg-orange-500/5' : 'border-black/10 dark:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-[var(--kreeda-text-primary)] hover:text-[#FF5500] transition"
                  >
                    <span className="flex-1 leading-snug">{faq.question}</span>
                    <span className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 text-[#FF5500] flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[var(--kreeda-text-secondary)] leading-relaxed border-t border-black/10 dark:border-white/10 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Anti-Corruption & Ethics Official Security Card */}
          <div className="glass-card p-5 sm:p-6 border-2 border-[#F59E0B]/35 bg-[var(--kreeda-surface)] flex items-start gap-4 text-xs sm:text-sm shadow-sm dark:shadow-tactile">
            <div className="p-2.5 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/25 flex-shrink-0">
              <ShieldAlert className="w-5 h-5 text-[#FF5500]" />
            </div>
            <div className="space-y-1">
              <span className="font-bebas text-base sm:text-lg text-[#FF5500] dark:text-[#FFCD80] uppercase tracking-wider block">
                INTEGRITY &amp; ANTI-CORRUPTION HOTLINE
              </span>
              <p className="text-[var(--kreeda-text-secondary)] text-xs sm:text-sm leading-relaxed">
                ICL T10 enforces a zero-tolerance policy against betting, bribery, and age/district fraud. To report irregularities confidentially, email: <strong className="text-[var(--kreeda-text-primary)] font-semibold">integrity@iclt10cricket.com</strong>.
              </p>
            </div>
          </div>

        </div>

        {/* Right 4 Cols: Contact & Grievance Desk */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Submit Query Form */}
          <div className="glass-card p-6 sm:p-7 space-y-5 border-2 border-black/10 dark:border-white/10 shadow-xl">
            <div className="flex items-center gap-2.5 pb-3 border-b border-black/10 dark:border-white/10">
              <MessageSquare className="w-5 h-5 text-[#FF5500]" />
              <h3 className="font-bebas text-xl text-[var(--kreeda-text-primary)] tracking-wider uppercase">
                DIRECT HELPDESK TICKET
              </h3>
            </div>

            <form onSubmit={handleSupportSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[var(--kreeda-text-secondary)] mb-1.5 uppercase">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={supportName}
                  onChange={(e) => setSupportName(e.target.value)}
                  placeholder="e.g. Murali Krishna"
                  className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--kreeda-text-secondary)] mb-1.5 uppercase">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                  placeholder="murali@gmail.com"
                  className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--kreeda-text-secondary)] mb-1.5 uppercase">
                  Department *
                </label>
                <select
                  value={supportSubject}
                  onChange={(e) => setSupportSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] text-sm focus:outline-none focus:border-[#FF5500]"
                >
                  <option value="Player Registration Query">Player Trials &amp; Catchment Verification</option>
                  <option value="Influencer Accreditation">Creator / Influencer Portal</option>
                  <option value="Ticketing & QR Support">Tickets &amp; Stadium Access</option>
                  <option value="Commercial Inquiry">Commercial Sponsorship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--kreeda-text-secondary)] mb-1.5 uppercase">
                  Message Description *
                </label>
                <textarea
                  rows={3}
                  value={supportMessage}
                  onChange={(e) => setSupportMessage(e.target.value)}
                  placeholder="Describe your issue or inquiry..."
                  className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bebas text-lg tracking-wider uppercase font-black flex items-center justify-center gap-2.5 transition active:scale-95 shadow-orange-glow btn-tactile"
              >
                {submitted ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <Send className="w-5 h-5 text-white" />
                )}
                <span>{submitted ? 'Logging Ticket...' : 'Send to Support Desk'}</span>
              </button>
            </form>
          </div>

          {/* Quick Contact Points */}
          <div className="glass-card p-6 space-y-3 text-xs sm:text-sm text-[var(--kreeda-text-secondary)] border border-black/10 dark:border-white/10 shadow-sm dark:shadow-tactile">
            <div className="font-bebas text-lg text-[var(--kreeda-text-primary)] uppercase tracking-wider">
              OFFICIAL LEAGUE SECRETARIATS
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#FF5500]" />
              <span>Helpline: +91 40 2345 6789 (Mon-Sat, 9AM-7PM)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#F59E0B]" />
              <span>General Desk: support@iclt10cricket.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Hyderabad HQ &amp; Visakhapatnam Coastal Bureau</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
