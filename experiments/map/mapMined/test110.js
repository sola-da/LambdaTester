





var callbackArguments = [];
var argument1 = function (timePoint) {
 callbackArguments.push(arguments) 

    return timePoint.clone();
};
var argument2 = true;
var argument3 = [-100,0,82,627,783,-100,82,403,-1];
var argument4 = function (dependant) {
 callbackArguments.push(arguments) 

    var release = dependant.pkgMeta._release;
    return dependant.endpoint.name + (release ? '#' + release : '');
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var base_0 = ["v+<","7","g","Zg;","|","0lG("]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v+<","7","g","Zg;","|","0lG("]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v+<","7","g","Zg;","|","0lG("]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test110.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)