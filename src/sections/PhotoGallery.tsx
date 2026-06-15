import { Sparkles, Camera, Heart } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { UiCard as Card } from '@/components/ui/UiCard';

const photos = [
  { src: '/photos/kids-floor-star.jpeg', alt: 'Дети лежат на ковре звездой', span: 'col-span-2 row-span-2' },
  { src: '/photos/class-storytime.jpeg', alt: 'Воспитатель читает детям книгу', span: 'col-span-1 row-span-2' },
  { src: '/photos/kids-park-friends.jpeg', alt: 'Дети на прогулке в парке', span: 'col-span-1 row-span-1' },
  { src: '/photos/kids-sofa-smile.jpeg', alt: 'Дети сидят на диване', span: 'col-span-1 row-span-1' },
  { src: '/photos/kids-library-chairs.jpeg', alt: 'Дети у книжных полок', span: 'col-span-2 row-span-1' },
  { src: '/photos/kids-classroom-floor.jpeg', alt: 'Дети на занятии в группе', span: 'col-span-1 row-span-1' },
  { src: '/photos/kids-library-niche.jpeg', alt: 'Дети в читательских нишах', span: 'col-span-1 row-span-1' },
];

export function PhotoGallery() {
  return (
    <section className="section-base section-light section-padding overflow-hidden">
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-yellow-300 animate-float pointer-events-none" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-20 right-16 w-3 h-3 rounded-full bg-pink-300 animate-float pointer-events-none" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/2 right-8 w-2.5 h-2.5 rounded-full bg-sky-300 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container-content">
        <SectionHeader
          badge="Наша атмосфера"
          title="Так выглядит счастливое детство"
          description="Настоящие снимки из наших садов: занятия, прогулки, праздники и просто будни, которые запоминаются надолго"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {photos.map((photo, i) => (
            <Card
              key={i}
              padding="sm"
              className={`${photo.span} relative overflow-hidden group p-1.5 md:p-2`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-medium text-white drop-shadow-md">{photo.alt}</p>
              </div>

              {i === 0 && (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-pink-600 bg-white/90 border border-pink-200/60 px-2 py-1 rounded-full shadow-sm">
                  <Heart className="w-3 h-3" /> Любимые
                </span>
              )}
              {i === 1 && (
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-sky-600 bg-white/90 border border-sky-200/60 px-2 py-1 rounded-full shadow-sm">
                  <Camera className="w-3 h-3" /> Занятия
                </span>
              )}
              {i === 4 && (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-yellow-600 bg-white/90 border border-yellow-200/60 px-2 py-1 rounded-full shadow-sm">
                  <Sparkles className="w-3 h-3" /> Интерьер
                </span>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
