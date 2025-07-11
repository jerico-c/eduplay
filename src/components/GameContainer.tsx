import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { GameLevel, GameState, CurrentStage } from '@/types/GameTypes';
import ProgressIndicator from './ProgressIndicator';
import GameStages from './GameStages';
import GameOverScreen from './GameOverScreen';
import LoadingScreen from './LoadingScreen';
import GameHeader from './GameHeader';

interface GameContainerProps {
  onBackToHome: () => void;
}

const GameContainer = ({ onBackToHome }: GameContainerProps) => {
  const [gameState, setGameState] = useState<GameState>('loading');
  const [gameData, setGameData] = useState<GameLevel[]>([]);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [currentStage, setCurrentStage] = useState<CurrentStage>('concrete');
  const [score, setScore] = useState(0);
  const [draggedItems, setDraggedItems] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Simulasi API call untuk mendapatkan data game
  const fetchGameData = async (): Promise<GameLevel[]> => {
    // Simulasi delay API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const objects = ['Blangkon', 'Wayang', 'Gamelan', 'Candi', 'Keris'];
    const objectImages: { [key: string]: string } = {
      'Blangkon': '/image/blangkon.png',
      'Wayang': '/image/wayang.png',
      'Gamelan': '/image/gamelan.png',
      'Candi': '/image/candi.png',
      'Keris': '/image/keris.png'
    };

    return Array.from({ length: 5 }, (_, index) => {
      const correctCount = Math.floor(Math.random() * 8) + 2; // 2-9
      const objectName = objects[Math.floor(Math.random() * objects.length)];
      
      // Generate random math question that equals correctCount
      const firstNum = Math.floor(Math.random() * (correctCount - 1)) + 1;
      const secondNum = correctCount - firstNum;
      
      // Generate wrong answers
      const wrongAnswers = [];
      for (let i = 0; i < 3; i++) {
        let wrongAnswer = correctCount + (Math.floor(Math.random() * 6) - 3);
        while (wrongAnswer === correctCount || wrongAnswer < 1 || wrongAnswers.includes(wrongAnswer)) {
          wrongAnswer = correctCount + (Math.floor(Math.random() * 6) - 3);
        }
        wrongAnswers.push(wrongAnswer);
      }
      
      const options = [correctCount, ...wrongAnswers].sort(() => Math.random() - 0.5);

      return {
        level: index + 1,
        concrete: {
          objectName,
          objectImageURL: `/images/${objectName.toLowerCase()}.png`,
          correctCount,
          displayImage: objectImages[objectName] || '🎯'
        },
        abstract: {
          question: `${firstNum} + ${secondNum} = ?`,
          options,
          answer: correctCount
        }
      };
    });
  };

  const initializeGame = async () => {
    setGameState('loading');
    try {
      const data = await fetchGameData();
      setGameData(data);
      setCurrentLevelIndex(0);
      setCurrentStage('concrete');
      setScore(0);
      setDraggedItems(0);
      setSelectedAnswer(null);
      setGameState('playing');
    } catch (error) {
      console.error('Failed to load game data:', error);
      toast({
        title: "Oops!",
        description: "Gagal memuat data permainan. Coba lagi ya!",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const currentLevel = gameData[currentLevelIndex];

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedItems < currentLevel?.concrete.correctCount) {
      const newCount = draggedItems + 1;
      setDraggedItems(newCount);
      toast({
        title: "Bagus!",
        description: `Kamu sudah memasukkan ${newCount} ${currentLevel.concrete.objectName}!`,
      });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', '');
  };

  const proceedToNextStage = () => {
    if (currentStage === 'concrete' && draggedItems === currentLevel.concrete.correctCount) {
      setCurrentStage('pictorial');
      toast({
        title: "Luar biasa!",
        description: "Sekarang mari lihat gambarnya! 📸",
      });
    } else if (currentStage === 'pictorial') {
      setCurrentStage('abstract');
      toast({
        title: "Siap untuk tantangan?",
        description: "Sekarang waktunya soal matematika! 🧮",
      });
    }
  };

  const handleAnswerSelect = (answer: number) => {
    setSelectedAnswer(answer);
    
    if (answer === currentLevel.abstract.answer) {
      setScore(score + 1);
      toast({
        title: "BENAR! 🎉",
        description: "Jawabanmu tepat sekali!",
      });
      
      setTimeout(() => {
        proceedToNextLevel();
      }, 1500);
    } else {
      // Kurangi skor sebesar 1 jika jawaban salah (minimum 0)
      setScore(Math.max(0, score - 1));
      toast({
        title: "Belum tepat! 😔",
        description: "Jero tahu kamu bisa lebih baik! Poin berkurang 1.",
        variant: "destructive"
      });
      
      // Tetap lanjut ke level berikutnya setelah delay
      setTimeout(() => {
        proceedToNextLevel();
      }, 2000);
    }
  };

  const proceedToNextLevel = () => {
    if (currentLevelIndex < gameData.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
      setCurrentStage('concrete');
      setDraggedItems(0);
      setSelectedAnswer(null);
      toast({
        title: `Level ${currentLevelIndex + 2}!`,
        description: "Lanjut ke tantangan berikutnya! 🚀",
      });
    } else {
      setGameState('finished');
    }
  };

  const handlePlayAgain = () => {
    initializeGame();
  };

  if (gameState === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100">
        <GameHeader score={score} onBackToHome={onBackToHome} />
        <main className="container mx-auto px-4 py-8">
          <LoadingScreen />
        </main>
      </div>
    );
  }

  if (gameState === 'finished') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100">
        <GameHeader score={score} onBackToHome={onBackToHome} />
        <main className="container mx-auto px-4 py-8">
          <GameOverScreen
            score={score}
            totalQuestions={gameData.length}
            onPlayAgain={handlePlayAgain}
            onBackToHome={onBackToHome}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100">
      <GameHeader score={score} onBackToHome={onBackToHome} />

      <main className="container mx-auto px-4 py-8">
        {gameState === 'playing' && (
          <>
            <ProgressIndicator 
              currentLevel={currentLevelIndex} 
              totalLevels={gameData.length} 
              score={score} 
            />
            
            <GameStages
              currentLevel={currentLevel}
              currentStage={currentStage}
              draggedItems={draggedItems}
              selectedAnswer={selectedAnswer}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragStart={handleDragStart}
              onProceedToNextStage={proceedToNextStage}
              onAnswerSelect={handleAnswerSelect}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">
            Dibuat oleh Jerico Christianto
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GameContainer;
