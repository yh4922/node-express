const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apitest');
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));


let apiArr = mongoose.Schema({
    id:{ type: Number},
    title:{ type: String,default:''},
    apiname:{type: String},
    remark:{ type: String,default:''},
    result:{ type: String, default: '{}'},
    method:{ type: String, default: 'GET'}
});
exports.apiArr = mongoose.model("api_arr", apiArr);









// let sendMpmsg = mongoose.Schema({//微信公众号链接，字段
//     id:{type:Number , default:1},
//     date: { type: Date, default: Date.now },
//     email:{ type:Array},
//     phone:{ type:Array}
// });
// exports.sendMp = mongoose.model("sendmpmsg", sendMpmsg);//微信公众号连接表对象

// db.sendMp.find({/*条件*/},callback);//查找数据
// db.sendMp.update({/*条件*/},{$set:{/*修改后的*/}},callback);//更新数据
// //插入数据
// //第一步 创建数据
// var datas = new db.sendMp({/*数据内容*/});
// //第二步 保存数据
// datas.save(callback);
// db.sendMp.remove({/*条件*/},callback);//删除数据
// sendMp.count({}, (err, count)
