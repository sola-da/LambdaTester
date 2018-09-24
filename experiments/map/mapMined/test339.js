





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument2 = {"1.3556234451406543e+308":"","N":"","":"4"};
var argument3 = function (obj) {
 callbackArguments.push(arguments) 

    return rename_key_value(obj);
};
var argument4 = r_0;
var argument5 = function (r) {
 callbackArguments.push(arguments) 

    return _.result(r, attribute);
};
var argument6 = null;
var argument7 = function (val) {
 callbackArguments.push(arguments) 

    val = String(val);
    var found = false;
    Object.each(Fx.CSS.Parsers, function (parser, key) {
        if (found)
            return;
        var parsed = parser.parse(val);
        if (parsed || parsed === 0)
            found = {
                value: parsed,
                parser: parser
            };
    });
    found = found || {
        value: val,
        parser: Fx.CSS.Parsers.String
    };
    return found;
};
var argument8 = r_1;
var argument9 = null;
var base_0 = ["JO","Vix","KYO6","Z*","]X"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["JO","Vix","KYO6","Z*","]X"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["JO","Vix","KYO6","Z*","]X"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test339.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)