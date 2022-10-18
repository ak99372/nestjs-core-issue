import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { customBootstrap } from 'shared-lib';


customBootstrap(AppModule);

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000).then(() => {
//     Logger.log('app started');
//   });

// }
// bootstrap();
