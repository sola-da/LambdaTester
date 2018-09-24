





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['j'] = [969,-1,893,607,460]
argument2[705] = {"7":"rN","82":"2","6.306720247250907e+307":655,"":1.0131135474680091e+308,"Rl%":1.708963266411329e+308,"1.4235887296825852e+308":"?SB"}
return a*b+c
};
var argument2 = {"1.5430450366042135e+308":1.3712003920350033e+308};
var argument3 = "x";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = {"+4a":"","5e-324":122,"2.793513583959637e+307":""}
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[705] = 1.4868779025632168e+307
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = [157,1.7976931348623157e+308]
argument8[4.953791384496108e+307] = 893
return a-b+c
};
var argument7 = null;
var argument8 = 0;
var base_0 = [607,82,242,213,655,157,607,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,82,242,213,655,157,607,783]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,82,242,213,655,157,607,783]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,82,242,213,655,157,607,783]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test760.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)