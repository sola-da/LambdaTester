





var callbackArguments = [];
var argument1 = "C";
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = false
base_0[0][3] = ""
base_0[0][0] = 1.699304746185211e+308
return a-b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = "b QWs"
base_1[6] = {"":783}
return a/b-c*d
};
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['Cb'] = 1.1018964171277984e+308
argument8[1.1277822633002616e+308] = "f"
argument7[4] = "(Fhmt^QM"
return a-b/c-d
};
var argument8 = 1.2005266111080446e+308;
var argument9 = r_0;
var argument10 = r_0;
var argument11 = 2.916932405062636e+307;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[';N'] = {"J!T7":"=","":1.422761861618566e+308,"zHqbw":"","q":"","Ce":"<","-1":"k","1.4441121106467468e+308":""}
argument11[90] = 1.381549788853069e+308
argument9[1] = null
return a-b+c*d
};
var base_0 = [100,460,"2HR",59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,460,"2HR",59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,460,"2HR",59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,460,"2HR",59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test293.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)