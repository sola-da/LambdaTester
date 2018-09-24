





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = -100
argument2['St'] = ["n","4OW]","=[H"]
base_0[5] = 7.682674481728549e+307
return a+b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = "ye$"
base_1[4][3] = [893,705,-1,783,460,122,607,783,25]
argument4[7] = {"59":"[N","-1":"","":7.144291780424294e+307,"vM]95&":1.4162386948321647e+308,"8.758643411387445e+307":655,"`":714}
return a+b*c/d
};
var argument3 = null;
var argument4 = "ZYzy";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][5] = 6.519698050080415e+307
return a*b/c-d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['{S'] = [126,823,49,0,49,714]
argument8[1.1207829086460726e+308] = 122
return a-b*c*d
};
var argument8 = r_3;
var base_0 = ["(","M",":s2n","|","$","0xvm&","t","{Gc","e0E<("]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(","M",":s2n","|","$","0xvm&","t","{Gc","e0E<("]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(","M",":s2n","|","$","0xvm&","t","{Gc","e0E<("]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(","M",":s2n","|","$","0xvm&","t","{Gc","e0E<("]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test919.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)