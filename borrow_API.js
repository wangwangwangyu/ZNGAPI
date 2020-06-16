/***********************借出任务************/
//借出任务详情
/**
http://cabinet.whchiyue.cn/api/api_v/mission_detail
参数：
mission_id  任务id 也可做编号
way:2，按柜子  1 按文件 不填默认为way =1
 */
{
    "code": 200,
    "status": 1,
    "msg": "获取成功",
    "data": {
        "count": 1,
        "title": "测试借出",
        "mission_id": 5,
        "status": 1,
        "mission_type": "借出任务",
        "list": [
            {
                "product_id": 2,
                "frid_number": "222222",
                "frid_epc": "222222",
                "mission_id": 5,
                "base_number": "12346",
                "cabinet_id": 77,
                "cabinet_place": 6552,
                "cabinet_place_number": "A-07-1-2",
                "status": 9,
                "cabinet_num": "A-07",
                "place": "1-2",
                "building_group": "B组",
                "x_title": "B组A柜07箱1格2位"
            }
        ]
    }
}

//按柜子
{
    "code": 200,
    "status": 1,
    "msg": "获取成功",
    "data": {
        "cabinet_count": 1,
        "count": 1,
        "title": "测试借出",
        "mission_id": 5,
        "status": 1,
        "mission_type": "借出任务",
        "list": {
            "77": {
                "building_group": "B组",
                "cabinet_number": "A-07",
                "x_title": "B组A柜07箱",
                "cabinet_id": 77,
                "count": 1,
                "lists": [
                    {
                        "product_id": 2,
                        "frid_number": "222222",
                        "frid_epc": "222222",
                        "mission_id": 5,
                        "base_number": "12346",
                        "cabinet_id": 77,
                        "cabinet_place": 6552,
                        "cabinet_place_number": "A-07-1-2",
                        "status": 9,
                        "place": "1-2",
                        "cabinet_num": "A-07",
                        "building_group": "B组",
                        "x_title": "B组A柜07箱1-2"
                    }
                ]
            }
        }
    }
}
//扫码
/**
http://cabinet.whchiyue.cn/api/api_v/app_product_borrow_out
参数：
frid_number  标签上的编号      
frid_epc  标签感应出的唯一信息
成功：
*/
{
    "code": 200,
    "status": 1,
    "msg": "成功",
    "data": {
        "product": {
            "product_id": 2,
            "mission_id": 5,
            "base_number": "12346",
            "frid_number": "222222",
            "frid_epc": "222222",
            "status": 1,
            "cabinet_id": 77,
            "cabinet_place": 6552,
            "cabinet_place_number": "A-07-1-2"
        }
    }
}
//失败：
{
    "code": 200,
    "status": 0,
    "msg": "借出失败",
    "data": {
            "product": null
    }
}


//任务完成
/**
http://cabinet.whchiyue.cn/api/app_end_borrow_out
参数：mission_id  任务ID
 */

{
    "code": 200,
    "status": 1,
    "msg": "成功",
    "data": {
    }
}


