import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CellarsService } from './Cellars.service';
import { Cellars } from './Cellars';

@Controller('/cellars')
export class CellarsController {
  constructor(private readonly cellarService: CellarsService) {
  }

  @Get()
  getAllCellars(): Cellars[] {
    return this.cellarService.getAllCellars();
  }

  @Get(':id')
  getOneCellars(@Param() param): Cellars {
    return this.cellarService.getOneCellars(param.id);
  }

  @Post()
  createCellar(@Body() cellarDTO: CellarDTO) {
    return this.cellarService.createCellars(cellarDTO);
  }
}

export interface CellarDTO {
  name: string;
}
