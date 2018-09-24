





var callbackArguments = [];
var argument1 = {"49":"","157":"m","1.6910724303725186e+308":122,"6.517716046437807e+307":"Z"};
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = null
argument2[2] = false
return a*b+c+d
};
var argument5 = null;
var argument6 = null;
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = [49,893,213,59,5e-324,655]
return a-b+c*d
};
var argument9 = 5.837446191577278e+307;
var argument10 = r_0;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[25] = false
return a-b+c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {"-1":122,"l@":2.76589595675279e+307,"8.219755775179059e+307":"","-a":"0S*n","1.6867966269191668e+308":"L","4.3627454330695207e+307":"+","5.703501795562037e+307":"["}
return a/b+c+d
};
var base_0 = [843,607,893,"D",213,";",595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,607,893,"D",213,";",595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,607,893,"D",213,";",595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,607,893,"D",213,";",595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test320.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)