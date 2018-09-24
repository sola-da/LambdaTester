





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = [49,100,893,-1,607]
base_0[7][2] = ["P4z|","q","M8&","V","!","5","Nc:","o","h"]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = 242
return a-b+c
};
var argument3 = null;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = null
argument6[403] = ["<","uth]","R","J","=","m","p]CiD`E"]
return a/b*c
};
var argument6 = null;
var argument7 = {"o$Mk":"","1.7415931282543334e+308":3.398723814623943e+307,"+":1.5840297054505822e+308,"nOQrm[H":893,"#HLj":2.9586013058569117e+307,"":"xS&","1.062410755820931e+308":"","!%":"7="};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = [157,1.7976931348623157e+308,126,618,705,1.7976931348623157e+308]
base_3['length'] = {"823":157,"":"","7.179164747405071e+307":1.7976931348623157e+308}
argument10[0] = false
return a+b/c
};
var argument9 = null;
var argument10 = false;
var base_0 = [607,655,25,460,242,5e-324,-1,460,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,655,25,460,242,5e-324,-1,460,49]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,655,25,460,242,5e-324,-1,460,49]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,655,25,460,242,5e-324,-1,460,49]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test166.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)