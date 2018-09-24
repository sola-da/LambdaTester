





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"8.219122348714517e+307":"fR#","E;":100,"5.235085131459685e+307":"VZ&","9.80938408738881e+307":"","-1":""}
base_0[2] = true
return a+b+c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {"82":9.329154558202423e+306,"242":595,"":157,"1.5671281159235836e+308":1.412412830758154e+308,"2.541124816522962e+307":3.981412818324197e+307,"1.4294002305227435e+308":"9!","1.0109873075049307e+308":"3","7.132198436179097e+307":""}
base_1[7] = 627
base_1[2][5e-324] = null
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = false
base_2[0] = ""
return a+b/c
};
var argument6 = false;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = 5.14350049400143e+307
argument9[1] = false
return a*b-c
};
var argument9 = false;
var base_0 = [783,618,213,705,126,403,213]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,618,213,705,126,403,213]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,618,213,705,126,403,213]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,618,213,705,126,403,213]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test95.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)