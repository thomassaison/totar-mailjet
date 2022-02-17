import { Inject, Injectable } from '@nestjs/common';
import { MailjetModuleConfig } from './configs/mailjetmodule.config';
import { SendMailDTO } from './dto/send-mail.dto';
import { Email } from 'node-mailjet';

@Injectable()
export class MailjetService {
  constructor(
    @Inject('MAILJET_CLIENT')
    private mailjetClient: Email.Client,
    @Inject('MAILJET_MODULE_CONFIG')
    private mailjetModuleConfig: MailjetModuleConfig,
  ) {}

  async send(sendMailDTO: SendMailDTO): Promise<Email.Response> {
    const fromMail = sendMailDTO.fromMail || this.mailjetModuleConfig.fromEmail;
    const fromName = sendMailDTO.fromName || this.mailjetModuleConfig.fromName;

    return this.mailjetClient.post('send').request({
      FromEmail: fromMail,
      FromName: fromName,
      Subject: sendMailDTO.subject,
      'Text-part': sendMailDTO.textPart,
      'Html-part': sendMailDTO.htmlPart,
      Recipients: sendMailDTO.recipients.map((e) => {
        return {
          Email: e.email,
        };
      }),
    });
  }
}
