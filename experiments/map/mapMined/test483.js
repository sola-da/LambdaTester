





var callbackArguments = [];
var argument1 = function (op) {
 callbackArguments.push(arguments) 

    if (Op.isInsert(op)) {
        return new InsertOp(op.value, op.attributes);
    } else if (Op.isRetain(op)) {
        return new RetainOp(op.start, op.end, op.attributes);
    } else {
        return null;
    }
};
var argument2 = true;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return zepto.qsa(this, selector);
};
var argument4 = function (touch) {
 callbackArguments.push(arguments) 

    var point = d3_mousePoint(container, touch);
    point.identifier = touch.identifier;
    return point;
};
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    return {
        tid: t.tid,
        price: t.px,
        date: t.unixtime,
        amount: t.qty
    };
};
var argument6 = null;
var argument7 = r_2;
var base_0 = [627,"T",82,-100,"["]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,"T",82,-100,"["]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,"T",82,-100,"["]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,"T",82,-100,"["]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test483.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)