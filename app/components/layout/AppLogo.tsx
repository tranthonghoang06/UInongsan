import Image from 'next/image';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export default function AppLogo({ className = '', size = 40 }: AppLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Logo PIONE GROUP"
      width={size}
      height={size}
      unoptimized
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
