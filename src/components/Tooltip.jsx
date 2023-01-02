export default function Tooltip({ children }) {
  return (
    <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
      <div className="whitespace-nowrap rounded-md bg-white py-2 px-4 text-sm font-bold text-gray-900 drop-shadow-lg">
        <div className="absolute inset-y-0 -left-1 flex items-center">
          <div className="h-2 w-2 rotate-45 bg-white"></div>
        </div>
        {children}
      </div>
    </div>
  );
}
