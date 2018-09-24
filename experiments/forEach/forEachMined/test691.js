





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    field.setChecked(values.indexOf(field.getValue()) !== -1);
};
var argument2 = "";
var argument3 = false;
var argument4 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.rowCount)
        screenRows += w.rowCount;
};
var argument5 = null;
var argument6 = function (key2, node2) {
 callbackArguments.push(arguments) 

    ForceVectorUtils.fcBiRepulsor(node1, node2, that.repulsionStrength * (1 + node1.degree) * (1 + node2.degree));
};
var argument7 = null;
var argument8 = function (value) {
 callbackArguments.push(arguments) 

    output.push(value);
};
var argument9 = true;
var argument10 = [49,157,705,"tH","0>"];
var base_0 = [618,82,403,157,59,893,655,843,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,82,403,157,59,893,655,843,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,82,403,157,59,893,655,843,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,82,403,157,59,893,655,843,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test691.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)