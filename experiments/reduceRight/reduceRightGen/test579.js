





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[100] = "}6%_*"
argument2[1.738403780925446e+308] = {"1.2119994766134876e+308":122}
return a/b+c-d
};
var argument2 = ["U8",")","z"];
var argument3 = {"714":-100,"":"",")":7.240177574941189e+307,"1.1295902790094589e+308":"","V":126,"5]@":"Y","|n{-":1.127405282324182e+308};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = 122
argument5[82] = true
argument5['y'] = true
return a/b+c/d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[82] = false
base_2[3] = null
base_2[2][2] = {"25":5.468232662721007e+307,"157":"[?t","":"y","e":"","8.837886994219072e+307":"eEq0"}
return a+b/c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = {"":1.5390848666951554e+308,"6.993106583207501e+307":783,"sdQ":1.610414152334363e+308,"CC":0,"6.434431874589216e+307":3.7134454897479576e+307,"5.243365456804691e+307":"-xC","1.8985717479067235e+307":1.0728367402163146e+308,"1.374492974838101e+308":"","V":"s","-100":82}
argument8[100] = [122,705,122,607,-1]
return a+b*c+d
};
var argument8 = ["7",100];
var argument9 = false;
var base_0 = ["Rqw:?","^",893,">",-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Rqw:?","^",893,">",-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Rqw:?","^",893,">",-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Rqw:?","^",893,">",-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test579.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)