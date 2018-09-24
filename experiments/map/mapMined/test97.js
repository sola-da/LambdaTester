





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return '    - ' + c + ' - ' + require('./' + c).usage;
};
var argument2 = {"%@fs":"g","K":9.255269295107103e+307};
var argument3 = null;
var argument4 = function (s) {
 callbackArguments.push(arguments) 

    return s.replace('\\.', '.');
};
var argument5 = null;
var argument6 = null;
var argument7 = function (doc, i) {
 callbackArguments.push(arguments) 

    var newDoc = utils.parseDoc(doc, newEdits);
    newDoc._bulk_seq = i;
    return newDoc;
};
var argument8 = null;
var argument9 = function (dependant) {
 callbackArguments.push(arguments) 

    var release = dependant.pkgMeta._release;
    return dependant.endpoint.name + (release ? '#' + release : '');
};
var argument10 = "";
var base_0 = [714,783,460,49,5e-324,49,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,783,460,49,5e-324,49,-100]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,783,460,49,5e-324,49,-100]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,783,460,49,5e-324,49,-100]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test97.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)