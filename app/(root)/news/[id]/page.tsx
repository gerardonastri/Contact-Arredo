// import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getNewsBySlug } from "@/lib/news";
import MDXContent from "@/components/MDXContent";
import { formatDate } from "@/lib/utils";

const NewsArticleDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const news = await getNewsBySlug(id);

  if (!news) {
    throw new Error(`News with id ${id} not found`);
  }

  const { metadata, content } = news;
  const { title, image, author, publishedAt, category } = metadata;

  return (
    <article className="relative max-w-[1700px] mx-auto">
      <div className="px-4 lg:px-[3rem] py-8">
        <div>
          {/* Header */}
          <div className="mb-8 flex flex-col items-center text-center">
            <Link
              href="/news"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
            <div className="space-y-4">
              <span className="inline-block text-sm text-emerald-950 rounded-3xl font-bold py-2 px-3 bg-emerald-50">
                {category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold lg:max-w-[70%] mx-auto">
                {title}
              </h1>
              <p className="text-gray-600">{formatDate(publishedAt ?? "")} </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[3/2] md:aspect-[2/1] mb-12">
            <Image
              src={image || ""}
              alt={title || ""}
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          <header>
            <h1 className="title">{title}</h1>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              {author} / {formatDate(publishedAt ?? "")}
            </p>
          </header>

          <main className="prose mt-16">
            <MDXContent source={content} />
          </main>
        </div>
      </div>
    </article>
  );
};

export default NewsArticleDetail;
