const DEFAULT_TARGETS = [
  {
    "name": "趣八鲜",
    "url": "https://ztesa.com.cn:7013/"
  },
  {
    "name": "姜山BI",
    "url": "https://jsbi.zgwlxc.cn"
  },
  {
    "name": "姜山驾驶舱接口",
    "url": "https://jsjsc.ztesa.com.cn"
  },
  {
    "name": "海曙bi",
    "url": "https://hsbi.zgwlxc.cn"
  },
  {
    "name": "H5主体追溯",
    "url": "https://ztesa.com.cn:7003"
  },
  {
    "name": "追溯h5",
    "url": "https://ztesa.com.cn:7009"
  },
  {
    "name": "H5产品追溯",
    "url": "https://ztesa.com.cn:7004"
  },
  {
    "name": "网格H5",
    "url": "https://farmgrid.zgwlxc.cn:7002"
  },
  {
    "name": "肥药两制监管平台",
    "url": "https://ztesa.com.cn:8004/user/login?redirect=%2F"
  },
  {
    "name": "国良物联网",
    "url": "https://ztesa.com.cn:7029"
  },
  {
    "name": "溯源h5",
    "url": "https://trace.ztesa.com.cn"
  },
  {
    "name": "智安码黄页",
    "url": "https://namyellow.ztesa.com.cn"
  },
  {
    "name": "智安码后台管理",
    "url": "https://namadmin.ztesa.com.cn"
  },
  {
    "name": "余姚榨菜H5",
    "url": "https://yyzc-zwy.ztesa.com.cn/#/login"
  },
  {
    "name": "海曙种植大脑",
    "url": "https://zzdn.ztesa.com.cn/#/login"
  },
  {
    "name": "智安码(农安码)",
    "url": "https://nam.ztesa.com.cn"
  },
  {
    "name": "慈溪BI",
    "url": "https://ztesa.com.cn:7007"
  },
  {
    "name": "监管门户网站",
    "url": "https://ztesa.com.cn:7801"
  },
  {
    "name": "慈溪市国家现代农业产业园数字云平台",
    "url": "https://ztesa.com.cn:7078/login/"
  },
  {
    "name": "慈溪市国家现代农业产业园数字云平台 (alias)",
    "url": "https://ztesa.com.cn:7077/login/"
  },
  {
    "name": "慧AIPC端",
    "url": "https://hai.ztesa.com.cn"
  },
  {
    "name": "慧AI运营平台",
    "url": "https://haiyy.ztesa.com.cn"
  },
  {
    "name": "象山秸秆监管端",
    "url": "https://xsjgpc.ztesa.com.cn"
  },
  {
    "name": "姜山镇秸秆监管端",
    "url": "https://jszjgpc.ztesa.com.cn"
  },
  {
    "name": "慧考试H5",
    "url": "https://hksh5.ztesa.com.cn"
  },
  {
    "name": "慧考试PC",
    "url": "https://hks.ztesa.com.cn"
  },
  {
    "name": "浙政钉数字乡村",
    "url": "https://szjdjsczzd.ztesa.com.cn"
  },
  {
    "name": "达飞滴BI",
    "url": "https://dfdbi.ztesa.com.cn"
  },
  {
    "name": "主体信息采集",
    "url": "https://ztxxcj.ztesa.com.cn"
  },
  {
    "name": "茂新管理后台地址",
    "url": "https://mxwlxcop.zgwlxc.cn"
  },
  {
    "name": "鹿鹿通PC",
    "url": "https://lltpc.ztesa.com.cn"
  },
  {
    "name": "鹿鹿通H5",
    "url": "https://llth5.ztesa.com.cn"
  },
  {
    "name": "掌上农场PC",
    "url": "https://zsncpc.ztesa.com.cn"
  },
  {
    "name": "掌上农场H5",
    "url": "https://zsnch5.ztesa.com.cn"
  },
  {
    "name": "达飞滴H5-国鹿域名",
    "url": "https://dfdh5.zgguolu.com.cn"
  },
  {
    "name": "国鹿支付域名",
    "url": "https://pay.zgguolu.com.cn"
  },
  {
    "name": "达飞滴后台代理",
    "url": "https://dfdht.ztesa.com.cn"
  },
  {
    "name": "达飞滴PC端",
    "url": "https://dfdpc.ztesa.com.cn"
  },
  {
    "name": "慧收储",
    "url": "https://hsc.ztesa.com.cn"
  },
  {
    "name": "达飞滴H5",
    "url": "https://dfdh5.ztesa.com.cn"
  },
  {
    "name": "新慧应用",
    "url": "https://hyy2.ztesa.com.cn"
  },
  {
    "name": "客户使用农事服务H5",
    "url": "https://cnsfwh5.ztesa.com.cn"
  },
  {
    "name": "芹菜BI",
    "url": "https://qcbi.ztesa.com.cn"
  },
  {
    "name": "绿鑫, 绿丰农事服务中心2",
    "url": "https://lfnsfwzx.ztesa.com.cn"
  },
  {
    "name": "杨梅BI",
    "url": "https://ymbi.ztesa.com.cn"
  },
  {
    "name": "江南村PC",
    "url": "https://jncpc.ztesa.com.cn"
  },
  {
    "name": "江南村BI",
    "url": "https://jncbi.ztesa.com.cn"
  },
  {
    "name": "慈溪江南村H5",
    "url": "https://cxjnch5.ztesa.com.cn"
  },
  {
    "name": "慈溪江南村PC",
    "url": "https://cxjncpc.ztesa.com.cn"
  },
  {
    "name": "宁海望海岗茶园",
    "url": "https://szjdwlbi.ztesa.com.cn"
  },
  {
    "name": "宁海绿鑫、绿丰农事服务中心",
    "url": "https://lxlfnsfwzx.ztesa.com.cn"
  },
  {
    "name": "气象局PC",
    "url": "https://qxjpc.ztesa.com.cn"
  },
  {
    "name": "慧应用",
    "url": "https://hyy.ztesa.com.cn"
  },
  {
    "name": "慧收储PC",
    "url": "https://hscpc.ztesa.com.cn"
  },
  {
    "name": "物联网设备库",
    "url": "https://wlwsbglpc.ztesa.com.cn"
  },
  {
    "name": "效能管理PC系统",
    "url": "https://xngl.ztesa.com.cn"
  },
  {
    "name": "热力指数(乡村振兴)",
    "url": "https://zxxc.simple.ztesa.xyz"
  },
  {
    "name": "农起帮物联网定位手表接口",
    "url": "https://iotpro.ztesa.com.cn"
  },
  {
    "name": "效能管理系统h5",
    "url": "https://ims.ztesa.com.cn"
  },
  {
    "name": "国鹿公司官网",
    "url": "https://zgguolu.com.cn"
  },
  {
    "name": "智慧排污(雨污)",
    "url": "https://adyw.ztesa.com.cn"
  },
  {
    "name": "市版农事服务中心BI",
    "url": "https://nsfwzxsbbi.ztesa.com.cn"
  },
  {
    "name": "政策保险2",
    "url": "https://bx2.ztesa.com.cn"
  },
  {
    "name": "余姚秸秆监管端",
    "url": "https://yyjgpc.ztesa.com.cn"
  },
  {
    "name": "余姚秸秆主体端",
    "url": "https://yyjgztd.ztesa.com.cn"
  },
  {
    "name": "种粮小农",
    "url": "https://szyypc.ztesa.com.cn"
  },
  {
    "name": "龙头企业BI",
    "url": "https://ltqybi.ztesa.com.cn"
  },
  {
    "name": "龙头企业监管端",
    "url": "https://ltqyjg.ztesa.com.cn"
  },
  {
    "name": "龙头企业主体端",
    "url": "https://ltqyzt.ztesa.com.cn"
  },
  {
    "name": "农场led",
    "url": "https://led.ztesa.com.cn"
  },
  {
    "name": "慈溪驾驶舱",
    "url": "https://datav.zgwlxc.cn"
  },
  {
    "name": "阿明农场BI",
    "url": "https://amncbi.ztesa.com.cn"
  },
  {
    "name": "宁海秸秆监管端pc",
    "url": "https://nhjgpc.ztesa.com.cn"
  },
  {
    "name": "宁海秸秆主体端pc",
    "url": "https://nhjgztd.ztesa.com.cn"
  },
  {
    "name": "农事服务中心PC+BI",
    "url": "https://nsfwzxpc.ztesa.com.cn"
  },
  {
    "name": "农起帮积分系统",
    "url": "https://nqbjfsc.ztesa.com.cn"
  },
  {
    "name": "渔业实验室后台(临时演示用)",
    "url": "https://flabht.ztesa.xyz"
  },
  {
    "name": "渔业实验室PC (临时演示用)",
    "url": "https://flabpc.ztesa.xyz"
  },
  {
    "name": "AI",
    "url": "https://ai.ztesa.com.cn"
  },
  {
    "name": "慈农优品H5",
    "url": "https://cnyph5.ztesa.com.cn"
  },
  {
    "name": "古林国有资产BI",
    "url": "https://glgyzcbi.ztesa.com.cn"
  },
  {
    "name": "古林人大PC端",
    "url": "https://glrdglpc.ztesa.com.cn"
  },
  {
    "name": "古林人大H5",
    "url": "https://glrdglh5.ztesa.com.cn"
  },
  {
    "name": "New数字基地驾驶舱BI",
    "url": "https://szjdjsc.ztesa.com.cn"
  },
  {
    "name": "象山数字文旅",
    "url": "https://xqg.qyszwl.com"
  },
  {
    "name": "长街农情监测BI",
    "url": "https://cjbi.zgwlxc.cn"
  },
  {
    "name": "云上大堰PC",
    "url": "https://ysdyht.ztesa.com.cn"
  },
  {
    "name": "新版追溯H5",
    "url": "https://weichao.ztesa.com.cn"
  },
  {
    "name": "茂新BI",
    "url": "https://mxwlxcbi.zgwlxc.cn"
  },
  {
    "name": "云上大堰",
    "url": "https://ysdy.ztesa.com.cn"
  },
  {
    "name": "茂新PC",
    "url": "https://mxwlxcpc.zgwlxc.cn"
  },
  {
    "name": "茂新H5",
    "url": "https://mxwlxch5.zgwlxc.cn"
  },
  {
    "name": "大黄鱼监管PC",
    "url": "https://dhyjg.ztesa.com.cn"
  },
  {
    "name": "余姚榨菜h5",
    "url": "https://dhyjg.ztesa.com.cn"
  },
  {
    "name": "农事服务中心BI",
    "url": "https://yyzc-zwy.ztesa.com.cn"
  },
  {
    "name": "农事服务中心h5",
    "url": "https://nsfwzx.ztesa.com.cn"
  },
  {
    "name": "城乡惠下载页",
    "url": "https://dl3.ztesa.com.cn"
  },
  {
    "name": "公司展厅",
    "url": "https://zbh.ztesa.com.cn"
  },
  {
    "name": "亚运会BI",
    "url": "https://yyhbi.ztesa.com.cn"
  },
  {
    "name": "数字基地BI(农起帮)",
    "url": "https://szjd.ztesa.com.cn"
  },
  {
    "name": "慈农H5",
    "url": "https://cnfwh5.ztesa.com.cn"
  },
  {
    "name": "慈农PC端",
    "url": "https://cnfwpc.ztesa.com.cn"
  },
  {
    "name": "数字文旅",
    "url": "https://qyszwl.com"
  },
  {
    "name": "时新BI",
    "url": "https://sxsznc.ztesa.com.cn"
  },
  {
    "name": "重庆共享冷库",
    "url": "https://chongqing.zgwlxc.cn"
  },
  {
    "name": "调试人员H5",
    "url": "https://tsry.ztesa.com.cn"
  },
  {
    "name": "基础平台H5",
    "url": "https://basedata.ztesa.com.cn"
  },
  {
    "name": "金融H5",
    "url": "https://financeh5.ztesa.com.cn"
  },
  {
    "name": "金融PC端",
    "url": "https://financepc.ztesa.com.cn"
  },
  {
    "name": "基础数据web",
    "url": "https://121.37.129.206:8080"
  },
  {
    "name": "大户带小富H5",
    "url": "https://dhdxfh5.zgwlxc.cn"
  },
  {
    "name": "大户带小富PC",
    "url": "https://dhdxf.zgwlxc.cn"
  },
  {
    "name": "余姚榨菜PC端",
    "url": "https://yyzcpc.ztesa.com.cn"
  },
  {
    "name": "余姚榨菜BI",
    "url": "https://yyzcbi.ztesa.com.cn"
  },
  {
    "name": "海洋实验室运维端",
    "url": "https://121.37.129.206:8001"
  },
  {
    "name": "海洋渔业实验室",
    "url": "https://121.37.129.206:8000"
  },
  {
    "name": "农行优惠券",
    "url": "https://lnyj.ztesa.com.cn:7028"
  },
  {
    "name": "慧农商户H5",
    "url": "https://lnyj.ztesa.com.cn:7027"
  },
  {
    "name": "甬农鲜驿站h5",
    "url": "https://ynx.ztesa.com.cn:8080"
  },
  {
    "name": "甬农鲜驿站h5 (alias)",
    "url": "https://tqbx.ztesa.com.cn"
  },
  {
    "name": "甬农鲜驿站h5 (alias)",
    "url": "https://ynx.ztesa.com.cn"
  },
  {
    "name": "甬农鲜驿站h5 (alias)",
    "url": "https://ycpc.nongqibang.com"
  },
  {
    "name": "甬农鲜驿站h5 (alias)",
    "url": "https://qbx.ztesa.com.cn"
  },
  {
    "name": "甬农鲜驿站h5 (alias)",
    "url": "https://hsgd.ztesa.com.cn"
  },
  {
    "name": "甬农鲜商户端",
    "url": "https://shd.ztesa.com.cn"
  },
  {
    "name": "食安办检测报告管理系统",
    "url": "https://detect.ztesa.com.cn"
  },
  {
    "name": "杨梅BI",
    "url": "https://121.37.129.206:8081"
  },
  {
    "name": "梁弄h5（第二套）",
    "url": "https://lnyj2.ztesa.com.cn"
  },
  {
    "name": "梁弄H5",
    "url": "https://lnyj.ztesa.com.cn"
  },
  {
    "name": "梁弄出票机Web",
    "url": "https://lncp.ztesa.com.cn"
  },
  {
    "name": "梁弄出票机Web (alias)",
    "url": "https://xcxynx.nongqibang.com"
  },
  {
    "name": "梁弄出票机Web (alias)",
    "url": "https://xcxynx.nongqibang.com:7043"
  },
  {
    "name": "姜山BI",
    "url": "https://jsbi.zgwlxc.cn"
  },
  {
    "name": "豇豆bi",
    "url": "https://jdjg.ztesa.com.cn"
  },
  {
    "name": "保险H5",
    "url": "https://bx.ztesa.com.cn"
  },
  {
    "name": "保险H5 (alias)",
    "url": "https://bx.ztesa.com.cn:8991"
  },
  {
    "name": "保险H5 (alias)",
    "url": "https://bx.ztesa.com.cn:8990"
  },
  {
    "name": "保险H5 (alias)",
    "url": "https://bx.ztesa.com.cn:8100"
  },
  {
    "name": "保险BI",
    "url": "https://bx.ztesa.com.cn:7036"
  },
  {
    "name": "氮磷生态拦截管理平台",
    "url": "https://dlstlj.zgwlxc.cn"
  },
  {
    "name": "众乐乐游戏端",
    "url": "https://game.nbsznc.com"
  },
  {
    "name": "众乐乐平台端H5",
    "url": "https://bix.nbsznc.com"
  },
  {
    "name": "秸秆政府端后台",
    "url": "https://wfzg.ztesa.com.cn:8101"
  },
  {
    "name": "秸秆回收企业后台",
    "url": "https://wfzg.ztesa.com.cn:8100"
  },
  {
    "name": "秸秆h5",
    "url": "https://wfzg.ztesa.com.cn"
  },
  {
    "name": "第三方验证登录H5",
    "url": "https://thirdauth.nbsznc.com"
  },
  {
    "name": "营销活动",
    "url": "https://mactive.ztesa.com.cn"
  },
  {
    "name": "手掌农场用户端H5下载页配置",
    "url": "https://sznc.nongqibang.com"
  },
  {
    "name": "未来乡村运维端",
    "url": "https://system.zgwlxc.cn"
  },
  {
    "name": "手掌农场运维端",
    "url": "https://system.xn--j7qu0l1wkyhb.com"
  },
  {
    "name": "手掌农场 直播管理平台",
    "url": "https://play.nbsznc.com"
  },
  {
    "name": "选品系统",
    "url": "https://shopp.nbsznc.com"
  },
  {
    "name": "手掌农场商户",
    "url": "https://shop.nbsznc.com"
  },
  {
    "name": "手掌农场商户 (alias)",
    "url": "https://shop.nbsznc.com:8100"
  },
  {
    "name": "手掌农场商户端",
    "url": "https://shop.ztesa.com.cn"
  },
  {
    "name": "私有化店铺",
    "url": "https://syh.xn--j7qu0l1wkyhb.com"
  },
  {
    "name": "市场供需PC",
    "url": "https://sznc.nongqibang.com:8100"
  },
  {
    "name": "市场供需H5",
    "url": "https://scgx.ztesa.com.cn"
  },
  {
    "name": "手掌农场商家管理平台",
    "url": "https://pcshop.nbsznc.com"
  },
  {
    "name": "惠享桥头用户端H5配置",
    "url": "https://hxqt.xn--j7qu0l1wkyhb.com"
  },
  {
    "name": "手掌农场用户端H5配置",
    "url": "https://sznc.ztesa.com.cn"
  },
  {
    "name": "手掌农场iOS下载配置",
    "url": "https://iosdown.nongqibang.com"
  },
  {
    "name": "手掌农场H5(电商)",
    "url": "https://nbsznc.com"
  },
  {
    "name": "慈溪数字乡村中台系统管理服务 手掌农场第二套中台系统管理",
    "url": "https://extglzx.ztesa.com.cn"
  },
  {
    "name": "中台系统管理",
    "url": "https://middle.xn--j7qu0l1wkyhb.com"
  },
  {
    "name": "直播H5",
    "url": "https://live.nbsznc.com"
  },
  {
    "name": "物联网代理",
    "url": "https://sapi.ztesa.com.cn"
  },
  {
    "name": "手掌农场api接口",
    "url": "https://sapi.ztesa.com.cn"
  },
  {
    "name": "海曙共享冷库BI",
    "url": "https://hsgxlk.zgwlxc.cn:8080"
  },
  {
    "name": "海曙共享冷库",
    "url": "https://hsgxlk.zgwlxc.cn"
  },
  {
    "name": "共享农机管理后台",
    "url": "https://gxnj.ztesa.com.cn:8100"
  },
  {
    "name": "共享农机h5",
    "url": "https://gxnj.ztesa.com.cn"
  },
  {
    "name": "手中农场app的api配置 (演示)",
    "url": "https://api.xn--j7qu0l1wkyhb.com"
  },
  {
    "name": "手掌农场app 的api配置",
    "url": "https://szncapi.ztesa.com.cn"
  },
  {
    "name": "掌农场app的api配置(旧)",
    "url": "https://124.71.132.133:7041"
  },
  {
    "name": "form-generator",
    "url": "https://cxnync.zgwlxc.cn:7100"
  },
  {
    "name": "慈溪数字乡村平台(new)",
    "url": "https://cxnync.zgwlxc.cn"
  },
  {
    "name": "慈溪数据采集管理平台",
    "url": "https://ztcj.ztesa.com.cn:7100"
  },
  {
    "name": "慈溪数据采集H5",
    "url": "https://ztcj.ztesa.com.cn"
  },
  {
    "name": "慈溪农业农村局 2021任务列表",
    "url": "https://cxzzxt.zgwlxc.cn"
  },
  {
    "name": "慈溪农业补助管理后台",
    "url": "https://nybz.ztesa.com.cn:8100"
  },
  {
    "name": "慈溪农业补助H5",
    "url": "https://nybz.ztesa.com.cn"
  },
  {
    "name": "慈溪统一登录",
    "url": "https://login.ztesa.com.cn"
  },
  {
    "name": "共享冷库管理端",
    "url": "https://gxlkop.ztesa.com.cn"
  },
  {
    "name": "共享冷库h5",
    "url": "https://gxlk.ztesa.com.cn"
  },
  {
    "name": "共享冷库h5 (alias)",
    "url": "https://124.71.132.133:8100"
  },
  {
    "name": "需求反馈管理后台",
    "url": "https://xqfk.ztesa.com.cn:8100"
  },
  {
    "name": "需求反馈",
    "url": "https://xqfk.ztesa.com.cn"
  },
  {
    "name": "共享冷库BI",
    "url": "https://cs.zgwlxc.cn:8080"
  },
  {
    "name": "共享冷库",
    "url": "https://cs.zgwlxc.cn"
  },
  {
    "name": "选品系统",
    "url": "https://sel.nbsznc.com"
  },
  {
    "name": "掌上农场后台管理",
    "url": "https://biz.nbsznc.com"
  },
  {
    "name": "手掌农场演示端",
    "url": "https://biz.xn--j7qu0l1wkyhb.com:8001"
  },
  {
    "name": "掌上农场后台管理",
    "url": "https://biz.xn--j7qu0l1wkyhb.com"
  },
  {
    "name": "农村资产管理",
    "url": "https://biz2.nbsznc.com:8103"
  },
  {
    "name": "运营管理后台",
    "url": "https://biz2.nbsznc.com:8102"
  },
  {
    "name": "App移动端管理后台",
    "url": "https://biz2.nbsznc.con:8101"
  },
  {
    "name": "应用支撑平台",
    "url": "https://biz2.nbsznc.com:8100"
  },
  {
    "name": "未来乡村管理端",
    "url": "https://biz.zgwlxc.cn"
  },
  {
    "name": "无废智管-秸秆后台管理",
    "url": "https://wfzgjghspc.ztesa.com.cn"
  },
  {
    "name": "无废智管-秸秆回收H5",
    "url": "https://jghs.ztesa.com.cn"
  },
  {
    "name": "无废质管Jeesite平台",
    "url": "https://wfzgpc.ztesa.com.cn"
  },
  {
    "name": "农起帮运营后台管理",
    "url": "https://123.60.156.229:9100"
  },
  {
    "name": "应急预警",
    "url": "https://yjyj.ztesa.com.cn"
  },
  {
    "name": "无废智管PC",
    "url": "https://wfzgnzd.ztesa.com.cn:8000"
  },
  {
    "name": "无废质管销售端",
    "url": "https://wfzgnzd.ztesa.com.cn"
  },
  {
    "name": "数智育秧PC",
    "url": "https://szyypc.ztesa.com.cn"
  },
  {
    "name": "数智育秧农资店",
    "url": "https://szyynzd.ztesa.com.cn"
  },
  {
    "name": "数智育秧H5",
    "url": "https://szyygl.ztesa.com.cn"
  },
  {
    "name": "数智育秧",
    "url": "https://szyyfarmers.ztesa.com.cn"
  },
  {
    "name": "护农通",
    "url": "https://hnt.zgwlxc.cn"
  },
  {
    "name": "geoserver 服务",
    "url": "https://gis.ztesa.com.cn"
  },
  {
    "name": "宁波市农业政策监管平台",
    "url": "https://bxi.ztesa.com.cn"
  },
  {
    "name": "微心愿",
    "url": "https://wxy.ztesa.com.cn"
  },
  {
    "name": "农起帮接口",
    "url": "https://nqbapi.ztesa.com.cn"
  },
  {
    "name": "共享冰爽爽",
    "url": "https://coldbi.ztesa.com.cn"
  },
  {
    "name": "客服聊天系统",
    "url": "https://im.ztesa.com.cn"
  },
  {
    "name": "农担BI",
    "url": "https://ndbi.ztesa.com.cn"
  },
  {
    "name": "慈溪共享冰爽爽",
    "url": "https://gxbss.zgwlxc.cn/cx/"
  },
  {
    "name": "慈溪共享冰爽爽BI",
    "url": "https://cixicoldbss.ztesa.com.cn"
  },
  {
    "name": "慈溪数字乡村BI",
    "url": "https://cxny.zgwlxc.cn"
  },
  {
    "name": "慈溪数字乡村BI (alias)",
    "url": "https://cixicold.ztesa.com.cn"
  },
  {
    "name": "慈溪数字乡村BI",
    "url": "https://datav.zgwlxc.cn"
  },
  {
    "name": "慈溪数字乡村平台",
    "url": "https://datav.ztesa.com.cn"
  },
  {
    "name": "未来乡村地图",
    "url": "https://zgwlxc.cn"
  },
  {
    "name": "未来乡村地图",
    "url": "https://dlcy.ztesa.com.cn"
  },
  {
    "name": "慈溪保险H5",
    "url": "https://cxbx.ztesa.com.cn"
  },
  {
    "name": "慈溪市芸天果蔬农场数字云平台",
    "url": "https://ytbi.ztesa.com.cn"
  },
  {
    "name": "食品溯源H5",
    "url": "https://cxsy.ztesa.com.cn"
  },
  {
    "name": "行政服务",
    "url": "https://xzff.ztesa.com.cn"
  },
  {
    "name": "农起帮运营平台",
    "url": "https://ztesa.com.cn:7016/v2"
  },
  {
    "name": "农起帮保险管理平台",
    "url": "https://insuradmin.ztesa.com.cn/user/login"
  },
  {
    "name": "农安文件一键通",
    "url": "https://farmfile.ztesa.com.cn:7001"
  },
  {
    "name": "农安网格员web",
    "url": "https://farmgrid.ztesa.com.cn:7001"
  },
  {
    "name": "监测机构",
    "url": "https://inspect.ztesa.com.cn:7001"
  },
  {
    "name": "农安信用",
    "url": "https://farmtrust.ztesa.com.cn:7001"
  },
  {
    "name": "主体一键通",
    "url": "https://policy.ztesa.com.cn:7001"
  },
  {
    "name": "监管追溯系统",
    "url": "https://supe.ztesa.com.cn:7001"
  },
  {
    "name": "监管追溯系统 (alias)",
    "url": "https://audit.ztesa.com.cn:7001"
  },
  {
    "name": "监管追溯系统 (alias)",
    "url": "https://info.ztesa.com.cn:7001"
  },
  {
    "name": "监管追溯系统 (alias)",
    "url": "https://iot.ztesa.com.cn:7001"
  },
  {
    "name": "监管追溯系统 (alias)",
    "url": "https://main.ztesa.com.cn:7001"
  },
  {
    "name": "监管追溯系统 (alias)",
    "url": "https://credit.ztesa.com.cn:7001"
  },
  {
    "name": "监管追溯系统 (alias)",
    "url": "https://base.ztesa.com.cn:7001"
  },
  {
    "name": "监管追溯系统 (alias)",
    "url": "https://trust.ztesa.com.cn:7001"
  },
  {
    "name": "监管追溯系统 (alias)",
    "url": "https://check.ztesa.com.cn:7001"
  },
  {
    "name": "监管追溯系统 (alias)",
    "url": "https://bzh.ztesa.com.cn:7001"
  },
  {
    "name": "企业黄页",
    "url": "https://ztesa.com.cn:7010"
  },
  {
    "name": "象山收储运",
    "url": "https://ztesa.com.cn:7020"
  },
  {
    "name": "八仙优品",
    "url": "https://ztesa.com.cn:7006"
  },
  {
    "name": "农业追溯系统",
    "url": "https://ztesa.com.cn:7005"
  },
  {
    "name": "浙政钉饲药两化看板",
    "url": "https://sylhchart.ztesa.com.cn"
  },
  {
    "name": "饲药两化BI",
    "url": "https://sylhbi.ztesa.com.cn"
  },
  {
    "name": "饲药两化后台管理",
    "url": "https://sylhbi.ztesa.com.cn:7001"
  },
  {
    "name": "饲药两化-诊疗机构端 兽医站",
    "url": "https://sylhsyz.ztesa.com.cn"
  },
  {
    "name": "饲药两化-畜牧主体端h5",
    "url": "https://sylh.ztesa.com.cn"
  },
  {
    "name": "饲药两化-回收端",
    "url": "https://sylhhs.ztesa.com.cn"
  },
  {
    "name": "农产品溯源h5",
    "url": "https://ztesa.com.cn:7011"
  },
  {
    "name": "北仑收储运",
    "url": "https://ztesa.com.cn:7008"
  },
  {
    "name": "新溯源h5",
    "url": "https://ztesa.com.cn:7009"
  },
  {
    "name": "农博会BI",
    "url": "https://ztesa.com.cn:7015"
  },
  {
    "name": "移动端统一地图平台",
    "url": "https://sylhbi.nongqibang.com:7002/#/"
  }
];

module.exports = {
  targets: DEFAULT_TARGETS,
  scanners: {
    gaode: {
      enabled: true,
      render: {
        timeoutMs: 15000,
        waitUntil: 'networkidle2'
      },
      outputFile: 'reports/gaode-key-findings.json'
    }
  }
};
