





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || document.documentElement;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || document.documentElement;
};
var argument2 = function (v, i) {
 callbackArguments.push(arguments) 

    return v == null ? i > 2 ? 1 : 0 : v;
};
var argument3 = function convertToStrings(o) {
 callbackArguments.push(arguments) 

    return o.source ? o.source : o;
};
var argument4 = function (file) {
 callbackArguments.push(arguments) 

    expect(cacheStub.size()).to.be.equal(0);
    done();
};
var argument5 = null;
var argument6 = true;
var base_0 = ["y",655,403,"5t","}","kWO8Z"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y",655,403,"5t","}","kWO8Z"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test486.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)