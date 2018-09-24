





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument2 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument3 = {"59":1.3525120674814835e+308,"403":"","823":595,"!":8.460867942232095e+307,"3.3509300391983715e+307":655,"5.95296601811032e+307":1.6739630308372132e+308,"o":"qC(8`cAiI","":""};
var argument4 = function (value, key) {
 callbackArguments.push(arguments) 

    aNames.push(key);
};
var argument5 = "%M";
var argument6 = function (val, i) {
 callbackArguments.push(arguments) 

    if (!map[i])
        return '';
    return $type(val) == 'number' ? map[i].replace('@', Math.round(val)) : val;
};
var argument7 = r_3;
var base_0 = ["u",714]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u",714]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u",714]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test859.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)