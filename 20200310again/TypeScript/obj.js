"use strict";
exports.__esModule = true;
// TypeScript对象
var sites = {
    site1: "hello",
    site2: "world"
};
var invokesites = function (obj) {
    console.log('site1', obj.site1);
    console.log('site2', obj.site2);
};
invokesites(sites);
