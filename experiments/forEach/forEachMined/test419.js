





var callbackArguments = [];
var argument1 = function (arg, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    arg.print(output);
};
var argument2 = "";
var argument3 = function (rv) {
 callbackArguments.push(arguments) 

    val = parseRawValue(rv, dataType);
    oldVal.push(val);
};
var argument4 = function (tab) {
 callbackArguments.push(arguments) 

    tab.active = false;
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    dojo[i++ % 2 === 0 ? 'addClass' : 'removeClass'](item, 'sortListItemOdd');
    this.containerNode.appendChild(item);
};
var argument6 = r_3;
var argument7 = {"49":"","242":"N","1.1698548965822881e+308":"G","1.1289335781791557e+308":"t4VQJ","1.7976931348623157e+308":"","":25};
var base_0 = [969,705," O"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,705," O"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,705," O"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,705," O"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test419.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)