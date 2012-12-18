# logentries-stream

Stream interface for log entries

## Install
```
npm install logentries-stream
```

## Usage 

As a simple stream

```
var logstream = require('../').log('YOUR_LOG_TOKEN', 'LOG_LEVEL');
logstream.write('Hello World');
```

With Bunyan

```

```