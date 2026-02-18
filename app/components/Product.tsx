import Image from "next/image";

export default function Product() {
  return (
    <section className="bg-[#f3f3f3] py-16 md:py-20">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-12">
        
        {/* Left Content */}
        <div className="max-w-[520px] pt-2">
          <span className="inline-flex rounded-full bg-[#b8abff] px-5 py-2 text-sm font-semibold text-[#26223f]">
            Product
          </span>

          <h1 className="mt-7 text-[44px] leading-[1.05] font-semibold tracking-[-0.02em] text-[#262836] md:text-[60px]">
            Zwilt is a modern day{" "}
            <span className="bg-[#e9cb68] px-2">recruitment platform</span>
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

        {/* Right Image Section */}
        <div className="w-full max-w-[760px]">
          <div className="relative overflow-hidden rounded-xl bg-[#efeff1] p-3 shadow-[0_18px_60px_rgba(17,24,39,0.12)]">
            <Image
              src="/section-1.png"
              alt="Zwilt platform preview"
              width={1200}
              height={800}
              className="h-auto w-full rounded-lg object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
