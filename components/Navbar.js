import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-gray-800 text-white flex justify-around">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
