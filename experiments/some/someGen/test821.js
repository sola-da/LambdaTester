





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2.249941463060761e+307] = true
argument2[3][3] = true
return a*b*c
};
var argument2 = {"213":"","p":"V'dA","m3":",{","6.491811658696916e+307":25,"":"","S":"l","i":242,"1.2016250681796564e+308":"A","9.100206843502234e+307":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = ["L","T","Gnj","=n!v"]
return a*b*c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = {"3":823,"25":"=","59":1.7976931348623157e+308,"607":3.0897743127645255e+307,"IZ,e":157,"":1.3430029840645956e+308,"Z":"","F":8.523305515686846e+307,"1.3015093478180305e+307":0}
argument6['5L'] = {"595":607,"655":5.470259443120587e+307,"705":"","":59,"hN":"","8@_":"","=":"*j#","C":3.2434869337428927e+307,"&X":"]z"}
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = "Ex"
argument7[3] = true
argument7[4] = 6.405440962311289e+307
return a+b+c
};
var base_0 = [122,82,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,82,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,82,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,82,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test821.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)