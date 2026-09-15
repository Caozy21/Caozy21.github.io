---
title: "AST 2040 第一讲：从早期宇宙到星系形成的宇宙演化总图"
description: "AST2040 第一讲学习笔记：从早期宇宙、密度扰动与暗物质晕到恒星、星系形成和再电离。"
tags: ["AST2040","Lecture 1","Galaxy formation"]
order: 1
---

# AST 2040 第一讲：从早期宇宙到星系形成的宇宙演化总图

> **课程：** AST 2040 Extragalactic Astronomy  
> **Lecture 1 定位：** *Practicalities & introduction to galaxy formation*  
> **本文用途：** 整合本次学习中围绕 Lecture 1 提出的所有问题，把第一讲呈现的“宇宙从早期近乎均匀的状态演化到暗物质晕、恒星和星系”的总图补充完整。

## 范围说明

课程安排把 Lecture 1 定位为星系形成的导论。第一讲用一条 cosmic history 时间线预览了后续会分别深入讲授的密度扰动、暗物质晕、气体、最早星系、IGM 和再电离等主题。因此，本文会解释这些在第一讲问答中已经出现的概念，但不把它们写成后续专题课的完整替代品。

---

## 1. 第一讲的核心主线

第一讲想建立的不是一串彼此孤立的名词，而是一条有因果关系的演化链：

$$
\boxed{
\begin{aligned}
&\text{Big Bang}
\rightarrow \text{inflation}
\rightarrow \text{hot expanding universe}
\rightarrow \text{BBN}\\
&\rightarrow \text{ionized plasma}
\rightarrow \text{matter-radiation equality}
\rightarrow \text{recombination / CMB}\\
&\rightarrow \text{Dark Ages}
\rightarrow \text{dark-matter halos}
\rightarrow \text{Cosmic Dawn / Pop III}\\
&\rightarrow \text{feedback and enrichment}
\rightarrow \text{reionization}
\rightarrow \text{galaxy evolution today}.
\end{aligned}}
$$

其中最重要的物理逻辑是：

1. **宇宙膨胀导致冷却。** 光子的波长随尺度因子增长，温度随之下降。
2. **冷却使不同物理过程依次发生。** 先能形成轻元素原子核，后来才能形成中性原子，再后来气体才能在暗物质势阱中形成恒星。
3. **暴胀产生并拉伸原初扰动。** CMB 中约 $10^{-5}$ 量级的涨落，是后来宇宙结构的种子。
4. **引力放大密度扰动。** 暗物质先形成 cosmic web 和 halos，普通气体随后落入这些引力势阱。
5. **气体冷却形成恒星，恒星又反过来改变气体。** 辐射、恒星风、超新星和金属增丰共同构成 feedback。

### 1.1 近似时间线

下表中的时间和红移是便于建立量级感的近似值；Cosmic Dawn、第一批 halos 和再电离都不是在一个瞬间发生的，因此其边界具有模型依赖性。

| 阶段 | 典型时间 / 红移 | 主要事件 |
|---|---:|---|
| inflation | 极早期，常放在约 $10^{-36}$–$10^{-32}\,\mathrm{s}$ 的量级讨论 | 加速膨胀；缩小 comoving Hubble radius；拉伸量子涨落 |
| BBN | $t\sim1\,\mathrm{s}$ 到 $20\,\mathrm{min}$ | 合成 H、He、D、$^3$He 和痕量 Li 的原子核 |
| ionized plasma | BBN 后至 recombination 前 | 自由电子使宇宙对光不透明 |
| matter-radiation equality | $z_{\rm eq}\sim3400$ | 物质密度超过辐射密度，结构增长变得更有效 |
| recombination / photon decoupling | $z\sim1100$，$t\sim3.8\times10^5\,\mathrm{yr}$，$T\sim3000\,\mathrm K$ | 中性原子形成；光子开始自由传播，留下 CMB |
| Dark Ages | recombination 后到第一批发光天体出现前 | 宇宙主要为中性气体，尚无恒星光源 |
| Cosmic Dawn | 常概括为 $z\sim30$ 到 $6$，无严格边界 | 第一代恒星、最早星系和可能的黑洞种子出现 |
| hydrogen reionization | 大致在 Cosmic Dawn 内展开，至 $z\sim5$–$6$ 基本完成 | 中性氢 IGM 被电离光子重新电离 |
| cosmic star-formation peak | $z\sim2$ 左右 | 单位 comoving volume 内的平均恒星形成率密度达到峰值 |
| helium reionization | 大致到 $z\sim3$ 左右 | 高能辐射将 He II 进一步电离为 He III |
| dark-energy domination | 低红移，约 $z\lesssim1$ | 宇宙晚期膨胀加速 |

---

## 2. 描述膨胀宇宙的基本语言

### 2.1 Scale factor 与 redshift

尺度因子 $a(t)$ 描述宇宙整体尺度随时间的变化。通常把今天归一化为

$$
a_0=1.
$$

宇宙学红移定义为

$$
\boxed{1+z=\frac{a_0}{a(t)}},
$$

所以在 $a_0=1$ 的约定下，

$$
\boxed{a=\frac{1}{1+z}}.
$$

因此：

| redshift | 当时的 scale factor |
|---:|---:|
| $z=0$ | $a=1$ |
| $z=1$ | $a=1/2$ |
| $z=5$ | $a=1/6$ |
| $z=10$ | $a=1/11$ |
| $z=1100$ | $a\simeq1/1101$ |

**注意：** redshift 不是时间本身。把 $z$ 精确换算为宇宙年龄，需要指定 $H_0$、$\Omega_m$、$\Omega_\Lambda$ 等宇宙学参数并积分膨胀历史。不过，在标准宇宙学中，越大的 $z$ 通常表示越早的时代。

### 2.2 光子的 redshift、能量和宇宙温度

自由传播光子的波长随宇宙膨胀而增长：

$$
\lambda\propto a.
$$

因为

$$
E_\gamma=h\nu=\frac{hc}{\lambda},
$$

所以

$$
\boxed{E_\gamma\propto a^{-1}\propto1+z}.
$$

这就是 cosmological redshift：宇宙膨胀使波长变长、频率降低、单个光子的能量降低。黑体辐射的温度也满足

$$
\boxed{T_\gamma(z)=T_{\rm CMB,0}(1+z)},
$$

其中今天的 CMB 温度为

$$
T_{\rm CMB,0}\simeq2.725\,\mathrm K.
$$

例如 $z\sim1100$ 时，

$$
T_\gamma\sim2.725\times1101\simeq3000\,\mathrm K.
$$

### 2.3 为什么“单个光子能量”是 $a^{-1}$，而“辐射能量密度”是 $a^{-4}$？

这是本次问答中的一个关键易混点。

单个光子的能量只有 redshift 因子：

$$
E_\gamma\propto a^{-1}.
$$

但是能量密度还要考虑单位体积内光子数的下降。物理体积随膨胀满足

$$
V_{\rm phys}\propto a^3,
$$

所以光子数密度为

$$
n_\gamma\propto a^{-3}.
$$

因此

$$
\rho_r\sim n_\gamma E_\gamma
\propto a^{-3}a^{-1},
$$

即

$$
\boxed{\rho_r\propto a^{-4}\propto(1+z)^4}.
$$

非相对论物质的单粒子静质量能量近似不受膨胀影响，主要只有体积稀释：

$$
\boxed{\rho_m\propto a^{-3}\propto(1+z)^3}.
$$

宇宙学常数形式的暗能量则近似满足

$$
\boxed{\rho_\Lambda=\text{constant}}.
$$

| 成分 | 物理能量密度随 $a$ 的变化 | 原因 |
|---|---:|---|
| radiation | $\rho_r\propto a^{-4}$ | 体积稀释 $a^{-3}$ + 每个光子 redshift $a^{-1}$ |
| non-relativistic matter | $\rho_m\propto a^{-3}$ | 主要只有体积稀释 |
| cosmological constant | $\rho_\Lambda\propto a^0$ | 真空能量密度保持不变 |

这直接解释了为什么宇宙会依次经历 radiation domination、matter domination 和晚期 dark-energy domination。

### 2.4 Physical scale 与 comoving scale

一个随 Hubble flow 运动、没有额外 peculiar motion 的结构，其 comoving coordinate $\chi$ 保持不变，而 physical distance 为

$$
\boxed{D_{\rm phys}(t)=a(t)\chi}.
$$

在今天 $a_0=1$ 的约定下，若一个尺度写成 comoving length $R_{\rm com}$，则在红移 $z$ 时对应的 physical length 是

$$
\boxed{R_{\rm phys}(z)=\frac{R_{\rm com}}{1+z}}.
$$

例如，一个 $11\,\mathrm{cMpc}$ 的 comoving 尺度，在 $z=10$ 时的物理尺度是

$$
R_{\rm phys}=\frac{11}{11}\,\mathrm{Mpc}=1\,\mathrm{Mpc}.
$$

常见单位写法：

- **cMpc / ckpc：** comoving Mpc / kpc
- **pMpc / pkpc：** physical Mpc / kpc

必须看论文或图注说明采用哪一种。若只写 Mpc 或 kpc 而没有说明，不能自行假定。

同理，图上画的 **star-formation-rate density per comoving volume** 是把膨胀造成的体积变化剥离后，比较不同宇宙时代同一 comoving 区域内的恒星形成活动；它不是某个物理体积在膨胀过程中不经转换的直接比较。

---

## 3. Hubble parameter、critical density 与膨胀历史

### 3.1 Hubble parameter

Hubble parameter 定义为

$$
\boxed{H(t)=\frac{\dot a}{a}}.
$$

它描述单位尺度因子的相对增长率。今天的值记为 $H_0$。本题给定

$$
H_0=100h\,\mathrm{km\,s^{-1}\,Mpc^{-1}},\qquad h=0.7,
$$

所以

$$
\boxed{H_0=70\,\mathrm{km\,s^{-1}\,Mpc^{-1}}}.
$$

### 3.2 $H(z)$ 的一般形式

Friedmann equation 可以写成

$$
\boxed{
H(z)=H_0E(z)
}
$$

其中

$$
\boxed{
E(z)=\sqrt{
\Omega_{r,0}(1+z)^4+
\Omega_{m,0}(1+z)^3+
\Omega_{k,0}(1+z)^2+
\Omega_{\Lambda,0}}
}.
$$

各项分别代表 radiation、matter、curvature 和 cosmological constant。若采用本题的平坦 $\Lambda$CDM 近似，并在 $z\le10$ 的课堂计算中忽略 radiation，则

$$
\Omega_{k,0}=0,
\qquad
\Omega_{\Lambda,0}=1-\Omega_{m,0}=0.7,
$$

于是

$$
\boxed{
H(z)=70\sqrt{0.3(1+z)^3+0.7}
\ \mathrm{km\,s^{-1}\,Mpc^{-1}}.
}
$$

**测量与假设要分开：** 题目明确给了 $G$、$h=0.7$ 和 $\Omega_m=0.3$；$\Omega_\Lambda=0.7$ 来自额外采用的“平坦、忽略辐射”假设。

### 3.3 Critical density 的意义

critical density 定义为

$$
\boxed{\rho_c(z)=\frac{3H(z)^2}{8\pi G}}.
$$

它是把 Friedmann equation 中空间曲率项分开的一个参考密度。定义

$$
\Omega(z)=\frac{\rho_{\rm total}(z)}{\rho_c(z)}.
$$

在简单 FLRW 几何中：

- $\Omega=1$：空间平坦；
- $\Omega>1$：正曲率；
- $\Omega<1$：负曲率。

critical density 不是“宇宙中实际物质的密度”。实际 matter density 是

$$
\boxed{\rho_m(z)=\Omega_{m,0}\rho_{c,0}(1+z)^3}.
$$

而 $\rho_c(z)$ 由当时的总膨胀率 $H(z)$ 决定。两者在高红移 matter-dominated 时代可能非常接近，但概念不同。

### 3.4 课堂例题：计算 $z=0$ 和 $z=10$ 的 $H(z)$ 与 $\rho_c(z)$

给定：

$$
G=6.68\times10^{-8}\,\mathrm{cm^3\,g^{-1}\,s^{-2}},
$$

$$
H_0=70\,\mathrm{km\,s^{-1}\,Mpc^{-1}},
\qquad
\Omega_{m,0}=0.3.
$$

并假设平坦 $\Lambda$CDM、$\Omega_{\Lambda,0}=0.7$、忽略 radiation。

#### Step 1：把 $H_0$ 转成 cgs

使用

$$
1\,\mathrm{km}=10^5\,\mathrm{cm},
\qquad
1\,\mathrm{Mpc}=3.086\times10^{24}\,\mathrm{cm},
$$

得到

$$
H_0=
\frac{70\times10^5}{3.086\times10^{24}}\,\mathrm{s^{-1}}
\simeq2.27\times10^{-18}\,\mathrm{s^{-1}}.
$$

#### Step 2：$z=0$

$$
H(0)=H_0\sqrt{0.3+0.7}=H_0,
$$

所以

$$
\boxed{H(0)=70\,\mathrm{km\,s^{-1}\,Mpc^{-1}}}.
$$

今天的 critical density 为

$$
\rho_{c,0}
=\frac{3(2.27\times10^{-18}\,\mathrm{s^{-1}})^2}
{8\pi(6.68\times10^{-8}\,\mathrm{cm^3\,g^{-1}\,s^{-2}})},
$$

因此

$$
\boxed{\rho_{c,0}\simeq9.2\times10^{-30}\,\mathrm{g\,cm^{-3}}}.
$$

#### Step 3：$z=10$

此时 $1+z=11$，所以

$$
\begin{aligned}
H(10)
&=H_0\sqrt{0.3(11)^3+0.7}\\
&=H_0\sqrt{0.3\times1331+0.7}\\
&=H_0\sqrt{400}\\
&=20H_0.
\end{aligned}
$$

因此

$$
\boxed{H(10)=1400\,\mathrm{km\,s^{-1}\,Mpc^{-1}}}
$$

以及

$$
\boxed{H(10)\simeq4.54\times10^{-17}\,\mathrm{s^{-1}}}.
$$

由于 $\rho_c\propto H^2$，

$$
\rho_c(10)=\left(\frac{H(10)}{H_0}\right)^2\rho_{c,0}
=20^2\rho_{c,0},
$$

所以

$$
\boxed{\rho_c(10)=400\rho_{c,0}
\simeq3.68\times10^{-27}\,\mathrm{g\,cm^{-3}}}.
$$

最终比较：

| Quantity | $z=0$ | $z=10$ |
|---|---:|---:|
| $H(z)$ | $70\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$ | $1400\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$ |
| $H(z)/H_0$ | $1$ | $20$ |
| $\rho_c(z)$ | $9.2\times10^{-30}\,\mathrm{g\,cm^{-3}}$ | $3.68\times10^{-27}\,\mathrm{g\,cm^{-3}}$ |
| $\rho_c(z)/\rho_{c,0}$ | $1$ | $400$ |

#### Step 4：为什么 $z=10$ 的 matter density 几乎等于 critical density？

$$
\rho_m(10)
=0.3\rho_{c,0}(11)^3
=399.3\rho_{c,0}.
$$

而本题近似下

$$
\rho_c(10)=400\rho_{c,0}.
$$

两者很接近，是因为 $z=10$ 时 matter 项远大于 cosmological-constant 项：

$$
0.3(11)^3=399.3\gg0.7.
$$

这不意味着两种密度的定义相同，只说明当时宇宙几乎由 matter 项主导。

---

## 4. Inflation：为什么需要暴胀？

Inflation 是极早期宇宙的一段 accelerated expansion，核心条件是

$$
\boxed{\ddot a>0}.
$$

在近似 de Sitter 的情况下，

$$
a(t)\propto e^{Ht},
\qquad H\approx\text{constant}.
$$

它的重要作用有两层：

1. 缓解标准热大爆炸模型中的 horizon、flatness 和 monopole problems；
2. 把微观量子涨落拉伸成宇宙尺度的原初扰动，为 CMB anisotropies 和后来的结构形成提供种子。

### 4.1 Horizon problem：视界问题

CMB 的平均温度约为 $2.725\,\mathrm K$，不同方向的相对温度涨落只有

$$
\frac{\Delta T}{T}\sim10^{-5}.
$$

然而，在没有 inflation 的标准减速膨胀历史中，recombination 时天空中相距很远的区域没有足够时间彼此交换光子和能量，因而无法通过普通因果过程达到热平衡。问题是：

$$
\boxed{\text{从未有足够因果接触的区域，为什么温度几乎相同？}}
$$

Inflation 的回答不是“让今天相距遥远的区域重新通信”，而是：

$$
\boxed{
\text{它们先在一个很小的 causal patch 中达到共同状态，随后才被 inflation 拉开。}
}
$$

### 4.2 Flatness problem：平坦性问题

Friedmann equation 给出

$$
\Omega-1=\frac{kc^2}{a^2H^2}.
$$

在普通 radiation- 或 matter-dominated 的减速宇宙中，$|\Omega-1|$ 会随时间增大。因此，如果今天 $\Omega$ 仍极接近 1，早期宇宙就必须被极端精细地调到接近 1。

Inflation 时 $a$ 指数增长而 $H$ 近似不变，所以

$$
|\Omega-1|\propto\frac{1}{a^2H^2}\rightarrow0.
$$

即

$$
\boxed{\Omega\rightarrow1}.
$$

直观上，类似于把一个弯曲表面的极小区域放大到巨大尺度后，该区域看起来越来越平。

### 4.3 Monopole problem：磁单极子问题

某些 grand unified theories 预言早期宇宙相变会产生大量稳定、质量很高的拓扑缺陷，例如 magnetic monopoles。如果这些遗迹具有原本预期的丰度，它们可能会严重影响宇宙密度，但观测中没有看到这样的数量。

Inflation 让空间体积指数增长，使任何在暴胀前产生的 monopoles 数密度被巨大稀释：

$$
n_{\rm monopole}\propto a^{-3}.
$$

因此它们在我们的可观测宇宙中可以变得极其稀少。严格地说，暴胀是否彻底避免某种遗迹，还取决于 reheating 温度会不会在暴胀后重新产生它们。

### 4.4 Comoving Hubble radius：理解 inflation 的关键量

physical Hubble radius 为

$$
R_H=\frac{c}{H},
$$

对应的 comoving Hubble radius 是

$$
\boxed{r_H=\frac{c}{aH}}.
$$

常取 $c=1$，写为 $(aH)^{-1}$。

#### 普通减速膨胀阶段

Radiation domination：

$$
a\propto t^{1/2},\qquad H=\frac{1}{2t},
$$

所以

$$
(aH)^{-1}\propto t^{1/2}\quad\text{增大}.
$$

Matter domination：

$$
a\propto t^{2/3},\qquad H=\frac{2}{3t},
$$

所以

$$
(aH)^{-1}\propto t^{1/3}\quad\text{增大}.
$$

#### Inflation 阶段

$$
a\propto e^{Ht},\qquad H\approx\text{constant},
$$

因此

$$
\boxed{(aH)^{-1}\propto e^{-Ht}\quad\text{减小}}.
$$

由于 $aH=\dot a$，

$$
\frac{1}{aH}=\frac{1}{\dot a}.
$$

若 $\ddot a>0$，则 $\dot a$ 增长，所以 $(aH)^{-1}$ 减小。这说明“加速膨胀”与“comoving Hubble radius 缩小”是同一物理条件的两种表达。

### 4.5 Horizon exit 与 re-entry

取一个固定的 comoving wavelength $\lambda_{\rm com}$，其 physical wavelength 为

$$
\lambda_{\rm phys}=a\lambda_{\rm com}.
$$

Inflation 时 $\lambda_{\rm phys}$ 指数增长，而 $H^{-1}$ 近似不变。一个最初满足

$$
\lambda_{\rm phys}<\frac{c}{H}
$$

的 mode，后来会变成

$$
\lambda_{\rm phys}>\frac{c}{H}.
$$

这称为 horizon exit，更严谨地说是 **Hubble-radius crossing**。Inflation 结束后，comoving Hubble radius 在 radiation / matter domination 中重新增大，所以该 mode 又会 re-enter：

$$
\boxed{
\text{inside Hubble radius}
\rightarrow\text{exit during inflation}
\rightarrow\text{re-enter later}.
}
$$

原初量子涨落被拉伸到大尺度、在超 Hubble 尺度上近似冻结，后来 re-enter 并成为 CMB 和物质密度扰动。最终因果链是

$$
\boxed{
\text{quantum fluctuations}
\rightarrow\text{primordial perturbations}
\rightarrow\text{CMB anisotropies}
\rightarrow\text{halos}
\rightarrow\text{galaxies}.
}
$$

#### 严谨术语提醒

Hubble radius $c/H$ 与 particle horizon 并不严格相同。后者为

$$
d_{\rm particle}(t)
=a(t)\int_{t_i}^{t}\frac{c\,dt'}{a(t')}.
$$

课堂和论文常把 Hubble-radius crossing 简称为 horizon crossing，但理解概念时应知道这层区别。

#### 为什么 inflation 不违反相对论？

特殊相对论禁止的是物体在局部惯性系中穿过空间的速度超过 $c$。宇宙膨胀，尤其 inflation，描述的是 spacetime metric 改变，使遥远两点间的 proper distance 增长；它不是局部物体以超光速掠过观察者。因此 $HD>c$ 的 recession rate 不等同于局部超光速运动。

---

## 5. BBN：宇宙大爆炸核合成

BBN 是 **Big Bang Nucleosynthesis**，指大爆炸后最初几分钟中，质子和中子结合形成最轻元素原子核的过程。

主要产物包括：

- 大量 $^1\mathrm H$；
- 大量 $^4\mathrm{He}$；
- 少量 deuterium（$^2\mathrm H$）；
- 少量 $^3\mathrm{He}$；
- 痕量 $^7\mathrm{Li}$。

典型的 primordial mass fractions 为

$$
\boxed{X_{\rm H}\simeq0.75,\qquad Y_{\rm He}\simeq0.25.}
$$

这里的 75% 和 25% 是**质量分数**，不是原子数分数。按原子核数计，氦远少于氢，因为一个 $^4$He 核约有四个核子的质量。

BBN 基本不能制造大量 C、O、Fe 等重元素；这些主要来自后来的 stellar nucleosynthesis。

### 5.1 BBN 与 recombination 不是一回事

$$
\boxed{\text{BBN：形成原子核}}
$$

$$
\boxed{\text{recombination：电子与原子核结合成中性原子}}
$$

BBN 后宇宙仍然太热，电子不能稳定地与原子核结合，因此物质仍是 ionized plasma。

### 5.2 为什么原初成分约为 75% H + 25% He？

关键有两点：

1. BBN 真正有效合成氦时，中子与质子数目比约为

   $$
   \frac{n_n}{n_p}\sim\frac17;
   $$

2. 几乎所有幸存中子最终都进入最稳定的轻核 $^4\mathrm{He}$。

把 $n:p=1:7$ 放大为

$$
2n+14p.
$$

一个 $^4\mathrm{He}$ 需要

$$
2n+2p\rightarrow{}^4\mathrm{He},
$$

因此两个中子和两个质子构成一个氦核，剩余 12 个质子成为氢核。总共 16 个核子的质量中：

- 4 个核子在氦中；
- 12 个核子在氢中。

所以

$$
Y_{\rm He}=\frac{4}{16}=25\%,
$$

$$
X_{\rm H}=\frac{12}{16}=75\%.
$$

一般地，令

$$
r\equiv\frac{n_n}{n_p},
$$

并假设全部中子进入 $^4$He，则氦质量分数近似为

$$
\boxed{Y_p\simeq\frac{2r}{1+r}}.
$$

代入 $r=1/7$，即得

$$
Y_p=\frac{2/7}{1+1/7}=\frac14.
$$

### 5.3 为什么 $n/p$ 会接近 $1/7$？

早期弱相互作用不断使中子和质子互相转化，例如

$$
n+\nu_e\leftrightarrow p+e^-,
$$

$$
n+e^+\leftrightarrow p+\bar\nu_e.
$$

热平衡时大致有

$$
\frac{n_n}{n_p}\simeq
\exp\left(-\frac{\Delta mc^2}{kT}\right),
$$

其中

$$
\Delta mc^2=(m_n-m_p)c^2\simeq1.293\,\mathrm{MeV}.
$$

因为中子比质子重，温度降低时中子比例下降。到 $T\sim0.7$–$0.8\,\mathrm{MeV}$ 附近，弱反应速率低于宇宙膨胀率，$n/p$ freeze out，约为 $1/6$。随后在氦大量形成前还要等待一段时间，一部分自由中子会 beta decay，因而比例进一步降到约 $1/7$。

### 5.4 Deuterium bottleneck

虽然反应

$$
p+n\rightarrow D+\gamma
$$

可以形成 deuterium，但早期 photon-to-baryon ratio 极高，高能光子的尾部能立即 photodissociate deuterium。直到宇宙进一步冷却，deuterium 才能稳定保存；之后反应网络才迅速把大部分中子加工进 $^4$He。这段等待称为 **deuterium bottleneck**。

因此，25% 并不是巧合，而主要由以下物理共同决定：

$$
\boxed{
\text{weak freeze-out}
+\text{neutron decay}
+\text{deuterium bottleneck}
+\text{efficient }^4\mathrm{He}\text{ formation}.
}
$$

---

## 6. Matter-radiation equality、recombination 与 CMB

### 6.1 Matter-radiation equality

由于

$$
\rho_r\propto(1+z)^4,
\qquad
\rho_m\propto(1+z)^3,
$$

往高红移走时 radiation 增长得更快，因此极早期宇宙 radiation dominated。随着膨胀，辐射密度下降更快，最终出现

$$
\rho_m=\rho_r.
$$

这就是 matter-radiation equality，典型红移为

$$
\boxed{z_{\rm eq}\sim3400}.
$$

Equality 不是 recombination：前者是宇宙总能量密度主导成分的转换；后者是原子电离状态和光子平均自由程的转换。Equality 发生得更早。

暗物质扰动在 radiation-dominated 时代内视界尺度上的增长受到抑制；matter domination 后，在线性近似和简单条件下，其 growing mode 近似满足

$$
\boxed{\delta\propto a}.
$$

因此 equality 是后续结构形成的重要转折点。

### 6.2 为什么 recombination 前宇宙不透明？

BBN 产生了原子核，但宇宙仍由

$$
p^++e^-+\mathrm{He}^{++}/\mathrm{He}^{+}+\gamma
$$

构成。自由电子不断通过 Thomson scattering 与光子相互作用：

$$
\gamma+e^-\rightarrow\gamma+e^-.
$$

光子的平均自由程很短，因此宇宙像不透明的雾。

### 6.3 Recombination 与 photon decoupling

当宇宙冷却到约

$$
T\sim3000\,\mathrm K,
\qquad z\sim1100,
$$

电子开始稳定地与原子核结合，例如

$$
p+e^-\rightarrow\mathrm H+\gamma.
$$

自由电子数大幅降低，Thomson scattering rate 下降，光子开始自由传播。recombination 和 photon decoupling 在时间上非常接近，但概念上分别强调：

- **recombination：** 物质从高度电离转为大部分中性；
- **photon decoupling：** 光子不再频繁散射，开始近似自由传播。

### 6.4 为什么氢的电离能是 $13.6\,\mathrm{eV}$，却要到 $3000\,\mathrm K$ 才 recombine？

$13.6\,\mathrm{eV}$ 对应的温度远高于 $3000\,\mathrm K$，但宇宙中的 photon-to-baryon ratio 约为

$$
\frac{n_\gamma}{n_b}\sim10^9.
$$

即使平均光子能量已经较低，黑体谱高能尾部仍有足够多的光子把新形成的氢原子再次电离。因此要冷却到远低于简单的 $13.6\,\mathrm{eV}/k_B$ 温度，中性氢才能大量保存。这是 statistical equilibrium 和巨大 photon abundance 的结果。

### 6.5 CMB 是什么？

在 photon decoupling 时自由传播出来的光子，经过宇宙膨胀不断 redshift，今天被观测为 **Cosmic Microwave Background**：

$$
T_{\rm then}\sim3000\,\mathrm K
\quad\longrightarrow\quad
T_{\rm now}=2.725\,\mathrm K.
$$

CMB 是我们能直接看到的最早电磁“照片”，其微小 anisotropies 满足

$$
\frac{\Delta T}{T}\sim10^{-5}.
$$

温度涨落与物质密度扰动有关，但两者并非在任何尺度上都可以简单地逐点写成 $\Delta T/T=\delta$；声学振荡、引力势和辐射转移过程都会参与映射。

### 6.6 Dark Ages

Recombination 后：

- 宇宙大部分氢变为中性；
- CMB 光子已经自由传播；
- 第一批恒星尚未形成。

因此这段缺乏新生恒星光源的时期称为 **Cosmic Dark Ages**。暗物质结构仍在引力作用下增长，普通气体也逐渐落入势阱，为 Cosmic Dawn 作准备。

---

## 7. Density contrast 与结构形成

### 7.1 Density contrast $\delta$

Density contrast（密度对比度）定义为

$$
\boxed{\delta(\mathbf{x},t)
\equiv\frac{\rho(\mathbf{x},t)-\bar\rho(t)}{\bar\rho(t)}}.
$$

其中：

- $\rho(\mathbf{x},t)$：某处的局部密度；
- $\bar\rho(t)$：同一时刻的宇宙平均密度。

其含义是：

- $\delta=0$：局部密度等于平均值；
- $\delta>0$：overdense；
- $\delta<0$：underdense；
- 物理密度不能为负，因此 $\delta\ge-1$。

例如，若

$$
\rho=1.1\bar\rho,
$$

则

$$
\delta=0.1,
$$

表示局部密度高于平均值 10%。若 $\delta=1$，则

$$
\rho=2\bar\rho,
$$

而不是 $\rho=\bar\rho$。

### 7.2 Linear 与 nonlinear evolution

早期扰动很小：

$$
|\delta|\ll1.
$$

这时不同 Fourier modes 可以在线性理论中分别演化，称为 linear perturbation theory。Overdense region 通过引力吸积更多物质，使 $\delta$ 增长。

当

$$
\boxed{\delta\sim1}
$$

时，局部密度偏离平均值已达到同一量级，小扰动近似失效，系统进入 nonlinear structure formation。随后会出现 collapse、shell crossing、virialization 和复杂的 merger / accretion。

一个便于记忆但需保持物理谨慎的概括是：

$$
\begin{aligned}
|\delta|\ll1 &: \text{linear perturbations},\\
\delta\sim1 &: \text{nonlinear evolution begins},\\
\delta\gg1 &: \text{strongly collapsed overdense structures}.
\end{aligned}
$$

Filament 各处的 overdensity 可以差异很大，不能机械地认为所有 filament 都必须满足同一个 $\delta$ 阈值。

### 7.3 为什么 dark matter 先搭起结构骨架？

Recombination 前，baryons 与 photons 紧密耦合，radiation pressure 阻碍普通物质在小尺度上自由坍缩。Cold dark matter 不受这种 photon pressure 影响，因此能更早建立 gravitational potential wells。

Recombination 后，baryons 与 radiation decouple，气体更容易落入已经存在的暗物质势阱：

$$
\boxed{
\text{dark matter builds the gravitational skeleton first;}
\quad
\text{baryons later form the luminous galaxy.}
}
$$

### 7.4 Cosmic web 与 filaments

大尺度物质分布不是均匀散落的孤立星系，而是三维 cosmic web。常用四类几何环境描述：

$$
\text{voids}\rightarrow\text{sheets}\rightarrow\text{filaments}\rightarrow\text{nodes}.
$$

- **void：** 低密度空洞；
- **sheet：** 片状 overdensity；
- **filament：** 细长、丝状的物质 overdensity；
- **node：** 多条 filament 的交汇处，常对应 massive halo、group 或 cluster。

Filament 不只是“星系排成一条线”。它包含：

- 主要贡献质量的 dark matter；
- diffuse gas；
- galaxies 和 galaxy groups；
- 沿 filament 向 nodes 流动的物质。

更准确的表述是

$$
\boxed{\text{filament is an elongated matter overdensity in the cosmic web}.}
$$

### 7.5 为什么会形成 sheets、filaments 和 nodes？

初始扰动并非完美球对称，引力坍缩会沿不同主轴以不同速度发生。直观图景是：

$$
\boxed{
\text{3D overdense region}
\rightarrow\text{collapse along one axis: sheet}
\rightarrow\text{second axis: filament}
\rightarrow\text{third axis: node / halo}.
}
$$

这解释了为什么 nonlinear gravitational evolution 自然产生一张网，而不是立即把所有物质变成彼此孤立的球。

在 $\Lambda$CDM 中，结构形成总体呈 hierarchical：较小 halos 先形成，随后通过 mergers 和 smooth accretion 长成更大 halos。Rare high-density peaks 可以在很高红移先坍缩，因此“第一批 halo 形成于哪个精确红移”没有唯一答案。

---

## 8. Dark matter halo：星系所在的隐形引力势阱

Dark matter halo 不是把星系包在里面的一层实心外壳，而是一个 extended、gravitationally bound 的暗物质分布。其密度通常中心较高、向外下降，并没有锋利的物理边界。

最有用的直觉是

$$
\boxed{\text{dark matter halo = the invisible gravitational potential well that hosts a galaxy}.}
$$

气体落入势阱后可能经历：

$$
\text{infall}
\rightarrow\text{compression / shocks}
\rightarrow\text{radiative cooling}
\rightarrow\text{further collapse}
\rightarrow\text{star formation}.
$$

一个大 halo 可以包含 central galaxy、satellite galaxies、subhalos 和大量 CGM；因此“一个 halo 等于一个 galaxy”不是普遍正确的说法。

### 8.1 Virialization

坍缩后的引力束缚系统不会要求每个粒子静止，而会趋向统计意义上的 dynamical equilibrium。Virial theorem 近似写作

$$
\boxed{2K+U\simeq0},
$$

其中 $K$ 是总动能，$U$ 是引力势能。Dark matter particles 通常在三维方向上作随机轨道运动，halo 主要由 velocity dispersion 支撑，而不是像薄盘那样由有序旋转支撑。

### 8.2 为什么 halo radius 是人为定义的？

由于 halo 密度剖面平滑延伸、没有明确边缘，天文学家用 spherical-overdensity convention 定义一个操作性的半径：

$$
\boxed{
\bar\rho(<R_\Delta)=\Delta\rho_{\rm ref}(z).
}
$$

相应质量为

$$
\boxed{
M_\Delta=\frac{4\pi}{3}R_\Delta^3\Delta\rho_{\rm ref}(z).
}
$$

其中 $\Delta$ 是 overdensity threshold，$\rho_{\rm ref}$ 可以是 critical density，也可以是 mean matter density。定义 halo mass 时，必须同时写清楚两者。

### 8.3 $M_{\rm vir}$、$R_{\rm vir}$ 与 $V_{\rm vir}$

#### Virial radius $R_{\rm vir}$

通常定义为平均内部密度达到某个 virial overdensity threshold 的半径：

$$
\bar\rho(<R_{\rm vir})
=\Delta_{\rm vir}(z)\rho_{\rm ref}(z).
$$

$R_{\rm vir}$ 是约定的有效尺度，不是暗物质突然停止的地方。

#### Virial mass $M_{\rm vir}$

$$
\boxed{
M_{\rm vir}
=\frac{4\pi}{3}R_{\rm vir}^3
\Delta_{\rm vir}(z)\rho_{\rm ref}(z).
}
$$

它表示 $R_{\rm vir}$ 内的总质量；具体语境中通常以暗物质为主，也可包含 baryonic mass。

#### Virial velocity $V_{\rm vir}$

$$
\boxed{
V_{\rm vir}=\sqrt{\frac{GM_{\rm vir}}{R_{\rm vir}}}.
}
$$

它是 halo 势阱深度对应的典型 circular / gravitational velocity scale。由此可以定义近似 virial temperature：

$$
\boxed{
T_{\rm vir}\sim\frac{\mu m_pV_{\rm vir}^2}{2k_B},
}
$$

其中 $\mu$ 是平均分子量。更大的 $V_{\rm vir}$ 通常意味着更深的势阱和更高的气体温度。

### 8.4 $M_{200}$ 与 $R_{200}$

“200”是一种常见但不是唯一的 overdensity convention。必须进一步说明参考密度。

#### $200c$ convention

$$
\boxed{
\bar\rho(<R_{200c})=200\rho_c(z)
}
$$

$$
\boxed{
M_{200c}
=\frac{4\pi}{3}R_{200c}^3\,200\rho_c(z).
}
$$

#### $200m$ convention

$$
\boxed{
\bar\rho(<R_{200m})=200\bar\rho_m(z)
}
$$

$$
\boxed{
M_{200m}
=\frac{4\pi}{3}R_{200m}^3\,200\bar\rho_m(z).
}
$$

由于

$$
\bar\rho_m(z)=\Omega_m(z)\rho_c(z),
$$

除非 $\Omega_m(z)=1$，否则 $R_{200c}$ 与 $R_{200m}$、$M_{200c}$ 与 $M_{200m}$ 都不相同。论文只写 $M_{200}$ 而不说明 $c$ 或 $m$ 时，应检查作者的 definitions section。

在 Einstein–de Sitter universe 的 spherical-collapse 模型中，经典 virial overdensity 为

$$
\Delta_{\rm vir}=18\pi^2\simeq178.
$$

因此 200 是一个方便且接近该量级的常用选择，但 $M_{\rm vir}$ 并不在所有宇宙学和所有红移下严格等于 $M_{200c}$ 或 $M_{200m}$。

对于 $200c$ 定义，还有一个方便关系。由 $\rho_c=3H^2/(8\pi G)$ 可得

$$
M_{200c}=\frac{100H(z)^2}{G}R_{200c}^3,
$$

所以

$$
V_{200c}=\sqrt{\frac{GM_{200c}}{R_{200c}}}
=10H(z)R_{200c}.
$$

这再次显示：halo 的“边界”和由其定义的质量会随 reference density 和 redshift 改变。

### 8.5 Halo 怎样长大并影响星系？

Halo growth 包含：

$$
\boxed{\text{mergers}+\text{smooth accretion}.}
$$

物质沿 cosmic filaments 流向 nodes 和 halos。Halo mass 会影响：

- gas accretion；
- virial temperature；
- cooling efficiency；
- 是否能留住受到 feedback 加速的气体；
- star formation efficiency；
- satellite abundance。

小 halo 势阱浅，stellar feedback 和 reionization 更容易移除或加热气体；极大 halo 的气体又可能被加热到高温而难以快速冷却。可见星系只是整个 halo 质量分布中集中在中心的一小部分。

---

## 9. IGM、CGM 与 ISM：气体在哪里？

这三个缩写描述的不是三种完全不同的物质，而是 baryonic gas 所处的不同环境与尺度。

| 名称 | 全称 | 典型位置 | 主要角色 |
|---|---|---|---|
| ISM | interstellar medium | 星系内部、恒星之间 | 分子云、原子气体、电离气体和尘埃；直接形成恒星并接受恒星反馈 |
| CGM | circumgalactic medium | 星系外、halo 内，约延伸到 virial radius 附近 | 连接星系与宇宙网；储存、加热、冷却、回收 inflow / outflow gas |
| IGM | intergalactic medium | 星系与 halos 之间的大尺度空间 | 宇宙大部分普通物质的重要储库；沿 cosmic web 分布；受再电离和星系外流影响 |

概念图可以写成

$$
\boxed{
\text{cosmic web / IGM}
\leftrightarrow
\text{halo / CGM}
\leftrightarrow
\text{galaxy / ISM}
\leftrightarrow
\text{stars}.
}
$$

边界不是完全锋利的，尤其 CGM 与 IGM 的操作性区分会依赖 halo 定义和观测方法。

气体循环包括：

1. IGM gas 沿 filament accrete 到 halo；
2. 进入 CGM 后被 shock-heated、混合或冷却；
3. 一部分进入 ISM 并形成恒星；
4. stellar / AGN feedback 把能量、动量和金属送回 ISM、CGM，甚至 IGM；
5. 部分外流气体随后又 recycled 回星系。

因此 galaxy formation 是一个开放的 baryon cycle，而不是一次性把气体关进星系的过程。

---

## 10. Cosmic Dawn 与 Pop III

### 10.1 Cosmic Dawn 是什么？

**Cosmic Dawn（宇宙黎明）**是 Dark Ages 之后第一批发光天体出现的时代。最清楚的顺序是

$$
\boxed{
\text{CMB}
\rightarrow\text{Dark Ages}
\rightarrow\text{Cosmic Dawn}
\rightarrow\text{reionization}.
}
$$

Cosmic Dawn 强调的是

$$
\boxed{\text{first luminous objects appear},}
$$

而 reionization 强调的是

$$
\boxed{\text{the neutral IGM becomes ionized}.}
$$

两者相互重叠，但不是同义词。Cosmic Dawn 期间发生：

- 第一代恒星形成；
- 最早星系开始组装；
- 可能形成第一批 black-hole seeds；
- UV 与 X-ray 辐射场出现；
- 局部 ionized bubbles 产生；
- 第一批重元素被恒星和超新星制造并扩散。

### 10.2 Pop III 是什么？

Population III 指由接近 primordial、几乎无金属的气体形成的第一代恒星：

$$
\boxed{\text{Pop III stars = first, nearly metal-free stellar populations}.}
$$

“Metal” 在天文学中指比 He 更重的所有元素。BBN 只提供 H、He 和痕量 Li，因此 Pop III 的母体气体缺少今天分子云中的 C、O、CO 和 dust cooling。

Primordial gas 的关键冷却剂之一是 $\mathrm H_2$。气体必须通过辐射损失引力坍缩产生的热量，否则升高的 pressure 会阻止继续收缩。

Jeans mass 的量级关系为

$$
M_J\propto T^{3/2}\rho^{-1/2}.
$$

在相同密度下，更高温度意味着更大的特征坍缩质量。由于 primordial gas 冷却通常不如富金属气体高效，Pop III 常被预期具有偏大的 characteristic mass。但现代模拟会产生 fragmentation 和 multiple systems，因此不应把“所有 Pop III 都是同一个极大质量”当作确定事实。

---

## 11. Feedback：恒星形成如何反过来调节星系？

Feedback 指已形成的恒星或 accreting black holes 向周围气体注入能量、动量、辐射或新合成元素，从而改变后续 gas cooling、collapse 和 star formation。

### 11.1 Mechanical feedback

来源包括：

- stellar winds；
- supernova explosions；
- radiation-driven winds；
- AGN winds 和 jets。

它们向气体注入 energy 和 momentum，可导致：

- turbulent stirring；
- gas heating；
- superbubbles 和 galactic winds；
- 暂时压低 star formation；
- 将气体和金属送入 CGM / IGM。

### 11.2 Chemical feedback

恒星核合成和超新星制造 C、O、Fe 等重元素，并把它们送回环境，使 metallicity 从近似零变为

$$
Z>0.
$$

金属线和 dust 通常增强低温气体冷却，改变 fragmentation 和下一代恒星的质量分布。因此第一代恒星会推动

$$
\boxed{\text{Pop III}\rightarrow\text{metal-enriched Pop II}.}
$$

### 11.3 Radiative feedback

恒星和黑洞产生 UV、ionizing photons、Lyman–Werner photons 和 X-rays，可：

- photoionize H / He；
- photoheat gas；
- 改变气体 cooling 和 collapse；
- dissociate $\mathrm H_2$，抑制某些 primordial clouds 中的冷却；
- 形成并扩大 H II regions；
- 推动宇宙再电离。

Feedback 并不永远只有“抑制”作用。压缩气体、增加自由电子以促进某些分子反应、或提高后续冷却能力时，也可能间接促进局部 star formation。实际净效应取决于 halo mass、gas density、metallicity、radiation spectrum 和时间尺度。

---

## 12. Reionization：宇宙为何被“再次电离”？

Recombination 后 IGM 主要为中性氢。第一批恒星、星系和 accreting black holes 出现后，发出能量高于氢电离阈值 $13.6\,\mathrm{eV}$ 的光子：

$$
\mathrm{H\,I}+\gamma\rightarrow\mathrm{H\,II}+e^-.
$$

每个光源周围先形成 ionized bubble。随着光源数目和累计光子数增加，bubbles 长大并相互重叠，最终让大部分 IGM 中的氢重新电离：

$$
\boxed{
\text{first sources}
\rightarrow\text{ionized bubbles}
\rightarrow\text{bubble growth and overlap}
\rightarrow\text{ionized IGM}.
}
$$

为什么叫“re-ionization”？因为宇宙在 recombination 以前本来就是 ionized plasma；先 recombine 成中性，后来又被第一批光源电离。

Hydrogen reionization 通常认为到 $z\sim5$–$6$ 附近基本完成，但它是延展的、空间不均匀的过程。Helium 的电离历史不同：He I 可与氢再电离部分重叠，而把 He II 变成 He III 需要更高能光子，通常与 quasars 联系起来并在较晚的 $z\sim3$ 附近完成。

Reionization 也会反过来影响星系形成。Photoheating 提高 IGM 温度和 Jeans / filtering scale，使浅势阱小 halos 更难吸积和保留气体。这就是从 luminous sources 到后续 galaxy formation 的大尺度 radiative feedback。

---

## 13. Cosmic star formation history

Cosmic star formation history 常用 cosmic star-formation-rate density（SFRD）表示：

$$
\rho_{\rm SFR}
\equiv
\frac{\text{单位时间新形成的恒星质量}}
{\text{单位 comoving volume}}.
$$

其典型趋势是：

1. Cosmic Dawn 时，第一批恒星和星系出现，SFRD 从很低的水平上升；
2. 随 halo abundance、gas accretion 和 galaxy assembly 增加，SFRD 持续上升；
3. 在 $z\sim2$ 左右达到峰值，常称 **cosmic noon**；
4. 从 $z\sim2$ 到今天总体下降。

晚期下降不是由单一机制导致，而可能共同涉及：

- 宇宙平均 gas accretion rate 下降；
- gas consumption；
- stellar 和 AGN feedback；
- virial shock heating；
- massive systems 中 cooling 变慢；
- environmental effects。

“SFRD 在 $z\sim2$ 达峰”是整体宇宙平均趋势，不代表每一个星系都在同一时刻达到自己的恒星形成峰值。

### 13.1 Comoving volume 为什么重要？

若使用 physical volume，单纯的宇宙膨胀就会让固定数量天体的单位物理体积密度随 $a^{-3}$ 改变。用 comoving volume 可把 Hubble expansion 的几何稀释剥离掉，更直接地比较不同红移下 galaxy population 的真实形成与演化。

---

## 14. 把所有概念连成一条因果链

### 14.1 从 inflation 到结构种子

$$
\text{quantum fluctuations}
\xrightarrow{\rm inflation}
\text{large-scale primordial perturbations}
\rightarrow
\frac{\Delta T}{T}\sim10^{-5}\text{ in the CMB}.
$$

### 14.2 从背景膨胀到结构增长

$$
\rho_r\propto a^{-4},\qquad
\rho_m\propto a^{-3}
$$

$$
\Downarrow
$$

$$
\text{radiation domination}
\rightarrow z_{\rm eq}\sim3400
\rightarrow\text{matter domination}
\rightarrow\delta\text{ grows}.
$$

### 14.3 从线性扰动到 cosmic web

$$
|\delta|\ll1
\rightarrow\delta\sim1
\rightarrow\text{nonlinear collapse}
\rightarrow\text{sheets + filaments + halos}.
$$

### 14.4 从 halo 到 luminous galaxy

$$
\text{DM halo}
\rightarrow\text{gas infall}
\rightarrow\text{cooling}
\rightarrow\text{stars}
\rightarrow\text{feedback}
\rightarrow\text{regulated galaxy growth}.
$$

### 14.5 从第一批恒星到再电离

$$
\text{Pop III / first galaxies}
\rightarrow\text{UV photons + metals + supernovae}
\rightarrow\text{ionized bubbles and enrichment}
\rightarrow\text{reionized IGM}.
$$

这条链概括了第一讲的核心思想：

$$
\boxed{
\text{宇宙背景决定结构何时能增长；}
\quad
\text{暗物质决定引力骨架；}
\quad
\text{baryonic physics 决定发光星系如何形成。}
}
$$

---

## 15. 高频易混点

### 15.1 BBN vs recombination

- BBN：形成轻元素**原子核**，发生在最初几分钟；
- recombination：电子与原子核形成中性**原子**，发生在约 38 万年后。

### 15.2 Recombination vs reionization

- recombination：早期 plasma 变得大部分中性；
- reionization：第一批光源把中性 IGM 再次电离。

### 15.3 Matter-radiation equality vs recombination

- equality：$\rho_m=\rho_r$，约 $z\sim3400$；
- recombination：中性原子形成，约 $z\sim1100$。

### 15.4 Photon energy vs radiation energy density

- 单个光子：$E_\gamma\propto a^{-1}$；
- photon number density：$n_\gamma\propto a^{-3}$；
- radiation energy density：$\rho_r\propto a^{-4}$。

### 15.5 Critical density vs matter density

- $\rho_c(z)=3H(z)^2/(8\pi G)$：由膨胀率定义的参考密度；
- $\rho_m(z)=\Omega_{m,0}\rho_{c,0}(1+z)^3$：实际 matter density。

### 15.6 Comoving vs physical scale

- comoving：剥离整体宇宙膨胀；
- physical：当时实际 proper scale；
- $R_{\rm phys}=R_{\rm com}/(1+z)$。

### 15.7 Hubble radius vs particle horizon

- Hubble radius：$c/H$；
- comoving Hubble radius：$c/(aH)$；
- particle horizon：从初始时刻到现在光最多累计传播的距离；
- 三者相关但不完全相同。

### 15.8 Cosmic Dawn vs reionization

- Cosmic Dawn：第一批 luminous sources 出现；
- reionization：这些光源改变中性 IGM 的电离状态；
- 二者重叠但不等同。

### 15.9 Halo boundary 不是物理硬边缘

$R_{\rm vir}$、$R_{200c}$ 和 $R_{200m}$ 都是按平均内部 overdensity 定义的操作性尺度。比较 halo masses 时必须先比较定义。

### 15.10 $\delta\sim1$ 的含义

$\delta=1$ 表示 $\rho=2\bar\rho$。它意味着扰动进入 nonlinear regime，不是说该区域已经达到 halo 定义中的 200 倍密度。

---

## 16. 公式速查表

### 膨胀、红移与温度

$$
1+z=\frac{a_0}{a},
\qquad a_0=1,
\qquad a=\frac{1}{1+z}
$$

$$
\lambda\propto a,
\qquad
E_\gamma\propto a^{-1},
\qquad
T_\gamma(z)=T_{\rm CMB,0}(1+z)
$$

$$
\rho_r\propto a^{-4},
\qquad
\rho_m\propto a^{-3},
\qquad
\rho_\Lambda=\mathrm{constant}
$$

### Comoving 与 physical

$$
D_{\rm phys}=a\chi,
\qquad
R_{\rm phys}(z)=\frac{R_{\rm com}}{1+z}
$$

### Hubble expansion 与 critical density

$$
H=\frac{\dot a}{a}
$$

$$
H(z)=H_0\sqrt{
\Omega_{r,0}(1+z)^4+
\Omega_{m,0}(1+z)^3+
\Omega_{k,0}(1+z)^2+
\Omega_{\Lambda,0}}
$$

$$
\rho_c(z)=\frac{3H(z)^2}{8\pi G}
$$

$$
\rho_m(z)=\Omega_{m,0}\rho_{c,0}(1+z)^3
$$

### Inflation 与 Hubble radius

$$
R_H=\frac{c}{H},
\qquad
r_H=\frac{c}{aH}
$$

$$
\ddot a>0
\quad\Longleftrightarrow\quad
\frac{d}{dt}(aH)^{-1}<0
$$

$$
\Omega-1=\frac{kc^2}{a^2H^2}
$$

### BBN helium fraction

$$
r=\frac{n_n}{n_p},
\qquad
Y_p\simeq\frac{2r}{1+r}
$$

### Density perturbations

$$
\delta=\frac{\rho-\bar\rho}{\bar\rho}
$$

### Halo definitions

$$
\bar\rho(<R_\Delta)=\Delta\rho_{\rm ref}(z)
$$

$$
M_\Delta=\frac{4\pi}{3}R_\Delta^3\Delta\rho_{\rm ref}(z)
$$

$$
V_{\rm vir}=\sqrt{\frac{GM_{\rm vir}}{R_{\rm vir}}}
$$

$$
T_{\rm vir}\sim\frac{\mu m_pV_{\rm vir}^2}{2k_B}
$$

---

## 17. 中英术语表

| English | 中文解释 |
|---|---|
| scale factor | 尺度因子，描述宇宙整体尺度 |
| redshift | 红移；宇宙膨胀使光波长变长 |
| comoving scale | 随宇宙膨胀坐标网格固定的尺度 |
| physical / proper scale | 某一时刻的实际物理尺度 |
| critical density | 临界密度，由当时 $H(z)$ 定义的参考密度 |
| inflation | 暴胀，极早期加速膨胀阶段 |
| horizon problem | 视界问题 |
| flatness problem | 平坦性问题 |
| monopole problem | 磁单极子问题 |
| Hubble radius | 哈勃半径 $c/H$ |
| Big Bang Nucleosynthesis | 大爆炸核合成 |
| deuterium bottleneck | 氘瓶颈 |
| matter-radiation equality | 物质-辐射等密度时刻 |
| recombination | 电子与原子核结合、中性原子大量形成 |
| photon decoupling | 光子退耦，光开始自由传播 |
| Cosmic Microwave Background | 宇宙微波背景 |
| density contrast | 密度对比度 $\delta$ |
| nonlinear structure formation | 非线性结构形成 |
| cosmic web | 宇宙网 |
| filament | 宇宙网中的丝状 overdensity |
| dark matter halo | 暗物质晕；星系所在的引力势阱 |
| virialization | 维里化；达到统计动力学平衡 |
| IGM | 星系际介质 |
| CGM | 星系周介质 |
| ISM | 星系内部的星际介质 |
| Dark Ages | 黑暗时代 |
| Cosmic Dawn | 宇宙黎明，第一批发光天体出现的阶段 |
| Population III | 几乎无金属的第一代恒星 |
| feedback | 天体对周围气体的能量、动量、辐射和化学回馈 |
| reionization | 再电离 |
| cosmic star-formation-rate density | 宇宙恒星形成率密度，通常按 comoving volume 定义 |

---

## 18. 一页式总结

1. 红移与尺度因子满足 $1+z=a_0/a$；宇宙越早，$z$ 越高、$a$ 越小。
2. 单光子能量 $E_\gamma\propto a^{-1}$，辐射密度 $\rho_r\propto a^{-4}$，物质密度 $\rho_m\propto a^{-3}$。
3. Inflation 的核心是 $\ddot a>0$ 和 $(aH)^{-1}$ 缩小；它缓解 horizon、flatness 和 monopole problems，并产生结构种子。
4. BBN 在最初几分钟合成轻元素原子核；$n/p\sim1/7$ 且中子几乎全部进入 $^4$He，给出约 75% H + 25% He 的质量比例。
5. $z_{\rm eq}\sim3400$ 时 matter 超过 radiation；$z\sim1100$ 时 recombination / decoupling 产生今天看到的 CMB。
6. Density contrast $\delta=(\rho-\bar\rho)/\bar\rho$；$\delta\sim1$ 标志 nonlinear evolution 开始。
7. 各向异性坍缩形成 sheets、filaments 和 nodes；暗物质 halos 构成星系形成的引力骨架。
8. Halo 没有硬边缘；$M_{\rm vir}$、$M_{200c}$ 和 $M_{200m}$ 的含义取决于 overdensity 与 reference-density convention。
9. IGM、CGM 和 ISM 通过 inflow、cooling、star formation、outflow 和 recycling 连成 baryon cycle。
10. Cosmic Dawn 是第一批恒星与星系点亮宇宙的时期；Pop III 的辐射、超新星和金属增丰开启 feedback，并推动再电离。
11. Cosmic SFRD 在 $z\sim2$ 附近达到整体峰值；使用 comoving volume 是为了剥离宇宙膨胀造成的几何稀释。
12. 本题的平坦 $\Lambda$CDM 近似给出 $H(10)=20H_0$、$\rho_c(10)=400\rho_{c,0}$。

最终应掌握的总图是：

$$
\boxed{
\text{expanding background}
\rightarrow
\text{primordial perturbations}
\rightarrow
\text{dark-matter cosmic web and halos}
\rightarrow
\text{gas cooling and stars}
\rightarrow
\text{feedback, reionization, and galaxy evolution}.
}
$$
