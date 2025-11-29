import { 
  Camera, 
  Facebook, 
  MessageCircle, 
  Eye, 
  Calendar, 
  UserCheck,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Unit } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

interface UnitCardProps {
  unit: Unit;
  index: number;
}

const UnitCard = ({ unit, index }: UnitCardProps) => {
  const getStatusConfig = () => {
    switch (unit.status) {
      case 'setup-marketing':
        return {
          label: "Đang chuẩn bị hình ảnh",
          color: "bg-muted text-muted-foreground",
          dotColor: "status-upcoming",
        };
      case 'on-sale':
        return {
          label: "Đang chào bán",
          color: "bg-status-on-sale/10 text-status-on-sale",
          dotColor: "status-on-sale",
        };
      case 'on-deposit':
        return {
          label: "Đã nhận cọc",
          color: "bg-status-rented/10 text-status-rented",
          dotColor: "status-rented",
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div
      className="bg-card rounded-xl p-4 card-shadow border border-border/50 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{unit.name}</h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{unit.address}</span>
          </div>
        </div>
        <Badge className={`${config.color} text-xs font-medium shrink-0 ml-2`}>
          <span className={`status-dot ${config.dotColor} mr-1.5`} />
          {config.label}
        </Badge>
      </div>

      {/* Status-specific content */}
      {unit.status === 'setup-marketing' && (
        <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 rounded-lg p-3">
          <Camera className="w-5 h-5" />
          <span className="text-sm">Đang chờ chụp ảnh và quay video...</span>
        </div>
      )}

      {unit.status === 'on-sale' && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">Hỏi thăm</span>
              </div>
              <p className="text-xl font-bold text-foreground">{unit.inquiries}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-1">
                <Eye className="w-4 h-4" />
                <span className="text-xs">Yêu cầu xem</span>
              </div>
              <p className="text-xl font-bold text-foreground">{unit.viewingRequests}</p>
            </div>
          </div>
          <a
            href={unit.facebookPostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-primary/10 text-primary py-2.5 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            <Facebook className="w-4 h-4" />
            Xem bài đăng Facebook
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {unit.status === 'on-deposit' && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <UserCheck className="w-4 h-4 text-status-rented" />
            <span className="text-muted-foreground">Khách thuê:</span>
            <span className="font-medium text-foreground">{unit.tenantName}</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="bg-status-rented/5 border border-status-rented/20 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">Cọc hết hạn</p>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-status-rented" />
                <span className="font-semibold text-sm text-foreground">{unit.depositExpiryDate}</span>
              </div>
            </div>
            <div className="bg-status-rented/5 border border-status-rented/20 rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">Ngày vào ở</p>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-status-rented" />
                <span className="font-semibold text-sm text-foreground">{unit.moveInDate}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnitCard;
