import { employeeTestimonials } from './content';

const cardBackgrounds = ['bg-[#FCE7E9]', 'bg-[#E5F6F5]', 'bg-[#F6F2D9]'];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-neutral px-6 py-14 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-secondary text-[28px] text-center font-semibold leading-tight lg:text-4xl">
          Voices From the Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-7 text-secondary">
          A few perspectives from people building with us every day.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {employeeTestimonials.map((testimonial, index) => (
            <article key={testimonial.name} className="rounded-2xl border border-[#dbd7d7] bg-[#686868] p-1">
              <div className={`h-full rounded-2xl p-6 ${cardBackgrounds[index % cardBackgrounds.length]}`}>
                <p className="text-[15px] leading-7 text-[#333]">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-8">
                  <p className="text-[16px] font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-[14px] text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
