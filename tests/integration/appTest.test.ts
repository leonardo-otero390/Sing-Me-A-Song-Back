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

  it('should return 422', async () => {
    const response = await agent.post('/recommendations').send({});
    expect(response.status).toBe(422);
  });
});

describe('POST /recommendations/:id/upvote', () => {
  it('should return 200', async () => {
    await utilsDatabase.populateDatabase();

    const song = await utilsDatabase.getRandomRecommendation();
    const response = await agent.post(`/recommendations/${song.id}/upvote`);
    expect(response.status).toBe(200);
    const updatedSong = await utilsDatabase.getRecommendationById(song.id);
    expect(updatedSong.score).toBe(song.score + 1);
  });
});

describe('POST /recommendations/:id/downvote', () => {
  beforeEach(async () => {
    await utilsDatabase.populateDatabase();
  });

  it('should return 200', async () => {
    const song = await utilsDatabase.getRandomRecommendation();
    const response = await agent.post(`/recommendations/${song.id}/downvote`);
    expect(response.status).toBe(200);
    const updatedSong = await utilsDatabase.getRecommendationById(song.id);
    expect(updatedSong.score).toBe(song.score - 1);
  });

  // it('should remove song from database', async () => {
  //   const song = await utilsDatabase.getRecommendationByScore(-5);
  //   await agent.post(`/recommendations/${song[0].id}/downvote`);
  //   const updatedSong = await utilsDatabase.getRecommendationById(song[0].id);
  //   expect(updatedSong).toBe(null);
  // });
});

describe('GET /recommendations', () => {
  it('should return 200 and a body', async () => {
    await utilsDatabase.populateDatabase();
    const response = await agent.get('/recommendations');
    expect(response.status).toBe(200);
    // expect(response.body.length).toBeLessThanOrEqual(10);
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('youtubeLink');
    expect(response.body[0]).toHaveProperty('score');
  });
});

describe('GET /recommendations/:id', () => {
  it('should return 200 and a body', async () => {
    await utilsDatabase.populateDatabase();
    const song = await utilsDatabase.getRandomRecommendation();
    const response = await agent.get(`/recommendations/${song.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('youtubeLink');
    expect(response.body).toHaveProperty('score');
  });
});

describe('GET /recommendations/random', () => {
  it('should return 200 and a body', async () => {
    await utilsDatabase.populateDatabase();
    const response = await agent.get('/recommendations/random');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('youtubeLink');
    expect(response.body).toHaveProperty('score');
  });
});

describe('GET /recommendations/top/:amount', () => {
  it('should return 200 an array ordered', async () => {
    await utilsDatabase.populateDatabase();
    const response = await agent.get('/recommendations/top/5');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(5);
    const first = response.body[0];
    expect(first).toHaveProperty('name');
    expect(first).toHaveProperty('youtubeLink');
    expect(first).toHaveProperty('score');
    const second = response.body[1];
    expect(first.score).toBeGreaterThanOrEqual(second.score);
  });
});
