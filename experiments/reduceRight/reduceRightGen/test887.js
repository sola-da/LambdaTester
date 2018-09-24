





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = [705,618,783,969,618,100]
return a*b+c*d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = ""
return a/b+c+d
};
var argument4 = r_1;
var argument5 = {"":1.6819450678037415e+308,"1.6216691274395436e+308":""};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['^N'] = [213,59,595,242,460,49,49,242,157]
base_2[4][1.7976931348623157e+308] = false
argument7[5] = null
return a*b*c+d
};
var argument7 = null;
var argument8 = [714,213,714,122,157,823,1.7976931348623157e+308];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8.575765443877852e+307] = ""
argument11[6] = [-1,242,25,59,242,-100,893,893]
argument11[1] = [655,607,126,25,460]
return a+b+c+d
};
var base_0 = ["*|:",100,25,25,460,"5",460,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*|:",100,25,25,460,"5",460,607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*|:",100,25,25,460,"5",460,607]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test887.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)