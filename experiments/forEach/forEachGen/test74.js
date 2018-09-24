





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = 1.507416513609454e+308
base_0[3] = ""
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = [1.7976931348623157e+308,157]
argument3[1] = ["v-= H","[8k"]
argument2 = ["h","|z8"]
return a+b+c
};
var argument3 = [607,-1,59,122];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8.748669805137695e+307] = {"607":"","":1.0708030633719312e+308,"1.0217356273296604e+308":5.122795157089233e+307,"g":25,"Y":"7I;","^ ":"o","8.942033545152817e+307":"x"}
argument5[126] = {"59":1.0481797599457545e+308,"":25,"1.6856339281610902e+308":1.6211862347331925e+308,"-1":1.4205972444974577e+308}
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][0] = [705,59,126]
return a/b*c
};
var base_0 = ["<&","FPB",705,705,213,"b","9","p","OWLx"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<&","FPB",705,705,213,"b","9","p","OWLx"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<&","FPB",705,705,213,"b","9","p","OWLx"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<&","FPB",705,705,213,"b","9","p","OWLx"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test74.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)