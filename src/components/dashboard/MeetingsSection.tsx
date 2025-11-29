import { CalendarDays } from "lucide-react";
import { meetings } from "@/data/mockData";
import MeetingCard from "./MeetingCard";

const MeetingsSection = () => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "100ms" }}>
      <div className="flex items-center gap-2 mb-3 px-4">
        <CalendarDays className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-foreground">Lịch hẹn sắp tới</h2>
        <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
          {meetings.length} cuộc hẹn
        </span>
      </div>
      
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 hide-scrollbar snap-x snap-mandatory">
        {meetings.map((meeting, index) => (
          <div key={meeting.id} className="snap-start">
            <MeetingCard meeting={meeting} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetingsSection;
