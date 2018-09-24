/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = 655;
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = [126,655,25,969,893,618,-1,618];
var argument5 = null;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = r_0;
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = {"1.7009349548149635e+308":100,"6.714342175168815e+307":"","5.362990998961199e+307":"]n","":8.869119338730079e+306,"4.504635525575926e+307":1.621839529781029e+308,"6.494144735196301e+307":1.2791102105128404e+308,"1.6302281897852883e+308":3.9578609519476467e+307};
var argument10 = {"5":705,"213":"","1.0419444993335778e+308":403,"":"","t":""};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9,argument10)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test821.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)