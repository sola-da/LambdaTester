





var callbackArguments = [];
var argument1 = function (itemA) {
 callbackArguments.push(arguments) 

    var matcher, findMatch, items;
    matcher = {};
    matcher[idProp] = itemA[idProp];
    findMatch = partial(findWhere, matcher);
    items = [
        {},
        itemA
    ].concat(collections.map(findMatch));
    return merge.apply(null, items);
};
var argument2 = function (template) {
 callbackArguments.push(arguments) 

    var title = mw.Title.newFromText(template, mw.config.get('wgNamespaceIds').template);
    if (title) {
        return title.getRelativeText(10);
    } else {
        return template;
    }
};
var argument3 = true;
var argument4 = false;
var argument5 = function (dimName) {
 callbackArguments.push(arguments) 

    return atoms[dimName].key;
};
var argument6 = 0;
var argument7 = function () {
 callbackArguments.push(arguments) 

    i++;
};
var argument8 = [893,893,843,893,705,460,714,-1,705];
var argument9 = {"122":"#L","]":714,"3.171163362332665e+307":"","":5.1690061248226e+306,",":1.7830572182693232e+308};
var base_0 = [705,242,823,655,783,1.7976931348623157e+308,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,242,823,655,783,1.7976931348623157e+308,618]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,242,823,655,783,1.7976931348623157e+308,618]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,242,823,655,783,1.7976931348623157e+308,618]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test261.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)