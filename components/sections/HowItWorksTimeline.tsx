import Image from "next/image";
import { TimelineStepCard } from "@/components/product/TimelineStep";
import { timelineIntro, timelineSteps } from "@/lib/data/timeline";

export function HowItWorksTimeline() {
  return (
    <section id="howto" className="bg-howto">
      <div className="mx-auto max-w-content px-section-x py-section-y">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: image + intro */}
          <div className="lg:sticky lg:top-[30px]">
            <div className="relative mx-auto aspect-4/3 w-full max-w-xl overflow-hidden rounded-2xl bg-surface-placeholder lg:mx-0">
              <Image
                src={timelineIntro.imageSrc}
                alt={timelineIntro.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <h2 className="mt-6 text-center text-title font-bold text-text-inverse lg:px-2">
              {timelineIntro.headlineBefore}
              <span className="text-brand-accent">
                {timelineIntro.headlineAccent}
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-body-lg  text-text-inverse/90 sm:text-lg">
              {timelineIntro.subhead}
            </p>
          </div>

          {/* Right: timeline steps */}
          <div className="space-y-8">
            {timelineSteps.map((step) => (
              <TimelineStepCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
