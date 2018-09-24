





var callbackArguments = [];
var argument1 = function (n, idx) {
 callbackArguments.push(arguments) 

    return n + '=(' + n + '===undefined?' + idx + ':' + n + '|0)';
};
var argument2 = null;
var argument3 = ["<=L","wE",25,"V",705,-100,607,460];
var argument4 = function (member) {
 callbackArguments.push(arguments) 

    return member && member.jquery ? $.makeArray(member) : member && member.length ? drag.flatten(member) : member;
};
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    if (excludedTables.indexOf(name) < 0) {
        return config.database.knex(name).select();
    }
};
var argument6 = false;
var argument7 = function (value) {
 callbackArguments.push(arguments) 

    if (value.length == 1)
        value += value;
    return value.toInt(16);
};
var argument8 = null;
var base_0 = [-1,705,"iK",969]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,705,"iK",969]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test362.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)