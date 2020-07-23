  //   2. LRU缓存实现
  /**
  实现一个LRUCache对象
  它应该支持以下操作： 获取数据 get 和 写入数据 put 。
  
  获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
  写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；
  如果密钥不存在，则插入该组「密钥/数据值」。
  当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
  
  示例:
  **/
  const cache = new LRUCache( 2 );// 缓存容量
  
  
  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1);       // 返回  1
  cache.put(3, 3);    // 该操作会使得密钥 2 作废
  cache.get(2);       // 返回 -1 (未找到)
  cache.put(4, 4);    // 该操作会使得密钥 1 作废
  cache.get(1);       // 返回 -1 (未找到)
  cache.get(3);       // 返回  3
  cache.get(4);       // 返回  4
  
  
  /**
   * @param {number} capacity
   */
  var LRUCache = function(capacity) {
    this.length = capacity;
    this.datas = [];
  };
  
  /** 
   * @param {number} key
   * @return {number}
   */
  LRUCache.prototype.get = function(key) {
    const valueIndex = this.datas.findIndex(v=>Object.keys(v)[0]===key+"");
    if(valueIndex === -1) return -1;
    
    const value = this.datas[valueIndex][key];
    
    const newValue = {};
    newValue[key] = value;
    
    this.datas=[
        ...this.datas.filter((v,vIndex) => vIndex!==valueIndex),
      newValue
    ]
    
    return value;
    
  };
  
  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  LRUCache.prototype.put = function(key, value) {
    if(this.datas.length >= this.length){
        this.datas.shift();
    }
    this.datas.push({
      [key]:value
    })
  };
  
  /**
   * Your LRUCache object will be instantiated and called as such:
   * var obj = new LRUCache(capacity)
   * var param_1 = obj.get(key)
   * obj.put(key,value)
   */
  
  