





var callbackArguments = [];
var argument1 = function (log) {
 callbackArguments.push(arguments) 

    return log.objName === objName && log.fnName === fnName;
};
var argument2 = false;
var argument3 = false;
var argument4 = function (edge) {
 callbackArguments.push(arguments) 

    return _isBlankNodeIri(edge.s);
};
var argument5 = false;
var argument6 = function (o, i) {
 callbackArguments.push(arguments) 

    this[i] = o;
    return true;
};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    var match = false;
    for (var i = 0; i < vars.id.nesting.length; i++) {
        var level = vars.id.nesting[i];
        match = level in d && d[level] === vars.focus.value[0];
        if (match) {
            depth = i;
            break;
        }
    }
    return match;
};
var argument8 = "";
var base_0 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test111.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)