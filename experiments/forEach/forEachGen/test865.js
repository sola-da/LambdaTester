





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
argument2[460] = {"":655,"-1":1.0403383708823221e+308,"1.6145796461318535e+308":4.8365837862197e+307,"5e-324":"b","5.064358406393175e+307":969,":":"<S","1.5673012995831527e+308":"","Rdh":460}
return a/b+c
};
var argument2 = r_0;
var argument3 = {"59":"v","":"","m?3":9.322764035629532e+307,"s?":1.954968471289429e+307,"j2t":0,"1.7976931348623157e+308":5.937008765920125e+307,"1.1571246174869248e+308":3.24739984844492e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.2421645642809447e+308] = true
argument5['a8r['] = 4.800793750720816e+307
return a*b-c
};
var argument5 = {"4.820856040149993e+307":"d","l":"]x!"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = ["PC","`"]
return a+b-c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['1SHF1'] = "1zn"
return a*b-c
};
var base_0 = [1.7976931348623157e+308,0,893,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,0,893,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,0,893,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,0,893,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test865.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)