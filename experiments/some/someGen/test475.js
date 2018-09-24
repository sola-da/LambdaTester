





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][8] = false
argument2[403] = [59,242,242]
base_0['length'] = 126
return a-b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"157":"ty","655":82,"":82,"6.530099253087799e+307":"","-UbJ":"7","1.6761648762564886e+308":"YfD"}
argument4['Y'] = true
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[618] = 4.4872583902210206e+307
return a-b*c
};
var argument5 = {"157":"vu","595":"","":2.099980062564166e+306,"S":"+","1.2956338904850146e+308":"v",":":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = "v"
argument7[3] = [-100,122,618,893,-1,126]
return a-b+c
};
var argument7 = r_3;
var argument8 = 8.395122377948052e+307;
var base_0 = ["(PF","C","Q","&",82,"c",5e-324]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(PF","C","Q","&",82,"c",5e-324]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(PF","C","Q","&",82,"c",5e-324]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(PF","C","Q","&",82,"c",5e-324]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test475.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)