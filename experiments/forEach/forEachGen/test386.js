





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1881593224845412e+308] = 403
argument1['1SHF1'] = true
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[-1] = "V+"
argument3[1] = true
return a*b-c
};
var argument3 = r_0;
var argument4 = [893,100,618,1.7976931348623157e+308];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[126] = {"714":"","843":"","969":"","zg":"6i!|","1.3595757737181653e+308":"3","$":"y","":122,"1.1547181404281835e+308":157}
return a-b/c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['wIs'] = [122,-1,213,25]
argument9[0] = null
base_3[3][1.3434821406183095e+308] = null
return a/b/c
};
var argument8 = {"969":"","":843,"4.022811125544743e+307":"","1.6397810958139083e+308":"]","f":1.3727712169451555e+308};
var base_0 = [122,157,607,242,783,969,783,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,157,607,242,783,969,783,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,157,607,242,783,969,783,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,157,607,242,783,969,783,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test386.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)