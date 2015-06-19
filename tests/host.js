var logstream = require('../')('error', 'info');

logstream.write('Hello World');

// Log to stderr in case of connection issues. 
logstream.on('error', function(err) {
	process.stderr.write(err)
})
