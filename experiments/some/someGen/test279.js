





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[618] = "J"
base_1[7] = [607,59,969,";,k","<B"]
argument3['f!BO'] = true
return a+b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = false
base_2[1]['{X'] = false
base_2[1]['{X'] = "8"
return a-b*c
};
var argument5 = {"627":"","655":460,"1.6755115831931062e+308":"t","1.6249090056711218e+308":1.0295631599127113e+308,"4.960033715165713e+307":823,"'LX":607,"$":627,"":"U99"};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = [969,213,823,1.7976931348623157e+308,618,714,-100,618,714]
argument8[1] = 0
argument8[3] = 1.0563638100493463e+308
return a/b*c
};
var argument8 = true;
var base_0 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","X&;","`","B9","7","]","Vb","#h","8","rs%"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test279.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)