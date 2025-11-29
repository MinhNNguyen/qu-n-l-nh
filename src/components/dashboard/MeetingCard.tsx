import { Calendar, Clock, User, Building } from "lucide-react";
import { Meeting } from "@/data/mockData";

interface MeetingCardProps {
  meeting: Meeting;
  index: number;
}

const MeetingCard = ({ meeting, index }: MeetingCardProps) => {
  return (
    <div
      className="meeting-card-gradient min-w-[200px] w-[200px] rounded-xl p-4 text-primary-foreground flex-shrink-0 card-shadow animate-slide-in-right"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1.5 bg-primary-foreground/20 rounded-full px-2.5 py-1">
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-xs font-medium">{meeting.date}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-primary-foreground/20 rounded-full px-2.5 py-1">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-xs font-medium">{meeting.time}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 opacity-80" />
          <span className="text-sm font-medium truncate">{meeting.renterName}</span>
        </div>
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 opacity-80" />
          <span className="text-xs opacity-90 truncate">
            {meeting.buildingName} - {meeting.unitNumber}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
