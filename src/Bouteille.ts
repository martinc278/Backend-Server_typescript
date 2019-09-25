export class Bouteille {
  name: string;
  price: number;

  constructor(name : string, price : number){
    this.name = name;
    this.price = price;
  }

  lectureBouteille(){
    console.log(this.name);
    console.log(this.price);
  }

  getPrice() :number {
    return this.price;
  }

  updatePrice(price : number) :void {
    this.price = price;
  }

}
