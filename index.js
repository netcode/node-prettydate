var prettydate =
{
	'format':function (dateTime) {

		var date = dateTime,
		diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);


		//var res = "0"; 	
		//console.log(diff);
		var res = (diff < 60 )? "just now":"0";		
		res = (diff < 120 && res == 0)? "1 minute ago":res;
		res = (diff < 180 && res == 0)? "2 minutes ago":res;
		res = (diff < 3600 &&  res == 0)?  ( ( (diff / 60) <= 10 ) ? Math.floor(diff / 60)+' minutes  ago' :  Math.floor(diff / 60)+" minutes  ago" ):res;
		res = (diff < 7200 &&  res == 0)? "1 hour ago":res;
		res = (diff < 10800 &&  res == 0)? "2 hours ago":res;
		res = (diff < 86400 &&  res == 0)?  ( ( (diff / 3600) <= 10 ) ? Math.floor(diff / 3600)+' hours ago ' :  Math.floor(diff / 3600)+" hours ago " ):res;
		res = (diff < 172800 && res == 0)?'Yesterday':res;
		res = (diff < 259200 &&  res == 0)?'2 days ago':res;
		res = (diff < 604800 && res == 0)? (Math.floor(diff / 86400 )) + ' days ago': res;
		res = ( res == 0)?date:res;
		return res;
	}
}
 
module.exports = prettydate;