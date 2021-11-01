const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A Figure Calculator', () => {
  it('should contains calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, calculateTriangleArea ', () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(
      Function
    );
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(
      Function
    );
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() =>
        figureCalculator.calculateRectanglePerimeter()
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(1)
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(1, 2, 3)
      ).toThrowError();
    });

    it('should throw error when given not-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() =>
        figureCalculator.calculateRectanglePerimeter('1', '2')
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(true, {})
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(null, false)
      ).toThrowError();
    });

    it('should return correct value based on rectangle perimeter formula', () => {
      // arrage
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateRectanglePerimeter(
        length,
        width
      );

      // assert
      expect(result).toEqual(60);
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30);
    });
  });

  describe('A calculateRectangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() =>
        figureCalculator.calculateRectangleArea(1, 2, 3)
      ).toThrowError();
    });

    it('should throw error when given not-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() =>
        figureCalculator.calculateRectangleArea('1', '2')
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectangleArea(true, {})
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectangleArea(null, false)
      ).toThrowError();
    });

    it('should return correct value based on rectangle area formula', () => {
      // arrange
      const length = 5;
      const width = 8;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateRectangleArea(length, width);

      // assert
      expect(result).toEqual(40);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });

  describe('A calculateTrianglePerimeter function', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() =>
        figureCalculator.calculateTrianglePerimeter()
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(1)
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(1, 2)
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)
      ).toThrowError();
    });

    it('should throw error when given not-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() =>
        figureCalculator.calculateTrianglePerimeter('1', '2', 1)
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(true, {}, null)
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(null, false, [])
      ).toThrowError();
    });

    it('should return correct value based on rectangle area formula', () => {
      // arrange
      const sideA = 5;
      const sideB = 7;
      const base = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateTrianglePerimeter(
        sideA,
        sideB,
        base
      );

      // assert
      expect(result).toEqual(22);
      expect(spyAdd).toBeCalledWith(sideA, sideB + base);
    });
  });
  describe('A calculateTriangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
      expect(() =>
        figureCalculator.calculateTriangleArea(1, 2, 3)
      ).toThrowError();
    });

    it('should throw error when given not-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() =>
        figureCalculator.calculateTriangleArea('1', '2', 1)
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTriangleArea(true, {}, null)
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTriangleArea(null, false, [])
      ).toThrowError();
    });

    it('should return correct value based on rectangle area formula', () => {
      // arrange
      const base = 10;
      const height = 15;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spydivide = jest.spyOn(MathBasic, 'divide');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateTriangleArea(base, height);

      // assert
      expect(result).toEqual(75);
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
      expect(spydivide).toHaveBeenCalledWith(150, 2);
    });
  });
});
