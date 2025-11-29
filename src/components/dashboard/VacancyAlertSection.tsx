import { AlertTriangle, CalendarX, Building } from "lucide-react";
import { vacancyAlerts } from "@/data/mockData";

const VacancyAlertSection = () => {
  return (
    <section className="px-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="w-5 h-5 text-status-upcoming" />
        <h2 className="font-semibold text-foreground">Sắp trống</h2>
        <span className="ml-auto text-xs text-status-upcoming bg-status-upcoming/10 px-2 py-0.5 rounded-full font-medium">
          {vacancyAlerts.length} căn
        </span>
      </div>

      <div className="bg-card rounded-xl border border-border/50 card-shadow overflow-hidden">
        {vacancyAlerts.map((alert, index) => (
          <div
            key={alert.id}
            className={`flex items-center gap-3 p-4 ${
              index !== vacancyAlerts.length - 1 ? "border-b border-border/50" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-status-upcoming/10 flex items-center justify-center flex-shrink-0">
              <Building className="w-5 h-5 text-status-upcoming" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground text-sm truncate">
                {alert.apartmentName}
              </p>
              <p className="text-xs text-muted-foreground">{alert.unitName}</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-status-upcoming bg-status-upcoming/10 px-2.5 py-1.5 rounded-lg">
              <CalendarX className="w-3.5 h-3.5" />
              <span className="font-medium">{alert.moveOutDate}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VacancyAlertSection;
