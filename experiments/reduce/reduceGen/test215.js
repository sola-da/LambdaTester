





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = ""
base_0[1][0] = {"823":1.7976931348623157e+308,"":"","D":",e","1.7367404022949642e+308":8.07176255139416e+307,"Y":"#s"}
argument2[4] = {"655":5.513790239932847e+307,"1.6818761753542846e+307":"","L4":5.717271684236853e+307,"2.994369492361557e+306":893,"-1":"","A":1.7976931348623157e+308,"":2.1687434807895552e+307}
return a*b*c/d
};
var argument2 = true;
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = [843,100,783,655,843,595,1.7976931348623157e+308,607,460]
return a+b*c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"82":1.302645007625695e+307,"595":242,"655":3.068281371054896e+307,"g":-1,"Gr":"","1.6540918036605852e+308":"","[":""}
return a+b*c-d
};
var argument7 = true;
var argument8 = ["[W-","|","F","_","q"];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = ""
argument9[4] = [242,705,-100,59,100,1.7976931348623157e+308,403,823,595]
return a+b+c-d
};
var argument10 = null;
var base_0 = [242,100,627,25,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,100,627,25,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,100,627,25,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,100,627,25,100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test215.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)