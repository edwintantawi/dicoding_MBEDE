class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  _validateArgs(args, expectedArgsCount) {
    if (args.length !== expectedArgsCount) {
      throw new Error(
        `fungsi add hanya menerima ${expectedArgsCount} parameter`
      );
    }

    args.forEach((arg) => {
      if (typeof arg !== 'number') {
        throw new Error('fungsi hanya menerima parameter number');
      }
    });

    return args;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this._validateArgs(args, 2);

    // 2 * (length + width)
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this._validateArgs(args, 2);

    // length * width
    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, base] = this._validateArgs(args, 3);

    // sideA + sideB + base
    return this._mathBasic.add(sideA, this._mathBasic.add(sideB, base));
  }

  calculateTriangleArea(...args) {
    const [base, height] = this._validateArgs(args, 2);

    return this._mathBasic.devide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
