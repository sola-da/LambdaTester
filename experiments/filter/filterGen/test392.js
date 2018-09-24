





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = false
base_0[5] = [1.7976931348623157e+308,0,618,607,-1,705,-100,893,157]
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][5e-324] = 969
return a-b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = {"25":823,"618":"","3.745984832653487e+307":1.3071713990406172e+308,"1.2660471324148161e+308":7.877750127914576e+307,"3.53350244195999e+306":""}
base_2[1]['!cck7Mm'] = true
return a-b+c
};
var argument4 = null;
var argument5 = {"213":"","823":213,"-1":"","`&":122,"":1.5122263889304876e+308,"9.295878830366037e+307":"",":":"H5","ua":"MN&","1.0931082351761487e+308":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = true
argument8[2] = {"0":49,"%":"","K":-1,"#":"","zAXL":1.1136829066953944e+308,"y":242,"[#2":618}
argument7[2] = true
return a+b+c
};
var base_0 = [783,25,1.7976931348623157e+308,714,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test392.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)