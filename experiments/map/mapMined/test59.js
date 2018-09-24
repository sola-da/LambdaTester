





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = function (text) {
 callbackArguments.push(arguments) 

    var len = pv.Text.measureWidth(text, font);
    len > max && (max = len);
    return len;
};
var argument3 = true;
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    p = p.trim();
    if (p.match(/^org.couchdb.user/)) {
        return p.replace(/\//g, encodeURIComponent('/'));
    }
    return encodeURIComponent(p);
};
var argument5 = function (li, num) {
 callbackArguments.push(arguments) 

    return num !== index ? num : null;
};
var base_0 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test59.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)