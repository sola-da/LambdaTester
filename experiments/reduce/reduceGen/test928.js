





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = 618
argument2[213] = false
return a-b*c+d
};
var argument5 = "";
var argument6 = r_0;
var argument7 = {"82":"Z","595":6.033510518428904e+307,"627":0};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[59] = {"460":893,"595":893,"1.713425054442415e+308":213,"n":""}
return a-b-c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.4205726959827606e+308] = 49
argument9[126] = "'"
argument11[1.359136872727139e+308] = {"25":1.244506753890353e+308,"122":6.284073783863751e+307,"":"S",">":"","uf":"N","4.55261675903968e+307":"U","4.2264787679703035e+307":"","J":1.7357738846601147e+308,"3.3124308882984016e+306":""}
return a/b+c*d
};
var argument10 = true;
var argument11 = r_0;
var argument12 = "";
var argument13 = {"0":655,"1.7244150518533597e+308":""," ":5.10745412682618e+307,"":5.597071466648126e+307,"1.4761968228957336e+308":1.0368374765994226e+308};
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[6] = {"0":1.2502800485950603e+308,"242":"vy","607":"hpo","1.3855024340507352e+308":460,"":"UNq?i4tA"}
return a/b-c+d
};
var base_0 = [403,122,893,823,607,213,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,122,893,823,607,213,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,122,893,823,607,213,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,122,893,823,607,213,460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test928.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)