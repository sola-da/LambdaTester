





var callbackArguments = [];
var argument1 = function (atom) {
 callbackArguments.push(arguments) 

    var datum = def.getOwn(datumsBySeriesKey, atom.key);
    return datum ? datum.atoms.value.value : null;
};
var argument2 = true;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return this.elements ? jQuery.makeArray(this.elements) : this;
};
var argument4 = r_1;
var base_0 = [714]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
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
require("fs").writeFileSync("./experiments/map/mapMined/test672.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)