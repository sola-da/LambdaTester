





var callbackArguments = [];
var argument1 = null;
var argument2 = ["H#<{",783,460,242,"<","8b"];
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9.331954948603684e+307] = ""
argument2[';N'] = false
base_0[3][1] = true
return a-b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = true
return a/b+c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = ["g","Ay"]
return a*b/c+d
};
var argument7 = 893;
var argument8 = r_1;
var argument9 = "D";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[82] = 0
base_3[1][0] = 1.5140220485525056e+307
base_3[1] = [25,403,843,0,893]
return a-b/c-d
};
var base_0 = [",kB","y","ON","IE","d","k","Yq","=","y_F|W"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",kB","y","ON","IE","d","k","Yq","=","y_F|W"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",kB","y","ON","IE","d","k","Yq","=","y_F|W"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",kB","y","ON","IE","d","k","Yq","=","y_F|W"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test527.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)