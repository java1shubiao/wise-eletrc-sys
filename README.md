智慧安全用电项目

src/views/Core  共用的核心组件

1.变量定义规则

### data变量

p_开头：api参数
大写开头：常量
r_开头：props传参
t_开头：临时变量
au_开头：表示辅助变量，如下表，key值
A_开头：api的参数
DUN_开头：基础数据，如表格的渲染数据
TIME_开头：为定时器变量
CC_开头
user_:表示从弹框的发起者传递过来的数据
is判断值
RS_:接口返回参数


console.js



1.KtTable组件

###  基础表格

```vue
<kt-table
            ref=""
            :data=""
            :columns="logColumnsC"
            @findPage=""
            @handleExcute=""
            @handledExcute=""
            :showHandle=""
            permsHandle=""
            permsInfo=""
          >
</kt-table>
..............................................................................
logColumnsC:[
        {
          prop: "deviceName",
          label: "设备名称",
          minWidth: 100
        },
        {
          prop: "channelName",
          label: "回路名称",
          minWidth: 100
        },
        {
          prop: "orgName",
          label: "所属机构",
          minWidth: 100
        },
        {
          prop: "logMsg",
          label: "操作内容",
          minWidth: 100
        },
        {
          prop: "logTime",
          label: "操作时间",
          minWidth: 100
        },
        {
          prop: "execResult",
          label: "操作结果",
          minWidth: 100
        }
      ],
```



###  Table Attributes

| 参数    | 说明       | 类型                 | 可选值 | 默认值 |
| ------- | ---------- | -------------------- | ------ | ------ |
| data    | 显示的数据  | object(含有data属性) | —      | —      |
| columns | 显示的列值 | object(见表 1-1)     | —      | —      |
| permsExtend | 扩展权限标识 |                      |        |        |
| permsExtendSecond | 扩展权限标识 |                      |        |        |
|         |            |                      |        |        |
|         |            |                      |        |        |
|         |            |                      |        |        |
|         |            |                      |        |        |
|         |            |                      |        |        |

### Table Events

#### **columns**

​																		columns属性 表 1-1

| 参数      | 说明                             | 类型                                       |      |      |
| --------- | -------------------------------- | ------------------------------------------ | ---- | ---- |
| prop      | 每列的属性值                     |                                            |      |      |
| label     | 列头名称                         |                                            |      |      |
| minWidth  | 列的最小宽度                     |                                            |      |      |
| width     | 列的固定宽度                     |                                            |      |      |
| formatter | 添加对数据的校验                 | Function({ columns, row,row[prop],$index}) |      |      |
| html      | 返回每个单元格需要附加的html内容  | Function({ columns, row,row[prop],$index}) |      |      |

