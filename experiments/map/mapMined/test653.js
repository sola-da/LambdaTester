





var callbackArguments = [];
var argument1 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument2 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: '\'' + val + '\'',
        token: 'text',
        next: function (stack) {
            stack.pop();
        }
    };
};
var argument3 = null;
var argument4 = r_0;
var argument5 = function (langPair) {
 callbackArguments.push(arguments) 

    langPair = langPair.split('=');
    return {
        name: langPair[0],
        value: langPair[1]
    };
};
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x * OIMO.INV_SCALE;
};
var argument7 = null;
var base_0 = [403,655,893,655,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,655,893,655,213]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,655,893,655,213]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,655,893,655,213]
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
require("fs").writeFileSync("./experiments/map/mapMined/test653.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)