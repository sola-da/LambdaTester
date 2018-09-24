





var callbackArguments = [];
var argument1 = function (touch) {
 callbackArguments.push(arguments) 

    var point = d3_svg_mousePoint(container, touch);
    point.identifier = touch.identifier;
    return point;
};
var argument2 = true;
var argument3 = function (el, i) {
 callbackArguments.push(arguments) 

    return el.nTable;
};
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    p = p.trim();
    if (p.match(/^org.couchdb.user/)) {
        return p.replace(/\//g, encodeURIComponent('/'));
    }
    return encodeURIComponent(p);
};
var argument5 = r_2;
var argument6 = 705;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x.rev;
};
var argument8 = false;
var argument9 = "";
var base_0 = [843,618,607,0,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,618,607,0,242]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,618,607,0,242]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test800.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)