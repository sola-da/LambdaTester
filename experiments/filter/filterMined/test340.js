





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return this.sortDisabled ? false : ts.isValueInArray(parseFloat($(this).attr('data-column')), c.sortList);
};
var argument2 = false;
var argument3 = function (domain) {
 callbackArguments.push(arguments) 

    return 0 === domain.indexOf(str);
};
var argument4 = 2.042974807878434e+307;
var argument5 = r_0;
var argument6 = function (k) {
 callbackArguments.push(arguments) 

    return [
        'name',
        'version',
        'dependencies'
    ].indexOf(k) === -1;
};
var argument7 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var base_0 = [655,59,"m`","VGDg","o",893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,59,"m`","VGDg","o",893]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,59,"m`","VGDg","o",893]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,59,"m`","VGDg","o",893]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test340.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)