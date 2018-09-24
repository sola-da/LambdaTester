





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument2 = "tf";
var argument3 = r_0;
var argument4 = function (fkName) {
 callbackArguments.push(arguments) 

    return entity.getProperty(fkName);
};
var argument5 = {"":2.4476752945307083e+307,"7.129996626062589e+306":969,"1.7114825001841658e+308":403};
var argument6 = r_0;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return $(this).button('widget')[0];
};
var argument8 = r_0;
var argument9 = function (p) {
 callbackArguments.push(arguments) 

    return p.trim();
};
var argument10 = null;
var base_0 = [714,595,-100,126,126,607,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,595,-100,126,126,607,607]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,595,-100,126,126,607,607]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,595,-100,126,126,607,607]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test529.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)