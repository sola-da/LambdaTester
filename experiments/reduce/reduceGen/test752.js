





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = ["r|@","w|)>I+","un","QD","Lx","q","z+A"]
argument2[403] = [893,460,607,122,126,-1,969,655,655,213]
argument3[4] = [100,893,1.7976931348623157e+308,893,893,783,403,-100,714,122]
return a*b-c*d
};
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = false
argument5[2] = null
argument4['Cb'] = ""
return a+b-c-d
};
var argument5 = true;
var argument6 = r_1;
var argument7 = r_0;
var argument8 = r_0;
var argument9 = r_1;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = null
return a/b*c-d
};
var argument11 = true;
var argument12 = r_1;
var argument13 = ["hi",-100,627];
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[0] = [59,59,607,655,-1]
base_3 = null
argument11[9] = 1.207643644539547e+308
return a-b/c/d
};
var base_0 = [655,403,595,"#"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,403,595,"#"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,403,595,"#"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,403,595,"#"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test752.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)