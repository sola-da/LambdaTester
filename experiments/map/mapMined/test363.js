





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    if (!v.sentence) {
        v.sentence = v.name + ' is related to ' + result.name;
    }
    return v;
};
var argument2 = null;
var argument3 = true;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return extend({}, item, { isActive: item.id === options.hash.active });
};
var argument5 = function (e, t) {
 callbackArguments.push(arguments) 

    return [[
            t,
            e
        ]];
};
var argument6 = 5.924464067909098e+307;
var argument7 = function (color) {
 callbackArguments.push(arguments) 

    return {
        text: color,
        color: color
    };
};
var argument8 = "o";
var argument9 = 618;
var base_0 = [655,783,460,969,655,100,213,969,82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,783,460,969,655,100,213,969,82]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,783,460,969,655,100,213,969,82]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,783,460,969,655,100,213,969,82]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test363.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)