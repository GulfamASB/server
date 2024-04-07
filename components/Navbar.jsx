import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-orange-400 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
      <h1>GScoding</h1>
      </Link>
      <Link className="bg-white p-2" href={"/addTopic"}>
        Add The Post
      </Link>
    </nav>
  );
}
