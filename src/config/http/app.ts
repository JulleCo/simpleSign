import express from 'express';
import {Request, Response} from 'express';

import { API_BASE_URL } from '../../env';
import swaggerConfig from '../../middlewares/swagger.json';
import swaggerUi from 'swagger-ui-express';


class Server {
    private app : express.Application
    constructor({ express, routes }) {
      this.app = express();
      this.initializeApplicationRouter(routes); // INFO Initialiser les routes en dernier ! (après les middlewares et le parsing)
    }

    initializeApplicationRouter(routes:any) {
        this.app.get(`${API_BASE_URL}`, (_ : Request, res: Response) => { 
                    res.json({ message : `Hey` });
                });
        // Swagger documentation
        this.app.use(`${API_BASE_URL}documentation/`, swaggerUi.serve, swaggerUi.setup(swaggerConfig));
        // Router
        this.app.use(`${API_BASE_URL}`, routes)
    }
  
    listen(port: number, _ : any) {
      this.app.listen(port, () => console.log(`application started on port : ${port}`));
    }
  }
  
  export default Server;
