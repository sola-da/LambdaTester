





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
argument2[6] = 843
return a/b+c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[25] = [49,"e^^","O",100,1.7976931348623157e+308,157,59,823]
argument5[126] = 82
argument5 = {"823":9.610916941791283e+307,"1.0347269594555272e+308":1.4465192681184327e+308,"":"zlp","8.601461895202532e+307":"","1.2874122011273553e+307":893,"!W":8.659447849149259e+307}
return a+b-c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][2] = [213,"l",-100,5e-324,843,"R","W=",618,"@(9[q"]
base_2[3] = [213,460,59]
base_2[4] = ["Omo_",")","a","L"]
return a*b/c/d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
argument6[1] = ""
argument7[2] = true
return a+b-c*d
};
var argument7 = "";
var argument8 = r_3;
var base_0 = ["Yv#","4","s[","2{","tV","9","h","Y","W"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Yv#","4","s[","2{","tV","9","h","Y","W"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Yv#","4","s[","2{","tV","9","h","Y","W"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Yv#","4","s[","2{","tV","9","h","Y","W"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test423.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)