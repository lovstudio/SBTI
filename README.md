<p align="center">
  <img src="docs/images/cover.png" alt="XBTI Cover" width="100%">
</p>

<h1 align="center">XBTI</h1>

<p align="center">
  <strong>一个开源的人格测试引擎 — 5 分钟创建你自己的 BTI</strong><br>
  <sub>基于 SBTI（恶搞版 MBTI）泛化而来，支持任意主题的人格测试生成</sub>
</p>

<p align="center">
  <a href="https://sbti.lovstudio.ai">SBTI 体验</a> &middot;
  <a href="https://nbti.lovstudio.ai">NBTI 体验</a> &middot;
  <a href="https://space.bilibili.com/417038183">原作者 B站@蛆肉儿串儿</a>
</p>

---

## XBTI 是什么？

XBTI 是一个**人格测试引擎**，源自 B 站 UP 主 **蛆肉儿串儿** 原创的 SBTI（恶搞版 MBTI），经泛化后支持创建任意主题的人格测试。

**核心引擎**：15 维度评估 + 曼哈顿距离匹配算法，只需替换数据文件即可生成全新的人格测试。

### 已有的 BTI 变体

| 变体 | 主题 | 链接 |
|------|------|------|
| **SBTI** | 恶搞人格（27 种离谱人格） | [sbti.lovstudio.ai](https://sbti.lovstudio.ai) |
| **NBTI** | 牛逼人格（20 种牛逼人格） | [nbti.lovstudio.ai](https://nbti.lovstudio.ai) |

### 创建你自己的 BTI

用 Claude Code 的 `xbti-creator` skill，输入主题名和偏好即可生成完整的 BTI 网站：

```bash
# 安装 skill
npx skills add lovstudio/skills --skill lovstudio:xbti-creator

# 在 Claude Code 中调用
/lovstudio-xbti-creator
```

例如：LBTI（龙虾人格）、FBTI（创业者人格）、CBTI（猫猫人格）……

## 引擎架构

```
src/
├── data/
│   ├── dimensions.js    # 15 维度定义（5 模型 × 3 子维度）
│   ├── questions.js     # 30 道题（每维度 2 题，3 选项）
│   └── types.js         # 人格类型（代号、模式、描述）
├── logic/
│   └── scoring.js       # 通用匹配算法（无需修改）
└── components/
    ├── IntroScreen.jsx   # 首页
    ├── TestScreen.jsx    # 答题页
    └── ResultScreen.jsx  # 结果页
```

**创建新 BTI 只需替换 `src/data/` 下的三个文件**，算法和组件通用。

## 匹配算法

1. 每道题对应一个维度，同维度得分求和
2. 映射为三级：L（≤3）/ M（4）/ H（≥5）
3. 构建 15 维用户向量，与所有人格模式做**曼哈顿距离**匹配
4. 最近距离为匹配结果，相似度 = `(1 - distance/30) × 100%`
5. 兜底：相似度 < 60% 时强制分配到 fallback 人格

## 本地开发

```bash
bun install
bun dev
```

构建：`bun run build`

## 技术栈

| 层 | 技术 |
|---|------|
| 框架 | React 19 + Vite 8 |
| 运行时 | Bun |
| 部署 | Vercel + Cloudflare DNS |

## 分支说明

| 分支 | 说明 |
|------|------|
| `main` | XBTI 引擎（泛化版） |
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
