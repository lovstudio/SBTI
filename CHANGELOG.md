## 0.5.2

- feat: add NOMBTI case (数字游民城市人格测试) with 16 city personalities
- refactor: replace jsdelivr CDN fetch with static imports for faster loading
- fix: nombti image paths for gallery integration

## 0.5.1

- docs: add technical deep-dive article on XBTI engine architecture

## 0.5.0

- feat: poster-style case cards with image mosaic grid on homepage
- feat: hover animations and clickable card navigation

## 0.4.1

- feat: dynamic case loading from GitHub CDN
- fix: correct xbti-creator skill install command
- docs: improve README with logo, license, and updated architecture
- docs: fix BTI variant links to xbti.lovstudio.ai/c/ paths
- docs: remove NBTI references (temporarily taken down)
- chore: add CBTI personality images to public/

## 0.4.0

- feat: 多模板架构，支持多套人格测试共存（cases/ 目录）
- feat: 独立路由，每套测试有独立首页和测试流程（/sbti、/cbti）
- feat: XBTI 总首页，展示所有可用测试 + xbti-creator 引导
- feat: 新增 CBTI 猫咪人格测试（18 种猫咪人格）
- feat: 每套测试支持切换其他风格（下拉选择）
- feat: 人格 marquee 自动滚动展示
- feat: 集成 lovinsp（点击 DOM 跳转源码）
- refactor: scoring.js 参数化，不再硬编码数据源
- refactor: TestScreen / ResultScreen 改为 props 驱动
- refactor: 数据从 src/data/ 迁移到 cases/{id}/

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
