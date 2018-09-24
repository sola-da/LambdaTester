





var callbackArguments = [];
var argument1 = function (ln) {
 callbackArguments.push(arguments) 

    keys[getKey(ln)] = true;
};
var argument2 = function (view) {
 callbackArguments.push(arguments) 

    var idx = view.contentIndex;
    if (indexes.contains(idx)) {
        ok(true, 'should find childView for contentIndex %@ (nowShowing=%@)'.fmt(idx, set));
    } else {
        ok(false, 'should NOT find childView for contentIndex %@ (nowShowing=%@)'.fmt(idx, set));
    }
    indexes.remove(idx);
};
var argument3 = r_1;
var argument4 = "";
var argument5 = function (source) {
 callbackArguments.push(arguments) 

    for (var key in source)
        target[key] = source[key];
};
var argument6 = r_1;
var argument7 = function (child) {
 callbackArguments.push(arguments) 

    if (index) {
        element.insertBefore(child, index);
    } else {
        element.appendChild(child);
        index = child;
    }
};
var base_0 = ["s"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test52.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)