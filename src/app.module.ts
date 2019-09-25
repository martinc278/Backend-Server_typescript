import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CellarsController } from './Cellars.controller';
import { BottleController } from './Bottle.controller';
import { CellarsService } from './Cellars.service';

@Module({
  imports: [],
  controllers: [AppController, CellarsController, BottleController],
  providers: [AppService, CellarsService],
})
export class AppModule {}
