





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = true
return a-b*c
};
var argument2 = {"3.3284724386455964e+306":"C'"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = 9.600139354014955e+307
argument5[7] = [618,126,49]
return a-b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = "5"
return a+b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['Y'] = {"":"","1.7369516365796123e+308":"G"}
base_3[1] = true
return a/b+c
};
var base_0 = ["?","tF","$xIUb5"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?","tF","$xIUb5"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?","tF","$xIUb5"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?","tF","$xIUb5"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test468.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)