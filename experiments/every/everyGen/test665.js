





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = null
argument2[1.9097830510613482e+307] = 100
return a*b/c
};
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = ["l","R","L@","%E","VL74","T*TE"]
base_1[0] = {"618":893,"@":595,"":"C","1.3172616785003047e+307":"S"}
return a+b-c
};
var argument5 = r_0;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][6] = ""
argument8[6] = "Zw*"
return a*b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[8] = {"5.075282826635055e+307":-1,"1.55818068192776e+308":"","":"","*":"0dw561$"}
base_3[5] = {"705":"K6","843":1.1354955086230113e+307,"893":843,"969":1.7976931348623157e+308,"":1.5859516675780326e+308,"i":"Q","O":1.0110874075245537e+308,"5e-324":"(","2.6167887498649166e+307":"","8.967012300164051e+307":1.6909861841355765e+308}
argument8[2] = [";I{","7","r31","y(","!","y","UVJ","pXw|:),Pc","N","|A"]
return a/b-c
};
var base_0 = ["cV","c*fzA"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["cV","c*fzA"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["cV","c*fzA"]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["cV","c*fzA"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test665.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)