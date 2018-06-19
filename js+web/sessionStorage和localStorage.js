/**
 * @file 基于localstorage实现的前端存储
 * @date 2018/04/30
 * @author houzhiqiang@gmail.com
 */


// sessionstorage
// 1.在当前的tab存储的数据在新打开的tab中不可以访问
// 2.在当前窗口新建的窗口中也无法访问

// 原因：js是单线程的。新开的tab和新创建的窗口相当于新创建了一个线程会话信息会重新初始化；

// localStorage

// 1.在新开的tab和新创建的窗口中如果不跨域都是可以访问的到。（数据存储在本地的磁盘）






// 1MB 的缓存系统  ，实现key的淘汰机制

class Store {
    constructor() {
      let store = localStorage.getItem('cache')
      if (!store) {
        store = {
          maxSize: 1024 * 1024,
          size: 0
        }
        this.store = store
      } else {
        this.store = JSON.parse(store)
      }
    }
    set(key, value, expire) {
      this.store[key] = {
        date: Date.now(),
        expire,
        value
      }
      let size = this.sizeOf(JSON.stringify(this.store[key]))
      if (this.store.maxSize < size + this.store.size) {
        console.log('超了-----------');
        var keys = Object.keys(this.store);
        // 时间排序
        keys = keys.sort((a, b) => {
          let item1 = this.store[a], item2 = this.store[b];
          return item2.date - item1.date;
        });
        while (size + this.store.size > this.store.maxSize) {
          let index = keys[keys.length - 1]
          this.store.size -= this.sizeOf(JSON.stringify(this.store[index]))
          delete this.store[index]
        }
      }
      this.store.size += size

      localStorage.setItem('cache', JSON.stringify(this.store))
    }
    get(key) {
      let d = this.store[key]
      if (!d) {
        console.log('找不到该属性');
        return
      }
      if (d.expire > Date.now) {
        console.log('过期删除');
        delete this.store[key]
        localStorage.setItem('cache', JSON.stringify(this.store))
      } else {
        return d.value
      }
    }
    sizeOf(str, charset) {
      var total = 0,
        charCode,
        i,
        len;
      charset = charset ? charset.toLowerCase() : '';
      if (charset === 'utf-16' || charset === 'utf16') {
        for (i = 0, len = str.length; i < len; i++) {
          charCode = str.charCodeAt(i);
          if (charCode <= 0xffff) {
            total += 2;
          } else {
            total += 4;
          }
        }
      } else {
        for (i = 0, len = str.length; i < len; i++) {
          charCode = str.charCodeAt(i);
          if (charCode <= 0x007f) {
            total += 1;
          } else if (charCode <= 0x07ff) {
            total += 2;
          } else if (charCode <= 0xffff) {
            total += 3;
          } else {
            total += 4;
          }
        }
      }
      return total;
    }
  }
