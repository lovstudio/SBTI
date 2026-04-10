<p align="center">
  <img src="docs/images/cover.png" alt="XBTI Cover" width="100%">
</p>

<h1 align="center">
  <img src="assets/logo.svg" width="32" height="32" alt="Logo" align="top">
  XBTI
</h1>

<p align="center">
  <strong>开源人格测试引擎 — 5 分钟创建你自己的 BTI</strong><br>
  <sub>基于 SBTI（恶搞版 MBTI）泛化而来，支持任意主题的人格测试生成</sub>
</p>

<p align="center">
  <a href="https://sbti.lovstudio.ai">SBTI 体验</a> &middot;
  <a href="https://cbti.lovstudio.ai">CBTI 体验</a> &middot;
  <a href="https://space.bilibili.com/417038183">原作者 B站@蛆肉儿串儿</a>
</p>

---

## XBTI 是什么？

XBTI 是一个**人格测试引擎**，源自 B 站 UP 主 **蛆肉儿串儿** 原创的 SBTI（恶搞版 MBTI），经泛化后支持创建任意主题的人格测试。

**核心引擎**：15 维度评估 + 曼哈顿距离匹配算法，只需添加一个 case 目录即可生成全新的人格测试。

### 已有的 BTI 变体

| 变体 | 主题 | 链接 |
|------|------|------|
| **SBTI** | 恶搞人格（27 种离谱人格） | [sbti.lovstudio.ai](https://sbti.lovstudio.ai) |
| **CBTI** | 猫猫人格 | [cbti.lovstudio.ai](https://cbti.lovstudio.ai) |

### 创建你自己的 BTI

用 Claude Code 的 `xbti-creator` skill，输入主题名和偏好即可生成完整的 BTI：

```bash
# 安装 skill
npx skills add lovstudio/skills --skill lovstudio:xbti-creator

# 在 Claude Code 中调用
/lovstudio-xbti-creator
```

## 引擎架构

```
cases/                    # 各 BTI 变体数据
├── registry.js           # 注册所有变体
├── sbti/                 # SBTI 数据
│   ├── index.js          # meta 信息（id、名称、描述）
│   ├── dimensions.js     # 15 维度定义（5 模型 × 3 子维度）
│   ├── questions.js      # 30 道题（每维度 2 题，3 选项）
│   └── types.js          # 人格类型（代号、模式、描述）
└── cbti/                 # CBTI 数据（同结构）
src/
├── components/
│   ├── HomePage.jsx      # 首页（选择 BTI 变体）
│   ├── TestFlow.jsx      # 测试流程控制
│   ├── CaseIntro.jsx     # 变体介绍页
│   ├── TestScreen.jsx    # 答题页
│   └── ResultScreen.jsx  # 结果页
├── logic/
│   └── scoring.js        # 通用匹配算法（无需修改）
└── useHashRoute.js       # 路由
```

**添加新 BTI**：在 `cases/` 下新建目录，填入数据文件，在 `registry.js` 中注册即可。

## 匹配算法

1. 每道题对应一个维度，同维度得分求和
2. 映射为三级：L（≤3）/ M（4）/ H（≥5）
3. 构建 15 维用户向量，与所有人格模式做**曼哈顿距离**匹配
4. 最近距离为匹配结果，相似度 = `(1 - distance/30) × 100%`
5. 兜底：相似度 < 60% 时强制分配到 fallback 人格

## 本地开发

```bash
pnpm install
pnpm dev
```

构建：`pnpm build`

## 技术栈

| 层 | 技术 |
|---|------|
| 框架 | React 19 + Vite 8 |
| 包管理 | pnpm |
| 部署 | Vercel + Cloudflare DNS |

## 分支说明

| 分支 | 说明 |
|------|------|
| `main` | XBTI 引擎（泛化版，多 case 架构） |
| `sbti` | SBTI 原版（恶搞人格测试） |
| `nbti` | NBTI 版本（牛逼人格测试） |
| `html-version` | 最初的单文件 HTML 版 |

## 媒体报道

- [MBTI 过时了！XBTI"傻逼体"凭什么刷屏？](https://mp.weixin.qq.com/s/nXFvJrs_qqtrckmegSu2Zg)
- [MBTI 过时了，来 XBTI 测测吧...](https://mp.weixin.qq.com/s/XxYcBZzPLaQudK0cFFDgJQ)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=lovstudio/XBTI&type=Date)](https://star-history.com/#lovstudio/XBTI&Date)

## License

Apache-2.0 &mdash; 原创内容版权归 [B站@蛆肉儿串儿](https://space.bilibili.com/417038183)，代码部分由 [lovstudio.ai](https://lovstudio.ai) 维护
