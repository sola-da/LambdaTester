





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = null
base_0[3][4] = [823,157,":","(RQQ",843,655,"x",783,969,"|"]
argument3[0] = true
return a-b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = {"49":595,"655":59,"":"L<#Kdk"}
argument5[893] = {"783":3.878269196555557e+307,"969":242,"1.2691302486014592e+308":823,"":122,"tFw_":1.3397539062288427e+308,"M5etW>D":1.098436747707739e+308,"4.923030791333652e+307":49,"1.9548942023972179e+307":403,"H":"u6","1.5843970963287755e+307":""}
return a-b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[607] = null
base_2[1][0] = {"705":"<;","969":"","{":"","4.728616307749162e+307":"`"}
argument6['3Tpj5'] = true
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7][2] = null
base_3[3][2][5] = {"969":"[5>","":1.6973408832301365e+308,"(":"P",":":"|d","t$":"ctx%6"}
return a*b*c
};
var argument6 = "";
var base_0 = [59,0,0,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,0,0,49]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,0,0,49]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,0,0,49]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test443.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)