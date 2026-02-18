export default function Footer() {
  return (
    <footer className="bg-[#27273a] text-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-6 pt-12 pb-5 md:px-14 md:pt-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr] md:items-start">
          <div>
            <p className="text-[26px] leading-none font-bold tracking-[-0.03em]">zwilt ✶</p>
            <p className="mt-5 max-w-[220px] text-[11px] leading-[1.6] text-white/85">
              We take complex hiring processes - and simplify them. Connecting you to the
              world&apos;s highly qualified talent pool.
            </p>
            <div className="mt-7 flex items-center gap-2.5">
              <button className="inline-flex items-center gap-2 rounded-md bg-[#5b66ea] px-4 py-2 text-[11px] font-semibold tracking-[0.02em] text-white transition hover:bg-[#4e58df]">
                CTA 1 <span className="text-[#f3c54d]">→</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-md bg-[#5b66ea] px-4 py-2 text-[11px] font-semibold tracking-[0.02em] text-white transition hover:bg-[#4e58df]">
                CTA 2 <span className="text-[#f3c54d]">→</span>
              </button>
            </div>
          </div>

          <h2 className="max-w-[560px] text-[38px] leading-[1.05] font-semibold tracking-[-0.03em] text-white md:mt-1 md:text-[49px]">
            Connecting the right people to the right businesses.
          </h2>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-[10px] text-white/80 md:flex-row md:items-center md:justify-between md:pt-4">
          <p>© 2022-2023 Zwilt.</p>
          <div className="flex items-center gap-12">
            <a className="underline underline-offset-2" href="#">
              Privacy Policy
            </a>
            <a className="underline underline-offset-2" href="#">
              Terms &amp; Conditions
            </a>
          </div>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
