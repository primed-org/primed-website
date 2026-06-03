import { departmentFits } from './content';

const DepartmentsSection = () => {
  return (
    <section className="w-full bg-[#fcfce8] px-6 py-14 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-secondary text-[28px] font-semibold leading-tight lg:text-4xl">
          Find Where You Fit In
        </h2>
        <p className="mt-4 max-w-3xl text-[16px] leading-7 text-secondary">
          From engineering to storytelling and business operations, each team plays a direct role in improving healthcare delivery.
        </p>

        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {departmentFits.map((department) => (
            <article key={department.name} className="rounded-2xl border border-[#ece8c8] bg-[#fffef5] p-6">
              <h3 className="text-secondary text-xl font-semibold">{department.name}</h3>
              <p className="mt-3 text-[15px] leading-7 text-secondary">{department.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
