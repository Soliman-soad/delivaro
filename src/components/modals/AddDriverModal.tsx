'use client';
import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import { FormField, Input, Textarea } from '@/components/ui/FormField';
import { Driver } from '@/types';

interface AddDriverModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (driver: Driver) => void;
}

export default function AddDriverModal({ open, onClose, onSave }: AddDriverModalProps) {
  const [name, setName] = useState('');
  const [showPw, setShowPw] = useState(false);

  const handleSave = () => {
    const trimmed = name.trim() || 'New Driver';
    onSave({
      name: trimmed,
      initials: trimmed.slice(0, 2).toUpperCase(),
      color: '#6366f1',
      rating: 'N/A',
      orders: 0,
      earning: '$0',
      vehicle: 'car',
      status: 'offduty',
    });
    setName('');
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} size="md">
      <div className="text-lg font-bold text-gray-800 mb-5">Add a new driver</div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <FormField label="Name" required>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormField>
        <FormField label="Phone No" required>
          <div className="flex gap-2">
            <div className="border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] font-semibold text-gray-800 bg-gray-50 min-w-[56px] text-center">+1</div>
            <Input className="flex-1" />
          </div>
        </FormField>
      </div>

      <div className="mb-4">
        <FormField label="Email" required>
          <Input />
        </FormField>
      </div>

      <div className="mb-4">
        <FormField label="Temporary password" required>
          <div className="relative">
            <Input type={showPw ? 'text' : 'password'} className="pr-10" />
            <button
              type="button"
              onClick={() => setShowPw((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 border-none bg-transparent"
            >
              <svg className="w-[18px] h-[18px] fill-gray-400" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </button>
          </div>
        </FormField>
      </div>

      <div className="mb-4">
        <FormField label="Note">
          <Textarea rows={4} />
        </FormField>
      </div>

      <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
        <button onClick={onClose} className="bg-white border border-gray-200 rounded-lg px-5 py-2.5 text-[13px] font-medium cursor-pointer text-gray-700 hover:bg-gray-50">
          Cancel
        </button>
        <button onClick={handleSave} className="bg-green-500 hover:bg-green-600 border-none rounded-lg px-6 py-2.5 text-[13px] font-bold cursor-pointer text-white transition-colors">
          Save
        </button>
      </div>
    </Modal>
  );
}
