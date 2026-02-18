import Image from "next/image";

export default function GetMore() {
  return (
    <section className="bg-[#e9eaed] py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col-reverse items-center gap-10 px-6 lg:flex-row lg:items-center lg:gap-14">
        <div className="w-full max-w-[860px]">
          <Image
            src="/section-5.png"
            alt="Get more interviews interface"
            width={1200}
            height={760}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="w-full max-w-[360px] lg:max-w-[370px]">
          <h2 className="text-[46px] leading-[0.98] font-semibold tracking-[-0.03em] text-[#282b39] md:text-[58px]">
            Get more
            <br />
            interviews
            <br />
            completed in less
            <br />
            time by happier
            <br />
            candidates.
          </h2>

          <p className="mt-6 text-[14px] leading-[1.55] font-medium text-[#5b5f6d]">
            Unlike traditional interviews,
            <span className="bg-[#e9cb68] px-1.5 text-[#2b2f3b]">
              candidates can
              <br />
              now select their interviewer,
            </span>
            time of the
            <br />
            interview, and stop & pick up wherever they
            <br />
            want. They get a live transcript of the interview
            <br />
            as it’s happening for self assessment and
            <br />
            course correction. Most importantly,
            <br />
            <span className="bg-[#e9cb68] px-1.5 text-[#2b2f3b]">
              candidates can skip questions or ask to
              <br />
              rephrase questions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
