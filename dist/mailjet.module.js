"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var MailjetModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailjetModule = void 0;
const common_1 = require("@nestjs/common");
const mailjet_service_1 = require("./mailjet.service");
const mailjet = __importStar(require("node-mailjet"));
let MailjetModule = MailjetModule_1 = class MailjetModule {
    static forRoot(mailjetModuleConfig) {
        var mailer;
        try {
            mailer = mailjet.connect(mailjetModuleConfig.publicKey, mailjetModuleConfig.privateKey);
        }
        catch (err) {
            console.log(mailer);
        }
        return {
            module: MailjetModule_1,
            providers: [
                mailjet_service_1.MailjetService,
                {
                    provide: 'MAILJET_CLIENT',
                    useValue: mailer,
                },
                {
                    provide: 'MAILJET_MODULE_CONFIG',
                    useValue: mailjetModuleConfig,
                },
            ],
            exports: [mailjet_service_1.MailjetService],
        };
    }
};
MailjetModule = MailjetModule_1 = __decorate([
    (0, common_1.Module)({})
], MailjetModule);
exports.MailjetModule = MailjetModule;
//# sourceMappingURL=mailjet.module.js.map