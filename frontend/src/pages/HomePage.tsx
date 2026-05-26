import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { CurrentlyReadingSection } from '../sections/CurrentlyReadingSection';
import { TBRRouletteSection } from '../sections/TBRRouletteSection';
import { UpNextSection } from '../sections/UpNextSection';
import { BookDetailModal } from '../modals/BookDetailModal';
import type { Book } from '../types/book';
import { mockCurrentlyReading, mockTBR } from '../data/mockData';

export const HomePage: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />
      <main className="max-w-2xl mx-auto">
        <CurrentlyReadingSection
          books={mockCurrentlyReading}
          onBookClick={(book) => setSelectedBook(book)}
          onUpdateProgress={(id) => console.log('update progress', id)}
        />
        <TBRRouletteSection
          books={mockTBR}
          onStartReading={(book) => setSelectedBook(book)}
        />
        <UpNextSection
          books={mockTBR}
          onBookClick={(book) => setSelectedBook(book)}
          onAddBook={() => console.log('add book')}
        />
      </main>

      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onStartReading={() => {
            console.log('start reading', selectedBook.id);
            setSelectedBook(null);
          }}
        />
      )}
    </div>
  );
};
