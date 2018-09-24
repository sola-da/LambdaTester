





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
var argument2 = [403,":",-100,"zq",126,";"];
var argument3 = function (color) {
 callbackArguments.push(arguments) 

    return {
        text: color,
        color: color
    };
};
var argument4 = null;
var argument5 = function (rev) {
 callbackArguments.push(arguments) 

    return quote(docId + '::' + rev);
};
var argument6 = true;
var argument7 = function (element) {
 callbackArguments.push(arguments) 

    return util.curry(mapper, element);
};
var argument8 = true;
var argument9 = null;
var base_0 = ["w>IWn","jL","JSr}"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["w>IWn","jL","JSr}"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["w>IWn","jL","JSr}"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test802.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)