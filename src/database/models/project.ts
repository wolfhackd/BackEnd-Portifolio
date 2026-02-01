export class Project {
  id?: string;
  title: string;
  description: string;
  images: string[];
  link: string;
  created: string;
  fastDescription: string;
  overview: string;
  technologies?: string[];
  challenges?: string[];

  constructor(props: any) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.images = props.images ?? [];
    this.link = props.link;
    this.created = props.created ?? new Date().toISOString();
    this.fastDescription = props.fastDescription;
    this.overview = props.overview;
    this.technologies = props.technologies ?? [];
    this.challenges = props.challenges ?? [];
  }

  isPersisted(): boolean {
    return !!this.id;
  }
}
