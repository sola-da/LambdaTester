





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.748669805137695e+307] = null
argument2[126] = null
base_0[6] = null
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = [403,213,893,59,969,618,-100,100,122,618]
base_1[7] = {"8.219122348714517e+307":"fR#","E;":100,"5.235085131459685e+307":"VZ&","9.80938408738881e+307":"","-1":""}
base_1[2] = true
return a*b-c
};
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = {"82":9.329154558202423e+306,"242":595,"":157,"1.5671281159235836e+308":1.412412830758154e+308,"2.541124816522962e+307":3.981412818324197e+307,"1.4294002305227435e+308":"9!","1.0109873075049307e+308":"3","7.132198436179097e+307":""}
base_2[8] = 627
argument7[1] = null
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = false
argument8[4] = ""
return a+b/c
};
var argument7 = true;
var argument8 = r_2;
var base_0 = [823,607,"n#"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,607,"n#"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,607,"n#"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,607,"n#"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test97.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)