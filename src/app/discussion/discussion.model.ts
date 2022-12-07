export class Discussion {
  constructor(
    public title: string,
    public postText: string,
    public id: number,
    public comment?: Comment[]) {}
}
