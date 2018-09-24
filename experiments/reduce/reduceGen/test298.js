





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[8] = {"0":4.444400181481686e+307,"=":"wEnZ","3.4340214260266245e+307":100,"-":"7@&"}
base_0[2] = 213
base_0[7] = "k"
return a+b+c-d
};
var argument2 = null;
var argument3 = true;
var argument4 = null;
var argument5 = [")WM-{-",25,"q","79foT",-100,460,"a]"];
var argument6 = {"100":8.344036560283269e+307,"595":969,"823":"","1.3443639915375035e+307":595,"":1.7583781793089559e+308,"3.2293345029682805e+307":"P","7.568243109486055e+306":"*","1.3683639110772883e+308":5.744576341331812e+307,"4.992141917887968e+307":""};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = ["u dryz",1.7976931348623157e+308,100,0,"QW","R",893,"g_"]
return a-b*c-d
};
var argument8 = "]";
var argument9 = r_2;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = true
argument9[';N'] = [655,82,783,100,595,-1,-100]
return a-b/c*d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[213] = "="
argument13[7] = null
return a*b-c+d
};
var argument13 = r_3;
var argument14 = {"607":1.7809131664114667e+308};
var base_0 = [25,969,5e-324,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,969,5e-324,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,969,5e-324,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,969,5e-324,82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test298.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)