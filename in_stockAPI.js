/************入库任务******************/
//入库任务详情
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
        "count": 5,
        "title": "测试匹配,生成入库任务",
        "mission_id": 4,
        "status": 1,
        "mission_type": "入库任务",
        "list": [
            {
                "product_id": 5,
                "frid_number": "555555",
                "frid_epc": "555555",
                "mission_id": 4,
                "base_number": "12349",
                "cabinet_id": 111,
                "cabinet_place": 9351,
                "cabinet_place_number": "C-13-1-1",
                "status": 9,
                "cabinet_num": "C-13",
                "place": "1-1",
                "building_group": "B组",
                "x_title": "B组C柜13箱1格1位"
            },
            {
                "product_id": 4,
                "frid_number": "444444",
                "frid_epc": "444444",
                "mission_id": 4,
                "base_number": "12348",
                "cabinet_id": 98,
                "cabinet_place": 8651,
                "cabinet_place_number": "B-14-1-1",
                "status": 9,
                "cabinet_num": "B-14",
                "place": "1-1",
                "building_group": "B组",
                "x_title": "B组B柜14箱1格1位"
            },
            {
                "product_id": 3,
                "frid_number": "333333",
                "frid_epc": "333333",
                "mission_id": 4,
                "base_number": "12347",
                "cabinet_id": 94,
                "cabinet_place": 8251,
                "cabinet_place_number": "B-10-1-1",
                "status": 9,
                "cabinet_num": "B-10",
                "place": "1-1",
                "building_group": "B组",
                "x_title": "B组B柜10箱1格1位"
            },
            {
                "product_id": 2,
                "frid_number": "222222",
                "frid_epc": "222222",
                "mission_id": 4,
                "base_number": "12346",
                "cabinet_id": 77,
                "cabinet_place": 6552,
                "cabinet_place_number": "A-07-1-2",
                "status": 9,
                "cabinet_num": "A-07",
                "place": "1-2",
                "building_group": "B组",
                "x_title": "B组A柜07箱1格2位"
            },
            {
                "product_id": 1,
                "frid_number": "111111",
                "frid_epc": "111111",
                "mission_id": 4,
                "base_number": "12345",
                "cabinet_id": 77,
                "cabinet_place": 6551,
                "cabinet_place_number": "A-07-1-1",
                "status": 9,
                "cabinet_num": "A-07",
                "place": "1-1",
                "building_group": "B组",
                "x_title": "B组A柜07箱1格1位"
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
        "cabinet_count": 5,
        "count": 5,
        "title": "测试入库",
        "mission_id": 2,
        "status": 1,
        "mission_type": "入库任务",
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
                        "mission_id": 2,
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
                        "mission_id": 2,
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
            },
            "108": {
                "building_group": "B组",
                "cabinet_number": "C-10",
                "x_title": "B组C柜10箱",
                "cabinet_id": 108,
                "count": 1,
                "lists": [
                    {
                        "product_id": 2,
                        "frid_number": "222222",
                        "frid_epc": "222222",
                        "mission_id": 2,
                        "base_number": "2222",
                        "cabinet_id": 108,
                        "cabinet_place": 9201,
                        "cabinet_place_number": "C-10-1-1",
                        "status": 9,
                        "place": "1-1",
                        "cabinet_num": "C-10",
                        "building_group": "B组",
                        "x_title": "B组C柜10箱1格1位"
                    }
                ]
            },
            "109": {
                "building_group": "B组",
                "cabinet_number": "C-11",
                "x_title": "B组C柜11箱",
                "cabinet_id": 109,
                "count": 1,
                "lists": [
                    {
                        "product_id": 3,
                        "frid_number": "333333",
                        "frid_epc": "333333",
                        "mission_id": 2,
                        "base_number": "3333",
                        "cabinet_id": 109,
                        "cabinet_place": 9251,
                        "cabinet_place_number": "C-11-1-1",
                        "status": 9,
                        "place": "1-1",
                        "cabinet_num": "C-11",
                        "building_group": "B组",
                        "x_title": "B组C柜11箱1格1位"
                    }
                ]
            },
            "118": {
                "building_group": "B组",
                "cabinet_number": "D-06",
                "x_title": "B组D柜06箱",
                "cabinet_id": 118,
                "count": 1,
                "lists": [
                    {
                        "product_id": 1,
                        "frid_number": "111111",
                        "frid_epc": "111111",
                        "mission_id": 2,
                        "base_number": "1111",
                        "cabinet_id": 118,
                        "cabinet_place": 9701,
                        "cabinet_place_number": "D-06-1-1",
                        "status": 9,
                        "place": "1-1",
                        "cabinet_num": "D-06",
                        "building_group": "B组",
                        "x_title": "B组D柜06箱1格1位"
                    }
                ]
            }
        }
    }
}

//扫单个
/**
http://cabinet.whchiyue.cn/api/api_v/app_product_in_stock
cabinet_id  //箱子ID
frid_number
frid_epc
成功：
 * */
{
    "code": 200,
    "status": 1,
    "msg": "放入成功",
    "data": {
        "data": {
            "product": {
                "product_id": 2,
                "mission_id": 4,
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
}
//任务完成
/**
http://cabinet.whchiyue.cn/api/app_end_in_stock
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