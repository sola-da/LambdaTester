





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = "%"
argument2[2] = 1.1640719210391394e+308
return a*b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = null
argument4[6] = ""
argument4['A'] = {"783":"`O","":"X","1.6247879077870919e+308":"3vmU","Aq":"u","1.460768570110346e+308":1.0352837725228177e+308,"'e2":"b","T9":242}
return a-b+c
};
var argument4 = [893,1.7976931348623157e+308,705,25,213,1.7976931348623157e+308,126,213,783,460];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][2] = "?"
base_2[0] = ["O-M`qF","|","g<","b","6"]
base_2[1] = false
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = 1.339397082630662e+308
base_3[1][2] = ["K","l",893,25,"x",100,607,"[&Zd"]
return a*b*c
};
var base_0 = [595,607,618,242,25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,607,618,242,25]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,607,618,242,25]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,607,618,242,25]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test136.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)