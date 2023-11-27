// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-red-400 text-white p-4">
    <ul className="flex">
      <li className="mr-4">Home</li>
      <li className="mr-4">About</li>
      <li>Contact</li>
    </ul>
  </nav>
  );
};

export default Navbar;