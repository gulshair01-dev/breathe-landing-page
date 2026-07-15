import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Header } from "@/components/sections/Header";
import { HeroBuyBox } from "@/components/sections/HeroBuyBox";
import { ClinicalStudiesStrip } from "@/components/sections/ClinicalStudiesStrip";
import { SocialProofCarousel } from "@/components/sections/SocialProofCarousel";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TrustBadgesGrid } from "@/components/sections/TrustBadgesGrid";
import { IngredientsGrid } from "@/components/sections/IngredientsGrid";
import { HowItWorksTimeline } from "@/components/sections/HowItWorksTimeline";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ExpertQuotesGrid } from "@/components/sections/ExpertQuotesGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { StickyAtcBar } from "@/components/product/StickyAtcBar";

export default function PulmoriaMulleinDropsPage() {
  return (
    <div className="pb-24">
      <AnnouncementBar />
      <Header />
      <HeroBuyBox />
      <ClinicalStudiesStrip />
      <SocialProofCarousel />
      <ProblemSection />
      <TrustBadgesGrid />
      <IngredientsGrid />
      <HowItWorksTimeline />
      <ComparisonTable />
      <ExpertQuotesGrid />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
      <StickyAtcBar />
    </div>
  );
}
