





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    modifyMethod(g.Path, method);
};
var argument2 = {"595":1.7827021435410226e+308,"714":1.0830644608502116e+308,"3.0315953853980063e+307":"r","1.0279135680084984e+308":"M","4Zp":627,"":49};
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    if (isObject(v)) {
        v = toJson(v);
    }
    parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(v));
};
var argument4 = false;
var argument5 = false;
var argument6 = function (uri) {
 callbackArguments.push(arguments) 

    if (re.test(uri)) {
        ctx.linkResource(uri.replace.bind(uri, re));
    } else {
        ctx.linkResource(uri);
    }
};
var argument7 = false;
var argument8 = null;
var argument9 = function (prop) {
 callbackArguments.push(arguments) 

    var propName = prop.name;
    if (alreadyWrapped[propName])
        return;
    var descr;
    if (propName in proto) {
        descr = wrapPropDescription(proto, prop);
    } else {
        descr = makePropDescription(proto, prop);
    }
    if (descr != null) {
        Object.defineProperty(proto, propName, descr);
    }
    alreadyWrapped[propName] = true;
};
var base_0 = ["p","(x","[","^","t5K"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["p","(x","[","^","t5K"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["p","(x","[","^","t5K"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["p","(x","[","^","t5K"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test87.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)