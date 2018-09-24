





var callbackArguments = [];
var argument1 = 1.1695198344464243e+307;
var argument2 = false;
var argument3 = [627,"5$8vE",59,705,"zl","!",5e-324,"%T",714];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = null
return a*b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = [823,";$R1T",403,49,-1,"%Lg`+Q"]
return a+b+c/d
};
var argument6 = true;
var argument7 = true;
var argument8 = true;
var argument9 = [157,893];
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = ""
return a*b-c/d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[3] = {"7.933587957061661e+307":"FZ"}
argument13[7] = [122,49]
argument14[0] = null
return a+b+c/d
};
var argument13 = null;
var base_0 = [823,25,618,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,25,618,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,25,618,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,25,618,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test149.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)