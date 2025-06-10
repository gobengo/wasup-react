import type { Route } from "./+types/_index";
import Welcome from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WASUP" },
  ];
}

export default function Home() {
  return <Welcome />;
}
