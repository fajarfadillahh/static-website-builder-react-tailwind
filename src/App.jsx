import {
  RiAddBoxLine,
  RiLayoutMasonryLine,
  RiPaletteLine,
  RiFileTextLine,
  RiImageLine,
  RiErrorWarningLine,
  RiSettings2Line,
} from "react-icons/ri";
import { ReactComponent as LogoIcon } from "./assets/images/logo.svg";
import AvatarProfile from "./assets/images/avatar.png";

import Tooltip from "./components/Tooltip";

export default function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      {/* ===== SIDEBAR SECTION ===== */}
      <div className="grid h-screen w-18 grid-rows-[max-content,1fr] items-center border-r border-gray-200 bg-white">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
          <LogoIcon />
        </div>

        <div className="flex h-full flex-col justify-between py-10">
          <div className="flex flex-col items-center gap-y-4">
            <a
              href="#"
              className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
            >
              <RiAddBoxLine className="h-6 w-6 stroke-current" />
              <Tooltip>
                Add elements <span className="text-gray-400">(A)</span>
              </Tooltip>
            </a>

            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiLayoutMasonryLine className="h-6 w-6 stroke-current" />
              <Tooltip>
                Layouts <span className="text-gray-400">(L)</span>
              </Tooltip>
            </a>

            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiPaletteLine className="h-6 w-6 stroke-current" />
              <Tooltip>
                Themes <span className="text-gray-400">(T)</span>
              </Tooltip>
            </a>

            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiFileTextLine className="h-6 w-6 stroke-current" />
              <Tooltip>
                Assets <span className="text-gray-400">(E)</span>
              </Tooltip>
            </a>

            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiImageLine className="h-6 w-6 stroke-current" />
              <Tooltip>
                Images <span className="text-gray-400">(I)</span>
              </Tooltip>
            </a>
          </div>

          <div className="flex flex-col items-center gap-y-4">
            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiErrorWarningLine className="h-6 w-6 stroke-current" />
              <Tooltip>
                Helps <span className="text-gray-400">(Alt+H)</span>
              </Tooltip>
            </a>

            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiSettings2Line className="h-6 w-6 stroke-current" />
              <Tooltip>
                Settings <span className="text-gray-400">(Alt+S)</span>
              </Tooltip>
            </a>

            <div className="cursor-pointer overflow-hidden">
              <img
                src={AvatarProfile}
                className="h-10 w-10 object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
