





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['8('] = true
argument2[9.624051682326797e+306] = 2.2741043599489745e+307
return a*b-c*d
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = ["h?","]duD$","9L","9p",242,"]#",1.7976931348623157e+308,0]
base_1[1][5] = "C>s"
return a/b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][5] = true
argument7[655] = [0,-1,618,0,213,25]
argument5 = null
return a/b*c*d
};
var argument6 = {"82":"Z","607":3.4625403001380714e+307,"714":"","893":"","":"9+8","1.221323706597397e+308":7.766247677447204e+307,"4.107969653874006e+307":"S","v":25,"id":823,"1.5786442312301328e+308":"6"};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = "<"
base_3[2][1] = 595
argument9[3] = [213,-100,618,213,607]
return a+b-c+d
};
var base_0 = ["uNir",122,213,"E","!E",213]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["uNir",122,213,"E","!E",213]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["uNir",122,213,"E","!E",213]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["uNir",122,213,"E","!E",213]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test902.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)