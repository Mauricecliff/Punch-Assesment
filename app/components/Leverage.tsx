import Image from "next/image";

export default function Leverage() {
  return (
    <section className="bg-[#e9eaed] py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center gap-10 px-6 lg:flex-row lg:items-center lg:gap-14">
        <div className="w-full max-w-[350px] lg:max-w-[360px]">
          <h2 className="text-[46px] leading-[0.98] font-semibold tracking-[-0.03em] text-[#282b39] md:text-[58px]">
            Leverage Zwilt’s
            <br />
            technology for
            <br />
            your own
            <br />
            interviews.
          </h2>

          <p className="mt-6 text-[14px] leading-[1.55] font-medium text-[#5b5f6d]">
            All of the browsing, filtering & search
            <br />
            capabilities including Pre-Meet™ & Click-to-
            <br />
            Skip™ are available for your own interviews. It
            <br />
            has never been easier to create an interview,
            <br />
            <span className="bg-[#e9cb68] px-1.5 text-[#2b2f3b]">
              paste a link to your job post and the rest is done
            </span>
            <br />
            <span className="bg-[#e9cb68] px-1.5 text-[#2b2f3b]">automagically!</span>
          </p>
        </div>

        <div className="w-full max-w-[860px]">
          <Image
            src="/section-4.png"
            alt="Leverage Zwilt technology interface"
            width={1200}
            height={760}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
