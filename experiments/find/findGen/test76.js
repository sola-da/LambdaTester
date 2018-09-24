





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8][0] = {"595":"","V":"","1.6643984410473925e+308":"Y","1.4776416548422706e+308":2.088152977047873e+307,"L^kc":"L9","":""}
argument1[893] = null
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"618":969,"1.7976931348623157e+308":403,"1.382151602079546e+308":"D"}
return a-b/c
};
var argument3 = "";
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.748669805137695e+307] = false
base_2[8] = {"607":823,"":1.6612818576172084e+308,"9.62617508552278e+307":1.715428662376767e+308,"1.7976931348623157e+308":"8(","-1":1.448283032768923e+307}
base_2[7] = ["j","e","Tf",";C>{"]
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = null
base_3[4] = {"126":"J-","595":460,"1.3049539094462105e+308":82,"":"D,","3.5591422650463515e+307":"","R":1.5194697577731207e+308}
base_3[7] = ["h","E","i"]
return a/b*c
};
var argument7 = null;
var argument8 = null;
var base_0 = [460,969,-100,969,126,25,893,460,607]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,969,-100,969,126,25,893,460,607]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,969,-100,969,126,25,893,460,607]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,969,-100,969,126,25,893,460,607]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test76.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)