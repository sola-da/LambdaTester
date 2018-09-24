





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
var base_0 = ["AkT","{q","z&?","$","[","2`mUA","j","Y$","f2","I"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
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
require("fs").writeFileSync("./experiments/map/mapMined/test448.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)