





var callbackArguments = [];
var argument1 = function (result) {
 callbackArguments.push(arguments) 

    delete result._bulk_seq;
    if (result.error) {
        aresults.push(result);
        return;
    }
    var metadata = result.metadata;
    var rev = merge.winningRev(metadata);
    aresults.push({
        ok: true,
        id: metadata.id,
        rev: rev
    });
    if (utils.isLocalId(metadata.id)) {
        return;
    }
    docsWritten++;
    webSqlPouch.Changes.notify(name);
    webSqlPouch.Changes.notifyLocalWindows(name);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (val) {
 callbackArguments.push(arguments) 

    if (!hasOwn(opts, val)) {
        throw new Error(val + ' option is required');
    }
};
var argument5 = null;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    main_callback(true);
};
var argument7 = function (varName) {
 callbackArguments.push(arguments) 

    if (_.isString(localVars[varName])) {
        localVars[varName] = grunt.template.process(localVars[varName]);
    } else {
        localVars[varName] = JSON.stringify(localVars[varName]);
    }
    varRegExps[varName] = varRegExps[varName] || new RegExp(options.prefix + varName + options.suffix, 'g');
    contents = contents.replace(varRegExps[varName], localVars[varName]);
};
var argument8 = null;
var argument9 = false;
var base_0 = [823,"v","fG","_9",607,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"v","fG","_9",607,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"v","fG","_9",607,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"v","fG","_9",607,705]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test516.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)