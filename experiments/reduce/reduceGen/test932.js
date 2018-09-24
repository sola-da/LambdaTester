





var callbackArguments = [];
var argument1 = null;
var argument2 = [783,618,783,969,59,783,618,403];
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = "W"
argument3[1.3938918493123786e+308] = {}
return a+b-c+d
};
var argument5 = true;
var argument6 = {"7":"","49":">","":1.1800468271792278e+308,"1.018483377579198e+308":"","2.2594259513406113e+307":"^","!z4":1.7329664567971164e+308,"6.069104981523493e+307":1.303247923189421e+308,"SHtDJ":"0A","#:":"@^"};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[595] = [595,"lh","4",213,"B",893]
argument6[5.71178064163152e+307] = {"783":618,"3.940951661111548e+307":8.902956597381455e+307}
return a*b/c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['s'] = {"969":100,"":-100,"1.3684922711538314e+308":-1,"V":"","1.3299574037512516e+308":100,"x@|":"a9aZ"}
return a+b-c-d
};
var argument10 = null;
var argument11 = true;
var argument12 = true;
var argument13 = true;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[403] = true
argument11 = 1.7668004930918962e+308
return a-b/c*d
};
var base_0 = [969,1.7976931348623157e+308,0,783,843,969,460,157,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,1.7976931348623157e+308,0,783,843,969,460,157,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,1.7976931348623157e+308,0,783,843,969,460,157,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,1.7976931348623157e+308,0,783,843,969,460,157,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/reduce/reduceGen/test932.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)