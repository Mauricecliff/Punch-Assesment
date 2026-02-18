export default function Product() {
  const candidates = [
    { name: "Anil Laukhand", role: "Product Designer", salary: "$1055...", tag: "Top rated" },
    { name: "Anil Laukhand", role: "Product Designer", salary: "$1055...", tag: "Top hired last week" },
    { name: "Anil Laukhand", role: "Product Designer", salary: "$1055...", tag: "New Star" },
    { name: "Anil Laukhand", role: "Product Designer", salary: "$1055...", tag: "Top rated" },
    { name: "Anil Laukhand", role: "Product Designer", salary: "$1055...", tag: "Top hired last week" },
    { name: "Anil Laukhand", role: "Product Designer", salary: "$1055...", tag: "New Star" },
  ];

  return (
    <section className="bg-[#ffffff] py-16 md:py-20">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 px-6 lg:flex-row lg:items-start lg:gap-12">
        <div className="max-w-[520px] pt-2">
          <span className="inline-flex rounded-full bg-[#b8abff] px-5 py-2 text-sm font-semibold text-[#26223f]">
            Product
          </span>

          <h1 className="mt-7 text-[67px] leading-[1.05] font-semibold tracking-[-0.02em] text-[#262836]">
            Zwilt is a modern day <span className="bg-[#e9cb68] px-2">recruitment platform</span>
            <br />
            We use AI interviewers,
            <br />
            video interviews, and
            <br />
            full text search of
            <br />
            transcripts to help
            <br />
            companies hire better.
          </h1>
        </div>

        <div className="w-full max-w-[760px] rounded-md bg-[#efeff1] p-5 shadow-[0_18px_60px_rgba(17,24,39,0.12)]">
          <div className="rounded-md bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-[#ededf0] px-5 py-4">
              <div className="flex items-center gap-2 text-[33px] font-bold text-[#2a2a34]">
                <span>zwilt</span>
                <span className="text-[20px] text-[#f4ba35]">🫱</span>
              </div>
              <div className="hidden gap-8 text-xs font-medium text-[#2c3147] md:flex">
                <span className="text-[#5667cc]">Home</span>
                <span>Browse</span>
                <span>About us</span>
                <span>How it works</span>
                <span>Jobs ▾</span>
              </div>
              <button className="rounded bg-[#5667cc] px-3 py-1 text-xs font-semibold text-white">Create</button>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-[#ededf0] bg-[#f9f9fb] px-5 py-3 text-[10px] font-medium text-[#3c3f4d] md:text-[11px]">
              <span>Design &amp; Creative</span>
              <span className="rounded bg-[#d6edd2] px-2 py-1 text-[#27411e]">IT &amp; Development</span>
              <span>Sales &amp; Marketing</span>
              <span>Content Creation</span>
              <span>HR &amp; Recruitment</span>
              <span>Customer Support</span>
            </div>

            <div className="space-y-4 px-5 py-4">
              <div className="rounded bg-[#d7e6cc] px-4 py-3">
                <p className="text-[24px] font-semibold text-[#1c2a1d]">IT &amp; Development</p>
                <p className="mt-1 text-[11px] text-[#3b4b39]">
                  Clients rate Java developers <span className="text-[#f2b742]">★★★★★</span> 4.8/5 based on
                  150 client reviews.
                </p>
              </div>

              <div className="grid gap-2 text-[10px] md:grid-cols-[190px_1fr]">
                <button className="rounded border border-[#ececf2] bg-white px-3 py-2 text-left text-[#8a8d99]">
                  Advance search
                </button>
                <button className="rounded border border-[#ececf2] bg-white px-3 py-2 text-left text-[#b3b5be]">
                  Search by name, trade or any query
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {candidates.map((candidate, index) => (
                  <article key={`${candidate.tag}-${index}`} className="rounded border border-[#ececf2] bg-[#f7f8fb]">
                    <div className="relative h-[88px] bg-gradient-to-b from-[#edf0f8] to-[#d6d9e6]">
                      <div className="absolute top-2 right-2 rounded-full bg-[#ccf0bf] px-2 py-[2px] text-[8px] font-semibold text-[#2b5b23]">
                        {candidate.tag}
                      </div>
                      <div className="absolute bottom-0 left-1/2 h-[72px] w-[72px] -translate-x-1/2 overflow-hidden rounded-full border-2 border-white bg-[#d2d3da]" />
                    </div>
                    <div className="px-2 pt-2 pb-3 text-[#2a2d3a]">
                      <div className="flex items-center justify-between text-[10px] font-semibold">
                        <p>{candidate.name}</p>
                        <p>5.0 ⭐</p>
                      </div>
                      <p className="mt-1 text-[8px] text-[#9a9cab]">{candidate.role}</p>
                      <div className="mt-1 flex items-center justify-between text-[10px] font-semibold">
                        <p>{candidate.salary}</p>
                        <p className="text-[8px] font-medium text-[#7f8392]">Full time</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
