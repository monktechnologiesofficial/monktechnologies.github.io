import Image from "next/image";
import { cn } from "@/lib/cn";

export function CommunityPhoto({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  rounded = "rounded-2xl"
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", rounded, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
