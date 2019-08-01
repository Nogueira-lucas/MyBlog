export class Post{
  public id?:number
  constructor(
    public title:string, 
    public content:string,
    public date: string
  ){}
}