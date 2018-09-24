





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[460] = false
argument3[2] = {"25":"O+","157":1.6243569955246084e+308,"969":627,"7.404071599345782e+307":"","1.2592451531093816e+308":"","%":157,"2.5322646689098123e+307":1.690608503845604e+308,"1.600540521929961e+308":"("}
return a+b*c
};
var argument2 = 3.1018669564549416e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['c'] = {"242":"e","8.786939125746335e+307":893,"$1=y:":1.2947024915568194e+308,"(RH":460,"2.3662647370926807e+307":""}
argument5[1.2537850866485212e+307] = null
argument5[1.2537850866485212e+307] = ["hx","XQ"]
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = false
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['C'] = false
argument6[7.82874486699946e+307] = 893
return a+b+c
};
var argument6 = 9.834334420262723e+305;
var base_0 = [783,"?",969,"s","9",100,783,"p"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"?",969,"s","9",100,783,"p"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"?",969,"s","9",100,783,"p"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"?",969,"s","9",100,783,"p"]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test819.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)