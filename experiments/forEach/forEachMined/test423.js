





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    if (!this.globals[id].activate) {
        return;
    }
    _counter[id]++;
    this.globals[id].activate();
};
var argument2 = null;
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    return _this.appendItem(item);
};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    if (key === '')
        return;
    aliases[key] = key;
};
var argument5 = {"0":1.3082202800330956e+308,"25":"5","242":9.869573703797622e+307,"893":893,"1.215822388353903e+308":1.7976931348623157e+308,"":9.312204360216095e+307,"%":"c!aW'n[N","1.4542312896536488e+308":"n["};
var argument6 = "";
var argument7 = function (handler) {
 callbackArguments.push(arguments) 

    delete handlers[id][handler.i];
    if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
};
var base_0 = ["AkT","{q","z&?","$","[","2`mUA","j","Y$","f2","I"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["AkT","{q","z&?","$","[","2`mUA","j","Y$","f2","I"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["AkT","{q","z&?","$","[","2`mUA","j","Y$","f2","I"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["AkT","{q","z&?","$","[","2`mUA","j","Y$","f2","I"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test423.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)