





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][5] = 1.1488407630563578e+307
argument2[705] = -100
return a-b+c*d
};
var argument2 = true;
var argument3 = "X";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['{S'] = [59,5e-324,403,655]
argument5[0] = false
base_1[1][5] = ""
return a+b*c-d
};
var argument5 = null;
var argument6 = "NuR";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][2] = {"126":893,"213":5.5679588198014637e+306,"hI+":-100,"-100":"","1.7976931348623157e+308":"7|fW","":460,";A":4.032469270042293e+307,"lP^9eR":"","1.4260070969511507e+307":213}
return a*b-c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = [100,100,460]
return a*b+c+d
};
var argument9 = true;
var argument10 = true;
var base_0 = [969,49,655,25,-100,714,59,618,242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,49,655,25,-100,714,59,618,242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,49,655,25,-100,714,59,618,242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,49,655,25,-100,714,59,618,242]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test585.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)