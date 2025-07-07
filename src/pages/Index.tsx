import WeeklySchedule from "@/components/WeeklySchedule";
import YouTubeSection from "@/components/YouTubeSection";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-golden/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary to-golden rounded-full mb-6">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-golden bg-clip-text text-transparent mb-6 leading-tight">
              הרב אפרים עבדיאן
              <span className="block text-3xl md:text-4xl mt-2">שליט"א</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ברוכים הבאים לאתר השיעורים של הרב אפרים עבדיאן שליט"א
              <br />
              <span className="text-lg">כאן תוכלו למצוא את כל השיעורים השבועיים וסרטוני היוטיוב</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              לוח השיעורים השבועי
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-golden hover:bg-golden hover:text-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              <Heart className="mr-2 h-5 w-5" />
              ערוץ היוטיוב
            </Button>
          </div>
        </div>
      </div>

      {/* Weekly Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <WeeklySchedule />
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* YouTube Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <YouTubeSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <BookOpen className="h-8 w-8 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">נחלת אפרים</h3>
            <p className="text-primary-foreground/80 text-lg">
              שיעורי הרב אפרים עבדיאן שליט"א
            </p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60">
              © {new Date().getFullYear()} נחלת אפרים. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;