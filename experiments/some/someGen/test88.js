





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 82
base_0[1] = {"82":1.0871665587814736e+308,"242":607,"1.4927520824793593e+308":1.5771381090544407e+308,"":705,"1.399309004356655e+308":5e-324,"5.01472344519617e+307":1.510972785908957e+308,"8C<":893,"S":"q"}
base_0[8] = 1.5949534082588513e+308
return a-b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = ""
base_1[1][8] = null
base_1[1][0] = 6.623878751665423e+307
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {}
argument5[0] = 49
base_2[5][0] = ""
return a/b+c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][8] = {"G":"f"}
return a-b/c
};
var argument7 = r_0;
var base_0 = ["=_","%","d3j","}$Y"," S","y]","#o:k"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=_","%","d3j","}$Y"," S","y]","#o:k"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=_","%","d3j","}$Y"," S","y]","#o:k"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=_","%","d3j","}$Y"," S","y]","#o:k"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test88.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)