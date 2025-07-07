import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
}

// דוגמאות לסרטונים - בפרויקט אמיתי זה יבוא מ-API של יוטיוב
const featuredVideos: VideoItem[] = [
  {
    id: "1",
    title: "הלכות שבת - מלאכת בישול",
    description: "שיעור מקיף על דיני בישול בשבת, הכולל הסברים מעמיקים ודוגמאות מעשיות",
    thumbnail: "/api/placeholder/480/270",
    duration: "45:30"
  },
  {
    id: "2", 
    title: "אמונה ובטחון - חלק א'",
    description: "יסודות האמונה והבטחון בהשם יתברך לפי דברי חז\"ל ומחכמי ישראל",
    thumbnail: "/api/placeholder/480/270",
    duration: "38:15"
  },
  {
    id: "3",
    title: "משנה ברורה - סימן רמד",
    description: "לימוד מעמיק במשנה ברורה עם ביאורים והערות חשובות",
    thumbnail: "/api/placeholder/480/270", 
    duration: "52:20"
  },
  {
    id: "4",
    title: "פרשת וישב - דרושים ופירושים",
    description: "דרושים נפלאים על פרשת וישב עם מסרים מעשיים לחיי היום יום",
    thumbnail: "/api/placeholder/480/270",
    duration: "41:45"
  },
  {
    id: "5",
    title: "הלכות תפילה - כוונת הלב",
    description: "הדרכה מעשית לתפילה בכוונה ובהתרכזות",
    thumbnail: "/api/placeholder/480/270",
    duration: "35:10"
  },
  {
    id: "6",
    title: "חזון איש - הלכות ומנהגים",
    description: "לימוד בספר חזון איש עם הסברים ויישומים הלכתיים",
    thumbnail: "/api/placeholder/480/270",
    duration: "47:25"
  }
];

const YouTubeSection = () => {
  const handleVideoClick = (videoId: string) => {
    // בפרויקט אמיתי זה יפתח את הסרטון ביוטיוב
    window.open(`https://youtube.com/@nachalatefraim2339`, '_blank');
  };

  const handleChannelClick = () => {
    window.open('https://youtube.com/@nachalatefraim2339', '_blank');
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-golden bg-clip-text text-transparent mb-4">
          שיעורים מערוץ היוטיוב
        </h2>
        <p className="text-muted-foreground text-lg mb-6">
          שיעורים נבחרים מערוץ "נחלת אפרים" ביוטיוב
        </p>
        <Button 
          onClick={handleChannelClick}
          className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          צפו בערוץ המלא ביוטיוב
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredVideos.map((video) => (
          <Card 
            key={video.id}
            className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden bg-gradient-to-br from-card to-secondary/10"
            onClick={() => handleVideoClick(video.id)}
          >
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-golden/10" />
                <Play className="h-12 w-12 text-primary group-hover:text-primary-glow transition-colors duration-300 drop-shadow-lg" />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-2 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {video.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSection;