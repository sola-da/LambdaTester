





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 3.3820724966025137e+307
argument2 = ""
return a*b+c
};
var argument2 = null;
var argument3 = {"0":"7","213":-1,"Sx":"-","2.4183178393969103e+306":100,"5.952991415238436e+307":"l","":122,"1.0384556113379985e+308":"_X"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][4] = ""
return a/b*c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = 403
argument7 = {"5":"QL","242":5.693510265776069e+307,"714":1.3059172539879942e+308,"5.430143532888192e+307":1.092362053572321e+308,"1.8217412447577325e+307":-1,"R":823,"z":655,"@$i":6.238529230416802e+307,"9.58365731040654e+307":1.7976931348623157e+308}
return a*b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = 1.0928726210293001e+308
base_3[1] = {"100":403,"242":"1","403":"","460":"","":"W","1.3415338562794714e+308":1.6505807343035816e+308,"1.5345892516090565e+308":""}
base_3[1][4] = null
return a+b/c
};
var base_0 = [59,893,607,843,843,1.7976931348623157e+308,157,100,607]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,893,607,843,843,1.7976931348623157e+308,157,100,607]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,893,607,843,843,1.7976931348623157e+308,157,100,607]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,893,607,843,843,1.7976931348623157e+308,157,100,607]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test335.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)