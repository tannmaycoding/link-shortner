import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0">

      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">Link Shortener</Link>
      </div>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 transition">
          <Link href="/about">About</Link>
        </li>

        <li className="hover:text-blue-600 transition">
          <Link href="/main">Shorten Links</Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;