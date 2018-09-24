





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = ""
base_0[0] = null
base_0['length'] = {"9":"$","25":"","4.0867233755481873e+307":1.4069757488642648e+308,"":4.936145300479922e+307,"1.1176608472056435e+308":1.2183995797795081e+308}
return a*b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = [0,1.7976931348623157e+308,403]
return a*b/c+d
};
var argument3 = false;
var argument4 = r_0;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][2.819898637310108e+307] = null
argument6[8.575765443877852e+307] = true
argument6[1] = false
return a/b-c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = [242,242,242,607,843,242]
argument8[126] = {"25":1.7976931348623157e+308,"82":"","213":4.8921357849939863e+306,"":1.151622354234667e+308,"9.109383524200278e+306":6.354685403150325e+307}
argument7[8.575765443877852e+307] = [618,126,607,0,607,59,242]
return a-b+c-d
};
var argument7 = null;
var argument8 = r_3;
var base_0 = [595,242,969,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,242,969,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,242,969,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,242,969,-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test351.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)