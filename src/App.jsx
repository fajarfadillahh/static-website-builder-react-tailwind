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
  RiLineHeight,
  RiTextSpacing,
  RiAlignLeft,
  RiAlignCenter,
  RiAlignRight,
  RiAlignTop,
  RiAlignVertically,
  RiAlignBottom,
  RiSipLine,
  RiMenu2Fill,
} from "react-icons/ri";
import { ReactComponent as LogoIcon } from "./assets/images/logo.svg";
import AvatarProfile from "./assets/images/avatar.png";
import LogoContent from "./assets/images/logo.png";
import AlphaImg from "./assets/images/alpha-pay.png";
import BillyImg from "./assets/images/billy.png";

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

        <main className="flex-1 overflow-y-auto p-12">
          {/* ===== CONTENT SECTION ===== */}
          <div className="bg-white">
            <header className="flex items-center justify-between px-12 py-6">
              <img src={LogoContent} className="h-12 w-12" alt="Logo Content" />

              <div className="flex items-center gap-8">
                <button className="flex justify-center rounded-full bg-blue-600 py-4 px-12 font-bold text-white">
                  Hire Us
                </button>
                <button>
                  <RiMenu2Fill className="h-6 w-6 text-gray-400" />
                </button>
              </div>
            </header>

            <section className="py-20 px-12">
              <h1
                className="max-w-3xl text-5xl font-bold leading-[1.4]"
                contentEditable
              >
                We craft digital products for business and user goals
              </h1>
              <p className="mt-4 text-lg leading-loose text-gray-400">
                Help find solutiions with UI / UX Designs that are intuitive and
                in accordance with client business goals. We provide a
                high-quality service in UI / UX Designs & Development.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button className="flex justify-center rounded-full bg-blue-600 py-4 px-8 font-bold text-white">
                  Let's work together
                </button>
                <button className="flex justify-center rounded-full border-2 border-gray-200 py-4 px-8 font-bold text-blue-600">
                  Check our work
                </button>
              </div>
            </section>

            <section className="bg-gray-50 py-20 px-12">
              <div>
                <span className="pb-4 font-semibold text-gray-400">
                  Our Projects
                </span>
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold">
                    Our latest cool projects.
                  </h1>
                  <button className="flex justify-center rounded-full bg-white py-4 px-8 font-bold text-blue-600">
                    Let's work together
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-12">
                <img
                  src={AlphaImg}
                  className="aspect-square overflow-hidden"
                  alt="Projecy image"
                />
                <img
                  src={BillyImg}
                  className="aspect-square overflow-hidden"
                  alt="Projecy image"
                />
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* ===== RIGHT MENU SECTION ===== */}
      <div className="flex h-screen w-[300px] flex-col border-l border-gray-200 bg-white pb-18">
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

          <Accordion title="Spacing">
            <div className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 py-10 px-12">
              <span className="absolute top-2 left-2 text-[10px] font-semibold uppercase text-gray-400">
                Margin
              </span>

              <div className="relative w-full">
                <span className="absolute bottom-2 right-2 text-[10px] font-semibold uppercase text-gray-400">
                  Padding
                </span>

                <div className="h-24 w-full rounded-xl border-2 border-blue-600 py-8 px-10">
                  <div className="h-full w-full rounded-md bg-gray-200"></div>
                </div>

                {/* Editable Value Spasing */}
                <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 flex-col items-center justify-center gap-1">
                  <input
                    type="text"
                    className="h-4 w-4 text-center text-sm font-semibold outline-none"
                    defaultValue={20}
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                  <input
                    type="text"
                    className="h-4 w-4 text-center text-sm font-semibold outline-none"
                    defaultValue={0}
                  />
                </div>

                <div className="absolute inset-y-0 right-0 flex translate-x-1/2 items-center justify-center gap-1">
                  <input
                    type="text"
                    className="h-4 w-4 text-center text-sm font-semibold outline-none"
                    defaultValue={0}
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                  <input
                    type="text"
                    className="h-4 w-4 text-center text-sm font-semibold outline-none"
                    defaultValue={20}
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-col items-center justify-center gap-1">
                  <input
                    type="text"
                    className="h-4 w-4 text-center text-sm font-semibold outline-none"
                    defaultValue={0}
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                  <input
                    type="text"
                    className="h-4 w-4 text-center text-sm font-semibold outline-none"
                    defaultValue={20}
                  />
                </div>

                <div className="absolute inset-y-0 left-0 flex -translate-x-1/2 items-center justify-center gap-1">
                  <input
                    type="text"
                    className="h-4 w-4 text-center text-sm font-semibold outline-none"
                    defaultValue={20}
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                  <input
                    type="text"
                    className="h-4 w-4 text-center text-sm font-semibold outline-none"
                    defaultValue={0}
                  />
                </div>
              </div>
            </div>
          </Accordion>

          <Accordion title="Size">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 flex items-center pl-4">
                  <span className="text-sm font-medium text-gray-400">W</span>
                </div>

                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-16 pr-4 text-right text-sm font-bold text-gray-900"
                  defaultValue="Auto"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 flex items-center pl-4">
                  <span className="text-sm font-medium text-gray-400">H</span>
                </div>

                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-16 pr-4 text-right text-sm font-bold text-gray-900"
                  defaultValue="Auto"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 flex items-center pl-4">
                  <span className="text-sm font-medium text-gray-400">
                    Min W
                  </span>
                </div>

                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-16 pr-4 text-right text-sm font-bold text-gray-900"
                  defaultValue="Auto"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 flex items-center pl-4">
                  <span className="text-sm font-medium text-gray-400">
                    Min H
                  </span>
                </div>

                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-16 pr-4 text-right text-sm font-bold text-gray-900"
                  defaultValue="Auto"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 flex items-center pl-4">
                  <span className="text-sm font-medium text-gray-400">
                    Max W
                  </span>
                </div>

                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-16 pr-4 text-right text-sm font-bold text-gray-900"
                  defaultValue="Auto"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 flex items-center pl-4">
                  <span className="text-sm font-medium text-gray-400">
                    Max H
                  </span>
                </div>

                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-16 pr-4 text-right text-sm font-bold text-gray-900"
                  defaultValue="Auto"
                />
              </div>

              <div className="col-span-2">
                <button className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 py-2 px-4">
                  <span className="text-sm font-medium text-gray-400">
                    Overflow
                  </span>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <RiEyeLine className="h-5 w-5 text-gray-400" />
                      <span className="font-semibold">Invisible</span>
                    </div>

                    <RiArrowDownSLine className="h-5 w-5 text-gray-400" />
                  </div>
                </button>
              </div>
            </div>
          </Accordion>

          <Accordion title="Typography">
            <div className="grid grid-cols-2 gap-4">
              <button className="col-span-2 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 py-2 px-4">
                <input
                  type="text"
                  className="bg-transparent text-sm font-semibold outline-none"
                  defaultValue="Inter"
                />
                <RiArrowDownSLine className="h-5 w-5 text-gray-400" />
              </button>

              <button className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-gray-50 py-2 px-4">
                <span className="text-sm font-semibold">Reguler</span>
                <RiArrowDownSLine className="h-5 w-5 text-gray-400" />
              </button>

              <button className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 py-2 px-4">
                <input
                  type="text"
                  className="w-10 bg-transparent text-sm font-semibold outline-none"
                  defaultValue="16"
                />
                <RiArrowDownSLine className="h-5 w-5 text-gray-400" />
              </button>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 py-2 px-4">
                <RiLineHeight className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-10 bg-transparent text-right text-sm font-semibold outline-none"
                  defaultValue="Auto"
                />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 py-2 px-4">
                <RiTextSpacing className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-10 bg-transparent text-right text-sm font-semibold outline-none"
                  defaultValue="Auto"
                />
              </div>

              <div className="col-span-2 flex items-center justify-between">
                <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                  <RiAlignLeft className="h-5 w-5 text-gray-400" />
                </button>
                <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                  <RiAlignCenter className="h-5 w-5 text-gray-400" />
                </button>
                <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                  <RiAlignRight className="h-5 w-5 text-gray-400" />
                </button>
                <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                  <RiAlignTop className="h-5 w-5 text-gray-400" />
                </button>
                <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                  <RiAlignVertically className="h-5 w-5 text-gray-400" />
                </button>
                <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                  <RiAlignBottom className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </Accordion>

          <Accordion title="Background">
            <div className="flex items-center justify-between gap-4">
              <div className="grid w-full grid-cols-[1fr,max-content] divide-x-2 divide-gray-200 rounded-xl border border-gray-200 bg-gray-100 py-2 px-4">
                <input
                  type="text"
                  className="w-20 bg-transparent text-sm font-semibold outline-none"
                  defaultValue="#D6D6D6"
                />
                <input
                  type="text"
                  className="w-16 bg-transparent pl-4 text-sm font-semibold outline-none"
                  defaultValue="100%"
                />
              </div>

              <button className="rounded-xl border border-gray-200 bg-gray-100 p-2 hover:bg-gray-50">
                <RiSipLine className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
