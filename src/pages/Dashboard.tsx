import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import SupportBanner from "@/components/dashboard/SupportBanner";
import MeetingsSection from "@/components/dashboard/MeetingsSection";
import UnitsSection from "@/components/dashboard/UnitsSection";
import VacancyAlertSection from "@/components/dashboard/VacancyAlertSection";
import StatusGrid from "@/components/dashboard/StatusGrid";
import FooterSection from "@/components/dashboard/FooterSection";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showMenu={true} onLogout={handleLogout} />

      <main className="pt-14 max-w-[430px] mx-auto">
        {/* Support Banner */}
        <div className="px-4 py-4">
          <SupportBanner />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <MeetingsSection />
          <UnitsSection />
          <VacancyAlertSection />
          <StatusGrid />
          <FooterSection />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
