import { Link } from "react-router";

export default function Welcome() {
  return (
    <main className="p-8 min-h-screen flex flex-col justify-center items-center w-full">
      <h1 className="text-9xl font-extrabold text-center">
        <Link to="wasup">
          WASUP (with a changed title)
        </Link>
      </h1>
    </main>
  );
}
