





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = 843
base_0[0][0] = 2.0897625825515093e+307
argument3[25] = "ljQ"
return a-b/c-d
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = [126,0,82,460,969,157]
argument6[1.359136872727139e+308] = 1.7976931348623157e+308
return a+b+c*d
};
var argument5 = "";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][0] = ["Rw","V","w","O"]
argument8[4] = 2.477417751815406e+307
base_2[2] = {"655":82,"1.4479794431835018e+308":"9$"}
return a/b-c+d
};
var argument7 = ["Z",213,122,655,5e-324,"F"];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = null
argument10[5] = null
argument10[0] = ""
return a*b-c-d
};
var argument9 = "";
var base_0 = [",","N","_nU","}","{","Fgv","h:","O","5jSJ}"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",","N","_nU","}","{","Fgv","h:","O","5jSJ}"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",","N","_nU","}","{","Fgv","h:","O","5jSJ}"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",","N","_nU","}","{","Fgv","h:","O","5jSJ}"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test332.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)