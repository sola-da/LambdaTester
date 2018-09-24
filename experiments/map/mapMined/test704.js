





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.passed;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (path) {
 callbackArguments.push(arguments) 

    var stemmed = path.ids.slice(-depth);
    return {
        pos: path.pos + (path.ids.length - stemmed.length),
        ids: pathToTree(stemmed)
    };
};
var argument5 = ["h","c","Y%Q"];
var argument6 = false;
var argument7 = function (str) {
 callbackArguments.push(arguments) 

    return str.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g, function (s) {
        var code = parseInt(s.substr(2), 16);
        return regexp_safe_literal(code) ? String.fromCharCode(code) : s;
    });
};
var argument8 = null;
var argument9 = false;
var argument10 = function (v) {
 callbackArguments.push(arguments) 

    return '(' + expr1Val + ' eq ' + v + ')';
};
var argument11 = {"u+O":59};
var argument12 = r_1;
var base_0 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,618,1.7976931348623157e+308,25,157,969,49]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapMined/test704.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)