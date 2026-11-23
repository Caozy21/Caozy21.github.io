---
title: "AST1440 Boltzmann 分布与 Saha 电离平衡：RL §9.5、习题 9.4–9.5 详解"
description: "从热平衡与态计数推导 Boltzmann 分布与 Saha 方程，讨论氢的电离分数、转变宽度与 Balmer 线，并详解 RL 习题 9.4、9.5。"
date: "2026-11-23"
tags: ["AST1440","Boltzmann distribution","Saha equation","Ionization equilibrium","Exercises"]
order: 19
draft: false
---

# AST1440 Boltzmann 分布与 Saha 电离平衡：RL §9.5、习题 9.4–9.5 详解

> 课程：University of Toronto AST1440 — Radiation（2026 年 11 月 16 日）  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§9.5；指定习题：RL 9.4、9.5。  
> 整理日期：2026 年 11 月 23 日。  
> 阅读方式：先看物理图像，再看公式推导；每个此前追问过的难点已放回相应章节。英文习题解答位于第 9–10 节。  
> **图像说明：** 原笔记附带的 SVG 已嵌入下文。

## 目录

1. [本次预习的物理主线](#1-本次预习的物理主线)
2. [Boltzmann 分布：同一电离态内的能级占据](#2-boltzmann-分布同一电离态内的能级占据)
3. [Maxwell–Boltzmann 分布与热德布罗意波长](#3-maxwellboltzmann-分布与热德布罗意波长)
4. [Saha 方程：为什么电离不仅取决于温度](#4-saha-方程为什么电离不仅取决于温度)
5. [难点：$n_e\lambda_{\rm th}^3$ 的意义](#5-难点n_elambda_rm-th3-究竟是什么)
6. [氢气的电离分数与数值例子](#6-氢气的电离分数与数值例子)
7. [电离转变为什么陡峭？](#7-电离转变为什么陡峭rl-94-的核心)
8. [天文光谱应用、适用条件与易错点](#8-天文光谱应用适用条件与易错点)
9. [RL 9.4：中文解题思路与英文详解](#9-rl-94中文解题思路与英文详解)
10. [RL 9.5：中文解题思路与英文详解](#10-rl-95中文解题思路与英文详解)
11. [本节必须记住的内容与核心公式](#11-本节必须记住的内容与核心公式)
12. [资料与出处](#12-资料与出处)

---

## 1. 本次预习的物理主线

上一节逆康普顿散射研究光子与电子的**能量交换**；这一节假设气体已经达到热平衡，问：**各能级、各电离态分别有多少粒子？**

两层统计问题不能混淆：

| 问题 | 工具 | 比较对象 |
|---|---|---|
| 氢原子还保持中性时，电子在 $n=1$ 还是 $n=2$？ | **Boltzmann** | 同一电离态的不同内部能级 |
| 一团纯氢中，有多少是 $\mathrm{H^0}$，有多少是 $\mathrm{H^+}$？ | **Saha** | 同一元素的相邻电离态 |

物理因果链：**热平衡 → Boltzmann 权重 → 内部配分函数 → 自由电子的平移配分函数 → Saha 电离比例 → 光谱线强度**。

符号约定：$T$ 为气体温度；$k_B$ 为 Boltzmann 常数；$h$ 为 Planck 常数；$n_e$ 为自由电子**数密度**（不是电子总数）；$U_j$ 为第 $j$ 电离态的内部配分函数；$\chi_j$ 为从第 $j$ 电离态继续移走一个电子的电离能。

---

## 2. Boltzmann 分布：同一电离态内的能级占据

### 2.1 为什么低能级更容易被占据？

热平衡下，处于能量为 $E$ 的**一个微观状态**的统计权重正比于 $e^{-E/k_BT}$。能量越高，权重越低；但如果某个能级含有多个不同微观状态，则还要乘统计权重 $g$（简并度）。

因此在同一电离态内部，两能级 $i,j$ 的数密度比为

$$
\boxed{\frac{n_j}{n_i}=\frac{g_j}{g_i}\exp\left[-\frac{E_j-E_i}{k_BT}\right].}
$$

- $e^{-(E_j-E_i)/k_BT}$：高能级的**能量代价**；
- $g_j/g_i$：该能级有多少种等能量的量子态，即**位置数优势**。

**重要：** $k_BT$ 是热能尺度，并非单个粒子能量的硬性上限。高能尾部仍能激发能量差远大于 $k_BT$ 的跃迁。

![氢原子能级及 10.2 eV 的基态到第一激发态跃迁](/learning/radiation/saha-equilibrium/hydrogen-energy-levels.svg)

*图 1：忽略精细结构的氢原子能级；从 $n=1$ 到 $n=2$ 为 10.2 eV；从 $n=1$ 到游离态为 13.6 eV。实线是束缚态，虚线表示电离极限。*

### 2.2 氢原子例子

氢原子束缚能级为

$$
E_n=-\frac{13.6\,\mathrm{eV}}{n^2},\qquad g_n=2n^2.
$$

这里 $g_n=2n^2$ 是把主量子数为 $n$ 的全部轨道与自旋状态合起来（忽略精细结构）。因此 $g_1=2$、$g_2=8$，$\Delta E=10.2\,\mathrm{eV}$：

$$
\boxed{\frac{n_2}{n_1}=4\exp\left(-\frac{10.2\,\mathrm{eV}}{k_BT}\right).}
$$

在 $T=10^4\,\mathrm K$，$k_BT=0.8617\,\mathrm{eV}$，所以

$$
\frac{n_2}{n_1}\simeq2.89\times10^{-5}.
$$

**这并不表示整团气体只有这么多氢；它只是在比较仍处于中性态的氢原子内部 $n=2$ 与 $n=1$ 的数量。**

### 2.3 配分函数 $U(T)$ 是什么？

如果有许多内部能级，就把每个能级的相对权重加起来。以该电离态的基态为零能量参考，定义

$$
\boxed{U(T)=\sum_i g_i e^{-\epsilon_i/k_BT}},\qquad \epsilon_i=E_i-E_0\ge0.
$$

归一化后，一个原子位于 $i$ 能级的条件概率是

$$
\boxed{\frac{n_i}{n_{\mathrm{stage}}}=\frac{g_i e^{-\epsilon_i/k_BT}}{U(T)}.}
$$

这里 $n_{\mathrm{stage}}$ 是**该电离态所有内部能级的总数密度**。在较低温度且没有低能激发态的近似中，$U(T)\approx g_0$。

严格地说，孤立氢原子若把无限多个高 $n$ 束缚态都纳入，内部配分和会产生发散问题；真实等离子体中屏蔽、压强电离等使高能级受到物理截断。本节的基态近似不需要处理这个复杂问题。

---

## 3. Maxwell–Boltzmann 分布与热德布罗意波长

### 3.1 “满足 Maxwell–Boltzmann 分布”是什么意思？

想象一盒处于热平衡的非相对论、非简并电子：电子持续碰撞，但并非都以同样速度运动。有些慢，有些快，热分布的**形状**保持稳定。

对电子某一方向的动量 $p_x$，动能 $E_x=p_x^2/(2m_e)$，从 Boltzmann 权重得到

$$
\boxed{f(p_x)=\frac{1}{\sqrt{2\pi m_ek_BT}}\exp\left(-\frac{p_x^2}{2m_ek_BT}\right)}.
$$

这是一个以 $p_x=0$ 为中心、标准差 $\sigma_{p_x}=\sqrt{m_ek_BT}$ 的**高斯分布**。图 2 显示，温度越高，曲线越宽，更多电子可以有很大的正或负动量。

![一维 Maxwell 动量概率密度：温度越高越宽](/learning/radiation/saha-equilibrium/maxwell-momentum-distribution.svg)

*图 2：横轴是一个方向上的动量 $p_x$，**可以为负**；图线面积均为 1。不要与速率 $v=|\mathbf v|\ge0$ 的 Maxwell speed distribution 混淆；后者还有三维球壳状态数因子 $4\pi v^2$。*

### 3.2 为什么热动量有时写 $\sqrt{3m_ek_BT}$，有时写 $\sqrt{2\pi m_ek_BT}$？

能量均分定理：三个平动自由度各贡献 $k_BT/2$，所以

$$
\left\langle\frac{p^2}{2m_e}\right\rangle=\frac32k_BT
\quad\Rightarrow\quad
\boxed{p_{\rm rms}=\sqrt{3m_ek_BT}}.
$$

一个方向的均方根动量是 $\sqrt{m_ek_BT}$。这些才是粒子的均方根动量。

**$\sqrt{2\pi m_ek_BT}$ 不是另一个精确的“平均动量”。** 它来自计算配分函数时的高斯积分，见下一小节。此前将其直接称为“电子的典型动量”容易误导；做数量级估算可以，但推导精确常数时必须明确来源。

### 3.3 热德布罗意波长为什么包含 $2\pi$？

计算一个**自由电子**在体积 $V$ 中可有的经典平移状态（暂不计自旋）：

$$
Z_{\rm trans}=\frac{V}{h^3}\int e^{-p^2/(2m_ek_BT)}\,d^3p.
$$

三个动量方向的积分相互独立；利用标准高斯积分

$$
\int_{-\infty}^{+\infty}e^{-p_x^2/(2m_ek_BT)}\,dp_x
=\sqrt{2\pi m_ek_BT},
$$

得到

$$
Z_{\rm trans}=\frac{V}{h^3}(2\pi m_ek_BT)^{3/2}
=\frac{V}{\lambda_{\rm th,e}^3},
$$

从而定义

$$
\boxed{\lambda_{\rm th,e}=\frac{h}{\sqrt{2\pi m_ek_BT}}.}
$$

**这个 $2\pi$ 出自高斯积分，不是因为电子的平均动量刚好是 $\sqrt{2\pi m_ek_BT}$。** 自旋的两种取向会进一步使自由电子的单粒子配分函数乘 2。

---

## 4. Saha 方程：为什么电离不仅取决于温度

### 4.1 两种相反的统计趋势

$$
\mathrm{H^0}\rightleftharpoons\mathrm{H^+}+e^-.
$$

让中性氢失去电子需提供 $\chi=13.6\,\mathrm{eV}$。这个**能量代价**使电离受 $e^{-\chi/k_BT}$ 抑制。

然而自由电子离开原子后，可以在容器中自由平动，拥有**许多平移动量状态**。这是电离带来的**熵优势**。

![束缚态与电离态的统计状态对比](/learning/radiation/saha-equilibrium/ionization-and-electron-states.svg)

*图 3：示意；并非原子与自由电子的真实空间尺度。能量损失（移走束缚电子需 $\chi$）与自由电子的平移状态增加之间的竞争决定热平衡。*

### 4.2 Saha 公式

对于同一种元素的相邻电离态 $j\to j+1$：

$$
\boxed{
\frac{n_{j+1}}{n_j}
=\frac{2U_{j+1}(T)}{U_j(T)}\,
\frac{1}{n_e\lambda_{\rm th,e}^3}\,
\exp\!\left(-\frac{\chi_j}{k_BT}\right)
}.
$$

等价形式：

$$
\boxed{
\frac{n_{j+1}n_e}{n_j}
=\frac{2U_{j+1}}{U_j}
\left(\frac{2\pi m_ek_BT}{h^2}\right)^{3/2}
\exp\!\left(-\frac{\chi_j}{k_BT}\right)
}.
$$

公式分成三块：

1. $2U_{j+1}/U_j$：自由电子自旋（2）和两种离子内部状态数之比；
2. $1/(n_e\lambda_{\rm th,e}^3)$：自由电子的平移**统计优势**；
3. $e^{-\chi_j/k_BT}$：电离能的指数**惩罚**。

前两项可能很大，因此**$k_BT$ 远小于 $\chi$ 仍可高度电离**。

### 4.3 严谨一点：为什么释放电子会出现 $1/n_e$？

经典、非简并自由电子的化学势为

$$
\boxed{\mu_e=k_BT\ln\!\left(\frac{n_e\lambda_{\rm th,e}^3}{2}\right)},
$$

忽略无关的静质量能参考项。电离平衡要求

$$
\mu_{\rm H^0}=\mu_p+\mu_e.
$$

在各物种理想气体、内部能级作配分和的假设下，将中性氢的束缚能 $-\chi$ 纳入其化学势，可导出上面的 Saha 方程。因为 $m_p\simeq m_{\rm H^0}$，质子与中性氢的平移配分函数因子几乎抵消；**真正留下的额外平移因子是自由电子的 $1/\lambda_{\rm th,e}^3$**，配合电子密度形成 $1/(n_e\lambda_{\rm th,e}^3)$。

物理上，已有自由电子越多，在给定 $T,V$ 下增加一个自由电子带来的混合熵收益越小；所以电离态的**比值**包含 $1/n_e$。这不是电子互相“堵住了位置”，也不意味着电子有一个固定大小为 $\lambda^3$ 的硬球体积。

---

## 5. 难点：$n_e\lambda_{\rm th}^3$ 究竟是什么？

### 5.1 一个更好的直觉

电子平均数密度为 $n_e$，所以平均每个电子所对应的空间体积为 $n_e^{-1}$。另一方面，热电子在体积 $V$ 内的**有效单粒子平移态数**（不算自旋）正比于 $V/\lambda_{\rm th}^3$。

两者放在一起：

$$
\boxed{\frac{1}{n_e\lambda_{\rm th}^3}=
\frac{\text{平均每电子对应的空间体积}}{\text{热德布罗意特征体积}}.}
$$

可以把它理解为**每个电子对应的平均空间体积内，可利用多少热平移状态**。这是一种相空间计数，不是电子真正被装在一个个大小为 $\lambda_{\rm th}^3$ 的盒子中。

- 稀薄：$n_e\downarrow\Rightarrow1/(n_e\lambda^3)\uparrow$，有利于电离；
- 高温：$\lambda\propto T^{-1/2}$，自由电子可利用的热平移态数增多，也有利于电离；
- 非简并条件：$n_e\lambda^3\ll1$。

### 5.2 具体数值

在 $T=10^4\,\mathrm K$，

$$
\lambda_{\rm th,e}\simeq 7.45\times10^{-10}\,\mathrm m.
$$

若取**自由电子密度** $n_e=10^{14}\,\mathrm{cm^{-3}}=10^{20}\,\mathrm{m^{-3}}$：

$$
n_e\lambda^3\simeq4.14\times10^{-8},
\quad\frac{1}{n_e\lambda^3}\simeq2.4\times10^7.
$$

但电离能惩罚为

$$
\exp(-13.6/0.8617)\simeq1.4\times10^{-7},
$$

所以两个因子相乘后已是 1 的量级。这说明**气体温度不必达到 $13.6\,\mathrm{eV}/k_B\simeq1.58\times10^5\,\mathrm K$，就可能显著电离**。

**特别区分：** 此处指定的是 $n_e=10^{14}\,\mathrm{cm^{-3}}$；下一节纯氢示例指定的则是**总氢核密度** $n_{\rm H,tot}=10^{14}\,\mathrm{cm^{-3}}$。在部分电离时二者不相同，不能直接混用。

---

## 6. 氢气的电离分数与数值例子

### 6.1 $x$ 与 $\delta$ 是两个不同的量

纯氢气体中定义总氢核数密度：

$$
n_{\rm H,tot}=n_{\rm H^0}+n_p.
$$

定义电离**分数**

$$
\boxed{x\equiv\frac{n_p}{n_{\rm H,tot}}},\qquad 0\le x\le1,
$$

以及电离/中性**数量比**

$$
\boxed{\delta\equiv\frac{n_p}{n_{\rm H^0}}=\frac{x}{1-x}},\qquad \delta\ge0.
$$

这点特别重要：**RL 9.5 的未知数是 $\delta$，而我们前面互动模拟器使用的是 $x$**。它们由 $x=\delta/(1+\delta)$ 相互转换。

电中性给出 $n_e=n_p=xn_{\rm H,tot}$。假设氢只有中性与单电离两态，且中性氢基态配分函数 $U_{\rm H^0}\approx2$、质子 $U_p\approx1$，则 Saha 中的 $2U_p/U_{\rm H^0}\approx1$。

定义具有数密度单位的函数

$$
\boxed{K(T)\equiv\left(\frac{2\pi m_ek_BT}{h^2}\right)^{3/2}
\exp\left(-\frac{13.6\,\mathrm{eV}}{k_BT}\right)}.
$$

纯氢 Saha 关系为

$$
\frac{n_p n_e}{n_{\rm H^0}}=K(T)
\quad\Longrightarrow\quad
\boxed{\frac{x^2}{1-x}=\frac{K(T)}{n_{\rm H,tot}}}.
$$

记 $y\equiv K(T)/n_{\rm H,tot}$，就有

$$
x^2+yx-y=0.
$$

选择正的物理解，稳定的数值表达式为

$$
\boxed{x=\frac{2}{1+\sqrt{1+4/y}}},
\quad\delta=\frac{x}{1-x}.
$$

### 6.2 为什么温度和密度都影响电离？

![纯氢气体在不同密度下随温度变化的电离分数](/learning/radiation/saha-equilibrium/saha-ionization-fraction.svg)

*图 4：基态配分函数近似下，纯氢的平衡电离分数 $x$，横轴 $T$（K），不同曲线为**总氢核数密度**（cm$^{-3}$）。密度越低，达到同一电离比例所需温度越低。曲线只适用于经典热电离平衡。*

示例：$T=10^4\,\mathrm K$，$n_{\rm H,tot}=10^{14}\,\mathrm{cm^{-3}}$。代入

$$
K(10^4\,\mathrm K)\simeq3.38\times10^{14}\,\mathrm{cm^{-3}},
$$

因此 $y\simeq3.38$，

$$
\boxed{x\simeq0.807,\quad 1-x\simeq0.193,\quad\delta\simeq4.18.}
$$

剩余中性氢内部 $n_2/n_1\simeq2.89\times10^{-5}$，于是全部氢核里处于中性氢 $n=2$ 的比例近似为

$$
(1-x)\frac{n_2}{n_1}\simeq5.58\times10^{-6}
=0.000558\%.
$$

对比密度：$T=10^4\,\mathrm K$ 固定，将 $n_{\rm H,tot}$ 从 $10^{14}$ 增加到 $10^{17}\,\mathrm{cm^{-3}}$，$x$ 从约 $80.7\%$ 降至 $5.65\%$。原因不是 Boltzmann 的相对能级占据直接随密度改变，而是**Saha 的电离态平衡**改变。

---

## 7. 电离转变为什么陡峭？——RL 9.4 的核心

### 7.1 定义 $\gamma$ 和转变温度

定义经典非简并参数

$$
\xi\equiv n_e\lambda_{\rm th,e}^3,
\qquad\boxed{\gamma_{\rm th}\equiv\ln(\xi^{-1})=\ln\frac{1}{n_e\lambda_{\rm th,e}^3}}.
$$

RL 9.4 原题写成 $\gamma$；本文记为 $\gamma_{\rm th}$，避免与逆康普顿散射中电子的 Lorentz 因子 $\gamma$ 混淆。许多天体物理应用里 $\gamma_{\rm th}$ 为 $10$–$30$ 左右。

对于两相邻电离态，暂将配分函数比看作 1 的量级：

$$
R\equiv\frac{n_{j+1}}{n_j}\sim
\exp\left(\gamma_{\rm th}-\frac{\chi_j}{k_BT}\right).
$$

转变点定义为 $R\sim1$，即 $\ln R\sim0$：

$$
\gamma_{\rm th}-\frac{\chi_j}{k_BT}\sim0
\quad\Longrightarrow\quad
\boxed{k_BT_{\rm ion}\sim\frac{\chi_j}{\gamma_{\rm th}}\ll\chi_j.}
$$

**重点：** 电离的显著发生不要求每个粒子都拥有大于电离能的热能；高能尾部和自由电子状态数的统计优势会共同影响平衡。

### 7.2 为什么 $\Delta T/T\sim1/\gamma_{\rm th}$？

从 $R\propto T^{3/2}e^{-\chi_j/k_BT}$ 开始（此处先近似固定 $n_e$ 并忽略配分函数的温度变化）：

$$
\ln R=\mathrm{const}+\frac32\ln T-\frac{\chi_j}{k_BT}.
$$

对 $\ln T$ 求导时用 $d/d\ln T=T\,d/dT$：

$$
\boxed{\frac{d\ln R}{d\ln T}=\frac32+\frac{\chi_j}{k_BT}}.
$$

在电离转变附近 $\chi_j/(k_BT)\sim\gamma_{\rm th}\gg1$，所以

$$
\Delta\ln R\simeq\gamma_{\rm th}\,\frac{\Delta T}{T}.
$$

若想让**数量比 $R$ 增大 $e\simeq2.718$ 倍**，则 $\Delta\ln R=\ln e=1$，于是

$$
\boxed{\frac{\Delta T}{T}\sim\frac{1}{\gamma_{\rm th}}}.
$$

例如 $\gamma_{\rm th}=20$，温度只需改变约 $5\%$，就能使相邻电离态数量比改变一个 $e$ 倍的量级。更精确地，若 $T'=1.05T$ 且初始 $\chi/(k_BT)=20$：

$$
\frac{R(T')}{R(T)}
=(1.05)^{3/2}\exp\left[20\left(1-\frac{1}{1.05}\right)\right]
\simeq2.78.
$$

若只比较指数部分则约 $2.59$。这解释了此前追问中的数字差异。

![固定电子密度时相邻电离态比例对温度变化的敏感性](/learning/radiation/saha-equilibrium/ionization-transition-width.svg)

*图 5：固定 $n_e$、配分函数不变、以参考温度 $T_0$ 归一化时 $R(T)/R(T_0)$ 的趋势。$\chi/(k_BT_0)$ 越大，升温一点点，数量比变化越快。*

**适用条件：** 这是一个局部尺度估算。如果求解纯氢气体的完整自洽电离分数，$n_e=xn_{\rm H,tot}$ 也随温度变化，因此上述固定 $n_e$ 的导数不能直接当作 $x(T)$ 的精确斜率；教材这里要求的是**数量比变化快慢的数量级**。同样，“一个 $e$ 倍变化”不等于“从 0% 电离直接跃迁到 100% 电离”。

### 7.3 电离明显之前，是否已经有很多激发态？

激发态和基态仍服从 Boltzmann：

$$
\frac{n_{i,j}}{n_{0,j}}=\frac{g_{i,j}}{g_{0,j}}
\exp\left(-\frac{\epsilon_{i,j}}{k_BT}\right).
$$

在电离转变附近 $k_BT\sim\chi_j/\gamma_{\rm th}$，变成

$$
\boxed{\frac{n_{i,j}}{n_{0,j}}\sim\frac{g_{i,j}}{g_{0,j}}
\exp\left(-\gamma_{\rm th}\frac{\epsilon_{i,j}}{\chi_j}\right)}.
$$

如果 $\epsilon_{i,j}$ 与 $\chi_j$ 同量级，而 $\gamma_{\rm th}\gg1$，激发态会受到指数压制。因此**在许多情况下，原子在明显电离之前大部分仍处于基态**。但低激发能的能级、很大的统计权重或复杂能级结构是例外，不能不加检查地推广到所有原子。

---

## 8. 天文光谱应用、适用条件与易错点

### 8.1 Balmer 线为什么不是温度越高越强？

氢 Balmer 吸收需要中性氢原子最初处于 $n=2$。这同时要求：

- 温度不能过低，否则 $n=2$ 的 Boltzmann 占据极小；
- 温度也不能过高，否则大量氢已被 Saha 电离，$n_{\rm H^0}$ 太少。

所以 Balmer 线在 A 型恒星附近尤其突出。在真实恒星大气中，线强还取决于连续谱不透明度、辐射转移、压强与大气结构，不能只凭两条统计公式预测完整线型。

### 8.2 本节公式何时成立？

1. **热平衡（thermodynamic equilibrium）或适当的 LTE 条件**，使局部能级与电离态能按一个温度的统计权重描述；非 LTE、光致电离与复合的动力学平衡可能偏离 Saha。
2. **非相对论电子与经典非简并气体**：通常需 $n_e\lambda^3\ll1$；电子简并明显时需 Fermi–Dirac 统计。
3. **理想气体或弱相互作用近似**：高密度、强耦合、压强电离会修正。
4. **氢基态配分函数近似**仅适用于相关激发态占据可以忽略的区域；实际气体可含 $\mathrm{H^-}$、分子等额外物种。
5. Saha 给的是**平衡比例**，不是电离与复合所需的时间；达到该平衡还要求作用时间足够长。

### 8.3 容易犯的错

- 把 $\sqrt{2\pi m_ek_BT}$ 当成电子精确的 RMS 动量；正确 RMS 是 $\sqrt{3m_ek_BT}$。
- 把 $\lambda_{\rm th}^3$ 当成电子硬球体积；它是热量子**相空间计数**相关的特征体积。
- 把自由电子数密度 $n_e$ 与总氢核密度 $n_{\rm H,tot}$ 混为一谈。
- 把电离分数 $x$ 与电离/中性比值 $\delta$ 混为一谈。
- 只看 $e^{-\chi/k_BT}$ 而忘掉自由电子的状态数因子。
- 用 Saha 直接计算非热平衡的 H II 区或星际光致电离气体；这些情形一般应求解 photoionization/recombination balance。

---

## 9. RL 9.4：中文解题思路与英文详解

> **已核对教材题意。** 本题围绕 $\xi=n_e\lambda_{\rm th}^3$ 与 $\gamma=\ln\xi^{-1}$（通常 $\gamma$ 大而变化缓慢），要求：(a) 估算相邻电离态数量相当的温度；(b) 估算数量比明显变化所需的相对温度宽度；(c) 用 Boltzmann 分布解释为何电离前多处于基态。以下为**意译与独立推导**，不照录教材题文。

### 9.1 中文解题思路

(a) 将 Saha 比值设为 1，取对数：$\chi_j/(k_BT)\sim\gamma$；故 $k_BT\sim\chi_j/\gamma$。

(b) 对 $\ln(n_{j+1}/n_j)$ 关于 $\ln T$ 求导；在转变附近导数约 $\gamma$，因此数量比改变一个 $e$ 倍所需 $\Delta T/T\sim1/\gamma$。若固定 $n_e$，导数中可明确写出 $3/2$。

(c) Boltzmann 比值 $\propto e^{-\epsilon/(k_BT)}$；将 (a) 中的 $k_BT$ 代入便得到 $e^{-\gamma\epsilon/\chi_j}$，通常极小。

### 9.2 English Worked Solution — RL Problem 9.4 (a)–(c)

**Problem (paraphrased).** Consider a nondegenerate electron gas, with thermal wavelength $\lambda_{\rm th}=h/(2\pi m_ek_BT)^{1/2}$ and degeneracy parameter $\xi=n_e\lambda_{\rm th}^3$. Assuming $\gamma\equiv\ln(1/\xi)\gg1$ and that internal partition functions are approximately independent of temperature and of order unity, (a) estimate the temperature at which adjacent ionization stages have comparable populations, (b) estimate the relative temperature interval over which the population ratio changes appreciably, and (c) explain why most ions remain in their ground state until ionization.

**Given and assumptions.** The ionization energy from stage $j$ to stage $j+1$ is $\chi_j>0$; the populations are in thermal ionization equilibrium. The partition-function ratio is treated as an order-unity constant. The nondegenerate classical approximation is assumed, $\xi\ll1$. For the simple explicit temperature derivative in part (b), we first regard $n_e$ as fixed; the conclusion remains an order-of-magnitude estimate when other dependencies are slowly varying.

**(a) Transition temperature.** From the Saha equation,

$$
R\equiv\frac{n_{j+1}}{n_j}
=\frac{2U_{j+1}}{U_j}\frac{1}{n_e\lambda_{\rm th}^3}
\exp\!\left(-\frac{\chi_j}{k_BT}\right).
$$

Taking the natural logarithm,

$$
\ln R=\ln\!\left(\frac{2U_{j+1}}{U_j}\right)
+\gamma-\frac{\chi_j}{k_BT}.
$$

At the transition $R\sim1$, so $\ln R\sim0$. Because the first term is of order unity and $\gamma\gg1$,

$$
\boxed{k_BT_{\rm tr}\sim\frac{\chi_j}{\gamma}}.
$$

Hence $k_BT_{\rm tr}\ll\chi_j$: appreciable ionization is possible even when the thermal energy is much smaller than the ionization potential.

**(b) Width of the transition.** For fixed $n_e$, $\lambda_{\rm th}^{-3}\propto T^{3/2}$ and constant internal partition functions. Thus

$$
\ln R=\mathrm{const}+\frac32\ln T-\frac{\chi_j}{k_BT}.
$$

Differentiating with respect to $\ln T$,

$$
\frac{d\ln R}{d\ln T}
=\frac32+\frac{\chi_j}{k_BT}.
$$

At the transition, $\chi_j/(k_BT)\sim\gamma\gg3/2$, whence

$$
\frac{d\ln R}{d\ln T}\sim\gamma.
$$

A substantial multiplicative change of $R$, e.g. $R\to eR$, corresponds to $\Delta\ln R\sim1$. Linearizing around the transition,

$$
1\sim\Delta\ln R\simeq\frac{d\ln R}{d\ln T}\frac{\Delta T}{T}
\sim\gamma\frac{\Delta T}{T},
$$

so the characteristic relative width is

$$
\boxed{\frac{\Delta T}{T}\sim\gamma^{-1}\ll1.}
$$

If the free-electron density is not held fixed, $d\ln R/d\ln T=\chi_j/(k_BT)+d\gamma/d\ln T+d\ln(2U_{j+1}/U_j)/d\ln T$; the problem assumes the corrections do not change the leading order $\sim\gamma$ estimate.

**(c) Ground-state dominance prior to ionization.** Let $\epsilon_{i,j}>0$ be the excitation energy from the ground state of ionization stage $j$ to an excited level $i$. Boltzmann statistics gives

$$
\frac{n_{i,j}}{n_{0,j}}=\frac{g_{i,j}}{g_{0,j}}\exp\!\left(-\frac{\epsilon_{i,j}}{k_BT}\right).
$$

Just below the transition, $k_BT\lesssim\chi_j/\gamma$, implying

$$
\frac{n_{i,j}}{n_{0,j}}\lesssim
\frac{g_{i,j}}{g_{0,j}}\exp\!\left(-\gamma\frac{\epsilon_{i,j}}{\chi_j}\right).
$$

For excitation energies that are a significant fraction of $\chi_j$ and moderate statistical-weight ratios, the exponent is large and negative when $\gamma\gg1$. Therefore the ground state dominates before substantial ionization. Very low-lying levels and unusually large degeneracies require separate consideration.

**Checks and limitations.** The two energies $k_BT$ and $\chi_j$ have identical dimensions; $\gamma$ is dimensionless. The narrow-width statement concerns the *population ratio*, not necessarily a change from 0% to 100% ionization. The analysis presumes near-equilibrium, nondegenerate particles, and slowly varying partition functions.

---

## 10. RL 9.5：中文解题思路与英文详解

> **已核对教材题意。** 一团初始冷且中性的氢气具有质量密度 $\rho$，装在金属容器内；加热容器壁，使气体达到温度 $T$ 的热平衡。(a) 找到唯一决定电离/中性比 $\delta$ 的无量纲参数 $\Delta(\rho,T)$；(b) 求出 $\delta(\Delta)$ 的显式代数表达式。可假设配分函数恒等于基态的统计权重。

### 10.1 中文解题思路

**注意题目要解 $\delta=n_p/n_{\rm H^0}$，不是 $x=n_p/n_{\rm H,tot}$。** 设氢核总密度 $n_{\rm H,tot}=\rho/m_{\rm H}$。定义 $K(T)$ 如第 6 节，令

$$
\boxed{\Delta(\rho,T)=\frac{K(T)}{n_{\rm H,tot}}=\frac{m_{\rm H}}{\rho}\,K(T)}.
$$

它无量纲，也就是由温度与密度构成的**单一控制参数**。由电中性 $n_p=n_e$ 与氢核守恒得

$$
n_{\rm H^0}=\frac{n_{\rm H,tot}}{1+\delta},\qquad
n_p=n_e=\frac{\delta}{1+\delta}n_{\rm H,tot}.
$$

代入 Saha：

$$
\frac{n_p n_e}{n_{\rm H^0}}
=\frac{\delta^2}{1+\delta}n_{\rm H,tot}
=K(T),
$$

因此

$$
\boxed{\frac{\delta^2}{1+\delta}=\Delta}.
$$

解二次方程 $\delta^2-\Delta\delta-\Delta=0$，取非负根：

$$
\boxed{\delta(\Delta)=\frac{\Delta+\sqrt{\Delta^2+4\Delta}}{2}.}
$$

极限：$\Delta\ll1\Rightarrow\delta\simeq\sqrt\Delta$；$\Delta\gg1\Rightarrow\delta\simeq\Delta+1$。如果改求电离分数，则 $x=\delta/(1+\delta)$。

### 10.2 English Worked Solution — RL Problem 9.5 (a)–(b)

**Problem (paraphrased).** A closed metal container initially holds cold, neutral hydrogen gas of mass density $\rho$. The container is heated until the gas and its contents reach equilibrium at temperature $T$. Determine the equilibrium ratio $\delta$ of ionized to neutral hydrogen. (a) Identify a single dimensionless combination $\Delta(\rho,T)$ controlling this ratio. (b) Obtain an explicit algebraic formula for $\delta(\Delta)$, taking internal partition functions equal to the ground-state statistical weights.

**Given / Find.** The species are $\mathrm{H^0}$, $p$, and $e^-$. The hydrogen ionization energy is $\chi_H=13.6\,\mathrm{eV}$. Given $\rho$ and $T$, find $\Delta(\rho,T)$ and $\delta=n_p/n_{\rm H^0}$.

**Assumptions.** The gas has reached thermal and ionization equilibrium at $T$; it is nondegenerate and sufficiently dilute for the ideal-gas Saha equation to apply. Only neutral and singly ionized hydrogen are included, with no hydrogen molecules or negative hydrogen ions. Charge neutrality holds, and the total number of hydrogen nuclei is conserved. The fixed nuclear number density is $n_{\rm H,tot}=\rho/m_H$; mass changes due to binding and thermal energy are negligible for this conversion. At the relevant approximation $U_{\rm H^0}\simeq g_{\rm H^0,ground}=2$ and $U_p\simeq1$, so the prefactor $2U_p/U_{\rm H^0}=1$.

**Step 1: Write the hydrogen Saha equation.**

$$
\frac{n_p n_e}{n_{\rm H^0}}
=\underbrace{\left(\frac{2\pi m_ek_BT}{h^2}\right)^{3/2}
 e^{-\chi_H/(k_BT)}}_{\displaystyle K(T)}.
$$

The function $K(T)$ has dimensions of number density.

**Step 2: Express all densities using $\delta$.**

Define $\delta\equiv n_p/n_{\rm H^0}$. Charge neutrality gives $n_e=n_p$. Conservation of hydrogen nuclei gives

$$
n_{\rm H,tot}=n_{\rm H^0}+n_p=n_{\rm H^0}(1+\delta)
\quad\Rightarrow\quad
n_{\rm H^0}=\frac{n_{\rm H,tot}}{1+\delta},
\quad n_p=n_e=\frac{\delta n_{\rm H,tot}}{1+\delta}.
$$

Substituting into the left-hand side of Saha,

$$
\frac{n_p n_e}{n_{\rm H^0}}
=\frac{\left[\delta n_{\rm H,tot}/(1+\delta)\right]^2}
{n_{\rm H,tot}/(1+\delta)}
=\frac{\delta^2}{1+\delta}\,n_{\rm H,tot}.
$$

**(a) Dimensionless parameter.** It follows that

$$
\frac{\delta^2}{1+\delta}=\frac{K(T)}{n_{\rm H,tot}}.
$$

Thus define

$$
\boxed{\Delta(\rho,T)
\equiv\frac{m_H}{\rho}\left(\frac{2\pi m_ek_BT}{h^2}\right)^{3/2}
\exp\!\left(-\frac{\chi_H}{k_BT}\right).}
$$

This quantity is dimensionless, because $m_H/\rho$ is a volume per hydrogen nucleus and the remaining factor has units of inverse volume. Once $\Delta$ is specified, the equilibrium ionization-to-neutral ratio is determined.

**(b) Solve explicitly for $\delta$.** Rewrite the equation as

$$
\delta^2=\Delta(1+\delta)
\quad\Longrightarrow\quad\delta^2-\Delta\delta-\Delta=0.
$$

Applying the quadratic formula,

$$
\delta=\frac{\Delta\pm\sqrt{\Delta^2+4\Delta}}{2}.
$$

For $\Delta>0$, the negative-sign root is nonpositive and is unphysical, since $\delta=n_p/n_{\rm H^0}\ge0$. Hence the physical solution is

$$
\boxed{\delta(\Delta)=\frac{\Delta+\sqrt{\Delta^2+4\Delta}}{2}.}
$$

The corresponding fraction of hydrogen nuclei in ions is

$$
\boxed{x=\frac{n_p}{n_{\rm H,tot}}=\frac{\delta}{1+\delta}
=\frac{2}{1+\sqrt{1+4/\Delta}}.}
$$

**Sanity checks and limiting cases.** If $\Delta\ll1$, then $\delta^2/(1+\delta)\approx\delta^2$, giving $\delta\approx\sqrt\Delta\ll1$: the gas is mostly neutral. If $\Delta\gg1$, then $\delta\gg1$ and $\delta^2/(1+\delta)\approx\delta$, giving $\delta\sim\Delta$ (more precisely, $\delta=\Delta+1+O(\Delta^{-1})$): the gas is nearly completely ionized. At fixed $T$, $\Delta\propto\rho^{-1}$, so a lower-density gas is more ionized in Saha equilibrium. At fixed $\rho$, raising $T$ increases $\Delta$ rapidly.

**Optional numerical example (not additional data from the textbook).** For $T=10^4\,\mathrm K$ and $n_{\rm H,tot}=10^{14}\,\mathrm{cm^{-3}}$ (equivalently $\rho\approx1.67\times10^{-10}\,\mathrm{g\,cm^{-3}}$), $K\simeq3.38\times10^{14}\,\mathrm{cm^{-3}}$ and $\Delta\simeq3.38$. Therefore $\delta\simeq4.18$, corresponding to $x=\delta/(1+\delta)\simeq0.807$.

**Physical limitations.** This is an equilibrium calculation, not a prediction of the equilibration time. A metal enclosure is an idealized thermalizing environment. In a non-LTE radiation field, at very high density, or when molecular and other ionization states become relevant, the simple ideal-gas result must be modified.

---

## 11. 本节必须记住的内容与核心公式

### 11.1 五句话复习整节物理

1. **Boltzmann** 比较**同一电离态**的内部能级；统计权重和能量惩罚共同决定分布。
2. **Maxwell–Boltzmann** 告诉我们热电子有一整套动量分布，而非每个电子都带着同一个 $k_BT$。
3. 热德布罗意波长里的 **$2\pi$ 来自动量高斯积分**，不能当成 RMS 动量中的系数。
4. **Saha** 比较**相邻电离态**：电离能的指数惩罚和自由电子的平移态数优势相竞争，因此密度也关键。
5. **$x$ 是电离分数，$\delta$ 是电离/中性数量比**；RL 9.5 必须用正确变量写结果。

### 11.2 公式速查表

| 公式 | 物理意义 | 条件或提醒 |
|---|---|---|
| $n_j/n_i=(g_j/g_i)e^{-(E_j-E_i)/k_BT}$ | Boltzmann 能级占据比 | **同一电离态**、热平衡 |
| $U=\sum_i g_i e^{-\epsilon_i/k_BT}$ | 内部配分函数 | $\epsilon_i$ 以该电离态基态为零 |
| $f(p_x)\propto e^{-p_x^2/(2m_ek_BT)}$ | 一维 Maxwell 动量分布 | 经典非相对论、非简并 |
| $p_{\rm rms}=\sqrt{3m_ek_BT}$ | 三维 RMS 热动量 | **不是** $\sqrt{2\pi m_ek_BT}$ |
| $\lambda_{\rm th}=h/\sqrt{2\pi m_ek_BT}$ | 热德布罗意波长 | $2\pi$ 来自高斯积分 |
| $Z_{\rm trans}=V/\lambda_{\rm th}^3$ | 单粒子平移配分函数 | 此处未计自旋 |
| $\frac{n_{j+1}}{n_j}=\frac{2U_{j+1}}{U_j}\frac{e^{-\chi_j/k_BT}}{n_e\lambda_{\rm th,e}^3}$ | Saha 电离态之比 | 热平衡、经典、理想气体 |
| $\gamma_{\rm th}=\ln[1/(n_e\lambda_{\rm th}^3)]$ | 非简并对数参数 | RL 9.4 原题写作 $\gamma$ |
| $k_BT_{\rm tr}\sim\chi_j/\gamma_{\rm th}$ | 相邻电离态转变温度 | $\gamma_{\rm th}\gg1$，配分函数缓变 |
| $\Delta T/T\sim\gamma_{\rm th}^{-1}$ | 电离态数量比显著变化的温度宽度 | **数量级估算**，非完整 $x(T)$ 精确斜率 |
| $x=n_p/n_{\rm H,tot}$，$\delta=n_p/n_{\rm H^0}=x/(1-x)$ | 两种电离程度定义 | 不得混用 |
| $x^2/(1-x)=K(T)/n_{\rm H,tot}$ | 纯氢 Saha 自洽方程 | $n_e=n_p$，基态近似 |
| $\Delta=(m_H/\rho)K(T)$ | RL 9.5 的无量纲参数 | $\rho$ 为质量密度 |
| $\delta=[\Delta+\sqrt{\Delta^2+4\Delta}]/2$ | RL 9.5 所求显式解 | 只取非负根 |

**最后的概念检验：** 同样的温度、不同密度的气体，Boltzmann 的**同一电离态内部**相对能级占据可以相同，但 Saha 的**电离态占比**一般不同。掌握这个区别，就掌握了整节课的主线。

---

## 12. 资料与出处

- Rybicki, G. B. & Lightman, A. P., *Radiative Processes in Astrophysics*, §9.5 and textbook Problems 9.4–9.5（教材内容、习题结构；习题文字均作了独立意译）。
- University of Toronto, [AST1440 — Radiation (2026)](https://www.astro.utoronto.ca/~mhvk/AST1440/)，2026 年 11 月 16 日课程说明与讲后注释（对 $\gamma$、$\Delta T/T$ 的讨论）。
- Y. Takahashi & E. Chiang, [Astro 201 — Radiative Processes, Solution Set 6](https://w.astro.berkeley.edu/~echiang/rad/ps6ans.pdf)（用于交叉核对 RL 9.4 的近似及其适用条件；本文独立组织与推导）。

**文件规范：** 公式采用 Markdown + LaTeX，插图为本笔记附带的 SVG。
