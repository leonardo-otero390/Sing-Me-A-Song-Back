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
    await utilsDatabase.populateDatabase();

    const song = await utilsDatabase.getRandomRecommendation();
    const response = await agent.post(`/recommendations/${song.id}/upvote`);
    expect(response.status).toBe(200);
    const updatedSong = await utilsDatabase.getRecommendationById(song.id);
    expect(updatedSong.score).toBe(song.score + 1);
  });
});
