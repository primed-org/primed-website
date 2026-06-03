import Link from 'next/link';
import { visionStatement, whoWeAreStatement } from './content';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#fff9ef_0%,#fff_55%,#f8f1f1_100%)] px-6 pb-14 pt-32 lg:px-16 lg:pb-20 lg:pt-36">
      <div className="absolute right-8 top-24 hidden h-52 w-52 rounded-full bg-[#BE1111]/10 blur-3xl lg:block" />
      <div className="absolute bottom-10 left-4 hidden h-44 w-44 rounded-full bg-[#F6B0CA]/20 blur-2xl lg:block" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Careers at Primed
          </p>
          <h1 className="text-secondary text-3xl font-semibold leading-tight lg:text-5xl">
            Build the operating layer for healthcare in Africa
          </h1>
          <p className="mt-6 text-base leading-7 text-secondary">{whoWeAreStatement}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#open-roles"
              className="rounded-md bg-primary px-7 py-3 text-sm font-semibold text-neutral transition-opacity hover:opacity-90"
            >
              View Open Roles
            </Link>
            <Link
              href="#talent-pipeline"
              className="rounded-md border border-primary px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-neutral"
            >
              Join Talent Pipeline
            </Link>
          </div>
        </div>

        <div className="rounded-tl-[18px] rounded-tr-[72px] rounded-bl-[72px] rounded-br-[18px] border border-[#f1d0d0] bg-[#fff5f5] p-6 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7a5555]">Our Vision</p>
          <p className="mt-4 text-2xl font-semibold leading-9 text-secondary lg:text-[30px] lg:leading-[42px]">
            {visionStatement}
          </p>

          <div className="mt-8 h-[1px] w-full bg-[#dfc8c8]" />

          <p className="mt-6 text-sm uppercase tracking-widest text-[#7a5555]">What we offer</p>
          <ul className="mt-3 space-y-2 text-[15px] text-secondary">
            <li>- Human-centered work with real-world impact</li>
            <li>- Cross-functional collaboration and rapid execution</li>
            <li>- A team that values ownership, clarity, and growth</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
