# logentries-stream

Simple Stream interface for logentries based on https://github.com/logentries/le_node
Please see that project for account creation and configuration for log keys etc.

## Prerequisites
[A logentries account](www.logentries.com)

## Install
```
npm install logentries-stream
```

## Usage 

```
// Create a stream per log level
var logstream = require('logentries-stream')('LOG_TOKEN', 'LOG_LEVEL');

logstream.write('Hello World');

// Log to stderr in case of connection issues. 
logstream.on('error', function(err) {
	process.stderr.write(err)
})
```
