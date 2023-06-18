// const { exec } = require("./generic-static-analysis");

// exec()

const { Worker } = require('worker_threads');

// Create a new worker thread
const worker = new Worker('./generic-static-analysis.js');

// Listen for messages from the worker thread
worker.on('message', (message) => {
  console.log('Received message from worker:', message);
});

// Send a message to the worker thread
worker.postMessage({ command: 'start' });

// Terminate the worker thread
// worker.terminate();