/************盘点任务******************/
//任务详情
/**
http://cabinet.whchiyue.cn/api/api_v/mission_detail
参数 ：
  mission_id 任务id

*/
//按箱子
{
    "code": 200,
    "status": 1,
    "msg": "获取成功",
    "data": {
        "cabinet_count": 3,
        "count": 3,
        "title": "测试盘",
        "mission_id": 5,
        "status": 1,
        "mission_type": "盘点任务",
        "list": {
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
                        "mission_id": 5,
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
                        "mission_id": 5,
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
                        "mission_id": 5,
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

//单箱扫完数据上传
/**
http://cabinet.whchiyue.cn/api/api_v/app_check_check

frid_epc[] 
{
    "frid_epc": ["22", "33", "44"]
} 
成功：
 * */
{
    "code": 200,
    "status": 1,
    "msg": "成功",
    "data": {
        "error_count": 4,
        "error_more": 3,
        "error_less": 1,
        "product_sure": [],
        "product_not_sure": [
            {
                "cabinet_place_number": "C-10-1-1",
                "mission_id": 5,
                "product_id": 2,
                "status": 9,
                "cabinet_id": 108,
                "updated_at": "1578976118",
                "created_at": "1578976118",
                "cabinet_place": 9201,
                "type_x": 9,
                "base_number": "2222",
                "frid_id": null,
                "frid_number": "222222",
                "frid_epc": "222222",
                "frid_user": null,
                "frid_pwd": null
            }
        ],
        "product_not_here": [
            {
                "place_title": "B组A柜07箱1格1位",
                "base_number": "44",
                "frid_number": "44",
                "must_cabinet_id": 77
            },
            {
                "place_title": "B组A柜07箱1格2位",
                "base_number": "55",
                "frid_number": "55",
                "must_cabinet_id": 77
            },
            {
                "place_title": "B组A柜07箱1格3位",
                "base_number": "66",
                "frid_number": "66",
                "must_cabinet_id": 77
            }
        ]
    }
}
{
    "code": 200,
    "status": 1,
    "msg": "成功",
    "data": {
        "error_count": 4,
        "error_more": 4,
        "error_less": 0,
        "sure_count": 1,
        "product_sure": [
            {
                "cabinet_place_number": "C-10-1-1",
                "mission_id": 5,
                "product_id": 2,
                "status": 9,
                "cabinet_id": 108,
                "updated_at": "1578976118",
                "created_at": "1578976118",
                "cabinet_place": 9201,
                "type_x": 9,
                "base_number": "2222",
                "frid_id": null,
                "frid_number": "222222",
                "frid_epc": "222222",
                "frid_user": null,
                "frid_pwd": null
            }
        ],
        "product_not_sure": [],
        "product_not_here": [
            {
                "place_title": "B组A柜07箱1格1位",
                "base_number": "44",
                "frid_number": "44",
                "must_cabinet_id": 77
            },
            {
                "place_title": "B组A柜07箱1格2位",
                "base_number": "55",
                "frid_number": "55",
                "must_cabinet_id": 77
            },
            {
                "place_title": "B组A柜07箱1格3位",
                "base_number": "66",
                "frid_number": "66",
                "must_cabinet_id": 77
            },
            {
                "place_title": "B组D柜06箱1格1位",
                "base_number": "1111",
                "frid_number": "111111",
                "must_cabinet_id": 118
            }
        ]
    }
}
{
    "code": 200,
    "status": 1,
    "msg": "成功",
    "data": {
        "error_count": 4,
        "error_more": 4,
        "error_less": 0,
        "sure_count": 1,
        "product_sure": [
            {
                "cabinet_place_number": "C-10-1-1",
                "mission_id": 5,
                "product_id": 2,
                "status": 9,
                "cabinet_id": 108,
                "updated_at": "1578976118",
                "created_at": "1578976118",
                "cabinet_place": 9201,
                "type_x": 9,
                "base_number": "2222",
                "frid_id": null,
                "frid_number": "222222",
                "frid_epc": "222222",
                "frid_user": null,
                "frid_pwd": null
            }
        ],
        "product_not_sure": [],
        "product_not_here": [
            {
                "place_title": "B组A柜07箱1格1位",
                "base_number": "44",
                "frid_number": "44",
                "must_cabinet_id": 77
            },
            {
                "place_title": "B组A柜07箱1格2位",
                "base_number": "55",
                "frid_number": "55",
                "must_cabinet_id": 77
            },
            {
                "place_title": "B组A柜07箱1格3位",
                "base_number": "66",
                "frid_number": "66",
                "must_cabinet_id": 77
            },
            {
                "place_title": "B组D柜06箱1格1位",
                "base_number": "1111",
                "frid_number": "111111",
                "must_cabinet_id": 118
            }
        ]
    }
}
//任务完成
/**
http://cabinet.whchiyue.cn/api/app_end_check
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