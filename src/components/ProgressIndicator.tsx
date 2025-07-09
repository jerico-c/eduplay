
import { Card } from '@/components/ui/card';

interface ProgressIndicatorProps {
  currentLevel: number;
  totalLevels: number;
  score: number;
}

const ProgressIndicator = ({ currentLevel, totalLevels, score }: ProgressIndicatorProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto p-4 mb-6 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold text-gray-700">
          Level {currentLevel + 1} dari {totalLevels}
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-2xl">🏆</div>
          <span className="text-lg font-bold text-orange-600">Skor: {score}</span>
        </div>
      </div>
      
      <div className="flex justify-center space-x-2">
        {[...Array(totalLevels)].map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              index < currentLevel
                ? 'bg-green-500 text-white'
                : index === currentLevel
                ? 'bg-orange-500 text-white animate-pulse'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            {index < currentLevel ? '✓' : index + 1}
          </div>
        ))}
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
        <div
          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentLevel) / totalLevels) * 100}%` }}
        />
      </div>
    </Card>
  );
};

export default ProgressIndicator;
