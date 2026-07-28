export const trackHubs = {
  ras: {
    name: "RAS",
    fullName: "Robotics & Automation Society",
    description:
      "Explore robotics, automation, and electronics workshops led by the RAS track.",
    accent: {
      orb1: "bg-amber-400/25",
      orb2: "bg-fuchsia-500/20",
      orb3: "bg-sky-400/20",
      gradient: "from-amber-200 via-white to-sky-200",
      hoverBorder: "hover:border-amber-400/40",
    },
    leadership: {
      head: { name: "Yahia Hagag", title: "Head", photo: "/images/branch-members/yahia.jpg" },
      viceHead: { name: "Youssef Ahmed", title: "Vice Head", photo: "/images/branch-members/youssef-ahmed.jpeg" },
    },
    workshops: [
      {
        slug: "micro",
        name: "Microcontrollers",
        description:
          "Learn microcontroller programming, interfacing, and embedded fundamentals.",
      },
      {
        slug: "automation",
        name: "Automation",
        description:
          "Hands-on automation workshops with practical industrial applications.",
      },
      {
        slug: "electronics",
        name: "Advanced Electronics",
        description:
          "Dive deeper into circuit design, analysis, and advanced electronics.",
      },
      {
        slug: "embedded",
        name: "Embedded System",
        description:
          "Build real embedded systems from hardware design to firmware integration.",
      },
      {
        slug: "basic-electronics",
        name: "Basic Electronics",
        description:
          "Start with the fundamentals of electronics, components, and circuits.",
      },
    ],
  },
  pes: {
    name: "PES",
    fullName: "Power & Energy Society",
    description:
      "Discover mechanical design, simulation, and power engineering workshops.",
    accent: {
      orb1: "bg-emerald-400/25",
      orb2: "bg-sky-500/20",
      orb3: "bg-teal-400/20",
      gradient: "from-emerald-200 via-white to-sky-200",
      hoverBorder: "hover:border-emerald-400/40",
    },
    leadership: {
      head: { name: "Mohamed Khames", title: "Head", photo: "/images/branch-members/khames.jpeg" },
      viceHead: { name: "Rohayem Abd El-salam", title: "Vice Head", photo: "/images/branch-members/rohayem.jpeg" },
    },
    workshops: [
      {
        slug: "solid",
        name: "Simulation SolidWorks",
        description:
          "Master 3D modeling and simulation using SolidWorks.",
      },
      {
        slug: "ansys",
        name: "Mechanical Analysis",
        description:
          "Perform structural and mechanical analysis with ANSYS tools.",
      },
      {
        slug: "mps",
        name: "MPS",
        description:
          "Explore manufacturing processes and production systems.",
      },
      {
        slug: "design",
        name: "Mechanical Design",
        description:
          "Learn mechanical design principles and engineering drawing skills.",
      },
    ],
  },
  cs: {
    name: "CS",
    fullName: "Computer Society",
    description:
      "Join the Computer Society track and sharpen your competitive programming skills.",
    accent: {
      orb1: "bg-violet-400/25",
      orb2: "bg-cyan-500/20",
      orb3: "bg-fuchsia-400/20",
      gradient: "from-violet-200 via-white to-cyan-200",
      hoverBorder: "hover:border-violet-400/40",
    },
    leadership: {
      head: { name: "Belal El Bably", title: "Head", photo: "/images/branch-members/belal.jpg" },
      // viceHead: { name: "TBD", title: "Vice Head", photo: null },
    },
    workshops: [
      {
        slug: "cp",
        name: "Competitive Programming",
        description:
          "Train for coding competitions with algorithms and problem-solving.",
      },
    ],
  },
};

export const trackHubNavItems = [
  { name: "RAS", route: "/tracks/ras" },
  { name: "PES", route: "/tracks/pes" },
  { name: "CS", route: "/tracks/cs" },
];
