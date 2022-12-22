"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockInstance = void 0;
function getMockInstance(targetClass) {
    let mockInstance = {};
    Object.getOwnPropertyNames(targetClass.prototype).forEach((methodName) => {
        mockInstance = Object.assign(Object.assign({}, mockInstance), { [methodName]: jest.fn() });
    });
    return mockInstance;
}
exports.getMockInstance = getMockInstance;
