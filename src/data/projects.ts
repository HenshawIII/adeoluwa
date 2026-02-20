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
    description: "With Archivi.ng, my role is to help make history feel alive and accessible through visuals. Working from research heavy stories, often pulled from old newspapers, I create collage style illustrations and editorial designs that carry the mood and message of each piece in a clear, engaging way for social media. The goal is always to tell the story visually without losing accuracy or depth, and to keep a consistent style across multiple slides and topics. It's design as storytelling, translating history into images people can connect with today.",
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
    description: "Grafiki is a creative agency where my focus has been shaping its visual voice through art direction and design. I built an editorial and brand direction that feels confidently Afrikan, drawing from Pan African color sensibilities, expressive typography, and design choices that avoid rigid, overly perfect minimalism while still staying refined. Over time, this direction helped create a consistent feel across the studio's visual output and client work, and it has resonated well with audiences. Grafiki represents my growth not just as a designer, but as someone who can define a visual world and guide it consistently.",
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
    description: 'SCL is a construction company branding project where the goal was to communicate strength, professionalism, and craftsmanship at a glance. I developed a visual identity that feels solid and confident, something that matches the kind of work builders do, where trust matters. I delivered the logo, typography, color system, and brand assets, creating a consistent identity the company can use across communication and marketing. This project shows my ability to translate a business goal into a clear brand story through design.',
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
    description: "*Ayo Ibile* was a photography exhibition celebrating carnival culture in Lagos, and I handled the art direction and graphic design for the show. My main challenge was building a visual identity that felt exciting and cultural, but didn't compete with the photographs, it had to support them. I created the wordmark, typography and color direction, designed posters and promotional assets, and supported the exhibition setup so everything felt cohesive in the space. The goal was to spark curiosity and bring people in, and it was rewarding to see people show up and engage with the work.",
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
    description: 'HIC Tech is a branding project where I led the art direction and visual identity, with the goal of making modern technology feel approachable for Nigerian businesses. The brand offers digital solutions and innovation, so I designed a system that feels fluid and smooth, like automation working quietly in the background. I delivered the logo, typography, color palette, and brand assets, building a flexible identity that can stretch across web, social, and product communication. The end result was a clean, modern look that still feels human and easy to connect with.',
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
    description: "For Errant Journal, I created a series of illustrations to accompany the essay \"Mmuo na Mmadu: Ogbanje and the Cost of Transparency,\" written by my friend AmaraChika. The text explores Igbo spiritual traditions and the idea of secrecy and opacity as protection, so the illustrations had to be thoughtful, evoking meaning without exposing what shouldn't be exposed. I developed a set of symbolic drawings based on key ideas and characters from the essay, including pieces like Ogbanje, Dibia, and Iyi u wa. I loved this project because it sits close to my interests in spirituality, culture, and how Africans tell stories on our own terms.",
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
    description: '*General Disorder* is a satire film project where I handled graphic design and visual worldbuilding for the set. The film lives in an exaggerated reality that still reflects real world issues, so the graphics needed to feel immersive and believable, like a world you could step into. I created posters, signage, and set visuals using a consistent system of typography and color to match different moods and locations in the story. I also used generative design workflows to help build a cohesive visual language across the project, working closely with the director and production team to make the film environment feel fully designed and emotionally convincing.',
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
    description: '*Look Inward* is my ongoing art series where I take traditional African design elements, patterns, symbols, fabrics, and masquerade forms, and reimagine them in modern digital illustration and graphic design. I grew up around masquerade culture in Calabar, and while many people dismissed these visuals as fetish or "evil," I saw beauty, intention, and design. This project is my way of studying those visual languages more seriously and showing how they can live in contemporary art today. Each piece is both personal research and a quiet call for us to look inward, towards our own histories, for creative direction.',
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
