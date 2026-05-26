import React from 'react';
import { motion } from 'framer-motion';
import type { Book } from '../types/book';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Tag } from '../components/ui/Tag';
import { Button } from '../components/ui/Button';

interface BookDetailModalProps {
  book: Book;
  onClose: () => void;
  onStartReading?: () => void;
}

const statusLabels: Record<string, string> = {
  reading: 'Reading',
  tbr: 'To Be Read',
  read: 'Read',
  dnf: 'Did Not Finish',
};

const statusBadgeClasses: Record<string, string> = {
  reading: 'bg-bronze text-white',
  tbr: 'bg-cream text-bronze-dark',
  read: 'bg-bronze-dark text-white',
  dnf: 'bg-gray-mid text-white',
};

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  onClose,
  onStartReading,
}) => {
  const progress =
    book.pagesRead && book.totalPages
      ? Math.round((book.pagesRead / book.totalPages) * 100)
      : 0;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 16 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        className="w-full max-w-3xl bg-cream border-2 border-black shadow-[8px_8px_0_0_#000] overflow-y-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-black">
          <span className="font-serif text-xl font-bold text-bronze-dark">Readmark</span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="w-9 h-9 border-2 border-black bg-white flex items-center justify-center shadow-[3px_3px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-75 text-bronze-dark font-bold text-lg"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 p-6">
          <div className="flex flex-col gap-3 shrink-0 items-start">
            <div className="w-48 h-64 border-2 border-black shadow-[6px_6px_0_0_#000] bg-white overflow-hidden">
              {book.coverUrl ? (
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-cream flex items-center justify-center p-4">
                  <span className="font-serif text-bronze-dark text-center font-bold text-sm">
                    {book.title}
                  </span>
                </div>
              )}
            </div>

            {book.amazonUrl && (
              <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-bronze text-white border-2 border-black shadow-[4px_4px_0_0_#000] font-sans font-semibold px-4 py-2.5 text-sm uppercase tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all duration-75">
                  🛒 Buy on Amazon
                </button>
              </a>
            )}
            {book.ibsUrl && (
              <a href={book.ibsUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-white text-bronze-dark border-2 border-black shadow-[4px_4px_0_0_#000] font-sans font-semibold px-4 py-2.5 text-sm uppercase tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all duration-75">
                  🛒 Buy on IBS
                </button>
              </a>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <span
              className={`inline-block px-3 py-1 text-xs font-sans font-bold border-2 border-black mb-3 uppercase tracking-wider ${statusBadgeClasses[book.status]}`}
            >
              {statusLabels[book.status]}
            </span>

            <h1 className="font-serif text-3xl font-bold text-bronze-dark leading-tight mb-1">
              {book.title}
            </h1>
            <p className="font-sans text-base text-bronze font-medium mb-1">{book.author}</p>
            {book.translator && (
              <p className="font-sans text-sm text-gray-mid mb-3 italic">{book.translator}</p>
            )}

            <div className="flex gap-3 mb-4 flex-wrap items-start">
              <div className="border-2 border-black bg-white px-3 py-2 shrink-0">
                <p className="font-sans text-[10px] text-gray-mid uppercase tracking-wider font-semibold">
                  Pages
                </p>
                <p className="font-serif text-xl font-bold text-bronze-dark">{book.totalPages}</p>
              </div>
              {book.releaseYear && (
                <div className="border-2 border-black bg-white px-3 py-2 sh rink-0">
                  <p className="font-sans text-[10px] text-gray-mid uppercase tracking-wider font-semibold">
                    Release
                  </p>
                  <p className="font-serif text-xl font-bold text-bronze-dark">
                    {book.releaseYear}
                  </p>
                </div>
              )}
              <div className="flex flex-wrap gap-1.5 items-center pt-1">
                {book.genres.map((g) => (
                  <Tag key={g} label={g} />
                ))}
              </div>
            </div>

            {book.description && (
              <div className="border-2 border-black bg-white p-4 mb-4">
                <h3 className="font-serif text-lg font-bold text-bronze-dark mb-2">Synopsis</h3>
                <p className="font-sans text-sm text-bronze-dark leading-relaxed">
                  {book.description}
                </p>
              </div>
            )}

            {(book.status === 'reading' || book.pagesRead) && (
              <div className="border-2 border-black bg-white p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-lg font-bold text-bronze-dark">Progress</h3>
                  <span className="font-sans font-bold text-bronze-dark text-xl">{progress}%</span>
                </div>
                <ProgressBar value={progress} size="lg" />
                <div className="flex gap-6 mt-3">
                  {book.startDate && (
                    <div>
                      <p className="font-sans text-[10px] text-gray-mid uppercase tracking-wider font-semibold">
                        Started
                      </p>
                      <p className="font-sans text-sm font-semibold text-bronze-dark">
                        {book.startDate}
                      </p>
                    </div>
                  )}
                  {book.endDate && (
                    <div>
                      <p className="font-sans text-[10px] text-gray-mid uppercase tracking-wider font-semibold">
                        Finished
                      </p>
                      <p className="font-sans text-sm font-semibold text-bronze-dark">
                        {book.endDate}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {book.status === 'tbr' && (
              <Button variant="primary" size="md" onClick={onStartReading} className="w-full">
                Start Reading
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
