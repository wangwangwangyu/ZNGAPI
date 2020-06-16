/***********************匹配任务************/
//匹配任务详情
/**
http://cabinet.whchiyue.cn/api/api_v/mission_detail
参数：
mission_id  任务id 也可做编号
 */
{
    "code": 200,
    "status": 1,
    "msg": "获取成功",
    "data": {
        "count": 5,
        "title": "测试匹配",
        "mission_id": 1,
        "status": 1,
        "mission_type": "匹配任务",
        "list": [
            {
                "product_id": 5,
                "mission_id": 1,
                "base_number": "12349",
                "frid_number": "12349",
                "frid_epc": null
            },
            {
                "product_id": 4,
                "mission_id": 1,
                "base_number": "12348",
                "frid_number": "12348",
                "frid_epc": null
            },
            {
                "product_id": 3,
                "mission_id": 1,
                "base_number": "12347",
                "frid_number": "12347",
                "frid_epc": null
            },
            {
                "product_id": 2,
                "mission_id": 1,
                "base_number": "12346",
                "frid_number": "12346",
                "frid_epc": null
            },
            {
                "product_id": 1,
                "mission_id": 1,
                "base_number": "12345",
                "frid_number": "12345",
                "frid_epc": null
            }
        ]
    }
}
DvsynBQczVDasP1Lw7lnEjfmmeuFMK8eHXU0gwE6kFuazp2ySpEFnDZMxdmJofzWjZZaZZj6qmm4QbQ27hMd2HQZN91g8FZwCYYf1KkAwnb9JTRqDTXTrYabjQ8TH5sH
//匹配单个
/**
http://cabinet.whchiyue.cn/api/api_v/app_product_matching
参数：
product_id 文件唯一id
frid_number  标签上的编号      
frid_epc  标签感应出的唯一信息
成功：
 * */
{
    "code": 200,
    "status": 1,
    "msg": "匹配成功",
    "data": {
        "data": []
    }
}
//失败：
{
    "code": 200,
    "status": 0,
    "msg": "匹配失败",
    "data": {
         "data": {
            "product": "123"
         }
    }
}
//解除匹配
/**
http://cabinet.whchiyue.cn/api/api_v/app_product_un_matching
参数：
product_id  文件ID
成功：
 * */
{
    "code": 200,
    "status": 1,
    "msg": "解除匹配成功",
    "data": {
        "data": {
            "product": {
                "product_id": 6,
                "mission_id": 2,
                "base_number": "222111",
                "frid_number": "555555",
                "frid_epc": "555555"
            }
        }
    }
}
//失败：
{
    "code": 200,
    "status": 0,
    "msg": "解除匹配失败",
    "data": {
         "data": {
            "product": "123"
         }
    }
}
//匹配任务完成
/**
http://cabinet.whchiyue.cn/api/app_end_matching
参数：mission_id  任务ID
 */

{
    "code": 200,
    "status": 1,
    "msg": "成功",
    "data": {
    
        "data": [
    
    ]
    }
}
