import { Injectable } from '@nestjs/common';
import { Cellars } from './Cellars';
import { CellarDTO } from './Cellars.controller';

@Injectable()
export class CellarsService {
  storage: Cellars[] = [new Cellars("Cave_Martin")];

  getAllCellars(): Cellars[] {
    return this.storage;
  }

  createCellars(cellarDTO: CellarDTO) {
    this.storage.push(new Cellars(cellarDTO.name));
  }

  getOneCellars(name: string): Cellars{
    for(let i: number=0; i<this.storage.length; i++){
      if(this.storage[i].name===name){
        return this.storage[i];
      }
    }
    throw new Error("ça existe pas");
  }
}
