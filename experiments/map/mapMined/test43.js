





var callbackArguments = [];
var argument1 = function (stx) {
 callbackArguments.push(arguments) 

    if (!stx.token) {
        return stx;
    }
    if (stx.token.inner) {
        return syntaxFromToken(stx.token, {
            deferredContext: applyContext(stx.deferredContext, self.deferredContext),
            context: applyContext(stx.context, self.deferredContext)
        });
    } else {
        return syntaxFromToken(stx.token, { context: applyContext(stx.context, self.deferredContext) });
    }
};
var argument2 = true;
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    item = path.join(root, item);
    return fs.statSync(item).isDirectory() ? getFiles(item) : item;
};
var argument4 = function (originalGroupId) {
 callbackArguments.push(arguments) 

    if (idMappings.groups[currentBatch][originalGroupId]) {
        return idMappings.groups[currentBatch][originalGroupId].generatedId;
    } else {
        console.log('    Warning: Could not map folder membership for group "%s"', originalGroupId);
        return originalGroupId;
    }
};
var argument5 = ["iB4",">B",627,242,607,"q;E","G",595,714];
var argument6 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument7 = true;
var argument8 = false;
var base_0 = [213,"qimm","K",82,595,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,"qimm","K",82,595,655]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test43.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)