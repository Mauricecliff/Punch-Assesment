import Image from "next/image";

export default function Talents() {
  return (
    <section className="bg-[#ececf0] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1300px] rounded-2xl bg-[#afa4f0] px-4 pt-6 pb-5 md:px-8 md:pt-8 lg:px-10 lg:pt-10">
        <p className="mx-auto w-fit rounded-full bg-[#8f83da] px-3 py-1 text-[10px] leading-none font-semibold tracking-[0.03em] text-[#232634] md:text-[11px]">
          Search
        </p>

        <h2 className="mx-auto mt-5 max-w-[900px] text-center text-[42px] leading-[0.98] font-semibold tracking-[-0.03em] text-[#232634] md:text-[62px]">
          It continues with your company
          <br />
          getting an advantage in the
          <br />
          <span className="bg-[#e9cb68] px-2">search for talent.</span>
        </h2>

        <p className="mx-auto mt-10 max-w-[640px] text-center text-[20px] leading-[1.1] font-semibold text-[#2b2f3b] md:mt-14 md:text-[40px] lg:text-[42px]">
          Whether you browse or search for a candidate,
          <br />
          everything is right there.
        </p>

        <div className="-mx-2 mt-8 overflow-hidden rounded-[12px] md:mx-0 md:mt-10 md:rounded-[16px]">
          <Image
            src="/section-7.png"
            alt="Talent search interface"
            width={1920}
            height={1260}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
