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

                <iframe aria-label='Employment Separation Form' frameBorder="0" style={{height: '500px', width: '99%', border: 'none'}} src='https://forms.zohopublic.com/usmanogunsolaprimed1/form/EmploymentSeparationForm/formperma/qPuPRNpI3SCxfHDT4dkfAaG3nTYerMMG7REpLlXgKJk' >
                </iframe>
            </div>
        </section>
    );
};

export default TalentPipelineForm;
