import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full px-3 pointer-events-none">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';
        const isInfo = toast.type === 'info';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-3.5 rounded-xl border shadow-xl backdrop-blur-md flex items-start justify-between gap-3 animate-in slide-in-from-bottom-3 duration-200 ${
              isSuccess
                ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-100'
                : isError
                ? 'bg-rose-950/90 border-rose-500/40 text-rose-100'
                : 'bg-[#10192A]/90 border-amber-500/40 text-slate-100'
            }`}
          >
            <div className="flex items-start gap-2.5">
              {isSuccess && <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />}
              {isError && <AlertCircle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />}
              {isInfo && <Info className="w-4 h-4 text-[#FF5500] mt-0.5 flex-shrink-0" />}

              <div>
                <div className="font-bold text-xs">{toast.title}</div>
                {toast.description && (
                  <div className="text-[11px] opacity-80 mt-0.5 leading-snug">
                    {toast.description}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-white/60 hover:text-white p-0.5 transition"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
