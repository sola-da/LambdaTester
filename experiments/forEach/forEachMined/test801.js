





var callbackArguments = [];
var argument1 = function (event) {
 callbackArguments.push(arguments) 

    SVG.Element.prototype[event] = function (f) {
        var self = this;
        this.node['on' + event] = typeof f == 'function' ? function () {
            return f.apply(self, arguments);
        } : null;
        return this;
    };
};
var argument2 = function (index, j) {
 callbackArguments.push(arguments) 

    indexes[j] = +index;
};
var argument3 = function (fn) {
 callbackArguments.push(arguments) 

    try {
        fn(value);
    } catch (e) {
        $exceptionHandler(e);
    }
};
var argument4 = 403;
var argument5 = "";
var argument6 = function (d, i) {
 callbackArguments.push(arguments) 

    d.sort(function (a, b) {
        return sortSubgroups(matrix[i][a], matrix[i][b]);
    });
};
var argument7 = null;
var base_0 = [705,-1,0,460,618,627,0,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,-1,0,460,618,627,0,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,-1,0,460,618,627,0,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,-1,0,460,618,627,0,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test801.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)