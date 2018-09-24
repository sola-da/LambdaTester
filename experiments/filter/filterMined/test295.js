





var callbackArguments = [];
var argument1 = function (event) {
 callbackArguments.push(arguments) 

    return event.pid === processId && event.name === event_name && typeof event.args !== 'undefined' && typeof event.args.data !== 'undefined';
};
var argument2 = null;
var argument3 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var argument4 = true;
var argument5 = false;
var argument6 = function (match) {
 callbackArguments.push(arguments) 

    return !hasMatch(nextMatches, match);
};
var argument7 = "_";
var argument8 = null;
var argument9 = function (node) {
 callbackArguments.push(arguments) 

    if (node.nodeType !== 1) {
        node.parentNode.removeChild(node);
    } else {
        return true;
    }
};
var argument10 = true;
var base_0 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b]#",893,"PAa","$P%","t?D",242,25,25,714]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test295.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)