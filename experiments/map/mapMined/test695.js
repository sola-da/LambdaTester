





var callbackArguments = [];
var argument1 = function (originalUserId) {
 callbackArguments.push(arguments) 

    if (idMappings['groups'][currentBatch][originalUserId]) {
        return idMappings['groups'][currentBatch][originalUserId].generatedId;
    } else {
        console.log('    Warning: Could not map discussions membership for group "%s"', originalUserId);
        return originalUserId;
    }
};
var argument2 = null;
var argument3 = null;
var argument4 = function (i) {
 callbackArguments.push(arguments) 

    return 'a' + i + '=this._shape' + i;
};
var argument5 = {};
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    if (typeof x[0] != 'string')
        x[0] = x[0].name;
    if (!x[1])
        x = x[0];
    return x;
};
var argument7 = false;
var argument8 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument9 = r_2;
var base_0 = [82,100,25]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,100,25]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,100,25]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test695.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)