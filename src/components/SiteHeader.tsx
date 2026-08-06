import Link from "next/link";

export default function SiteHeader() {
  return (
    <div className="w-full flex justify-center pt-6">
      <nav className="nb-border nb-shadow bg-white px-5 py-2 flex items-center gap-4 text-sm font-bold uppercase">
        <Link href="/" className="hover:underline">
          Workflow
        </Link>
        <span className="opacity-30">/</span>
        <Link href="/library" className="hover:underline">
          Prompt Library
        </Link>
        <span className="opacity-30">/</span>
        <Link href="/yc-guide" className="hover:underline">
          YC Guide
        </Link>
      </nav>
    </div>
  );
}
