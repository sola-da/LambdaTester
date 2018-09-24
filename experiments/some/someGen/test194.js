





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"893":"","3.3606374204031776e+306":1.528190657097629e+308,";QYHR8h":"","":"8A","-100":6.187638782142163e+307,"1.4232315858213301e+308":"C","f":"o","1.5392185658674475e+308":157}
argument2['5L'] = null
return a-b-c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[618] = 1.311373670573247e+308
return a/b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 49
return a-b*c
};
var argument5 = 1.5455712569067221e+308;
var argument6 = ["I1n,>C6"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = [157,705,655,-100,714,403,0]
argument8[4] = null
base_3[1]['{X'] = [823,595,-1,843,213,627,607,969,122,122]
return a/b*c
};
var argument8 = null;
var argument9 = null;
var base_0 = [5e-324,1.7976931348623157e+308,403]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,1.7976931348623157e+308,403]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,1.7976931348623157e+308,403]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,1.7976931348623157e+308,403]
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
require("fs").writeFileSync("./experiments/some/someGen/test194.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)