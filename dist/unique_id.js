"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idCounter = 0;
function uniqueId(prefix) {
    return "" + prefix + idCounter++;
}
exports.uniqueId = uniqueId;
