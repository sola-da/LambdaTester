





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = [25,783]
argument1[1] = true
base_0[5] = ""
return a*b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = true
argument6[4] = {"627":"^8a","]":1.4915081126896292e+308,"":823,"6.369680828079892e+307":8.456630653608027e+306,"8.996658451033572e+307":"C)","T5":893,"1.076170814157695e+308":1.2507536408496997e+308}
return a-b+c-d
};
var argument6 = {"":59,"awp":",","4.3290534419582836e+307":"","-<":"e","2.339312815922433e+307":242,"lr":""};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = [59,893,655,893,893,59]
return a/b+c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = "X"
base_3[8] = null
return a/b-c*d
};
var argument9 = null;
var base_0 = [969,1.7976931348623157e+308,-100,49,595,213,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,1.7976931348623157e+308,-100,49,595,213,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,1.7976931348623157e+308,-100,49,595,213,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,1.7976931348623157e+308,-100,49,595,213,213]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test88.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)