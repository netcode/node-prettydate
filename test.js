var pd = require("pretty-date");

console.log(pd.format(new Date()));
console.log(pd.format(new Date("Fri Aug 23 2013 17:30:34 GMT+0200 (EET) ")));
console.log(pd.format(new Date("Fri Aug 23 2013 16:30:34 GMT+0200 (EET) ")));
console.log(pd.format(new Date("Fri Aug 23 2013 11:30:34 GMT+0200 (EET) ")));
console.log(pd.format(new Date("Fri Aug 22 2013 11:30:34 GMT+0200 (EET) ")));
console.log(pd.format(new Date("Fri Aug 21 2013 11:30:34 GMT+0200 (EET) ")));
console.log(pd.format(new Date("Fri Aug 18 2013 11:30:34 GMT+0200 (EET) ")));
console.log(pd.format(new Date("Fri Aug 10 2013 11:30:34 GMT+0200 (EET) ")));