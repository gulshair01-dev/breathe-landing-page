import type { Testimonial } from "@/lib/types";

const customers = [
  {
    id: "sarah",
    name: "Sarah M.",
    imageSrc: "/images/testimonials/5.jpeg",
    shortQuote:
      "It knocks my phlegm loose so I can cough it out—and I feel real relief for breathing too!",
    quote:
      "It makes my phlegm knock loose so you can cough it out and I truly feel a little relief for breathing too! Anything that will help me breathe that's not a prescription is worth a try and I still take my other medication but my breathing treatments have lessened for me. I love it",
  },
  {
    id: "james",
    name: "James K.",
    imageSrc: "/images/testimonials/2.jpeg",
    shortQuote:
      "Helps with dry vocals and phlegm I can't cough up—and it has a sweet flavor that's easy to take!",
    quote:
      "It's impossible to sing, play the trumpet well, or even give a speech or teach a class, when your vocal apparatus is dry, dehydrated, or plagued with phlegm that you can't seem to cough up. This extract helps with all of these things, and it has a very sweet flavour that's easy to take!",
  },
  {
    id: "michael",
    name: "Michael R.",
    imageSrc: "/images/testimonials/3.jpeg",
    shortQuote:
      "Helped as an expectorant, soothed inflammation, and calmed a cough I'd had for years!",
    quote:
      "I casually bought this extract but had no idea how truly effective it would be. I used it the last time I felt under the weather and it helped greatly as an expectorant, inflammation soother and actually calmed the persistent cough I had for years! I still cant believe it.",
  },
  {
    id: "lena",
    name: "Lena T.",
    imageSrc: "/images/testimonials/9.jpeg",
    shortQuote:
      "After years of seasonal issues, Breathe gave me real relief—breathing and comfort improved dramatically.",
    quote:
      "After struggling with seasonal issues for years, I finally found something that actually provides relief! Breathe has become an essential part of my daily routine, and I've noticed a dramatic improvement in my breathing and overall comfort.",
  },
  {
    id: "david",
    name: "David W.",
    imageSrc: "/images/testimonials/4.jpeg",
    shortQuote:
      "Game-changer for speaking—soothes my throat so I can talk clearly without strain.",
    quote:
      "As someone who spends hours speaking in front of audiences, maintaining vocal health is crucial for me. This extract has been a game-changer - it soothes my throat and helps me speak clearly without strain or discomfort. Highly recommended for public speakers!",
  },
  {
    id: "sophia",
    name: "Sophia L.",
    imageSrc: "/images/testimonials/6.jpeg",
    shortQuote:
      "After one week, big improvements in my breathing—especially on morning jogs!",
    quote:
      "I was skeptical at first, but after just one week of using Breathe, I noticed significant improvements in my breathing, especially during my morning jogs. It's become an essential part of my wellness routine!",
  },
  {
    id: "emma",
    name: "Emma J.",
    imageSrc: "/images/testimonials/7.jpeg",
    shortQuote:
      "Fewer asthma flare-ups and better breathing control. This changed my quality of life!",
    quote:
      "Living with asthma has always been challenging, but since incorporating Breathe into my daily health regimen, I've experienced fewer flare-ups and much better breathing control. This natural solution has truly changed my quality of life!",
  },
] as const;

function toTestimonial(
  customer: (typeof customers)[number],
  quote: string,
): Testimonial {
  const testimonial: Testimonial = {
    id: customer.id,
    name: customer.name,
    quote,
    verified: true,
    imageAlt: `${customer.name} testimonial`,
  };

  if ("imageSrc" in customer) {
    testimonial.imageSrc = customer.imageSrc;
  }

  return testimonial;
}

/** Hero cards — same customers, shorter quotes */
export const heroTestimonials: Testimonial[] = customers.map((c) =>
  toTestimonial(c, c.shortQuote),
);

/** Social proof carousel — full quotes */
export const socialProofTestimonials: Testimonial[] = customers.map((c) =>
  toTestimonial(c, c.quote),
);
