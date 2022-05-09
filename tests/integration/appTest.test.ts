import supertest from 'supertest';
import app from '../../src/app';
import { songFactory } from '../factories/songFactory';
import * as utilsDatabase from '../utils/database';

const agent = supertest(app);
beforeEach(async () => {
  await utilsDatabase.clearDatabase();
});

afterAll(async () => {
  await utilsDatabase.disconnect();
});

describe('POST /recommendations', () => {
  it('should return 201', async () => {
    const song = songFactory();
    const response = await agent.post('/recommendations').send(song);
    expect(response.status).toBe(201);
  });
});

describe('POST /recommendations/:id/upvote', () => {
  it('should return 201', async () => {
    const song = songFactory();
    const response = await agent.post('/recommendations').send(song);
    expect(response.status).toBe(201);
  });
});
