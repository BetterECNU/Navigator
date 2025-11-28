import { CategoryType, LinkItem } from './types';
import { 
  Code, 
  Figma, 
  Twitter, 
  Youtube, 
  Mail, 
  Github, 
  Terminal, 
  Dribbble, 
  Slack, 
  Music, 
  Trello,
  Database,
  Cloud,
  Cpu,
  Globe
} from 'lucide-react';

export const CATEGORIES = Object.values(CategoryType);

export const MOCK_LINKS: LinkItem[] = [
  {
    id: '1',
    title: 'Our GitHub',
    url: 'https://github.com/BetterECNU',
    category: CategoryType.DEVELOPMENT,
    icon: 'Github',
    description: '我们的 GitHub',
    color: 'from-gray-700 to-gray-900'
  },
  {
    id: '2',
    title: 'ECNU·课栈',
    url: 'https://courses.myecnu.org',
    category: CategoryType.TOOL,
    icon: 'Figma',
    description: '华东师范大学课程共享计划',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: '3',
    title: 'Broken Life',
    url: 'https://broken.life',
    category: CategoryType.FRIEND,
    icon: 'Triangle',
    description: 'zeyi 的个人博客',
    color: 'from-gray-900 to-black'
  },
  {
    id: '4',
    title: '公共体育部',
    url: 'https://peclub.ecnu.edu.cn',
    category: CategoryType.OFFICIAL,
    icon: 'Dribbble',
    description: '公体的网站，在上面预约体测',
    color: 'from-pink-400 to-rose-500'
  },
  {
    id: '5',
    title: '公共数据库',
    url: 'https://portal2023.ecnu.edu.cn/',
    category: CategoryType.OFFICIAL,
    icon: 'Twitter',
    description: '华师大公共数据库',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: '6',
    title: '大夏学堂',
    url: 'https://elearning.ecnu.edu.cn/',
    category: CategoryType.OFFICIAL,
    icon: 'Youtube',
    description: '大夏学堂在线教学平台',
    color: 'from-red-500 to-red-700'
  },
  {
    id: '7',
    title: 'Linear',
    url: 'https://linear.app',
    category: CategoryType.PRODUCTIVITY,
    icon: 'Trello',
    description: 'The issue tracking tool you\'ll enjoy using.',
    color: 'from-indigo-500 to-violet-600'
  },
  {
    id: '8',
    title: 'Slack',
    url: 'https://slack.com',
    category: CategoryType.PRODUCTIVITY,
    icon: 'Slack',
    description: 'Made for people.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: '9',
    title: 'Spotify',
    url: 'https://spotify.com',
    category: CategoryType.ENTERTAINMENT,
    icon: 'Music',
    description: 'Music for everyone.',
    color: 'from-green-400 to-green-600'
  },
   {
    id: '10',
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com',
    category: CategoryType.DEVELOPMENT,
    icon: 'Database',
    description: 'Where developers learn, share, & build.',
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: '11',
    title: 'AWS Console',
    url: 'https://aws.amazon.com',
    category: CategoryType.DEVELOPMENT,
    icon: 'Cloud',
    description: 'Cloud computing services.',
    color: 'from-yellow-500 to-amber-600'
  },
  {
    id: '12',
    title: 'Localhost:3000',
    url: 'http://localhost:3000',
    category: CategoryType.DEVELOPMENT,
    icon: 'Terminal',
    description: 'Local development server.',
    color: 'from-slate-600 to-slate-800'
  }
];
