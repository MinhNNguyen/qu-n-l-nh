import { Headphones, Phone } from "lucide-react";

interface SupportBannerProps {
  supportInfo: {
    name: string;
    phone: string;
  };
}

const SupportBanner = ({ supportInfo }: SupportBannerProps) => {
  return (
    <div className="support-banner rounded-lg px-4 py-3 flex items-center gap-3 animate-fade-in">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Headphones className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground">Nhân viên hỗ trợ</p>
        <p className="font-medium text-sm text-foreground truncate">
          {supportInfo.name}
        </p>
      </div>
      <a
        href={`tel:${supportInfo.phone.replace(/\s/g, "")}`}
        className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden min-[400px]:inline">{supportInfo.phone}</span>
      </a>
    </div>
  );
};

export default SupportBanner;
