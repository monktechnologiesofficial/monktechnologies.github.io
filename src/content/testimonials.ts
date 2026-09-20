export type Testimonial = {
  quote: string;
  attribution: string;
  context: string;
  initials: string;
  tone: "gold" | "blue" | "green" | "indigo";
};

/** Quotes supplied by the academy; names/photos withheld until we have permission. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "My experience at Monk Technologies was great! The course curriculum is rich and extensive and the teachers are very patient and thorough! I highly recommend Monk Technologies to anyone who wants to learn about IT and pivot into the IT field with the different career paths available!",
    attribution: "Community learner",
    context: "Career pivot into IT",
    initials: "CL",
    tone: "gold"
  },
  {
    quote:
      "Great teachers, great people, I can't just even talk enough of great minds like prof Jespo, prof Vamsi, prof Mandi, prof Dany….. all the other wonderful profs, you all rock. I am not yet gotten Job in the industry but I keep pushing, I believe it's on its way.",
    attribution: "Community learner",
    context: "Job search in progress",
    initials: "KP",
    tone: "blue"
  },
  {
    quote:
      "I had the pleasure of experiencing the outstanding programs offered by Monk Technologies, and I can confidently say it is an exceptional academy for anyone looking to advance their career in the tech industry. The curriculum is meticulously crafted to cover the latest technologies and industry trends, ensuring students are well-prepared for the real world. The instructors are not only highly knowledgeable but also genuinely passionate about teaching, providing personalized guidance and support throughout the learning journey. The academy's hands-on approach, with plenty of practical projects and real-world scenarios, truly sets it apart. Also, the supportive community and extensive career services make it an invaluable resource for both novice and experienced IT professionals. I highly recommend Monk Technologies for anyone eager to elevate their tech skills and career prospects.",
    attribution: "Community learner",
    context: "Hands-on programs & career services",
    initials: "AL",
    tone: "green"
  }
];
