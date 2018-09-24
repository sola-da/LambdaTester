





var callbackArguments = [];
var argument1 = function (color) {
 callbackArguments.push(arguments) 

    return {
        text: color,
        color: color
    };
};
var argument2 = true;
var argument3 = 5.511526906682539e+307;
var argument4 = function (model) {
 callbackArguments.push(arguments) 

    return model.get(attr);
};
var argument5 = 2.8650161162404125e+307;
var argument6 = function (err, results) {
 callbackArguments.push(arguments) 

    if (err) {
        return callback(err);
    } else {
        var fn = function (left, right) {
            var a = left.criteria, b = right.criteria;
            return a < b ? -1 : a > b ? 1 : 0;
        };
        callback(null, _map(results.sort(fn), function (x) {
            return x.value;
        }));
    }
};
var argument7 = null;
var argument8 = ["j","fw",714,-100,0];
var argument9 = function (evt) {
 callbackArguments.push(arguments) 

    return evt + '.webshimspolyfill';
};
var argument10 = true;
var argument11 = r_2;
var base_0 = ["bq","33","=p"]
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
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bq","33","=p"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test236.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)