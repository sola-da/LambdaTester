





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    var desc = webshims.defineNodeNameProperty(name, 'checkValidity', {
            prop: {
                value: function () {
                    isCheckValidity = true;
                    var ret = desc.prop._supvalue.apply(this, arguments);
                    isCheckValidity = false;
                    return ret;
                }
            }
        });
};
var argument2 = function (element) {
 callbackArguments.push(arguments) 

    if (element.nodeType === 1)
        children.push(element);
};
var argument3 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope] || [];
    for (var i = snippets.length; i--;) {
        var s = snippets[i];
        var caption = s.name || s.tabTrigger;
        if (!caption)
            continue;
        completions.push({
            caption: caption,
            snippet: s.content,
            meta: s.tabTrigger && !s.name ? s.tabTrigger + '\u21E5 ' : 'snippet',
            type: 'snippet'
        });
    }
};
var argument4 = function (subFold) {
 callbackArguments.push(arguments) 

    fold.restoreRange(subFold);
    this.addFold(subFold);
};
var argument5 = null;
var argument6 = 1.3356265704810275e+308;
var base_0 = [705,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test660.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)