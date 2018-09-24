





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][8] = {"":49,"LR":714,"1.3536698467692432e+308":""}
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = ["I",-100,969,"LvA","*",122,"5",1.7976931348623157e+308,595,"d4 "]
base_1[1][8] = null
return a+b+c
};
var argument3 = r_0;
var argument4 = [783,1.7976931348623157e+308,893];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = null
argument6[618] = null
base_2[1][3] = null
return a+b*c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = [122,627,627]
return a-b/c
};
var argument8 = null;
var argument9 = r_0;
var base_0 = ["0","AB",126,"aQ9=",969,1.7976931348623157e+308,460,595,1.7976931348623157e+308,"8r"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0","AB",126,"aQ9=",969,1.7976931348623157e+308,460,595,1.7976931348623157e+308,"8r"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0","AB",126,"aQ9=",969,1.7976931348623157e+308,460,595,1.7976931348623157e+308,"8r"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0","AB",126,"aQ9=",969,1.7976931348623157e+308,460,595,1.7976931348623157e+308,"8r"]
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
require("fs").writeFileSync("./experiments/some/someGen/test187.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)