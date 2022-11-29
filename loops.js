//EXPLANATION OF THE 'EVENT LOOP' IN NODE

// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOpertaions = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: any pending SetTimeout, setInterval, setInmediate?
  // Check two: any pending OS tasks? (Like server listening to port)
  // Check three: any pending long running operations? (Like fs modules)

  return pendingTimers.length || pendingOSTasks.length || pendingOpertaions.length;
}

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if anu functions are ready to be call
  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  // 3) Node pauses execution. Continue when...
  // - a new  pendingOSTask is donde
  // - a new pendingOperation is donde 
  // - a timer is about to be complete
  // 4) Look at pendingTimers. call any setInmediate (just that one. setInterval and setTimeout NO)
  // 5) Handle any 'close' events (events that are in a closing stage have this characteristics)
}

// exit back to terminal
