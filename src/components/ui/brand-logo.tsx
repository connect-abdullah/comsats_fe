import Image from "next/image";
import { cn } from "@/lib/utils";
import { getImageLoadingProps } from "@/lib/image-loading";
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
      {...getImageLoadingProps({ priority })}
      className={cn("rounded-full object-contain", className)}
    />
  );
}
