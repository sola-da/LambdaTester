





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    fn.call(element, { preventDefault: noop });
};
var argument2 = function (ch) {
 callbackArguments.push(arguments) 

    frequency[ch] = 0;
};
var argument3 = function (name) {
 callbackArguments.push(arguments) 

    el.classList.add(name);
};
var argument4 = false;
var argument5 = function (f) {
 callbackArguments.push(arguments) 

    var segs = f.split('=');
    if (segs[0] === 'debug' && [
            'true',
            '1'
        ].indexOf(segs[1]) != -1) {
        $rootScope.debugMode = true;
    }
};
var argument6 = false;
var argument7 = true;
var base_0 = [705,157,823,1.7976931348623157e+308,"{",655,"d#2rd"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,157,823,1.7976931348623157e+308,"{",655,"d#2rd"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,157,823,1.7976931348623157e+308,"{",655,"d#2rd"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,157,823,1.7976931348623157e+308,"{",655,"d#2rd"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test275.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)