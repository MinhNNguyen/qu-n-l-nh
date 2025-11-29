import { Building2 } from "lucide-react";
import { Unit } from "@/data/mockData";
import UnitCard from "./UnitCard";

interface UnitsSectionProps {
  units: Unit[];
}

const UnitsSection = ({ units }: UnitsSectionProps) => {
  if (units.length === 0) {
    return (
      <section className="px-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="flex items-center gap-2 mb-3">
          <Building2 className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-foreground">Căn hộ đang bán</h2>
        </div>
        <div className="bg-muted/50 rounded-xl p-6 text-center">
          <p className="text-sm text-muted-foreground">Chưa có căn hộ nào đang bán</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center gap-2 mb-3">
        <Building2 className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-foreground">Căn hộ đang bán</h2>
        <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
          {units.length} căn
        </span>
      </div>
      
      <div className="space-y-3">
        {units.map((unit, index) => (
          <UnitCard key={unit.id} unit={unit} index={index} />
        ))}
      </div>
    </section>
  );
};

export default UnitsSection;
