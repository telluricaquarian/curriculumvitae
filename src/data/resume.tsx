import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Llewellyn Y. Fisher",
  initials: "L.Y.F",
  url: "https://bento.me/telluricaquarian",
  location: "Planet Earth",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Designer, Creative & Student of Water",
  summary:
    "At the end of 2019, I left my job in Sport & Recreation and at the beginning of 2020 became introduced to Kangen Water®. I have been actively promoting and sharing information pertaining to this high-quality water. I have been in and out of jobs, alongside taking up A La Carte Freelancing gigs pertaining to media buying for SMBs, SMEs, Volunteer Commission work for startups. Offering my services via Upwork, Social Media & Outreach.",
  avatarUrl: "/me.png",
  skills: [
    "Figma",
    "NoCode",
    "Prompt Engineering",
    "Vibe Coding",
    "Web Design",
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
        url: "https://x.com/potentialseven",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@telluricaquarian",
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
      start: "2025",
      end: "Present",
    },
    {
      school: "Domestika",
      href: "https://www.domestika.org/en",
      degree: "Innovative Web Design in Figma Step-by-Step Process",
      logoUrl: "/waterloo.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Electrolysis - The Path to Green Hydrogen",
      logoUrl: "/laurier.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "YMAA",
      href: "https://ymaa.com/",
      degree: "Understanding Qigong 1: What is Qi Energy & Qigong? Dr Yang",
      logoUrl: "/ib.png",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Telluricaquarian - Tech. Design & Water",
      href: "https://telluricaquarian.com/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Telluricaquarian is a brand that is created by llewellyn, that is designed for the delivery of messages relating to products & services pertaining to Technology, Design & Water, with a large focus on fringe insights regarding Water Technology Water Ionisers offered by Enagic® which are designed to electrolytically transform water.",
      technologies: [
        "Wordpress",
        "Hostinger",
        "Elementor",
      ],
      links: [
        {
          type: "Website",
          href: "https://telluricaquarian.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/Untitled-design-10.mp4",
    },
    {
      title: "Ursubstanz - Apparel & Apothecary",
      href: "https://ursubstanz.com/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "The original substance is nothing but the spiritual substance of the human being.",
      technologies: [
        "Shopify",
        "Openspaces",
        "Studioinnate",
      ],
      links: [
        {
          type: "Website",
          href: "https://ursubstanz.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/telluricaquarian",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://telluricaquarian.com/wp-content/uploads/2025/04/Untitled-design-9.mp4",
    },
    {
      title: "Areculateir - Web Design & Development",
      href: "https://telluricaquarian.com/",
      dates: "Nov 28",
      active: true,
      description:
        "Web. Design & Development",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://telluricaquarian.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/telluricaquarian",
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
          href: "https://www.youtube.com/@telluricaquarian",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/Untitled-design-11.mp4",
    },
  ],
  hackathons: [
    {
      title: "TLRCAQRN Git 21",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction.",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "TLRCAQRN Git 20",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction.",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "TLRCAQRN Git 19",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction.",
      icon: "public",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      links: [],
    },
    {
      title: "TLRCAQRN Git 18",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction.",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 17",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction.",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 16",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 15",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction.",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 14",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 13",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 12",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 11",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      links: [],
    },
    {
      title: "TLRCAQRN Git 10",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 09",
      dates: "2023",
      location: "Planet Earth",
      description: "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 08",
      dates: "2023",
      location: "Planet Earth",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      links: [],
    },
    {
      title: "TLRCAQRN Git 07",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/@telluricaquarian",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquariane",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 06",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 05",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 04",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 03",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 02",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Telluric Gits Currently Under Construction",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
    {
      title: "TLRCAQRN Git 01",
      dates: "2023",
      location: "Planet Earth",
      description:
        "Makeshift version 1",
      image:
        "https://telluricaquarian.com/wp-content/uploads/2025/04/ib-1.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/telluricaquarian",
        },
      ],
    },
  ],
} as const;
