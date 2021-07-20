import express from 'express';
import { router } from './router';
import { API_BASE_URL } from '../../env';
import swaggerConfig from '../../middlewares/swagger.json';
import swaggerUi from 'swagger-ui-express';

export const server = async (): Promise<express.Application> => {
    const app: express.Application = express();

    // Swagger documentation
    app.use(`${API_BASE_URL}documentation/`, swaggerUi.serve, swaggerUi.setup(swaggerConfig));

    app.use(`${API_BASE_URL}`, router);

    app.listen(3456, () => {
        console.log(`[App]: launch on port ${3456}`)
    })

    return app;
}