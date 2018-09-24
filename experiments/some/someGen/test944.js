





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1] = null
argument2['f!BO'] = ""
return a/b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = {"":5.634159896532787e+307,"o":25,"1.1892115647385595e+308":6.810414612115791e+306,"$":705,"[t":460,"9.273616940414189e+307":8.61987677159119e+306,"7.814853161505756e+307":5e-324,"[":"u"}
base_1[3][6] = "fG"
argument5['^h'] = [618,"1",607]
return a+b/c
};
var argument4 = "x";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][6] = {"893":"","969":"8","0tu":618,"5.510037408115299e+307":"","":6.133378363659573e+307,"S":"","En":"","C1":""}
argument6[618] = {"1.198177549291448e+307":"d","0g":969}
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['f'] = [59,49,1.7976931348623157e+308]
return a-b-c
};
var argument7 = null;
var argument8 = null;
var base_0 = ["*m","H","1","W"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*m","H","1","W"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*m","H","1","W"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*m","H","1","W"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test944.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)