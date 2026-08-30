import { HeroSection } from '@/components/sections/home/HeroSection';
import { HowItWorksSection } from '@/components/sections/home/HowItWorksSection';
import { FeaturesSection } from '@/components/sections/home/FeaturesSection';
import { AiBioSection } from '@/components/sections/home/AiBioSection';
import { OpenSourceSection } from '@/components/sections/home/OpenSourceSection';
import FaqSection from '@/components/FaqSection';
import { homeFaqs } from '@/lib/faq-data';
import { FinalCtaSection } from '@/components/sections/home/FinalCtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AiBioSection />
      <OpenSourceSection />
      <FaqSection faqs={homeFaqs} title="Frequently Asked Questions" />
      <FinalCtaSection />
    </>
  );
}
