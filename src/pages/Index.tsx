import { useNavigate } from "react-router-dom";
import { Home, Building2, Users, TrendingUp, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Building2,
      title: "Quản lý căn hộ",
      description: "Theo dõi trạng thái tất cả căn hộ của bạn một cách dễ dàng",
    },
    {
      icon: Users,
      title: "Lịch hẹn khách thuê",
      description: "Xem và quản lý lịch hẹn xem nhà với khách thuê tiềm năng",
    },
    {
      icon: TrendingUp,
      title: "Báo cáo tổng quan",
      description: "Thống kê chi tiết về tình trạng cho thuê của tài sản",
    },
  ];

  const benefits = [
    "Tiết kiệm thời gian quản lý",
    "Theo dõi thời gian thực",
    "Hỗ trợ 24/7",
    "Giao diện dễ sử dụng",
  ];

  // Demo links for testing
  const demoLinks = [
    { id: "owner001", name: "Anh Minh Quang", units: 5 },
    { id: "owner002", name: "Chị Thu Hà", units: 2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showMenu={false} />

      <main className="pt-14 max-w-[430px] mx-auto">
        {/* Hero Section */}
        <section className="px-6 py-12 text-center">
          <div className="animate-fade-in">
            <div className="w-20 h-20 rounded-3xl bg-primary mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Home className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Lyfe Property
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Giải pháp quản lý bất động sản cho thuê thông minh và chuyên nghiệp
            </p>
          </div>
        </section>

        {/* Demo Access Section */}
        <section className="px-6 py-6 bg-primary/5 border-t border-b border-primary/10">
          <h2 className="font-semibold text-foreground mb-4 text-center">
            Xem Dashboard Demo
          </h2>
          <div className="space-y-2">
            {demoLinks.map((demo) => (
              <button
                key={demo.id}
                onClick={() => navigate(`/dashboard?owner=${demo.id}`)}
                className="w-full flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors card-shadow"
              >
                <div className="text-left">
                  <p className="font-medium text-foreground">{demo.name}</p>
                  <p className="text-xs text-muted-foreground">{demo.units} căn hộ đang quản lý</p>
                </div>
                <ExternalLink className="w-5 h-5 text-primary" />
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Mỗi chủ nhà sẽ nhận được link riêng để xem thông tin
          </p>
        </section>

        {/* Features Section */}
        <section className="px-6 py-8 bg-card border-b border-border">
          <h2 className="font-semibold text-foreground mb-6 text-center">
            Tính năng nổi bật
          </h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-4 bg-background rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 py-8">
          <h2 className="font-semibold text-foreground mb-4 text-center">
            Lợi ích khi sử dụng
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center gap-2 p-3 bg-status-rented/5 rounded-lg border border-status-rented/20 animate-scale-in"
                style={{ animationDelay: `${300 + index * 50}ms` }}
              >
                <CheckCircle className="w-4 h-4 text-status-rented flex-shrink-0" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-8 pb-12">
          <div className="bg-primary rounded-2xl p-6 text-center text-primary-foreground animate-fade-in">
            <h2 className="font-bold text-xl mb-2">Bạn là chủ nhà?</h2>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Liên hệ để nhận link dashboard riêng của bạn
            </p>
            <Button
              variant="secondary"
              className="font-semibold"
              onClick={() => window.location.href = "tel:19001234"}
            >
              Liên hệ ngay: 1900 1234
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
