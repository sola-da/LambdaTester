





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = 783
return a*b-c+d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = {"157":1.6688851996981808e+307,"595":"Di","4.289202821409071e+307":"(L;","MPM[Ty<":8.198198139125917e+307,"":893,"F":"","@<":"<","O":1.6626895615346544e+308}
base_1[9] = ""
return a+b+c+d
};
var argument5 = [122,618,5e-324];
var argument6 = 460;
var argument7 = {"1.456203133682739e+308":";","":8.889403371822815e+307,"1.2824268443199103e+308":5.5741150803673835e+306};
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9] = null
return a*b-c+d
};
var argument10 = [893,-1,122,213,1.7976931348623157e+308,783,460];
var argument11 = 5.406374418374503e+307;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[3] = null
base_3[0][4] = "Q"
return a+b+c/d
};
var base_0 = [49,969,823,242,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,969,823,242,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,969,823,242,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,969,823,242,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test797.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)