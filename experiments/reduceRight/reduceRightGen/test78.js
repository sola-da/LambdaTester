





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['{S'] = true
argument2 = null
return a*b*c/d
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"":"jH","6.903241314471448e+307":705}
return a+b+c-d
};
var argument5 = {"59":1.0481797599457545e+308,"x":6.928008670266015e+307,"":25,"1.6856339281610902e+308":1.6211862347331925e+308,"-1":1.4205972444974577e+308};
var argument6 = -1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][2] = null
argument7[0] = ""
argument8['w'] = [25,714,460]
return a*b+c*d
};
var argument8 = ["r","F","E","r","TLMRiuz","Z4S",");]^","W,u$-^"];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = "?"
argument11[0] = false
return a/b/c/d
};
var argument10 = null;
var base_0 = ["-","2h","|z8","Q","eC","E!","]"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-","2h","|z8","Q","eC","E!","]"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-","2h","|z8","Q","eC","E!","]"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-","2h","|z8","Q","eC","E!","]"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test78.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)