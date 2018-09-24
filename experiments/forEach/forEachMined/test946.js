





var callbackArguments = [];
var argument1 = function (viewName) {
 callbackArguments.push(arguments) 

    var fullViewName = ddocName + '/' + viewName;
    if (!metaDoc.views[fullViewName]) {
        fullViewName = viewName;
    }
    var viewDBNames = Object.keys(metaDoc.views[fullViewName]);
    var statusIsGood = row.doc && row.doc.views && row.doc.views[viewName];
    viewDBNames.forEach(function (viewDBName) {
        viewsToStatus[viewDBName] = viewsToStatus[viewDBName] || statusIsGood;
    });
};
var argument2 = true;
var argument3 = [213,49,0,403];
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    self.on(method, p, route);
};
var argument5 = 1.75679541793342e+307;
var argument6 = function (resp) {
 callbackArguments.push(arguments) 

    if (resp.error)
        return resp.error(err);
};
var argument7 = {"":1.7412203214946485e+307,"1.4250811791542279e+308":"","gg":"j9"};
var argument8 = r_0;
var argument9 = function (m) {
 callbackArguments.push(arguments) 

    theme = this.addMixin(theme, elementType, m);
};
var argument10 = "h";
var base_0 = [705,1.7976931348623157e+308,122,157,714,1.7976931348623157e+308,893,714,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,1.7976931348623157e+308,122,157,714,1.7976931348623157e+308,893,714,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,1.7976931348623157e+308,122,157,714,1.7976931348623157e+308,893,714,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,1.7976931348623157e+308,122,157,714,1.7976931348623157e+308,893,714,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test946.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)