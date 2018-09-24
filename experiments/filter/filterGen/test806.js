





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.82874486699946e+307] = false
base_0[1][1] = "hK"
argument2[0] = {"403":"6","618":"'O","1.073136457832366e+308":1.0786456329931683e+308,"":"","W":"","#":655,";PP9u":-100,"5.169304389270677e+307":783,"8.64790377413761e+307":1.2466020054755513e+306,"a":1.4848751674131956e+308}
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][1] = true
return a/b*c
};
var argument3 = {"213":"","p":"V'dA","m3":",{","6.491811658696916e+307":25,"":"","S":"l","i":242,"1.2016250681796564e+308":"A","9.100206843502234e+307":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['K'] = ["L","T","Gnj","=n!v"]
return a*b*c
};
var argument5 = r_2;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = {"3":823,"25":"=","59":1.7976931348623157e+308,"607":3.0897743127645255e+307,"IZ,e":157,"":1.3430029840645956e+308,"Z":"","F":8.523305515686846e+307,"1.3015093478180305e+307":0}
argument7[157] = {"595":607,"655":5.470259443120587e+307,"705":"","":59,"hN":"","8@_":"","=":"*j#","C":3.2434869337428927e+307,"&X":"]z"}
return a*b/c
};
var base_0 = [460,460,126,893,783]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,460,126,893,783]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,460,126,893,783]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,460,126,893,783]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test806.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)