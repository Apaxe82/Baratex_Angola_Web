// components/StickyHeader.tsx
export default function StickyHeader() {
  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-40 py-3 px-6 flex justify-between items-center md:hidden">
      <span className="font-bold text-baratexGreen text-sm">BARATEX 24/7</span>
      <a href="https://wa.me" 
         className="bg-baratexGreen text-white px-4 py-2 rounded-full text-xs font-black animate-pulse">
        PEDIR ORÇAMENTO! ⭐
      </a>
    </div>
  );
}
