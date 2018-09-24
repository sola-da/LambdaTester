





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    r.objectId = r._id;
    _.omit(r, '_id');
    return r;
};
var argument2 = false;
var argument3 = function (result) {
 callbackArguments.push(arguments) 

    result = normalize.call(this.document, result);
    if (result == null)
        return null;
    if (!isChildNode(result))
        result = makeElement.call(this.document, childName, result);
    return result;
};
var argument4 = {"157":"G","823":6.415799832835954e+307,"7.877436048858205e+307":1.5581547027328272e+308,"9.85940802023135e+307":126,"i95":"S+p","Apo":9.051335159139241e+307,"K":5.094771876806349e+307,"-1":460,"1.7225810522066861e+308":"","TD":"n"};
var argument5 = false;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    var curr = new ChainObservable(x);
    chain && chain.onNext(x);
    chain = curr;
    return curr;
};
var argument7 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument8 = false;
var argument9 = true;
var base_0 = [213,595,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,595,213]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,595,213]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,595,213]
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
require("fs").writeFileSync("./experiments/map/mapMined/test353.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)