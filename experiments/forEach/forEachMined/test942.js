





var callbackArguments = [];
var argument1 = function (state) {
 callbackArguments.push(arguments) 

    if (state.children.length)
        addRoutes(state.children);
    else
        addRouteForLeafState(state);
};
var argument2 = true;
var argument3 = function (line) {
 callbackArguments.push(arguments) 

    if (line.indexOf(jasmineFilename) == -1) {
        lines.push(line);
    }
};
var argument4 = {"25":7.073303402162049e+307,"783":59,"":"EyC","_":1.5283570673008667e+308,"1.6303216941705314e+308":6.709271927971657e+307,"3.180503561755713e+306":59,"L":"E`","y{}{W":"","1.1085587655579634e+308":0,"2.2668140190793684e+307":49};
var argument5 = r_0;
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    var opt = options[key];
    if (typeof opt == 'string')
        opt = { forwardTo: opt };
    opt.name || (opt.name = key);
    obj.$options[opt.name] = opt;
    if ('initialValue' in opt)
        obj['$' + opt.name] = opt.initialValue;
};
var argument7 = true;
var argument8 = function (e) {
 callbackArguments.push(arguments) 

    delete s[o][e.i], 'removeEventListener' in t && t.removeEventListener(g(e.e), e.proxy, m(e, r));
};
var argument9 = {"618":"","714":"","5aJeXf":"","^h":893};
var argument10 = true;
var base_0 = [627,1.7976931348623157e+308,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,1.7976931348623157e+308,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,1.7976931348623157e+308,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,1.7976931348623157e+308,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test942.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)