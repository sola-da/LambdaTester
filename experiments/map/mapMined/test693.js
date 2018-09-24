





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return c.name;
};
var argument2 = 1.2987880759285326e+308;
var argument3 = {"157":"","705":"","823":242,"1.279695832470261e+308":"","":"","9.630212157563758e+307":607,"1.4210689857972175e+308":3.9799820854720077e+307,"$":",'AF","5.345536249807961e+307":1.3941159821079587e+308};
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    r.objectId = r._id;
    _.omit(r, '_id');
    return r;
};
var argument5 = true;
var argument6 = true;
var argument7 = function (i) {
 callbackArguments.push(arguments) 

    return 'this._stride' + i + '*i' + i;
};
var argument8 = r_0;
var argument9 = null;
var argument10 = function (x, callback) {
 callbackArguments.push(arguments) 

    iterator(x, function (err, criteria) {
        if (err) {
            callback(err);
        } else {
            callback(null, {
                value: x,
                criteria: criteria
            });
        }
    });
};
var argument11 = true;
var base_0 = [460,157,126]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test693.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)