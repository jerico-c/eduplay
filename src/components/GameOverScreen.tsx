
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, RotateCcw, Star } from 'lucide-react';

interface GameOverScreenProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  onBackToHome: () => void;
}

const GameOverScreen = ({ score, totalQuestions, onPlayAgain, onBackToHome }: GameOverScreenProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getEncouragementMessage = () => {
    if (percentage === 100) return "Sempurna! Jero sangat bangga padamu! 🌟";
    if (percentage >= 80) return "Luar biasa! Kamu hampir sempurna! 🎉";
    if (percentage >= 60) return "Bagus sekali! Terus berlatih ya! 💪";
    if (percentage >= 40) return "Tidak apa-apa! Jero yakin kamu bisa lebih baik! 😊";
    return "Jangan menyerah! Mari coba lagi bersama Jero! 💙";
  };

  const getJeroEmoji = () => {
    if (percentage >= 80) return "🦏✨";
    if (percentage >= 60) return "🦏😊";
    return "🦏💙";
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="text-center py-12">
        <div className="text-8xl mb-6 animate-bounce">
          {getJeroEmoji()}
        </div>
        
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
          Petualangan Selesai!
        </h2>
        
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-8 mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-8 h-8 ${
                  i < Math.ceil((score / totalQuestions) * 5)
                    ? 'text-yellow-500 fill-yellow-500'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          
          <div className="text-6xl font-bold text-gray-800 mb-2">
            {score}/{totalQuestions}
          </div>
          
          <div className="text-2xl font-semibold text-gray-700 mb-4">
            {percentage}% Benar!
          </div>
          
          <p className="text-lg text-gray-700 font-medium">
            {getEncouragementMessage()}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
          <Button
            onClick={onPlayAgain}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-6 text-lg flex items-center justify-center space-x-2"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Main Lagi</span>
          </Button>
          
          <Button
            onClick={onBackToHome}
            variant="outline"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold py-4 px-6 text-lg flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Beranda</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameOverScreen;
