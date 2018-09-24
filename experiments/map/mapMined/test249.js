





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return c.toString();
};
var argument2 = function (value) {
 callbackArguments.push(arguments) 

    if (value instanceof BigNumber) {
        asBigNumber = true;
        value = value.toNumber();
    }
    if (!isNumber(value) || !isInteger(value) || value < 0) {
        throw new Error('Parameters in function eye must be positive integers');
    }
    return value;
};
var argument3 = [100,59,59,25,49,893,213];
var argument4 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var base_0 = [783,823,714,122,122,823,607,595]
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
var base_2 = [783,823,714,122,122,823,607,595]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test249.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)