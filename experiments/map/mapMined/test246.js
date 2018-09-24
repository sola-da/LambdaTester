





var callbackArguments = [];
var argument1 = function (stx) {
 callbackArguments.push(arguments) 

    var o = syntaxFromToken(_.clone(stx.token), stx);
    if (o.token.message === parser.Token.Delimiter) {
        o.token.inner = cloneSyntaxArray(o.token.inner);
    }
    return o;
};
var argument2 = false;
var argument3 = false;
var argument4 = function (result) {
 callbackArguments.push(arguments) 

    result = normalize.call(this.document, result);
    if (result == null)
        return null;
    if (!isChildNode(result))
        result = makeElement.call(this.document, childName, result);
    return result;
};
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument7 = null;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    return item[methodName].apply(item, args);
};
var argument9 = null;
var base_0 = [82,893,460,82,157,893,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,893,460,82,157,893,213]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,893,460,82,157,893,213]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,893,460,82,157,893,213]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test246.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)