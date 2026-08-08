import Link from "next/link";

export default function SiteHeader() {
  return (
    <div className="w-full flex justify-center pt-6">
      <nav className="nb-border nb-shadow bg-white px-5 py-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-bold uppercase max-w-[90vw]">
        <Link href="/" className="hover:underline">
          Workflow
        </Link>
        <span className="opacity-30">/</span>
        <Link href="/library" className="hover:underline">
          Prompt Library
        </Link>
        <span className="opacity-30">/</span>
        <Link href="/research-methods" className="hover:underline">
          Research Methods
        </Link>
        <span className="opacity-30">/</span>
        <Link href="/yc-guide" className="hover:underline">
          YC Guide
        </Link>
        <span className="opacity-30">/</span>
        <Link href="/founder-archive" className="hover:underline">
          Founder Archive
        </Link>
      </nav>
    </div>
  );
}
