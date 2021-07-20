import { server } from '../config/http/app'
import { Application } from 'express'
import request from 'supertest';

let app: Application;

//Avant toute chose, on attend la création de notre serveur
beforeAll(async () => {
    app = await server();
});

describe('GET /', () => {
    it('should return 200 & valid response with Hellos !', async (done) => {
        request(app)
            .get(`/api`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatchObject({ message: 'Heys' });
                done();
            });
    });
});