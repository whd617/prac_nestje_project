import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModuleValidationSchema } from './configs/env-validation';
import { typeOrmModuleOptions } from './configs/database.config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ShowModule } from './show/show.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: ConfigModuleValidationSchema,
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleOptions),
    AuthModule,
    UserModule,
    ShowModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
