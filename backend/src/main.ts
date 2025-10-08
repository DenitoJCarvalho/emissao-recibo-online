import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { normalizePort } from './common/server/server';
import helmet from 'helmet';
import slowDown from 'express-slow-down';
import dotenv from 'dotenv';
import tooBusy from 'toobusy-js';

dotenv.config({
  path: `.env`
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: [`error`, `warn`],
  });

  const port = normalizePort(process.env.PORT ?? `8985`) as number;

  /**
   * CORS Configuration
  */
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: 'GET,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });

  /**
   * Helmet Configuration
  */
  app.use(helmet());

  /**
   * Express Slow Down Configuration
  */
  app.use(slowDown({
    windowMs: 60 * 1000,
    delayAfter: 10,
    delayMs: (used, req) => {
      const delayAfter = req.slowDown.limit;
      return (used - delayAfter) * 500;
    }
  }));

  /**
   * Too Busy Configuration
  */
  app.use((req, res, next) => {
    if (tooBusy()) {
      return res.status(503).send(`Servidor ocupado. Tente novamente mais tarde.`);
    } else {
      next();
    }
   });

  /**
   * Swagger Configuration
   */
  if (process.env.MODE !== `production`) {
    const config = new DocumentBuilder()
      .setTitle('API Emissor de Recibos Online')
      .setDescription('Api para emissao de recibos online')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
      
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  
  await app.listen(port);

  process.on('SIGINT', () => { 
    tooBusy.shutdown();;
    process.exit();
  });

}
bootstrap();
