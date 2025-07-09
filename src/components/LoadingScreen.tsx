
import { Card, CardContent } from '@/components/ui/card';

const LoadingScreen = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="text-center py-16">
        <div className="text-8xl mb-6 animate-bounce">
          🦏
        </div>
        
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Jero sedang menyiapkan petualangan...
        </h2>
        
        <div className="flex justify-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <p className="text-lg text-gray-600">
          Tunggu sebentar ya, soal-soal seru sedang disiapkan! ✨
        </p>
      </CardContent>
    </Card>
  );
};

export default LoadingScreen;
