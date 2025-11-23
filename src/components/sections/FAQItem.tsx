import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  q: string;
  a: string;
}

export const FAQItem = ({ q, a }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-white transition-colors text-zinc-400"
      >
        <span className="text-sm font-medium">{q}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-zinc-500 pb-6 leading-relaxed pr-8 text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
