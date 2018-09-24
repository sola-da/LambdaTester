





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"893":"G 8","Z":"F",",#":" ","1.7976931348623157e+308":"","":"","1.7214196333076597e+308":"","_f5D3":1.0016487002105424e+308,"&":8.560752382760418e+307,"4.4220611954089595e+307":59}
argument3['AO?'] = null
return a/b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[126] = "n1Yq"
argument4[714] = 82
argument4[2] = {"59":"S","82":-1,"100":607,"627":9.210527550534303e+306,"1.0036232487043647e+308":"seFi#n","2.455354591164276e+307":82,"":25,"1.5619044527864647e+307":"l95"}
return a+b/c
};
var argument4 = true;
var argument5 = [403,714,"R"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7] = null
argument7[3.7668525981726295e+307] = 1.1896590294436115e+308
return a+b/c
};
var argument7 = 1.499835974022376e+308;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.399309004356655e+308] = ""
argument11[4.953791384496108e+307] = 9.946102784773145e+307
argument11[7] = null
return a*b+c
};
var argument10 = r_2;
var base_0 = [242,893,893,0,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,893,893,0,213]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,893,893,0,213]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,893,893,0,213]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test875.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)