





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return item['rows'];
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument4 = false;
var argument5 = function (value, index, list) {
 callbackArguments.push(arguments) 

    return !predicate.call(context, value, index, list);
};
var argument6 = function (model) {
 callbackArguments.push(arguments) 

    if (model.matchesQuery) {
        return model.matchesQuery(query);
    } else {
        return this.model.prototype.attrsMatchQuery(model, this.model.prototype.queryAttrs, query);
    }
};
var argument7 = r_0;
var argument8 = "KP";
var base_0 = [783,969,783,126,655,100,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,969,783,126,655,100,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test677.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)