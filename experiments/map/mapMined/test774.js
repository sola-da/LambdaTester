





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    if (typeof item === 'string') {
        return {
            label: item,
            value: item
        };
    }
    return $.extend({
        label: item.label || item.value,
        value: item.value || item.label
    }, item);
};
var argument2 = null;
var argument3 = false;
var argument4 = function (edge) {
 callbackArguments.push(arguments) 

    return edge.to;
};
var argument5 = function (word) {
 callbackArguments.push(arguments) 

    return {
        caption: word,
        value: word,
        score: wordScore[word],
        meta: 'local'
    };
};
var argument6 = false;
var argument7 = function (zone) {
 callbackArguments.push(arguments) 

    return _.extend(zone.$, { name: zone._ });
};
var base_0 = ["V","{","7","P","Y 1"]
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
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test774.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)