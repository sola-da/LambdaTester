





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[893] = 705
base_0[1] = ["$","F","j","C"]
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = null
base_1[1][4] = [627,705,122,893,705,823,-1,242]
return a*b+c
};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[403] = [618,893,100,655,969,49,460,1.7976931348623157e+308]
base_2[1][7] = {"213":"","607":"","":"1","1.410116313580885e+307":"I","w?":1.5071314836918567e+308,"F<":1.1783411617153941e+308}
argument5 = "!"
return a*b*c
};
var argument5 = {"618":1.7976931348623157e+308,"5.332640706776187e+307":1.2460104305439319e+308,"":7.600488097153e+307,"2.929583238354602e+307":783};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1.4677087964888306e+308] = null
base_3[3][2] = [-1,607,-100,126,59,126,213,82]
return a-b+c
};
var argument8 = null;
var base_0 = ["X6i","-q","&Hfw","s","NX","?"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X6i","-q","&Hfw","s","NX","?"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X6i","-q","&Hfw","s","NX","?"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X6i","-q","&Hfw","s","NX","?"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test124.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)