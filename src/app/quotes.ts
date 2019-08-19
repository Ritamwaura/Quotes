export class Quote {
  showDescription: boolean;
  like: number;
  dislike: number;
  constructor(public id: number,public author: string,public name: string,public dateCreated: Date){
    this.showDescription=false;
    this.like=0;
    this.dislike=0;
  }
}
