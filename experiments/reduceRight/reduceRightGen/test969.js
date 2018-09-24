





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = "R"
argument3[7] = null
return a/b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['y'] = true
argument3[100] = ["H","]","3","ec=Dmx","{","gT","t7",":!"]
argument3[-1] = ["U","L","VRN","5","FCJ!l","U","%g","o"]
return a/b+c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = null
return a-b/c+d
};
var argument4 = true;
var argument5 = [618];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[62] = {"242":49,"595":969,"618":"","783":3.7232994610375626e+307,"gg":"","":"","8.267422213711599e+307":"","x#":5.3843701998173945e+306,"`":403}
argument7['PK4'] = null
argument8[0] = true
return a+b*c/d
};
var argument7 = "lC";
var argument8 = {"460":1.359106153132954e+308,"":1.7976931348623157e+308,"8.586848328959931e+307":59};
var base_0 = [126,893,783,122,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,893,783,122,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,893,783,122,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,893,783,122,-100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test969.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)