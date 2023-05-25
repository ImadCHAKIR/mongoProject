const { exec } = require('child_process');

exec('mongod --config ./backend/confs/base.conf', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing: ${error}`);
    return;
  }

  console.log(`Output: ${stdout}`);
  console.error(`Errors: ${stderr}`);
});

setTimeout(function(){},5000);

exec('node ./backend/user.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing: ${error}`);
    return;
  }

  console.log(`Output: ${stdout}`);
  console.error(`Errors: ${stderr}`);
});

exec('node ./backend/task.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing: ${error}`);
    return;
  }

  console.log(`Output: ${stdout}`);
  console.error(`Errors: ${stderr}`);
});

