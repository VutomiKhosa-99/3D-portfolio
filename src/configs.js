import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Vutomi Khosa',
  subTitle: 'Development portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Vutomi Khosa portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* I'm a maker, a curious thinker who enjoys learning and comprehending how things function.",
        '* My journey as a software developer started when I was a just a kid trying to figure out how video games were made.',
        '* I started my career as a full-stack developer in April 2023 at The Digital Academy, and since then I have built applications that solve real problems in the real world.',
        '* I have a wide range of skills, of which I can say that I’ve mastered many.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://drive.google.com/file/d/1MxzsoQTcGHlTUnAXKqW6p_sz9z11r5E-/view?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      footer: '(And also this web-app)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/repairNotes.jpg',
            websiteURL: 'https://notes-frontend-ctbs.onrender.com/',
          },
          {
            url: 'websites-preview/tenzies.jpg',
            websiteURL: 'https://tenzies-2.netlify.app/',
          },
          {
            url: 'websites-preview/personal-dashboard.jpg',
            websiteURL:
              'https://github.com/VutomiKhosa-99/Personal_Dashboard-Chrome-Extension',
          },
          {
            url: 'websites-preview/meme-generator.jpg',
            websiteURL: 'https://meme-generator-2.netlify.app/',
          },
          {
            url: 'websites-preview/regipro.png',
            websiteURL: 'https://regipro.vercel.app/landing'
          },
          {
            url: 'websites-preview/typing-speed.jpg',
            websiteURL: 'https://typing-speed-2.netlify.app/',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/LuigiKhosa',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/vutomi-luigi-khosa/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/VutomiKhosa-99',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:khosavutomi99@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
