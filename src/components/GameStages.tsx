
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GameLevel } from '@/types/GameTypes';

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
            <h3 className="text-lg font-semibold text-center">{currentLevel.concrete.objectName} tersedia:</h3>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div
                  key={item}
                  draggable
                  onDragStart={onDragStart}
                  className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center cursor-move hover:scale-110 transition-transform shadow-lg"
                >
                  {currentLevel.concrete.objectName === 'Blangkon' ? (
                    <img 
                      src={(currentLevel.concrete as any).displayImage} 
                      alt="Blangkon" 
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <span className="text-2xl">{(currentLevel.concrete as any).displayImage}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Keranjang Jero:</h3>
            <div
              onDrop={onDrop}
              onDragOver={onDragOver}
              className="w-full h-48 border-4 border-dashed border-orange-300 rounded-lg flex flex-col items-center justify-center bg-orange-50 hover:bg-orange-100 transition-colors"
            >
              <div className="text-4xl mb-2">🦏</div>
              <div className="flex space-x-2 mb-2 flex-wrap justify-center">
                {[...Array(draggedItems)].map((_, i) => (
                  <div key={i}>
                    {currentLevel.concrete.objectName === 'Blangkon' ? (
                      <img 
                        src={(currentLevel.concrete as any).displayImage} 
                        alt="Blangkon" 
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <span className="text-2xl">{(currentLevel.concrete as any).displayImage}</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 font-medium">
                {draggedItems}/{currentLevel.concrete.correctCount} {currentLevel.concrete.objectName}
              </p>
            </div>
            {draggedItems === currentLevel.concrete.correctCount && (
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
          <div className="text-6xl mb-4">🦏</div>
          <p className="text-lg mb-6">Jero berkata: "Lihat! Aku punya {currentLevel.concrete.objectName} sebanyak ini:"</p>
          
          <div className="flex justify-center space-x-2 mb-6 flex-wrap">
            {[...Array(currentLevel.concrete.correctCount)].map((_, i) => (
              <div key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                {currentLevel.concrete.objectName === 'Blangkon' ? (
                  <img 
                    src={(currentLevel.concrete as any).displayImage} 
                    alt="Blangkon" 
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <span className="text-4xl">{(currentLevel.concrete as any).displayImage}</span>
                )}
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
          <div className="text-6xl mb-4">🦏</div>
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
