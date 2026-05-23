import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <nav className="bg-white border-b-4 border-black px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-black tracking-tighter text-black">
        Readmark
      </div>

      <div className="flex gap-3">
        <button className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer">
          <SearchIcon />
        </button>

        <button className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer">
          <MenuIcon />
        </button>

      </div>
    </nav>
  );
}