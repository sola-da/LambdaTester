





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['s'] = 4.834012944352403e+307
argument1[2.1869172855352885e+307] = "K"
return a*b-c*d
};
var argument2 = true;
var argument3 = null;
var argument4 = r_1;
var argument5 = [213,893];
var argument6 = [59,82,783,607,1.7976931348623157e+308];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[59] = true
argument5[7] = ""
base_1[5] = ""
return a+b*c*d
};
var argument8 = "4C";
var argument9 = {"607":1.0688790030590482e+308,"3.3711547930111547e+307":3.1434489707228576e+307,"":"d","2.101718166811012e+307":"=,","^{o,lT":-100,"q":""};
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = null
base_2[2][0] = ["rXUj>I};",627,403,"%",-100]
return a-b-c/d
};
var argument12 = r_3;
var argument13 = r_0;
var argument14 = 25;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[655] = null
argument14[5] = null
argument14[1.3938918493123786e+308] = [59,157,1.7976931348623157e+308,100,627,655,893]
return a-b-c/d
};
var base_0 = [969,823,0,460,607,893,242,-1,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,823,0,460,607,893,242,-1,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,823,0,460,607,893,242,-1,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,823,0,460,607,893,242,-1,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test685.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)