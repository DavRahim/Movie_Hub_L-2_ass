import { Clock10, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className=" bg-gray-200">
      <div className="container mx-auto h-14 flex items-center justify-between ">
        {/* Logo Section */}
        <div>
          <div className="">
            <span className="text-[24px] text-amber-500 font-bold">Cine</span>
            <span className="text-[32px]">FREAK</span>
          </div>
        </div>
        {/* Navigation links Section */}
        <div>
          <ul className="flex items-center justify-center gap-6">
            <li>Home</li>
            <li>WEB-Series</li>
            <li>Movies</li>
            <li>MCU</li>
            <li>Request</li>
          </ul>
        </div>
        {/*  A prominent button/link to navigate*/}
        <div className="flex gap-6">
          <Clock10 size={20} />
          <Search size={20} />
        </div>
      </div>
    </nav>
  );
}
