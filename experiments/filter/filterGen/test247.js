





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = true
base_0[0] = [0,-100]
return a*b-c
};
var argument2 = false;
var argument3 = {"122":"","655":714,"705":"","":1.2914344903864387e+308,"5.255909938186816e+307":100,"-100":"2G","!":627,"^+I@":"","[P<":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = ["-B",893,"M",-1,"eT","WO0","D"]
return a*b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"100":"8","460":"","595":"hIvK","607":"","655":1.2888538942278888e+307,"893":"","1.1511314839748489e+308":783,"5.728915496068444e+307":"7ix","":"","5l":1.5460945995683622e+308}
argument7[714] = ["EB2"]
base_2[6] = false
return a-b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = 3.516120319745286e+307
argument8[1.1679954109349114e+308] = {"82":2.8808528513127823e+307,"607":"8@$ux","B":969,"6.486317508344023e+307":59,"":"=,I","1.7128617526947587e+308":"Y","c":""}
return a*b*c
};
var argument8 = 3.17537660855156e+307;
var argument9 = ["A","ty","8","S","-B","b0","-","?","V","gZ"];
var base_0 = ["6uYoi","wV","#",")","`-","Q%","dnH{VTk","C","<># 6"]
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
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6uYoi","wV","#",")","`-","Q%","dnH{VTk","C","<># 6"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test247.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)