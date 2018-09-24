





var callbackArguments = [];
var argument1 = function (arg) {
 callbackArguments.push(arguments) 

    if (Q_isPromise(arg) && arg.toBePassed()) {
        return arg.inspect().value;
    } else {
        return arg;
    }
};
var argument2 = null;
var argument3 = function (result) {
 callbackArguments.push(arguments) 

    return Highlight.allFold(result.text, [query]);
};
var argument4 = function (val, key) {
 callbackArguments.push(arguments) 

    return '(' + field.script + ')' + operators[key] + key;
};
var argument5 = true;
var argument6 = null;
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    return window['inner' + name] || document.compatMode === 'CSS1Compat' && document.documentElement['client' + name] || document.body['client' + name];
};
var argument8 = true;
var argument9 = [627,"H","(1W>","^j","v","W","S "];
var base_0 = ["3","r]xe","B","K","|"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3","r]xe","B","K","|"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3","r]xe","B","K","|"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3","r]xe","B","K","|"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test666.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)