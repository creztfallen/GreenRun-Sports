"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
function Index(req) {
    console.log('Processing request', req.info.id);
    return 'Hello! Nice to meet you.';
}
exports.Index = Index;
