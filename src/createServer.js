const Hapi = require('@hapi/hapi');

const createServer = ({ mathBasic, figureCalculator }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });

  server.route([
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: ({ params }) => {
        const { a, b } = params;
        const value = mathBasic.add(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/subtract/{a}/{b}',
      handler: ({ params }) => {
        const { a, b } = params;
        const value = mathBasic.subtract(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/multiply/{a}/{b}',
      handler: ({ params }) => {
        const { a, b } = params;
        const value = mathBasic.multiply(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/divide/{a}/{b}',
      handler: ({ params }) => {
        const { a, b } = params;
        const value = mathBasic.divide(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/rectangle/perimeter/{length}/{width}',
      handler: ({ params }) => {
        const { length, width } = params;
        const value = figureCalculator.calculateRectanglePerimeter(
          Number(length),
          Number(width)
        );
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/rectangle/area/{length}/{width}',
      handler: ({ params }) => {
        const { length, width } = params;
        const value = figureCalculator.calculateRectangleArea(
          Number(length),
          Number(width)
        );
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/triangle/perimeter/{sideA}/{sideB}/{base}',
      handler: ({ params }) => {
        const { sideA, sideB, base } = params;
        const value = figureCalculator.calculateTrianglePerimeter(
          Number(sideA),
          Number(sideB),
          Number(base)
        );
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/triangle/area/{base}/{height}',
      handler: ({ params }) => {
        const { base, height } = params;
        const value = figureCalculator.calculateTriangleArea(
          Number(base),
          Number(height)
        );
        return { value };
      },
    },
  ]);

  return server;
};

module.exports = createServer;
