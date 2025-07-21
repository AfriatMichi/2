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
    id: "1g6rqTxY3GE",
    title: "ר\"ח אב - עין טובה",
    description: "שיעור בנושא עין טובה שניתן בראש חודש אב.",
    thumbnail: "https://img.youtube.com/vi/1g6rqTxY3GE/mqdefault.jpg",
    duration: "19:26"
  },
 
  {
    id: "0OX7O8Mo-vk",
    title: "ברוך שם כבוד מלכותו לעולם ועד | הלכות ברכות",
    description: "שיעור בנושא הלכות ברכות - ברוך שם כבוד מלכותו לעולם ועד.",
    thumbnail: "https://img.youtube.com/vi/0OX7O8Mo-vk/mqdefault.jpg",
    duration: "26:54"
  },
  {
    id: "NwHKJOpXlLE",
    title: "טיולים על פי ההלכה",
    description: "שיעור בנושא טיולים על פי ההלכה.",
    thumbnail: "https://img.youtube.com/vi/NwHKJOpXlLE/mqdefault.jpg",
    duration: "20:58"
  },
  {
    id: "tBhZaBy7u7g",
    title: "האם צריך להוריד שעון בהנחת תפילין?",
    description: "שיעור הלכתי: האם צריך להוריד שעון מהיד בעת הנחת תפילין?",
    thumbnail: "https://img.youtube.com/vi/tBhZaBy7u7g/mqdefault.jpg",
    duration: "52:22"
  },
  {
    id: "9IM1Q_uj7Hs",
    title: "הלכות שניים מקרא ואחד תרגום",
    description: "שיעור בנושא הלכות שניים מקרא ואחד תרגום.",
    thumbnail: "https://img.youtube.com/vi/9IM1Q_uj7Hs/mqdefault.jpg",
    duration: "22:36"
  }
];

const YouTubeSection = () => {
  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
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