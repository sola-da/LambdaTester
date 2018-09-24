





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.738403780925446e+308] = true
return a*b*c+d
};
var argument2 = {"969":157,"2.8293827738603166e+307":"","":"","3lJ":"C*E"};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['^N'] = 1.2319535661972077e+308
argument5[6] = null
return a+b*c/d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = 1.5463033657306687e+308
argument5[3] = {"1":-100,"100":705,"1.4941420913680117e+308":3.018438590212804e+307,"m@LS":618,"-100":"","":59,"RM{":4.322137494485838e+307,"1.6193494939289956e+308":595,"<,":1.1533627603519955e+308,"1.323978735126642e+308":1.5095523775324306e+308}
return a/b+c+d
};
var argument5 = {"59":595,"":"","{nn":"","1.1207829086460726e+308":823,"2.167086487142913e+306":1.7976931348623157e+308,"nO":213,"3.286160553564105e+307":0,"1.015263860355762e+308":""};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = ""
base_3[3] = ["a","1","L","7sq",";KK","}%","L9","0","f","ZKI"]
argument9['UU'] = null
return a+b/c-d
};
var argument8 = null;
var argument9 = r_2;
var base_0 = [82,49,705,403,607,25,5e-324,823,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,49,705,403,607,25,5e-324,823,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,49,705,403,607,25,5e-324,823,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,49,705,403,607,25,5e-324,823,893]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test420.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)