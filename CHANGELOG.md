## 0.3.0

- refactor: 项目从 SBTI 泛化为 XBTI 人格测试引擎
- refactor: GitHub 仓库从 lovstudio/SBTI 更名为 lovstudio/XBTI
- refactor: package.json name 从 sbti-test 改为 xbti
- docs: README 重写为引擎视角，介绍泛化架构和 xbti-creator skill
- chore: 创建 sbti 分支保留原版 SBTI 代码
- chore: workflow release asset 命名从 sbti-test 改为 xbti

## 0.1.1

- docs: 重写 README，添加项目介绍、特色、技术栈、算法简介、媒体报道
- docs: 生成项目封面图
- docs: 添加 Apache-2.0 LICENSE
- docs: 收录两篇媒体报道文章

## 0.1.0

- feat: 将静态 HTML 站点重构为 Bun + React (Vite) 项目
- 组件化拆分：IntroScreen、TestScreen、ResultScreen
- 数据模块化：dimensions、questions、types 独立管理
- 评分逻辑提取为独立模块
- 保留全部原始功能：30题测试、酒鬼隐藏人格、HHHH兜底、15维度评分
