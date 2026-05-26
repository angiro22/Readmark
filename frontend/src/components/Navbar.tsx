import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {
  onSearchClick?: () => void;
  onMenuClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick, onMenuClick }) => {
  return (
    <nav className="w-full bg-white border-b-2 border-black px-6 py-3 flex items-center justify-between">
      <span className="font-serif text-xl font-bold text-bronze-dark">Readmark</span>
      <div className="flex gap-2">
        <button
          onClick={onSearchClick}
          className="w-9 h-9 border-2 border-black bg-white flex items-center justify-center shadow-[3px_3px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-75 text-bronze-dark"
          aria-label="Search"
        >
          <SearchIcon fontSize="small" />
        </button>
        <button
          onClick={onMenuClick}
          className="w-9 h-9 border-2 border-black bg-white flex items-center justify-center shadow-[3px_3px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-75 text-bronze-dark"
          aria-label="Menu"
        >
          <MenuIcon fontSize="small" />
        </button>
      </div>
    </nav>
  );
};
