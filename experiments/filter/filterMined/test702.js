





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    return typeof d3plus.style[s] === 'object';
};
var argument2 = function (child) {
 callbackArguments.push(arguments) 

    return !child.entityAspect.entityState.isDetached();
};
var argument3 = 8.442991923811213e+307;
var argument4 = "";
var argument5 = function (guest) {
 callbackArguments.push(arguments) 

    return !!guest.name && (attending ? guest.is_attending : true);
};
var argument6 = function (patch) {
 callbackArguments.push(arguments) 

    var parsedPath = parsePath(patch.path);
    if ([
            'add',
            'remove'
        ].indexOf(patch.op) != -1 && !isNaN(parsedPath.col)) {
        if (newOrRemovedColumns.indexOf(parsedPath.col) != -1) {
            return false;
        } else {
            newOrRemovedColumns.push(parsedPath.col);
        }
    }
    return true;
};
var argument7 = null;
var base_0 = ["Ne","%","a",-1,"Q","R"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ne","%","a",-1,"Q","R"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ne","%","a",-1,"Q","R"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test702.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)