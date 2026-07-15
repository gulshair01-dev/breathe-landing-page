export interface TestimonialVideo {
  id: string;
  src: string;
  poster?: string;
  label: string;
}

/** Local testimonial clips — swap `src` for CDN URLs when media is hosted. */
export const testimonialVideos: TestimonialVideo[] = [
  {
    id: "tv1",
    src: "/videos/9e1bd76d95ab4774a063d7da39104f49.mp4",
    label: "Customer testimonial 1",
  },
  {
    id: "tv2",
    src: "/videos/4fdcb6f18a14493583e9657e8ee72ec5.mp4",
    label: "Customer testimonial 2",
  },
  {
    id: "tv3",
    src: "/videos/c58c99d0e5114c55854373322bfd5f84.mp4",
    label: "Customer testimonial 3",
  },
];
