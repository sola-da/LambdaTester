





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $.prop(this, 'value');
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    return value * 2;
};
var argument5 = null;
var argument6 = false;
var argument7 = function (h) {
 callbackArguments.push(arguments) 

    return h.getStatusText && h.getStatusText(editor, data) || '';
};
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    return { id: item.id };
};
var argument9 = false;
var base_0 = [783,"Hv",0,823,"8h}","=","W"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"Hv",0,823,"8h}","=","W"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test42.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)