import type { Metadata } from 'next';
import CoreValuesSection from '@/components/specific/careers/CoreValuesSection';
import DepartmentsSection from '@/components/specific/careers/DepartmentsSection';
import HeroSection from '@/components/specific/careers/HeroSection';
import OpenRolesSection from '@/components/specific/careers/OpenRolesSection';
import TalentPipelineForm from '@/components/specific/careers/TalentPipelineForm';
import TestimonialsSection from '@/components/specific/careers/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Careers | Primed E-Health',
  description: 'Build meaningful healthcare technology solutions with the Primed team.',
};

const CareersPage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <CoreValuesSection />
      <DepartmentsSection />
      <TestimonialsSection />
      <OpenRolesSection />
      <TalentPipelineForm />
    </div>
  );
};

export default CareersPage;
