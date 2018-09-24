





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['a'] = 969
argument2['St'] = -1
base_0[0][2] = false
return a+b*c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = [783,655,843,618,1.7976931348623157e+308,213,82,82]
argument5[5] = false
return a/b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['F2nCX>6'] = {"783":"A","1.4957808190332434e+308":9.219508357634015e+306,"5e-324":213,"`T7X":">","P;k0|;":"W","7.256351938895014e+307":7.573599789761773e+307,"1.179372715388021e+307":"'i","3.773185263730829e+306":"","":59}
return a+b-c+d
};
var argument6 = [")gY",242,"-"];
var argument7 = {"618":893,"1.3996053891134633e+308":242};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = {}
return a-b/c+d
};
var argument9 = ["u","U","x","hxlx"];
var argument10 = null;
var base_0 = ["2Cg4","+","w","$O"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2Cg4","+","w","$O"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2Cg4","+","w","$O"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2Cg4","+","w","$O"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test667.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)