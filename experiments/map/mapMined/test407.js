





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    return v == null ? i > 2 ? 1 : 0 : v;
};
var argument2 = true;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x.value || x;
};
var argument4 = true;
var argument5 = r_0;
var argument6 = function (op) {
 callbackArguments.push(arguments) 

    if (Op.isInsert(op)) {
        return new InsertOp(op.value, op.attributes);
    } else if (Op.isRetain(op)) {
        return new RetainOp(op.start, op.end, op.attributes);
    } else {
        return null;
    }
};
var argument7 = true;
var argument8 = function Q_allSettled_each(promise) {
 callbackArguments.push(arguments) 

    promise = Q(promise);
    function regardless() {
        return promise.inspect();
    }
    return promise.then(regardless, regardless);
};
var argument9 = true;
var argument10 = true;
var base_0 = ["2",-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2",-100]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test407.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)