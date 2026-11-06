import { cls } from "@/lib/utils";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

interface AvatarAuthorProps {
  imageSrc?: string;
  videoSrc?: string;
  name: string;
  role: string;
  className?: string;
}

const AvatarAuthor = ({ imageSrc, videoSrc, name, role, className }: AvatarAuthorProps) => (
  <div className={cls("flex items-center gap-3", className)}>
    <ImageOrVideo
      imageSrc={imageSrc}
      videoSrc={videoSrc}
      className="size-10 md:size-11 2xl:size-12 rounded-full object-cover"
    />
    <div className="flex flex-col min-w-0">
      <span className="text-base text-foreground font-semibold leading-snug truncate">{name}</span>
      <span className="text-base text-foreground/75 leading-snug truncate">{role}</span>
    </div>
  </div>
);

export default AvatarAuthor;
