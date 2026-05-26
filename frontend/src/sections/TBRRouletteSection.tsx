import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Book } from '../types/book';
import { Button } from '../components/ui/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type RouletteState = 'idle' | 'spinning' | 'result';

interface TBRRouletteSectionProps {
  books: Book[];
  onStartReading?: (book: Book) => void;
}

export const TBRRouletteSection: React.FC<TBRRouletteSectionProps> = ({
  books,
  onStartReading,
}) => {
  const [state, setState] = useState<RouletteState>('idle');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [genreFilter, setGenreFilter] = useState('');
  const [lengthFilter, setLengthFilter] = useState('');

  const allGenres = [...new Set(books.flatMap((b) => b.genres))];

  const handleSpin = () => {
    setState('spinning');
    setTimeout(() => {
      const filtered = books.filter((b) => {
        if (genreFilter && !b.genres.includes(genreFilter)) return false;
        if (lengthFilter === 'short' && b.totalPages > 300) return false;
        if (lengthFilter === 'medium' && (b.totalPages <= 300 || b.totalPages > 500)) return false;
        if (lengthFilter === 'long' && b.totalPages <= 500) return false;
        return true;
      });
      const pool = filtered.length > 0 ? filtered : books;
      const winner = pool[Math.floor(Math.random() * pool.length)];
      setSelectedBook(winner);
      setState('result');
    }, 2200);
  };

  const handleRespin = () => {
    setSelectedBook(null);
    setState('idle');
  };

  const spinItems = [...books, ...books, ...books];

  return (
    <div className="w-screen relative left-1/2 right-1/2 mx-[-50vw] bg-white border-y-2 border-black">
      <div className="py-10 flex flex-col items-center">
        <h2 className="font-serif text-2xl font-bold text-bronze-dark mb-8 text-center">
          TBR Roulette
        </h2>

        <div className="flex flex-col items-center gap-6 w-full px-6">
          {state !== 'result' && (
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <div className="relative">
                <select
                  value={genreFilter}
                  onChange={(e) => setGenreFilter(e.target.value)}
                  className="w-full border-2 border-black bg-white font-sans px-3 py-2.5 pr-10 text-bronze-dark shadow-[3px_3px_0_0_#000] focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Any Genre</option>
                  {allGenres.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-bronze-dark">
                  <KeyboardArrowDownIcon fontSize="small" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={lengthFilter}
                  onChange={(e) => setLengthFilter(e.target.value)}
                  className="w-full border-2 border-black bg-white font-sans px-3 py-2.5 pr-10 text-bronze-dark shadow-[3px_3px_0_0_#000] focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Any Length</option>
                  <option value="short">Short (&lt; 300 pages)</option>
                  <option value="medium">Medium (300–500 pages)</option>
                  <option value="long">Long (&gt; 500 pages)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-bronze-dark">
                  <KeyboardArrowDownIcon fontSize="small" />
                </div>
              </div>
            </div>
          )}

          <div className="w-44 h-60 border-2 border-black shadow-[6px_6px_0_0_#000] bg-white relative overflow-hidden">
            <AnimatePresence mode="wait">
              {state === 'idle' && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full flex items-center justify-center bg-cream"
                >
                  <span className="font-serif text-8xl font-bold text-bronze-dark select-none">
                    ?
                  </span>
                </motion.div>
              )}

              {state === 'spinning' && (
                <motion.div
                  key="spinning"
                  className="w-full flex flex-col"
                  initial={{ y: 0 }}
                  animate={{ y: -(spinItems.length - 1) * 240 }}
                  transition={{ duration: 2.0, ease: [0.2, 0, 0.8, 1] }}
                >
                  {spinItems.map((book, i) => (
                    <div
                      key={`${book.id}-${i}`}
                      className="w-44 h-60 shrink-0 bg-cream border-b-2 border-black"
                    >
                      {book.coverUrl ? (
                        <img
                          src={book.coverUrl}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-3">
                          <span className="font-serif text-sm text-bronze-dark text-center font-bold">
                            {book.title}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}

              {state === 'result' && selectedBook && (
                <motion.div
                  key="result"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="w-full h-full"
                >
                  {selectedBook.coverUrl ? (
                    <img
                      src={selectedBook.coverUrl}
                      alt={selectedBook.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-cream flex flex-col items-center justify-center p-3">
                      <span className="font-serif text-sm text-bronze-dark text-center font-bold">
                        {selectedBook.title}
                      </span>
                      <span className="font-sans text-xs text-gray-mid text-center mt-1">
                        {selectedBook.author}
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {state === 'result' && selectedBook && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="font-serif text-lg font-bold text-bronze-dark">{selectedBook.title}</p>
              <p className="font-sans text-sm text-gray-mid">{selectedBook.author}</p>
            </motion.div>
          )}

          <div className="flex flex-col gap-3 w-full max-w-xs">
            {state === 'idle' && (
              <Button variant="primary" size="lg" onClick={handleSpin} className="w-full">
                🎲 Spin My TBR
              </Button>
            )}
            {state === 'spinning' && (
              <Button variant="primary" size="lg" disabled className="w-full">
                Spinning...
              </Button>
            )}
            {state === 'result' && selectedBook && (
              <>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onStartReading?.(selectedBook)}
                  className="w-full"
                >
                  Start Reading
                </Button>
                <Button variant="secondary" size="md" onClick={handleRespin} className="w-full">
                  Spin Again
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
