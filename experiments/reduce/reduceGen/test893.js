





var callbackArguments = [];
var argument1 = [893,618,25,59,"_","H","E"];
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = [-1,126]
return a-b/c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[655] = false
argument7[7.889879335222838e+307] = {"49":1.7976931348623157e+308,"823":213,"":"","1.5894913040141904e+308":1.0872367324048347e+308,"1.6233151219877521e+308":49}
base_1[7] = null
return a+b*c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = true
base_2[1][3] = "QA"
argument7[1.1277822633002616e+308] = "N;!u"
return a+b*c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = ""
argument8[1.1277822633002616e+308] = true
return a/b-c*d
};
var argument8 = null;
var argument9 = r_1;
var base_0 = ["1","L{","{Bn","{9","+&W0B","?"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","L{","{Bn","{9","+&W0B","?"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","L{","{Bn","{9","+&W0B","?"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","L{","{Bn","{9","+&W0B","?"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test893.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)