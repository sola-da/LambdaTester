





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.575765443877852e+307] = "7]r"
return a*b-c*d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['{S'] = false
argument4[8.575765443877852e+307] = 1.3349342834975297e+308
argument4[7] = false
return a/b+c+d
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"":4.2039059771082856e+307,"-1":705,"b|":213,"#":"gMs","1.7054403980824489e+308":25}
return a+b*c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = [242,-100,618,25,627,403]
argument8[2] = null
return a+b/c-d
};
var argument8 = {"82":82,"783":"","893":"","v":0,"":1.5032573258586393e+308,"7.197865767111184e+307":1.529623292814841e+308,"6.016848451460084e+307":"$","N":1.4681695289393724e+308,"]":""};
var argument9 = true;
var base_0 = ["i","i4","w",655,"B","%","B","LE","cD","e"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","i4","w",655,"B","%","B","LE","cD","e"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","i4","w",655,"B","%","B","LE","cD","e"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i","i4","w",655,"B","%","B","LE","cD","e"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test169.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)