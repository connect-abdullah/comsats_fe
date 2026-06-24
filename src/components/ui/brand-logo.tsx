import Image from "next/image";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/constants/shared/images";

interface BrandLogoProps {
  size?: number;
  priority?: boolean;
  className?: string;
}

export function BrandLogo({
  size = 48,
  priority = false,
  className,
}: BrandLogoProps) {
  return (
    <Image
      src={IMAGES.brand.logo}
      alt="COMSATS University Islamabad"
      width={size}
      height={size}
      priority={priority}
      className={cn("rounded-full object-contain", className)}
    />
  );
}
