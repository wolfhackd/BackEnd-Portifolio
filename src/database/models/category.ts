export class Category {
  public id?: string;
  public name: string;
  public technologies?: any[];

  constructor(props: { id?: string; name: string; technologies?: any[] }) {
    this.id = props.id;
    this.name = props.name;
    this.technologies = props.technologies ?? [];
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      technologies: this.technologies,
    };
  }
}
