





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    vars[m] = d3plus.object.merge(vars[m] || {}, initStyle[m]);
    d3plus.method.init(vars, vars[m], m);
    vars.self[m] = d3plus.method.function(m, vars);
};
var argument2 = ["z?",460,969,-100,627,25,"[v+m","_?","y"];
var argument3 = function (joinObserver) {
 callbackArguments.push(arguments) 

    joinObserver.subscribe();
    group.add(joinObserver);
};
var argument4 = false;
var argument5 = null;
var argument6 = function (plotPanel) {
 callbackArguments.push(arguments) 

    plotPanel._getDatumsOnRect(datumMap, rect, keyArgs);
};
var argument7 = r_0;
var argument8 = function (other) {
 callbackArguments.push(arguments) 

    var anchor = doc.createAnchor(other.row, other.column);
    _self.others.push(anchor);
};
var argument9 = null;
var base_0 = ["&U<x","X^f","l","$:M",";I","-","I}"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&U<x","X^f","l","$:M",";I","-","I}"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&U<x","X^f","l","$:M",";I","-","I}"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&U<x","X^f","l","$:M",";I","-","I}"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test823.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)