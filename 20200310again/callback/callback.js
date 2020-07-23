// 回调地狱
function a () {
    doSomeThing1()
    doSomeThing2()
    ajax(url, (data, err)=> {
        if (err) {return}
        function b (data) {
            doSomeThing3()
            ajax(url2, (data2, err2)=> {
                if (err2) {return}
                function c (data2) {
                    doSomeThing4()
                    function d (data2) {
                        return data2
                    }
                }
            })
            doSomeThing5()
            doSomeThing6()
        }     
    })
}