





var callbackArguments = [];
var argument1 = function (k) {
 callbackArguments.push(arguments) 

    var value = variables[k];
    if (!(value instanceof tree.Value)) {
        if (!(value instanceof tree.Expression)) {
            value = new tree.Expression([value]);
        }
        value = new tree.Value([value]);
    }
    return new tree.Rule('@' + k, value, false, null, 0);
};
var argument2 = {"0":1.6817615589410406e+308,"157":"","627":"","":"","1.7976931348623157e+308":"|","6.039883032163697e+307":893,"]}":"H","1.3742651775814065e+308":122,"2.530687348618865e+307":""};
var argument3 = null;
var argument4 = function (model) {
 callbackArguments.push(arguments) 

    return model.toJSON();
};
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x[prop];
};
var argument6 = 3.1952851243469343e+307;
var argument7 = false;
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    x = x.clone();
    x.start.row += diff;
    x.end.row += diff;
    return x;
};
var argument9 = 126;
var argument10 = ["V]E","E","k"];
var base_0 = [627,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,213]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,213]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,213]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test143.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)