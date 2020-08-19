function fn1(){
    function fn2(){
        console.log(this)//window
    }
    var test = new fn2()
}
fn1()

