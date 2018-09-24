





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = 3.1187582283326586e+306
return a*b/c
};
var argument2 = "";
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][7] = false
argument5['c'] = {"49":595,"655":59,"823":969,"":"L<#Kdk","1.7976931348623157e+308":403,"1.7745540229374439e+308":783,"3.878269196555557e+307":1.2691302486014592e+308,"1.7573070278646876e+308":"","6.60017033120793e+307":"tFw_"}
return a-b/c
};
var argument5 = {"969":242,"":122,"M5etW>D":1.098436747707739e+308,"4.923030791333652e+307":49,"1.9548942023972179e+307":403,"H":"u6","1.5843970963287755e+307":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-100] = null
base_2[8][3] = {"705":"<;","969":"","{":"","4.728616307749162e+307":"`"}
base_2[0][4] = true
return a*b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][5e-324] = null
argument9[403] = {"969":"[5>","":1.6973408832301365e+308,"(":"P",":":"|d","t$":"ctx%6"}
return a*b*c
};
var argument8 = "";
var base_0 = [49,705,705,0,823]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test448.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)