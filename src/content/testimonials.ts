import { photos } from "./photos";

export type Testimonial = {
  quote: string;
  initials: string;
  role: string;
  context: string;
  photo: { src: string; alt: string };
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "My experience at Monk Technologies was great! The course curriculum is rich and extensive and the teachers are very patient and thorough! I highly recommend Monk Technologies to anyone who wants to learn about IT and pivot into the IT field with the different career paths available!",
    initials: "CL",
    role: "Career switcher",
    context: "Pivot into IT",
    photo: photos.learnerCoding
  },
  {
    quote:
      "Great teachers, great people, I can't just even talk enough of great minds like prof Jespo, prof Vamsi, prof Mandi, prof Dany….. all the other wonderful profs, you all rock. I am not yet gotten Job in the industry but I keep pushing, I believe it's on its way.",
    initials: "KP",
    role: "Job seeker",
    context: "Still pushing",
    photo: photos.learnerMan
  },
  {
    quote:
      "I had the pleasure of experiencing the outstanding programs offered by Monk Technologies, and I can confidently say it is an exceptional academy for anyone looking to advance their career in the tech industry. The curriculum is meticulously crafted to cover the latest technologies and industry trends, ensuring students are well-prepared for the real world. The instructors are not only highly knowledgeable but also genuinely passionate about teaching, providing personalized guidance and support throughout the learning journey. The academy's hands-on approach, with plenty of practical projects and real-world scenarios, truly sets it apart. Also, the supportive community and extensive career services make it an invaluable resource for both novice and experienced IT professionals. I highly recommend Monk Technologies for anyone eager to elevate their tech skills and career prospects.",
    initials: "AL",
    role: "Working professional",
    context: "Hands-on programs",
    photo: photos.learnerHome
  }
];
