





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument2 = null;
var argument3 = ["B&",893,"o",82,"]N#:","p",627];
var argument4 = function (text) {
 callbackArguments.push(arguments) 

    if (text.match(/application|__spec__|assets/)) {
        return '<span class=\'relevant\'>' + text + '</span>';
    } else {
        return text;
    }
};
var argument5 = 607;
var argument6 = false;
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    return lang.getObject(name);
};
var argument8 = function (i) {
 callbackArguments.push(arguments) 

    return 'c' + i + '=this._stride' + i;
};
var argument9 = {"":5.491558326533119e+307};
var argument10 = null;
var base_0 = [595,122,82,893,618,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,122,82,893,618,783]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,122,82,893,618,783]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test804.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)