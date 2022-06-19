import express from 'express';
import path from "path";
import * as http from 'http';
import * as bodyparser from 'body-parser';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { CommonRoutesConfig } from './common/common.routes.config';
import { UsersRoutes } from './users/users.routes.config';
import { AuthRoutes } from './auth/auth.routes.config';
import { EquipmentRoutes } from './equipments/routes/equipment.routes';
import { AppDataSource } from './common/databases/data-source';
import helmet from 'helmet';
import dotenv from 'dotenv';
import debug from 'debug';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
// const port = 9090;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');
const dotenvResult = dotenv.config();

if (dotenvResult.error) {
    throw dotenvResult.error;
}

app.use(express.json());
// app.use(bodyparser.json());
app.use(cors());
app.use(helmet());

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({all: true})
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false;

    if (typeof global.it === 'function') {
        loggerOptions.level = 'http'; // for non-debug test runs, squelch entirely
    }
}

app.use(expressWinston.logger(loggerOptions));

AppDataSource.initialize();

routes.push(new AuthRoutes(app));
routes.push(new UsersRoutes(app));
routes.push(new EquipmentRoutes(app));

const runningMessage = `Server running at http://localhost:${process.env.APP_PORT}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
})

export default

server.listen(process.env.APP_PORT, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        route.configureRoutes();
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(runningMessage);
});
