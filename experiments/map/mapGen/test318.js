





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = {"655":"2",":f#":2.572466111190618e+307,"1.4128448089703259e+308":460,"":"<","p":"EQ7","7.901638545569321e+307":"","6.334086339907712e+307":"rk"}
argument2[893] = {"595":"","":"","r":" Ve"}
argument2[1] = "r"
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = {"157":8.742360199115878e+307,"595":5.392270575615071e+307,"783":2.6500049912982496e+307,"8.660069877766304e+307":4.0648041209902273e+307,"":"7'","(":"<H","2.3575875109439987e+307":"3(","1.417884342061656e+308":"y","9.083155541941172e+307":403,"1.6894664701351425e+308":213}
return a-b-c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = 242
argument5['A'] = null
return a-b/c
};
var argument5 = r_0;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['A'] = 1.0509852002301947e+308
return a/b+c
};
var argument8 = 1.5570640318301814e+308;
var base_0 = [126,126,122,157,49,49,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,126,122,157,49,49,122]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,126,122,157,49,49,122]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,126,122,157,49,49,122]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test318.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)