"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const mailjet_service_1 = require("./mailjet.service");
describe('MailjetService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [mailjet_service_1.MailjetService],
        }).compile();
        service = module.get(mailjet_service_1.MailjetService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=mailjet.service.spec.js.map