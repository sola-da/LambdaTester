





var callbackArguments = [];
var argument1 = function (def) {
 callbackArguments.push(arguments) 

    vars.set(def.name.name, def);
    ++vars_found;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (fullViewName) {
 callbackArguments.push(arguments) 

    var parts = parseViewName(fullViewName);
    var designDocName = '_design/' + parts[0];
    var viewName = parts[1];
    docsToViews[designDocName] = docsToViews[designDocName] || {};
    docsToViews[designDocName][viewName] = true;
};
var argument5 = 157;
var argument6 = function (t) {
 callbackArguments.push(arguments) 

    t.values.forEach(function (v, i) {
        v.x = generateTargetX(x[i], t.id, i);
    });
    c3.data.xs[t.id] = x;
};
var argument7 = false;
var argument8 = false;
var argument9 = function (v) {
 callbackArguments.push(arguments) 

    var val = fetchValue(vars, v, sort);
    if (val) {
        if (typeof val == 'number') {
            d[sort] += val;
        } else {
            d[sort] = val;
        }
    }
};
var argument10 = r_0;
var base_0 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test608.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)