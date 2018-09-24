





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = "0by "
argument2[6] = null
return a-b*c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = "R"
base_1[0][2] = ["f",460,607,82,")","0",-1]
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = ""
base_2[9] = true
base_2[6] = {"122":1.1237895122798981e+308,"460":"IB","1.5412529184609694e+308":-1,"2.5253284791563693e+307":618,"?5":"","":9.924989449515364e+307,"o":655}
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"0":2.7228921195141495e+307,"969":"3O","":595,"j6s?":"","&(":627,"-100":213}
base_3[0][1] = false
base_3[0][1] = {"49":"Py","655":893,"1.1668904411374756e+308":"","":"","6.110050681098983e+307":"x","3.012078760003689e+306":"V"}
return a*b*c
};
var argument7 = r_3;
var base_0 = [969,242,126,82,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,242,126,82,893]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,242,126,82,893]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,242,126,82,893]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test230.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)