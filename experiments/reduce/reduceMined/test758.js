





var callbackArguments = [];
var argument1 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable === true) {
        hash[r.name] = r;
    }
    if (r.message === 'Import' && r.root && r.root.variables) {
        var vars = r.root.variables();
        for (var name in vars) {
            if (vars.hasOwnProperty(name)) {
                hash[name] = vars[name];
            }
        }
    }
    return hash;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (acc, line) {
 callbackArguments.push(arguments) 

    var ind = '';
    while (ind.length < line.indent * 2) {
        ind += ' ';
    }
    return ind + line.str + '\n' + acc;
};
var argument5 = 1.430963878341383e+308;
var argument6 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return util.mergeObjects(acc, parent.queryParams);
};
var argument7 = r_0;
var argument8 = r_0;
var argument9 = function (acc, x) {
 callbackArguments.push(arguments) 

    if (acc === null) {
        return [
            x,
            opts,
            []
        ];
    } else {
        return [
            x,
            { status: 'missing' },
            [acc]
        ];
    }
};
var base_0 = ["V",126,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V",126,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V",126,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V",126,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test758.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)