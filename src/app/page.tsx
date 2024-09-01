import Link from "next/link";
import { pages } from "@/app/(navigation)/data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-extrabold text-gray-900 sm:mb-12 sm:text-5xl">
          Sather Family
        </h1>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-12">
          {pages.map((page) => (
            <Link
              key={page.name}
              href={page.href}
              className={`${page.size} flex`}
            >
              <div
                className={`bg-gradient-to-br ${page.color} hover:scale-102 flex w-full transform 
                               flex-col justify-between rounded-xl p-4
                               shadow-lg transition duration-300 ease-in-out hover:rotate-1 hover:shadow-2xl sm:p-6`}
              >
                <div className="mb-2 flex items-center sm:mb-4">
                  <page.icon
                    className="mr-2 h-6 w-6 text-white sm:h-8 sm:w-8"
                    aria-hidden="true"
                  />
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {page.name}
                  </h2>
                </div>
                <p className="mt-2 text-base text-white text-opacity-90 sm:text-lg">
                  {page.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
