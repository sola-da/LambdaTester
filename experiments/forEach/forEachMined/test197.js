





var callbackArguments = [];
var argument1 = function (propName) {
 callbackArguments.push(arguments) 

    target[propName] = source[propName];
};
var argument2 = function (key, node) {
 callbackArguments.push(arguments) 

    console.log(node.layoutData);
};
var argument3 = null;
var argument4 = function (func) {
 callbackArguments.push(arguments) 

    func(api);
};
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    if (typeof t === 'string') {
        if (t[0] === '\n') {
            column = t.length - 1;
            row++;
        } else
            column += t.length;
        text += t;
    } else {
        if (!t.start)
            t.start = {
                row: row,
                column: column
            };
        else
            t.end = {
                row: row,
                column: column
            };
    }
};
var argument6 = true;
var argument7 = true;
var base_0 = [242,1.7976931348623157e+308,25,213,126,969,5e-324,655,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,1.7976931348623157e+308,25,213,126,969,5e-324,655,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,1.7976931348623157e+308,25,213,126,969,5e-324,655,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,1.7976931348623157e+308,25,213,126,969,5e-324,655,242]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test197.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)