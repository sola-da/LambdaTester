





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7976931348623157e+308] = false
return a*b+c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = [460,607,213,783,607,783]
argument6[403] = "q"
return a-b+c
};
var argument5 = {"6":"OZ<S","969":213,"1.6435000629887653e+308":"","1.5675688788135165e+308":"","1.3991507894521056e+308":"","5.06401538525789e+306":"9#"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][6] = {"7":"g-64D","823":7.139518808789557e+307,"":1.1167787557308546e+308,"6.176753613729395e+307":"5","nFt":1.3713951224242728e+308}
return a*b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][8] = false
base_3[1]['{X'] = true
return a/b*c
};
var argument8 = true;
var base_0 = [213,783,705,595,893,893,82,627,705,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,783,705,595,893,893,82,627,705,893]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,783,705,595,893,893,82,627,705,893]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,783,705,595,893,893,82,627,705,893]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test909.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)