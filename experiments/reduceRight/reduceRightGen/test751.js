





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = {"100":"9N","126":460,"618":"A","":595,"1.3161800488686953e+308":157,"|":0}
return a/b*c+d
};
var argument2 = "";
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['y'] = ""
argument6[62] = null
argument5[1.921533274132203e+307] = {"1":"o)7","5":82,"HK":"","sO":"","V6$":"o","":"N*UnL?","3.541446500941433e+307":1.2601675940401183e+308,"2.081150887565671e+307":"qm,","1.6661675246002691e+308":"af4mW"}
return a-b+c/d
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = false
return a-b-c+d
};
var argument8 = 8.587876321694137e+307;
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12['UU'] = {"783":"y","":1.4667249062400426e+306,"7.198493928729024e+307":"i","BU>X^5:":7.935769570415999e+306,"3.114898211033091e+307":"i","8.30164968067781e+306":"+"}
argument11[9.624051682326797e+306] = 823
argument11[5] = 3.95139867124421e+307
return a*b+c-d
};
var base_0 = [59,460,627,157,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,460,627,157,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,460,627,157,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,460,627,157,403]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test751.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)