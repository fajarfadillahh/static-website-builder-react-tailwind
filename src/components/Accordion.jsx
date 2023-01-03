import { RiArrowDownSLine } from "react-icons/ri";

export default function Accordion({ title, children }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 p-4 group-open:border-none">
        <span className="text-sm font-bold text-gray-900">{title}</span>
        <RiArrowDownSLine className="h-6 w-6 rotate-90 text-gray-400 group-open:rotate-0" />
      </summary>

      <div className="border-b border-gray-200 p-4">{children}</div>
    </details>
  );
}
