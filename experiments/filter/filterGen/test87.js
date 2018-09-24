





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = 82
base_0[1] = {"82":1.0871665587814736e+308,"242":607,"1.4927520824793593e+308":1.5771381090544407e+308,"":705,"1.399309004356655e+308":5e-324,"5.01472344519617e+307":1.510972785908957e+308,"8C<":893,"S":"q"}
base_0[8] = 1.5949534082588513e+308
return a-b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.4034744228995816e+308] = ""
base_1[9] = true
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = {"595":"g"}
base_2[4] = {"59":"H","403":"","":4.3925829097192515e+307,"A`3":49,"R":"","Y!":"","<":627}
base_2[3][0] = {"7.686654611367278e+307":714,"c":1.4307309464220499e+308}
return a-b/c
};
var argument5 = null;
var argument6 = 1.7976931348623157e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = [-100,242,969,0,25,213,705,460,618]
return a*b/c
};
var base_0 = [":k"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":k"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":k"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test87.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)