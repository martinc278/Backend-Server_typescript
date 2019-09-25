import {Bouteille} from './Bouteille';

interface TotalPrice{
  toEuro: () => number;
  toDollar: () => number;
}

export class Cellars {
  name : string;
  tabBouteilles: Bouteille[] = [];

  constructor(name : string){
    this.name = name;
  }

  addBottle(name: string, price: number):void {
    this.tabBouteilles.push(new Bouteille(name, price));
  }
  afficherCellar():void {
    for(let i:number =0; i<this.tabBouteilles.length; i++){
      this.tabBouteilles[i].lectureBouteille();
    }
  }

  getBottleName(name: string) :Bouteille{
    for(let i:number =0; i<this.tabBouteilles.length; i++){
      if(this.tabBouteilles[i].name===name){
        return this.tabBouteilles[i];
      }
    }
    throw new Error("ça existe pas");
  }

  getTotalPrice(): TotalPrice {
    return{
      toEuro: () => {
        return this.CalculPrixTotal();
      },
      toDollar: () => {
        return this.CalculPrixTotal()*1,1;
      }
    };
  }

  private CalculPrixTotal() {
    let somme:number =0;
    for(let i:number =0; i<this.tabBouteilles.length; i++){
      somme = somme+this.tabBouteilles[i].getPrice();
    }
    return somme;
  }

  getAllBottle(): Bouteille[] {
    return this.tabBouteilles;
  }
}
