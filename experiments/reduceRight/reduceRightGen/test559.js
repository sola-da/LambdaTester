





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.8120440085202614e+307] = {"618":"","2.2711420745846814e+307":460,"6.185032327365461e+307":-100,"":"H","1.4795119140249012e+306":126,"*g|Bd6":"ICXiG"}
return a+b*c-d
};
var argument2 = ["Q!",213,627,",H","u4","ea*","^K;D",607,126,"m"];
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.286160553564105e+307] = true
return a+b*c-d
};
var argument5 = r_0;
var argument6 = {"213":655,"893":5.971170195508861e+307,"":1.7467232967168334e+308,"7.004668712060429e+307":59};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['8('] = "M"
return a-b+c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[25] = null
argument10['!j'] = [460,"vYn",82,"1","+?H$q",5e-324,242,893,157]
argument10['8('] = ""
return a*b-c+d
};
var argument9 = null;
var argument10 = true;
var base_0 = [100,49,1.7976931348623157e+308,213,"jf+",893,969]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,49,1.7976931348623157e+308,213,"jf+",893,969]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,49,1.7976931348623157e+308,213,"jf+",893,969]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,49,1.7976931348623157e+308,213,"jf+",893,969]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test559.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)