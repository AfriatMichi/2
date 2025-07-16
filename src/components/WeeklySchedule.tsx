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
    time: "20:35",
    topic: "כולל ערב",
    location: "בית הכנסת נווה רחמים"
  },
  {
    day: "שני",
    time: "19:40",
    topic: "שיעור הלכה",
    location: "בית הכנסת מקדש מעט"
  },
  {
    day: "שלישי",
    time: "20:35",
    topic: "כולל ערב",
    location: "בית הכנסת נווה רחמים"
  },
  {
    day: "רביעי",
    time: "19:40",
    topic: "שיעור הלכה",
    location: "בית הכנסת מקדש מעט"
  },
  {
    day: "חמישי",
    time: "20:35",
    topic: "כולל ערב",
    location: "בית הכנסת נווה רחמים"
  },
  {
    day: "שישי",
    time: "09:30",
    topic: "כולל בוקר",
    location: "בית הכנסת מקדש מעט"
  },
  // שבת - מספר שיעורים
  {
    day: "שבת",
    time: "07:00",
    topic: "שיעור לפני שחרית",
    location: "בית הכנסת נווה רחמים"
  },
  {
    day: "שבת",
    time: "10:15",
    topic: "בן איש חי",
    location: "בית הכנסת נווה רחמים"
  },
  {
    day: "שבת",
    time: "17:00",
    topic: "שיעור הלכה - הלכות מזוזה",
    location: "בית הכנסת נווה רחמים"
  },
  {
    day: "שבת",
    time: "18:40",
    topic: "שיעור לאחר מנחה",
    location: "בית הכנסת מקדש מעט"
  },
  {
    day: "שבת",
    time: "20:20",
    topic: "שיעור זוהר אחרי ערבית",
    location: "נווה רחמים"
  },
  {
    day: "שבת",
    time: "21:30",
    topic: "שיעור זוהר",
    location: "בית הכנסת מקדש מעט"
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