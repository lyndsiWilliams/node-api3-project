// Import
const server = require('./server.js');
// Port
const port = 4000;
// Hey, listen!
server.listen(port, () => {
  console.log(`\n*** Server running on http://localhost:${port} ***\n`);
})