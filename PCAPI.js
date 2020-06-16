//开启柜门
/**
 全局放回码说明
 code:  200 请求成功   201 请求失败

 status :0 请求数据返回失败   1 请求数据返回成功
 msg: 返回提示
 data:返回数据


 要开的门
 http://cabinet.whchiyue.cn/api/api_v/pc_ready_gates
 参数：  ip_address      192.0.0.1 一组柜子的主柜IP
 */
{
    "code": 200,
    "status": 0,
    "msg": "没有",
    "data": {

    }
}
{
    "code": 200,
    "status": 1,
    "msg": "有",
    "data": {
        "count": 14,
        "list": [
            {
                "cabinet_id": 57,   //箱子id
                "cabinet_ip": "192.0.0.1", //箱子IP
                "cabinet_number": "E-01",  //箱号
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 58,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-02",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 59,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-03",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 60,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-04",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 61,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-05",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 62,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-06",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 63,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-07",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 64,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-08",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 65,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-09",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 66,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-10",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 67,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-11",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 68,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-12",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 69,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-13",
                "status": 1,
                "created_at": null,
                "updated_at": null
            },
            {
                "cabinet_id": 70,
                "cabinet_ip": "192.0.0.1",
                "cabinet_number": "E-14",
                "status": 1,
                "created_at": null,
                "updated_at": null
            }
        ]
    }
}

/**
 柜门关闭返回


http://cabinet.whchiyue.cn/api/pc_close_gate_return
    参数：  ip_address   192.0.0.1
            cabinet  E-01  箱号
*/
{
    "code": 200,
    "status": 1,
    "msg": "关闭成功",
    "data": []
}
/**
 柜门开启返回


http://cabinet.whchiyue.cn/api/api_v/pc_open_gate_return
    参数：ip_address  192.0.0.1
          cabinet     E-01   箱号

*/
{
    "code": 200,
    "status": 1,
    "msg": "开启成功",
    "data": []
}