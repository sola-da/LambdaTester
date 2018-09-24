





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
var argument2 = function (i, el) {
 callbackArguments.push(arguments) 

    row = el.parentNode._DT_RowIndex;
    return {
        row: row,
        column: $.inArray(el, data[row].anCells)
    };
};
var argument3 = true;
var argument4 = function (a) {
 callbackArguments.push(arguments) 

    return jQuery.find(t, a);
};
var argument5 = "c";
var argument6 = 1.360504603159235e+308;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    return e.eval(env);
};
var base_0 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test10.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)