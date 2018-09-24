





var callbackArguments = [];
var argument1 = function (template) {
 callbackArguments.push(arguments) 

    var title = mw.Title.newFromText(template, mw.config.get('wgNamespaceIds').template);
    if (title) {
        return title.getRelativeText(10);
    } else {
        return template;
    }
};
var argument2 = null;
var argument3 = true;
var argument4 = function (comp) {
 callbackArguments.push(arguments) 

    return pvc_PercentValue.parse(comp);
};
var argument5 = 0;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return {
        html: t,
        options: s,
        action: function (w) {
            u.call(v, w);
        }
    };
};
var argument7 = 126;
var argument8 = null;
var argument9 = function (x) {
 callbackArguments.push(arguments) 

    return x * OIMO.INV_SCALE;
};
var base_0 = ["yb","F"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yb","F"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yb","F"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yb","F"]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test451.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)