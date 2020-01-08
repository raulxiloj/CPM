"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oracledb = require('oracledb');
const keys_1 = __importDefault(require("./keys"));
function initialize() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Initializing database module');
        const pool = yield oracledb.createPool(keys_1.default.database);
    });
}
function simpleExecute(statement, binds = [], opts = {}) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let conn;
        opts.outFormat = oracledb.OBJECT;
        opts.autoCommit = true;
        try {
            conn = yield oracledb.getConnection();
            const result = yield conn.execute(statement, binds, opts);
            resolve(result);
        }
        catch (err) {
            reject(err);
        }
        finally {
            if (conn) { // conn assignment worked, need to close
                try {
                    yield conn.close();
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    }));
}
function close() {
    oracledb.getPool().close();
}
module.exports.initialize = initialize;
module.exports.close = close;
module.exports.simpleExecute = simpleExecute;
