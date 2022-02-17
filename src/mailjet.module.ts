import { DynamicModule, Module } from '@nestjs/common';
import { MailjetModuleConfig } from './configs/mailjetmodule.config';
import { MailjetService } from './mailjet.service';
import * as mailjet from 'node-mailjet';

@Module({})
export class MailjetModule {
  static forRoot(mailjetModuleConfig: MailjetModuleConfig): DynamicModule {
    var mailer: mailjet.Email.Client;
    try {
      mailer = mailjet.connect(
        mailjetModuleConfig.publicKey,
        mailjetModuleConfig.privateKey,
      );
    } catch (err) {
      console.log(mailer);
    }

    return {
      module: MailjetModule,
      providers: [
        MailjetService,
        {
          provide: 'MAILJET_CLIENT',
          useValue: mailer,
        },
        {
          provide: 'MAILJET_MODULE_CONFIG',
          useValue: mailjetModuleConfig,
        },
      ],
      exports: [MailjetService],
    };
  }
}
