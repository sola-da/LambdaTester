





var callbackArguments = [];
var argument1 = function (cell, i) {
 callbackArguments.push(arguments) 

    if (cell.index >= 0) {
        cell.index += 1;
    } else {
        console.debug('Error:IndirectSelection.addRowSelectCell()-  cell ' + i + ' has no index!');
    }
};
var argument2 = true;
var argument3 = function (user) {
 callbackArguments.push(arguments) 

    try {
        user.send(message);
    } catch (exception) {
        winston.error('Error writing to stream:', exception);
    }
};
var argument4 = null;
var argument5 = "";
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    global[key] = globals[key];
};
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    if (s)
        t = t.cloneNode(!0);
    else if (!o)
        return n(t).remove();
    o.insertBefore(t, a), f && Q(t, function (t) {
        null == t.nodeName || 'SCRIPT' !== t.nodeName.toUpperCase() || t.message && 'text/javascript' !== t.message || t.src || window.eval.call(window, t.innerHTML);
    });
};
var base_0 = ["B","*GI","^Wb","-"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B","*GI","^Wb","-"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B","*GI","^Wb","-"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B","*GI","^Wb","-"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test7.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)