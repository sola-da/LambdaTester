





var callbackArguments = [];
var argument1 = function (option) {
 callbackArguments.push(arguments) 

    if (option.selected) {
        array.push(option.value);
    }
};
var argument2 = false;
var argument3 = r_0;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    fn = DATE_FORMATS[value];
    text += fn ? fn(date, $locale.DATETIME_FORMATS) : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
};
var argument5 = r_0;
var argument6 = false;
var argument7 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument8 = null;
var argument9 = function (line) {
 callbackArguments.push(arguments) 

    i = line.indexOf(':');
    key = lowercase(trim(line.substr(0, i)));
    val = trim(line.substr(i + 1));
    if (key) {
        if (parsed[key]) {
            parsed[key] += ', ' + val;
        } else {
            parsed[key] = val;
        }
    }
};
var argument10 = r_0;
var base_0 = [213,893,705,82,783,1.7976931348623157e+308,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,893,705,82,783,1.7976931348623157e+308,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,893,705,82,783,1.7976931348623157e+308,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,893,705,82,783,1.7976931348623157e+308,705]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test872.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)