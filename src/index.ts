import express from 'express';
import Server from './config/http/app';
// import config from './src/config/env';
// import morgan from 'morgan';
// import cookieParser from 'cookie-parser';
// import { csrf } from './src/middlewares';

import routes from './modules';
// import routesTypes from './modules/index'

// const middlewares = { csrf, cookieParser, morgan };

const application = new Server({ express, routes });

application.listen(3456, () => {
    console.log(`[App]: launch on port ${3456}`)
})