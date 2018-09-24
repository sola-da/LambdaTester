





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = [893,25,25,242,122,213]
argument2['f9zgt4n!ZJR]W'] = null
base_0['length'] = {"82":"","126":"",":2":82,"og]D":705,"":-100,"x":"ta","2.79021680837961e+307":"$","r":1.966163970540522e+305,"t":"",">&6t":403}
return a/b*c
};
var argument2 = ["{","A654W","Z","g?1",0,"vR","SQU",126];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9] = [969,403,126,783]
return a/b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[157] = ""
base_2[3] = "krjYhSl"
return a/b*c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][3] = null
argument7[0] = "*G"
return a-b/c
};
var argument8 = {};
var argument9 = false;
var base_0 = [969,843,213,655,893,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,843,213,655,893,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,843,213,655,893,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,843,213,655,893,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test659.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)