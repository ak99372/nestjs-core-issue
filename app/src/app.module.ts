import { Module } from '@nestjs/common';
import { ChildModule } from './child.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'child',
        module: ChildModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
