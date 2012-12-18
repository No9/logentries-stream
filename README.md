# logentries-stream

Stream interface for logentries 

## Prerequisites
[A logentries account](www.logentries.com)

## Install
```
npm install logentries-stream
```

## Usage 

### Simple

```
var logstream = require('logentries-stream')('LOGENTRIES_TOKEN', 'LOG_LEVEL');
logstream.write('Hello World');
```

### With Bunyan

```
npm install bunyan
npm install logentries-stream
```

Sample Code 

```
var Logger = require('bunyan');
var loglevel = 'info';
var logstream = require('logentries-stream')('LOGENTRIES_TOKEN', loglevel); 
var log = new Logger({name: "myapp", stream: logstream, level: loglevel});

log.info('bunyan FTW');        
```