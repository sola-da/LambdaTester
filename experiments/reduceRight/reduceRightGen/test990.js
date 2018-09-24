





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[-1] = false
return a/b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = [783,242]
argument4['T'] = 403
base_1[2] = {"":1.549106959898319e+308}
return a/b/c+d
};
var argument3 = 843;
var argument4 = {"242":"?","823":"","":1.618784515817327e+308,"ol@":"","1.7145562351037491e+308":"K5y6","@(t":"","^O":893};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][2] = {"8'":242,"":"LoB{5"}
base_2[0][3] = 3.0859291457699305e+307
base_2[6] = "0*"
return a*b-c+d
};
var argument6 = -1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][3] = ["LP","P4l"]
base_3[9] = 7.716888884678373e+307
return a*b-c-d
};
var argument8 = r_0;
var argument9 = null;
var base_0 = [823,59,627,59,460,82,59,460,705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,59,627,59,460,82,59,460,705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,59,627,59,460,82,59,460,705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,59,627,59,460,82,59,460,705]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test990.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)