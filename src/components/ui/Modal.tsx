'use client';
import { useEffect, ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'md' | 'lg';
}

export default function Modal({ open, onClose, title, children, size = 'lg' }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/45 z-[200] flex items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className={`bg-white rounded-2xl p-7 relative max-h-[90vh] overflow-y-auto ${
          size === 'lg' ? 'w-[760px] max-w-[95vw]' : 'w-[480px] max-w-[95vw]'
        }`}
      >
        {title && <div className="text-xl font-bold text-gray-800 mb-6 text-center">{title}</div>}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-lg text-gray-400 hover:bg-gray-50"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
