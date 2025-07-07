import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, BookOpen } from "lucide-react";

interface ScheduleItem {
  day: string;
  time: string;
  topic: string;
  location: string;
}

const scheduleData: ScheduleItem[] = [
  {
    day: "ראשון",
    time: "20:00",
    topic: "הלכות שבת",
    location: "בית כנסת אור תורה"
  },
  {
    day: "שני",
    time: "19:30",
    topic: "משנה ברורה",
    location: "בית כנסת נחלת אפרים"
  },
  {
    day: "שלישי",
    time: "20:15",
    topic: "אמונה ובטחון",
    location: "בית כנסת השלום"
  },
  {
    day: "רביעי",
    time: "19:45",
    topic: "חזון איש",
    location: "בית כנסת אור תורה"
  },
  {
    day: "חמישי",
    time: "20:00",
    topic: "הלכות תפילה",
    location: "בית כנסת נחלת אפרים"
  },
  {
    day: "שישי",
    time: "10:00",
    topic: "פרשת השבוע",
    location: "בית כנסת השלום"
  },
  {
    day: "שבת",
    time: "17:00",
    topic: "שיעור מוסר",
    location: "בית כנסת אור תורה"
  }
];

const WeeklySchedule = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-golden bg-clip-text text-transparent mb-4">
          לוח השיעורים השבועי
        </h2>
        <p className="text-muted-foreground text-lg">
          שיעורי הרב אפרים עבדיאן שליט"א במהלך השבוע
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {scheduleData.map((item, index) => (
          <Card 
            key={index} 
            className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-secondary/20"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300 text-center">
                {item.day}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-right">
              <div className="flex items-center gap-2 text-foreground justify-end">
                <span className="font-medium">{item.time}</span>
                <Clock className="h-4 w-4 text-golden" />
              </div>
              
              <div className="flex items-start gap-2 text-foreground justify-end">
                <span className="font-medium leading-tight">{item.topic}</span>
                <BookOpen className="h-4 w-4 text-golden mt-0.5 flex-shrink-0" />
              </div>
              
              <div className="flex items-start gap-2 text-muted-foreground justify-end">
                <span className="text-sm leading-tight">{item.location}</span>
                <MapPin className="h-4 w-4 text-golden mt-0.5 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;