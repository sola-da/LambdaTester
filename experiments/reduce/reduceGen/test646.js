





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[213] = ""
return a/b-c+d
};
var argument2 = true;
var argument3 = "6%H";
var argument4 = true;
var argument5 = [25,157,49,82,714];
var argument6 = [126,0,"9g6",100,0,"ls","(2a^:",403,"Y"];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6.35085648319999e+307] = 7.578953215811007e+307
argument6[403] = false
return a-b*c*d
};
var argument8 = 3.8094165521045357e+307;
var argument9 = r_2;
var argument10 = r_0;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = true
base_2[7] = {"595":3.1081347090818774e+307,"":1.5065600624092648e+308,"6.072649575468904e+307":25,"B":25,"9.09525368514002e+307":1.644926735636799e+308}
return a*b/c-d
};
var argument12 = r_2;
var argument13 = 126;
var argument14 = r_2;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[8] = "%*r6yc9#N"
argument14 = ""
return a+b*c*d
};
var base_0 = [-1,1.7976931348623157e+308,893,82,783,157,460,59,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,1.7976931348623157e+308,893,82,783,157,460,59,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,1.7976931348623157e+308,893,82,783,157,460,59,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,1.7976931348623157e+308,893,82,783,157,460,59,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test646.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)