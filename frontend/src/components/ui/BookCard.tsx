import React from 'react';
import type { Book } from '../../types/book';

interface BookCardProps {
  book: Book;
  onClick?: () => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col cursor-pointer group w-full">
      <div className="w-full aspect-2/3 border-2 border-black shadow-[6px_6px_0_0_#000] bg-white overflow-hidden group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[4px_4px_0_0_#000] transition-all duration-75">
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-cream flex items-center justify-center p-2">
            <span className="font-serif text-xs text-bronze-dark text-center font-bold leading-tight">
              {book.title}
            </span>
          </div>
        )}
      </div>
      <div className="mt-2">
        <p className="font-serif text-sm font-bold text-bronze-dark leading-tight line-clamp-2">
          {book.title}
        </p>
        <p className="font-sans text-xs text-gray-mid truncate mt-0.5">{book.author}</p>
      </div>
    </div>
  );
};
