export const questions = [
  {
    id: 'q1', dim: 'D1',
    text: '你理想中一天的开始是什么样的？',
    options: [
      { label: '自然醒，慢悠悠煮杯咖啡，看看窗外发呆', value: 1 },
      { label: '定个闹钟但不着急，吃完早餐再开工', value: 2 },
      { label: '7点起床，边走路边听播客，到咖啡馆就开干', value: 3 }
    ]
  },
  {
    id: 'q2', dim: 'D1',
    text: '周围的人都在赶deadline，你会？',
    options: [
      { label: '关我什么事，我按自己的节奏来', value: 1 },
      { label: '稍微加快一点，但不至于丢掉生活', value: 2 },
      { label: '被这种氛围感染了！冲冲冲！', value: 3 }
    ]
  },
  {
    id: 'q3', dim: 'D2',
    text: '你一天中最高效的工作时间大概有多长？',
    options: [
      { label: '3-4小时，剩下的时间我要用来体验生活', value: 1 },
      { label: '5-6小时，该干的干完就收工', value: 2 },
      { label: '8小时+，我在心流状态里根本停不下来', value: 3 }
    ]
  },
  {
    id: 'q4', dim: 'D2',
    text: '如果一个项目提前做完了，你会？',
    options: [
      { label: '太好了！出门逛街/冲浪/晒太阳', value: 1 },
      { label: '看看有没有可以优化的地方，或者读会儿书', value: 2 },
      { label: '立刻开始下一个项目，空闲让我焦虑', value: 3 }
    ]
  },
  {
    id: 'q5', dim: 'D3',
    text: '到一个新城市，你第一周会怎么做？',
    options: [
      { label: '找一个安静的角落安顿好，享受独处的探索', value: 1 },
      { label: '去一两个co-working space看看，碰到合眼缘的人聊聊', value: 2 },
      { label: '马上加入当地数字游民社群，报名所有社交活动', value: 3 }
    ]
  },
  {
    id: 'q6', dim: 'D3',
    text: '周五晚上，你最想做什么？',
    options: [
      { label: '窝在住处看电影/看书，享受安静的夜晚', value: 1 },
      { label: '和一两个朋友吃个饭，小酌几杯', value: 2 },
      { label: '今晚有游民聚会！去认识新朋友！', value: 3 }
    ]
  },
  {
    id: 'q7', dim: 'D4',
    text: '你梦想中的窗外风景是？',
    options: [
      { label: '四季变化的城市街景，看得见银杏变黄、雪花飘落', value: 1 },
      { label: '温暖的阳光和微风，不冷不热刚刚好', value: 2 },
      { label: '棕榈树、蓝天、35度——越热越开心', value: 3 }
    ]
  },
  {
    id: 'q8', dim: 'D4',
    text: '冬天的时候你通常？',
    options: [
      { label: '穿大衣围围巾，享受冬天的仪式感', value: 1 },
      { label: '能不冷最好，但偶尔体验一下冬天也行', value: 2 },
      { label: '我已经飞到南半球了，冬天是什么？', value: 3 }
    ]
  },
  {
    id: 'q9', dim: 'D5',
    text: '你更喜欢住在什么样的地方？',
    options: [
      { label: '安静的小镇，走几步就到海边或田野', value: 1 },
      { label: '有几家好餐厅和咖啡馆的中等城市', value: 2 },
      { label: '灯红酒绿的大都市，24小时不打烊的便利店是底线', value: 3 }
    ]
  },
  {
    id: 'q10', dim: 'D5',
    text: '交通出行你的偏好是？',
    options: [
      { label: '走路或骑车就能到任何地方，不需要地铁', value: 1 },
      { label: '有靠谱的公交或打车软件就行', value: 2 },
      { label: '必须有地铁！四通八达的公共交通是文明的标志', value: 3 }
    ]
  },
  {
    id: 'q11', dim: 'D6',
    text: '周末你更愿意？',
    options: [
      { label: '逛商场、看展览、泡咖啡馆，享受城市生活', value: 1 },
      { label: '郊区走走，拍拍照，不太累的那种', value: 2 },
      { label: '爬山、潜水、冲浪——大自然才是最好的娱乐', value: 3 }
    ]
  },
  {
    id: 'q12', dim: 'D6',
    text: '选住处时，以下哪个最吸引你？',
    options: [
      { label: '市中心，楼下就是便利店和地铁站', value: 1 },
      { label: '有阳台能看到一点绿化就行', value: 2 },
      { label: '必须靠近海滩/山/自然公园，推门就是风景', value: 3 }
    ]
  },
  {
    id: 'q13', dim: 'D7',
    text: '你在一个城市的月均预算大概是？',
    options: [
      { label: '越低越好，$800以内是目标，省下的钱多待几个月', value: 1 },
      { label: '$1500-2500，该享受的享受，不铺张', value: 2 },
      { label: '$3000+，品质生活不将就，好的体验值得花钱', value: 3 }
    ]
  },
  {
    id: 'q14', dim: 'D7',
    text: '一杯咖啡$6，你的反应是？',
    options: [
      { label: '自己泡不香吗？$6够我吃一顿午饭了', value: 1 },
      { label: '看情况，偶尔犒劳自己可以', value: 2 },
      { label: '正常价格，咖啡品质才是关键', value: 3 }
    ]
  },
  {
    id: 'q15', dim: 'D8',
    text: '你的收入来源是？',
    options: [
      { label: '项目制/自由职业，忙一阵闲一阵，刺激', value: 1 },
      { label: '有固定客户打底，偶尔接新项目', value: 2 },
      { label: '远程全职/长期合同，每月固定到账，踏实', value: 3 }
    ]
  },
  {
    id: 'q16', dim: 'D8',
    text: '账上只够撑3个月了，你会？',
    options: [
      { label: '没事，总会有新机会的，先继续享受当下', value: 1 },
      { label: '开始认真找项目了，但不至于恐慌', value: 2 },
      { label: '立刻启动B计划，6个月以上的缓冲才安心', value: 3 }
    ]
  },
  {
    id: 'q17', dim: 'D9',
    text: '你对住处的最低标准是？',
    options: [
      { label: '有床有WiFi就行，青旅合租都没问题', value: 1 },
      { label: '独立房间，干净安全，空调是必须的', value: 2 },
      { label: '至少要有厨房、洗衣机、好椅子和一张大桌子', value: 3 }
    ]
  },
  {
    id: 'q18', dim: 'D9',
    text: '旅行时你的行李是？',
    options: [
      { label: '一个背包走天下，7公斤以内搞定', value: 1 },
      { label: '一个登机箱加一个背包，刚刚好', value: 2 },
      { label: '我有人体工学键盘、显示器支架和降噪耳机，行李箱不够用', value: 3 }
    ]
  },
  {
    id: 'q19', dim: 'D10',
    text: '到了一个不说英语的国家，你会？',
    options: [
      { label: '用翻译App凑合，不需要学当地语言', value: 1 },
      { label: '学几句"你好""谢谢""多少钱"，够用了', value: 2 },
      { label: '报个语言班！点菜不需要指着图片是我的底线', value: 3 }
    ]
  },
  {
    id: 'q20', dim: 'D10',
    text: '关于语言障碍，你觉得？',
    options: [
      { label: '太麻烦了，还是去英语国家或英语普及的地方', value: 1 },
      { label: '有点不方便但也是一种体验', value: 2 },
      { label: '语言障碍？那叫冒险的乐趣！', value: 3 }
    ]
  },
  {
    id: 'q21', dim: 'D11',
    text: '到了一个新城市，你第一顿饭会吃？',
    options: [
      { label: '找一家中餐馆/熟悉的连锁店，先安顿胃', value: 1 },
      { label: '尝尝当地最有名的菜，但不会太冒险', value: 2 },
      { label: '直奔最local的街边摊，越没见过的越要试', value: 3 }
    ]
  },
  {
    id: 'q22', dim: 'D11',
    text: '菜单上有一道你完全看不懂的菜，你会？',
    options: [
      { label: '不冒险，选个看得懂的', value: 1 },
      { label: '问服务员这是什么，听着不太吓人就点', value: 2 },
      { label: '就选它了！人生就是要充满惊喜', value: 3 }
    ]
  },
  {
    id: 'q23', dim: 'D12',
    text: '在一个城市待了3个月，你和当地人的关系通常是？',
    options: [
      { label: '主要混游民圈，和当地人交集不多', value: 1 },
      { label: '认识了几个当地朋友，偶尔一起吃饭', value: 2 },
      { label: '已经被邀请去当地人家里过节了', value: 3 }
    ]
  },
  {
    id: 'q24', dim: 'D12',
    text: '关于融入当地文化，你的态度是？',
    options: [
      { label: '我是过客，体验就好，不需要深入', value: 1 },
      { label: '尊重当地文化，愿意了解和适应', value: 2 },
      { label: '我想像本地人一样生活，去当地人去的地方', value: 3 }
    ]
  },
  {
    id: 'q25', dim: 'D13',
    text: '咖啡馆WiFi突然断了，你的反应？',
    options: [
      { label: '没事，正好可以离线做点别的，或者出去走走', value: 1 },
      { label: '有点烦，但用手机热点顶一下', value: 2 },
      { label: '这家店以后不来了。WiFi不稳定=不存在', value: 3 }
    ]
  },
  {
    id: 'q26', dim: 'D13',
    text: '选择一个城市前，你会先查什么？',
    options: [
      { label: '风景、气候、物价——网速够用就行', value: 1 },
      { label: '物价、安全、网速——都要看看', value: 2 },
      { label: '先查Speedtest数据和co-working space的带宽', value: 3 }
    ]
  },
  {
    id: 'q27', dim: 'D14',
    text: '关于医疗保障，你的态度是？',
    options: [
      { label: '买个SafetyWing就够了，年轻人不需要想太多', value: 1 },
      { label: '需要知道附近有靠谱的医院，以防万一', value: 2 },
      { label: '必须有国际标准医院，定期体检的城市才考虑', value: 3 }
    ]
  },
  {
    id: 'q28', dim: 'D14',
    text: '你在选择目的地时，安全因素有多重要？',
    options: [
      { label: '别太夸张就行，稍微注意点就好', value: 1 },
      { label: '会查一下安全指数，避开高危区域', value: 2 },
      { label: '安全是第一优先级，晚上能安心出门是底线', value: 3 }
    ]
  },
  {
    id: 'q29', dim: 'D15',
    text: '关于签证，你的策略是？',
    options: [
      { label: '免签/落地签走起，到期了换个国家就是', value: 1 },
      { label: '尽量找有数字游民签证的国家，省心', value: 2 },
      { label: '必须有合法长期居留方案，不想过三个月跑一次的日子', value: 3 }
    ]
  },
  {
    id: 'q30', dim: 'D15',
    text: '听说某个梦想城市的签证很难办，你会？',
    options: [
      { label: '那算了，世界那么大，去别的地方', value: 1 },
      { label: '研究一下，看有没有变通的方案', value: 2 },
      { label: '困难是暂时的，我愿意花时间精力搞定合法身份', value: 3 }
    ]
  }
];

export const specialQuestions = [];
