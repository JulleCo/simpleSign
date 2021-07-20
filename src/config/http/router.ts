import { Router, Request, Response } from 'express';

const router: Router = Router()

router.get('/', (_ : Request, res: Response) => { 
    res.json({ message : `Heys` });
});

export { router }