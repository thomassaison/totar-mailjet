"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailjetService = void 0;
const common_1 = require("@nestjs/common");
const mailjetmodule_config_1 = require("./configs/mailjetmodule.config");
let MailjetService = class MailjetService {
    constructor(mailjetClient, mailjetModuleConfig) {
        this.mailjetClient = mailjetClient;
        this.mailjetModuleConfig = mailjetModuleConfig;
    }
    async send(sendMailDTO) {
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
};
MailjetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MAILJET_CLIENT')),
    __param(1, (0, common_1.Inject)('MAILJET_MODULE_CONFIG')),
    __metadata("design:paramtypes", [Object, mailjetmodule_config_1.MailjetModuleConfig])
], MailjetService);
exports.MailjetService = MailjetService;
//# sourceMappingURL=mailjet.service.js.map