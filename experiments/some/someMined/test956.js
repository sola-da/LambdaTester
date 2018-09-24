





var callbackArguments = [];
var argument1 = function (frame) {
 callbackArguments.push(arguments) 

    if (/UncoatedModuleInstantiator/.test(frame))
        return true;
    stack.push(frame);
};
var argument2 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument3 = {"627":"G","893":1.628030346892069e+308,"1.0917533500214567e+308":4.445098397284049e+306,"1.7097795038951207e+308":49,"":1.0722955656148012e+308,"5.449122358646185e+307":"v","1.2707956928718327e+308":1.696453975407894e+307,"7.935628672996363e+307":"zM%3=",">z":"ND5h"};
var argument4 = 1.0360149261779862e+308;
var argument5 = function (completer) {
 callbackArguments.push(arguments) 

    if (completer.getDocTooltip)
        doc = completer.getDocTooltip(selected);
    return doc;
};
var argument6 = false;
var argument7 = function (co) {
 callbackArguments.push(arguments) 

    return coHasOriginalValues(co);
};
var argument8 = true;
var base_0 = [893,843,100,126,618]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,843,100,126,618]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,843,100,126,618]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,843,100,126,618]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test956.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)