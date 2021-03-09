import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333, () => {
    Logger.log(`🚀 Server running on http://localhost:3333/`);
  });
}
bootstrap();
