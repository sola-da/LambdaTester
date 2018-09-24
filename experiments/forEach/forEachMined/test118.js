





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    var s = child.domStyles;
    s['-webkit-box-sizing'] = 'border-box';
    s.margin = 0;
    s.position = 'absolute';
    if (child.size !== undefined) {
        s.height = child.size + 'px';
    }
};
var argument2 = null;
var argument3 = function (child) {
 callbackArguments.push(arguments) 

    currentChildren._push(child);
};
var argument4 = [595,"q",627,59,627,893,655,"I"];
var argument5 = function (st) {
 callbackArguments.push(arguments) 

    st._addPropertyCore(new DataProperty(newProp));
};
var argument6 = true;
var argument7 = null;
var argument8 = function (k, callback) {
 callbackArguments.push(arguments) 

    tasks[k](function (err) {
        var args = Array.prototype.slice.call(arguments, 1);
        if (args.length <= 1) {
            args = args[0];
        }
        results[k] = args;
        callback(err);
    });
};
var argument9 = "E";
var base_0 = [100,-100,59,126,213,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-100,59,126,213,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-100,59,126,213,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-100,59,126,213,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test118.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)