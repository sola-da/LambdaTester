





var callbackArguments = [];
var argument1 = function (i, el) {
 callbackArguments.push(arguments) 

    row = _fnGetRowElements(settings, el);
    return _fnAddData(settings, row.data, el, row.cells);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return this.elements ? jQuery.makeArray(this.elements) : this;
};
var argument3 = true;
var argument4 = false;
var argument5 = function (v, i) {
 callbackArguments.push(arguments) 

    return [
        x.call(stack, v, i),
        y.call(stack, v, i)
    ];
};
var argument6 = null;
var argument7 = function (tab) {
 callbackArguments.push(arguments) 

    return lis.index(tab);
};
var base_0 = ["@h","y","I","T","&","R","Z`qiF","po7Lb","i"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@h","y","I","T","&","R","Z`qiF","po7Lb","i"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test756.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)