import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  x,
  telegram,
} from '../assets'

export const navLinks: {
  id: string
  title: string
}[] = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
]

export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Access',
    content: 'Inscriptions are tickets to the BitRealms virtual world',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: 'Ownership',
    content: 'Players can participate in and own each game through inscriptions.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Immortality',
    content: `The gaming platform will be eternally online, existing forever alongside 
    the Bitcoin blockchain.`,
  },
  {
    id: 'feature-4',
    icon: send,
    title: 'Influence',
    content: `Early participants on the gaming platform will have a full say in the 
    future development of the platform.`,
  },
]

export const feedback = [
  {
    id: 'feedback-1',
    number: 1,
    content: `Launch of BitRealms with the
    first game and mint the game 
    inscription`,
    // name: 'Herman Jensen',
    title: 'March 2024',
    // img: people01,
  },
  {
    id: 'feedback-2',
    number: 2,
    content: `Introduction of new game inscriptions, 
    more game launches, 
    potential token airdrops, 
    and collaborative community events`,
    // name: 'Steve Mark',
    title: 'April 2024',
    // img: people02,
  },
  {
    id: 'feedback-3',
    number: 3,
    content: `Development of  in-game asset trading 
    market based on BRC-420 and initiation 
    of a Bitcoin Layer 2 gaming chain, 
    guided by our community`,
    // name: 'Kenn Gallagher',
    title: '2024 and Beyond',
    // img: people03,
  },
]

export const stats = [
  {
    id: 'stats-1',
    title: 'USERS WORLDWIDE',
    value: '1 Million+',
  },
  {
    id: 'stats-2',
    title: 'GAMES',
    value: '100+',
  },
  {
    id: 'stats-3',
    title: 'INSCRIPTION COMMUNITIES',
    value: '100+',
  },
]

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
]

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: x,
    link: 'https://www.x.com/',
  },
  {
    id: 'social-media-2',
    icon: telegram,
    link: 'https://web.telegram.org/',
  },
]

export const clients = [
  {
    id: 'client-1',
    logo: airbnb,
  },
  {
    id: 'client-2',
    logo: binance,
  },
  {
    id: 'client-3',
    logo: coinbase,
  },
  {
    id: 'client-4',
    logo: dropbox,
  },
]
