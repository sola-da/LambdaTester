





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = ["q79","Z","g","ci","5","I8G","<&"]
argument3[1.4034744228995816e+308] = {"460":"","byyl":3.167073438521337e+307,"1.0204779945083896e+308":"^","1.781602721061369e+308":"","5.221005931540078e+307":"WLx","<":""}
return a-b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = 2.545234734098581e+307
base_1[4] = {"823":""}
argument4[3.0481490052276395e+306] = ["v-= H","[8k"]
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = {"":1.5979661748845026e+307,"1.3497591032719683e+307":126,"3.8456762703139753e+307":"!","1.2221099017977437e+308":1.3924099851165772e+308}
base_2[0][5e-324] = false
base_2[7] = null
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = 25
argument6 = null
return a-b-c
};
var argument6 = null;
var argument7 = 157;
var base_0 = [783,242,460,823,25,82,0,969,213]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,242,460,823,25,82,0,969,213]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,242,460,823,25,82,0,969,213]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,242,460,823,25,82,0,969,213]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test73.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)