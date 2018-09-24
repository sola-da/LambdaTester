





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [5e-324,25,122,403,607,893,705,618,714,100]
base_0['length'] = 4.556701349048866e+307
argument3[0] = 82
return a-b+c/d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = false
return a-b+c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = ""
base_2[5] = 5.282293606287841e+307
argument6['8('] = true
return a*b*c*d
};
var argument5 = {"1":"wOF?","157":"#","1.5591258140351875e+308":1.0124430839034333e+308,"{5":213,"":"3Zq?","9.437723817866675e+307":595,"9.855960239111223e+307":1.1888268025101908e+308,">,":"","1.7758725368913372e+308":82,"7.577704748192051e+307":""};
var argument6 = "FT";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = null
base_3[0] = null
return a/b*c-d
};
var argument8 = true;
var base_0 = [714,618,783,"W","NX","%|",460,126,"+KT","hK"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,618,783,"W","NX","%|",460,126,"+KT","hK"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,618,783,"W","NX","%|",460,126,"+KT","hK"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,618,783,"W","NX","%|",460,126,"+KT","hK"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test225.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)