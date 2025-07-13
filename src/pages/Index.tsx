import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('sample-video.mp4');
  
  const handleRandomVideo = () => {
    // Для демо - переключаем состояние
    setIsPlaying(!isPlaying);
  };
  
  const handleUpload = () => {
    // Переход на страницу загрузки (пока просто алерт)
    alert('🎬 Скоро здесь будет страница загрузки видео!');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Безумный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-purple-500 to-blue-500 animate-pulse opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-300 via-green-400 to-cyan-400 animate-pulse opacity-50" />
      
      {/* Анимированные пятна */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full blur-xl animate-bounce opacity-70" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-400 rounded-full blur-2xl animate-pulse opacity-60" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-lime-400 rounded-full blur-lg animate-ping opacity-50" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Главный заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-2xl" 
              style={{ fontFamily: 'Caveat, cursive', textShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}>
            🎬 RANDOM VIDEOS 🎥
          </h1>
          <p className="text-2xl md:text-3xl text-white font-bold drop-shadow-lg animate-bounce">Мотивация от туземцв</p>
        </div>

        {/* Видеоплеер */}
        <Card className="w-full max-w-4xl bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-2xl mb-8 overflow-hidden hover:scale-105 transition-all duration-300">
          <div className="relative aspect-video bg-black/50 flex items-center justify-center group cursor-pointer" 
               onClick={handleRandomVideo}>
            {/* Placeholder видео */}
            <img 
              src="/img/4275d875-17b0-43cb-aed2-55f439b2d08f.jpg" 
              alt="Random Video" 
              className="w-full h-full object-cover opacity-80"
            />
            
            {/* Кнопка воспроизведения */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="lg"
                className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 border-4 border-white shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
                onClick={handleRandomVideo}
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={32} className="text-white" />
              </Button>
            </div>
            
            {/* Overlay эффект */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          
          {/* Информация о видео */}
          <div className="p-6 bg-white/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-2">🎪 Случайное безумное видео #{Math.floor(Math.random() * 999)}</h3>
            <p className="text-white/80">Нажми кнопку и получи рандомный контент!</p>
          </div>
        </Card>

        {/* Кнопки управления */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button 
            onClick={handleRandomVideo}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce text-xl"
          >
            🎲 СЛУЧАЙНОЕ ВИДЕО! 🎲
          </Button>
          
          <Button 
            onClick={handleUpload}
            size="lg"
            variant="outline"
            className="bg-white/20 border-white/50 text-white font-bold py-4 px-8 rounded-full shadow-2xl backdrop-blur-sm hover:bg-white/30 transform hover:scale-110 transition-all duration-300 text-xl"
          >
            <Icon name="Upload" size={24} className="mr-2" />
            ЗАГРУЗИТЬ ВИДЕО
          </Button>
        </div>
        
        {/* Статистика (декоративная) */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold animate-pulse">{Math.floor(Math.random() * 1000)}</div>
            <div className="text-sm opacity-80">ВИДОСОВ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold animate-pulse">{Math.floor(Math.random() * 5000)}</div>
            <div className="text-sm opacity-80">ПРОСМОТРОВ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold animate-pulse">{Math.floor(Math.random() * 100)}</div>
            <div className="text-sm opacity-80">ЛАЙКОВ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;