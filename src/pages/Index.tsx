
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Play, Book, Info, Star, Heart } from 'lucide-react';
import GamePlay from '@/components/GamePlay';
import AboutProject from '@/components/AboutProject';
import StoryIntroduction from '@/components/StoryIntroduction';

const Index = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [showStory, setShowStory] = useState(false);

  const handleStartGame = () => {
    setShowStory(true);
  };

  const handleStoryComplete = () => {
    setShowStory(false);
    setCurrentView('game');
  };

  if (currentView === 'game') {
    return <GamePlay onBackToHome={() => setCurrentView('landing')} />;
  }

  if (currentView === 'about') {
    return <AboutProject onBackToHome={() => setCurrentView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Jerico EduPlay
            </h1>
          </div>
          <Button
            variant="outline"
            onClick={() => setCurrentView('about')}
            className="flex items-center space-x-2 hover:bg-blue-50"
          >
            <Info className="w-4 h-4" />
            <span>Tentang Proyek</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-12">
            {/* Character Jero */}
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <img 
                  src="/lovable-uploads/5788e927-3e19-4a2f-9aad-7d2efc0b0674.png" 
                  alt="Jero the Rhino" 
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full px-3 py-1 text-sm font-bold text-orange-800 shadow-lg animate-pulse">
                Jero!
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Petualangan Angka
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
              bersama Jero
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan Jero, badak Jawa pemberani, dalam petualangan seru 
              mempelajari matematika dengan cara yang menyenangkan! 🏛️✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleStartGame}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <Play className="w-6 h-6 mr-2" />
                Mulai Bermain
              </Button>
              
              <Button 
                onClick={() => setCurrentView('about')}
                variant="outline"
                size="lg"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 text-xl"
              >
                <Book className="w-6 h-6 mr-2" />
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🧱</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Concrete</h3>
                <p className="text-gray-600">
                  Bermain dengan objek nyata seperti blangkon dan keris Yogyakarta
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🖼️</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Pictorial</h3>
                <p className="text-gray-600">
                  Memahami konsep melalui gambar dan visualisasi yang menarik
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🔢</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Abstract</h3>
                <p className="text-gray-600">
                  Menguasai konsep matematika abstrak dengan mudah dan menyenangkan
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Cultural Elements */}
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Budaya Yogyakarta</h3>
            <div className="flex justify-center space-x-8 mb-4">
              <div className="flex flex-col items-center" title="Candi Prambanan">
                <img 
                  src="/lovable-uploads/4412f89d-8845-45eb-a0a4-33429e5eeeb2.png" 
                  alt="Candi" 
                  className="w-12 h-12 object-contain mb-1"
                />
                <span className="text-xs text-gray-600">Candi</span>
              </div>
              <div className="flex flex-col items-center" title="Blangkon">
                <img 
                  src="/lovable-uploads/25813aa2-2089-4339-8de8-5fae09a50e0d.png" 
                  alt="Blangkon" 
                  className="w-12 h-12 object-contain mb-1"
                />
                <span className="text-xs text-gray-600">Blangkon</span>
              </div>
              <div className="flex flex-col items-center" title="Keris">
                <img 
                  src="/lovable-uploads/1f175be5-3223-49f1-a055-b058bbb7d16b.png" 
                  alt="Keris" 
                  className="w-12 h-12 object-contain mb-1"
                />
                <span className="text-xs text-gray-600">Keris</span>
              </div>
              <div className="flex flex-col items-center" title="Wayang">
                <img 
                  src="/lovable-uploads/cee0e54c-8939-455a-a506-4aa8afe5f925.png" 
                  alt="Wayang" 
                  className="w-12 h-12 object-contain mb-1"
                />
                <span className="text-xs text-gray-600">Wayang</span>
              </div>
              <div className="flex flex-col items-center" title="Gamelan">
                <img 
                  src="/lovable-uploads/f6ef34f3-4f02-4ab7-900d-28540363897e.png" 
                  alt="Gamelan" 
                  className="w-12 h-12 object-contain mb-1"
                />
                <span className="text-xs text-gray-600">Gamelan</span>
              </div>
            </div>
            <p className="text-gray-700">
              Jelajahi keindahan budaya Yogyakarta sambil belajar matematika!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium">
            Dibuat dengan ❤️ oleh Jerico sebagai portfolio untuk PT Sebangku Jaya Abadi
          </p>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-sm opacity-90">Metodologi CPA & Story Based Learning</span>
            <Star className="w-4 h-4 text-yellow-300" />
          </div>
        </div>
      </footer>

      {/* Story Dialog */}
      <Dialog open={showStory} onOpenChange={setShowStory}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Petualangan Dimulai!
            </DialogTitle>
          </DialogHeader>
          <StoryIntroduction onComplete={handleStoryComplete} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
