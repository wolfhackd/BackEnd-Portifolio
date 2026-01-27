export class Technology {
  public id: string;
  public name: string;
  public color: string;
  public icon: string | null;
  public categoryId: string;

  constructor(props: {
    id?: string;
    name: string;
    color: string;
    icon?: string | null;
    categoryId: string;
  }) {
    this.id = props.id ?? crypto.randomUUID();
    this.name = props.name;
    this.color = props.color;
    this.icon = props.icon ?? null;
    this.categoryId = props.categoryId;
  }
}
