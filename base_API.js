/**
全局放回码说明
code:  200 请求正确   201 请求错误       401  api_token 验证失败

status :0 请求数据返回失败   1 请求数据返回成功
msg: 返回提示
data:返回数据


 *
 88888888888888888手持设备登陆后每一次请求都需要带上,api_token888888888888888888888888888888888888888888
 常用字段
 base_number 为文件显示的编号，实际请求多用文件id
 product_id 文件id
 frid_epc  标签感应出的唯一信息
 frid_number  标签二维码信息
 cabinet_id  箱子唯一id
/********
/********
 * 用户登陆********

http://cabinet.whchiyue.cn/api/api_v/login
参数：
account 登陆账号
password  登陆密码

返回示例
*/
//登陆成功：
{
    "code": 200,
    "status": 1,
    "msg": "登录成功",
    "data": {
        "api_token": "N8mr8k0unTehxirspENKoGpfD21i5yxjpGrZjBlSVqlStcvP986vFjj0zT1Hl1KxPQARExkzmeCRv53OeDX9J00LYfg4SuOJeMkM7sRE53IICkYFOryubmK5snmfBwRd",
        "user": {
            "id": 1,
            "account": "master",
            "name": "超级管理员"
        },
        "mission": {
            "mission_in_stock": 0,
            "mission_out_stock": 0,
            "mission_check": 0,
            "mission_borrow_out": 0,
            "mission_made_product": 0
        }
    }
}
//登陆失败：
{
    "code": 200,
    "status": 0,
    "msg": "用户名或密码错误",
    "data": {
        "api_token": "",
        "user": ""
    }
}

/********
 * 用户退出登陆********

http://cabinet.whchiyue.cn/api/api_v/loginout
参数：
api_token

返回示例
*/
//成功：
{
    "code": 200,
    "status": 1,
    "msg": "退出成功",
    "data": []
}
/********
 * 开启柜门********

http://cabinet.whchiyue.cn/api/api_v/app_open_gate
参数：

cabinet   箱子ID

返回示例
*/
//成功：
{
    "status": 1,
    "code": 200,
    "msg": "开启成功！",
    "data": {
        "cabinet_id": 12,
        "cabinet_number": "A-12",
        "building_group": "A组"
    }
}
/*****
 * 任务列表********

http://cabinet.whchiyue.cn/api/api_v/mission_list
参数：
api_token
  mission_type   1入库任务 ，2出库任务 3盘点任务 4借出任务    5贴码关联（建档任务）
*/
{
    "code": 200,
    "status": 1,
    "msg": "获取成功",
    "data": {
        "count": 2,
        "title": "任务列表",
        "list": [
            {
                "count": 5,
                "mission_id": 4,
                "mission_title": "测试匹配,生成入库任务"
            },
            {
                "count": 1,
                "mission_id": 3,
                "mission_title": "测试,生成入库任务"
            }
        ]
    }
}

{
    "code": 200,
    "status": 0,
    "msg": "获取失败,没有任务",
    "data": {
        "count": 0,
        "list": []
    }
}
//扫码开门
/**
http://cabinet.whchiyue.cn/api/api_v/app_product_back
参数：
frid_number  标签上的编号      
frid_epc  标签感应出的唯一信息
成功：
 * */
{
    "code": 200,
    "status": 1,
    "msg": "成功",
    "data": {
        "product": {
            "id": 1,
            "base_number": "1111",
            "frid_number": "111111",
            "frid_epc": "111111",
            "is_show": 4,
            "is_locked": 9,
            "status": 1
        },
        "x_title": "D-06-1-1"
    }
}
//失败：
{
    "code": 200,
    "status": 0,
    "msg": "开启失败",
    "data": {
         "data": {
            "product": "123"
         }
    }
}