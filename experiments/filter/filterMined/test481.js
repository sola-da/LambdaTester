





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d[vars.id.value] === id;
};
var argument2 = true;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < self.length; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = function (doclet) {
 callbackArguments.push(arguments) 

    return !isModuleFunction(doclet);
};
var argument6 = [157,25,893,627,126,1.7976931348623157e+308,705,49,893];
var argument7 = null;
var argument8 = function () {
 callbackArguments.push(arguments) 

    return this.selected;
};
var base_0 = ["1","x","d","5m","2","E"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","x","d","5m","2","E"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","x","d","5m","2","E"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","x","d","5m","2","E"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test481.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)