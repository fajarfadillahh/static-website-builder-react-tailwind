import {
  RiAddBoxLine,
  RiLayoutMasonryLine,
  RiPaletteLine,
  RiFileTextLine,
  RiImageLine,
  RiErrorWarningLine,
  RiSettings2Line,
  RiArrowLeftSLine,
  RiArrowDownSLine,
  RiEyeLine,
  RiComputerLine,
  RiMacbookLine,
  RiTabletLine,
  RiSmartphoneLine,
  RiArchiveLine,
  RiUserLine,
  RiUploadCloudLine,
  RiLayoutTopLine,
  RiLayoutRightLine,
  RiLayoutRowLine,
  RiLayoutBottomLine,
  RiLayoutColumnLine,
  RiLayoutLeftLine,
} from "react-icons/ri";
import { ReactComponent as LogoIcon } from "./assets/images/logo.svg";
import AvatarProfile from "./assets/images/avatar.png";

import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";

export default function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      {/* ===== SIDEBAR SECTION ===== */}
      <div className="grid h-screen w-18 grid-rows-[max-content,1fr] items-center border-r border-gray-200 bg-white">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
          <LogoIcon />
        </div>

        <div className="flex h-full flex-col justify-between py-10">
          <div className="flex flex-col items-center gap-4">
            <a
              href="#"
              className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
            >
              <RiAddBoxLine className="h-6 w-6" />
              <Tooltip>
                Add elements <span className="text-gray-400">(A)</span>
              </Tooltip>
            </a>

            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiLayoutMasonryLine className="h-6 w-6" />
              <Tooltip>
                Layouts <span className="text-gray-400">(L)</span>
              </Tooltip>
            </a>

            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiPaletteLine className="h-6 w-6" />
              <Tooltip>
                Themes <span className="text-gray-400">(T)</span>
              </Tooltip>
            </a>

            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiFileTextLine className="h-6 w-6" />
              <Tooltip>
                Assets <span className="text-gray-400">(E)</span>
              </Tooltip>
            </a>

            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiImageLine className="h-6 w-6" />
              <Tooltip>
                Images <span className="text-gray-400">(I)</span>
              </Tooltip>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiErrorWarningLine className="h-6 w-6" />
              <Tooltip>
                Helps <span className="text-gray-400">(Alt+H)</span>
              </Tooltip>
            </a>

            <a
              href="#"
              className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
            >
              <RiSettings2Line className="h-6 w-6" />
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

      <div className="flex h-screen flex-1 flex-col">
        {/* ===== NAVBAR SECTION ===== */}
        <header className="flex h-18 items-center justify-center gap-4 border-b border-gray-200 bg-white px-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
              <RiArrowLeftSLine className="h-6 w-6 text-gray-400" />
            </button>

            <button className="flex flex-col rounded-xl border border-gray-200 bg-gray-100 py-2 px-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">
                  Page: Homepage - Dipa
                </span>
                <RiArrowDownSLine className="h-6 w-6 text-gray-400" />
              </div>
              <div className="text-xs text-gray-400">
                https://dipainhouse.com
              </div>
            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-100 py-2 px-4">
              <RiEyeLine className="h-6 w-6 text-gray-400" />
              <span className="text-sm font-bold leading-6 text-gray-900">
                Preview
              </span>
            </button>
          </div>

          <div className="h-full w-px bg-gray-200"></div>

          <div className="flex items-center gap-4">
            <button className="rounded-xl bg-gray-100 p-2 hover:bg-gray-50">
              <RiComputerLine className="h-6 w-6 text-blue-600" />
            </button>

            <button className="rounded-xl p-2 hover:bg-gray-100">
              <RiMacbookLine className="h-6 w-6 text-gray-400" />
            </button>

            <button className="rounded-xl p-2 hover:bg-gray-100">
              <RiTabletLine className="h-6 w-6 text-gray-400" />
            </button>

            <button className="rounded-xl p-2 hover:bg-gray-100">
              <RiSmartphoneLine className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <div className="h-full w-px bg-gray-200"></div>

          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-100 py-2 px-4">
              <span className="text-sm font-bold text-gray-900">
                960px / 100%
              </span>
              <RiArrowDownSLine className="h-6 w-6 text-gray-400" />
            </button>

            <button className="rounded-xl border border-gray-200 bg-gray-100 p-2">
              <RiArchiveLine className="h-6 w-6 text-gray-400" />
            </button>
          </div>
        </header>
      </div>

      {/* ===== RIGHT MENU SECTION ===== */}
      <div className="flex h-screen w-[300px] flex-col border-l border-gray-200 bg-white">
        <div className="flex h-18 items-center justify-center gap-4 border-b border-gray-200 px-4">
          <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-100 py-2 px-4">
            <RiUserLine className="h-6 w-6 text-gray-400" />
            <span className="text-sm font-bold text-gray-900">Invite</span>
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-2 px-4">
            <RiUploadCloudLine className="h-6 w-6 text-white" />
            <span className="text-sm font-bold text-white">Publish</span>
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <span className="text-sm font-semibold">Selector</span>
            <span className="text-sm font-semibold text-gray-400">
              Inheriting{" "}
              <span className="font-bold text-gray-900">2 Selector</span>
            </span>
          </div>

          <div className="border-b border-gray-200 p-4">
            <button className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 py-2 px-4">
              <div className="flex items-center gap-2">
                <span className="rounded-xl bg-white p-2 shadow-sm">
                  <RiComputerLine className="h-6 w-6 text-blue-600" />
                </span>
                <span className="rounded-lg bg-blue-100 py-1 px-3 text-sm font-semibold text-blue-600">
                  H1 - hero title
                </span>
              </div>

              <RiArrowDownSLine className="h-6 w-6 text-gray-400" />
            </button>

            <div className="mt-2 text-xs font-semibold text-gray-400">
              1 on this page, 7 on other pages
            </div>
          </div>

          <Accordion title="Layout">
            <div className="flex items-center justify-between">
              <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                <RiLayoutTopLine className="h-5 w-5 text-gray-400" />
              </button>
              <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                <RiLayoutRightLine className="h-5 w-5 text-gray-400" />
              </button>
              <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                <RiLayoutRowLine className="h-5 w-5 text-gray-400" />
              </button>
              <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                <RiLayoutBottomLine className="h-5 w-5 text-gray-400" />
              </button>
              <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                <RiLayoutLeftLine className="h-5 w-5 text-gray-400" />
              </button>
              <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                <RiLayoutColumnLine className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
