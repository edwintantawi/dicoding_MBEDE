const MathBasic = require('./MathBasic');

describe('A Math Basic', () => {
  it('should contains add, subtract, multiply, and devide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('devide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.devide).toBeInstanceOf(Function);
  });

  describe('A add function', () => {
    it('should throw error when not given 2 paramaters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
    });

    it('should return a + b when given two number parameters', () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });

  describe('A subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrowError();
      expect(() => MathBasic.subtract(1)).toThrowError();
      expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
      expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.subtract('1', '2')).toThrowError();
      expect(() => MathBasic.subtract(true, {})).toThrowError();
      expect(() => MathBasic.subtract(null, false)).toThrowError();
    });

    it('should return a - b when given two number parameters', () => {
      expect(MathBasic.subtract(3, 1)).toEqual(2);
      expect(MathBasic.subtract(12, 4)).toEqual(8);
      expect(MathBasic.subtract(2, 7)).toEqual(-5);
    });
  });

  describe('A multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError();
      expect(() => MathBasic.multiply(1)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.multiply('1', '2')).toThrowError();
      expect(() => MathBasic.multiply(true, {})).toThrowError();
      expect(() => MathBasic.multiply(null, false)).toThrowError();
    });

    it('should return a * b when given two parameters', () => {
      expect(MathBasic.multiply(1, 2)).toEqual(2);
      expect(MathBasic.multiply(5, 4)).toEqual(20);
      expect(MathBasic.multiply(12, 6)).toEqual(72);
    });
  });

  describe('A devide function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.devide()).toThrowError();
      expect(() => MathBasic.devide(1)).toThrowError();
      expect(() => MathBasic.devide(1, 2, 3)).toThrowError();
      expect(() => MathBasic.devide(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.devide('1', '2')).toThrowError();
      expect(() => MathBasic.devide(true, {})).toThrowError();
      expect(() => MathBasic.devide(null, false)).toThrowError();
    });

    it('should return a * b when given two parameters', () => {
      expect(MathBasic.devide(1, 2)).toEqual(0.5);
      expect(MathBasic.devide(5, 4)).toEqual(1.25);
      expect(MathBasic.devide(12, 6)).toEqual(2);
    });
  });
});
