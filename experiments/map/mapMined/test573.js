





var callbackArguments = [];
var argument1 = function (byte) {
 callbackArguments.push(arguments) 

    return String.fromCharCode(byte);
};
var argument2 = r_0;
var argument3 = function (i, el) {
 callbackArguments.push(arguments) 

    row = _fnGetRowElements(settings, el);
    return _fnAddData(settings, row.data, el, row.cells);
};
var argument4 = "";
var argument5 = r_0;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return dataType.parse(v, typeof v);
};
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    var code = obj[key];
    return JSON.stringify(key) + ':' + toCode(code);
};
var argument8 = null;
var argument9 = null;
var base_0 = ["3","f","Es=",")","0"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3","f","Es=",")","0"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3","f","Es=",")","0"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapMined/test573.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)