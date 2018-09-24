





var callbackArguments = [];
var argument1 = false;
var argument2 = {"6.278942604959382e+307":969};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = [213,"[h?krjYhSl",714,"oz",595,"82["]
base_0[1][0] = 9.034462817168554e+307
return a-b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['Cb'] = null
argument5[2] = [627,-1,25,-1,655]
return a/b+c+d
};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = "oc"
argument9 = {"595":3.746655018483962e+307,"714":"v1m","u":8.936956554111887e+307,"n":"avZF(k","$":213,"":"","5e-324":403}
return a+b/c-d
};
var argument8 = false;
var argument9 = false;
var argument10 = r_3;
var argument11 = "|!";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[82] = 5.189027506775852e+307
argument11[403] = null
argument9 = false
return a+b*c+d
};
var base_0 = ["A654W","Z","g?1",0,"vR","SQU",126,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["A654W","Z","g?1",0,"vR","SQU",126,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["A654W","Z","g?1",0,"vR","SQU",126,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["A654W","Z","g?1",0,"vR","SQU",126,59]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test552.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)