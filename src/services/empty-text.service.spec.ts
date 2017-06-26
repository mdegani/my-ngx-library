import { EmptyTextService } from './empty-text.service';

describe('EmptyTextService', () => {
  let service;

  beforeEach(() => {
    service = new EmptyTextService();
  });

  it('should to be defined', () => {
    expect(service).toBeDefined();
  });

  it('should to set data properly', () => {
    service.set('hello');
    expect(service.get()).toBe('hello');
  });
});
