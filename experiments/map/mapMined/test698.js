





var callbackArguments = [];
var argument1 = function (delta) {
 callbackArguments.push(arguments) 

    return _.map(delta.ops, function (op) {
        if (op.value != null) {
            return op.value;
        } else {
            return '';
        }
    }).join('');
};
var argument2 = true;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x.charCodeAt(0);
};
var argument4 = "D";
var argument5 = function () {
 callbackArguments.push(arguments) 

    return $(this).outerWidth(true);
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return addName(d.values[i]);
};
var argument7 = null;
var base_0 = [783,49,-100,157,49,-1,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,49,-100,157,49,-1,100]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,49,-100,157,49,-1,100]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,49,-100,157,49,-1,100]
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
require("fs").writeFileSync("./experiments/map/mapMined/test698.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)