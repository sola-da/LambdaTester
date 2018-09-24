





var callbackArguments = [];
var argument1 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument2 = 627;
var argument3 = "";
var argument4 = function (source) {
 callbackArguments.push(arguments) 

    return this.createContainer(source);
};
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument7 = function (text) {
 callbackArguments.push(arguments) 

    if (text.match(/application|__spec__|assets/)) {
        return '<span class=\'relevant\'>' + text + '</span>';
    } else {
        return text;
    }
};
var base_0 = ["E9D","`","2","B","{","[","b","zY6"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E9D","`","2","B","{","[","b","zY6"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E9D","`","2","B","{","[","b","zY6"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E9D","`","2","B","{","[","b","zY6"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test506.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)