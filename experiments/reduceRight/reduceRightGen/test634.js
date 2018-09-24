





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = true
return a+b+c+d
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['y'] = ["f","X>","M"]
argument6[3] = {"122":843,"213":1.5155496493927822e+308,"":3.5329845145600404e+307,"8&|":157,"7.643332544836358e+307":""}
return a+b/c+d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[705] = true
base_2[0][3] = [-1,49]
argument7[3.286160553564105e+307] = [82,-1,460,213,627,242,242,618,126]
return a+b-c+d
};
var argument7 = true;
var argument8 = r_0;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = {"59":122,"403":1.4059772580857126e+308,"(%":"|","&":"","":"","Sc@":"","6.607261939534815e+307":1.7976931348623157e+308,"B":2.63240483126892e+307,"1.1597629989856014e+308":2.0073890917936456e+307}
argument11[0] = false
return a+b/c/d
};
var base_0 = [705,705,618,823,655,460]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,705,618,823,655,460]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,705,618,823,655,460]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,705,618,823,655,460]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test634.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)