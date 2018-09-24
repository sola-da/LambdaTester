





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument2 = null;
var argument3 = [893,595,627,122,1.7976931348623157e+308,627,157,59,618];
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument5 = null;
var argument6 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function (nick) {
 callbackArguments.push(arguments) 

    return server.normalizeName(nick) === userNick;
};
var argument10 = null;
var base_0 = [705,403,157,-1,49]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,403,157,-1,49]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,403,157,-1,49]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,403,157,-1,49]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test49.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)