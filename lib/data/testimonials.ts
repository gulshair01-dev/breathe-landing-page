import type { Testimonial } from "@/lib/types";

const testimonialImages = [
  "/images/testimonials/2.jpeg",
  "/images/testimonials/5.jpeg",
  "/images/testimonials/6.jpeg",
  "/images/testimonials/7.jpeg",
  "/images/testimonials/8.jpeg",
] as const;

function testimonialImage(index: number) {
  return testimonialImages[index % testimonialImages.length];
}

export const heroTestimonials: Testimonial[] = [
  {
    id: "sarah",
    quote:
      "After just 7 days, I can finally breathe without that tight feeling in my chest. I actually sleep through the night now.",
    name: "Sarah M.",
    age: 58,
    verified: true,
    imageAlt: "Sarah M. testimonial",
    imageSrc: testimonialImage(0),
  },
  {
    id: "john",
    quote:
      "I quit smoking 3 years ago but my lungs still felt clogged. Within two weeks of using Breathe, I'm breathing easier.",
    name: "John R.",
    age: 47,
    verified: true,
    imageAlt: "John R. testimonial",
    imageSrc: testimonialImage(1),
  },
  {
    id: "linda",
    quote:
      "I couldn't finish a sentence without coughing. After two weeks, the hacking stopped and I can talk normally again.",
    name: "Linda M.",
    age: 41,
    verified: true,
    imageAlt: "Linda M. testimonial",
    imageSrc: testimonialImage(2),
  },
];

export const socialProofTestimonials: Testimonial[] = [
  {
    id: "jennifer",
    quote:
      "I've had asthma my whole life and always relied on my inhaler. After three weeks with Breathe, I'm using it way less and breathing feels so much lighter.",
    name: "Jennifer M.",
    age: 39,
    verified: true,
    chips: ["Less Inhaler", "Easy Breathing"],
    imageAlt: "Jennifer M. testimonial",
    imageSrc: testimonialImage(0),
  },
  {
    id: "robert",
    quote:
      "Wheezing constantly from chronic bronchitis. After two weeks the tightness in my chest is almost completely gone. I can finally exercise again.",
    name: "Robert S.",
    age: 61,
    verified: true,
    chips: ["No Wheezing", "Active Again"],
    imageAlt: "Robert S. testimonial",
    imageSrc: testimonialImage(1),
  },
  {
    id: "karen",
    quote:
      "Woke up every single morning congested with mucus in my throat. After just one week, I'm waking up clear and breathing freely. Life-changing.",
    name: "Karen S.",
    age: 48,
    verified: true,
    chips: ["Morning Clarity", "Fast Relief"],
    imageAlt: "Karen S. testimonial",
    imageSrc: testimonialImage(2),
  },
  {
    id: "mike",
    quote:
      "I work in construction and dust always made me cough all day. Started using Breathe and within 10 days, my lungs feel clearer than they have in years.",
    name: "Mike D.",
    age: 42,
    verified: true,
    chips: ["Dust Free", "Clearer Lungs"],
    imageAlt: "Mike D. testimonial",
    imageSrc: testimonialImage(3),
  },
  {
    id: "lauren",
    quote:
      "Allergies kept my chest tight year-round. Breathe cleared out the congestion in about two weeks and now I can breathe deep without wheezing.",
    name: "Lauren B.",
    age: 36,
    verified: true,
    chips: ["Allergy Support", "Deep Breathing"],
    imageAlt: "Lauren B. testimonial",
    imageSrc: testimonialImage(4),
  },
  {
    id: "david",
    quote:
      "I have COPD for years and was struggling badly. I've been taking Breathe for three weeks and my breathing has improved noticeably. I'm so grateful.",
    name: "David R.",
    age: 47,
    verified: true,
    chips: ["COPD Support", "Life Changing"],
    imageAlt: "David R. testimonial",
    imageSrc: testimonialImage(0),
  },
];
