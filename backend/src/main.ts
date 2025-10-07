import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  DocumentBuilder, SwaggerModule} from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: 'GET,PUT,PATCH,POST,DELETE,',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });

  /**
   * Swagger Configuration
   */
  const config = new DocumentBuilder()
    .setTitle('API Emissor de Recibos Online')
    .setDescription('Api para emissao de recibos online')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  
  const document  = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);


}
bootstrap();
