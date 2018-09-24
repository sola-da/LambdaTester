





var callbackArguments = [];
var argument1 = function (etName) {
 callbackArguments.push(arguments) 

    return em.metadataStore._getEntityType(etName, false);
};
var argument2 = true;
var argument3 = true;
var argument4 = function (error, results) {
 callbackArguments.push(arguments) 

    if (error)
        return callback(error);
    callback(null, invoices);
};
var argument5 = true;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return domain.alphabet[_.random(0, domain.alphabet.length - 1)];
};
var argument7 = " ";
var argument8 = function (path) {
 callbackArguments.push(arguments) 

    return '.tmp/public/' + path;
};
var base_0 = ["F","F","]e","x"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F","F","]e","x"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F","F","]e","x"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F","F","]e","x"]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test545.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)