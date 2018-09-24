





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1] = null
argument3[3] = null
argument3['18{'] = true
return a+b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = true
base_1[0][4] = {"122":"","7.845950000767355e+307":"","":"Y]","^Kt5":4.771482142410935e+307,"%":1.0497641574424849e+308,"U":4.791385954250303e+307,"=":1.7976931348623157e+308,"1.3438067600494397e+308":""}
base_1[0][3] = {"843":"","^v<":242}
return a-b/c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = false
argument3[1] = true
return a-b*c*d
};
var argument4 = r_0;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['*c'] = "u"
base_3[9] = ["D","RQ","D","@E"]
base_3[5] = ["<","D",705,607,157,1.7976931348623157e+308,705,783,"3G"]
return a-b-c*d
};
var argument6 = r_0;
var argument7 = true;
var base_0 = [705,0,82,607,25,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,0,82,607,25,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,0,82,607,25,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,0,82,607,25,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test473.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)