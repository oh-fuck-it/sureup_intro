# 稳了 — 产品手册文案 v3

> **设计总则**
>
> - 从结果往里讲：管理者先看到自己得到什么 → 再看数据怎么来的 → 再看技术能力
> - 呼吸页不吝啬：每个章节前一页大图 + 一句话，让眼睛休息、制造期待
> - 内容页文字不超过页面 40%，其余留给效果图/截图
> - **视觉风格与 React Web 端统一**：轻渐变拟态毛玻璃，白/近白底，蓝紫色系，blue-tinted 柔影，大圆角（16px），通透精致，Apple 产品页质感
> - **统一页面比例 16:9**（现代数字手册 / pitch deck 标准，屏幕满屏展示）
> - 不出现技术架构图、英文缩写、产品标签云等工程化元素

---

## P1 · 封面

**稳了**

校园智能教·评·管·育一体化平台

【封面主视觉 — 详细构图】

**三设备英雄构图，居中偏下，悬浮感：**

- **主体**：银色 MacBook 微倾 15°，屏幕展示驾驶舱首页——浅色毛玻璃侧边栏、白底内容区、蓝色环形出勤图、渐变趋势折线、圆角班级卡片
- **左前方**：白色 iPhone 倾斜约 25°，展示小程序教师端——学生列表 + 蓝/绿/紫评价标签，顶部蓝色导航栏
- **右前方**：悬浮毛玻璃 UI 卡片（无设备边框，半透明白 + backdrop-blur 质感），展示桌面助手对话——一条提问气泡 + 一条带图表缩略图的回复
- 三个设备下方有柔和蓝色调投影（非黑色），营造悬浮感

**背景**：纯白 (#ffffff) 到极淡蓝 (#f0f4ff) 的纵向柔和渐变。上方 1/3 大面积白色留白给品牌文字。背景中有 2-3 个极淡的彩色圆形光斑（蓝/靛/紫，半径大，opacity < 10%），营造空气感。

**后期叠加文字层**：

- 顶部居中大字："稳了"（白底上用深色，或做品牌蓝渐变字）
- 下一行："校园智能教·评·管·育一体化平台"（灰色/slate-600）

---

## P2 · 政策背景

### 教育数字化，不再是选择题

【本页纯文字 + 政策引用，不放产品界面。背景纯净，版式偏"政策简报"质感：左侧大字标题，右侧政策条目。】

2025 年，教育部连续发文，数字化从"鼓励尝试"变成了"硬性要求"：

> **《关于加快推进教育数字化的意见》** 教育部等九部门（2025）
>
> "建立基于大数据和人工智能的教育评价机制"
> "推动伴随式数据采集"
> "数字化应用成效纳入学校办学水平评估"

> **《数字化赋能教师发展行动》**（2025）
>
> "将数字素养纳入教师资格考试"
> "推进百区千校万师数字化示范建设"

**核心信号：**

- 过程性评价和综合素质档案，要有数据支撑
- 数据采集要"伴随式"——不是学期末突击补录
- 数字化应用效果，纳入学校评估

学校需要的不是"又一个系统"，而是**日常教学自然产生数据、需要时拿得出材料**的能力。

---

## P3 · 一句话

【呼吸页。纯净留白背景，居中大字。从政策宏观过渡到产品——这是读者第一次接触"稳了在做什么"。】

> **教师不加班填表，管理者不蒙着眼决策。**
>
> **一个平台，让学校的每一天都在积累有价值的数据。**

---

## P3.5 · 稳了能做什么

### 平台能力一览

稳了是一套面向中小学的一体化智能平台，覆盖教学评价、德育管理、课堂运营和学生成长四个核心场景。数据在教师日常教学过程中自动产生和汇总——不额外增加录入负担。

支持微信、钉钉、飞书消息接入。覆盖校长、教务、年级主任、班主任、任课教师、学生、家长。


| 场景       | 教师 / 班主任        | 管理者 / 教务      | 学生           | 家长        |
| -------- | --------------- | ------------- | ------------ | --------- |
| **日常评价** | 课堂点评、加减分、小组评价   | 全校积分看板、趋势分析   | 查看积分与变动      | 查看孩子评价明细  |
| **课堂运营** | 考勤、作业、请假审批、随机点名 | 出勤统计、异常预警     | 提交作业、请假      | 在线请假、查看出勤 |
| **考试阅卷** | 上传试卷、AI 批改、复核调整 | 学情分析、年级对比     | 自助查分查卷       | 查看成绩与趋势   |
| **德育管理** | 活动签到评分、班级量化     | 驾驶舱总览、德育报告    | 活动参与记录       | 成长档案动态    |
| **预警干预** | 接收预警、约谈记录、跟进    | 预警看板、处置追溯     | —            | 接收通知      |
| **报表材料** | —               | 一键生成迎检报表、综评档案 | —            | —         |
| **学生激励** | 课堂展示宠物、发起抽奖     | 激励规则配置        | 宠物养成、商城兑换、徽章 | 同步查看宠物    |
| **智能助手** | 语音录入、备课辅助、数据查询  | 报表生成、考后分析     | —            | —         |


**数据全程自动流转——教师的每一次操作都在为驾驶舱、报表和成长档案积累数据。**

【本页以表格为主，不再放额外示意图（P3 已有数据流转图）。表格本身就是视觉重点。】

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━

# 第一章 · 管理者看到什么

# ━━━━━━━━━━━━━━━━━━━━━━━━━

## P4 · 呼吸页

【整页场景图：一位校长/管理者坐在明亮办公室里，面前的屏幕发出柔和光线（屏幕内容模糊不清，只有光感），人物表情从容自信。自然光线，温暖色调。不放产品界面截图——这里要传递的是"从容感"，不是"又一个数据界面"。叠加一句话：】

> **打开就知道，全校正在发生什么**

---

## P5 · 数据驾驶舱（总览）

### 全校运行状态，一屏掌握

不需要逐班询问，不需要等周会汇报。打开驾驶舱，核心指标一目了然：

- 今日全校出勤率
- 本周德育事件数量与趋势
- 最近考试的年级成绩变化
- 待处理的审批事项

异常指标自动标红。哪个班级出勤率低了、哪个年级成绩波动了——不用找人问，系统自己告诉你。

【图片区域（占页面 60%）：驾驶舱主界面效果图，全宽大图展示】

---

## P6 · 数据驾驶舱（逐层查看）

### 从全校到个人，逐层看清

点击任何一个指标，都可以逐级下钻：

**全校** → 哪个年级有异常？
**年级** → 哪个班级需要关注？
**班级** → 哪些学生情况特殊？
**学生** → 他最近的成绩、出勤、评价分别怎样？

支持按学科、时间段、评价维度灵活筛选。

【图片区域（占页面 60%）：2-3 张截图纵向排列——① 年级对比视图 ② 班级多维数据卡片 ③ 学生个体数据页】

---

## P7 · 呼吸页

【整页。报告文档效果图（比如一份排版好的学期德育报告封面），叠加一句话：】

> **检查通知来了，你不用慌**

---

## P8 · 智能报表（上）

### 日常在跑，材料随时能出

不是学期末突击整理——平台在日常运行中持续归集数据，需要报表时一键生成。

> 「上学期迎检，通知下来到材料交上去，总共两天。以前光整理数据就要一周。」—— 初中教务主任

**综合素质评价档案**
品德、学业、体质、艺术、劳动五维数据自动归集，对标教育部评价要求。
按学期整理，标准格式导出——检查、存档、升学材料，直接可用。

**德育工作报告**
本学期评价覆盖率、积分分布、预警处置统计、活动开展记录。
系统自动汇总，输出结构化文档。

**德育洞察分析**
全校、年级、班级维度的德育数据可视化分析与导出——不只是数字汇总，而是趋势、分布、对比一目了然。

**教学质量分析**
年级均分趋势、班级横向对比、学科得分率。
图表和结论直接可用，不需要再做二次加工。

【图片区域（占页面 50%）：综合素质评价档案效果图 + 教学质量报告截图】

---

## P9 · 智能报表（下）

### 也可以直接说一句话

管理者和教师还可以通过桌面智能助手用日常语言完成报表生成——不用在系统里翻找功能入口。

> "帮我生成本学期七年级的德育工作报告" → 输出完整文档
> "对比月考和期中考的成绩" → 图表 + 趋势分析
> "导出九年级综合素质档案" → 批量标准格式
> "本月全校出勤异常汇总" → 按年级班级分类

更多智能助手的使用场景，见第六章。

【图片区域（占页面 40%）：一张桌面助手窗口截图即可，展示一条生成报告的对话。不需要展示多轮对话——详细场景留给 P32-33。】

---

## P10 · 呼吸页

【整页。一张预警看板的效果图，画面中几行学生数据标红，视觉有张力。叠加一句话：】

> **不等出事，提前知道**

---

## P11 · 多维预警

### 多项数据联动，异常自动浮出

单看成绩下降，可能只是一次发挥失常。
单看出勤波动，可能只是生病请假。

但如果一个学生**成绩在跌、出勤在少、课堂积分也在降**——三项同时异常，系统自动标记为重点关注，推送给班主任和年级主任。

- 预警按严重程度分级
- 支持自定义预警规则和触发条件
- 不遗漏那些"不闹、不说、但在变差"的学生

【图片区域（占页面 55%）：预警列表截图——学生姓名、预警等级、触发因素（成绩↓ 出勤↓ 积分↓）、状态】

---

## P12 · 过程留痕

### 每一步处置，系统自动记录

从发现异常到处置完成，全链路留痕：

**发现** → 系统生成预警记录，标注触发时间和触发条件
**约谈** → 班主任记录谈话内容、时间
**通知家长** → 系统记录推送时间、家长已读时间
**后续跟进** → 补充跟进记录
**归档** → 完整档案可追溯、可导出

出了事，上级来问——打开系统，每一步都有时间、有内容、有结果。

**通知也留痕**：成绩通知、考勤异常、审批结果推送给家长后，系统记录发送时间与已读状态。沟通有据可查。

【图片区域（占页面 50%）：事件处置时间轴效果图（纵向，每个节点标注时间和内容）+ 通知回执截图】

---

## P12.5 · 实践案例

### 他们已经在用

【待填写：1-2 个学校的真实使用案例。建议包含以下信息：】

> **案例一：______学校**
>
> - 学校概况：____（规模、年级、所在地区）
> - 使用场景：____（重点使用了哪些模块）
> - 使用前痛点：____
> - 使用后变化：____（如：迎检材料准备时间从 X 天缩短到 X 小时；教师每日录入时间减少 X 分钟；学生行为改善率等）
> - 一句话评价（校长或教务主任）：「________________」

> **案例二：______学校**
>
> - 学校概况：____
> - 使用场景：____
> - 使用前痛点：____
> - 使用后变化：____
> - 一句话评价：「________________」

【图片区域（占页面 40%）：学校实景照片 + 系统使用截图，真实感优先】

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━

# 第二章 · 数据从哪来

# ━━━━━━━━━━━━━━━━━━━━━━━━━

## P13 · 呼吸页

【整页。一位教师在教室里低头看手机的场景图（或小程序界面大图），自然光线。叠加一句话：】

> **教师正常上课，数据自己产生**

---

## P13.5 · 多端协同：数据在哪里都能产生

### 手机、电脑、大屏——用哪个都行

教育信息化最怕的是"只有坐在电脑前才能用"。稳了的各终端数据完全打通，教师在任何场景下的操作都实时同步。

**微信小程序（教师端）**
课堂上掏手机就能用：

- 点评加减分、考勤记录、作业布置与批改
- 请假审批、积分排行与预警
- 考试管理、学生档案查看

**微信小程序（学生端）**

- 查看点评记录和积分变动
- 查看考试成绩和批改详情
- 提交作业、查看宠物状态

**网页端**
教室大屏或办公电脑：

- 驾驶舱全校总览、学情分析、阅卷操作
- 宠物课堂展示、进化仪式投屏
- 报表生成与导出

**数据流转**

不管教师是在手机上点了一个评价、在电脑上完成了一次阅卷、还是在大屏上展示了课堂数据——所有操作实时汇入同一个平台。驾驶舱自动更新，报表随时可出，预警自动触发。

**不存在"回去再录一遍"的情况。做了就有，用了就在。**

【图片区域（占页面 50%）：重点展示小程序界面（与封面的三端合成图区分）——教师端 3 个核心页面截图（首页/点评/考勤）并排 + 学生端 1 个页面（积分/宠物）。网页端大屏不再重复放截图，用文字说明即可。】

---

## P14 · 日常评价（上）

### 一次点击，一条记录

班主任和任课教师在课堂中随时用微信小程序完成学生评价。

操作很简单：打开 → 选学生 → 点一下 → 完成。

全过程不超过 5 秒，不打断教学节奏。

- 评价维度完全自定义：纪律、发言、合作、创意、作业质量、劳动表现……由学校自己设定
- 支持单人评价，也支持小组批量操作
- 每一条评价自动变成积分，汇入学生的成长档案

**教师不需要"额外做记录"。正常上课的过程中，数据就产生了。**

> 「以前下课还要回办公室登记，现在课上顺手就点了，学生马上能看到变化，比什么都及时。」—— 七年级班主任

【图片区域（占页面 55%）：小程序点评界面效果图（手机端大图），清晰展示"选学生 → 点维度"的操作】

---

## P15 · 日常评价（下）

### 积分自动汇总，变化一目了然

每一条点评自动转化为积分。不需要手动统计，系统实时计算。

- 班级积分总览与排行
- 积分变动趋势图：哪些学生在进步，哪些在下滑
- 低积分学生自动标记预警
- 学生可提交积分申诉，班主任在线审核

学校可自定义评价规则和分值标准，不同年级可设置不同规则，支持批量导入。

【图片区域（占页面 55%）：积分看板截图——班级排行 + 积分趋势曲线 + 预警标记】

---

## P16 · 课堂运营

### 考勤、作业、请假、座位

每天都要做的事，在一个入口完成。

**考勤**
自定义时段——早读、上午、下午、晚自习各算一次。一键记录，缺勤自动标记并通知。

**作业**
布置、提交跟踪、批改记录。支持自定义评分模板，批量批改。作业分数可直接从考试批改结果同步——布置了一套试卷作为作业，批改完自动出分，不用再手动登记。作业结束时自动结算德育积分，完成情况直接纳入过程性评价。

**请假**
学生或家长在线申请 → 班主任审批 → 教务备案。流转清晰，全程留痕。

**课堂辅助**
随机点名、座位表管理与轮换、分组管理。

所有数据自动关联学生档案。

【图片区域（占页面 50%）：四宫格截图——考勤界面 / 作业管理 / 请假审批 / 座位表】

---

## P16.5 · 德育活动与班级量化

### 活动和班级表现，也是数据的一部分

**德育活动**
创建校级/年级活动（志愿服务、主题班会、社会实践……），学生签到、教师评分，参与记录自动汇入成长档案。

**班级量化评价**
对班级整体表现进行量化记录——卫生、纪律、课间操、两操评比……班级之间横向排名，数据纳入驾驶舱和学期报表。

**德育洞察看板**
全校/年级/班级维度的德育数据可视化分析，支持数据导出。不只是看积分排行，而是看整体德育工作的运转情况。

【图片区域（占页面 50%）：德育活动详情页截图 + 班级量化排名截图 / 或洞察看板截图】

---

## P17 · 呼吸页

【整页。一张微信聊天界面的效果图（经过美化设计的），内容是教师发了一条语音/文字，下方助手回复"已记录"。叠加一句话：】

> **在微信里说一句话，系统自动同步**

---

## P18 · 微信即是入口（上）

### 说句话就能录进系统

班主任的工作大量发生在微信里——但聊天记录无法被系统识别。

稳了改变了这一点：教师在微信里随手说一句话，系统自动理解、自动同步到对应模块。


| 在微信里说                 | 系统自动完成            |
| --------------------- | ----------------- |
| "第三节课九班张三请假，李四迟到"     | 考勤系统自动记录张三请假、李四迟到 |
| "王五上课看小说，扣 2 分"       | 德育积分自动扣减，记入评价档案   |
| "今天大课间六班整体表现很好，加 5 分" | 全班集体加分，记录场景       |
| "赵六下午发烧了，家长已经接走"      | 考勤标记早退，生成事件记录     |


教师用日常语言说话，不用学任何指令。
系统解析后回复确认，教师随时可以修正——**说错了也不怕，回一句"不对"就能改**。

> 「在走廊碰到学生迟到，微信里说一句就记上了，不用专门打开系统去找人。」—— 班主任

【图片区域（占页面 40%）：微信对话效果图——教师消息 + 助手确认回复，设计美化过】

---

## P19 · 微信即是入口（下）

### 通知也走微信

平台的各类通知直接通过微信推送给教师和家长：

- 考试成绩出了 → 推送给家长
- 学生积分变动 → 推送给学生和家长
- 请假审批结果 → 推送给申请人
- 考勤异常 → 推送给班主任
- 预警提醒 → 推送给班主任和年级主任

**不需要另开一个 App 查通知。微信里就能收到，点进去就能看。**

### 不换工具，直接接入

学校现在用微信——接微信。
用钉钉——接钉钉。
用飞书——接飞书。

不需要全校切换通讯工具，也不需要让老师多装一个软件。

【图片区域（占页面 45%）：通知推送效果图——微信收到的成绩通知 / 考勤异常提醒 示意】

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━

# 第三章 · 考试与学情

# ━━━━━━━━━━━━━━━━━━━━━━━━━

## P20 · 呼吸页

【整页。左侧一张纸质试卷（略带角度的实拍质感），右侧一个屏幕展示批改结果。叠加一句话：】

> **从一张试卷，到一份完整的学情分析**

---

## P21 · 智能阅卷（上）

### 主观题，也能智能批改

传统阅卷工具只能处理选择题和填空题。稳了的智能阅卷基于大语言模型，能够理解学生的主观题作答，按评分标准逐题给分。

**四步完成**

**① 拍照上传**
纸质试卷拍照或扫描上传。

**② 结构识别**
系统自动识别试卷中的题目、分值、答题区域。

**③ 标准生成**
根据题目内容智能生成评分标准，教师确认或调整。

**④ 逐题批改**
系统阅读每位学生的作答，按标准给分，标注得分点与失分原因。

教师只需要复核调整，不用从头批起。

【图片区域（占页面 50%）：四步流程示意图——设计风格，视觉清晰，带真实界面截图】

---

## P22 · 智能阅卷（下）

### 批改完，报告自动生成

不只是出分数——考后分析即时完成。

**班级报告**
均分、最高分、及格率、各分数段人数分布。

**知识点分析**
哪些知识点全班得分高、哪些普遍薄弱——教师一眼知道下一步该重点讲什么。

**AI 错因分析**
系统不只标注"这道题扣了几分"，还会分析学生为什么错——是概念混淆、计算失误、还是审题不清。错因自动归类，帮助教师精准讲评。

**学生个体报告**
每道题的得分与失分原因，与历次考试的纵向对比。

**题库自动沉淀**
每次考试的题目、评分标准、学生作答数据自动入库。题库支持按学科浏览，也支持语义搜索——输入知识点或题意关键词，系统自动匹配相关题目。考得越多，题库越丰富，组卷越方便。

所有考试数据自动汇入学生档案和学情分析。

> 「一百多份作文，以前批三天。现在系统先过一遍，我只改需要调的，一个下午搞定。」—— 初中语文教师

【图片区域（占页面 50%）：批改结果页（含错因标注）+ 班级成绩分布图 + 题库搜索界面截图】

---

## P23 · 学情分析

### 考完就知道，不用再手动算

每次考试后，系统自动生成多维度学情分析。不同角色看到自己需要的视角：

**教师看到**
本班薄弱知识点、需要重点关注的学生、与上次考试的对比。

**年级主任看到**
各班成绩横向对比、学科整体表现、年级趋势。

**校长看到**
全校各年级成绩概览、重点指标变化。

同一份数据，角色不同，视角不同。

**学生也能自己查**
学生通过考号或学号自助查询成绩和批改详情，不需要等教师单独通知。减轻教师逐一反馈的负担。

【图片区域（占页面 50%）：学情分析界面截图——班级视图 + 年级对比视图 / 或学生自助查分页面】

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━

# 第四章 · 数据沉淀

# ━━━━━━━━━━━━━━━━━━━━━━━━━

## P24 · 呼吸页

【整页。学生档案页面效果图（数据丰富、视觉好看的那种），叠加一句话：】

> **所有的日常，最终沉淀成一份完整的成长记录**

---

## P25 · 成长档案

### 不需要填，档案自己在长

学业成绩、德育积分、考勤记录、课堂评价、活动参与、荣誉记录——在教师日常使用平台的过程中，这些数据自动汇入每个学生的成长档案。

不需要学期末突击补填。教师正常使用阅卷、点评、考勤功能，档案自然丰满起来。

**学生画像**
多维度数据汇总在一个页面：这个学生的成绩怎么样、品行表现如何、出勤是否正常、参加了哪些活动、获得过什么荣誉。

**纵向追踪**
学期与学期之间的变化趋势清晰可见——不只是一个静态快照，而是一条持续生长的记录。

【图片区域（占页面 55%）：学生档案效果图——多维数据卡片 + 成长趋势曲线 + 时间轴】

---

## P26 · 综合素质评价

### 对标教育部要求，一键导出

品德、学业、体质、艺术、劳动——五维评价数据按学期自动归集。

导出时按标准格式生成，可直接用于：

- 上级教育主管部门检查
- 学生升学材料
- 学校年度存档

**学生报告**
支持配置评语模板，班主任可补充个性化评语。批量生成，统一格式。

【图片区域（占页面 55%）：综合素质评价档案效果图（五维雷达图 + 导出文档预览）+ 学生报告页】

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━

# 第五章 · 让人愿意用

# ━━━━━━━━━━━━━━━━━━━━━━━━━

## P27 · 学生激励

### 好的系统，学生自己也想打开

德育积分不只是管理工具——通过激励机制，它变成学生主动关注自身表现的动力。

**积分商城与徽章**
积分兑换实物或虚拟奖品，学校自定义规则。特定成就解锁徽章——连续全勤、月度积分前三、活动优秀参与者。教师可发起限时抽奖，适合阶段性激励。

**AI 宠物养成**
每位学生拥有一只 AI 生成的专属虚拟宠物。日常积分推动宠物成长，积分越高进化越快。教师可投屏展示全班宠物状态，宠物进化时触发全班可见的动画——表现好的学生获得集体关注的高光时刻。

学生开始主动在意自己的表现——不是因为怕扣分，是因为想让宠物变强。

**从"被管理"到"主动参与"，这是系统真正被用起来的关键。**

【图片区域（占页面 50%）：积分商城 + 徽章截图 + 宠物不同进化阶段并排 + 课堂投屏展示】

---

## P30 · 家长端

### 打开手机就知道孩子的情况

家长通过微信小程序随时了解孩子在校的表现，不用追着老师问。

- 考试成绩与趋势
- 德育积分与每一条评价明细
- 出勤记录
- 成长档案动态
- 宠物成长同步——看到孩子在学校的另一面

请假在线提交，审批进度实时可见。
学校通知通过微信直接推送，已读状态可追溯。

【图片区域（占页面 50%）：家长端小程序效果图——2-3 个页面并列展示（成绩页 / 评价页 / 宠物页）】

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━

# 第六章 · 智能助手

# ━━━━━━━━━━━━━━━━━━━━━━━━━

## P31 · 呼吸页

【整页。桌面助手界面大图——一个干净的对话窗口，里面有一条简短的对话。叠加一句话：】

> **不学新软件，说话就能用**

---

## P32 · 桌面智能助手（上）

### 报表、备课、查数据——说一句话

桌面助手是稳了平台的统一入口。用日常语言说出需求，助手调用平台数据自动完成。

**迎检准备**

> "生成本学期七年级的德育工作报告"
> → 汇总数据，输出完整文档

> "导出九年级综合素质评价档案"
> → 批量生成标准格式文件

**考后分析**

> "对比上次月考和期中考的成绩"
> → 图表 + 班级排名变化 + 趋势分析

> "七年三班这次考试的薄弱知识点是什么"
> → 知识点得分率排序输出

【图片区域（占页面 40%）：助手对话界面——迎检/考后场景的对话截图】

---

## P33 · 桌面智能助手（下）

### 备课和杂事，也交给它

**备课辅助**

> "按这个单元教学目标拟一份练习框架"
> → 输出结构化练习方案

> "帮我把这次考试的错题按知识点归类"
> → 知识点与错题对应表

**文件处理**

> "整理一下这周的教研材料"
> → 自动识别、分类、重命名

**日常查询**

> "七年三班本月出勤情况"
> → 表格呈现

> "积分最低的 10 个学生是谁"
> → 名单与积分明细

不需要打开系统翻找功能，不需要学习操作流程。
**会说话，就会用。**

【图片区域（占页面 40%）：助手对话界面——备课/查询场景的对话截图】

---

# ━━━━━━━━━━━━━━━━━━━━━━━━━

# 收尾

# ━━━━━━━━━━━━━━━━━━━━━━━━━

## P34 · 接入与安全

### 灵活接入，安全合规

**使用方式**


| 网页端    | 浏览器访问，管理与深度分析         |
| ------ | --------------------- |
| 微信小程序  | 课堂即时操作，微信内直接使用        |
| 桌面智能助手 | 自然语言操作，报表、备课、查询       |
| 消息接入   | 微信 · 钉钉 · 飞书，对接现有通讯工具 |


**与现有系统的关系**

稳了是一套独立完整的平台，不依赖学校现有系统即可运行。同时，学校原有的学生名单、成绩数据、评价记录可以通过批量导入快速迁移——AI 辅助匹配和清洗，不需要手动逐条整理。

如果学校已有学籍管理或教务 OA 系统，稳了与其各自独立、互不冲突，覆盖的是日常教学评价和学生成长管理这一层。

**安全保障**


| 数据加密 | 传输与存储全程加密          |
| ---- | ------------------ |
| 隐私合规 | 未成年人个人信息保护合规处理     |
| 审计追溯 | 操作日志完整记录           |
| 云端部署 | 开通即用，学校无需自建服务器     |
| 标准对接 | 数据可导出标准格式，对接上级管理平台 |


---

## P34.5 · 合作方式

### 用得起，算得清

稳了的定价原则：**基础功能低门槛，AI 能力按用量付费——用多少算多少，不用不花钱。**

**平台基础服务**
日常评价、考勤、德育管理、驾驶舱、成长档案、报表、家长端、智能助手——全部包含。

年费约 **9,000 元 / 校**，覆盖全校师生所有基础功能与增值服务。

**AI 能力按量计费**


| 能力      | 单价           | 举例                 |
| ------- | ------------ | ------------------ |
| AI 智能阅卷 | ¥0.3 / 人·科·次 | 500 人考一次语文 = 150 元 |
| AI 作业批改 | ¥0.1 / 人·科·次 | 500 人一次语文作业 = 50 元 |


用多少算多少，不用不花钱。

**灵活付费**

- **订阅制**：按年订阅，省心省力
- **额度随付随用**：充值额度按量扣减，适合先试后决定

支持免费试用。开通即用，无需采购硬件、无需自建服务器。

---

## P35 · 面向未来

### 持续迭代

**教学智能化**
智能阅卷 · 学情精准分析 · 个性化学习推荐 · 桌面助手辅助备课教研

**管理数智化**
数据驾驶舱 · 智能报表 · 预警系统 · 校务全流程审批 · 行政事务自动化

**育人多维化**
过程性评价 · 综合素质档案 · 激励与宠物养成 · 家校协同 · 心理健康关注

**家长端能力拓展**
个性化学习报告推送（基于 AI 错因分析，告诉家长孩子哪里薄弱、怎么补） · AI 举一反三练习（根据错题自动生成同类变式题） · 家长教育引导（推送科学的家庭教育方法和沟通建议）

---

## P36 · 封底

**稳了**

校园智能教·评·管·育一体化平台

> 让学校的每一天都在产生有价值的数据
> 让每一个学生的成长都被完整记录

【联系方式】
【体验入口二维码】

---

# 附：翻页节奏图

```
P1  封面
P2  政策背景 · 教育数字化不再是选择题
P3  呼吸页 · 一句话定调
P3.5 稳了能做什么 · 平台能力一览

    ── 第一章：管理者看到什么 ──
P4  呼吸页 ·「打开就知道，全校正在发生什么」
P5  驾驶舱 · 总览
P6  驾驶舱 · 逐层查看
P7  呼吸页 ·「检查通知来了，你不用慌」
P8  智能报表 · 内容
P9  智能报表 · 桌面助手生成
P10 呼吸页 ·「不等出事，提前知道」
P11 多维预警
P12 过程留痕
P12.5 实践案例（待填写）

    ── 第二章：数据从哪来 ──
P13 呼吸页 ·「教师正常上课，数据自己产生」
P13.5 多端协同 · 手机/电脑/大屏数据实时打通
P14 日常评价 · 操作
P15 日常评价 · 积分
P16 课堂运营
P16.5 德育活动与班级量化
P17 呼吸页 ·「在微信里说一句话，系统自动同步」
P18 微信即是入口 · 场景
P19 微信即是入口 · 通知 + 多平台接入

    ── 第三章：考试与学情 ──
P20 呼吸页 ·「从一张试卷，到一份完整的学情分析」
P21 智能阅卷 · 流程
P22 智能阅卷 · 报告
P23 学情分析

    ── 第四章：数据沉淀 ──
P24 呼吸页 ·「所有日常，沉淀成完整的成长记录」
P25 成长档案
P26 综合素质评价

    ── 第五章：让人愿意用 ──
P27 学生激励 · 积分/徽章/宠物养成
P30 家长端

    ── 第六章：智能助手 ──
P31 呼吸页 ·「不学新软件，说话就能用」
P32 桌面助手 · 报表/分析
P33 桌面助手 · 备课/查询

    ── 收尾 ──
P34 接入与安全
P34.5 合作方式
P35 未来方向
P36 封底
```

# 附：效果图清单


| 页码    | 图片内容                      | 优先级  |
| ----- | ------------------------- | ---- |
| P1    | 三端合成主视觉（封面）               | 必须   |
| P2    | 不放产品界面，政策简报风格排版           | —    |
| P3    | 不放图，纯净留白 + 大字标语           | —    |
| P3.5  | 无额外图，表格为视觉主体              | —    |
| P4    | 管理者办公场景（人物+从容感，不放产品界面）    | 必须   |
| P5    | 驾驶舱主界面全宽                  | 必须   |
| P6    | 驾驶舱逐层查看：年级/班级/学生 三张       | 必须   |
| P7    | 报告文档封面效果图（呼吸页）            | 有则更好 |
| P8    | 综合素质档案 + 教学质量报告           | 必须   |
| P9    | 桌面助手窗口（单轮对话，精简版）          | 必须   |
| P10   | 预警看板（呼吸页大图）               | 必须   |
| P11   | 预警列表截图                    | 必须   |
| P12   | 事件处置时间轴 + 通知回执            | 必须   |
| P12.5 | 学校实景照片 + 系统使用截图           | 待填写  |
| P13   | 教师用小程序场景图（呼吸页）            | 有则更好 |
| P13.5 | 小程序教师端+学生端界面为主（不重复放三端合成）  | 必须   |
| P14   | 小程序点评界面（手机端大图）            | 必须   |
| P15   | 积分看板 + 趋势 + 预警标记          | 必须   |
| P16   | 考勤/作业/请假/座位 四宫格           | 必须   |
| P16.5 | 德育活动详情 + 班级量化排名 + 洞察看板    | 必须   |
| P17   | 微信对话效果图（呼吸页）              | 必须   |
| P18   | 微信消息 + 助手确认回复             | 必须   |
| P19   | 微信通知推送效果图                 | 有则更好 |
| P20   | 纸质试卷 → 数字批改（呼吸页）          | 必须   |
| P21   | 阅卷四步流程示意图                 | 必须   |
| P22   | 批改结果（含错因标注）+ 成绩分布 + 题库搜索  | 必须   |
| P23   | 学情分析多视图 + 学生自助查分页         | 必须   |
| P24   | 学生档案页面效果图（呼吸页）            | 必须   |
| P25   | 学生档案：数据卡片 + 趋势 + 时间轴      | 必须   |
| P26   | 综合素质五维图 + 学生报告            | 必须   |
| P27   | 积分商城 + 徽章 + 宠物进化阶段 + 课堂投屏 | 必须   |
| P30   | 家长端小程序 2-3 个页面            | 必须   |
| P31   | 桌面助手界面（呼吸页大图）             | 必须   |
| P32   | 助手对话：迎检/考后场景              | 必须   |
| P33   | 助手对话：备课/查询场景              | 必须   |
| P36   | 品牌视觉 + 二维码（封底）            | 必须   |


---

# 附：AI 生图 Prompt

> **使用说明**
>
> - Prompt 面向 Midjourney v6+ / DALL-E 3 / Flux 等主流文生图工具
> - **呼吸页/氛围图**可直接使用 AI 生成结果
> - **UI 截图类**生成的是"概念示意"，最终排版建议替换为真实产品截图
> - 所有 prompt 末尾含 `no text`——标题、数据、标注全部后期叠加
> - **统一比例 16:9**（现代数字手册 / pitch deck 标准）

## 统一风格基底

以下关键词体现产品实际视觉语言（与 React Web 端一致），可追加在任意 prompt 末尾：

```
glassmorphism UI style, frosted glass panels (white/80 opacity with backdrop blur),
soft pastel gradient backgrounds (pale blue-50 via cyan-50 to white),
blue-tinted soft box shadows (rgba 59 130 246 / 8%), large 16px rounded corners,
light airy premium aesthetic, white and off-white base (#ffffff #fafbfc),
brand blue (#3b82f6) and indigo (#2563eb) accents, subtle violet highlights,
modern SaaS design, Apple-like cleanliness, generous white space,
no text, 4K, --ar 16:9
```

---

### P1 · 封面

```
Premium SaaS product hero shot on a luminous white-to-pale-blue gradient background
(#ffffff top fading to #eef4ff bottom).
Two or three large, very soft colored light orbs in the background (pale blue, pale indigo,
pale violet, each at 8% opacity, large radius) creating an airy, ethereal atmosphere.

Center-bottom: three devices floating with soft blue-tinted shadows beneath:
— A silver MacBook Pro angled 15 degrees, screen showing a light-themed analytics dashboard
  with a frosted-glass sidebar, white content area, blue donut chart, teal trend line,
  and rounded card components.
— To the lower-left: a white iPhone showing a clean mobile app with a blue navigation bar,
  a student list with colorful evaluation tag badges (green, blue, purple).
— To the lower-right: a floating frosted-glass card (no device frame, semi-transparent white
  with visible backdrop blur effect) showing an AI chat assistant with message bubbles.

The devices cast soft, diffused blue-tinted shadows (not black).
Upper third is clean white space for brand text overlay.
Ultra clean, premium, luminous. No text anywhere. --ar 16:9 --v 6 --s 200
```

---

### P2 · 政策背景

> 本页以文字排版为主，纯色或极淡渐变背景。不需要 AI 生图。

---

### P3 · 呼吸页（标语）

```
Minimal abstract background, pure white (#ffffff) center with very subtle radial
gradient warmth. Three large soft light orbs placed asymmetrically:
pale blue (top-left, 6% opacity), pale indigo (bottom-right, 5% opacity),
pale violet (top-right, 4% opacity). Each orb is heavily blurred (gaussian 200px feel).

No product screenshots, no devices, no UI. Pure atmosphere.
Extremely clean, luminous, cathedral-like white space in the center.
Serene and professional. No text, no devices, no objects. --ar 16:9 --v 6 --s 250
```

---

### P3.5 · 能力全景表

> 本页以表格为主，无需 AI 生图。纯色或极淡渐变背景即可。

---

### P4 · 呼吸页（管理者从容感）

```
A Chinese male school principal in his 50s, sitting at a clean modern desk in a bright,
naturally lit office. He looks calm and confident, leaning slightly forward with
a subtle assured expression.

His laptop is open in front of him — the screen faces away from the camera,
only a faint blue-white glow visible on his face and the desk surface.
We do NOT see the screen content — the focus is on the person, not the interface.

Bright natural daylight from a large window. Modern minimalist office: white walls,
a few books, a small green plant. Warm color grading with a slight golden tone.
Documentary portrait style, shallow depth of field on the principal.
Serene, authoritative, modern education leadership.
--ar 16:9 --v 6 --s 250
```

---

### P5 · 驾驶舱主界面

```
Full-width UI screenshot mockup of a modern education analytics dashboard.
Light theme on white background.

Left: frosted-glass sidebar (semi-transparent white, backdrop blur effect,
64px wide) with blue icon buttons and a small blue active indicator.
Top bar: rounded search field and date range selector.

Main content area:
— Top row: 4 KPI cards with large rounded corners (16px), subtle blue-tinted shadows.
  Each card has a soft pastel gradient background (blue-50, emerald-50, violet-50, amber-50)
  with a metric number, a label, and a small chart (donut, sparkline, bar).
— Middle: a large area chart with blue-to-teal gradient fill, white grid lines,
  and smooth data point dots.
— Bottom: a 3-column grid of class summary cards, each with frosted-glass style,
  rounded corners, mini sparkline, and colored accent badges.

Clean modern SaaS design, generous white space, blue-tinted soft shadows.
No readable text. --ar 16:9 --v 6 --s 50
```

---

### P6 · 驾驶舱逐层钻取

```
Three frosted-glass UI panels arranged in a cascading layout (slightly overlapping,
like fanned cards) on a pale blue-white gradient background (#fafbfe).

Panel 1 (back, largest): Grade comparison view — grouped horizontal bar chart
in blue, teal, and indigo. Rounded bars. Clean white card background.

Panel 2 (middle): Class detail card — a pentagon radar chart with semi-transparent
blue filled area and five colored axis endpoints. Four mini metric tiles beside it
with soft pastel backgrounds (blue-50, green-50, violet-50, amber-50).

Panel 3 (front, smallest): Student profile snippet — circular avatar placeholder,
a compact score trend sparkline, attendance dot calendar (green/orange/gray dots),
and 3 recent evaluation entries with colored tag badges.

Each panel has 16px rounded corners, frosted-glass effect (semi-transparent white),
and blue-tinted soft drop shadow. --ar 16:9 --v 6 --s 80
```

---

### P7 · 呼吸页（迎检报告）

```
A beautifully designed document lying at a gentle angle on a clean white desk.
Bright natural lighting from a window, soft shadows.

The document has a clean blue gradient header band, a geometric school crest placeholder,
and structured content sections visible. Several pages fan out beneath it showing
glimpses of colorful charts (blue donut, teal bars) and formatted tables.

A modern silver pen and a small potted succulent plant nearby for warmth.
The desk surface is white/light wood. Background is bright and airy.
Overhead 3/4 angle, shallow depth of field, premium stationery photography.
Optimistic, professional, organized feeling. --ar 16:9 --v 6 --s 250
```

---

### P8 · 智能报表

```
Two document/report mockups side by side, floating with blue-tinted soft shadows
on a white-to-pale-blue gradient background.

Left document — Comprehensive Quality Evaluation:
Frosted-glass card frame with 16px rounded corners. Inside: a large colorful pentagon
radar chart (5 colors: blue, emerald, amber, violet, rose), semester rating badges below,
and a teacher comment text area. Clean blue header band.

Right document — Teaching Quality Analysis:
Same frosted-glass card frame. Inside: a grouped bar chart comparing class averages
across subjects (blue, teal, indigo bars), a trend line chart below showing 4-exam
score progression. Summary stats row at bottom.

Both cards have subtle gradient backgrounds (from-white via-blue-50/30 to-white).
Flat lay arrangement, bright, professional. No readable text. --ar 16:9 --v 6 --s 100
```

---

### P9 · 桌面助手（精简预览）

```
A compact desktop chat assistant window mockup, centered on a pale gradient background
(white to #f0f4ff).

The window has a frosted-glass frame: semi-transparent white background, visible
backdrop blur, 16px rounded corners, blue-tinted soft shadow. macOS-style
title bar with three colored dots. The window is smaller than full-screen,
occupying about 60% of the image width.

Inside the chat — just ONE exchange:
— User message (light gray rounded bubble, right-aligned): one-line placeholder text
— Assistant reply (white bubble with blue-500 left accent border, left-aligned):
  a brief text block, then an embedded frosted-glass card showing a document preview
  thumbnail (blue cover with small chart), file name, and a blue rounded download button

Bottom: rounded text input field with placeholder and blue send button.
Minimal, clean — this is a teaser, not the full demo.
--ar 16:9 --v 6 --s 80
```

---

### P10 · 呼吸页（预警氛围）

```
A modern bright office setting. A laptop screen showing a student monitoring dashboard
in light theme. The screen is mostly clean white and blue, but 3-4 data rows are
highlighted with soft red/orange warning backgrounds and small red alert badge icons.

The laptop sits on a clean white desk. Warm natural light from a window.
The image is bright overall — this is not a dark dramatic shot. The tension comes
from the red/orange warning accents standing out against the otherwise calm blue-white
interface. Shallow depth of field focused on the warning rows.
A subtle sense of "something needs attention" without being alarming.
Professional, controlled, modern. --ar 16:9 --v 6 --s 200
```

---

### P11 · 预警列表

```
UI screenshot mockup of a warning management list. Light theme, white background.

Top bar: frosted-glass filter row with rounded chip buttons
(severity: red/orange/yellow toggles, status: all/pending/resolved).

Clean data table below. Each row in a frosted-glass card style:
— Small circular avatar placeholder
— Student name block
— Warning severity badge: red rounded tag, orange rounded tag, or yellow rounded tag
— Three trend indicators: small downward arrow icons with colored backgrounds
  (red for grade decline, orange for attendance decline, amber for score decline)
— Status tag (blue "处理中", emerald "已解决", gray "待处理") as rounded pills
— Date column

Rows have subtle hover-state styling, alternating white and #fafbfc backgrounds.
Blue-tinted soft shadows on the filter bar. 16px rounded corners on cards.
No readable text. --ar 16:9 --v 6 --s 50
```

---

### P12 · 处置时间轴 + 通知回执

```
Clean white background, two components side by side:

Left (65%): A vertical timeline with 5 connected nodes.
The connecting line is a soft blue-to-teal gradient.
Each node is a frosted-glass mini-card (rounded, semi-transparent white, subtle shadow):
— Node 1 (red dot): alert creation — with timestamp and trigger description placeholder
— Node 2 (blue dot): teacher interview — content summary placeholder
— Node 3 (orange dot): parent notified — push time placeholder
— Node 4 (teal dot): follow-up — additional notes placeholder
— Node 5 (emerald dot): archived — resolution placeholder

Right (30%): A frosted-glass notification receipt card with 16px rounded corners.
Shows: message type icon in blue circle, sent time, delivered time,
read time with emerald double-check icon. Light emerald-50 gradient background accent.

Spacious layout, glassmorphism card style, blue-tinted soft shadows. --ar 16:9 --v 6 --s 60
```

---

### P13 · 呼吸页（教师场景）

```
A Chinese female middle-school teacher in her 30s, standing near student desks
in a bright modern classroom. She casually holds her smartphone, glancing at the screen
with a slight confident smile.

Professional but comfortable outfit (light blouse, neat but relaxed).
Bright natural daylight streams through large floor-to-ceiling windows,
creating soft warm light. Students visible in the background, softly blurred.
Modern classroom: white walls, light wood furniture, a green chalkboard.

The color grading is bright and warm with a slight golden-hour tone.
Documentary style, shallow depth of field focused on the teacher.
Authentic, candid, reassuring, modern education atmosphere.
--ar 16:9 --v 6 --s 200
```

---

### P13.5 · 多端协同（小程序为主）

```
Two white smartphones side by side at slight angles on a clean white desk, bright lighting.
Soft blue-tinted shadows beneath. Pale gradient background (white to #f0f4ff).

Left phone — Teacher Mini-Program:
Blue WeChat-style navigation bar at top. Main content: a class student grid
with colorful evaluation tag badges (emerald "+2", rose "−1", blue "+3").
Below: quick-action row with rounded icon buttons (attendance, homework, points).
Frosted-glass card components.

Right phone — Student Mini-Program:
Clean feed layout: point change log entries with colored badges,
a circular pet avatar thumbnail in a soft violet gradient frame,
and a "today's score" summary card with a large number and trend arrow.

Between the two phones: subtle curved dotted sync lines suggesting real-time
data connection. Brand blue (#3b82f6) accent throughout.
Product photography, bright, premium. Focus on mobile experience.
--ar 16:9 --v 6 --s 120
```

---

### P14 · 小程序点评界面

```
A hand holding a white iPhone in a bright classroom environment.
The phone screen shows a clean mobile app interface:
— Blue navigation bar at top with class name
— A grid of student name cards (4 columns) with small circular avatar placeholders.
  One card is highlighted with a blue selection ring and subtle scale-up effect.
— Bottom: a horizontal row of evaluation dimension buttons in different soft colors
  (emerald, blue, violet, amber, rose), each with rounded corners and a small icon.

The phone is slightly tilted toward the viewer.
Background: softly blurred bright classroom with natural warm daylight, desks and
students out of focus. Shallow depth of field on the phone screen.
The UI uses frosted-glass card backgrounds and blue-tinted soft shadows.
Photorealistic, warm, authentic. --ar 16:9 --v 6 --s 150
```

---

### P15 · 积分看板

```
UI screenshot mockup of a student score leaderboard dashboard. Light theme.

White background. Top summary bar in a frosted-glass strip:
total students, class average (large blue number), week-over-week change (green up arrow).

Main area: ranked student list in frosted-glass card rows —
each row has: rank number, circular avatar, name placeholder, score in brand blue,
a tiny emerald/rose trend arrow, and a small 8-week sparkline graph.
Two students near the bottom have soft orange warning badge icons.

Right sidebar (30%): a large area chart with blue-to-teal gradient fill
showing score trends over 8 weeks. Smooth curve, subtle grid lines.
Below: a "needs attention" section with 3 student mini-cards
on light rose-50 gradient background.

Frosted-glass panels, 16px rounded corners, blue-tinted soft shadows. --ar 16:9 --v 6 --s 50
```

---

### P16 · 课堂运营四宫格

```
Four UI panels arranged in a 2x2 grid with 16px gaps, on a pale gradient background
(white to #f8fbff). Each panel is a frosted-glass card (semi-transparent white,
16px rounded corners, blue-tinted soft shadow):

Top-left — Attendance:
A class grid of small circular student indicators in 6 columns.
Emerald = present, rose = absent, amber = late, gray = unmarked.
Top tabs (morning/afternoon/evening) with blue active indicator.

Top-right — Homework:
Assignment cards stacked vertically. Each: title placeholder, subject color tag,
due date, and a progress bar (blue gradient fill showing submission %).

Bottom-left — Leave Request:
An approval card: student info header, date range, reason text,
photo thumbnail, and two buttons (emerald Approve, rose Reject) with rounded corners.

Bottom-right — Seating Chart:
A 6×5 grid of small rounded student name blocks. One highlighted in blue (selected).
A "Rotate" floating button in soft indigo.

All panels share blue accent headers. --ar 16:9 --v 6 --s 60
```

---

### P16.5 · 德育活动与班级量化

```
Two frosted-glass UI panels side by side on white background:

Left — Activity Detail:
A gradient banner at top (soft blue-to-indigo-to-violet, like the product's
gradient cards). Below: event title, date/location with icons.
Participant list: student rows with avatars, each showing an emerald checkmark
or gray clock badge. Bottom: scoring area with 3 rating dimensions and star inputs.

Right — Class Ranking:
Horizontal bar chart of 8 classes. Bars use blue-to-teal gradient fill,
varying lengths. Top class has a small gold medal icon.
Filter dropdowns at top in a frosted-glass bar. Below the chart:
a small trend sparkline showing ranking changes over 4 weeks.

Both panels have frosted-glass backgrounds, 16px corners, blue-tinted shadows.
Light, bright, modern. No readable text. --ar 16:9 --v 6 --s 60
```

---

### P17 · 呼吸页（微信对话氛围）

```
A white smartphone floating at a gentle angle on a luminous white-to-pale-blue
gradient background. Soft colored light orbs in the background
(pale blue, pale violet, at 6% opacity).

The phone screen shows a beautifully stylized messaging interface:
— A user message bubble (WeChat green, right side) with placeholder text
— A system reply bubble (white, left side) with an emerald checkmark icon
  and a small embedded frosted-glass info card showing structured data

The phone casts a soft blue-tinted shadow below.
The overall image is bright, clean, minimal. Premium product showcase feel.
The messaging UI looks elevated and designed, not a raw screenshot.
--ar 16:9 --v 6 --s 250
```

---

### P18 · 微信入口对话

```
UI mockup of a WeChat conversation on white background, elevated design quality.
Green WeChat header bar at top.

Four conversation exchanges:
1. Teacher green bubble → System white reply with a small frosted-glass card:
   attendance icon, two student names with blue "请假" and orange "迟到" tags

2. Teacher green bubble → System reply with card: red minus badge,
   student name, score "-2", reason tag in rose-50 background

3. Teacher green bubble → System reply with card: emerald plus badge,
   class name, "+5", context note in emerald-50 background

4. Teacher green bubble → System reply with card: attendance update
   and event creation note

Each system reply card has frosted-glass styling (semi-transparent white, rounded corners,
subtle border). A small blue "确认" pill button on each card.
Clean, bright, modern. --ar 16:9 --v 6 --s 80
```

---

### P19 · 微信通知推送

```
Three smartphone notification cards floating at gentle angles on a luminous white
to pale blue gradient background. Arranged with slight vertical overlap, like fanned cards.

Card 1 (top): WeChat notification — app icon, "成绩通知" title,
score summary preview with small blue chart icon. White frosted-glass card,
16px rounded corners, subtle shadow.

Card 2 (middle): WeChat notification — "考勤异常" title,
orange warning icon, student name with absence status.
Soft orange-50 left accent stripe.

Card 3 (bottom): WeChat notification — "请假已批准" title,
emerald checkmark icon, approval detail preview.
Soft emerald-50 left accent stripe.

iOS notification style but with glassmorphism enhancement (frosted backgrounds).
Clean, bright, minimal. --ar 16:9 --v 6 --s 150
```

---

### P20 · 呼吸页（试卷到数字化）

```
Creative split-screen composition on a bright background:

Left half: a paper exam sheet at a slight angle on a warm light-wood desk.
Handwritten student answers visible (slightly blurred). A red grading pen beside it.
Warm natural sunlight. Analog, tactile, traditional feel.

Right half: a clean digital screen showing the same exam but digitized —
light-themed grading interface with frosted-glass panel, colorful annotation boxes
(emerald for correct, rose for errors, amber for partial credit),
score badges, and an AI analysis sidebar with blue accent.
Bright, modern, precise.

The transition zone in the center blends paper texture into digital pixels
with a creative dissolve effect. Warm on left, cool-bright on right.
Optimistic transformation from old to new. --ar 16:9 --v 6 --s 280
```

---

### P21 · 阅卷四步流程

```
Horizontal four-step process on white background. Four frosted-glass cards
connected by gradient arrows (blue to teal to emerald):

Card 1 — Camera icon + paper document icon. Step number "1" in a blue circle.
Below: tiny UI preview of a phone camera framing a test paper.
Card background: pale blue-50 gradient.

Card 2 — Magnifying glass + structured grid icon. Step "2" in a teal circle.
Below: UI preview showing auto-detected question regions outlined in blue boxes.
Card background: pale cyan-50 gradient.

Card 3 — Checklist + AI sparkle icon. Step "3" in an indigo circle.
Below: UI preview showing editable rubric criteria fields.
Card background: pale indigo-50 gradient.

Card 4 — Checkmark + scored document icon. Step "4" in an emerald circle.
Below: UI preview showing graded answers with colored annotation marks.
Card background: pale emerald-50 gradient.

Each card has 16px corners, frosted-glass style, blue-tinted soft shadow.
Clean modern infographic. --ar 16:9 --v 6 --s 100
```

---

### P22 · 阅卷结果与分析

```
Three frosted-glass UI panels arranged horizontally on a pale gradient background:

Panel 1 — Grading Result:
A student exam paper image with colored rounded annotation overlays:
emerald boxes on correct answers, rose boxes on errors with small "×",
amber boxes on partial credit. Score badge in upper-right (blue circle).

Panel 2 — Score Distribution:
Histogram chart. Bars in blue-to-indigo gradient. Bell curve overlay in teal.
Mean line as a dashed vertical line. Score ranges on x-axis.
Clean white card background.

Panel 3 — Knowledge Point Mastery:
Horizontal bar chart. Bars use gradient fills —
high mastery in emerald-to-teal, low mastery in rose-to-orange.
Dashed threshold line at 60%. Labels as placeholder blocks.

Each panel: frosted-glass card, 16px rounded corners, blue-tinted shadow.
Bright, analytical, professional. --ar 16:9 --v 6 --s 60
```

---

### P23 · 学情分析

```
Two-part layout on white background:

Main area (left 60%): Class academic analysis dashboard in a frosted-glass frame.
— Dropdown filters at top (exam name, class selector) as rounded pill selectors
— Large multi-line chart: 5 subject lines in brand colors
  (blue, emerald, violet, amber, rose) showing trends over 5 exams.
  Smooth curves with subtle gradient fills beneath each line.
— Summary table below: clean rows with subject columns,
  statistics as placeholder number blocks.

Inset (right 35%): A white iPhone mockup showing student self-service score query.
— Student info header with avatar circle
— Subject score cards stacked vertically: each with subject name, large score number,
  and a small comparison bar (brand blue = student, gray = class average).
— Blue rounded "查看批改详情" button at bottom.

Both views use the glassmorphism card style with blue accents. --ar 16:9 --v 6 --s 60
```

---

### P24 · 呼吸页（成长档案氛围）

```
A tablet floating at a slight tilt on a luminous white-to-pale-blue gradient background.
Soft colored light orbs (pale blue, pale violet, pale teal, each <8% opacity) surround it.

The tablet screen shows a visually rich student profile page — light theme:
a student avatar circle, a row of colorful stat cards (blue, emerald, violet, amber, gold)
with soft pastel gradient backgrounds, a growth trend line chart with blue gradient fill,
and a vertical timeline with colored event dots.

The tablet casts a soft blue-tinted shadow.
The image feels aspirational and warm — data as a beautiful story of growth.
Bright, luminous, premium. --ar 16:9 --v 6 --s 300
```

---

### P25 · 成长档案详情

```
UI mockup of a student profile page. Light theme, white background:

Top: Student header — circular avatar, name and class info.
Below: 5 stat cards in a horizontal row, each a frosted-glass mini-card
with soft pastel gradient background:
— Blue-50: academic score with number and sparkline
— Emerald-50: behavior score
— Teal-50: attendance rate with percentage
— Violet-50: activities count
— Amber-50: honors count
Each card has a subtle blue-tinted shadow and 16px corners.

Middle: A smooth line chart over 6 semesters. Two gradient-filled lines
(blue for academic, emerald for behavior). Subtle grid, data point dots.

Bottom: A vertical timeline with 6 event entries.
Each entry: colored dot (matching type), date, event icon, description placeholder.
Events connected by a thin gray vertical line.

Clean modern SaaS design. --ar 16:9 --v 6 --s 60
```

---

### P26 · 综合素质评价

```
Two frosted-glass document panels side by side, floating with blue-tinted shadows
on a white-to-pale-blue gradient background:

Left — Quality Evaluation Report:
Clean blue header band. Center: large pentagon radar chart with 5 axes.
Filled area in semi-transparent brand blue gradient. Each axis endpoint
in a different color (blue, emerald, amber, violet, rose).
Below: 5 dimension rows with colored level badges (A green, B blue, C amber).
Teacher comment section at bottom. Frosted-glass frame.

Right — Student Term Report:
School letterhead placeholder (geometric crest + name line).
Student info grid in a light blue-50 banner.
Grade table: clean rows with subject, score, and rank columns.
Below: teacher evaluation text block with placeholder lines.
Official stamp area (light indigo circle outline) in corner.

Both panels have 16px rounded corners, glassmorphism style. --ar 16:9 --v 6 --s 100
```

---

### P27 · 学生激励

```
Four-quadrant showcase on white background, arranged in a balanced layout
with soft dividing space between:

Top-left — Rewards Shop:
A frosted-glass mobile screen mockup. Grid of reward cards:
each with item image, name, and a teal coin-icon price badge.
Header: "积分商城" with point balance in a blue pill.

Top-right — Badge Collection:
8 achievement badges in a 4×2 grid on a frosted-glass panel.
4 unlocked: detailed metallic/enamel style in blue, emerald, gold, violet.
4 locked: gray silhouettes with a small lock icon.
Slight sparkle effects on unlocked badges.

Bottom-left — AI Pets:
Two cute cartoon creatures side by side on a soft violet-50 gradient background.
A small simple round creature (Stage 1, baby-like) and a larger evolved version
(Stage 3, with wings and decorative details). Friendly kawaii style,
teal and blue color palette, big expressive eyes, clean white background.

Bottom-right — Classroom Display:
A frosted-glass wide-screen panel showing a class pet showcase grid:
student pets with name labels, top 3 have small crown/medal icons.
Blue header bar. Colorful and lively.

Balanced, bright, playful yet professional. --ar 16:9 --v 6 --s 150
```

---

### P30 · 家长端

```
Three white iPhones standing at slight angles in a row on a white surface.
Soft blue-tinted shadows beneath. Bright studio lighting.
Pale gradient background (white to #f0f4ff).

Phone 1 — Exam Results:
Subject score cards stacked vertically (Chinese, Math, English).
Each card: frosted-glass background, subject name, large score number in blue,
a horizontal comparison bar (brand blue = student, gray-300 = class average).
Trend arrows in emerald/rose.

Phone 2 — Behavior Evaluations:
A vertical feed of evaluation entries on white background.
Each entry: timestamp, teacher name, evaluation type tag
(emerald "+3" or rose "−2"), reason text placeholder.
Top: total points in a circular progress ring (blue gradient).

Phone 3 — Pet Status:
A cute cartoon pet centered on a soft violet-50/cyan-50 gradient background.
Pet name and level badge. Two stat bars (happiness in emerald, growth in blue).
"Recent Growth Log" section with 3 small entries and point gain badges.

Product photography, bright, premium. --ar 16:9 --v 6 --s 120
```

---

### P31 · 呼吸页（智能助手氛围）

```
A frosted-glass application window floating centered on a luminous white-to-pale-blue
gradient background. Soft colored light orbs (pale blue, pale indigo, <8% opacity).

The window has macOS-style rounded corners (16px), three colored dots in title bar,
semi-transparent white frame with visible backdrop blur effect.

Inside: a clean white chat interface showing one brief exchange:
— A light gray user bubble (1 line of placeholder text)
— A white assistant bubble with blue-500 left accent border,
  containing a small frosted-glass card with a mini chart thumbnail

The window casts a soft, diffused blue-tinted glow/shadow.
Surrounding white space is vast and luminous.
Premium, focused, minimalist, inviting. --ar 16:9 --v 6 --s 280
```

---

### P32 · 桌面助手（迎检/考后）

```
UI mockup of a desktop AI assistant chat window, frosted-glass frame on white background.

Message 1 — User (light gray bubble, right): one-line placeholder text
→ Assistant (left): a loading indicator with three blue animated dots

Message 2 — Assistant: text response (3 lines placeholder), then an embedded
frosted-glass card: small blue document cover thumbnail on left,
file name and size on right, blue rounded "下载" button.
Below the card: a 3-column stats summary row,
each stat in a small pastel-gradient mini-card (blue-50, emerald-50, violet-50)
with a number and label.

Message 3 — User: one-line placeholder
→ Assistant: an embedded comparison chart card (two bar groups in blue and teal
on a frosted-glass panel, with an indigo "查看完整报告" link).

Text input bar at bottom with rounded field and blue send button.
Clean, modern, glassmorphism chat UI. --ar 16:9 --v 6 --s 60
```

---

### P33 · 桌面助手（备课/查询）

```
UI mockup of a desktop AI assistant chat window, frosted-glass frame on white background.

Message 1 — User (gray bubble): placeholder about lesson prep
→ Assistant: a frosted-glass structured card with lesson outline —
  numbered list (4 items), each with a title and 2 sub-bullets.
  Teal bullet indicators. Light teal-50 card background.

Message 2 — User: placeholder about error analysis
→ Assistant: a frosted-glass card with a 2-column table —
  knowledge points on left, question numbers on right,
  colored difficulty dots (emerald easy, blue medium, rose hard).

Message 3 — User: placeholder about attendance
→ Assistant: an embedded data table in a frosted-glass card.
  5 rows (class names), 3 columns (total, present, rate %).
  Highest rate cell highlighted in emerald-50, lowest in rose-50.

Clean glassmorphism chat design, 16px corners, blue-tinted shadows. --ar 16:9 --v 6 --s 60
```

---

### P36 · 封底

```
Minimal brand closing visual on a luminous gradient background
(white center to pale blue #eef4ff edges to pale violet #f3eeff at corners).

Center: a subtle, elegant abstract symbol — 5-6 small luminous dots arranged
in a gentle ascending arc, connected by thin lines forming a constellation pattern.
Dots glow softly in brand blue (#3b82f6) and teal (#2dd4bf).
One slightly larger dot at the apex.

Below: a thin horizontal line accent in soft indigo.
A very faint radial light orb behind the constellation at 5% opacity.

Upper 40% is clean luminous space for brand text overlay.
Lower 20% has space for QR code and contact info placement.
Premium, confident, aspirational. Bright and hopeful, not dark.
--ar 16:9 --v 6 --s 220
```

---

## 补充说明

**不需要 AI 生图的页面：**

- **P12.5（实践案例）**：需要真实学校照片和实景截图，不适合 AI 生成
- **P34（接入与安全）**/ **P34.5（合作方式）**/ **P35（面向未来）**：文字为主的页面，可配纯色/渐变背景，无需专门生图

**后期处理要点：**

1. **所有文字**均需后期叠加——AI 生图中的文字不可直接使用
2. **UI 类**画面建议先用 AI 出图确定构图和氛围，最终替换为真实产品截图
3. **呼吸页 / 氛围图**可直出使用，调色后直接上版
4. **宠物图**（P27）若产品已有宠物渲染资产，优先使用产品内素材
5. **统一后期色调**：所有图保持一致的明亮蓝白色温，shadows 带蓝色调（不要纯黑投影），饱和度中等偏低（干净而非艳丽）

