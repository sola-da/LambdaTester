





var callbackArguments = [];
var argument1 = function (catData1) {
 callbackArguments.push(arguments) 

    createSeriesCategoryScene.call(me, serScene, catData1, serData1);
};
var argument2 = ["twf","7hd","In","p","geUE","F","M","Sg"];
var argument3 = function (f) {
 callbackArguments.push(arguments) 

    f.call(self);
};
var argument4 = null;
var argument5 = null;
var argument6 = function (fn) {
 callbackArguments.push(arguments) 

    try {
        fn(value);
    } catch (e) {
        $exceptionHandler(e);
    }
};
var argument7 = 3.6985111301903724e+307;
var argument8 = function (element) {
 callbackArguments.push(arguments) 

    if (result.length === 0)
        return result.push(element);
    else {
        if (element[column].valueOf() < result[0][column].valueOf()) {
            result.length = 0;
            return result.push(element);
        }
        if (element[column].valueOf() === result[0][column].valueOf()) {
            return result.push(element);
        }
    }
};
var base_0 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test582.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)