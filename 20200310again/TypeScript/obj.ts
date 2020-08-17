// TypeScript对象
var sites = {
    site1: "hello",
    site2: "world"
}
var invokesites = function(obj: {site1: string, site2: string}) {
    console.log('site1', obj.site1)
    console.log('site2', obj.site2)
}
invokesites(sites)

export {}