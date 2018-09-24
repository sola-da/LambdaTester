





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = false
return a-b/c*d
};
var argument5 = true;
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = false
return a/b/c-d
};
var argument9 = r_2;
var argument10 = true;
var argument11 = {"213":"","783":"Q","8.173326891019585e+307":"","":"gY;Q","g":1.7429826292244659e+308,"8.000485635701736e+306":403};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[82] = true
base_2 = null
argument11['HMm'] = "1"
return a-b*c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14 = 82
argument14[7.463432409233234e+307] = {"59":1.2370176650977482e+308,"":"f","1.4261263031683199e+308":"","d":"Gx-=","F96":126,"E":"",",E":"","4.0440849398963126e+307":1.3242562162269687e+308,"9.931695065523324e+307":""}
return a+b/c/d
};
var argument14 = 1.4390351656423644e+308;
var argument15 = null;
var base_0 = [157,"#","4",1.7976931348623157e+308,"pG","01M",714,"iS"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,"#","4",1.7976931348623157e+308,"pG","01M",714,"iS"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,"#","4",1.7976931348623157e+308,"pG","01M",714,"iS"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,"#","4",1.7976931348623157e+308,"pG","01M",714,"iS"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test704.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)