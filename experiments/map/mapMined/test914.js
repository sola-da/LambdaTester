





var callbackArguments = [];
var argument1 = function (hit) {
 callbackArguments.push(arguments) 

    return hit._source;
};
var argument2 = function (t, prop) {
 callbackArguments.push(arguments) 

    var filter = Attachments.filters[prop], term = model.get(prop);
    if (!filter)
        return;
    if (term && !this.filters[prop])
        this.filters[prop] = filter;
    else if (!term && this.filters[prop] === filter)
        delete this.filters[prop];
    else
        return;
    return true;
};
var argument3 = ["]","dh"];
var argument4 = function (i) {
 callbackArguments.push(arguments) 

    return 'a' + i;
};
var argument5 = false;
var argument6 = r_2;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var base_0 = ["od","WH0,^Yj",122,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["od","WH0,^Yj",122,618]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["od","WH0,^Yj",122,618]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test914.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)