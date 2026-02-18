import Image from "next/image";

export default function Browse() {
  return (
    <section className="bg-[#f8f8f9] py-20 md:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6">
        <span className="inline-flex rounded-full bg-[#b8abff] px-4 py-1.5 text-[11px] font-semibold tracking-[0.01em] text-[#26223f]">
          Browse
        </span>

        <h2 className="mt-6 text-center text-[44px] leading-[1.05] font-semibold tracking-[-0.02em] text-[#262836] md:text-[58px]">
          Our product starts with a
          <br />
          revolutionary <span className="bg-[#e9cb68] px-2">browsing</span>
          <br />
          <span className="bg-[#e9cb68] px-2">experience.</span>
        </h2>

        <div className="mt-12 grid w-full max-w-[760px] grid-cols-3 text-center text-[11px] font-semibold text-[#262836]">
          <p>Pre-Meet™</p>
          <p>Click to Skip™</p>
          <p>No Recruiter fee</p>
        </div>

        <div className="mt-5 w-full max-w-[1020px] overflow-hidden rounded-2xl bg-[#b7a8ff] p-5 shadow-[0_28px_60px_rgba(35,23,76,0.15)] md:p-8">
          <Image
            src="/section-3.png"
            alt="Browse experience interface"
            width={1200}
            height={740}
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
