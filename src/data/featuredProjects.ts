export interface FeaturedProject {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Add projects here when featured work is ready. The section stays hidden while this list is empty.
export const featuredProjects: FeaturedProject[] = [];
