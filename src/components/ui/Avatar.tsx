'use client';

interface AvatarProps {
  initials: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_MAP = { sm: 'w-[34px] h-[34px] text-xs', md: 'w-9 h-9 text-sm', lg: 'w-10 h-10 text-sm' };

export default function Avatar({ initials, color = '#6b7280', size = 'md', className = '' }: AvatarProps) {
  return (
    <div
      className={`rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${SIZE_MAP[size]} ${className}`}
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}
