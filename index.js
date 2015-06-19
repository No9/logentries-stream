var Stream = require('stream').Stream;
var Logger = require('le_node') 

module.exports = function(token, level){
	var log =  new Logger({
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
	
	log.on('error', function (err) {
		stream.emit('error', err);
	})
	
	return stream;
}