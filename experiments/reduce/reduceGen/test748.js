





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = null
argument1[893] = {"1.888470460018901e+307":""}
return a/b-c*d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[213] = [242,122,1.7976931348623157e+308,823,-100,-1,157,25,242]
base_1[1][3] = 460
return a*b/c-d
};
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9.331954948603684e+307] = {"5":1.5299516322788178e+308,"157":6.813784185741731e+307,"618":"","Z":"","DS>":1.3884302730272398e+308,"w":"","1.1782868793289178e+308":242,"`":"4fk","1.2732227042524885e+308":"hXT"}
return a+b-c/d
};
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = 460
base_3[2] = ""
argument10['*c'] = [5e-324,82,627,893,595,59,618]
return a+b/c/d
};
var argument9 = "+rI";
var argument10 = true;
var base_0 = ["wr",893,"K","(Pu",122,25,"xp]","q",403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["wr",893,"K","(Pu",122,25,"xp]","q",403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["wr",893,"K","(Pu",122,25,"xp]","q",403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["wr",893,"K","(Pu",122,25,"xp]","q",403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test748.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)