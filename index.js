var Stream = require('stream').Stream;
var logentries = require('node-logentries') 

exports.log = function(token, level){
	var log = logentries.logger({
  		token: token
	})

	var stream = new Stream();
	stream.writable = true;

	stream.write = function(buf){
		log.log(level, buf)
	}	

	stream.end = function (buf) {
		if (arguments.length) {
			stream.write(buf);
		}
		stream.writable = false;
	};

	stream.destroy = function () {
		stream.writable = false;
	};

	return stream;
}