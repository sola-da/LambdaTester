





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    return s.level;
};
var argument2 = 714;
var argument3 = [0,655,-1,1.7976931348623157e+308,25,49];
var argument4 = function (err, results) {
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
var argument5 = function (color) {
 callbackArguments.push(arguments) 

    return {
        text: color,
        color: color
    };
};
var argument6 = true;
var argument7 = function (opt) {
 callbackArguments.push(arguments) 

    return opt.value;
};
var argument8 = null;
var argument9 = [25,843,82,126,126,25,1.7976931348623157e+308];
var base_0 = [0,122,157,1.7976931348623157e+308,100]
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
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test530.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)