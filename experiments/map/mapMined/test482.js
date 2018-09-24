





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var elem = this, isWin = !elem.nodeName || $.inArray(elem.nodeName.toLowerCase(), [
            'iframe',
            '#document',
            'html',
            'body'
        ]) != -1;
    if (!isWin)
        return elem;
    var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
    return /webkit/i.test(navigator.userAgent) || doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;
};
var argument4 = function (originalGroupId) {
 callbackArguments.push(arguments) 

    if (idMappings['groups'][currentBatch][originalGroupId]) {
        return idMappings['groups'][currentBatch][originalGroupId].generatedId;
    } else {
        console.log('    Warning: Could not map content membership for user "%s"', originalGroupId);
        return originalGroupId;
    }
};
var argument5 = r_0;
var argument6 = function (n, i) {
 callbackArguments.push(arguments) 

    var $this = n.first(), attrOrdataL = $this.attr('href') !== undefined ? 'attr' : 'data';
    if (attrOrdataL !== 'data') {
        hashs1[i] = $this[attrOrdataL]('href');
        i++;
    } else if (attrOrdataL === 'data') {
        hashs2[j] = $this[attrOrdataL]('href');
        j++;
    }
};
var base_0 = [82,655,607,627,-1,595,157,242,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,655,607,627,-1,595,157,242,627]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,655,607,627,-1,595,157,242,627]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,655,607,627,-1,595,157,242,627]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test482.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)