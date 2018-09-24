





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['^N'] = "E"
return a-b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"607":"","":100,"$1":"^_Ol#"}
argument3[0] = ["%","@8nO{f","1f","cd?3","9b"]
argument3[4] = true
return a/b*c+d
};
var argument3 = {"59":714,"":"X5&SSF","1.0536067984774534e+308":"D","7.905808927061414e+307":"","5.821172748577782e+307":595,"I":8.325897879441089e+307,"|":1.4980312657685384e+308,"1.068526753923775e+308":"","1.4038055264189595e+308":122,"1.3853658114630978e+308":"'"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['UU'] = [59,823,126,59]
argument5[7] = false
base_2[8] = ""
return a*b-c*d
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['!j'] = true
argument9[2] = null
argument9[126] = {"157":"","":7.91143749452832e+307,"1.14468103561516e+308":9.644455127397795e+307,"}M":1.1031751726057968e+308}
return a+b/c*d
};
var argument8 = r_1;
var base_0 = ["Y","(",893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Y","(",893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Y","(",893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Y","(",893]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test509.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)