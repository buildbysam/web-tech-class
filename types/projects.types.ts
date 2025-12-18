export interface IProjectMetadata {
  title: string;
  description: string;
}

export interface IProjectAttributes extends IProjectMetadata {
  slug: string;
  date_created: string;
  tech_stack: string[];
  order: number;
}

export interface IProject extends IProjectAttributes {
  github_url?: string;
  live_demo_url?: string;
  screenshots?: string[];
  objective?: string;
  key_features?: string[];
  concepts_earned?: string[];
  tools_technologies?: string[];
}

export interface IProjectListItem extends IProjectAttributes {
  thumbnail: string;
}
