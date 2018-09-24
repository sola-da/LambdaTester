





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a*b/c+d
};
var argument2 = -1;
var argument3 = true;
var argument4 = {"59":"","100":8.781351903525206e+307,"403":783,"843":"E","969":714,"5.94688564289009e+307":1.4166020162917514e+308,"":"","1.0990992491305399e+307":82,">I":""};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = null
return a*b/c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = ["q","@fS"]
base_2['length'] = "1"
base_2[2] = 618
return a+b+c*d
};
var argument7 = r_2;
var argument8 = 5e-324;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = [1.7976931348623157e+308]
base_3 = ["6","+","I","+","@","[s","Aj","M","@"]
return a-b/c*d
};
var argument10 = 1.495205747181107e+308;
var base_0 = [157,5e-324,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,5e-324,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,5e-324,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,5e-324,-1]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test1.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)