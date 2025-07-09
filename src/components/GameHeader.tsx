
import { Button } from '@/components/ui/button';
import { Home, Trophy } from 'lucide-react';

interface GameHeaderProps {
  score: number;
  onBackToHome: () => void;
}

const GameHeader = ({ score, onBackToHome }: GameHeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button
            onClick={onBackToHome}
            variant="outline"
            size="sm"
            className="flex items-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Beranda</span>
          </Button>
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold">Skor: {score}</span>
          </div>
        </div>
        
        <div className="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Jerico EduPlay
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
