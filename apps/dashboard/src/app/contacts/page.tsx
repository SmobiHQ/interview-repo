"use client";

import { Loading } from "~/src/components/Loading";


export default function Contacts() {

  const isLoading = false;

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <Loading size={32} />
        </div>
      ) : (
        <div className="h-full">
          {/* Heading */}
          <div className="flex flex-col items-center justify-between gap-x-8 gap-y-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <div>
              <div className="flex items-center gap-x-3">
                <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                  <div className="h-2 w-2 rounded-full bg-current" />
                </div>
                <h1 className="flex gap-x-3 text-base leading-7">
                  <span className="font-semibold">Contacts</span>
                </h1>
              </div>
              <p className="mt-2 text-xs leading-6 text-gray-800">
                Do xyz here.
              </p>
            </div>
            {/* <div>
              <Link href={`/application/`}>
                <button className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                  Add Campaign
                </button>
              </Link>
            </div> */}
          </div>

        </div>
      )}
    </>
  );
}
