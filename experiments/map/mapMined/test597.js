





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    return '' + deferName + '.' + prop;
};
var argument2 = "e1v";
var argument3 = 49;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return item.reduce(function (model, val, i) {
        model[headers[i]] = val;
        return model;
    }, {});
};
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument6 = null;
var argument7 = function (row) {
 callbackArguments.push(arguments) 

    return that.render(content, that.create_context(row), partials, true);
};
var argument8 = null;
var base_0 = [714,-1,213,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,-1,213,49]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,-1,213,49]
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
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test597.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)