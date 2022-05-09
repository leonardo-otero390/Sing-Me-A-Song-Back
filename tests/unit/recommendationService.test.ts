import { jest } from '@jest/globals';
import { recommendationService } from '../../src/services/recommendationsService';
import { recommendationRepository } from '../../src/repositories/recommendationRepository';
import errors from '../utils/errors';

describe('recommendationService.upvote', () => {
  it('should throw error', async () => {
    jest.spyOn(recommendationRepository, 'find').mockReturnValue(null);
    expect(async () => {
      await recommendationService.upvote(0);
    }).rejects.toEqual(errors.notFound);
  });
});

describe('recommendationService.downvote', () => {
  it('should throw error', async () => {
    jest.spyOn(recommendationRepository, 'find').mockReturnValue(null);
    expect(async () => {
      await recommendationService.downvote(0);
    }).rejects.toEqual(errors.notFound);
  });
});

describe('recommendationService.getByScore', () => {
  it('should call recommendationRepository.findAll twice', async () => {
    jest.spyOn(recommendationRepository, 'findAll').mockResolvedValue([]);
    await recommendationService.getByScore('gt');
    expect(recommendationRepository.findAll).toHaveBeenCalledTimes(2);
  });
});

describe('recommendationService.getRandom', () => {
  it('should throw error', async () => {
    jest.spyOn(recommendationService, 'getByScore').mockResolvedValue([]);
    expect(async () => {
      await recommendationService.getRandom();
    }).rejects.toEqual(errors.notFound);
  });
});

describe('recommendationService.getScoreFilter', () => {
  it('should return gt', () => {
    expect(recommendationService.getScoreFilter(0.69)).toBe('gt');
  });

  it('should return lte', () => {
    expect(recommendationService.getScoreFilter(0.7)).toBe('lte');
  });
});
