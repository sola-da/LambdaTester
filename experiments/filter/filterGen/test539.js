





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.4034744228995816e+308] = [655,122,25,49,0]
argument3[5.262931091360336e+307] = 3.0102651880485557e+307
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[893] = 5.129643938065258e+307
return a+b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = "a"
argument5[1.4034744228995816e+308] = false
argument4['wIs'] = "{a"
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {"kYj":1.7976931348623157e+308,"1.2712901005585418e+308":-100}
argument5['c'] = false
base_3[2] = null
return a/b+c
};
var argument5 = {"2.34925722874895e+307":8.387984397929389e+307};
var base_0 = [460,82,5e-324,82,157,403,1.7976931348623157e+308,1.7976931348623157e+308,126,403]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,82,5e-324,82,157,403,1.7976931348623157e+308,1.7976931348623157e+308,126,403]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,82,5e-324,82,157,403,1.7976931348623157e+308,1.7976931348623157e+308,126,403]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,82,5e-324,82,157,403,1.7976931348623157e+308,1.7976931348623157e+308,126,403]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test539.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)