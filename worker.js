// const { exec } = require("./generic-static-analysis");

// exec()
const { Worker } = require('worker_threads');

 let worker;
function watchWorker() {
  worker = new Worker('./watch.js');

  worker.on('message', (message) => {
    console.log('CxCss worker:', message);
  });

  worker.postMessage({ command: 'CxCss start' });
  return worker;
}

function terminate() {
  if (worker) {
    worker.terminate();
  }
}



module.exports = {
  watchWorker,
  terminate,
  worker
}
