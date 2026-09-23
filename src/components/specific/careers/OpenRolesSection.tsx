import { openRoles } from './content';

const OpenRolesSection = () => {
  return (
    <section id="open-roles" className="w-full bg-neutral px-6 py-14 scroll-mt-24 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-secondary text-[28px] font-semibold leading-tight lg:text-4xl">Join Our Team</h2>
        <p className="mt-4 max-w-3xl text-[16px] leading-7 text-secondary">
          Open roles are updated regularly. If you do not see a role that fits you today, apply to our future role and join the talent pipeline.
        </p>

        <div className="mt-8 space-y-4">
          {openRoles.map((role) => (
            <article
              key={role.title}
              className="rounded-xl border border-[#ebebeb] bg-white p-5 transition-shadow hover:shadow-sm"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-secondary text-lg font-semibold">{role.title}</h3>
                  <p className="mt-1 text-[14px] text-secondary">{role.team}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#f7f7f7] px-3 py-1 text-xs font-medium text-[#4b4b4b]">
                    {role.location}
                  </span>
                  <span className="rounded-full bg-[#ffecec] px-3 py-1 text-xs font-medium text-primary">
                    {role.type}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenRolesSection;
