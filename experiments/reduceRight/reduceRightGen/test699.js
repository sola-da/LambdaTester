





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['v'] = [-1,843,618,1.7976931348623157e+308,-100,607,0,213]
return a-b/c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['UU'] = ["G","s","`Iln","Iz","x","#V"]
argument3[3.8120440085202614e+307] = [403]
return a+b*c+d
};
var argument3 = null;
var argument4 = "";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['y'] = false
argument6[1.738403780925446e+308] = ["<A","NKZ","|"]
return a*b-c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[705] = false
argument8[8] = [893,0,1.7976931348623157e+308,403,893,893]
return a+b+c/d
};
var argument7 = {"?K":"","2.9260555407148645e+307":8.29714799261549e+307,"":"@","8.810276296314583e+307":"","Any":5.014243843859232e+307};
var argument8 = null;
var base_0 = [893,783,126,607,126,59,242,843,618]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,783,126,607,126,59,242,843,618]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,783,126,607,126,59,242,843,618]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,783,126,607,126,59,242,843,618]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test699.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)