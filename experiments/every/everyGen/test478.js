





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = 8.050827618891077e+307
return a+b-c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['sJRZP'] = true
argument6[6] = {"100":893,"705":-100,"c":"","9.85750721466957e+307":1.0384762075155107e+307,"":"","-100":"","9.545197523607302e+306":"","1.4049612088840997e+308":627,"Ci":5e-324}
base_1[3] = ""
return a/b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = 126
base_2[0][6] = ""
base_2[1][2] = ["MG!","Pt"]
return a-b+c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = ["3kO","-","#V","^","$","v",")tCZ>","3h6"]
base_3[6] = {"242":"'","969":0,"B":100,"3.862170538489124e+307":1.0910396916902923e+308}
return a*b-c
};
var argument9 = r_0;
var argument10 = r_0;
var base_0 = ["W%","7","A","L-","(",";x","h","xA","p","M"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W%","7","A","L-","(",";x","h","xA","p","M"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W%","7","A","L-","(",";x","h","xA","p","M"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W%","7","A","L-","(",";x","h","xA","p","M"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test478.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)