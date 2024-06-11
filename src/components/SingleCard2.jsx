"use client";

import SanitizedContent from "@/utility/SanitizeHtml";
import Link from "next/link";

export default function SingleCard2({ value }) {
  return (
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <img
          alt=""
          src={value?.attributes.img.data[0].attributes.url}
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">
            {value?.attributes.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            <SanitizedContent content={value.attributes.desc} />
          </p>
          <Link
            href={`/blog/${value.id}`}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Read more..
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
}
