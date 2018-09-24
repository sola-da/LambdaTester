





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = [",","l708v","u%","|"]
base_0[6] = {"242":8.350344321215067e+307,"460":"Z","714":"","783":122,"4.852468221230185e+307":"","1.5652284461982016e+308":1.3581571979479628e+308,"1.312948168388015e+308":5.295768566459784e+307,"q":1.5472632292957326e+308,"6.108083771579453e+307":"uX"}
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = {"122":7.690620117095441e+307,"242":"","":"+6","e":1.496636726212936e+308,",":823,"S&E%":-1}
argument3[893] = [607,705]
return a*b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = ""
argument4[2] = true
base_2[8] = ["#",705,893,"]"]
return a-b+c
};
var argument4 = "";
var argument5 = r_2;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[82] = {"":8.963777920769399e+307,"Jn":1.6136163168131227e+308}
return a*b+c
};
var base_0 = [893,705,460,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test149.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)