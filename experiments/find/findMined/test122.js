





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument2 = null;
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === newDoc1._id;
};
var argument4 = ["{5*","V","vg","Hia","9","5","n#","V"];
var argument5 = function (ext) {
 callbackArguments.push(arguments) 

    return !!v.canPlayType(ext).replace(/no/, '');
};
var argument6 = true;
var argument7 = function (ext) {
 callbackArguments.push(arguments) 

    return !!v.canPlayType(ext).replace(/no/, '');
};
var argument8 = "4y";
var argument9 = r_2;
var base_0 = [783,5e-324,714,82,655,627,595,893,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,5e-324,714,82,655,627,595,893,213]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,5e-324,714,82,655,627,595,893,213]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,5e-324,714,82,655,627,595,893,213]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test122.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)