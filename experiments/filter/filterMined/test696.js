





var callbackArguments = [];
var argument1 = function (edge) {
 callbackArguments.push(arguments) 

    var match = false;
    if (edge[self.source][id] == focus) {
        match = true;
        if (objects) {
            targets.push(edge[self.target]);
        }
    } else if (edge[self.target][id] == focus) {
        match = true;
        if (objects) {
            targets.push(edge[self.source]);
        }
    }
    return match;
};
var argument2 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument4 = "";
var argument5 = [627,100,783,25,595,607,655];
var argument6 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument7 = r_0;
var base_0 = [627,783,595,1.7976931348623157e+308,100,242]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,783,595,1.7976931348623157e+308,100,242]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,783,595,1.7976931348623157e+308,100,242]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test696.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)