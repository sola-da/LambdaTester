





var callbackArguments = [];
var argument1 = function (node) {
 callbackArguments.push(arguments) 

    var data = support.getData(node, 'carousel');
    var action = typeof option === 'string' ? option : options.slide;
    if (!data) {
        support.setData(node, 'carousel', data = new Carousel(node, options));
    }
    if (typeof option === 'number') {
        data.to(option);
    } else if (action) {
        data[action].call(data);
    }
};
var argument2 = "";
var argument3 = [627,714,618,460,25,157,157];
var argument4 = function (np) {
 callbackArguments.push(arguments) 

    if (np.isScalar) {
        mergeRelatedEntityCore(mc, node, np);
    } else {
        mergeRelatedEntitiesCore(mc, node, np);
    }
};
var argument5 = false;
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    try {
        d.center();
        assert.ok(true);
    } catch (e) {
        assert.ok(false);
    }
    cluster.forEach(function (e) {
        if (d !== e) {
            assert.ok(spec.metric(d.center(), e.center()) > spec.clusterDistance);
        }
    });
    singlet.forEach(function (e) {
        assert.ok(spec.metric(d.center(), e) > spec.clusterDistance);
    });
};
var argument7 = false;
var argument8 = function (key) {
 callbackArguments.push(arguments) 

    traverse[key] = function (obj) {
        var args = [].slice.call(arguments, 1);
        var t = new Traverse(obj);
        return t[key].apply(t, args);
    };
};
var argument9 = false;
var base_0 = [49,"p"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"p"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"p"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"p"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test20.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)