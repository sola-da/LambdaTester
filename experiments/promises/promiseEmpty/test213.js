/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = 7.189385129939735e+307;
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = r_1;
var argument5 = 595;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = null;
var argument8 = null;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = {"655":1.4273966709707833e+308,"1.0549707677152616e+308":"my ","y":893,"2.359725053420928e+307":5.143399791824858e+307,"4.4226179102765183e+307":"X64","_&c":"","u":""};
var argument11 = p1;
var base_0 = p2
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
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test213.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)