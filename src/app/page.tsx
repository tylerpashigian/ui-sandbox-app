import { Zap } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <header className="text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Animation
            </span>
            <br />
            <span className="text-slate-900 dark:text-white">Sandbox</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-300">
            A curated collection of animation experiments, techniques, and
            interactive demos. Dive into the world of web animations and
            discover what is possible.
          </p>
        </header>

        <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/pages"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            Enter Sandbox
          </Link>
          <Link
            href="https://www.tylerpashigian.com/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-lg font-medium text-slate-700 shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            About Me
          </Link>
        </div>
      </div>
    </main>
  );
}
