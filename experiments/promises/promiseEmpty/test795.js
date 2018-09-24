/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"126":1.385277064050844e+308,"":655,"Zf":"M","1.7004594008779321e+308":"","?i":1.5219355364265078e+308};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = null;
var argument4 = [714,"1","b+","Z:_","h",969,0];
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = {"460":"","l":969,"":1.3540320273759756e+308,"3lU":5.09837045847676e+307};
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = p1;
var argument9 = true;
var argument10 = function callback(){callbackArguments.push(arguments)};
var argument11 = null;
var argument12 = {"100":403,"[":"","_":"|","":1.4418674147507953e+308,"d%V,":5e-324,"5l":"1!",")":"","QEI":25};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test795.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)