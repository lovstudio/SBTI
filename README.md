<p align="center">
  <img src="docs/images/cover.png" alt="SBTI Cover" width="100%">
</p>

<h1 align="center">SBTI 人格测试</h1>

<p align="center">
  <strong>MBTI 已经过时，SBTI 来了。</strong><br>
  <sub>一个火爆全网的抽象人格测试 — 31 道题，27 种离谱人格，5 分钟认识你自己</sub>
</p>

<p align="center">
  <a href="https://sbti.lovstudio.ai">sbti.lovstudio.ai</a> &middot;
  <a href="https://space.bilibili.com/417038183">原作者 B站@蛆肉儿串儿</a> &middot;
  <a href="https://www.bilibili.com/video/BV1LpDHByET6/">原视频</a>
</p>

---

## 什么是 SBTI？

SBTI 是一个「抽象版 MBTI」人格测试，由 B 站 UP 主 **蛆肉儿串儿** 原创，初衷是劝诫一位爱喝酒的朋友戒酒，结果无心插柳火爆全网。

测试通过 31 道题，从 **15 个维度**（自我、情感、态度、行动驱力、社交）评估你的人格，最终匹配到 27 种人格类型之一：

> CTRL（拿捏者）、SHIT（愤世者）、JOKE-R（小丑）、ATM-er（送钱者）、SEXY（尤物）、DRUNK（酒鬼）、DEAD（死者）、IMSB（傻者）、FUCK（草者）、BOSS（领导者）、MUM（妈妈）、SOLO（孤儿）……

每种类型都配有一段「扎心但不准打我」的人格解读。

## 特色

- **31 道题随机排序** — 每次测试顺序不同
- **隐藏人格「酒鬼」** — 选中特定选项触发隐藏结局
- **兜底人格「傻乐者」** — 匹配度低于 60% 时系统强制分配 HHHH
- **15 维度评分** — 测完可查看每个维度的 L/M/H 等级和解读
- **纯娱乐** — 别拿它当诊断、面试、相亲、分手、招魂、算命或人生判决书

> **姊妹项目**: [NBTI 牛逼人格测试](https://nbti.lovstudio.ai) — 同一套 15 维度引擎，全新 20 种牛逼人格，分享卡片 + QR 码传播

## 技术栈

| 层 | 技术 |
|---|------|
| 框架 | React 19 + Vite 8 |
| 运行时 | Bun |
| 部署 | Vercel + Cloudflare DNS |
| 分支 | `main` (React), `html-version` (原版单文件) |

## 本地开发

```bash
bun install
bun dev
```

构建：

```bash
bun run build
```

## 算法简介

1. 每道题对应一个维度（S1-S3、E1-E3、A1-A3、Ac1-Ac3、So1-So3）
2. 同维度得分求和，映射为 L（≤3）/ M（4）/ H（≥5）
3. 将用户 15 维向量与 25 种标准人格的模式向量做**曼哈顿距离**匹配
4. 距离最小者为匹配人格，相似度 = `(1 - distance/30) * 100%`

## 媒体报道

- [MBTI 过时了！SBTI"傻逼体"凭什么刷屏？](https://mp.weixin.qq.com/s/nXFvJrs_qqtrckmegSu2Zg)
- [MBTI 过时了，来 SBTI 测测吧...](https://mp.weixin.qq.com/s/XxYcBZzPLaQudK0cFFDgJQ)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=lovstudio/SBTI&type=Date)](https://star-history.com/#lovstudio/SBTI&Date)

## License

Apache-2.0 &mdash; 原创内容版权归 [B站@蛆肉儿串儿](https://space.bilibili.com/417038183)，代码部分由 [lovstudio.ai](https://lovstudio.ai) 维护
