import ServerRouteList from "../_components/server-routes";

export default async function Pages() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-12 py-16 text-center">
      <h1 className="mb-6 text-2xl font-bold">UI Sandbox Pages</h1>
      <ServerRouteList />
    </div>
  );
}
