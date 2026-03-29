'use client';
import Modal from '@/components/ui/Modal';
import { FormField, Input, Textarea } from '@/components/ui/FormField';

interface NewOrderModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { orderId: string }) => void;
}

const PhoneRow = ({ label }: { label: string }) => (
  <FormField label={label} required>
    <div className="flex gap-2">
      <div className="border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] font-semibold text-gray-800 bg-gray-50 min-w-[56px] text-center">+1</div>
      <Input placeholder="(000) 000-0000" className="flex-1" />
    </div>
  </FormField>
);

export default function NewOrderModal({ open, onClose, onSubmit }: NewOrderModalProps) {
  const handleSave = () => {
    onSubmit({ orderId: `#${1043 + Math.floor(Math.random() * 10)}` });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="New Order" size="lg">
      <div className="grid grid-cols-2 gap-6">
        {/* Left column */}
        <div>
          <FormField label="Order Number" required>
            <Input placeholder="Enter order number" />
          </FormField>

          <div className="text-[15px] font-semibold text-gray-800 mt-4 mb-3">Pick-up From:</div>

          <div className="space-y-4">
            <FormField label="Name" required>
              <div className="flex gap-1.5">
                <Input placeholder="Enter store name" className="flex-1" />
                <button className="w-9 h-[38px] border border-gray-200 rounded-lg bg-gray-50 cursor-pointer flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-gray-300" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </button>
              </div>
            </FormField>
            <PhoneRow label="Phone No" />
            <FormField label="Address" required>
              <div className="flex gap-2 items-start">
                <Textarea placeholder="Enter a location" rows={2} className="flex-1" />
                <button className="w-[38px] h-[38px] border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center cursor-pointer flex-shrink-0">
                  <svg className="w-4 h-4 fill-gray-300" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </button>
              </div>
            </FormField>
            <FormField label="Pickup Time" required>
              <Input defaultValue="09:34 AM" />
            </FormField>
          </div>

          <div className="text-[15px] font-semibold text-gray-800 mt-4 mb-3">Deliver to:</div>

          <div className="space-y-4">
            <FormField label="Name" required>
              <div className="flex gap-1.5">
                <Input placeholder="Enter customer name" className="flex-1" />
                <button className="w-9 h-[38px] border border-gray-200 rounded-lg bg-gray-50 cursor-pointer flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-gray-300" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </button>
              </div>
            </FormField>
            <PhoneRow label="Phone No" />
            <FormField label="Email">
              <Input placeholder="Enter an email" />
            </FormField>
          </div>
        </div>

        {/* Right column */}
        <div>
          <div className="text-[15px] font-semibold text-gray-800 mb-3">
            Order Details <span className="text-[13px] font-normal text-gray-400">(Optional)</span>
          </div>
          <div className="mb-2.5">
            <div className="text-[13px] font-medium text-gray-800 mb-1.5">Items:</div>
            <div className="grid gap-2" style={{ gridTemplateColumns: '1fr 80px 60px' }}>
              <Input placeholder="Name" />
              <Input placeholder="Price" />
              <Input placeholder="qty" />
            </div>
          </div>

          {[
            { label: 'Subtotal ($):', value: '0', readOnly: true },
            { label: 'Tax Rate %:', placeholder: 'Enter tax rate', readOnly: false },
            { label: 'Tax ($):', value: '0', readOnly: true },
            { label: 'Delivery Fees ($):', placeholder: 'Enter delivery fees', readOnly: false },
            { label: 'Delivery Tips ($):', placeholder: 'Enter delivery tips amount', readOnly: false },
            { label: 'Discount ($):', placeholder: 'Enter discount amount', readOnly: false },
            { label: 'Total($):', value: '0', readOnly: true },
          ].map(({ label, value, placeholder, readOnly }) => (
            <div key={label} className="flex items-center gap-2 mb-2.5">
              <span className="text-[13px] text-gray-400 min-w-[130px] text-right">{label}</span>
              {readOnly ? (
                <span className="text-[13px] font-medium text-gray-800 flex-1">{value}</span>
              ) : (
                <Input placeholder={placeholder} className="max-w-[180px]" />
              )}
            </div>
          ))}

          <div className="my-2.5">
            <div className="text-[13px] text-gray-400 mb-1.5">Delivery Instruction:</div>
            <Textarea placeholder="Enter delivery instructions" rows={2} className="w-full" />
          </div>

          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-[13px] text-gray-400 min-w-[130px] text-right">Payment Method:</span>
            <Input className="max-w-[180px]" />
          </div>
          <div className="text-right text-xs text-gray-400 mt-2">
            <span className="text-red-500">*</span> Required
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
        <button onClick={onClose} className="bg-white border border-gray-200 rounded-lg px-5 py-2.5 text-[13px] font-medium cursor-pointer text-gray-700 hover:bg-gray-50">
          Cancel
        </button>
        <button onClick={handleSave} className="bg-green-500 hover:bg-green-600 border-none rounded-lg px-6 py-2.5 text-[13px] font-bold cursor-pointer text-white transition-colors">
          Save Order
        </button>
      </div>
    </Modal>
  );
}
