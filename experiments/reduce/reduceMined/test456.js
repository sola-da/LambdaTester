





var callbackArguments = [];
var argument1 = function (p, sub) {
 callbackArguments.push(arguments) 

    return p.then(function () {
        reporter.log('Submodule: ' + sub.name);
        reporter.indent();
        var subConfig = JSON.parse(JSON.stringify(mite.config));
        subConfig = cliUtil.applySubmoduleToConfig(subConfig, sub);
        var m = new Mite(subConfig);
        return self._up(m).then(function () {
            console.log();
            reporter.outdent();
        });
    });
};
var argument2 = null;
var argument3 = false;
var argument4 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev && cur(entity);
};
var argument5 = null;
var argument6 = function (prev, el) {
 callbackArguments.push(arguments) 

    return make_node(AST_Binary, el[0], {
        operator: '+',
        left: prev,
        right: el[0]
    });
};
var argument7 = [25,82,783,595,-100,595,122,0,25,100];
var argument8 = {"0":"","59":"","242":1.5578072586887977e+308,"705":"","":"q","1.311163076234906e+308":"","1.1501150183513307e+307":""};
var argument9 = function (styles, str) {
 callbackArguments.push(arguments) 

    var name, value, _ref;
    _ref = str.split(':'), name = _ref[0], value = _ref[1];
    if (name && value) {
        name = name.trim();
        value = value.trim();
        styles[name.toLowerCase()] = value;
    }
    return styles;
};
var argument10 = null;
var base_0 = [595,893,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test456.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)