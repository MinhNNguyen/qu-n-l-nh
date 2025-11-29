import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { AlertCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import SupportBanner from "@/components/dashboard/SupportBanner";
import MeetingsSection from "@/components/dashboard/MeetingsSection";
import UnitsSection from "@/components/dashboard/UnitsSection";
import VacancyAlertSection from "@/components/dashboard/VacancyAlertSection";
import StatusGrid from "@/components/dashboard/StatusGrid";
import FooterSection from "@/components/dashboard/FooterSection";
import { getOwnerData, defaultOwnerId } from "@/data/mockData";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const ownerId = searchParams.get("owner") || defaultOwnerId;

  const ownerData = useMemo(() => getOwnerData(ownerId), [ownerId]);

  // Invalid owner link
  if (!ownerData) {
    return (
      <div className="min-h-screen bg-background">
        <Header showMenu={false} />
        <main className="pt-14 max-w-[430px] mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="text-xl font-bold text-foreground mb-2">
              Link không hợp lệ
            </h1>
            <p className="text-muted-foreground text-sm mb-6">
              Link bạn truy cập không tồn tại hoặc đã hết hạn. Vui lòng liên hệ nhân viên hỗ trợ để nhận link mới.
            </p>
            <a
              href="/"
              className="text-primary hover:underline text-sm font-medium"
            >
              Về trang chủ
            </a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header showMenu={false} ownerName={ownerData.name} />

      <main className="pt-14 max-w-[430px] mx-auto">
        {/* Support Banner */}
        <div className="px-4 py-4">
          <SupportBanner supportInfo={ownerData.supportInfo} />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <MeetingsSection meetings={ownerData.meetings} />
          <UnitsSection units={ownerData.units} />
          <VacancyAlertSection vacancyAlerts={ownerData.vacancyAlerts} />
          <StatusGrid statusCounts={ownerData.statusCounts} />
          <FooterSection />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
