import React from 'react';
import type { Book } from '../types/book';
import { BookCard } from '../components/ui/BookCard';

interface UpNextSectionProps {
  books: Book[];
  onBookClick?: (book: Book) => void;
  onAddBook?: () => void;
}

export const UpNextSection: React.FC<UpNextSectionProps> = ({
  books,
  onBookClick,
  onAddBook,
}) => {
  return (
    <section className="w-full bg-cream px-6 py-6">
      <h2 className="font-serif text-2xl font-bold text-bronze-dark mb-4">Up Next</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onClick={() => onBookClick?.(book)} />
        ))}

        <div className="flex flex-col w-full">
          <div
            onClick={onAddBook}
            className="w-full aspect-2/3 border-2 border-dashed border-black bg-white flex flex-col items-center justify-center cursor-pointer hover:bg-cream transition-colors duration-100 shadow-[6px_6px_0_0_#000]"
          >
            <span className="text-3xl text-bronze-dark font-bold leading-none">+</span>
          </div>
          <div className="mt-2">
            <p className="font-serif text-sm font-bold text-bronze-dark">Add Book</p>
          </div>
        </div>
      </div>
    </section>
  );
};
