





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    var ch1 = m.charAt(0);
    var ch2 = m.charAt(m.length - 1);
    if (ch1 === ch2 && (ch1 === '"' || ch1 === '\'')) {
        m = m.substr(1, m.length - 2).replace('\\"', '"');
    }
    membersOnly[m] = false;
};
var argument2 = true;
var argument3 = function (callback) {
 callbackArguments.push(arguments) 

    callback(schemaObject);
};
var argument4 = null;
var argument5 = r_0;
var argument6 = function (value, key) {
 callbackArguments.push(arguments) 

    var maps = [];
    _.forEach(value, function (mapping, name) {
        mapping.name = name;
        maps.push(mapping);
    });
    status[key] = maps;
};
var argument7 = true;
var argument8 = true;
var argument9 = function (state) {
 callbackArguments.push(arguments) 

    list.push(state.self);
};
var argument10 = r_0;
var argument11 = r_0;
var base_0 = [82,-100,"[","RnT",157,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,-100,"[","RnT",157,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-100,"[","RnT",157,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,-100,"[","RnT",157,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test456.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)