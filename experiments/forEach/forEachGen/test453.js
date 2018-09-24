





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = ["#"," )y","5$<1QAb@","a"]
base_0[4] = "n-Z"
return a+b/c
};
var argument2 = [126,5e-324,843,843];
var argument3 = {"705":4.1458518914803835e+307,"":"OJ"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-1] = {}
argument6[7] = true
base_1[4][6] = ""
return a/b-c
};
var argument5 = null;
var argument6 = [" x",";[","r>"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2][783] = {"100":"NF@","969":1.3121470886669286e+308,"6.376909035185838e+307":655,"":-1,"#)":714}
argument9[59] = true
return a+b+c
};
var argument8 = ";";
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[9] = ["%",25,59,893,82,"|","n",0,"]","O"]
argument11[126] = {"122":4.144015502260317e+307,"607":"","969":"kf","5.539742059911111e+307":969,"#tdeJq":"","":0,"1.7976931348623157e+308":-1}
return a-b/c
};
var argument11 = "";
var argument12 = null;
var base_0 = ["@","L","F",49,213,783,100,"xN:G"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@","L","F",49,213,783,100,"xN:G"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@","L","F",49,213,783,100,"xN:G"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@","L","F",49,213,783,100,"xN:G"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test453.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)