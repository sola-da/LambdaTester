





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.286160553564105e+307] = [618,714,705,705,0,122]
return a/b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.286160553564105e+307] = false
argument2 = "@"
return a*b/c/d
};
var argument3 = {"100":4.349531742290095e+307,"655":705,"1.5128679152201422e+308":5.613568022382557e+307,"":""};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.4250811791542279e+308] = "K"
base_2[2][1] = null
return a/b*c-d
};
var argument6 = {"25":126,"82":"H5","627":4.871985786282849e+307,"2.1083309524420011e+307":783,"Z|xC":783,"1.552737003301011e+308":4.376519945301536e+307};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = 403
argument8[705] = [-1,")","T","4Mn","y",618,"I)i",843,"C","3"]
argument8['St'] = false
return a-b/c-d
};
var base_0 = [25,49,213,1.7976931348623157e+308,213,1.7976931348623157e+308,823,59,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,49,213,1.7976931348623157e+308,213,1.7976931348623157e+308,823,59,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,49,213,1.7976931348623157e+308,213,1.7976931348623157e+308,823,59,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,49,213,1.7976931348623157e+308,213,1.7976931348623157e+308,823,59,-100]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test882.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)