import React from 'react';
import type { Book } from '../types/book';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';

interface CurrentlyReadingSectionProps {
  books: Book[];
  onUpdateProgress?: (bookId: string) => void;
  onBookClick?: (book: Book) => void;
}

export const CurrentlyReadingSection: React.FC<CurrentlyReadingSectionProps> = ({
  books,
  onUpdateProgress,
  onBookClick,
}) => {
  return (
    <section className="w-full bg-cream px-6 py-6">
      <h2 className="font-serif text-2xl font-bold text-bronze-dark mb-4 text-left">Currently Reading</h2>
      <div className="flex flex-col gap-4">
        {books.map((book) => {
          const progress =
            book.pagesRead && book.totalPages
              ? Math.round((book.pagesRead / book.totalPages) * 100)
              : 0;

          return (
            <div
              key={book.id}
              className="flex gap-4 bg-white border-2 border-black shadow-[6px_6px_0_0_#000] p-4 cursor-pointer"
              onClick={() => onBookClick?.(book)}
            >
              <div className="w-16 h-24 border-2 border-black overflow-hidden shrink-0 bg-cream">
                {book.coverUrl ? (
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-1">
                    <span className="font-serif text-[10px] text-bronze-dark text-center font-bold leading-tight">
                      {book.title}
                    </span>
                  </div>
                )}
              </div>

              <div
                className="flex-1 flex flex-col justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <h3 className="font-serif text-lg font-bold text-bronze-dark leading-tight">
                    {book.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-mid mt-0.5">{book.author}</p>
                </div>

                <div className="mt-3">
                  <p className="font-sans text-xs text-bronze-dark font-semibold mb-1.5 uppercase tracking-wider">
                    Progress
                  </p>
                  <ProgressBar value={progress} size="lg" />
                  <p className="font-sans text-xs font-semibold text-bronze-dark mt-1">
                    {progress}%
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onUpdateProgress?.(book.id);
                  }}
                  className="mt-3 w-fit normal-case"
                >
                  ✏ Update Progress
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
