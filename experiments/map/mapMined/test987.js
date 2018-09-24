





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    var data = d.__data__;
    return data.data ? data.data : data;
};
var argument2 = function (v, i) {
 callbackArguments.push(arguments) 

    if (v == null) {
        v = i > 2 ? 1 : 0;
    }
    if (i && i < 3) {
        v = Math.round(v * 100) + '%';
    }
    return v;
};
var argument3 = function (patch) {
 callbackArguments.push(arguments) 

    return {
        oldCharacters: patch.newCharacters,
        oldRange: patch.newRange,
        newCharacters: patch.oldCharacters,
        newRange: patch.oldRange
    };
};
var argument4 = true;
var argument5 = function (el) {
 callbackArguments.push(arguments) 

    return el[property];
};
var base_0 = [969,1.7976931348623157e+308,460,122,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,1.7976931348623157e+308,460,122,823]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,1.7976931348623157e+308,460,122,823]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test987.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)