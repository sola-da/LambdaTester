





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    require('./' + path.basename(file))(app);
};
var argument2 = null;
var argument3 = function (m) {
 callbackArguments.push(arguments) 

    if (!(m in vars)) {
        vars[m] = {};
    }
    vars[m] = d3plus.object.merge(d3plus.method[m], vars[m]);
    if (styles.indexOf(m) >= 0) {
        vars[m] = d3plus.object.merge(initStyle[m], vars[m]);
        styles.splice(styles.indexOf(m), 1);
    }
    d3plus.method.init(vars, vars[m], m);
    vars.self[m] = d3plus.method.function(m, vars);
};
var argument4 = function (obj) {
 callbackArguments.push(arguments) 

    if (obj !== dst && _.isObject(obj)) {
        for (var key in obj) {
            if (!_defineAccessor(dst, obj, key)) {
                dst[key] = _deepClone(obj[key], _extendWithGetSet);
            }
        }
    }
};
var argument5 = ["s","Z<","dp","L","0`{","-"];
var argument6 = function (n) {
 callbackArguments.push(arguments) 

    dojo.toggleClass(n, 'dojoxGridSubRowAlt', alt);
    dojo.attr(n, 'dojoxTreeGridBaseClasses', n.className);
    alt = !alt;
    self.grid.rows.styleRowNode(dojo.attr(n, 'dojoxTreeGridPath'), n);
};
var base_0 = [607,242,126,893,49,126]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242,126,893,49,126]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242,126,893,49,126]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242,126,893,49,126]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test328.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)