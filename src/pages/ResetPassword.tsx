import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, ArrowLeft, Send, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Yêu cầu đã được gửi",
      description: "Link đặt lại mật khẩu đã được gửi qua Zalo/SĐT của bạn.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showMenu={false} />

      <main className="flex-1 flex flex-col justify-center px-6 pt-14 pb-8 max-w-[430px] mx-auto w-full">
        <div className="animate-fade-in">
          {/* Back Button */}
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Quay lại đăng nhập</span>
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-accent mx-auto mb-4 flex items-center justify-center">
              <KeyRound className="w-8 h-8 text-accent-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Quên mật khẩu?
            </h1>
            <p className="text-muted-foreground text-sm">
              Nhập số điện thoại để nhận link đặt lại mật khẩu
            </p>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Số điện thoại
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0901 234 567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-11 h-12"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-base font-semibold gap-2">
                <Send className="w-5 h-5" />
                Gửi yêu cầu
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-status-rented/10 mx-auto flex items-center justify-center">
                <Send className="w-8 h-8 text-status-rented" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Yêu cầu đã được gửi!
                </p>
                <p className="text-sm text-muted-foreground">
                  Vui lòng kiểm tra Zalo hoặc tin nhắn SMS để nhận link đặt lại mật khẩu.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => navigate("/login")}
                className="mt-4"
              >
                Quay lại đăng nhập
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;
