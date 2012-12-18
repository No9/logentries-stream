# logentries-stream

Stream interface for log entries

## Install
```
npm install logentries-stream
```

## Usage 

As a simple stream

```
var logstream = require('logentries-stream')('YOUR_LOG_TOKEN', 'LOG_LEVEL');
logstream.write('Hello World');
```

With Bunyan

```
var Logger = require('bunyan');
var loglevel = 'info';
var logstream = require('logentries-stream')('YOUR_LOG_TOKEN', loglevel); 
var log = new Logger({name: "myapp", stream: logstream, level: loglevel});

log.info('bunyan FTW');        
```