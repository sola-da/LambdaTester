





var callbackArguments = [];
var argument1 = function (token) {
 callbackArguments.push(arguments) 

    if (token.inner) {
        token.inner = tokensToSyntax(token.inner);
    }
    return syntaxFromToken(token);
};
var argument2 = r_0;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    return this[key];
};
var argument4 = "";
var argument5 = [126,969,893,893,5e-324,0,1.7976931348623157e+308];
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return { id: item.id };
};
var argument7 = false;
var argument8 = r_0;
var argument9 = function (stx) {
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
var argument10 = ["od",-100,783,"2"];
var argument11 = null;
var base_0 = [595,242,"*","60,1",100,5e-324,";",242,1.7976931348623157e+308,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,242,"*","60,1",100,5e-324,";",242,1.7976931348623157e+308,823]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test90.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)