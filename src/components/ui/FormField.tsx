'use client';
import { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
}

export function FormField({ label, required, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  'border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-800 outline-none w-full focus:border-green-500 focus:ring-2 focus:ring-green-500/10 placeholder:text-gray-300 font-[inherit]';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={inputClass} {...props} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`${inputClass} resize-none`} {...props} />;
}
