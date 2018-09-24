





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    if (t && funct[t.value] === 'const') {
        error('E013', t, t.value);
    }
};
var argument2 = 4.720701713798315e+307;
var argument3 = true;
var argument4 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i > depth && a[n])
        delete a[n];
};
var argument5 = function (prop, i) {
 callbackArguments.push(arguments) 

    if (i) {
        output.print(',');
        output.newline();
    }
    output.indent();
    prop.print(output);
};
var argument6 = function (entity) {
 callbackArguments.push(arguments) 

    if (entity != null) {
        if (entity.getProperty(fkPropName) == oldValue) {
            entity.setProperty(fkPropName, newValue);
        }
    }
};
var base_0 = [403,893,25,714,403,1.7976931348623157e+308,-100,-1,-1,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893,25,714,403,1.7976931348623157e+308,-100,-1,-1,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893,25,714,403,1.7976931348623157e+308,-100,-1,-1,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,893,25,714,403,1.7976931348623157e+308,-100,-1,-1,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test656.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)