





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return this.element;
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.selected;
};
var argument5 = r_0;
var argument6 = "";
var argument7 = function (prop) {
 callbackArguments.push(arguments) 

    prop.message = 'Property';
    return from_moz(prop);
};
var argument8 = function (h) {
 callbackArguments.push(arguments) 

    return h.getStatusText && h.getStatusText(editor, data) || '';
};
var argument9 = true;
var base_0 = [213,627,49,126,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
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
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test608.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)