





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"59":1.407463629245977e+308,"126":"+","&":"?",";J":"kh","":"","u":"|@"}
base_0[6] = 1.6303822297546071e+308
return a/b/c+d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = "K-"
return a*b+c*d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627][126] = {"0":9.526274886992555e+307,"100":"G","607":"#3","":1.248767028541263e+308,"iM":"","aFU%":1.0450235643206654e+308,"aKE":"","2.2941590006231e+307":""}
return a/b-c-d
};
var argument6 = r_0;
var argument7 = true;
var argument8 = 157;
var argument9 = null;
var argument10 = r_0;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.3938918493123786e+308] = {"460":5.927717857811651e+307,"8.877322421747273e+307":122,"9.919008620499104e+307":"J>","oX":""}
base_3[1][3] = [595,0,460,242,969,59,893]
return a/b-c*d
};
var base_0 = [823,"O",627,"h","h",122,"C",705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"O",627,"h","h",122,"C",705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"O",627,"h","h",122,"C",705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"O",627,"h","h",122,"C",705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test576.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)