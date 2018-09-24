





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5e-324] = 1.6635500589115107e+308
argument2[0] = [607,25,893,157,100]
argument2[3] = [893,843,618,1.7976931348623157e+308,49,595,59,893]
return a-b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = null
argument4[4] = {"2.5080203385102203e+307":"","6.738737454210671e+307":7.284749047804906e+307,"-100":"","":1.055827169763908e+308,"1.7490476485416068e+308":655}
argument4[2] = false
return a*b+c
};
var argument4 = ["q","F","@","oU+","M`","3"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][7] = false
base_2[1][2] = null
base_2[2][5e-324] = {"":"J"}
return a-b/c
};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = ""
base_3[1]['{X'] = ["q","nj","%","]","*<n","i",">A"]
return a/b-c
};
var argument9 = false;
var base_0 = ["y","R<","W","x","vX","2","YS=","kEA"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y","R<","W","x","vX","2","YS=","kEA"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["y","R<","W","x","vX","2","YS=","kEA"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["y","R<","W","x","vX","2","YS=","kEA"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test195.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)