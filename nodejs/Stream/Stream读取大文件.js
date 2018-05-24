const fs = require('fs');
const path = require('path');

const bigPath = path.resolve(__dirname, '../cluster模块.js');

// 流式读取大文件  这里创建了一个fs.ReadStream
const streamObj = fs.createReadStream(bigPath);


streamObj.pipe(process.stdout); // 输出文件的内容


streamObj.on('open', () => {
    console.log('打开文件');
});

streamObj.on('close', () => {
    console.log('关闭文件');
});


streamObj.on('ready', () => {
    console.log('文件准备好了');
});
