





var callbackArguments = [];
var argument1 = function (datum) {
 callbackArguments.push(arguments) 

    changed = !0;
    datum_deselect.call(datum);
    this._selectedNotNullDatums.rem(datum.id);
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    get_keys(d);
};
var argument3 = function (option) {
 callbackArguments.push(arguments) 

    if (option in optionsOverride) {
        options[option] = optionsOverride[option];
    }
};
var argument4 = r_2;
var argument5 = function (value, key) {
 callbackArguments.push(arguments) 

    lines.push(key + ': ' + value);
};
var base_0 = [157,1.7976931348623157e+308,0,100,595,-100,655,213,59,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,1.7976931348623157e+308,0,100,595,-100,655,213,59,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,1.7976931348623157e+308,0,100,595,-100,655,213,59,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,1.7976931348623157e+308,0,100,595,-100,655,213,59,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test979.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)