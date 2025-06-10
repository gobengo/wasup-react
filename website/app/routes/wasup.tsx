import { Link } from "react-router";

export default function TestPage() {
  return <div className="p-8 prose">
    <h2>Links</h2>
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
    </ul>
  </div>
}
