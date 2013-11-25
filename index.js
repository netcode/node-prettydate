function pluralize(n,noun,restOfString){
	return "" + n + " " + noun + (n>1?'s':'') + " " + restOfString;
}

var formatters = [
	{
		threshold: 60,
		handler: function(diff){ return "just now"; }
	},{
		threshold: 3600,
		handler: function(diff){ return pluralize( Math.floor(diff/60), "minute", "ago" )}
	},{
		threshold: 86400,
		handler: function(diff){ return pluralize( Math.floor(diff/3600), "hour", "ago" )}
	},{
		threshold: 604800,
		handler: function(diff){ return pluralize( Math.floor(diff/86400), "day", "ago" )}
	},{
		threshold: 2592000,
		handler: function(diff){ return pluralize( Math.floor(diff/604800), "week", "ago" )}
	},{
		threshold: 31536000,
		handler: function(diff){ return pluralize( Math.floor(diff/2592000), "month", "ago" )}
	},{
		threshold: Infinity,
		handler: function(diff){ return pluralize( Math.floor(diff/31536000), "year", "ago" )}
	}
]

var prettydate =
{
	'format':function (dateTime) {

		var date = dateTime
		  , diff = (((new Date()).getTime() - date.getTime()) / 1000);


		//var res = "0"; 	
		// console.log(diff);
		// var res = (diff < 60 )? "just now":"0";		
		// res = (diff < 120 && res == 0)? "1 minute ago":res;
		// res = (diff < 180 && res == 0)? "2 minutes ago":res;
		// res = (diff < 3600 &&  res == 0)?  ( ( (diff / 60) <= 10 ) ? Math.floor(diff / 60)+' minutes  ago' :  Math.floor(diff / 60)+" minutes  ago" ):res;
		// res = (diff < 7200 &&  res == 0)? "1 hour ago":res;
		// res = (diff < 10800 &&  res == 0)? "2 hours ago":res;
		// res = (diff < 86400 &&  res == 0)?  ( ( (diff / 3600) <= 10 ) ? Math.floor(diff / 3600)+' hours ago ' :  Math.floor(diff / 3600)+" hours ago " ):res;
		// res = (diff < 172800 && res == 0)?'Yesterday':res;
		// res = (diff < 259200 &&  res == 0)?'2 days ago':res;
		// res = (diff < 604800 && res == 0)? (Math.floor(diff / 86400 )) + ' days ago': res;
		// res = ( res == 0)?date:res;

		// var res = "";
		// if( diff < 60 ){
		// 	res = "just now"
		// } else if( diff < 3600 ){
		// 	res = "" + Math.floor(diff/60) + " minutes ago";
		// } else if( diff < 86400 ){
		// 	res = "" + Math.floor(diff/3600) + " hours ago";
		// } else if( diff < 604800 ){
		// 	res = "" + Math.floor(diff/3600) + " weeks ago";
		// } else if( diff < 2592000 ){
		// 	res = "" + Math.floor(diff/604800) + " months ago";
		// } else if( diff < 31536000 ){
		// 	res = "" + Math.floor(diff/2592000) + " years ago";
		// }

		for( var i=0; i<formatters.length; i++ ){
			if( diff < formatters[i].threshold ){
				return formatters[i].handler(diff);
			}
		}
		throw new Error("exhausted all formatter options, none found"); //should never be reached
	}
}
 
module.exports = prettydate;