





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = null
base_0[0][4] = true
argument3['*c'] = false
return a/b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = 1.0125043382533123e+308
base_1[1] = 1.2894159364984808e+308
argument3[0] = 627
return a/b*c-d
};
var argument3 = r_0;
var argument4 = [25,49,126,714,0,403,843,627];
var argument5 = false;
var argument6 = r_2;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = 25
argument6[9.331954948603684e+307] = {"Y":893,"au":""}
return a+b/c*d
};
var argument9 = null;
var argument10 = false;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[126] = {"25":823,"122":1.172633912428888e+308,"2.717646383810145e+307":"l","":"-","d":"' &{q%Tu","3.068704069596794e+307":"","7.469146188592346e+307":1.138784297350255e+308,"rJ":4.034722119988351e+307,"Sh":""}
return a-b+c*d
};
var base_0 = [705,1.7976931348623157e+308,618,893,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,1.7976931348623157e+308,618,893,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,1.7976931348623157e+308,618,893,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,1.7976931348623157e+308,618,893,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test488.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)