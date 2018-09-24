





var callbackArguments = [];
var argument1 = null;
var argument2 = {"":"%;&"};
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = true
return a-b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ["RU_","c","Z"]
argument7[90] = null
base_1[9] = null
return a-b-c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = true
argument7 = true
return a-b+c-d
};
var argument7 = 1.7024853617981759e+308;
var argument8 = r_1;
var argument9 = r_2;
var argument10 = {"":"H"};
var argument11 = [627,242,893,82];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = false
argument10[0] = [705,655,49,5e-324,25]
return a+b-c/d
};
var base_0 = [157,655,1.7976931348623157e+308,618,25,655,823,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,655,1.7976931348623157e+308,618,25,655,823,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,655,1.7976931348623157e+308,618,25,655,823,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,655,1.7976931348623157e+308,618,25,655,823,823]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test297.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)