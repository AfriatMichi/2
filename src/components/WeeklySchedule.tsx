import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, BookOpen } from "lucide-react";

interface ScheduleItem {
  day: string;
  time: string;
  topic: string;
  location: string;
}

const scheduleData: ScheduleItem[] = [
  // ראשון
  {
    day: "ראשון",
    topic: "הלכה",
    time: "19:35",
    location: "מקדש מעט"
  },
  {
    day: "ראשון",
    topic: "נתיב מצוותך - קמארנא אחרי ערבית",
    time: "20:20",
    location: "מקדש מעט"
  },
  {
    day: "ראשון",
    topic: "כולל ערב",
    time: "20:40",
    location: "בית הכנסת נווה רחמים"
  },
  // שני
  {
    day: "שני",
    topic: "שיעור הלכה",
    time: "19:40",
    location: "בית הכנסת מקדש מעט"
  },
  {
    day: "שני",
    topic: "תנך - ספר שמואל",
    time: "20:30",
    location: "מקדש מעט"
  },
  // שלישי
  {
    day: "שלישי",
    topic: "שיעור הלכה",
    time: "19:35",
    location: "מקדש מעט"
  },
  {
    day: "שלישי",
    topic: "תניא",
    time: "20:20",
    location: "מקדש מעט"
  },
  {
    day: "שלישי",
    topic: "כולל ערב",
    time: "20:40",
    location: "בית הכנסת נווה רחמים"
  },
  // רביעי
  {
    day: "רביעי",
    topic: "שיעור הלכה",
    time: "19:35",
    location: "מקדש מעט"
  },
  {
    day: "רביעי",
    topic: "נתיב מצוותך",
    time: "20:20",
    location: "מקדש מעט"
  },
  // חמישי
  {
    day: "חמישי",
    topic: "שיעור הלכה",
    time: "19:35",
    location: "מקדש מעט"
  },
  {
    day: "חמישי",
    topic: "פיתוחי חותם",
    time: "20:20",
    location: "מקדש מעט"
  },
  {
    day: "חמישי",
    topic: "כולל ערב",
    time: "20:40",
    location: "בית הכנסת נווה רחמים"
  },
  // שישי
  {
    day: "שישי",
    topic: "כולל בוקר",
    time: "09:30",
    location: "בית הכנסת מקדש מעט"
  },
  {
    day: "שישי",
    topic: "שיעור קבלת שבת - לפני ערבית",
    time: "19:50",
    location: "מקדש מעט"
  },
  // שבת
  {
    day: "שבת",
    topic: "שיעור לפני שחרית",
    time: "07:00",
    location: "בית הכנסת נווה רחמים"
  },
  {
    day: "שבת",
    topic: "בן איש חי",
    time: "10:15",
    location: "בית הכנסת נווה רחמים"
  },
  {
    day: "שבת",
    topic: "שיעור הלכה - הלכות מזוזה",
    time: "16:45",
    location: "בית הכנסת נווה רחמים"
  },
  {
    day: "שבת",
    topic: "שיעור לאחר מנחה",
    time: "18:40",
    location: "בית הכנסת מקדש מעט"
  },
  {
    day: "שבת",
    topic: "שיעור זוהר אחרי ערבית",
    time: "20:20",
    location: "נווה רחמים"
  },
  {
    day: "שבת",
    topic: "שיעור זוהר",
    time: "21:30",
    location: "בית הכנסת מקדש מעט"
  }
];

// Group scheduleData by day
const groupedSchedule = scheduleData.reduce<Record<string, ScheduleItem[]>>((acc, item) => {
  if (!acc[item.day]) acc[item.day] = [];
  acc[item.day].push(item);
  return acc;
}, {});

const dayOrder = [
  "ראשון",
  "שני",
  "שלישי",
  "רביעי",
  "חמישי",
  "שישי",
  "שבת"
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
        {dayOrder.filter(day => groupedSchedule[day]).map(day => (
          <Card 
            key={day} 
            className="group hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-secondary/20"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300 text-center">
                {day}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-right">
              {groupedSchedule[day].map((item, idx) => (
                <div key={idx} className="border-b last:border-b-0 pb-2 last:pb-0 mb-2 last:mb-0">
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
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;