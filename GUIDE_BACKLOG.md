# smartMOOV 操作指南 — Backlog & 设计说明

> 文件创建时间：2026-05-28  
> 状态：骨架已搭建，内容待填充  
> 对应文件：`smartMOOV-guide.html`  
> 生成脚本：`C:\Users\z.dorothy\gen_guide.py`

---

## 一、页面设计说明

### 布局
- **顶部固定 Topbar**（56px）：Logo、"← 平台概览"返回链接、中/EN 双语切换
- **左侧固定侧边栏**（260px）：可折叠章节导航，4 个组
- **右侧主内容区**：单页面多 section 切换（无刷新），点击导航项切换显示

### 导航结构（4 个组，27 个节点）

```
快速开始
  ├─ 关于 smartMOOV
  └─ 三大角色介绍

起运地操作 (Origin)
  ├─ 登录与账号设置
  ├─ 委托订舱 Booking Note          ← 4 步骤
  ├─ 承运订舱 Carrier Booking        ← 2 步骤
  ├─ 提货装箱 Pick-up & Containerize ← 4 步骤
  ├─ 上传核验单证                    ← 2 步骤
  ├─ 实际开船 Vessel Departure       ← 1 步骤
  ├─ 签发提单与发票                  ← 1 步骤
  └─ 预知通 Pre Alert                ← 1 步骤

目的地操作 (Destination)
  ├─ 单证核验
  ├─ 送货预计划
  ├─ 报关行指派
  ├─ 送货计划
  ├─ 向海关提交发票
  ├─ 到港与清关
  ├─ 卸箱卸货
  ├─ 到达配送中心
  └─ 空箱归还

系统功能 (System)
  ├─ 订单管理
  ├─ 目的地管理
  ├─ 智能看板
  ├─ 预测 Forecast
  ├─ 路由追踪
  ├─ 主数据管理
  ├─ 用户管理
  └─ 系统设置
```

### 每个模块的标准内容结构
```
[模块标题 + 一句话说明]
── 操作步骤 ──
  Step 1 ~ Step N  (进度条 + 步骤说明块)
── 界面截图 ──
  [图片插槽，替换时改 <img src="...">]
── 业务规则 ──
  [可折叠 Accordion，填写规则列表]
```

---

## 二、内容填充清单

填充时，每个模块需要提供以下内容（发给 Claude 即可自动填充）：

### 格式要求
```
模块名：委托订舱 Booking Note
步骤数：4

Step 1 标题：提交 PO 信息
Step 1 内容：[操作说明文字]

Step 2 标题：填写订舱信息
Step 2 内容：[操作说明文字]

截图：[图片文件路径 或 base64 或 图片URL]

业务规则：
- 规则1
- 规则2
```

### 待填充模块列表

| 模块 | 类型 | 步骤数 | 截图数 | 状态 |
|------|------|--------|--------|------|
| 关于 smartMOOV | 起始页 | — | — | ⬜ 待填充 |
| 三大角色介绍 | 起始页 | — | — | ⬜ 待填充 |
| 登录与账号设置 | Origin | 3 | TBD | ⬜ 待填充 |
| 委托订舱 Booking Note | Origin | 4 | TBD | ⬜ 待填充 |
| 承运订舱 Carrier Booking | Origin | 2 | TBD | ⬜ 待填充 |
| 提货装箱 | Origin | 4 | TBD | ⬜ 待填充 |
| 上传核验单证 | Origin | 2 | TBD | ⬜ 待填充 |
| 实际开船 | Origin | 1 | TBD | ⬜ 待填充 |
| 签发提单与发票 | Origin | 1 | TBD | ⬜ 待填充 |
| 预知通 Pre Alert | Origin | 1 | TBD | ⬜ 待填充 |
| 单证核验 | Destination | 1 | TBD | ⬜ 待填充 |
| 送货预计划 | Destination | 1 | TBD | ⬜ 待填充 |
| 报关行指派 | Destination | 1 | TBD | ⬜ 待填充 |
| 送货计划 | Destination | 1 | TBD | ⬜ 待填充 |
| 向海关提交发票 | Destination | 1 | TBD | ⬜ 待填充 |
| 到港与清关 | Destination | 2 | TBD | ⬜ 待填充 |
| 卸箱卸货 | Destination | 1 | TBD | ⬜ 待填充 |
| 到达配送中心 | Destination | 1 | TBD | ⬜ 待填充 |
| 空箱归还 | Destination | 1 | TBD | ⬜ 待填充 |
| 订单管理 | System | — | TBD | ⬜ 待填充 |
| 目的地管理 | System | — | TBD | ⬜ 待填充 |
| 智能看板 | System | — | TBD | ⬜ 待填充 |
| 预测 Forecast | System | — | TBD | ⬜ 待填充 |
| 路由追踪 | System | — | TBD | ⬜ 待填充 |
| 主数据管理 | System | — | TBD | ⬜ 待填充 |
| 用户管理 | System | — | TBD | ⬜ 待填充 |
| 系统设置 | System | — | TBD | ⬜ 待填充 |

---

## 三、待确认事项（TODO）

- [ ] **角色权限映射**：Supplier / OHA / Customer 各自能访问哪些模块？
      → 确认后可在各模块加"适用角色"标签
- [ ] **步骤数量**：部分模块（System 类）步骤数待确认，可能不需要步骤流程
- [ ] **截图规格**：截图建议宽度 ≥ 1200px，PNG 格式，统一命名规则（如 `guide-booking-note-step1.png`）
- [ ] **内容语言**：目前模块副标题为中文占位，填充时需同时提供中英双语版本
- [ ] **PDF 内容更新**：等新版操作手册 PDF 确定后，按 PDF 第 3-4 章内容填充对应模块

---

## 四、如何继续填充（给 Claude 的指令格式）

当内容准备好后，告诉 Claude：

> "开始填充操作指南，以下是委托订舱模块的内容：[内容]"

Claude 会读取本 backlog，定位到 `gen_guide.py` 中对应的模块，更新内容并重新生成 HTML。

---

## 五、相关文件

| 文件 | 说明 |
|------|------|
| `smartMOOV-guide.html` | 操作指南页面（骨架，内容待填充）|
| `smartMOOV-overview.html` | 平台概览页（高层介绍）|
| `smartMOOV-roadmap.html` | 产品路线图页 |
| `C:\Users\z.dorothy\gen_guide.py` | 指南页生成脚本 |
| `C:\Users\z.dorothy\gen_overview_v2.py` | 概览页生成脚本 |
