





var callbackArguments = [];
var argument1 = function (def, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    def.print(output);
};
var argument2 = true;
var argument3 = function (source) {
 callbackArguments.push(arguments) 

    if (/\.js$/.test(source))
        pbjs.sources[source.substring(0, source.lastIndexOf('.'))] = require(__dirname + '/pbjs/sources/' + source);
};
var argument4 = function (handler) {
 callbackArguments.push(arguments) 

    delete handlers[id][handler.i];
    if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument8 = r_3;
var argument9 = false;
var base_0 = [627,49,705,"P",460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,49,705,"P",460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,49,705,"P",460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,49,705,"P",460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test641.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)