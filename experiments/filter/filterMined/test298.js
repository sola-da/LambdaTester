





var callbackArguments = [];
var argument1 = function (model) {
 callbackArguments.push(arguments) 

    if (model.matchesQuery) {
        return model.matchesQuery(query);
    } else {
        return this.model.prototype.attrsMatchQuery(model, this.model.prototype.queryAttrs, query);
    }
};
var argument2 = r_0;
var argument3 = false;
var argument4 = function (f) {
 callbackArguments.push(arguments) 

    return !!f;
};
var argument5 = null;
var argument6 = function (d, i) {
 callbackArguments.push(arguments) 

    return !i || angle[d] - angle[order[i - 1]] > ε;
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    return 'hidden' === e.css(this, 'visibility');
};
var argument8 = false;
var base_0 = ["O","n","O","!","|","k","Yo","2C","j"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","n","O","!","|","k","Yo","2C","j"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O","n","O","!","|","k","Yo","2C","j"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O","n","O","!","|","k","Yo","2C","j"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test298.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)