





var callbackArguments = [];
var argument1 = function (tab) {
 callbackArguments.push(arguments) 

    return lis.index(tab);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument3 = true;
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return this.contentDocument || a.call(this.childNodes);
};
var argument6 = null;
var argument7 = true;
var argument8 = function (m) {
 callbackArguments.push(arguments) 

    return m.principalId;
};
var argument9 = "";
var base_0 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test887.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)