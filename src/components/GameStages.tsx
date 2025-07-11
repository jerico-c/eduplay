import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GameLevel } from '@/types/GameTypes';
import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

interface GameStagesProps {
  currentLevel: GameLevel;
  currentStage: 'concrete' | 'pictorial' | 'abstract';
  draggedItems: number;
  selectedAnswer: number | null;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragStart: (e: React.DragEvent) => void;
  onProceedToNextStage: () => void;
  onAnswerSelect: (answer: number) => void;
}

interface AvailableIcon {
  id: string;
  isCorrect: boolean;
  image: string;
  objectName: string;
}

const GameStages = ({
  currentLevel,
  currentStage,
  draggedItems,
  selectedAnswer,
  onDrop,
  onDragOver,
  onDragStart,
  onProceedToNextStage,
  onAnswerSelect,
}: GameStagesProps) => {
  const [availableIcons, setAvailableIcons] = useState<AvailableIcon[]>([]);
  const [draggedCorrectItems, setDraggedCorrectItems] = useState(0);

  // Initialize available icons when level changes
  useEffect(() => {
    const correctCount = currentLevel.concrete.correctCount;
    const totalIcons = Math.max(10, correctCount + 3); // At least 10 icons, or correctCount + 3 distractors
    
    const icons: AvailableIcon[] = [];
    
    // Add correct items
    for (let i = 0; i < correctCount; i++) {
      icons.push({
        id: `correct-${i}`,
        isCorrect: true,
        image: (currentLevel.concrete as any).displayImage,
        objectName: currentLevel.concrete.objectName
      });
    }
    
    // Get other object images for distractors
    const allObjects = ['Blangkon', 'Wayang', 'Gamelan', 'Candi', 'Keris'];
    const objectImages: { [key: string]: string } = {
      'Blangkon': '/image/blangkon.png',
      'Wayang': '/image/wayang.png',
      'Gamelan': '/image/gamelan.png',
      'Candi': '/image/candi.png',
      'Keris': '/image/keris.png'
    };
    
    const otherObjects = allObjects.filter(obj => obj !== currentLevel.concrete.objectName);
    
    // Add distractor items
    const distractorCount = totalIcons - correctCount;
    for (let i = 0; i < distractorCount; i++) {
      const randomObject = otherObjects[Math.floor(Math.random() * otherObjects.length)];
      icons.push({
        id: `distractor-${i}`,
        isCorrect: false,
        image: objectImages[randomObject],
        objectName: randomObject
      });
    }
    
    // Shuffle the icons
    const shuffledIcons = icons.sort(() => Math.random() - 0.5);
    setAvailableIcons(shuffledIcons);
    setDraggedCorrectItems(0);
  }, [currentLevel]);

  const handleIconDragStart = (e: React.DragEvent, iconId: string) => {
    e.dataTransfer.setData('iconId', iconId);
    onDragStart(e);
  };

  const handleIconDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const iconId = e.dataTransfer.getData('iconId');
    const draggedIcon = availableIcons.find(icon => icon.id === iconId);
    
    if (draggedIcon && draggedCorrectItems < currentLevel.concrete.correctCount) {
      // Check if the dragged icon is correct
      if (draggedIcon.isCorrect) {
        // Remove the icon from available icons
        setAvailableIcons(prev => prev.filter(icon => icon.id !== iconId));
        setDraggedCorrectItems(prev => prev + 1);
        
        toast({
          title: "Bagus!",
          description: `Benar! ${draggedIcon.objectName} berhasil dimasukkan!`,
        });
      } else {
        // Wrong icon - show error message but don't add to basket
        toast({
          title: "Oops!",
          description: `Itu bukan ${currentLevel.concrete.objectName}! Coba lagi ya!`,
          variant: "destructive"
        });
      }
    }
    
    onDrop(e);
  };

  const renderConcreteStage = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-green-600">
          Tahap 1: Concrete (Konkret)
        </CardTitle>
        <p className="text-gray-600">
          Seret {currentLevel.concrete.correctCount} {currentLevel.concrete.objectName} ke dalam keranjang Jero!
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Objek tersedia:</h3>
            <div className="grid grid-cols-3 gap-4">
              {availableIcons.map((icon) => (
                <div
                  key={icon.id}
                  draggable
                  onDragStart={(e) => handleIconDragStart(e, icon.id)}
                  className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center cursor-move hover:scale-110 transition-transform shadow-lg"
                >
                  <img 
                    src={icon.image} 
                    alt={icon.objectName} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Keranjang Jero:</h3>
            <div
              onDrop={handleIconDrop}
              onDragOver={onDragOver}
              className="w-full h-48 border-4 border-dashed border-orange-300 rounded-lg flex flex-col items-center justify-center bg-orange-50 hover:bg-orange-100 transition-colors"
            >
              <img 
                src="/image/jero.png" 
                alt="Jero the Rhino" 
                className="w-16 h-16 object-contain mb-2"
              />
              <div className="flex space-x-2 mb-2 flex-wrap justify-center">
                {[...Array(draggedCorrectItems)].map((_, i) => (
                  <div key={i}>
                    <img 
                      src={(currentLevel.concrete as any).displayImage} 
                      alt={currentLevel.concrete.objectName} 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-gray-600 font-medium">
                {draggedCorrectItems}/{currentLevel.concrete.correctCount} {currentLevel.concrete.objectName}
              </p>
            </div>
            {draggedCorrectItems === currentLevel.concrete.correctCount && (
              <Button
                onClick={onProceedToNextStage}
                className="w-full bg-green-500 hover:bg-green-600"
              >
                Lanjut ke Tahap Pictorial
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderPictorialStage = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-purple-600">
          Tahap 2: Pictorial (Gambar)
        </CardTitle>
        <p className="text-gray-600">
          Lihat {currentLevel.concrete.objectName} yang kamu kumpulkan!
        </p>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-8">
          <img 
            src="/image/jero.png" 
            alt="Jero the Rhino" 
            className="w-24 h-24 object-contain mx-auto mb-4"
          />
          <p className="text-lg mb-6">Jero berkata: "Lihat! Aku punya {currentLevel.concrete.objectName} sebanyak ini:"</p>
          
          <div className="flex justify-center space-x-2 mb-6 flex-wrap">
            {[...Array(currentLevel.concrete.correctCount)].map((_, i) => (
              <div key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                <img 
                  src={(currentLevel.concrete as any).displayImage} 
                  alt={currentLevel.concrete.objectName} 
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="text-6xl font-bold text-purple-600 mb-4">
            {currentLevel.concrete.correctCount}
          </div>
          
          <p className="text-lg text-gray-700">
            Jero memiliki <strong>{currentLevel.concrete.correctCount}</strong> {currentLevel.concrete.objectName}!
          </p>
        </div>
        
        <Button
          onClick={onProceedToNextStage}
          className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3"
        >
          Lanjut ke Tahap Abstract
        </Button>
      </CardContent>
    </Card>
  );

  const renderAbstractStage = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-blue-600">
          Tahap 3: Abstract (Abstrak)
        </CardTitle>
        <p className="text-gray-600">
          Sekarang mari kita selesaikan soal matematika!
        </p>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-8">
          <img 
            src="/image/jero.png" 
            alt="Jero the Rhino" 
            className="w-24 h-24 object-contain mx-auto mb-4"
          />
          <p className="text-lg mb-6">Jero bertanya: "Berapa hasil dari operasi ini?"</p>
          
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <div className="text-4xl font-bold text-gray-800 mb-4">
              {currentLevel.abstract.question}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
            {currentLevel.abstract.options.map((option) => (
              <Button
                key={option}
                onClick={() => onAnswerSelect(option)}
                variant={selectedAnswer === option ? "default" : "outline"}
                className={`text-2xl py-6 ${
                  selectedAnswer === option && option === currentLevel.abstract.answer
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : selectedAnswer === option && option !== currentLevel.abstract.answer
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : ''
                }`}
                disabled={selectedAnswer !== null}
              >
                {option}
              </Button>
            ))}
          </div>
          
          {selectedAnswer === currentLevel.abstract.answer && (
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-semibold text-lg">
                🎉 Benar! Jawabannya adalah {currentLevel.abstract.answer}!
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (currentStage === 'concrete') return renderConcreteStage();
  if (currentStage === 'pictorial') return renderPictorialStage();
  if (currentStage === 'abstract') return renderAbstractStage();
  
  return null;
};

export default GameStages;
