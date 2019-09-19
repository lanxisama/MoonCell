const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name:{type:String},   //名字  √
    star:{type:Number}, //星星  √
    avatar:{type:String},  //头像 √
    photo:{type:String},  //全身像
    painter:{type:String},  //画师  √
    voice_actor:{type:String},  //声优 √
    rank:{type:mongoose.SchemaTypes.ObjectId,ref:"Category"}, //职阶   √
    sex:{type:String}, //性别
    height:{type:String},  //身高 √
    weight:{type:String},  //体重 √
    attributes:[{type:mongoose.SchemaTypes.ObjectId,ref:"Category"}], //属性 √
    hidden_attribute:{type:String}, //隐藏特性
    property:  //属性 A B C D E 
        {        
            strength:{type:String}, //筋力
            durable:{type:String}, //耐力
            agile:{type:String}, //敏捷
            magic:{type:String}, //魔法
            lucky:{type:String}, //幸运
            treasure:{type:String}, //宝具
        },
    cards:[{type:String}], //指令卡 五张指令卡
    //技能 
    skills:[{
        name:{type:String},  //技能名称
        icon:{type:String},  //技能图标
        description:{type:String},  //技能描述
        cd:{type:String}, //技能cd
    }],  
    //职阶技能 
    grade_skills:[{  
        name:{type:String},  //技能名称
        icon:{type:String},  //技能图标
        description:{type:String},  //技能描述
    }],  
    type:{
        characteristic:{type:String},  //特性 呆毛脸 罗马
        Human_type:{type:String}, //人型
        SpecialByEA:{type:String}  //被EA特攻
    },
    Growth:[{    //长度为10的数组
        level:{type:String},
        ATK:{type:String},
        HP:{type:String},
    }
    ],
    treasure:{
        name:{type:String},
        rank:{type:String},
        icon:{type:String},
        num:{type:String}, //数值
        description:{type:String},
        
    }, //宝具
    role_detail:{type:String}, //角色信息 介绍    √
    spend:[{
        item_id:{type:mongoose.SchemaTypes.ObjectId,ref:"Category"}, //素材的_id号
        num:{type:Number}   //所需素材的数量
    }] //升级花费的材料 JSON.stringify  JSON.parse
})
 
module.exports=mongoose.model("Hero",schema,'heroes')