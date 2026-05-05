export default interface Project {
  _id: string;
  title: string;
  category: string;
  techStack: string[];
  description: string;
  fullDescription: string;
  features: string[];
  challenges: string;
  solutions: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}
