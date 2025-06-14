import ServerRouteList from "../_components/server-routes";

export default async function Pages() {
  return (
    <div className="container mx-auto flex flex-col justify-center gap-12 px-80 py-16">
      <h1 className="mb-6 text-2xl font-bold">UI Sandbox Pages</h1>
      <ServerRouteList />
    </div>
  );
}
