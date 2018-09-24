





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    if (_.has(JSHINT.blacklist, name))
        return;
    dest[name] = src[name];
};
var argument2 = true;
var argument3 = function (ref) {
 callbackArguments.push(arguments) 

    var decl = util.getDeclaration(ref, scope), identifier = ref.identifier, name = identifier.name, defs;
    if (decl && (defs = decl.defs).length && identifier.range[0] < defs[0].node.range[0]) {
        var defType = defs[0].message;
        if (!flag_funcs && defType === 'FunctionName' || !flag_vars && defType === 'Variable') {
            return;
        }
        context.report(identifier, '\'${0}\' was used before it was defined.', { 0: name });
    }
};
var argument4 = function (l) {
 callbackArguments.push(arguments) 

    log4jsLevels.push(log4js.levels.toLevel(l));
};
var argument5 = "a";
var argument6 = r_1;
var argument7 = function (n) {
 callbackArguments.push(arguments) 

    dojo.toggleClass(n, 'dojoxGridSubRowAlt', alt);
    dojo.attr(n, 'dojoxTreeGridBaseClasses', n.className);
    alt = !alt;
    self.grid.rows.styleRowNode(dojo.attr(n, 'dojoxTreeGridPath'), n);
};
var base_0 = ["<","C:]M","sW","x","?","<","wDq"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","C:]M","sW","x","?","<","wDq"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","C:]M","sW","x","?","<","wDq"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","C:]M","sW","x","?","<","wDq"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test853.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)