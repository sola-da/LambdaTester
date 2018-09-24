





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return addName(d.values[i]);
};
var argument2 = function (index, element) {
 callbackArguments.push(arguments) 

    return Array.prototype.slice.call(element.parentNode.children).filter(function (child) {
        return child !== element;
    });
};
var argument3 = function (val, i) {
 callbackArguments.push(arguments) 

    return '<option value="' + val + '">' + labels[i] + '</option>';
};
var argument4 = 7.495392489751525e+307;
var argument5 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument6 = {"595":"@H8","893":")","9.397381740384988e+307":"I","r":705};
var base_0 = [":N+",157]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":N+",157]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":N+",157]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":N+",157]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test181.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)