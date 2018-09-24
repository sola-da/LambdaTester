





var callbackArguments = [];
var argument1 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument2 = function (p) {
 callbackArguments.push(arguments) 

    if (p === property) {
        return newValue;
    } else {
        return parent.getProperty(p.name);
    }
};
var argument3 = {"783":"Q","969":1.668843712902519e+308,"1.0689775630670688e+308":"!","":"5"};
var argument4 = true;
var argument5 = function (stx) {
 callbackArguments.push(arguments) 

    if (stx.token.inner) {
        stx.token.inner = syntaxToTokens(stx.token.inner);
    }
    return stx.token;
};
var argument6 = null;
var argument7 = function () {
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
var argument8 = null;
var base_0 = ["9i,G`xV","&","A","&","+$r","H","+8","9","M"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9i,G`xV","&","A","&","+$r","H","+8","9","M"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9i,G`xV","&","A","&","+$r","H","+8","9","M"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9i,G`xV","&","A","&","+$r","H","+8","9","M"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test738.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)