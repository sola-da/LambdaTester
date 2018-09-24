





var callbackArguments = [];
var argument1 = function cb_forEach(rule) {
 callbackArguments.push(arguments) 

    if (!rule.pattern) {
        return logger.error({ rule: rule }, 'Simple naming rules require a pattern.');
    }
    if (!rule.name) {
        return logger.error({ rule: rule }, 'Simple naming rules require a replacement name.');
    }
    this.addSimple(rule.pattern, rule.name);
};
var argument2 = function (prop) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesProperty(nodeNames, prop, {
        prop: {
            set: function (val) {
                $.attr(this, prop, val);
            },
            get: function () {
                return $.attr(this, prop) || '';
            }
        }
    });
};
var argument3 = function (cItm, idx) {
 callbackArguments.push(arguments) 

    var nToggle = tcJoin.split('|');
    nToggle.push(nToggle[nToggle.length - 1] + '-' + idx);
    iStack.push(idx);
    createRow(nextLevel, cItm, false, nToggle, iStack, parentOpen);
    iStack.pop();
};
var argument4 = "";
var argument5 = function (value, key) {
 callbackArguments.push(arguments) 

    if (key == 'class') {
        safeAddClass($element, value);
        dst['class'] = (dst['class'] ? dst['class'] + ' ' : '') + value;
    } else if (key == 'style') {
        $element.attr('style', $element.attr('style') + ';' + value);
    } else if (key.charAt(0) != '$' && !dst.hasOwnProperty(key)) {
        dst[key] = value;
        dstAttr[key] = srcAttr[key];
    }
};
var base_0 = ["*yjP","h","gXL","Jx","5","75A","o["]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*yjP","h","gXL","Jx","5","75A","o["]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*yjP","h","gXL","Jx","5","75A","o["]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*yjP","h","gXL","Jx","5","75A","o["]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test264.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)