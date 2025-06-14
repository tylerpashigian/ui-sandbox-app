"use server";

import Link from "next/link";
import { getAppRoutes } from "~/lib/server-utils";

export default async function ServerRouteList() {
  const routes = await getAppRoutes();
  
  return (
    <ul className="space-y-2">
      {routes.map((path) => (
        <li key={path}>
          <Link href={path} className="text-blue-500 hover:text-blue-600">
            {path === "/" ? "Home" : path.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </Link>
        </li>
      ))}
    </ul>
  );
}
