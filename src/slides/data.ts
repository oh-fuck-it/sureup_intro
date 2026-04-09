import type { SlideData } from './types';

export const slides: SlideData[] = [
  // ═══════════════════════════════════════════════════════
  // 开场 · 直接亮剑
  // ═══════════════════════════════════════════════════════

  // P1 · 封面
  {
    id: 'cover',
    layout: 'cover',
    bg: 'white',
    title: 'SureUp - 稳了',
    subtitle: 'AI 校园教·评·管·育一体化系统',
    orbs: [
      { color: 'emerald', size: 750, top: '-25%', left: '-18%', opacity: 0.3, blur: 90 },
      { color: 'sky', size: 600, top: '5%', right: '-15%', opacity: 0.25, blur: 85 },
      { color: 'violet', size: 500, bottom: '-18%', left: '25%', opacity: 0.2, blur: 90 },
    ],
  },

  // P2 · 产品定调
  {
    id: 'contrast-core',
    layout: 'contrast',
    bg: 'frost',
    title: '一个系统，让教学和育人全面智能化',
    subtitle: 'AI-POWERED CAMPUS',
    image: '/images/platform-preview.png',
    imageAlt: 'SureUp 平台预览',
    orbs: [
      { color: 'blue', size: 800, top: '-20%', left: '-10%', opacity: 0.3, blur: 100 },
      { color: 'cyan', size: 700, bottom: '-15%', right: '-8%', opacity: 0.25, blur: 95 },
      { color: 'emerald', size: 500, bottom: '0%', left: '5%', opacity: 0.2, blur: 85 },
    ],
  },

  // P3 · 平台能力一览
  {
    id: 'overview-table',
    layout: 'table',
    bg: 'default',
    title: '平台能力一览',
    subtitle: '学业成绩和全面发展，从来不是二选一。\n稳了让考试更精准、让评价更多元——两条腿走路，数据驱动每一步。',
    tableHeaders: ['场景', '教师 / 班主任', '管理者 / 教务', '学生', '家长'],
    tableRows: [
      ['日常评价', '课堂点评、加减分、小组评价', '全校积分看板、趋势分析', '查看积分与变动', '查看孩子评价明细'],
      ['课堂运营', '考勤、作业、请假审批', '出勤统计、异常预警', '提交作业、请假', '在线请假、查看出勤'],
      ['考试阅卷', '上传试卷、AI 批改、复核', '学情分析、年级对比', '自助查分查卷', '查看成绩与趋势'],
      ['德育管理', '活动签到评分、班级量化', '驾驶舱总览、德育报告', '活动参与记录', '成长档案动态'],
      ['预警干预', '接收预警、约谈记录', '预警看板、处置追溯', '—', '接收通知'],
      ['报表材料', '—', '一键生成迎检报表', '—', '—'],
      ['学生激励', '课堂展示宠物、抽奖', '激励规则配置', '宠物养成、商城', '同步查看宠物'],
      ['智能助手', '语音录入、备课辅助', '报表生成、考后分析', '—', '—'],
    ],
    body: ['数据全程自动流转——教师的每一次操作都在为驾驶舱、报表和成长档案积累数据。'],
    orbs: [
      { color: 'cyan', size: 750, top: '-20%', right: '-12%', opacity: 0.35, blur: 90 },
      { color: 'blue', size: 650, bottom: '-18%', left: '-10%', opacity: 0.3, blur: 85 },
      { color: 'emerald', size: 550, top: '20%', left: '50%', opacity: 0.2, blur: 80 },
      { color: 'violet', size: 450, top: '40%', left: '-15%', opacity: 0.22, blur: 80 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 第一章 · 管理者看到什么
  // ═══════════════════════════════════════════════════════

  {
    id: 'ch1-breath',
    layout: 'breath',
    chapter: '第一章 · 管理者看到什么',
    chapterIndex: 1,
    subtitle: '第一章',
    quote: '打开就知道，全校正在发生什么',
    bg: 'ocean',
    orbs: [
      { color: 'blue', size: 850, top: '-20%', right: '0%', opacity: 0.45, blur: 95 },
      { color: 'cyan', size: 750, bottom: '-18%', left: '-10%', opacity: 0.4, blur: 90 },
      { color: 'indigo', size: 600, top: '20%', left: '10%', opacity: 0.3, blur: 85 },
      { color: 'teal', size: 500, bottom: '5%', right: '15%', opacity: 0.25, blur: 80 },
    ],
  },

  // 数据驾驶舱（总览）
  {
    id: 'cockpit',
    layout: 'content',
    bg: 'mint',
    chapter: '第一章 · 管理者看到什么',
    chapterIndex: 1,
    title: '全校运行状态，\n一屏掌握',
    body: [
      '不需要逐班询问，不需要等周会汇报。打开驾驶舱，核心指标一目了然。',
      '异常指标自动标红。哪个班级出勤率低了、哪个年级成绩波动了——不用找人问，系统自己告诉你。',
    ],
    highlights: [
      { label: '今日全校出勤率', value: '97.2%' },
      { label: '本周德育事件', value: '128' },
      { label: '待处理审批', value: '5' },
      { label: '预警学生', value: '3' },
    ],
    images: [
      { src: '/images/cockpit-overview.png', alt: '数据驾驶舱主界面 — 全校出勤率、评价积分、趋势图表一屏呈现', frame: 'desktop' },
      { src: '/images/cockpit-students.png', alt: '学生管理与个体画像 — 预警标签、积分与出勤状态一目了然', frame: 'desktop' },
    ],
    imageDisplay: 'carousel' as const,
    imagePosition: 'right',
    orbs: [
      { color: 'emerald', size: 780, top: '-20%', left: '-15%', opacity: 0.35, blur: 90 },
      { color: 'teal', size: 650, bottom: '-15%', right: '-10%', opacity: 0.3, blur: 85 },
      { color: 'sky', size: 550, top: '30%', right: '10%', opacity: 0.22, blur: 80 },
      { color: 'lime', size: 450, bottom: '10%', left: '20%', opacity: 0.2, blur: 75 },
    ],
  },

  // 数据驾驶舱（逐层查看）
  {
    id: 'cockpit-drilldown',
    layout: 'timeline',
    bg: 'frost',
    chapter: '第一章 · 管理者看到什么',
    chapterIndex: 1,
    title: '从全校到个人，逐层看清',
    subtitle: '点击任何一个指标，都可以逐级下钻，支持按学科、时间段、评价维度灵活筛选。',
    timeline: [
      { date: '全校', title: '哪个年级有异常？', description: '全校维度总览核心指标，\n异常年级自动标红' },
      { date: '年级', title: '哪个班级需要关注？', description: '年级内各班横向对比，\n聚焦问题班级' },
      { date: '班级', title: '哪些学生情况特殊？', description: '班级多维数据卡片，\n学生个体情况一目了然' },
      { date: '学生', title: '最近成绩、出勤、评价怎样？', description: '个体画像完整呈现，\n纵向变化趋势清晰' },
    ],
    orbs: [
      { color: 'blue', size: 750, top: '-18%', left: '-12%', opacity: 0.32, blur: 90 },
      { color: 'sky', size: 650, bottom: '-15%', right: '-8%', opacity: 0.28, blur: 85 },
      { color: 'indigo', size: 550, top: '25%', right: '15%', opacity: 0.22, blur: 80 },
      { color: 'cyan', size: 450, bottom: '10%', left: '10%', opacity: 0.2, blur: 75 },
    ],
  },

  // 多维预警 + 处置留痕
  {
    id: 'alerts-combined',
    layout: 'content',
    bg: 'peach',
    chapter: '第一章 · 管理者看到什么',
    chapterIndex: 1,
    title: '异常自动浮出，\n处置全程留痕',
    body: [
      '单看成绩下降，可能只是发挥失常。但如果一个学生成绩在跌、出勤在少、课堂积分也在降——三项同时异常，系统自动标记为重点关注。',
      '从发现异常到处置完成，全链路留痕。上级来问，打开系统每一步都有时间、有内容、有结果。',
    ],
    highlights: [
      { label: '预警分级', description: '按严重程度自动分级推送' },
      { label: '自定义规则', description: '支持自定义触发条件和阈值' },
      { label: '全链路留痕', description: '发现 → 约谈 → 通知 → 跟进 → 归档，每一步自动记录' },
      { label: '通知回执', description: '家长通知记录发送与已读时间' },
    ],
    imagePosition: 'right',
    images: [
      { src: '/images/alert-list.png', alt: '预警列表界面 — 学生姓名、预警等级（红/橙/黄）、触发因素（成绩↓ 出勤↓ 积分↓）、处置状态', frame: 'desktop' },
      { src: '/images/alert-detail.png', alt: '预警详情界面 — 学生画像、触发条件明细、处置时间线', frame: 'desktop' },
    ],
    imageDisplay: 'carousel' as const,
    orbs: [
      { color: 'orange', size: 780, top: '-20%', right: '-12%', opacity: 0.35, blur: 90 },
      { color: 'rose', size: 680, bottom: '-18%', left: '0%', opacity: 0.3, blur: 85 },
      { color: 'amber', size: 550, top: '25%', left: '-10%', opacity: 0.25, blur: 80 },
      { color: 'fuchsia', size: 450, bottom: '10%', right: '20%', opacity: 0.2, blur: 75 },
    ],
  },

  // 报表与迎检（新增）
  {
    id: 'reports-inspection',
    layout: 'content',
    bg: 'lavender',
    chapter: '第一章 · 管理者看到什么',
    chapterIndex: 1,
    title: '迎检通知来了，\n你不用慌',
    subtitle: '平台在日常运行中持续积累数据，报表随时都是现成的。通知来了，选模板、点导出、交材料——整个过程不超过一天。',
    body: [
      '不是学期末让班主任突击补填表格，而是每天都在自动归集。上级要什么格式的材料，系统直接按标准输出。',
    ],
    highlights: [
      { value: '7 类', label: '报表自动生成', description: '教学质量、德育工作、综合素质评价、出勤统计等' },
      { value: '1 键', label: '标准格式导出', description: '对标教育部要求，迎检直接可用' },
      { value: '实时', label: '数据随时就绪', description: '不依赖学期末突击，日常积累随取随用' },
      { value: '批量', label: '全校一次生成', description: '综合素质评价档案批量导出，班主任补充评语即可' },
    ],
    imagePosition: 'right',
    images: [
      { src: '/images/eval-archive.png', alt: '综合素质评价档案 — 五维雷达图 + 学生个体完整成长数据', frame: 'desktop' },
      { src: '/images/teaching-quality.png', alt: '教学质量分析报告 — 年级趋势、班级对比、学科得分率', frame: 'desktop' },
    ],
    imageDisplay: 'carousel' as const,
    orbs: [
      { color: 'violet', size: 760, top: '-22%', left: '-15%', opacity: 0.38, blur: 92 },
      { color: 'fuchsia', size: 650, bottom: '-12%', right: '0%', opacity: 0.28, blur: 85 },
      { color: 'blue', size: 580, top: '25%', right: '-10%', opacity: 0.28, blur: 85 },
      { color: 'rose', size: 470, bottom: '12%', left: '10%', opacity: 0.2, blur: 75 },
    ],
  },

  // 实践案例
  {
    id: 'case-study',
    layout: 'case',
    bg: 'sunset',
    chapter: '第一章 · 管理者看到什么',
    chapterIndex: 1,
    title: '学校怎么说',
    quote: '上学期迎检，通知下来到材料交上去，总共两天。以前光整理数据就要一周。现在平台一直在跑，数据随时都是现成的。',
    quoteAuthor: '某初中教务主任',
    highlights: [
      { label: '迎检准备', value: '2天' },
      { label: '教师日均录入', value: '<3分钟' },
      { label: '数据覆盖率', value: '98%' },
      { label: '预警响应', value: '24h内' },
    ],
    orbs: [
      { color: 'orange', size: 750, top: '-20%', left: '-12%', opacity: 0.35, blur: 90 },
      { color: 'amber', size: 650, top: '10%', right: '-15%', opacity: 0.3, blur: 85 },
      { color: 'rose', size: 600, bottom: '-15%', left: '18%', opacity: 0.28, blur: 85 },
      { color: 'fuchsia', size: 450, bottom: '8%', right: '12%', opacity: 0.2, blur: 75 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 第二章 · 多维评价体系
  // ═══════════════════════════════════════════════════════

  {
    id: 'ch2-breath',
    layout: 'breath',
    bg: 'deep',
    chapter: '第二章 · 多维评价体系',
    chapterIndex: 2,
    subtitle: '第二章',
    quote: '评价不只是一次考试、一个分数，\n而是每一天都在记录的成长',
    orbs: [
      { color: 'cyan', size: 800, top: '-15%', right: '5%', opacity: 0.4, blur: 95 },
      { color: 'indigo', size: 700, bottom: '-15%', left: '0%', opacity: 0.35, blur: 90 },
      { color: 'blue', size: 600, top: '30%', left: '-12%', opacity: 0.28, blur: 85 },
      { color: 'violet', size: 500, bottom: '15%', right: '-8%', opacity: 0.22, blur: 80 },
    ],
  },

  // 积分体系介绍
  {
    id: 'points-intro',
    layout: 'intro',
    bg: 'frost',
    chapter: '第二章 · 多维评价体系',
    chapterIndex: 2,
    title: '一套积分体系，\n串起所有评价数据',
    subtitle: '教师在课堂上给学生一个评价，系统自动把它变成一条积分记录。但不只是教师点评——考勤、作业、活动参与，也会自动产生积分。所有积分按维度归类，构成每个学生完整的过程性评价数据。',
    body: [
      '积分就是"老师觉得这个学生今天表现怎么样"的数字化记录。每一条记录带有维度标签（比如纪律、发言、合作），按天累积，按周汇总，按学期归档——驾驶舱、预警、成长档案、迎检报表，全部由这些数据驱动。学生端同步可见：每个学生拥有一只 AI 生成的专属宠物，积分越高宠物成长越快。',
    ],
    highlights: [
      { label: '积分 = 评价记录', description: '每一次点评自动量化为带维度标签的积分' },
      { label: '多来源自动汇入', description: '课堂点评、考勤、作业评级、活动参与' },
      { label: 'AI 宠物', description: '积分驱动宠物成长，进化可见，学生主动参与' },
      { label: '全局数据驱动', description: '驾驶舱、预警、档案、报表全部由积分产生' },
    ],
    imagePosition: 'right',
    images: [
      { src: '/images/evaluation-mobile.png', alt: '积分排行榜 — 班级积分总览与学生排名', frame: 'mobile' },
    ],
    orbs: [
      { color: 'cyan', size: 780, top: '-22%', left: '10%', opacity: 0.35, blur: 90 },
      { color: 'blue', size: 650, bottom: '-15%', right: '-10%', opacity: 0.3, blur: 85 },
      { color: 'violet', size: 550, top: '20%', right: '15%', opacity: 0.22, blur: 80 },
      { color: 'emerald', size: 470, bottom: '10%', left: '-12%', opacity: 0.2, blur: 75 },
    ],
  },

  // 日常评价 — 怎么用
  {
    id: 'evaluation',
    layout: 'content',
    bg: 'default',
    chapter: '第二章 · 多维评价体系',
    chapterIndex: 2,
    title: '3 秒完成一次评价',
    body: [
      '上课时打开手机或网页 → 选学生 → 选评价维度（比如"课堂发言 +3"或"违反纪律 -2"）→ 完成。整个过程不超过 3 秒，不打断教学节奏。',
      '但积分不只来自教师手动评价。学生迟到，考勤自动扣分；作业批改完成，评级自动转为积分；参加德育活动签到，活动积分自动到账。教师只需要正常教学，大部分数据是系统帮你记的。',
    ],
    highlights: [
      { label: '≈ 3 秒', description: '教师手动评价全流程' },
      { label: '自定义维度', description: '纪律、发言、合作、创意……学校自主设定' },
      { label: '自动积分', description: '考勤、作业评级、活动参与自动产生积分' },
    ],
    imagePosition: 'right',
    images: [
      { src: '/images/evaluation-web.png', alt: '日常评价 Web 端 — 班级学生列表、点评操作面板', frame: 'desktop' },
      { src: '/images/evaluation-students.png', alt: '快捷点评 — 学生列表与积分总览', frame: 'mobile' },
      { src: '/images/evaluation-categories.png', alt: '快捷点评 — 评价维度与积分项选择', frame: 'mobile' },
      { src: '/images/evaluation-profile.png', alt: '学生档案 — 积分记录与成长轨迹', frame: 'mobile' },
    ],
    imageDisplay: 'device-showcase' as const,
    orbs: [
      { color: 'blue', size: 780, top: '-22%', left: '10%', opacity: 0.35, blur: 90 },
      { color: 'sky', size: 650, bottom: '-15%', right: '-10%', opacity: 0.3, blur: 85 },
      { color: 'emerald', size: 550, top: '20%', right: '15%', opacity: 0.2, blur: 80 },
      { color: 'cyan', size: 470, bottom: '10%', left: '-12%', opacity: 0.25, blur: 75 },
    ],
  },

  // 日常评价（下）
  {
    id: 'evaluation-score',
    layout: 'content',
    bg: 'mint',
    chapter: '第二章 · 多维评价体系',
    chapterIndex: 2,
    title: '积分实时汇总，\n变化一目了然',
    body: [
      '每一条评价自动转化为积分，不需要手动统计，系统实时计算。班级排行榜每周更新，个人趋势图随时可查。',
      '积分规则由学校完全自定义：哪些维度、每个规则加几分减几分、每天最多触发几次，都可以配置。不同年级可以设置不同规则。学生对积分有异议，可以在线提交申诉，班主任审核。',
    ],
    highlights: [
      { label: '班级积分总览', description: '排行榜实时更新' },
      { label: '趋势图', description: '哪些学生在进步，哪些在下滑' },
      { label: '低积分预警', description: '低积分学生自动标记' },
      { label: '积分申诉', description: '学生提交，班主任在线审核' },
    ],
    imagePosition: 'left',
    images: [
      { src: '/images/evaluation-mobile.png', alt: '教师端移动首页 — 快捷点评、积分排行、点评记录', frame: 'mobile' },
      { src: '/images/evaluation-web.png', alt: '日常评价 Web 端 — 班级学生列表、点评操作面板', frame: 'desktop' },
    ],
    imageDisplay: 'duo-device' as const,
    orbs: [
      { color: 'emerald', size: 750, top: '-20%', right: '-10%', opacity: 0.35, blur: 90 },
      { color: 'teal', size: 650, bottom: '-15%', left: '-10%', opacity: 0.3, blur: 85 },
      { color: 'blue', size: 550, top: '22%', left: '8%', opacity: 0.22, blur: 80 },
      { color: 'sky', size: 460, bottom: '8%', right: '12%', opacity: 0.2, blur: 75 },
    ],
  },

  // 多维评价体系（上）— 评什么
  {
    id: 'eval-dimensions',
    layout: 'feature-cards',
    bg: 'default',
    chapter: '第二章 · 多维评价体系',
    chapterIndex: 2,
    subtitle: '多维评价体系',
    title: '不只看分数，但也绝不回避分数',
    features: [
      { icon: '📚', title: '学业表现', description: 'AI 阅卷成绩、作业评级、知识点掌握率、学科趋势——考试和作业数据自动入档，该抓成绩的时候，数据比经验更准。' },
      { icon: '🌟', title: '品德与行为', description: '课堂纪律、团队合作、主动发言、互助表现——教师点评自动转为品德积分，考勤迟到自动扣分。过程性数据取代学期末的主观评语。' },
      { icon: '🏃', title: '体质·艺术·劳动', description: '体育达标、艺术活动参与、劳动实践——通过德育活动签到和教师评分自动归集。教师不需要填评价表，正常教学就是在积累数据。' },
    ],
    orbs: [
      { color: 'amber', size: 740, top: '-18%', right: '-10%', opacity: 0.35, blur: 90 },
      { color: 'violet', size: 640, bottom: '-15%', left: '-8%', opacity: 0.3, blur: 85 },
      { color: 'blue', size: 540, top: '25%', left: '10%', opacity: 0.22, blur: 80 },
      { color: 'rose', size: 450, bottom: '8%', right: '15%', opacity: 0.2, blur: 75 },
    ],
  },

  // 宠物系统 — 积分可视化 + 自定义生成 + 激励生态
  {
    id: 'pet-generation',
    layout: 'content',
    bg: 'frost',
    chapter: '第二章 · 多维评价体系',
    chapterIndex: 2,
    title: '让评价看得见，\n让进步有动力',
    subtitle: '每位学生可以通过 AI 生成自己的专属宠物。每获得 1 积分，宠物同步获得 1 经验值——经验累积触发升级，达到关键等级时宠物进化变形。得分时兴奋发光，被扣分时难过低落。',
    body: [
      '学生自己起名、选风格、写描述，AI 即时生成独一无二的形象——这不是系统分配的头像，是"我的宠物"。积分还可以在商城兑换奖品、解锁成就徽章、参与限时抽奖。教师投屏展示全班宠物状态，进化时触发全班可见的动画。',
    ],
    highlights: [
      { label: '1 积分 = 1 经验值', description: '积分驱动宠物升级与进化' },
      { label: 'AI 生成专属形象', description: '学生自定义，每只宠物独一无二' },
      { label: '积分商城 + 徽章', description: '兑换奖品、解锁成就、限时抽奖' },
      { label: '课堂投屏展示', description: '宠物进化全班可见，高光时刻' },
    ],
    imagePosition: 'right',
    images: [
      { video: '/videos/pet-generation.mp4', alt: '宠物生成界面 — 学生自定义宠物外观', frame: 'desktop' },
    ],
    imageDisplay: 'single' as const,
    orbs: [
      { color: 'violet', size: 740, top: '-18%', left: '-10%', opacity: 0.35, blur: 90 },
      { color: 'blue', size: 640, bottom: '-15%', right: '-8%', opacity: 0.3, blur: 85 },
      { color: 'cyan', size: 540, top: '25%', right: '12%', opacity: 0.22, blur: 80 },
      { color: 'rose', size: 450, bottom: '8%', left: '15%', opacity: 0.2, blur: 75 },
    ],
  },

  // 积分系统效果数据
  {
    id: 'incentive-results',
    layout: 'case',
    bg: 'warm',
    chapter: '第二章 · 多维评价体系',
    chapterIndex: 2,
    title: '实际效果',
    quote: '我们最初担心宠物系统会让学生分心，结果恰恰相反。后进生变化最大——原来上课从不举手的孩子，现在为了让宠物进化，会主动回答问题。积分排行榜每周一更新，全班都盯着看。',
    quoteAuthor: '某实验中学七年级年级主任，使用 3 个月后',
    highlights: [
      { label: '教师日均评价', value: '12 次', description: '过去靠纸质记录每周一两次，现在随手就评' },
      { label: '课堂主动发言率', value: '+40%', description: '学生知道表现与积分挂钩，参与度显著提升' },
      { label: '作业按时提交率', value: '96%', description: '从 82% 提升，作业完成与宠物成长直接关联' },
      { label: '综评数据完整度', value: '98%', description: '不再需要学期末补录，积分自动归集为过程性评价' },
    ],
    orbs: [
      { color: 'orange', size: 750, top: '-20%', left: '-12%', opacity: 0.35, blur: 90 },
      { color: 'amber', size: 650, top: '10%', right: '-15%', opacity: 0.3, blur: 85 },
      { color: 'rose', size: 600, bottom: '-15%', left: '18%', opacity: 0.28, blur: 85 },
      { color: 'fuchsia', size: 450, bottom: '8%', right: '12%', opacity: 0.2, blur: 75 },
    ],
  },

  // 完整成长记录 — 第二章收尾
  {
    id: 'growth-archive',
    layout: 'content',
    bg: 'lavender',
    chapter: '第二章 · 多维评价体系',
    chapterIndex: 2,
    title: '每个学生，\n都有一份成长记录',
    subtitle: '学业成绩只是一个维度。系统在日常运行中为每位学生归集数据，自动生成综合素质评价档案',
    body: [
      '每天都在收集。教师正常使用阅卷、点评、考勤功能，档案自然丰满起来。',
      '导出时按教育部标准格式生成，可直接用于迎检材料、升学档案、学校年度存档。支持配置评语模板，班主任可补充个性化评语，批量生成，统一格式。',
    ],
    highlights: [
      { value: '每人一档', label: '全校学生覆盖', description: '五维数据持续自动归集' },
      { value: '实时', label: '数据日常积累', description: '评价、考试、考勤每日汇入' },
      { value: '1 键', label: '标准格式导出', description: '迎检、存档直接可用' },
      { value: '五维评价', label: '', description: '对标教育部综合素质评价要求' },
    ],
    imagePosition: 'right',
    images: [
      { src: '/images/eval-archive.png', alt: '综合素质评价档案 — 五维雷达图 + 学生个体完整成长数据', frame: 'desktop' },
      { src: '/images/teaching-quality.png', alt: '教学质量分析报告 — 年级趋势、班级对比、学科得分率', frame: 'desktop' },
    ],
    imageDisplay: 'carousel' as const,
    orbs: [
      { color: 'violet', size: 760, top: '-22%', left: '-15%', opacity: 0.38, blur: 92 },
      { color: 'fuchsia', size: 650, bottom: '-12%', right: '0%', opacity: 0.28, blur: 85 },
      { color: 'blue', size: 580, top: '25%', right: '-10%', opacity: 0.28, blur: 85 },
      { color: 'rose', size: 470, bottom: '12%', left: '10%', opacity: 0.2, blur: 75 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 第三章 · 考试与学情
  // ═══════════════════════════════════════════════════════

  {
    id: 'ch3-breath',
    layout: 'breath',
    bg: 'ocean',
    chapter: '第三章 · 考试与学情',
    chapterIndex: 3,
    subtitle: '第三章',
    quote: '将批改交给 AI,\n把时间还给老师',
    orbs: [
      { color: 'indigo', size: 820, top: '-18%', left: '5%', opacity: 0.42, blur: 95 },
      { color: 'blue', size: 720, bottom: '-15%', right: '0%', opacity: 0.38, blur: 90 },
      { color: 'violet', size: 620, top: '25%', right: '-10%', opacity: 0.3, blur: 85 },
      { color: 'cyan', size: 520, bottom: '10%', left: '-8%', opacity: 0.25, blur: 80 },
    ],
  },

  // 阅卷全流程
  {
    id: 'grading-flow',
    layout: 'timeline',
    bg: 'frost',
    chapter: '第三章 · 考试与学情',
    chapterIndex: 3,
    title: '✅ 全流程智能批改',
    subtitle: '教师每天时间占比最大的就是批改。从上传到出分，AI 全程接手——教师只需最终确认，省下的时间回到课堂、回到学生身边。',
    timeline: [
      { date: '上传', title: '拍照或扫描上传', description: '纸质试卷直接上传\n支持批量导入整班答卷' },
      { date: '解析', title: 'AI 识别结构与评分标准', description: '灰度优化、答题区标定、结构识别\n生成评分细则，试改对齐教师标准' },
      { date: '批改', title: '逐题智能批改', description: '阅读每位学生的作答\n按评分标准逐条给分' },
      { date: '出分', title: '成绩与报告就绪', description: '全班成绩自动汇总\n学情报告同步生成' },
    ],
    images: [
      { src: '/images/grading-create-exam.png', alt: '创建考试 — 选择范围、上传试卷与答案', frame: 'desktop', caption: '创建考试 — 选择考试范围、上传试卷与答案' },
      { src: '/images/grading-structure-rubric.png', alt: 'AI 识别试卷结构与评分标准', frame: 'desktop', caption: 'AI 自动识别试卷结构，生成评分细则' },
      { src: '/images/grading-detail-scoring.png', alt: '批改详情 — 采分点明细', frame: 'desktop', caption: '批改详情 — 逐题采分点明细与得分扣分理由' },
    ],
    imageDisplay: 'carousel' as const,
    orbs: [
      { color: 'blue', size: 760, top: '-20%', left: '-10%', opacity: 0.35, blur: 90 },
      { color: 'indigo', size: 660, bottom: '-15%', right: '-8%', opacity: 0.3, blur: 85 },
      { color: 'sky', size: 560, top: '22%', right: '12%', opacity: 0.22, blur: 80 },
      { color: 'violet', size: 460, bottom: '10%', left: '15%', opacity: 0.2, blur: 75 },
    ],
  },

  // 校准 + AI 批改深度
  {
    id: 'grading-depth',
    layout: 'content',
    bg: 'default',
    chapter: '第三章 · 考试与学情',
    chapterIndex: 3,
    title: '先对齐标准，\n再全量批改',
    subtitle: '全量批改前，AI 先批一小批样本。教师复核、用自然语言调整——"这道题偏严了，步骤对但答案算错的给一半分"——校准满意后一键启动。',
    body: [
      '每一个得分点都标注了理由：命中哪条标准得几分，一目了然。错因自动归类——概念混淆、计算失误、审题不清，教师不用逐份翻阅就能精准定位薄弱环节。',
    ],
    highlights: [
      { label: '对话式校准', description: '用自然语言告诉 AI 偏松还是偏严' },
      { label: '逐题批注', description: '每个得分点标注命中的评分标准' },
      { label: '错因归类', description: '概念混淆、计算失误、审题不清自动分类' },
      { label: '一键重批', description: '调整标准后，单份或全量重新批改' },
    ],
    imagePosition: 'right',
    images: [
      { src: '/images/grading-rubric-calibration.png', alt: '评分标准校准', frame: 'desktop', caption: '教师复核评分细则与学生作答对照' },
      { src: '/images/grading-chat-calibration.png', alt: '对话式校准', frame: 'desktop', caption: '用自然语言告诉 AI 调整评分标准' },
    ],
    imageDisplay: 'carousel' as const,
    orbs: [
      { color: 'sky', size: 740, top: '-18%', right: '-10%', opacity: 0.32, blur: 88 },
      { color: 'blue', size: 640, bottom: '-15%', left: '-8%', opacity: 0.28, blur: 82 },
      { color: 'indigo', size: 540, top: '25%', left: '10%', opacity: 0.22, blur: 78 },
      { color: 'cyan', size: 450, bottom: '8%', right: '15%', opacity: 0.18, blur: 75 },
    ],
  },

  // 批改详情 — 采分点 + 评语
  {
    id: 'grading-detail',
    layout: 'content',
    bg: 'frost',
    chapter: '第三章 · 考试与学情',
    chapterIndex: 3,
    title: '不只是一个分数，\n而是一整份批注',
    subtitle: '打开一份批改详情，看到的不是笼统的总分，而是和手批一样详细的逐条批注。',
    body: [
      '每道主观题都展示完整的采分点明细——每条评分标准对应得了几分、为什么得、为什么扣，得分理由与失分原因逐条列出。题目最后还有一段 AI 撰写的整体评语，点评作答的优缺点和改进方向。教师复核时一目了然，学生查卷时也能真正知道自己错在哪。',
    ],
    highlights: [
      { label: '采分点明细', description: '每条评分标准逐一展示，得分与扣分理由清晰标注' },
      { label: '整体评语', description: 'AI 为每道主观题撰写评语，点评表现与改进方向' },
      { label: '得分理由', description: '命中了哪条标准、得了几分，绿色标记一目了然' },
      { label: '失分原因', description: '哪里扣分、为什么扣，红色标记精准定位' },
    ],
    imagePosition: 'right',
    images: [
      { src: '/images/grading-criteria-detail.png', alt: '采分点详情 — 逐条得分标准与评语', frame: 'desktop', caption: '采分点详情 — 每条标准的得分理由与 AI 评语' },
      { src: '/images/grading-report-overview.png', alt: '批改报告 — 总分、题型得分与逐题明细', frame: 'desktop', caption: '批改报告 — 总分概览与各题型得分分布' },
    ],
    imageDisplay: 'carousel' as const,
    orbs: [
      { color: 'indigo', size: 720, top: '-18%', left: '-10%', opacity: 0.32, blur: 88 },
      { color: 'blue', size: 620, bottom: '-15%', right: '-8%', opacity: 0.28, blur: 82 },
      { color: 'violet', size: 520, top: '25%', right: '12%', opacity: 0.22, blur: 78 },
      { color: 'sky', size: 440, bottom: '8%', left: '15%', opacity: 0.18, blur: 75 },
    ],
  },

  // AI vs 教师对比
  {
    id: 'grading-accuracy',
    layout: 'grading-chart',
    bg: 'mint',
    chapter: '第三章 · 考试与学情',
    chapterIndex: 3,
    title: '批改质量有保证 ',
    subtitle: '同一批试卷，AI 与教师独立批改，逐题对照评分结果。',
    body: [
      'AI 给分与教师手批的一致性，已经高于两位教师之间的互评差异。老师不用担心"AI 改不准"——复核的时候大部分分数不需要调整，真正需要改的不到 3%。',
    ],
    orbs: [
      { color: 'emerald', size: 740, top: '-20%', left: '-12%', opacity: 0.35, blur: 90 },
      { color: 'teal', size: 640, bottom: '-15%', right: '-10%', opacity: 0.3, blur: 85 },
      { color: 'blue', size: 540, top: '22%', right: '8%', opacity: 0.22, blur: 80 },
      { color: 'cyan', size: 450, bottom: '10%', left: '12%', opacity: 0.2, blur: 75 },
    ],
  },

  // 考后分析
  {
    id: 'grading-analysis',
    layout: 'screenshot-showcase',
    bg: 'default',
    chapter: '第三章 · 考试与学情',
    chapterIndex: 3,
    subtitle: '考后分析',
    title: '批改完成，报告即出',
    gallery: [
      { image: '/images/analysis-1.png', caption: '年级总览 — 均分、及格率、分数段分布一屏掌握' },
      { image: '/images/analysis-3.png', caption: 'AI 错因聚合 — 全班共性错误自动归类，概念混淆、计算失误、审题不清一目了然', featured: true },
      { image: '/images/analysis-5.png', caption: '成绩排名 — 全班学生各维度数据纵览' },
      { image: '/images/analysis-2.png', caption: '题目详情 — 逐题得分率与作答统计' },
      { image: '/images/analysis-4.png', caption: '得分矩阵 — 学生 × 题号得分热力图' },
    ],
    orbs: [
      { color: 'blue', size: 730, top: '-18%', right: '-10%', opacity: 0.32, blur: 88 },
      { color: 'indigo', size: 630, bottom: '-15%', left: '-8%', opacity: 0.28, blur: 82 },
      { color: 'violet', size: 530, top: '25%', left: '10%', opacity: 0.22, blur: 78 },
      { color: 'sky', size: 440, bottom: '8%', right: '15%', opacity: 0.18, blur: 75 },
    ],
  },

  // 题库沉淀
  {
    id: 'grading-question-bank',
    layout: 'content',
    bg: 'frost',
    chapter: '第三章 · 考试与学情',
    chapterIndex: 3,
    title: '每考一次，\n题库就多一点',
    subtitle: '每次考试的每道题目都会被结构化识别，连同答案和评分标准一起沉淀进校本题库。考得越多，题库越厚。',
    highlights: [
      { label: '自动入库', description: '题目、答案、评分标准、学生作答数据随考试自动归档' },
      { label: '语义搜索', description: '按知识点、题型、难度搜索已有题目，不用翻文件夹' },
      { label: '复用组卷', description: '从题库直接选题组成新试卷，评分标准直接复用' },
      { label: 'AI 生成同类题', description: '基于已有题目生成变式题，举一反三自动出题' },
    ],
    imagePosition: 'right',
    images: [
      { src: '/images/question-bank-list.png', alt: '题库中心', frame: 'desktop', caption: '题库中心 — 所有考过的题目自动入库，按学科浏览与搜索' },
      { src: '/images/question-bank-detail.png', alt: '题目详情', frame: 'desktop', caption: '题目详情 — 题目结构、参考答案与评分标准' },
      { src: '/images/question-bank-material.png', alt: '知识点与材料', frame: 'desktop', caption: '知识点标签与试题材料图片' },
    ],
    imageDisplay: 'carousel' as const,
    orbs: [
      { color: 'blue', size: 740, top: '-18%', left: '-10%', opacity: 0.32, blur: 88 },
      { color: 'sky', size: 640, bottom: '-15%', right: '-8%', opacity: 0.28, blur: 82 },
      { color: 'indigo', size: 540, top: '25%', right: '12%', opacity: 0.22, blur: 78 },
      { color: 'cyan', size: 450, bottom: '8%', left: '15%', opacity: 0.18, blur: 75 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // 第四章 · 课堂运营与家校协同
  // ═══════════════════════════════════════════════════════

  {
    id: 'ch4-breath',
    layout: 'breath',
    bg: 'sunset',
    chapter: '第四章 · 课堂运营与家校',
    chapterIndex: 4,
    subtitle: '第四章',
    quote: '让教师专注教学\n杂事交给系统',
    orbs: [
      { color: 'amber', size: 800, top: '-15%', left: '5%', opacity: 0.38, blur: 95 },
      { color: 'orange', size: 700, bottom: '-12%', right: '0%', opacity: 0.32, blur: 90 },
      { color: 'rose', size: 600, top: '28%', right: '-10%', opacity: 0.25, blur: 85 },
      { color: 'fuchsia', size: 500, bottom: '10%', left: '-8%', opacity: 0.2, blur: 80 },
    ],
  },

  // 课堂运营（截图展示）
  {
    id: 'classroom-ops',
    layout: 'screenshot-showcase',
    bg: 'default',
    chapter: '第四章 · 课堂运营与家校',
    chapterIndex: 4,
    subtitle: '课堂运营',
    title: '考勤、作业、请假、座位，一站管齐',
    gallery: [
      { image: '/images/classroom-attendance-detail.png', caption: '考勤详情 — 实时查看每节课出勤状态' },
      { image: '/images/classroom-homework-grading.png', caption: '批改登记 — 逐人批改打分，评语一键填写' },
      { image: '/images/classroom-pre-attendance.png', caption: '课前考勤 — 按时段统计，缺勤自动预警' },
      { image: '/images/classroom-seating.png', caption: '座位表 — 可视化排座，支持轮换与锁定' },
      { image: '/images/classroom-random-call.png', caption: '随机点名 — 公平抽选，支持多人同时点名' },
    ],
    orbs: [
      { color: 'blue', size: 720, top: '-18%', left: '-10%', opacity: 0.32, blur: 88 },
      { color: 'indigo', size: 620, bottom: '-15%', right: '-8%', opacity: 0.28, blur: 82 },
      { color: 'sky', size: 530, top: '20%', right: '12%', opacity: 0.22, blur: 78 },
      { color: 'cyan', size: 440, bottom: '10%', left: '15%', opacity: 0.18, blur: 75 },
    ],
  },

  // 德育活动与班级量化
  {
    id: 'deyu-activities',
    layout: 'feature-cards',
    bg: 'lavender',
    chapter: '第四章 · 课堂运营与家校',
    chapterIndex: 4,
    subtitle: '德育管理',
    title: '德育活动、班级量化，系统帮你管',
    features: [
      { icon: '🏆', title: '德育活动', description: '创建校级/年级活动（志愿服务、主题班会、社会实践），学生签到、教师评分，记录自动汇入成长档案。' },
      { icon: '⭐', title: '班级量化评价', description: '卫生、纪律、课间操、两操评比……班级之间横向排名，数据纳入驾驶舱和学期报表。' },
      { icon: '📊', title: '德育洞察看板', description: '全校/年级/班级维度的德育数据可视化分析，支持数据导出。看整体德育工作的运转情况。' },
    ],
    orbs: [
      { color: 'violet', size: 740, top: '-18%', right: '-10%', opacity: 0.35, blur: 90 },
      { color: 'indigo', size: 640, bottom: '-15%', left: '-8%', opacity: 0.3, blur: 85 },
      { color: 'blue', size: 540, top: '25%', left: '10%', opacity: 0.22, blur: 80 },
      { color: 'rose', size: 450, bottom: '8%', right: '15%', opacity: 0.2, blur: 75 },
    ],
  },

  // 微信就是工作台
  {
    id: 'wechat-combined',
    layout: 'wechat-combined',
    bg: 'mint',
    chapter: '第四章 · 课堂运营与家校',
    chapterIndex: 4,
    subtitle: '微信即是工作台',
    title: '说句话录入数据，重要信息自动推送',
    body: [
      '无需额外安装 App，不改变任何人的使用习惯。教师在微信里说一句话，数据自动归档；成绩、考勤、积分变动通过微信服务号实时推送给教师和家长。',
    ],
    image: '/images/wechat-notify-cards.jpg',
    gallery: [
      { image: '/images/wechat-voice-input.jpg', caption: '教师微信语音录入' },
    ],
    highlights: [
      { label: '零学习成本', description: '用微信说话就是在录数据' },
      { label: '实时推送', description: '成绩、考勤、积分变动自动通知' },
      { label: '全程留痕', description: '每条记录可追溯、可导出' },
    ],
    orbs: [
      { color: 'emerald', size: 750, top: '-20%', left: '-12%', opacity: 0.35, blur: 90 },
      { color: 'teal', size: 650, bottom: '-16%', right: '-10%', opacity: 0.3, blur: 85 },
      { color: 'blue', size: 550, top: '25%', right: '8%', opacity: 0.22, blur: 80 },
      { color: 'sky', size: 450, bottom: '8%', left: '15%', opacity: 0.2, blur: 75 },
    ],
  },

  // 家长端
  // {
  //   id: 'parent-portal',
  //   layout: 'content',
  //   bg: 'frost',
  //   chapter: '第四章 · 课堂运营与家校',
  //   chapterIndex: 4,
  //   title: '打开手机就知道孩子的情况',
  //   subtitle: '家长通过微信小程序随时了解孩子在校的表现，不用追着老师问',
  //   body: [
  //     '请假在线提交，审批进度实时可见。学校通知通过微信直接推送，已读状态可追溯。',
  //   ],
  //   highlights: [
  //     { label: '成绩与趋势', description: '考试成绩和历次对比' },
  //     { label: '评价明细', description: '每一条评价都能看到' },
  //     { label: '出勤记录', description: '到校、缺勤、请假一目了然' },
  //     { label: '宠物同步', description: '看到孩子在学校的另一面' },
  //   ],
  //   imagePosition: 'right',
  //   images: [
  //     { alt: '家长端小程序 — 成绩页' },
  //     { alt: '家长端小程序 — 评价明细页' },
  //     { alt: '家长端小程序 — 宠物同步页' },
  //   ],
  //   imageDisplay: 'carousel' as const,
  //   orbs: [
  //     { color: 'blue', size: 740, top: '-18%', left: '-10%', opacity: 0.32, blur: 88 },
  //     { color: 'sky', size: 640, bottom: '-15%', right: '-8%', opacity: 0.28, blur: 82 },
  //     { color: 'emerald', size: 540, top: '22%', right: '12%', opacity: 0.22, blur: 78 },
  //     { color: 'cyan', size: 450, bottom: '10%', left: '15%', opacity: 0.18, blur: 75 },
  //   ],
  // },

  // ═══════════════════════════════════════════════════════
  // 收尾
  // ═══════════════════════════════════════════════════════

  // 智能助手（精简版）
  {
    id: 'ai-assistant',
    layout: 'ai-assistant',
    bg: 'default',
    subtitle: '智能助手',
    title: '不学新软件，说话就能用',
    body: [
      '迎检报表、考后分析、备课出题、日常查数据——说一句话，AI 助手直接输出结果',
    ],
    images: [
      { src: '/images/ai-chat-mobile.jpg', alt: '手机端 AI 助手', frame: 'mobile' as const },
    ],
    gallery: [
      { image: '/images/ai-eval-report.jpg', caption: '"导出综合素质评价档案" → 标准格式文档直接生成' },
      { image: '/images/ai-weak-analysis.jpg', caption: '"薄弱知识点是什么" → 按得分率排序，定位短板' },
      { image: '/images/ai-score-compare.jpg', caption: '"对比月考和期中成绩" → 趋势图表 + 分析结论' },
      { image: '/images/ai-moral-report.jpg', caption: '"生成德育工作报告" → 完整报告一键输出' },
    ],
    orbs: [
      { color: 'blue', size: 760, top: '-20%', left: '-12%', opacity: 0.35, blur: 90 },
      { color: 'indigo', size: 660, bottom: '-15%', right: '-10%', opacity: 0.3, blur: 85 },
      { color: 'violet', size: 560, top: '22%', right: '10%', opacity: 0.22, blur: 80 },
      { color: 'cyan', size: 460, bottom: '10%', left: '12%', opacity: 0.2, blur: 75 },
    ],
  },

  // 政策背景
  {
    id: 'policy',
    layout: 'policy',
    bg: 'lavender',
    title: '不只是好用，更是国家要求',
    subtitle: '2025–2026 年，教育部密集发文推动"人工智能+教育"，数字化从鼓励尝试变成硬性要求——而稳了，已经准备好了',
    body: [
      '过程性评价和综合素质档案，要有数据支撑',
      '数据采集要"伴随式"——不是学期末突击补录',
      '数字化应用效果，纳入学校办学水平评估',
      'AI 赋能教育已上升为国家战略行动',
    ],
    gallery: [
      { image: '/policy/p1-nine-dept.png', caption: '九部门 · 加快推进教育数字化' },
      { image: '/policy/p2-teacher-dev.png', caption: '数字化赋能教师发展行动' },
      { image: '/policy/p6-ai-fifteen.png', caption: '"十五五"人工智能+教育部署' },
      { image: '/policy/p3-2026-deploy.png', caption: '2026 战略部署 · 人工智能+教育' },
      { image: '/policy/p4-ai-education.png', caption: '"人工智能+"如何加好教育' },
      { image: '/policy/p5-2026-strategy.png', caption: '2026 数字化战略行动部署会' },
    ],
    orbs: [
      { color: 'violet', size: 800, top: '-25%', left: '-18%', opacity: 0.35, blur: 95 },
      { color: 'rose', size: 650, top: '10%', right: '-15%', opacity: 0.25, blur: 85 },
      { color: 'blue', size: 700, bottom: '-22%', left: '15%', opacity: 0.3, blur: 90 },
      { color: 'emerald', size: 500, bottom: '5%', right: '8%', opacity: 0.18, blur: 80 },
    ],
  },

  // 接入与安全（强化开通即用）
  {
    id: 'integration',
    layout: 'compare',
    bg: 'default',
    title: '签约即开通，安全合规',
    subtitle: '稳了是云端平台，不需要部署、不需要服务器、不需要 IT 团队。签署合作当天即可开通使用，原有数据可通过 AI 辅助批量导入。',
    compare: {
      left: {
        label: '开通即用',
        title: '零部署负担',
        items: [
          '云端 SaaS 平台 — 签约当天开通',
          '网页 + 微信小程序 + 桌面助手，多端覆盖',
          '不需要买服务器、不需要 IT 运维',
          '全程有人陪跑 — 配置、培训、推动落地',
        ],
      },
      right: {
        label: '安全保障',
        title: '数据安全',
        items: [
          '传输与存储全程加密',
          '未成年人个人信息保护合规处理',
          '操作日志完整记录，审计可追溯',
          '数据可导出标准格式，对接上级管理平台',
        ],
      },
    },
    orbs: [
      { color: 'blue', size: 730, top: '-18%', left: '-10%', opacity: 0.3, blur: 88 },
      { color: 'emerald', size: 630, bottom: '-15%', right: '-8%', opacity: 0.25, blur: 82 },
      { color: 'indigo', size: 530, top: '22%', right: '12%', opacity: 0.2, blur: 78 },
      { color: 'sky', size: 440, bottom: '10%', left: '15%', opacity: 0.18, blur: 75 },
    ],
  },

  // 合作方式
  {
    id: 'pricing',
    layout: 'stats',
    bg: 'mint',
    subtitle: '合作方式',
    title: '灵活可选，丰俭由校',
    highlights: [
      { label: '校级整体采购', value: '一次付费', description: '全平台功能一年期授权，覆盖全校师生，不限人数、不限模块' },
      { label: 'AI 能力包', value: '按量选购', description: 'AI 阅卷、AI 批改、智能助手——按学期用量打包，用完再续' },
      { label: '区域集采方案', value: '统一议价', description: '教育局统一采购，多校共享区级驾驶舱，含专属实施与培训' },
    ],
    body: ['以上方案可自由组合，学校按需选择即可。支持一年一次性付费，也支持按季度订阅基础服务 + AI 用量单独计费。', '具体方案与报价，欢迎联系我们面谈沟通。'],
    orbs: [
      { color: 'emerald', size: 740, top: '-18%', left: '-10%', opacity: 0.35, blur: 90 },
      { color: 'teal', size: 640, bottom: '-15%', right: '-8%', opacity: 0.3, blur: 85 },
      { color: 'blue', size: 540, top: '22%', right: '12%', opacity: 0.22, blur: 80 },
      { color: 'cyan', size: 450, bottom: '8%', left: '15%', opacity: 0.2, blur: 75 },
    ],
  },

  // 持续进化
  {
    id: 'evolving',
    layout: 'feature-grid',
    bg: 'frost',
    subtitle: '与学校一起成长',
    title: '您的需求，就是我们的下一步',
    body: [
      '每所学校都有自己的节奏。稳了不做一刀切的方案——我们和学校一起打磨，从核心功能出发，逐步长出最适合您的系统。所有能力升级，现有用户均可免费获得。',
    ],
    features: [
      { icon: '🎯', title: '按需定制', description: '学校提出需求，我们快速迭代上线。不是等排期，而是真正把学校的声音变成产品功能——更新免费，响应极快' },
      { icon: '📐', title: '精准备课（即将上线）', description: '基于学情数据，AI 辅助生成教学建议与课堂设计，让每一节课都有据可依' },
      { icon: '🧭', title: '个性化学习（规划中）', description: '为每位学生匹配薄弱知识点的针对性练习，让"因材施教"从理念变成日常' },
      { icon: '🔄', title: '持续迭代，免费升级', description: '产品每月更新，新功能自动上线。选择稳了，就是选择一个不断进化的伙伴' },
    ],
    orbs: [
      { color: 'blue', size: 750, top: '-20%', left: '-12%', opacity: 0.32, blur: 90 },
      { color: 'violet', size: 650, bottom: '-16%', right: '-10%', opacity: 0.28, blur: 85 },
      { color: 'emerald', size: 550, top: '22%', right: '10%', opacity: 0.22, blur: 80 },
      { color: 'cyan', size: 450, bottom: '8%', left: '15%', opacity: 0.18, blur: 75 },
    ],
  },

  // 封底 / CTA（合并了 future 的核心信息）
  {
    id: 'cta',
    layout: 'cta',
    bg: 'default',
    title: '让学校的每一天都稳了',
    subtitle: '免费试用，签约当天开通，全程有人陪跑',
    contactInfo: [
      { label: 'Email', value: 'hi@delvetech.cn' },
      { label: 'Phone', value: '16622905110' },
      { label: '小红书', value: '探渊科技' },
      { label: 'Website', value: 'edu.delvetech.cn' },
    ],
    orbs: [
      { color: 'blue', size: 800, top: '-22%', left: '5%', opacity: 0.35, blur: 95 },
      { color: 'violet', size: 700, bottom: '-18%', right: '0%', opacity: 0.3, blur: 90 },
      { color: 'emerald', size: 600, top: '20%', right: '-12%', opacity: 0.25, blur: 85 },
      { color: 'rose', size: 550, bottom: '15%', left: '-10%', opacity: 0.22, blur: 80 },
      { color: 'cyan', size: 420, top: '0%', left: '-15%', opacity: 0.18, blur: 75 },
    ],
  },
];
