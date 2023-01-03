import { RiPencilFill } from "react-icons/ri";

export default function EditElements({ title, children }) {
  return (
    <div className="group relative">
      <div className="pointer-events-none absolute inset-0 left-0 hidden border-2 border-blue-600 group-focus-within:block">
        <div className="absolute left-4 flex -translate-y-full items-center gap-2 rounded-t-lg bg-blue-600 py-1 px-3 text-white">
          <span className="text-sm">{title}</span>
          <RiPencilFill className="h-5 w-5" />
        </div>

        {/* Dots Indicator */}
        <div className="absolute top-0 left-0 h-2 w-2 -translate-x-full -translate-y-full border-2 border-blue-600 bg-white"></div>

        <div className="absolute top-0 right-0 h-2 w-2 translate-x-full -translate-y-full border-2 border-blue-600 bg-white"></div>

        <div className="absolute bottom-0 left-0 h-2 w-2 -translate-x-full translate-y-full border-2 border-blue-600 bg-white"></div>

        <div className="absolute bottom-0 right-0 h-2 w-2 translate-x-full translate-y-full border-2 border-blue-600 bg-white"></div>

        <div className="absolute top-0 left-1/2 h-2 w-2 -translate-y-1/2 -translate-x-0 border-2 border-blue-600 bg-white"></div>

        <div className="absolute bottom-0 left-1/2 h-2 w-2 translate-y-1/2 -translate-x-0 border-2 border-blue-600 bg-white"></div>
      </div>

      {children}
    </div>
  );
}
