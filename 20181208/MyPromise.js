class MyPromise {
    constructor(exector){
        this.status = 'pending';
        this.value = '';
        this.reason = '';
        //成功的回调
        this.onResolvedCallBacks = [];
        //失败的回调
        this.onRejectedCallBacks = [];
        let resolve = value =>{
            if(this.status=='pending'){
                this.value = value;
                this.status = 'resolved';
                this.onResolvedCallBacks.forEach(fn=>fn());
            }
        }
        let reject = reason => {
            if(this.status=='pending'){
                this.reason = reason;
                this.status = 'rejected';
                this.onRejectedCallBacks.forEach(fn=>fn());
            }
        }
        try {
            exector(resolve, reject);
        }catch(e){
            reject(e);
        }
    }

    then(onFufiled, onRejected){
        if(this.status=='resolved'){
            return new Promise((r,j)=>{
                let x = onFufiled(this.value);
                if(x instanceof MyPromise){
                    x.then(r,j);
                }else {
                    r(x);
                }
            })
            
        }
        if(this.status=='rejected'){
            onRejected(this.reason);
        }
        if(this.status=='pending'){
            this.onResolvedCallBacks.push(()=>{
                onFufiled(this.value);
            });
            this.onRejectedCallBacks.push(()=>{
                onRejected(this.reason);
            })
        }
    }

}

//exports = module.exports

module.exports = MyPromise;



