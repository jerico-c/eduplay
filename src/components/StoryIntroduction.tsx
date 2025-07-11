
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface StoryIntroductionProps {
  onComplete: () => void;
}

const StoryIntroduction = ({ onComplete }: StoryIntroductionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const storySlides = [
    {
      image: '/image/jero.png',
      title: "Perkenalan Jero",
      text: "Hai! Aku Jero, seekor badak Jawa yang tinggal di dekat Candi Prambanan. Aku suka sekali belajar matematika!"
    },
    {
      image: "/image/candi.png",
      title: "Candi Ajaib",
      text: "Suatu hari, aku menemukan sebuah candi ajaib yang penuh dengan teka-teki matematika. Maukah kamu membantuku memecahkannya?"
    },
    {
      image: "/image/blangkon.png",
      title: "Harta Karun Blangkon",
      text: "Di dalam candi ini tersimpan harta karun berupa blangkon emas! Tapi untuk mendapatkannya, kita harus menyelesaikan tantangan matematika."
    },
    {
      image: "/image/jero.png",
      title: "Petualangan Dimulai",
      text: "Ayo mulai petualangan kita! Kita akan belajar matematika dengan cara yang menyenangkan menggunakan metode CPA."
    }
  ];

  const nextSlide = () => {
    if (currentSlide < storySlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentStory = storySlides[currentSlide];

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        {/* Story Content */}
        <div className="text-center mb-8">
          <img
            src={currentStory.image}
            alt={currentStory.title}
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 object-contain animate-bounce"
          />
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            {currentStory.title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {currentStory.text}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2 mb-6">
          {storySlides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={prevSlide}
            variant="outline"
            disabled={currentSlide === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </Button>

          <div className="text-sm text-gray-500">
            {currentSlide + 1} dari {storySlides.length}
          </div>

          <Button
            onClick={nextSlide}
            className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          >
            {currentSlide === storySlides.length - 1 ? (
              <>
                <Play className="w-4 h-4" />
                <span>Mulai Bermain</span>
              </>
            ) : (
              <>
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryIntroduction;
