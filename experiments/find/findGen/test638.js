





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8][0] = {"":7.491743824885326e+306}
argument2[126] = 655
return a+b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = {"1.3806873324101451e+308":"t","1.4660885006253456e+308":""}
argument5['AO?'] = true
argument4[242] = true
return a+b-c
};
var argument4 = {"59":4.056061686404903e+307,"595":""};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = null
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = 843
base_3[3][1.7261030733891165e+308] = null
argument8[4.953791384496108e+307] = [122,49,"_&4U","IAM","5","%",403]
return a/b*c
};
var base_0 = [618,627,843,705,607,969,1.7976931348623157e+308,893,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,627,843,705,607,969,1.7976931348623157e+308,893,595]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,627,843,705,607,969,1.7976931348623157e+308,893,595]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,627,843,705,607,969,1.7976931348623157e+308,893,595]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test638.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)