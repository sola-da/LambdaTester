





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    return a.toCSS();
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument3 = null;
var base_0 = [893,403,126,82,0,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,403,126,82,0,403]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test658.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)