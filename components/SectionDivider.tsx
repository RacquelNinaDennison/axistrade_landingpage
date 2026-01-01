export function SectionDivider() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/10"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-[#0a0a0a] px-6">
          <div className="w-2 h-2 bg-gradient-to-r from-white/40 via-[#E97A02] to-white/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}