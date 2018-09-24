





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return typeof e == 'string' ? e : e.join('');
};
var argument2 = null;
var argument3 = false;
var argument4 = function (comp) {
 callbackArguments.push(arguments) 

    return pvc_PercentValue.parse(comp);
};
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    return (isFunc ? method : value[method]).apply(value, args);
};
var argument6 = true;
var argument7 = {"1.7976931348623157e+308":242};
var argument8 = function () {
 callbackArguments.push(arguments) 

    var elems = [];
    walk(this, function (depth) {
        if (depth && this.nodeType == 1 && (!selector || $(this).is(selector))) {
            var arr = elems[depth] || (elems[depth] = []);
            arr.push(this);
        }
    });
    return elems.pop();
};
var base_0 = [595,627,595,-100,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,627,595,-100,627]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,627,595,-100,627]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,627,595,-100,627]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test870.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)