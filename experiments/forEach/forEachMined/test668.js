





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (String($this.options[key]).indexOf('{prefix}') != -1) {
        $this.options[key] = $this.options[key].replace('{prefix}', $this.options.prefix);
    }
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    stream.end();
    that.callback();
};
var argument3 = 9.3122177168595e+307;
var argument4 = function (co) {
 callbackArguments.push(arguments) 

    clearOriginalValues(co);
};
var argument5 = false;
var argument6 = function (propName) {
 callbackArguments.push(arguments) 

    target[propName] = source[propName];
};
var argument7 = false;
var argument8 = ["*R@","]n","3",")","e"];
var base_0 = [714,969,893,618,242,0,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,969,893,618,242,0,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,969,893,618,242,0,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,969,893,618,242,0,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test668.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)