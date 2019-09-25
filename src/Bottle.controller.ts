import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CellarsService } from './Cellars.service';
import { Bouteille } from './Bouteille';
import { Cellars } from './Cellars';

@Controller('/cellars/:id/bottles')
export class BottleController {
  constructor(private readonly cellarService: CellarsService) {}

  @Post()
  newBottle(@Body() bouteilleDTo: BouteilleDTO, @Param('id') cellarID: string) {
    //let bottle_int : Bouteille = new Bouteille(bouteilleDTo.name, bouteilleDTo.price);
    let cellar_int : Cellars = this.cellarService.getOneCellars(cellarID);
    cellar_int.addBottle(bouteilleDTo.name, bouteilleDTo.price);
  }

  @Get()
  allBottle(@Body() bouteilleDTo: BouteilleDTO) {
    let cellar_int : Cellars = this.cellarService.getOneCellars(cellarID);
    cellar_int.addBottle(bouteilleDTo.name, bouteilleDTo.price);
  }
}


interface BouteilleDTO {
  name: string;
  price: number;
}
