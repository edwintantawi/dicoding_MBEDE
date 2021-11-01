const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

const init = async () => {
  const figureCalculator = new FigureCalculator(MathBasic);
  const server = createServer({ mathBasic: MathBasic, figureCalculator });

  await server.start();
  console.log(`Server start at http://localhost:${server.info.port}`);
};

init();
