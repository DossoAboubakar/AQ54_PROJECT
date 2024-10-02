import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  const corsOptions = {
    origin:['http://localhost:3000']
  }
  app.enableCors(corsOptions )
  const config = new DocumentBuilder()
    .setTitle('AQ54 API ENDPOINTS')
    .setDescription('AQ54 API DESCRIPTION')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
