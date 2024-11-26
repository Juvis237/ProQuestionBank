export const onBoardingDataSet = [
  // {
  //     img: '/assets/onboarding-1.svg',
  //     title: 'Your learning Journey with Pro Assistant',
  //     content: `Pro Assistant provides a gamified approach of learning in preparation for examinations like National Exams(GCE O&A Level, BAC), Regional Exams(WAEC) and International Exams(TOEFL/IELTS, SAT)`,
  //         btnText: 'Get Started'
  // },
  {
    img: "/assets/onboarding-2.svg",
    title: "Practice Lessons",
    content: `Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida proin.
    Pulvinar orci amet risus egestas. Volutpat congue consequat sed eu amet sed sit.`,
    btnText: "Trial Battle",
  },
  // {
  //     img: '/assets/onboarding-3.svg',
  //     title: 'Battle Leagues',
  //     content: `Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida proin.
  // Pulvinar orci amet risus egestas. Volutpat congue consequat sed eu amet sed sit.`,
  //     btnText: 'Trial Battle'
  // },
];

export const trialLevels = [
  {
    name: "beginner",
  },
  {
    name: "intermediate",
  },
  {
    name: "midway advanced",
  },
  {
    name: "advanced",
  },
];

export const trialBtnText = [
  {
    content: "GCE O Level",
  },
  {
    content: "GCE A Level",
  },
  {
    content: "TOEFL",
  },
  {
    content: "BAC",
  },
  {
    content: "WAEC",
  },
  {
    content: "SAT",
  },
  {
    content: "IELTS",
  },
];

export const loginField = [
  {
    label: "Email",
    name: "email",
  },
  {
    name: `password`,
    label: `Password`,
  },
];

export const PracticeResultCardData = [
  {
    icon: "/assets/ph_clock-fill.svg",
    btnText: "Ace Time",
    border: "ace",
    text: "2:35",
  },
  {
    icon: "/assets/clarity_clock-solid.svg",
    btnText: "Your Time",
    border: "time",
    text: "3:00",
  },
  {
    icon: "/assets/ellipse34.svg",
    btnText: "Total Coins",
    border: "",
    text: "500",
  },
];

export const powerupsData = [
  {
    label: "Freeze Opponent for 1 minutes ",
    value: "2000",
    color: "secondary",
  },
  {
    label: "Freeze Opponent for 2 minutes ",
    value: "3500",
    color: "disabled",
  },
  {
    label: "Freeze Opponent for 3 minutes ",
    value: "5000",
    color: "primary",
  },
  {
    label: "Freeze Opponent for 5 minutes ",
    value: "7500",
    color: "lime",
  },
];

export const dashboardLink = [
  {
    icon: "/assets/home.svg",
    link: "/",
    name: "Home",
  },
  {
    icon: "/assets/practice.svg",
    link: "/practice",
    name: "Practice",
  },
  {
    icon: "/assets/battle.svg",
    link: "/battle",
    name: "Battle",
  },
  {
    icon: "/assets/profile.svg",
    link: "/profile",
    name: "Profile",
  },
];
export const topNavLink = [
  {
    icon: "/assets/progress-dashboard.svg",
  },
  {
    icon: "/assets/solar-shop.svg",
  },
  {
    icon: "/assets/notification.svg",
  },
];

export const learningData = [
  {
    header: "Learning",
    lessons: [
      {
        image: "/assets/brain-badge.svg",
        title: "Learning Modes",
        content:
          "Learn by practicing through Practice Mode or Exam Mode and acquire coins",
        isDisplay: false,
      },
      {
        image: "/assets/target-badge.svg",
        title: "How To Learn",
        content: "Set daily targets to follow and be up on the learning ladder",
        isDisplay: true,
      },
      {
        image: "/assets/notification-badge.svg",
        title: "How To Learn",
        content:
          "Set daily target and daily reminders to be up on the learning ladder",
        isDisplay: false,
      },
    ],
  },
  {
    header: "Battling",
    lessons: [
      {
        image: "/assets/battle-badge.svg",
        title: "Battle Mode",
        content:
          "Compete with friends through leagues and move up the leaderboard",
        isDisplay: false,
      },
      {
        image: "/assets/powerup-badge.svg",
        title: "Power Ups",
        content: "Up play your opponents by using power ups to freeze them",
        isDisplay: true,
      },
    ],
  },
  {
    header: "Track Progress",
    lessons: [
      {
        image: "/assets/progress-badge.svg",
        title: "Progress dashboard",
        content: "See your overall performance overtime and coins gained",
        isDisplay: false,
      },
    ],
  },
  {
    header: "Learner Engagement",
    lessons: [
      {
        image: "/assets/engagement-badge.svg",
        title: "Engagement",
        content: "Receive study reminders and notifications on upcoming exams",
        isDisplay: true,
      },
    ],
  },
  {
    header: "Incentives",
    lessons: [
      {
        image: "/assets/coin-badge.svg",
        title: "Engagement",
        content: "Receive bonus coins and diamonds to unlock premium features",
        isDisplay: false,
      },
    ],
  },
];

export const forgotPasswordHeader = "Reset Password";

export const ForgotPasswordText =
  "Enter your email below in order to reset your password";
