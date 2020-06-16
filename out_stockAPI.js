/************出库任务******************/
//出库任务详情
/**
http://cabinet.whchiyue.cn/api/api_v/mission_detail
参数 ：
  mission_id 任务id
   way:2，按柜子  1 按文件 不填默认为way =1
 */
{
    "code": 200,
    "status": 1,
    "msg": "获取成功",
    "data": {
        "count": 2,
        "title": "测试出",
        "mission_id": 4,
        "status": 1,
        "mission_type": "出库任务",
        "list": [
            {
                "product_id": 5,
                "frid_number": "555555",
                "frid_epc": "555555",
                "mission_id": 4,
                "base_number": "5555",
                "cabinet_id": 75,
                "cabinet_place": 6351,
                "cabinet_place_number": "A-05-1-1",
                "status": 9,
                "cabinet_num": "A-05",
                "place": "1-1",
                "building_group": "B组",
                "x_title": "B组A柜05箱1格1位"
            },
            {
                "product_id": 4,
                "frid_number": "444444",
                "frid_epc": "444444",
                "mission_id": 4,
                "base_number": "4444",
                "cabinet_id": 98,
                "cabinet_place": 8651,
                "cabinet_place_number": "B-14-1-1",
                "status": 9,
                "cabinet_num": "B-14",
                "place": "1-1",
                "building_group": "B组",
                "x_title": "B组B柜14箱1格1位"
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
        "cabinet_count": 2,
        "count": 2,
        "title": "测试出",
        "mission_id": 4,
        "status": 1,
        "mission_type": "出库任务",
        "list": {
            "75": {
                "building_group": "B组",
                "cabinet_number": "A-05",
                "x_title": "B组A柜05箱",
                "cabinet_id": 75,
                "count": 1,
                "lists": [
                    {
                        "product_id": 5,
                        "frid_number": "555555",
                        "frid_epc": "555555",
                        "mission_id": 4,
                        "base_number": "5555",
                        "cabinet_id": 75,
                        "cabinet_place": 6351,
                        "cabinet_place_number": "A-05-1-1",
                        "status": 9,
                        "place": "1-1",
                        "cabinet_num": "A-05",
                        "building_group": "B组",
                        "x_title": "B组A柜05箱1格1位"
                    }
                ]
            },
            "98": {
                "building_group": "B组",
                "cabinet_number": "B-14",
                "x_title": "B组B柜14箱",
                "cabinet_id": 98,
                "count": 1,
                "lists": [
                    {
                        "product_id": 4,
                        "frid_number": "444444",
                        "frid_epc": "444444",
                        "mission_id": 4,
                        "base_number": "4444",
                        "cabinet_id": 98,
                        "cabinet_place": 8651,
                        "cabinet_place_number": "B-14-1-1",
                        "status": 9,
                        "place": "1-1",
                        "cabinet_num": "B-14",
                        "building_group": "B组",
                        "x_title": "B组B柜14箱1格1位"
                    }
                ]
            }
        }
    }
}

//扫单个
/**
http://cabinet.whchiyue.cn/api/api_v/app_product_out_stock

frid_number
frid_epc
成功：
 * */
{
    "code": 200,
    "status": 1,
    "msg": "出库成功",
    "data": {
        "data": {
            "product": {
                "product_id": 4,
                "mission_id": 4,
                "base_number": "4444",
                "frid_number": "444444",
                "frid_epc": "444444",
                "status": 1,
                "cabinet_id": 98,
                "cabinet_place": 8651,
                "cabinet_place_number": "B-14-1-1"
            }
        }
    }
}
//任务完成
/**
http://cabinet.whchiyue.cn/api/app_end_out_stock
参数：mission_id
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