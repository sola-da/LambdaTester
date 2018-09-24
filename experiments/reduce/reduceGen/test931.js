





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = false
return a/b-c/d
};
var argument2 = null;
var argument3 = null;
var argument4 = null;
var argument5 = 2.0203055279921113e+307;
var argument6 = ["K>9","R",157,607,"u]",460,100];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[595] = 157
argument4['s'] = 126
argument6[655] = "4"
return a/b*c-d
};
var argument8 = false;
var argument9 = null;
var argument10 = 655;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"213":"@","607":"","":"","1.7976931348623157e+308":1.0365113344467685e+308,"J)2":1.4015997349065056e+308,"D_'PQ6>":823,"8.10497860606443e+307":1.7130759511122889e+308,"!":3.3824100825767145e+307}
return a*b+c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[5] = [82,893,783,843,25,823]
base_3[9] = true
argument14 = {"59":1.4553975452066018e+308,"100":242,"157":595,"460":1.2583889932642453e+308,"":126,"3.991582449987437e+307":"","2.4188793881951334e+307":122,"4.716974940636322e+307":1.782102227056907e+308,"1.7917820778512867e+308":1.2794124900058832e+308}
return a+b+c/d
};
var argument13 = r_3;
var argument14 = null;
var base_0 = [783,607,969,25,-100,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,607,969,25,-100,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,607,969,25,-100,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,607,969,25,-100,157]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test931.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)