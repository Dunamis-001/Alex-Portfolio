export interface Project {
  id: string;
  title: string;
  period: string;
  roles: string[];
  description: string;
  links: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'rhema-feast',
    title: 'Rhema Feast',
    period: '2022–2025',
    roles: ['Brand Owner', 'Digital Strategy', 'Campaign Leadership', 'Live Production'],
    description: 'Led full-scale digital campaigns from 2022 to 2025, overseeing brand positioning, promotional strategy, creative direction, content production, design systems, and live-stream execution. Directed multi-platform rollout architecture driving audience growth, engagement, and event visibility.',
    links: [
      { label: 'TikTok', url: 'https://www.tiktok.com/@rhemafeastkenya?_r=1&_t=ZS-93zkzDePME1' },
      { label: 'Instagram', url: 'https://www.instagram.com/rhemafeastkenya?igsh=MWE0dHByazY5Zzk1aA==' }
    ]
  },
  {
    id: 'stan-agacho',
    title: 'Stan Agacho - One Million Nation (ONAMA)',
    period: '2025',
    roles: ['Digital Strategy', 'Brand Design', 'Content Production'],
    description: 'Directed digital strategy, visual identity development, and structured content deployment to strengthen brand presence and audience engagement.',
    links: [
      { label: 'TikTok', url: 'https://www.tiktok.com/@stanagacho?_r=1&_t=ZS-93zlBbL7QOb' },
      { label: 'Instagram', url: 'https://www.instagram.com/stan_agacho?igsh=NWphdmY2ZnlzeTFz' },
      { label: 'YouTube', url: 'https://youtube.com/@stanagacho?si=8vS_7Pt6iF50xAwZ' }
    ]
  },
  {
    id: 'julian-kyula',
    title: 'Julian Kyula (Brand)',
    period: '2021-2025',
    roles: ['Brand Management', 'Digital Strategy', 'Executive Media Coordination'],
    description: 'Managed digital presence and brand positioning across platforms. Oversaw structured content planning, social media growth, media coordination, and served as liaison to the Chairman\'s Office across ministry and marketplace engagements.',
    links: [
      { label: 'Facebook', url: 'https://web.facebook.com/juliankyula' },
      { label: 'Instagram', url: 'https://www.instagram.com/jkyula?igsh=ZHNicnRmZGJpdWYy' }
    ]
  },
  {
    id: 'rhema-experience',
    title: 'The Rhema Experience (RXP)',
    period: '2024-2025',
    roles: ['Digital Strategy', 'Brand Management', 'Content Systems', 'Live Streaming'],
    description: 'Developed brand positioning strategy and implemented structured digital rollout systems. Led content creation, content distribution architecture, and live-stream infrastructure.',
    links: []
  },
  {
    id: 'kingdom-commonwealth',
    title: 'Kingdom Commonwealth',
    period: '2024-2025',
    roles: ['Digital Strategy', 'Media Coordination'],
    description: 'Oversaw digital positioning, messaging alignment, and coordinated media systems to ensure consistent brand communication.',
    links: []
  },
  {
    id: 'ruach-assemblies',
    title: 'Ruach Assemblies',
    period: '2021-2025',
    roles: ['Brand Owner', 'Digital Strategy', 'Media Systems Coordination'],
    description: 'Led platform growth strategy, content management systems, and production oversight across digital channels.',
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/@ruachassemblies' },
      { label: 'Instagram', url: 'https://www.instagram.com/ruachassemblies?igsh=MTJ1NWozeXI1cXVuNQ==' }
    ]
  },
  {
    id: 'faith-to-action',
    title: 'Faith to Action Network (NGO)',
    period: '2024-2025',
    roles: ['Event Production', 'Media Management'],
    description: 'Managed event media planning, live coverage coordination, and strategic content execution.',
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/@FaithToActionNetwork/videos' }
    ]
  },
  {
    id: 'poster-campaign-design',
    title: 'Poster & Campaign Design',
    period: '2022-2025',
    roles: ['Creative Strategy', 'Visual Branding', 'Conversion-Focused Assets'],
    description: 'Developed premium promotional visuals and campaign creatives designed to capture attention, communicate value, and strengthen brand authority across digital channels.',
    links: [
      { label: 'View Design Portfolio', url: 'https://drive.google.com/drive/folders/1qhMFHwxhIL64aRuAkJpqQrGIRzbrdQAT?usp=drive_link' }
    ]
  }
];

export const skills = [
  'Digital growth strategy',
  'Campaign architecture & execution',
  'Brand positioning & identity systems',
  'Content production & distribution pipelines',
  'Live-stream and event media infrastructure',
  'Team leadership & media coordination',
  'Web systems thinking & digital product development'
];
