





var callbackArguments = [];
var argument1 = function (line) {
 callbackArguments.push(arguments) 

    if (args.side === 'left' || args.side === 'both') {
        line = line.replace(/^\s+/, '');
    }
    if (args.side === 'right' || args.side === 'both') {
        line = line.replace(/\s+$/, '');
    }
    return line;
};
var argument2 = null;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    tmp_args.push(key);
    tmp_args.push(args[1][key]);
};
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var base_0 = [59,100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,100,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,100,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test38.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)