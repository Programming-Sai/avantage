import { newsPosts } from "../data/site";

const posts = (
  newsPosts as unknown as {
    date: string;
    category: string;
    title: string;
    body: string;
  }[]
).map(
  (p, i) =>
    ({
      large: i === 0,
      date: p.date.toUpperCase(),
      categories: p.category.split("/").map((s) => s.trim()),
      title: p.title,
      body: p.body,
      image: i === 0 ? "/latest-news.png" : undefined,
    }) as const,
);

export default function NewsSection() {
  return (
    <section className="px-5 py-16 md:px-[20px]">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-6 bg-[#E0A83B]" />
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#E0A83B]">
            Our Announcements
          </span>
        </div>
        <h2 className="mb-8 text-[clamp(2.15rem,5vw,2.8rem)] font-extrabold text-[#0D1B2A]">
          Latest <span className="text-[#D48C2B]">News</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <article
            className="relative min-h-[320px] overflow-hidden bg-cover bg-center p-5 text-white sm:min-h-[360px] sm:p-6 md:col-span-2 lg:col-span-1"
            style={{ backgroundImage: `url(${posts[0].image})` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,50,80,0.15),rgba(15,25,40,0.85))]" />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <div className="mb-2">
                {posts[0].categories.map((category, index) => (
                  <span
                    key={category}
                    className={`text-[11px] font-bold uppercase tracking-[0.06em] ${index === 0 ? "" : "ml-3"}`}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h3 className="text-[21px] font-extrabold">{posts[0].title}</h3>
              <p className="mt-3 max-w-[400px] text-[13.5px] leading-6 text-[#E0A83B]">
                {posts[0].body}
              </p>
              <a
                href="#"
                className="mt-3 text-xs font-bold uppercase tracking-[0.06em] text-[#D48C2B]"
              >
                Read more &rsaquo;
              </a>
            </div>
            <div className="absolute right-0 top-0 z-10 flex h-24 w-24 flex-col items-end justify-start gap-1 bg-white p-4 text-center text-[#0D1B2A] [clip-path:polygon(0%_0%,100%_0%,100%_100%)] sm:h-28 sm:w-28 sm:p-1">
              <div className="text-[22px] font-extrabold leading-none sm:text-[26px]">
                4
              </div>
              <div className="text-[10px] font-bold tracking-[0.08em] sm:text-[11px]">
                APR
              </div>
            </div>
          </article>

          {posts.slice(1).map((post) => (
            <article
              key={post.title}
              className="relative bg-[#1A1A1A] p-5 sm:p-6"
            >
              <div className="absolute right-0 top-0 z-10 flex h-24 w-24 flex-col items-end justify-start gap-1 bg-white p-4 text-center text-[#0D1B2A] [clip-path:polygon(0%_0%,100%_0%,100%_100%)] sm:h-28 sm:w-28 sm:p-1">
                <div className="text-[22px] font-extrabold leading-none sm:text-[26px]">
                  {post.date.split(" ")[0]}
                </div>
                <div className="text-[10px] font-bold tracking-[0.08em] sm:text-[11px]">
                  {post.date.split(" ")[1]}
                </div>
              </div>
              <div className="mb-3 mt-16 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mt-20">
                <span className="inline-block h-px w-4 bg-[#F4C430]" />
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#F4C430]"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h3 className="text-[19px] font-extrabold text-[#D48C2B]">
                {post.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-6 text-[#F4C430]">
                {post.body}
              </p>
              <a
                href="#"
                className="mt-3 text-xs font-bold uppercase tracking-[0.06em] text-[#D48C2B]"
              >
                Read more &rsaquo;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
