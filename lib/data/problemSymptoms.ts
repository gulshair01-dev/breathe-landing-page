import type { ProblemSymptom } from "@/lib/types";

export const problemIntro = {
  headlineBefore: "Trapped Lung Mucus Is The ",
  headlineAccent: "#1 Reason",
  headlineAfter: " People Can't Breathe Properly",
  paragraphs: [
    "Every day your lungs slowly collect harmful buildup just from normal breathing...",
    "Pollution, dust, germs, chemicals, and other stuff we can't see or avoid build up and start accumulating from the minute we're born...",
  ],
  listHeader: "That's why so many people notice:",
  negativeCallout:
    "That's why traditional treatments simply don't work for people dealing with this trapped mucus buildup.",
  positiveCallout: "But now, science has found a way to clear it naturally.",
};

export const problemSymptoms: ProblemSymptom[] = [
  { id: "shallow", text: "Shallow and labored breathing" },
  { id: "morning", text: "A morning cough that appears and never goes away" },
  { id: "tight", text: "A tight and congested feeling in the chest" },
  { id: "stairs", text: "Shortness of breath just from walking up stairs" },
];
