import { CommunityPhoto } from "@/components/community-photo";
import { photos } from "@/content/photos";

const mosaic = [
  photos.pairBuilding,
  photos.mentorship,
  photos.learnerHome,
  photos.teaching
];

export function CommunityMosaic() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {mosaic.map((p) => (
        <CommunityPhoto
          key={p.src}
          src={p.src}
          alt={p.alt}
          className="aspect-[4/5] sm:aspect-square"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      ))}
    </div>
  );
}
