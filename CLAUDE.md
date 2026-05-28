# smartMOOV · 项目记忆文件（CLAUDE.md）
> 每次 session 自动加载，用于保留项目背景与设计决策

---

## 一、项目背景

- **产品**：smartMOOV —— 基于 4PL 模式的端到端数字化供应链协同平台
- **公司**：荷瑞国际物流（MOOV Logistics）
- **定位**：Control Tower，整合货主、货代、承运商、口岸代理，从订舱到空箱归还全链可视
- **GitHub Repo**：`https://github.com/MOOV-LOGISTICS/smartMOOV`（branch: main）
- **GitHub Pages**：`index.html` → 重定向到 `smartMOOV-overview.html`

---

## 二、品牌色规范（来源：MOOV主题色色号.pdf）

| 名称 | 主色 | 80% Tint | 60% Tint | 25% Tint |
|------|------|----------|----------|----------|
| Orient（蓝） | `#004F7C` | `#337296` | `#6695AF` | `#CCE1E9` |
| Orange Aerospace（橙） | `#FE5000` | `#FE7F40` | `#FEA080` | `#FED8C0` |
| Mystic（浅灰蓝） | `#E6EBF0` | `#E9EDF3` | `#EDF0F6` | `#F8FAFC` |
| Black | `#000000` | — | — | — |
| White | `#FFFFFF` | — | — | — |

**CSS 变量对应**：`--orient:#004F7C` / `--orange:#FE5000` / `--mystic:#E6EBF0`

---

## 三、页面设计规范

- **整体风格**：深色背景（`#060D1A`）+ 粒子动效（Canvas，蓝/橙双色粒子）
- **Hero 区**：全屏入口，呼吸动画，视觉震撼感
- **配色原则**：Orient 蓝为主色调，Orange Aerospace 橙为强调色，Mystic 为浅色/文字元素
- **渐变文字注意**：使用 `background-clip:text` 时，子类覆盖 `background` shorthand 会重置 `background-clip`，需在子类中重新声明 `-webkit-background-clip:text; background-clip:text`
- **双语支持**：`data-k` 属性 + `setLang()` + `STR`/`MOD_STR` JS 对象；SVG 文字用 `textContent` 方式切换
- **导航**：固定 Topbar（56px）+ 中/EN 切换按钮

---

## 四、已完成页面

| 文件 | 说明 | 生成脚本 |
|------|------|---------|
| `smartMOOV-overview.html` | 平台概览（Hero + 架构图 + 协同生态 + 能力模块 + 技术规格） | `C:\Users\z.dorothy\gen_overview_v2.py` |
| `smartMOOV-roadmap.html` | 产品路线图（Phase 时间线） | 直接编辑 |
| `smartMOOV-guide.html` | 操作指南骨架（27 章节占位，内容待填充） | `C:\Users\z.dorothy\gen_guide.py` |
| `index.html` | 根目录重定向 | 直接编辑 |

**脚本输出路径**（已修正）：均写入 `C:\Users\z.dorothy\OneDrive - 荷瑞国际物流（上海）有限公司\桌面\smartMOOV\`

---

## 五、Git 工作流规范

- ⚠️ **不要直接 push 到 main**，修改后本地预览，用户确认后再 push
- 流程：生成脚本 → 用户在 Chrome 预览确认 → 确认后再 `git add + commit + push`

---

## 六、操作指南（GUIDE 内容待填充）

- 骨架已建，27 章节（快速开始 2 + 起运地操作 8 + 目的地操作 9 + 系统功能 8）
- 内容填充方式见 `GUIDE_BACKLOG.md`
- `smartMOOV Introduction.pdf`（245页）内容可能更新，等确定版本后再补充写入本文件
