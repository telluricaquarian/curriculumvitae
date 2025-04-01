import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Llewellyn Y. Fisher",
  initials: "L.Y.F",
  url: "https://bento.me/telluricaquarian",
  location: "Planet Earth",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Self-proclaimed Designer, Creative & Student of Water",
  summary:
    "At the end of 2019, I left my job in Sport & Recreation and at the beginning of 2020 became introduced to Kangen Water®. I have been actively promoting and sharing information pertaining to this high-quality water. I have been in and out of jobs, alongside taking up A La Carte Freelancing gigs pertaining to media buying for SMBs, SMEs, Volunteer Commission work for startups. Offering my services via Upwork, Social Media & Outreach.",
  avatarUrl: "/me.png",
  skills: [
    "Figma",
    "NoCode",
    "Prompt Engineering",
    "Vibe",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/telluricaquarian",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://au.linkedin.com/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ursubstanz - Primordial Originating Force/Substance - APOTHECARY & APPAREL",
      href: "https://ursubstanz.com/",
      badges: [],
      location: "Planet Earth",
      title: "Owner",
      logoUrl: "/atomic.png",
      start: "Feb 28, 2025",
      end: "Present",
      description:
        "URSUBSTANZ is a burgeoning & newly created business, germinating from a small seed planted, a singular word, “ursubstanz” - discovered from literary material written by Dr. Stefan Lanka",
    },
    {
      company: "Areculateir",
      badges: [],
      href: "https://telluricaquarian.com/",
      location: "Remote",
      title: "Web-Dev & Web Designer",
      logoUrl: "/shopify.png",
      start: "Nov 28, 2024",
      end: "Present",
      description:
        "Areculateir is a Web Design Brand, Designed to function as a content delivery directory, showcasing design & visual assets.",
    },
    {
      company: "Telluricaquarian",
      href: "https://telluricaquarian.com/",
      badges: [],
      location: "Planet Earth",
      title: "Owner",
      logoUrl: "/nvidia.png",
      start: "July 2023",
      end: "present",
      description:
        "Telluricaquarian is a brand that is created by llewellyn, that is designed for the delivery of messages relating to products & services pertaining to Technology, Design & Water, with a large focus on fringe insights regarding Water Technology Water Ionisers offered by Enagic® which are designed to electrolytically transform water.",
    },
    {
      company: "Enagic®",
      href: "https://enagic-australia.com/",
      badges: [],
      location: "Syd, AU",
      title: "Independent Enagic® Product Distributor",
      logoUrl: "/splunk.png",
      start: "January 2020",
      end: "present",
      description:
        "Due to my already opened mind towards natural healing and a myriad of differing things, i came across the idea concept of Kangen Water®, ended up purchasing a machine and becoming a product distributor for the company enagic®",
    },
    {
      company: "City of Sydney Council",
      href: "https://www.cityofsydney.nsw.gov.au/",
      badges: [],
      location: "Sydney, AU",
      title: "Customer Service Officer",
      logoUrl: "/lime.png",
      start: "November 2018",
      end: "January 2020",
      description:
        "Customer Serivce, Barista Duties, Programs Coordination & Maintain Oerations of Facility.",
    },
    {
      company: "The Y",
      href: "https://www.ymcansw.org.au/",
      badges: [],
      location: "Sydney, AU",
      title: "Programs Coordinator | Head Basketball Coach",
      logoUrl: "/mitremedia.png",
      start: "May 2016",
      end: "January 2020",
      description:
        "In charge of running Mens & Mixed Basketball Social Competitions & Head of Junior Basketball Program",
    },
  ],
  education: [
    {
      school: "Make",
      href: "https://www.make.com/",
      degree: "Foundation",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "Present",
    },
    {
      school: "Domestika",
      href: "https://www.domestika.org/en",
      degree: "Innovative Web Design in Figma Step-by-Step Process",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Udemy",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "YMAA",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Telluricaquarian",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/Untitled-design-10.mp4",
    },
    {
      title: "Ursubstanz",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://telluricaquarian.com/wp-content/uploads/2025/04/Untitled-design-9.mp4",
    },
    {
      title: "Areculateir",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://telluricaquarian.com/wp-content/uploads/2025/02/Thumbnail-5.mp4",
    },
    {
      title: "TheThinkingSpirit - Youtube Channel",
      href: "https://www.youtube.com/@telluricaquarian",
      dates: "2020 - Present",
      active: true,
      description:
        "“Water is the common matrix of all growth: all forms of nature are painted by its invisible brush, revealing an imperfect world full of complexity and intelligence. Water also shapes and defines us as a spiritual, conscious part of this planet in search of meaning, quote by: Dr. Paolo Consigli.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/Untitled-design-11.mp4",
    },
  ],
        },
      ],
    },
  ],
} as const;
