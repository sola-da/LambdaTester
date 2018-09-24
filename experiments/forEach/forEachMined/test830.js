





var callbackArguments = [];
var argument1 = function (meaName2, localMeaIndex) {
 callbackArguments.push(arguments) 

    var meaIndex = measuresInfo[meaName2].groupIndex;
    meaIndexes[meaIndex] = R + colGroupStartIndex + localMeaIndex;
};
var argument2 = false;
var argument3 = function (user) {
 callbackArguments.push(arguments) 

    try {
        user.send(message);
    } catch (exception) {
        winston.error('Error writing to stream:', exception);
    }
};
var argument4 = {};
var argument5 = [618,126,607,0,607,59,242];
var argument6 = function (p) {
 callbackArguments.push(arguments) 

    o['_' + p] = syncLogHook;
};
var argument7 = r_2;
var argument8 = r_2;
var argument9 = function (field) {
 callbackArguments.push(arguments) 

    field.setChecked(values.indexOf(field.getValue()) !== -1);
};
var argument10 = "";
var base_0 = ["2"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test830.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)