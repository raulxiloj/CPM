"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const encuestasRoutes_1 = __importDefault(require("./routes/encuestasRoutes"));
const paisesRoutes_1 = __importDefault(require("./routes/paisesRoutes"));
const profsRoutes_1 = __importDefault(require("./routes/profsRoutes"));
const inventoresRoutes_1 = __importDefault(require("./routes/inventoresRoutes"));
const inventosRoutes_1 = __importDefault(require("./routes/inventosRoutes"));
const reportsRoutes_1 = __importDefault(require("./routes/reportsRoutes"));
const database = require('./database');
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/encuestas', encuestasRoutes_1.default);
        this.app.use('/paises', paisesRoutes_1.default);
        this.app.use('/profs/', profsRoutes_1.default);
        this.app.use('/inventores', inventoresRoutes_1.default);
        this.app.use('/inventos', inventosRoutes_1.default);
        this.app.use('/reportes', reportsRoutes_1.default);
    }
    start() {
        database.initialize();
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
