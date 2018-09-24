





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = {"783":"","969":6.91953029820585e+307,"":"f","8.781351903525206e+307":403,"3.5138362192330285e+307":"1-","fS":"'{","Q{":" {C)s"}
return a*b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = 213
base_1[0] = 969
base_1[2] = null
return a+b+c/d
};
var argument3 = {"126":"","w@":1.7196467142449268e+308,"":"","3.884964826616453e+307":"","f":"","8.796925690262995e+307":1.666580232324751e+308};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = 843
base_2 = ["?","=","36","@","X","-t","smdn0)","5e"]
return a+b/c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = [213,607,843,655,595,1.7976931348623157e+308,893,122,82]
argument8[0] = null
return a+b-c-d
};
var argument7 = "";
var base_0 = [122,"Z",607,"o",714,"|0k","Q"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"Z",607,"o",714,"|0k","Q"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"Z",607,"o",714,"|0k","Q"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"Z",607,"o",714,"|0k","Q"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test1.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)