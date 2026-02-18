import Image from "next/image";

export default function GetMore() {
  return (
    <section className="bg-[#e6e7eb] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1300px] px-6">
        <div className="overflow-hidden rounded-xl bg-[#f3f4f6] p-3 shadow-[0_24px_60px_rgba(17,24,39,0.16)] md:p-4">
          <Image
            src="/section-6.png"
            alt="AI interviewer experience"
            width={1920}
            height={1267}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <h2 className="max-w-[520px] text-[44px] leading-[0.95] font-semibold tracking-[-0.03em] text-[#232634] md:text-[56px]">
            An AI interviewer
            <br />
            that is optimized to
            <br />
            get the most
            <br />
            information.
          </h2>

          <p className="max-w-[520px] pt-1 text-[14px] leading-[1.55] font-medium text-[#4e5260] md:text-[15px]">
            Suggest topics or themes you want the interview to touch on and let our interviewer do the work for you.{' '}
            <span className="bg-[#e9cb68] px-1 text-[#2b2f3b]">
              Our interviewers have no preset path. The questions are determined organically based on candidate responses.
            </span>{' '}
            This line of questioning is optimized to get deep information on candidates&apos; area of expertise while maintaining a broad discussion.
          </p>
        </div>
      </div>
    </section>
  );
}
