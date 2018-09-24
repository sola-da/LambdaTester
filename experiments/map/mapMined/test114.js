





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
var argument2 = null;
var argument3 = "";
var argument4 = function (model) {
 callbackArguments.push(arguments) 

    return model.toJSON();
};
var argument5 = "!YD";
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    return typeof e == 'string' ? e : e.join('');
};
var argument7 = true;
var argument8 = true;
var argument9 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var base_0 = ["8`=",618,157,"^",714,25,"aZP0"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8`=",618,157,"^",714,25,"aZP0"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8`=",618,157,"^",714,25,"aZP0"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8`=",618,157,"^",714,25,"aZP0"]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test114.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)