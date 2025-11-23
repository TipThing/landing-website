import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../lib/useReducedMotion';

interface FAQItemProps {
  q: string;
  a: string;
}

export const FAQItem = ({ q, a }: FAQItemProps) => {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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
            initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-zinc-500 pb-6 leading-relaxed pr-8 text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
