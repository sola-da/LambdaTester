





var callbackArguments = [];
var argument1 = ["w=eYBiT$i`","r<Czq"," z","0%Bw","-","[","XW","O"];
var argument2 = {};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = true
return a/b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = 403
argument6[1.1277822633002616e+308] = ""
return a+b+c+d
};
var argument6 = "";
var argument7 = true;
var argument8 = r_1;
var argument9 = null;
var argument10 = "";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = null
return a*b-c+d
};
var argument12 = [969,0,460,655];
var argument13 = true;
var argument14 = [595,"q",627,59,627,893,655,"I"];
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[4] = 126
argument13 = null
return a+b+c*d
};
var base_0 = ["s",">","d","I","S","4<","|","nf","2,G9f)W"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s",">","d","I","S","4<","|","nf","2,G9f)W"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s",">","d","I","S","4<","|","nf","2,G9f)W"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s",">","d","I","S","4<","|","nf","2,G9f)W"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test41.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)