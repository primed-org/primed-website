import { coreValues, whatWeOffer } from './content';

const CoreValuesSection = () => {
  return (
    <section className="w-full bg-neutral px-6 py-14 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-secondary text-[28px] font-semibold leading-tight lg:text-4xl">
          The Core Values That Shape Us
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <article
              key={value.title}
              className="rounded-tl-[18px] rounded-tr-[68px] rounded-bl-[68px] rounded-br-[18px] bg-[#F9F9D1] p-6"
            >
              <h3 className="text-secondary text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-[15px] leading-6 text-secondary">{value.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#f2e3e3] bg-[#fffaf4] p-6 lg:p-8">
          <h3 className="text-secondary text-xl font-semibold">What We Offer</h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {whatWeOffer.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-secondary">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
