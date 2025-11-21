export interface LinkItem {
  id: string;
  title: string;
  url: string;
  category: CategoryType;
  icon: string; // Lucide icon name
  description: string;
  color: string;
}

export enum CategoryType {
  ALL = 'All',
  DEVELOPMENT = 'Development',
  DESIGN = 'Design',
  SOCIAL = 'Social',
  ENTERTAINMENT = 'Entertainment',
  PRODUCTIVITY = 'Productivity',
  TOOL = '工具'
}

export interface SearchResult {
  type: 'LINK' | 'AI_RESPONSE';
  content: LinkItem | string;
}
