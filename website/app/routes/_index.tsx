import type { Route } from "./+types/_index";
import Welcome from "../welcome/welcome";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "WASUP" },
  ];
}

export default function Home() {
  return <>
    <Welcome />
  </>
}
