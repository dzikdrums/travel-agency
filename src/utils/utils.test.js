import { formatTime } from './formatTime';
import { PromoPrice } from './PromoPrice';

describe('utils', () => {
  describe('PromoPrice', () => {
    it('should return null if there is no arg', () => {
      expect(PromoPrice()).toBe(null);
    });
    it('should return null if arg is not a string', () => {
      expect(PromoPrice(50)).toBe(null);
      expect(PromoPrice(() => {})).toBe(null);
    });
    it('should return null if string is zero characters', () => {
      expect(PromoPrice('')).toBe(null);
    });
    it('should return value if args are proper', () => {
      expect(PromoPrice('100')).toBe(80);
      expect(PromoPrice('1000')).toBe(800);
    });
  });

  describe('formatTime', () => {
    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });
    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });
    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });
    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });
});
