export type MediaItem =
  | { type: 'image'; url: string }
  | { type: 'video'; url: string };

export type Project = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  media: MediaItem[]; // Images and/or videos, any number, any order
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Archivi.ng',
    tags: ['Editorial Design', 'Collage Illustration', 'Art Direction'],
    description: "At Archivi.ng, I create editorial visuals, campaign assets, and event design rooted in historical storytelling. I work across collage illustration and art direction, helping turn research-heavy material into clear, engaging visual outputs, while building visual systems that keep the work consistent across platforms and formats. This work reflects my strength in design systems, storytelling, and culturally grounded visual communication.",
    media: [
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Archivi.ng/Editor\'s%20Note%20TA%20Issue%205Artboard%202.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Archivi.ng/Learn%20politics%20Lagos%20Housing%20carouselSlide%201.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Archivi.ng/Learn%20politics%20Lagos%20to%20Abuja%20Cover.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Archivi.ng/Monthly%20dispatch%20Aug%20IG.png' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Archivi.ng/Monthly%20Dispatch%20JuneArtboard%201.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Archivi.ng/Monthly%20DispatchArtboard%201.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Archivi.ng/50%20Year%20Old%20Gallery%20carouselArtboard%201.jpg' },
    ],
  },
  {
    id: '2',
    title: 'Grafiki',
    tags: ['Art Direction', 'Brand Identity', 'Creative Direction'],
    description: "Grafiki is a creative agency project where I have helped shape the visual direction across editorial and client facing work. My role has focused on building a consistent design language through color, typography, and art direction, with a strong Afrikan visual influence. This work helped define a recognizable creative identity across the brand's output.",
    media: [
      { type: 'video', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Grafiki/final%20comp.mp4' },
      { type: 'video', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Grafiki/Jan%20Article%20Animation.mp4' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Grafiki/Screenshot%202026-02-09%20213953.png' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Grafiki/unnamed.png' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Grafiki/WID%20Artboard%201.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Grafiki/Abby%20Linkedin.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Grafiki/April%20cover%20.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Grafiki/BrayeSlide%201.jpg' },
      
    ],
  },
  {
    id: '3',
    title: 'SCL',
    tags: ['Brand Identity', 'Visual Design', 'Logo Design'],
    description: "SCL is a construction branding project where I developed a visual identity designed to communicate strength, trust, and professionalism. I created the logo, typography, color system, and supporting brand assets to give the company a clear and consistent visual presence. The project reflects my approach to building practical, strong identities for growing businesses.",
    media: [
      { type: 'video', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/SCL/SCL%20PC.mp4' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/SCL/6.png' },
      { type: 'video', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/SCL/1%20video.mp4' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/SCL/2.png' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/SCL/3.png' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/SCL/4.png' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/SCL/5.png' },
    ],
  },
  {
    id: '4',
    title: 'Ayo Ibile',
    tags: ['Art Direction', 'Brand Identity', 'Poster Design'],
    description: "For *Ayo Ibile*, a photography exhibition celebrating Lagos carnival culture, I handled the art direction and graphic design for the exhibition identity and communications. I developed the wordmark, typography and color direction, designed posters and promotional assets, and supported the visual setup of the exhibition. The visual system was built to support the photographs, not compete with them.",
    media: [
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Ayo%20Ibile/Ai%20TIX.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Ayo%20Ibile/oyewole%20lawal-0803.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Ayo%20Ibile/Ai%20main%20Poster.jpg?updatedAt=1771613892698' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Ayo%20Ibile/oyewole%20lawal-9147.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Ayo%20Ibile/oyewole%20lawal-9192.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Ayo%20Ibile/oyewole%20lawal-9307.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Ayo%20Ibile/AI%20Map.jpg' },
      { type: 'video', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Ayo%20Ibile/Carnival%20post.mp4' },
    ],
  },
  {
    id: '5',
    title: 'HIC Tech',
    tags: ['Brand Identity', 'Art Direction', 'Visual Design'],
    description: "For HIC Tech, I led the art direction and brand identity design for a technology brand focused on helping Nigerian businesses use modern digital tools. I created the logo, typography, color palette, and brand assets, building a visual system that feels modern, fluid, and clear. The identity helps the brand feel innovative while still approachable.",
    media: [
      { type: 'video', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/HIC%20Tech/HIC%20Logo%20Animation%20Main.mp4' },
      { type: 'video', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/HIC%20Tech/1.mov' },
      { type: 'video', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/HIC%20Tech/3.mov' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/HIC%20Tech/Artboard%201%20copy%202.png' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/HIC%20Tech/Artboard%201.png' },
     
    ],
  },
  {
    id: '6',
    title: 'Errant Journal',
    tags: ['Editorial Illustration', 'Digital Illustration', 'Visual Storytelling'],
    description: "For Errant Journal, I created a series of illustrations for the essay *Mmuo na Mmadu: Ogbanje and the Cost of Transparency*. The project called for a careful visual language because it engaged Igbo spirituality, secrecy, and opacity. I developed symbolic editorial illustrations that supported the essay while staying respectful to the subject and its deeper meanings.",
    media: [
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Errant%20Journal/OgbanjeOgbanje.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Errant%20Journal/Dibia%20and%20Ofeke%202.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Errant%20Journal/Dibia%20and%20Ofeke.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Errant%20Journal/Dibia.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Errant%20Journal/Iyi-uwa.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Errant%20Journal/Nwadibia.jpg' },
     
    ],
  },
  {
    id: '7',
    title: 'General Disorder, Film Project',
    tags: ['Worldbuilding', 'Poster Design', 'Generative Design'],
    description: "For *General Disorder*, a satire film project, I handled graphic design and visual worldbuilding for the set environment. I created posters, signage, and set graphics, and used typography, color, and generative design workflows to build a cohesive visual system across scenes. The result was a more immersive and believable world that supported the film's dystopian tone.",
    media: [
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/General%20DIsorder/IMG_4012.JPG.jpeg?updatedAt=1771613788336' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/General%20DIsorder/IMG_4013.JPG.jpeg?updatedAt=1771613790624' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/General%20DIsorder/Positive%20Slogan%202.jpg?updatedAt=1771613821969' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/General%20DIsorder/Scampaign%20poster%201.jpg?updatedAt=1771613808748' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/General%20DIsorder/Scampaign%20poster%202.jpg?updatedAt=1771613818358' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/General%20DIsorder/Elect-con%2020in%20by%2012in.png?updatedAt=1771613916143' },
      
    ],
  },
  {
    id: '8',
    title: 'Look Inward',
    tags: ['Digital Illustration', 'Poster Design', 'Art Direction'],
    description: "*Look Inward* is my ongoing art project where I explore how traditional African visual languages can live in contemporary digital design. Through poster based digital illustrations, I reinterpret masquerade forms, symbols, and patterns into a modern visual style. It's where my interests in cultural research, art direction, and personal storytelling come together most clearly.",
    media: [
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Look%20Inward/Untiltled%20LI.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Look%20Inward/Adeoluwa%20Henshaw-2D-Life%20and%20Death-Digital%20Art-4000x5000p-2025.png' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Look%20Inward/Look%20inward%20bnus.jpg' },
      { type: 'image', url: 'https://ik.imagekit.io/ttibelkqm/Portfolio/Look%20Inward/Adeoluwa%20Henshaw-2D_Wise%20Cloth-Digital%20Art-6000x6000p-2024.png?updatedAt=1771613865705' },
      { type: 'image', url: '/inwardd.jpeg' },
      { type: 'image', url: '/inwarddd.jpeg' },
    ],
  },
];
