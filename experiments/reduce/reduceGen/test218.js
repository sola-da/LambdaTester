





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = [213,100,126,893,627,-100]
argument2[0] = ["&",126,49]
argument1[8] = [618,783]
return a-b+c*d
};
var argument2 = 1.5437147396557727e+308;
var argument3 = 1.0284791209613275e+308;
var argument4 = true;
var argument5 = {"403":"","969":9.007564522368696e+307,"":"","B":4.850459238327186e+307,"8.809993139242034e+307":"H5(Ob","-1":"$","6.209875132005905e+307":3.883690897742399e+306,"1.6213149743565212e+308":"f-d"};
var argument6 = 1.0574487825221634e+308;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = [59,705,823,-1]
argument5[2] = false
argument4[2.1869172855352885e+307] = null
return a/b*c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6.35085648319999e+307] = 627
argument8[4] = true
return a+b/c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[213] = ""
argument11 = null
return a-b-c/d
};
var argument10 = null;
var base_0 = ["YE",618,714,403,"u",59,126,1.7976931348623157e+308,"Y"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["YE",618,714,403,"u",59,126,1.7976931348623157e+308,"Y"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["YE",618,714,403,"u",59,126,1.7976931348623157e+308,"Y"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["YE",618,714,403,"u",59,126,1.7976931348623157e+308,"Y"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test218.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)