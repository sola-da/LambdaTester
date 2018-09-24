





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = false
argument2[25] = ["jy","D","s","`?","C","+","aM`"]
return a+b-c/d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['w'] = ""
base_1 = [122,49,25]
return a-b+c+d
};
var argument4 = 1.907598575761901e+307;
var argument5 = "wn";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['^N'] = {"r":"r6y"}
base_2['length'] = 59
base_2[0][0] = 1.283040893922536e+308
return a-b+c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['^N'] = {"783":1.4728258118368436e+308,"R:b":2.0956242790964515e+307,"":1.779711088486803e+308}
argument7[0] = ["*L",242,783]
base_3[6] = 1.7903050586970813e+308
return a/b+c+d
};
var argument8 = false;
var base_0 = [":q","$3*h","`?S(","F","|"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":q","$3*h","`?S(","F","|"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":q","$3*h","`?S(","F","|"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":q","$3*h","`?S(","F","|"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test193.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)