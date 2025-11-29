import { CalendarDays } from "lucide-react";
import { Meeting } from "@/data/mockData";
import MeetingCard from "./MeetingCard";

interface MeetingsSectionProps {
  meetings: Meeting[];
}

const MeetingsSection = ({ meetings }: MeetingsSectionProps) => {
  if (meetings.length === 0) {
    return (
      <section className="animate-fade-in px-4" style={{ animationDelay: "100ms" }}>
        <div className="flex items-center gap-2 mb-3">
          <CalendarDays className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-foreground">Lịch hẹn sắp tới</h2>
        </div>
        <div className="bg-muted/50 rounded-xl p-6 text-center">
          <p className="text-sm text-muted-foreground">Chưa có lịch hẹn nào</p>
        </div>
      </section>
    );
  }

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
