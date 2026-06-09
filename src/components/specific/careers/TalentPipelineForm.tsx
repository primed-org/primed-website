import Button from '@/components/common/Button';
import { departmentFits } from './content';

const formAction = process.env.NEXT_PUBLIC_CAREERS_FORM_ACTION || '';
const canSubmit = Boolean(formAction);

const TalentPipelineForm = () => {
    return (
        <section id="talent-pipeline" className="w-full bg-[#f3f2f2] px-6 py-14 scroll-mt-24 lg:px-16 lg:py-20">
            <div className="mx-auto grid max-w-6xl gap-8 rounded-2xl bg-white p-6 lg:grid-cols-2 lg:p-10">
                <div>
                    <h2 className="text-secondary text-[28px] font-semibold leading-tight lg:text-4xl">
                        Talent Pipeline Application
                    </h2>
                    <p className="mt-4 text-[16px] leading-7 text-secondary">
                        You do not see a role right now? Apply to our future role and we will reach out when an opportunity matches your profile.
                    </p>
                </div>

                <iframe
                    // onLoad={() => window.parent.scrollTo(0, 0)}
                    height="750"
                    // frameBorder="0" scrolling="yes"
                    style={{ width: '100%', border: 'none' }}
                    src="https://primedpeopleops.formaloo.co/2m64jw"
                    id="formalooIframe">
                </iframe>
            </div>
        </section>
    );
};

export default TalentPipelineForm;
