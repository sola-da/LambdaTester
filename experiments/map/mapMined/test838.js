





var callbackArguments = [];
var argument1 = function (obj1) {
 callbackArguments.push(arguments) 

    return _.find(array2, function (obj2) {
        if (comparison != null) {
            return comparison(obj1, obj2);
        } else {
            return _.isEqual(obj1, obj2);
        }
    });
};
var argument2 = true;
var argument3 = function (val, i) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val
    };
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument5 = r_2;
var argument6 = 2.805713293545061e+307;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return [
        d.x,
        d.y
    ];
};
var base_0 = [157,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,-1]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,-1]
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
require("fs").writeFileSync("./experiments/map/mapMined/test838.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)