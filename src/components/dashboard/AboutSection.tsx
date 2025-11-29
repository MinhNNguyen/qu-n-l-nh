import { Award, Building2, ThumbsUp, UserCircle } from "lucide-react";
import { companyInfo } from "@/data/mockData";

const AboutSection = () => {
  const stats = [
    { icon: Award, label: companyInfo.experience },
    { icon: Building2, label: companyInfo.properties },
    { icon: ThumbsUp, label: companyInfo.satisfaction },
  ];

  return (
    <div className="bg-card rounded-xl p-4 card-shadow border border-border/50 h-full flex flex-col">
      <h3 className="font-semibold text-foreground mb-3">Về Lyfe</h3>

      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <UserCircle className="w-8 h-8 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{companyInfo.leaderName}</p>
          <p className="text-xs text-muted-foreground">{companyInfo.leaderTitle}</p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
        {companyInfo.description}
      </p>

      <div className="space-y-2">
        {stats.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-xs">
            <Icon className="w-3.5 h-3.5 text-primary" />
            <span className="text-foreground font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
