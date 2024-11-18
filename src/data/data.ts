export type Question = {
  id: number;
  text: string;
  labels: string[];
  value: number;
};

export const questionsData = [
  {
    id: 1,
    text: "Do you identify as a chain smoker?",
    labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    value: 2,
  },
  {
    id: 2,
    text: "How many cigarettes do you smoke daily?",
    labels: ["None", "1-5", "6-10", "11-20", "More than 20"],
    value: 2,
  },
  {
    id: 3,
    text: "Do you find it difficult to resist smoking in situations where it is not allowed?",
    labels: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
    value: 2,
  },
  {
    id: 4,
    text: "Do you often smoke within 30 minutes of waking up?",
    labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    value: 2,
  },
  {
    id: 5,
    text: "Do you smoke more during stressful situations?",
    labels: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
    value: 2,
  },
  {
    id: 6,
    text: "How often do you experience cravings for cigarettes?",
    labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    value: 2,
  },
  {
    id: 7,
    text: "Are you aware of the neuromarketing strategies used to promote smoking products?",
    labels: [
      "Not at all aware",
      "Slightly aware",
      "Neutral",
      "Aware",
      "Very aware",
    ],
    value: 2,
  },
  {
    id: 8,
    text: "Do advertisements or packaging influence your decision to smoke?",
    labels: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
    value: 2,
  },
  {
    id: 9,
    text: "How likely are you to quit smoking within the next 6 months?",
    labels: [
      "Not at all likely",
      "Unlikely",
      "Neutral",
      "Likely",
      "Very likely",
    ],
    value: 2,
  },
  {
    id: 10,
    text: "Do you believe smoking impacts your daily productivity?",
    labels: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
    value: 2,
  },
  {
    id: 11,
    text: "Have you tried quitting smoking before?",
    labels: ["Never", "Once", "A few times", "Several times", "Many times"],
    value: 2,
  },
  {
    id: 12,
    text: "Do you think personalized insights can help you quit smoking?",
    labels: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
    value: 2,
  },
  {
    id: 13,
    text: "Do you use alternatives such as vaping or nicotine patches?",
    labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    value: 2,
  },
  {
    id: 14,
    text: "How important is it for you to quit smoking?",
    labels: [
      "Not at all important",
      "Slightly important",
      "Neutral",
      "Important",
      "Very important",
    ],
    value: 2,
  },
  {
    id: 15,
    text: "Do you feel in control of your smoking habits?",
    labels: [
      "Not at all in control",
      "Slightly in control",
      "Neutral",
      "In control",
      "Completely in control",
    ],
    value: 2,
  },
];

export const testimonials = [
  {
    name: "Dr. Ravi Mehta",
    title: "Psychologist & Addiction Specialist",
    description:
      "NicoGauge is a breakthrough platform that provides individuals with profound insights into their smoking habits. Its innovative approach empowers users to make meaningful changes.",
    imageUrl: "/101.jpeg",
  },
  {
    name: "Dr. Ravi Mehta",
    title: "Psychologist & Addiction Specialist",
    description:
      "NicoGauge is a breakthrough platform that provides individuals with profound insights into their smoking habits. Its innovative approach empowers users to make meaningful changes.",
    imageUrl: "/101.jpeg",
  },
  {
    name: "Dr. Ravi Mehta",
    title: "Psychologist & Addiction Specialist",
    description:
      "NicoGauge is a breakthrough platform that provides individuals with profound insights into their smoking habits. Its innovative approach empowers users to make meaningful changes.",
    imageUrl: "/101.jpeg",
  },
  {
    name: "Sophia Carter",
    title: "Health Advocate",
    description:
      "Understanding the role of neuromarketing in addiction has been a game-changer for me. NicoGauge combines science and technology to deliver actionable guidance for a healthier lifestyle.",
    imageUrl: "/102.jpeg",
  },
  {
    name: "Rajesh Kumar",
    title: "Former Smoker",
    description:
      "Using NicoGauge helped me realize the subtle influences impacting my decisions. The insights I gained were instrumental in my journey to quit smoking and take control of my health.",
    imageUrl: "/103.jpeg",
  },
];

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Resources", href: "/resources" },
  { title: "Contact", href: "/contact" },
];

export const FAQItems = [
  {
    question: "What is NicoGauge, and how does it work?",
    answer:
      "NicoGauge is a digital platform designed to evaluate cigarette addiction levels and the influence of neuromarketing strategies. It provides personalized insights based on your behavior and preferences, empowering you to make informed decisions.",
  },
  {
    question: "How accurate are the addiction evaluations?",
    answer:
      "Our evaluations are based on scientifically-backed methodologies and data analysis. While they provide valuable insights, they are not a substitute for medical diagnosis or advice.",
  },
  {
    question: "Is my data safe with NicoGauge?",
    answer:
      "Yes, we prioritize your privacy and use industry-standard security protocols to protect your data. Your information is never shared without your consent.",
  },
  {
    question: "Can I use NicoGauge to quit smoking?",
    answer:
      "NicoGauge helps you understand your addiction and the factors influencing your smoking habits. While it provides actionable guidance, we recommend consulting healthcare professionals for a comprehensive cessation plan.",
  },
  {
    question: "What is neuromarketing, and why is it relevant?",
    answer:
      "Neuromarketing studies how marketing strategies influence consumer behavior at a subconscious level. NicoGauge highlights how these strategies may impact your smoking habits, enabling you to make more conscious choices.",
  },
];

export const cardData = [
  { label: "Form Submissions", endValue: 1234, duration: 2 },
  { label: "Site Traffic", endValue: 5678, duration: 2 },
  { label: "Active Users", endValue: 910, duration: 2 },
  { label: "Behavioral Trends", endValue: 120, duration: 2 },
];

export const footerLinks = [
  {
    title: "Explore",
    links: ["About Us", "Projects", "Events", "Community"],
  },
  {
    title: "Resources",
    links: ["Tutorials", "Workshops", "Blog", "Contact Us"],
  },
];

export const bottomLinks = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
  { title: "Support", href: "/support" },
];

export const Banner1 = {
  image: "/nurse.svg",
  tag: "TAILORED FOR YOUR JOURNEY",
  title: "Understand Your Addiction, Take Control",
  subtitle:
    "Discover a platform designed to evaluate your cigarette addiction with precision. Gain personalized insights into your habits and receive guidance to empower your journey toward healthier choices. This is your first step towards a smoke-free life.",
  btn: { title: "Get Started", link: "/form" },
  reverse: false,
};
export const Banner2 = {
  image: "/doctor.svg",
  tag: "INSIGHTS DRIVEN BY NEUROSCIENCE",
  title: "Decode the Impact of Neuromarketing",
  subtitle:
    "Explore how marketing strategies influence your decisions. Our platform equips you with knowledge about the subtle cues and triggers that shape your behavior, helping you make informed choices and reclaim control.",
  reverse: true,
};
export const Banner3 = {
  image: "/patient.svg",
  tag: "EMPOWERED BY DATA",
  title: "Personalized Guidance for Positive Change",
  subtitle:
    "Using detailed analysis, we provide actionable recommendations tailored to your needs. Whether reducing dependence or quitting entirely, our platform supports you with tools and resources to achieve lasting results.",
  reverse: false,
};
export const Banner4 = {
  image: "/cleaner.svg",
  tag: "FOCUSED ON YOUR SUCCESS",
  title: "Track Progress, Celebrate Milestones",
  subtitle:
    "Monitor your journey with intuitive tools that highlight your growth and achievements. Stay motivated as you reach key milestones, with support that keeps you aligned with your goals.",
  btn: { title: "Get Started", link: "/form" },
  reverse: true,
};
