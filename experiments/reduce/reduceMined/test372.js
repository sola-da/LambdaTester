





var callbackArguments = [];
var argument1 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev && cur(entity);
};
var argument2 = false;
var argument3 = {"714":4.953791384496108e+307,"969":"","":6.699499322332541e+306,"7.173970454285604e+307":607};
var argument4 = function (obj, pair) {
 callbackArguments.push(arguments) 

    var i = pair.indexOf('='), key = pair.slice(0, i), val = pair.slice(++i);
    obj[key] = decodeURIComponent(val);
    return obj;
};
var argument5 = function (o, model) {
 callbackArguments.push(arguments) 

    if (!o[model])
        o[model] = 0;
    o[model]++;
    return o;
};
var argument6 = function (a, def) {
 callbackArguments.push(arguments) 

    if (def.value) {
        var name = make_node(AST_SymbolRef, def.name, def.name);
        a.push(make_node(AST_Assign, def, {
            operator: '=',
            left: name,
            right: def.value
        }));
    }
    return a;
};
var argument7 = null;
var base_0 = [403,122,595,893,595,-1,59,-1,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,122,595,893,595,-1,59,-1,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,122,595,893,595,-1,59,-1,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,122,595,893,595,-1,59,-1,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test372.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)