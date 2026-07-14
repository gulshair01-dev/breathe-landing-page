import type { TimelineStep } from "@/lib/types";

export const timelineIntro = {
  headlineBefore: "Works For Anyone With Breathing Issues, ",
  headlineAccent: "Including Smokers & Ex-Smokers",
  subhead:
    "Love the way you feel when breathing again. Say goodbye to chest tightness for good.",
  imageAlt: "Person breathing comfortably outdoors",
  imageSrc: "/images/placeholder.svg",
};

export const timelineSteps: TimelineStep[] = [
  {
    id: "day1-3",
    dayLabel: "Day 1–3:",
    title: "Feel the Relief Begin",
    bullets: [
      "Chest feels looser and less tight",
      "First full, deep breath in months",
    ],
    percentHighlight: "93% of customers",
    percentRest: "noticed easier breathing within the first 3 days",
  },
  {
    id: "day4-7",
    dayLabel: "Day 4–7:",
    title: "Notice the Difference",
    bullets: [
      "Morning mucus starts to clear",
      "Coughing reduces significantly",
    ],
    percentHighlight: "89% of customers",
    percentRest: "reported less mucus and improved airflow by day 7",
  },
  {
    id: "day7-14",
    dayLabel: "Day 7–14:",
    title: "Breathe Freely Again",
    bullets: ["Airways feel open and clear", "No more wheezing or tightness"],
    percentHighlight: "91% of customers",
    percentRest: "experienced clear, effortless breathing by week 2",
  },
  {
    id: "day14-21",
    dayLabel: "Day 14–21:",
    title: "Energy Returns",
    bullets: [
      "Sleep deeper through the night",
      "Stamina improves for daily activities",
    ],
    percentHighlight: "87% of customers",
    percentRest: "felt more energized with consistent use",
  },
];
