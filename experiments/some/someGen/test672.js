





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[157] = 6.648741250902302e+307
argument2[8] = true
argument2[0] = 2.27279168567937e+307
return a+b-c
};
var argument2 = "|[>9";
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = {"49":4.884223731460521e+307,"122":"","705":"K6","893":843,"":"","0dw561$":"","i":"Q","O":1.0110874075245537e+308,"5e-324":"("}
return a/b-c
};
var argument5 = false;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2.249941463060761e+307] = {"122":969,"843":1.1354955086230113e+307,"":"^pXw|:),Pc","1.7150476750606892e+308":";I{","%W":"","r":5e-324,"1.611583943607733e+308":5.457027446538831e+307,"1.3110158980028056e+308":"","^|A":"kGJmeD","=":"L"}
argument9[1] = ""
base_2[1][2] = ["$","aZn",607]
return a/b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['f9zgt4n!ZJR]W'] = [783,460,460,1.7976931348623157e+308,460]
base_3[3][6] = "'j*"
argument8[1] = [157,714,213,627]
return a*b+c
};
var argument9 = null;
var argument10 = null;
var base_0 = [893,-100,59,"P",893,"GS",627]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-100,59,"P",893,"GS",627]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-100,59,"P",893,"GS",627]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-100,59,"P",893,"GS",627]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test672.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)