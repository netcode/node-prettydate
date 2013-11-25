function createHandler(divisor,noun,restOfString){
	return function(diff){
		var n = Math.floor(diff/divisor);
		var pluralizedNoun = noun + ( n > 1 ? 's' : '' );
		return "" + n + " " + pluralizedNoun + " " + restOfString;
	}
}

var formatters = [
	{ threshold: 1,        handler: function(){ return      "just now" } },
	{ threshold: 60,       handler: createHandler(1,        "second",    "ago" ) },
	{ threshold: 3600,     handler: createHandler(60,       "minute",    "ago" ) },
	{ threshold: 86400,    handler: createHandler(3600,     "hour",      "ago" ) },
	{ threshold: 172800,   handler: function(){ return      "yesterday" } },
	{ threshold: 604800,   handler: createHandler(86400,    "day",       "ago" ) },
	{ threshold: 2592000,  handler: createHandler(604800,   "week",      "ago" ) },
	{ threshold: 31536000, handler: createHandler(2592000,  "month",     "ago" ) },
	{ threshold: Infinity, handler: createHandler(31536000, "year",      "ago" ) }
];

var prettydate = {
	format: function (date) {
		var diff = (((new Date()).getTime() - date.getTime()) / 1000);
		for( var i=0; i<formatters.length; i++ ){
			if( diff < formatters[i].threshold ){
				return formatters[i].handler(diff);
			}
		}
		throw new Error("exhausted all formatter options, none found"); //should never be reached
	}
}
 
module.exports = prettydate;