import { MailjetModuleConfig } from './configs/mailjetmodule.config';
import { SendMailDTO } from './dto/send-mail.dto';
import { Email } from 'node-mailjet';
export declare class MailjetService {
    private mailjetClient;
    private mailjetModuleConfig;
    constructor(mailjetClient: Email.Client, mailjetModuleConfig: MailjetModuleConfig);
    send(sendMailDTO: SendMailDTO): Promise<Email.Response>;
}
//# sourceMappingURL=mailjet.service.d.ts.map