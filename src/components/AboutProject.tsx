
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Code, Heart, Target, Lightbulb, Users, Sparkles } from 'lucide-react';

interface AboutProjectProps {
  onBackToHome: () => void;
}

const AboutProject = ({ onBackToHome }: AboutProjectProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Button
            onClick={onBackToHome}
            variant="outline"
            className="flex items-center space-x-2 hover:bg-blue-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🦏</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tentang Jerico EduPlay
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sebuah portfolio yang menggabungkan teknologi modern dengan metodologi pembelajaran terdepan
            </p>
          </div>


          {/* Methodology Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-700">
                  <Target className="w-6 h-6" />
                  <span>Metodologi CPA</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-sm font-bold text-green-800">C</div>
                    <div>
                      <h4 className="font-semibold text-green-800">Concrete</h4>
                      <p className="text-sm text-gray-600">Pembelajaran dengan objek nyata (drag-and-drop icon)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-sm font-bold text-purple-800">P</div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Pictorial</h4>
                      <p className="text-sm text-gray-600">Representasi visual dengan gambar dan angka</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-sm font-bold text-blue-800">A</div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Abstract</h4>
                      <p className="text-sm text-gray-600">Penerapan konsep matematika abstrak</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-purple-700">
                  <Lightbulb className="w-6 h-6" />
                  <span>Story Based Learning</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Pembelajaran berbasis cerita dengan karakter <strong>"Jero"</strong> si badak Jawa 
                  yang mengajak anak-anak berpetualang di sekitar Candi Prambanan.
                </p>
                <div className="bg-purple-100 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Elemen Cerita:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Karakter relatable (Jero si badak Jawa)</li>
                    <li>• Setting budaya Yogyakarta</li>
                    <li>• Misi yang menarik (mencari harta blangkon)</li>
                    <li>• Progres bertahap yang memotivasi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

        
          {/* Cultural Elements Section */}
          <Card className="mb-8 border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl text-amber-700">
                <Sparkles className="w-6 h-6" />
                <span>Sentuhan Budaya Yogyakarta</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <img src="/image/candi.png"></img>
                  <h4 className="font-semibold">Candi</h4>
                  <p className="text-sm text-gray-600">Setting utama petualangan</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <img src="/image/blangkon.png"></img>
                  <h4 className="font-semibold">Blangkon</h4>
                  <p className="text-sm text-gray-600">Objek pembelajaran utama</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                 <img src="/image/jero.png"></img>
                  <h4 className="font-semibold">Badak Jawa</h4>
                  <p className="text-sm text-gray-600">Karakter Jero sebagai guide</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4 text-center">
                Setiap elemen dipilih untuk mencerminkan kekayaan budaya Indonesia, 
                sejalan dengan misi melestarikan nilai-nilai lokal.
              </p>
            </CardContent>
          </Card>

          {/* Mission Statement */}
          <Card className="border-2 border-red-200 bg-gradient-to-r from-red-50 to-pink-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl text-red-700">
                <Users className="w-6 h-6" />
                <span>Visi Pengembangan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                <strong>Jerico EduPlay</strong> bukan sekadar game edukasi, tetapi merupakan demonstrasi konkret 
                bagaimana teknologi modern dapat digunakan untuk menghadirkan pengalaman pembelajaran yang:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>Bermakna:</strong> Setiap interaksi memiliki tujuan pedagogis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>Menyenangkan:</strong> Gamifikasi yang tidak mengorbankan substansi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>Berbudaya:</strong> Mengintegrasikan nilai-nilai lokal</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>Terstruktur:</strong> Mengikuti metodologi pembelajaran teruji</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>Responsif:</strong> Dapat diakses di berbagai perangkat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span><strong>Scalable:</strong> Mudah dikembangkan untuk konten lain</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium mb-2">
            Dibuat oleh Jerico Christianto
          </p>
          <p className="text-sm opacity-90">
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutProject;
