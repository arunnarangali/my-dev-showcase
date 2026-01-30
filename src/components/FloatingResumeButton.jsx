import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import ResumePDF from "../assets/ArunN-CV.pdf";

function FloatingResumeButton() {
  return (
    <a
      href={ResumePDF}
      download="ArunN-CV.pdf"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-black/50 focus:outline-none focus:ring-4 focus:ring-zinc-500"
      title="Download Resume"
    >
      <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-black px-3 py-1.5 text-xs font-bold tracking-wide text-white opacity-0 shadow-xl border border-white/20 transition-all duration-300 group-hover:block group-hover:opacity-100">
         Download Resume
      </span>
      <ArrowDownTrayIcon className="h-6 w-6" />
    </a>
  );
}

export default FloatingResumeButton;
