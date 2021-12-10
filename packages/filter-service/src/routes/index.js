import express from 'express';
import appMonitor from './applicationMonitoringRoute';
const application = express();
/**
 *
 * @param {application} app
 */
export const routesHandler = (app) => {
    app.use('/', appMonitor);
};
