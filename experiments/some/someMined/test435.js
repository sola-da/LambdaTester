





var callbackArguments = [];
var argument1 = function cb_some(pair) {
 callbackArguments.push(arguments) 

    return pair[0] === 'Dispatcher' && pair[1] === 'express';
};
var argument2 = function (prop) {
 callbackArguments.push(arguments) 

    nextValue = nextValue.getProperty(prop);
    return nextValue == null;
};
var argument3 = function (cachingLayer) {
 callbackArguments.push(arguments) 

    if (features.some(function (feature) {
            return feature.name === cachingLayer;
        })) {
        features.local = RemoteStorage[cachingLayer];
        return true;
    }
};
var argument4 = "";
var argument5 = [82,627,823,403,969,126,25];
var argument6 = function (colObj) {
 callbackArguments.push(arguments) 

    return !!colObj.name.match(/\.col1$/);
};
var argument7 = null;
var base_0 = [0,627,"(",5e-324,";",1.7976931348623157e+308,59,"w","L",122]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,627,"(",5e-324,";",1.7976931348623157e+308,59,"w","L",122]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,627,"(",5e-324,";",1.7976931348623157e+308,59,"w","L",122]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,627,"(",5e-324,";",1.7976931348623157e+308,59,"w","L",122]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test435.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)