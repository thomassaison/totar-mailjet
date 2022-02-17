export class SendMailDTO {
  fromMail?: string;
  fromName?: string;
  subject: string;
  textPart: string;
  htmlPart: string;
  recipients: RecipientDTO[]
}

export class RecipientDTO {
  email: string;
}
