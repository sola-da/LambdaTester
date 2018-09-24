





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    exports[i] = typeof fs[i] !== 'function' ? fs[i] : i.match(/^[A-Z]|^create|Sync$/) ? function () {
        return fs[i].apply(fs, arguments);
    } : graceful(fs[i]);
};
var argument2 = function (node) {
 callbackArguments.push(arguments) 

    if (isTabHeading(node)) {
        tab.headingElement = node;
    } else {
        elm.append(node);
    }
};
var argument3 = null;
var argument4 = function (middleware) {
 callbackArguments.push(arguments) 

    middleware.call(client.instance, client.remote, client);
};
var argument5 = true;
var argument6 = "!";
var argument7 = function (nodeName) {
 callbackArguments.push(arguments) 

    retDesc[nodeName] = webshims[baseMethod](nodeName, a, b, c);
};
var argument8 = r_2;
var argument9 = true;
var base_0 = ["[","Q,","L","_in","4d%V,","!-)","O U>o|s","0","@t"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[","Q,","L","_in","4d%V,","!-)","O U>o|s","0","@t"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[","Q,","L","_in","4d%V,","!-)","O U>o|s","0","@t"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[","Q,","L","_in","4d%V,","!-)","O U>o|s","0","@t"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test537.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)