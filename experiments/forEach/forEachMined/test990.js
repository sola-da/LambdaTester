





var callbackArguments = [];
var argument1 = function (cookie) {
 callbackArguments.push(arguments) 

    data[cookie] = _this.read(cookie);
};
var argument2 = false;
var argument3 = {"59":595,"":"","{nn":"","1.1207829086460726e+308":823,"2.167086487142913e+306":1.7976931348623157e+308,"nO":213,"3.286160553564105e+307":0,"1.015263860355762e+308":""};
var argument4 = function (text, index) {
 callbackArguments.push(arguments) 

    strings.push('#line 1 ', index.toString(), '\n', text);
};
var argument5 = ["{","sf","B","1"];
var argument6 = function (fieldError) {
 callbackArguments.push(arguments) 

    var attrName = fieldError.field, message = fieldError.message;
    if (!_.isArray(errors[attrName]))
        errors[attrName] = [];
    errors[attrName].push(message);
};
var argument7 = "H";
var argument8 = r_2;
var argument9 = function (name) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesBooleanProperty([
        'audio',
        'video'
    ], name);
};
var base_0 = [893,595,595,126,82,126,100,823,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,595,595,126,82,126,100,823,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,595,595,126,82,126,100,823,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,595,595,126,82,126,100,823,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test990.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)