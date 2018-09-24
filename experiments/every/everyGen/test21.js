





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = "Z'"
base_0[4] = true
base_0[2] = 3.535533020477386e+307
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"0":"4{V","100":"","1.6930769630115494e+308":49,"q":1.0500354979187844e+308,"":"2M","{:":"O","1.2606891318421864e+308":""}
return a+b+c
};
var argument3 = 627;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = 655
argument5[3.3156198695370476e+307] = [607,82,"Z",843]
return a/b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = ["n","0","I?y|","AOg","p^F+t","6","U","x7x"]
base_3[0] = {"122":"1","627":"","":"","-1":-1,"i":"","1.6843102169771425e+308":""}
base_3[5] = 3.936038238035848e+307
return a/b/c
};
var argument6 = null;
var argument7 = [122,823,627,25];
var base_0 = ["YQROy","t","f;","tW","v","h","0}iPr",";",")"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["YQROy","t","f;","tW","v","h","0}iPr",";",")"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["YQROy","t","f;","tW","v","h","0}iPr",";",")"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["YQROy","t","f;","tW","v","h","0}iPr",";",")"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test21.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)