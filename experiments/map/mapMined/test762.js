





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var argument2 = null;
var argument3 = false;
var base_0 = [595,893,1.7976931348623157e+308,460,607,460,242,460,82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test762.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)