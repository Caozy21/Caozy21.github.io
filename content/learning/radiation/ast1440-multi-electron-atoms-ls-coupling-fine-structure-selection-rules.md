---
title: "AST1440 多电子原子、LS 耦合、精细结构与选择定则：RL §9.3–9.4、§10.4 及习题 9.2、9.3、10.1、10.2 详解"
description: "多电子原子的 LS 与 jj 耦合、原子项与简并度、精细结构、Zeeman 效应及 E1 选择定则，附 RL 习题 9.2、9.3、10.1、10.2 详解。"
date: "2026-11-23"
tags: ["AST1440","Multi-electron atoms","LS coupling","Fine structure","Selection rules"]
order: 21
draft: false
---

# AST1440 多电子原子、LS 耦合、精细结构与选择定则：RL §9.3–9.4、§10.4 及习题 9.2、9.3、10.1、10.2 详解

> 课程：University of Toronto，AST1440 — Radiation\
> 课堂：2026-11-23，*Multi-electron systems and their selection rules*\
> 指定阅读：Rybicki & Lightman（RL）§9.3–9.4（到 Zeeman effect）、§10.4；补充：Electron configuration、Term symbol。\
> 指定习题：RL 9.2、9.3、10.1、10.2。\
> 整理日期：2026-11-23。\
> **阅读约定：** 以下每次引入新术语、定理、近似或假设，都立即定义它、解释物理意义、交代适用条件。推导符号中小写 $l,s,j$ 通常指单电子，大写 $L,S,J$ 指多电子原子的总角动量；$S$ 也可能是光谱字母（由上下文区分）。

## 目录

1. [逻辑主线、前提和符号](#1-逻辑主线前提和符号)
2. [从单电子态到 Pauli 原理](#2-从单电子态到-pauli-原理)
3. [Singlet、triplet、角动量相加](#3-singlettriplet角动量相加)
4. [LS coupling、jj coupling 与 term symbol](#4-ls-couplingjj-coupling-与-term-symbol)
5. [Configuration、term、level、state 与计数](#5-configurationtermlevelstate-与计数)
6. [哈密顿量、角动量本征值和精细结构](#6-哈密顿量角动量本征值和精细结构)
7. [Hund 规则与 p²/p⁴ 的电子—空穴对称](#7-hund-规则与-pp-的电子空穴对称)
8. [Zeeman effect 与 Landé g-factor](#8-zeeman-effect-与-landé-g-factor)
9. [Electric dipole 选择定则的来历](#9-electric-dipole-选择定则的来历)
10. [天文应用：禁线、O III、21 cm 线](#10-天文应用禁线o-iii21-cm-线)
11. [RL 9.2：所有允许的原子项](#11-rl-92所有允许的原子项)
12. [RL 9.3：简并度逐项核对](#12-rl-93简并度逐项核对)
13. [RL 10.1：精细结构谱线](#13-rl-101精细结构谱线)
14. [RL 10.2：十组 E1 允许/禁戒跃迁](#14-rl-102十组-e1-允许禁戒跃迁)
15. [English detailed solutions（习题英文详解）](#15-english-detailed-solutions习题英文详解)
16. [本章必记知识、易混点和自检](#16-本章必记知识易混点和自检)
17. [参考资料](#17-参考资料)

---

## 1. 逻辑主线、前提和符号

天文学家的实际问题是：一个多电子原子有哪些可能的能级？两个能级之间是否能通过发射一个光子相连？光谱中会出现几条线？

$$
\underbrace{\text{单电子态}}_{n,l,m_l,m_s}
\;\longrightarrow\;
\underbrace{\text{电子组态}}_{2p3s,\;2p^4\dots}
\;\longrightarrow\;
\underbrace{\text{原子项}}_{{}^{2S+1}L}
\;\longrightarrow\;
\underbrace{\text{能级}}_{{}^{2S+1}L_J}
\;\longrightarrow\;
\underbrace{\text{光谱线}}_{h\nu=E_u-E_l}.
$$

**本章的主要前提（明确定义）：**

- **非相对论中心势近似（central-field approximation）**：近似把每个电子看成在球对称平均势 $V(r)$ 中运动，单电子轨道可用 $n,l,m_l$ 标记；电子之间的非中心势静电作用再进一步处理。仅对中心势适用，强相关时需更精确计算。
- **Pauli 原理（泡利不相容原理）**：电子是费米子；交换两个电子的完整波函数必须变号。相应地，不能有两电子占据同一个 *spin-orbital*（包括 $n,l,m_l,m_s$ 全部相同）。
- **LS coupling 近似（Russell–Saunders coupling）**：造成不同 $L,S$ 原子项分裂的静电相互作用能量尺度明显大于自旋–轨道耦合能量尺度，故先定义 $\mathbf L=\sum_i\mathbf l_i$、$\mathbf S=\sum_i\mathbf s_i$，最后 $\mathbf J=\mathbf L+\mathbf S$；它常适用于较轻原子的许多电子态，不是所有原子都精确成立。
- **Electric-dipole approximation（电偶极，E1 近似）**：光的波长远大于原子尺度 $ka\ll1$，保留辐射与原子的最低阶非零电偶极耦合。若 E1 矩阵元为零，只意味着 E1 跃迁禁止，*不* 意味着其他多极辐射绝不发生。

**统一符号：**

| 符号 | 定义 | 备注 |
|---|---|---|
| $n$ | 主量子数 | $1,2,\ldots$ |
| $l,m_l$ | 单电子轨道角动量量子数和 z 投影量子数 | $l=0,1,2,\dots$，$m_l=-l,\ldots,l$ |
| $s,m_s$ | 单电子自旋角动量量子数和 z 投影量子数 | 电子 $s=\tfrac12$，$m_s=\pm\tfrac12$ |
| $L,S,J$ | 整个原子的总轨道、总自旋、总角动量量子数 | $\mathbf J=\mathbf L+\mathbf S$ |
| $M_L,M_S,M_J$ | 上述总角动量沿量子化 z 轴的投影量子数 | $-L,\ldots,L$ 等 |
| $I,F$ | 原子核自旋和包含原子核的总角动量 | $\mathbf F=\mathbf I+\mathbf J$，用于超精细结构 |
| $g$ | 统计权重/简并度：不同量子态的数量 | 需说明数的是 configuration、term 还是 level |
| $A$ | 一个给定 LS term 内的有效自旋–轨道耦合常数 | **单位是能量**，可能为正或负；不同于 Einstein $A_{ul}$ |
| $\mu_B$ | Bohr magneton，玻尔磁子，$e\hbar/(2m_e)$ | $e>0$ 表示元电荷大小 |

---

## 2. 从单电子态到 Pauli 原理

**电子轨道（orbital）的定义**：中心势近似下，空间波函数的定态 $\psi_{nlm}(r,\theta,\phi)=R_{nl}(r)Y_l^{m_l}(\theta,\phi)$；它是概率幅，电子并不是沿固定椭圆轨道绕核运动。

**自旋轨道（spin-orbital）的定义**：一个空间轨道乘上电子自旋态，需用 $n,l,m_l,m_s$ 四个量子数共同指定。一个 s 亚层有 $m_l=0$，所以有两种自旋轨道：$\uparrow,\downarrow$；p 亚层有 $m_l=-1,0,1$，所以有 $3\times2=6$ 种。

电子组态（electron configuration）的定义是各亚层电子占据数，例如 $2s^2$ 表示两电子都在 2s 亚层；$2p3s$ 表示有一电子在 2p，另一电子在 3s。

由 Pauli 原理，同一个自旋轨道不能容纳两电子。故 $2s^2$ 只能是 $\uparrow\downarrow$，不可能有两个完全相同的 $\uparrow\uparrow$ 自旋轨道。

---

## 3. Singlet、triplet、角动量相加

**总自旋量子数 $S$ 的定义**：所有电子自旋算符向量和 $\mathbf S=\sum_i\mathbf s_i$ 的量子数。两个电子各为 $s=1/2$，总自旋可以是 $S=0$ 或 $S=1$，**不能**由箭头简单地判断 $S$。

**Singlet（单重态）**：$S=0$，自旋多重度 $2S+1=1$，其两个电子的自旋波函数为

$$
\chi_{00}=\frac{|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle}{\sqrt2}.
$$

**Triplet（三重态）**：$S=1$，有三个 $M_S=1,0,-1$ 状态：

$$
\chi_{11}=|\uparrow\uparrow\rangle,\qquad
\chi_{10}=\frac{|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle}{\sqrt2},\qquad
\chi_{1,-1}=|\downarrow\downarrow\rangle.
$$

交换两电子时，singlet 自旋部分反对称，triplet 自旋部分对称；为了保证**完整**两电子态的反对称性，空间部分必须分别对称、反对称。这正是等价电子原子项限制的来源。

**角动量相加规则（angular-momentum addition）**：给定两个角动量量子数 $a,b$，合成后的总角动量量子数 $c$ 只能按整数步长取

$$
\boxed{c=|a-b|,|a-b|+1,\ldots,a+b.}
$$

例如 $l_1=l_2=1$ 的两个 p 电子，可以合成 $L=0,1,2$，对应光谱字母 S、P、D；两个自旋 $1/2$ 合成 $S=0,1$。

**适用注意**：上式给出角动量数学允许的耦合，若两个电子等价，还需进一步用 Pauli 原理剔除不允许的组合。

---

## 4. LS coupling、jj coupling 与 term symbol

![LS 与 jj 耦合的不同顺序](/learning/radiation/multi-electron-atoms/02_LS_vs_jj.png)

**LS coupling 的物理含义**：电子间剩余静电相互作用把不同的 $L,S$ 原子项区分开，弱一些的自旋–轨道作用在项内产生 $J$ 精细分裂。顺序如下：

$$
\mathbf L=\sum_i\mathbf l_i,\qquad
\mathbf S=\sum_i\mathbf s_i,\qquad
\mathbf J=\mathbf L+\mathbf S.
$$

**jj coupling 的定义**：每个电子的自身自旋–轨道耦合相对更强时，先 $\mathbf j_i=\mathbf l_i+\mathbf s_i$，再将所有 $\mathbf j_i$ 合成 $\mathbf J$。更常用于一些重元素的电子态。

**Intermediate coupling（中间耦合）的定义**：静电项分裂与自旋–轨道耦合相近，单一 LS / jj 标签不足以完整表征态，需要进行不同基底组态混合。LS 与 jj 只是对同一总角动量空间的两种耦合表示，不是两套物理定律。

**Term symbol（光谱原子项符号）**：

$$
\boxed{{}^{2S+1}L_J},\quad
L=0\to\mathrm S,\quad1\to\mathrm P,\quad2\to\mathrm D,\quad3\to\mathrm F.
$$

历史上 S/P/D/F 来自 sharp / principal / diffuse / fundamental 光谱系列名称。这里**大写** P 表示整个原子的 $L=1$；组态中的**小写** p 表示单电子 $l=1$。例如 ${}^3P_2$ 的含义是 $S=1,L=1,J=2$；不表示某个特定电子处于 p 轨道。

**Parity（宇称）的定义**：将空间坐标整体反演 $\mathbf r\to-\mathbf r$ 后波函数得到的本征符号，偶 $+1$，奇 $-1$。单电子角动量 $l$ 的宇称为 $(-1)^l$；在确定的多电子组态中：

$$
\boxed{P=(-1)^{\sum_i l_i}.}
$$

奇宇称可在 term symbol 右上角写 $\mathrm{o}$（odd），例如 $2p3s$ 的 ${}^3P_2^{\rm o}$；偶宇称通常不标。**宇称与一个电子自旋是向上还是向下无关。**

---

## 5. Configuration、term、level、state 与计数

![从 2p3s 组态到 LS 原子项再到 J 能级](/learning/radiation/multi-electron-atoms/01_configuration_term_level.png)

四个概念的**明确定义**：

1. **Configuration（组态）**：给出电子分别占据哪些 $nl$ 亚层，例如 $2p3s$。
2. **Term（原子项）**：在 LS coupling 中指定 $L,S$ 的一组量子态，例如 ${}^3P$。它含多个不同 $M_L,M_S$ 状态。
3. **Level（精细结构能级）**：再指定 $J$，例如 ${}^3P_2$。无外磁场时，单个 level 通常仍有 $2J+1$ 个 $M_J$ 简并态。
4. **State（量子态）**：在这一模型中进一步指定 $M_J$（和必要的其他标签）的具体态。不同的 state 可以处于同一个能量 level。

**Degeneracy / statistical weight（简并度/统计权重）的定义**：在所选精度和对称性下，属于一个组态、原子项或能级的不同量子态数量；不是能量的大小。

一个给定 $L$ 的投影 $M_L$ 有 $2L+1$ 种，一个给定 $S$ 的投影 $M_S$ 有 $2S+1$ 种。两种独立的选择需要**相乘**：

$$
\boxed{g_{\rm term}=(2L+1)(2S+1).}
$$

而同一原子项可分成不同 $J$ 的**互斥**分类，故把各能级的状态数**相加**：

$$
\boxed{g_J=2J+1,\qquad
 g_{\rm term}=\sum_{J=|L-S|}^{L+S}(2J+1).}
$$

例如 ${}^3P$：$L=S=1$，term 共 $3\times3=9$ 个态；$J=0,1,2$ 依次有 $1,3,5$ 个态，因此 $1+3+5=9$。这并非两套额外状态，而是**同样九个态的不同分类**。

**不同亚层的独立占据相乘**：例如 $2p3s$ 的 p 有 6 种单电子态、s 有 2 种，故总计 $6\times2=12$。

**相同亚层放等价电子使用组合数**：若一个亚层可容纳 $g_{nl}=2(2l+1)$ 个 spin-orbitals，放入 $q$ 个不可区分费米子，合法占据数为 $\binom{g_{nl}}q$。例如 $2p^4$ 有 $\binom64=15$ 种，而不是 $6^4$。

**计数口令**：独立选择相乘；互斥类别相加；同一亚层等价电子占据用组合数。

---

## 6. 哈密顿量、角动量本征值和精细结构

### 6.1 Hamiltonian 与能量

**Hamiltonian（哈密顿量，$\hat H$）的定义**：量子力学中生成时间演化并对应能量可观测量的自伴算符。定态能量本征值满足

$$
\boxed{\hat H|\psi_n\rangle=E_n|\psi_n\rangle.}
$$

其中 $|\psi_n\rangle$ 是确定能量的本征态；对任意归一化叠加态，平均能量是 $\langle H\rangle=\langle\psi|\hat H|\psi\rangle$，而一般不等于一个确定本征值。

**Perturbation（微扰）的定义与适用前提**：在已知的 $\hat H_0$ 上加入相对较小的 $\hat H'$，用小参数展开能量与态。如果零阶态非简并，一阶能量修正为 $\Delta E^{(1)}=\langle n|\hat H'|n\rangle$；若原来简并，须先在简并子空间内对角化 $\hat H'$，不能随意取一个基态求期望值。

### 6.2 为什么角动量的平方是 $j(j+1)\hbar^2$？

**角动量算符的对易关系（commutator）的定义**：$[A,B]\equiv AB-BA$；角动量满足 $[J_x,J_y]=i\hbar J_z$ 及循环置换。这导致不同分量不能同时具有确定值，但 $\hat{\mathbf J}^2$ 和 $\hat J_z$ 可以同时对角化：

$$
\hat{\mathbf J}^2|j,m\rangle=j(j+1)\hbar^2|j,m\rangle,
\qquad \hat J_z|j,m\rangle=m\hbar|j,m\rangle.
$$

**Ladder operator（升降算符）的定义**：$J_\pm=J_x\pm iJ_y$；它们把 $m$ 改变 $\pm1$ 而不改变 $j$。利用恒等式

$$
\hat{\mathbf J}^2=J_-J_+ +J_z^2+\hbar J_z
$$

在最高态 $|j,j\rangle$ 上，由 $J_+|j,j\rangle=0$，得

$$
\hat{\mathbf J}^2|j,j\rangle=(j^2+j)\hbar^2|j,j\rangle.
$$

同一 $j$ 的各个 $m$ 态有相同平方本征值，所以是 $j(j+1)\hbar^2$，**不是** $j^2\hbar^2$。$L,S,J$ 都属于角动量，所以分别用 $L(L+1),S(S+1),J(J+1)$。

### 6.3 Spin–orbit coupling 与 fine structure

**Spin–orbit coupling（自旋–轨道耦合）的定义**：电子自旋磁矩与其运动所关联的有效磁场发生相互作用。在一个给定的、LS 近似良好的原子项内，可用有效哈密顿量表示：

$$
\boxed{\hat H_{\rm SO}=\frac{A}{\hbar^2}\mathbf L\cdot\mathbf S.}
$$

$A$ 是这个原子项的有效耦合常数，不是通用常量；上式并不包含原子的所有相对论修正。**Fine structure（精细结构）的定义**：自旋–轨道耦合等相对论效应导致的、相同电子组态和 LS 原子项附近的较小能级分裂。

因为 $\mathbf J=\mathbf L+\mathbf S$，

$$
\mathbf L\cdot\mathbf S=\frac12(\mathbf J^2-\mathbf L^2-\mathbf S^2).
$$

在具有确定 $L,S,J$ 的状态上取期望值：

$$
\boxed{\Delta E_J=\frac A2\big[J(J+1)-L(L+1)-S(S+1)\big].}
$$

**Landé interval rule（朗德间隔定则）的定义**：若一个原子项内部可用单一常数 $A$ 描述 LS 自旋–轨道耦合，则其相邻 $J$ 能级之差为

$$
\boxed{E_J-E_{J-1}=AJ.}
$$

例如 ${}^3P$，有 $J=0,1,2$；取未分裂的原子项能量 $E_{\rm term}$：

$$
E_{J=0}=E_{\rm term}-2A,\qquad E_{J=1}=E_{\rm term}-A,\qquad E_{J=2}=E_{\rm term}+A.
$$

因此两个相邻间隔为 $A$ 和 $2A$。若 $A>0$ 称 normal ordering（$J$ 越高，能量越高）；若 $A<0$ 称 inverted ordering（$J$ 越高，能量越低）。**这个判断属于该有效模型，实际原子还可能受到组态混合等修正。**

![3P 的 normal 与 inverted 精细分裂](/learning/radiation/multi-electron-atoms/03_fine_structure.png)

---

## 7. Hund 规则与 p²/p⁴ 的电子—空穴对称

**Hund's rules（洪特规则）的定义**：在一定原子电子组态与近似范围内，帮助判断 *已允许存在* 的原子项和精细结构能级中哪一个能量较低的经验规则；它们**不能**替代 Pauli 原理来生成所有 term。

1. **第一规则**：在同一组态中，$S$ 最大的项通常能量最低。
2. **第二规则**：在相同 $S$ 的项中，$L$ 最大的项通常更低。
3. **第三规则**：对于给定不足半满的开放亚层，最低 $J$ 较低；对于超过半满的开放亚层，最高 $J$ 较低（适用时须注意具体组态与耦合机制）。

**Equivalent electrons（等价电子）的定义**：位于同一个 $nl$ 亚层的电子，例如 $2p^2$ 里的两个 2p 电子，它们的量子态组合受交换反对称性进一步限制。两个 $l=1$ 的等价 p 电子数学上可有 $L=0,1,2$ 与 $S=0,1$，但不是所有组合都允许：

- 自旋 singlet $S=0$ 反对称，故空间部分须对称 → 偶数 $L=0,2$，即 ${}^1S,{}^1D$。
- 自旋 triplet $S=1$ 对称，故空间部分须反对称 → 奇数 $L=1$，即 ${}^3P$。

因此

$$
\boxed{p^2:\quad{}^1S,{}^1D,{}^3P.}
$$

**Hole（空穴）的定义**：一个本来可以被电子占据、实际上却空着的 spin-orbital。p 亚层共有 6 个 spin-orbitals，$p^4$ 正好留下 2 个空穴。在**封闭 p 亚层** $p^6$ 总 $L=S=0$ 的前提下，两个空穴的角动量耦合给出与两个电子相同的允许 term：

$$
\boxed{p^4:\quad{}^1S,{}^1D,{}^3P,\qquad\binom64=\binom62=15.}
$$

**注意**：$p^2$ 与 $p^4$ 的 term *种类* 相同，不表示相同能量顺序。以中性氧 O I 的 $2p^4$ 为例，Hund 规则选出 ${}^3P$ 最低，再因超过半满而选出 ${}^3P_2$ 为精细结构基态；${}^1D_2,{}^1S_0$ 仍是合法的激发态。RL 9.2 要求**所有** term，不能只留 Hund 最低项。

---

## 8. Zeeman effect 与 Landé g-factor

**Zeeman effect（塞曼效应）的定义**：外加磁场把原先不同磁量子数 $M_J$ 之间的简并打破，使能级发生磁场相关的分裂。

**Landé $g_J$-factor 的定义**：在一个 $LSJ$ 能级中，磁矩沿量子化轴的期望值与总角动量投影之间的比例系数，定义为

$$
\boxed{\langle\mu_z\rangle=-g_J\mu_B M_J.}
$$

若自旋 $g_s\simeq2$，且处于有效 LS coupling，$J\ne0$ 时

$$
\boxed{g_J=1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}.}
$$

例如 ${}^3P_2$：$L=S=1,J=2$，所以 $g_J=3/2$。

**弱场 Zeeman 近似的适用条件**：磁相互作用足够弱，不能明显破坏给定的 $LSJ$ 耦合，且磁场沿 z 方向时

$$
\boxed{\Delta E=\mu_B g_J M_J B,\quad M_J=-J,-J+1,\ldots,J.}
$$

$J=0$ 没有线性 Zeeman 的 $M_J$ 分裂；以上 $g_J$ 公式在 $J=0$ 不能直接代入。磁场太强时可能进入 Paschen–Back regime（帕邢–巴克区域）：磁场作用显著改变自旋–轨道耦合的适当量子数，不能继续照搬简单的弱场公式。

---

## 9. Electric dipole 选择定则的来历

**Transition matrix element（跃迁矩阵元）的定义**：算符 $\hat O$ 在初态与末态之间的量子幅度 $\langle f|\hat O|i\rangle$。对于 E1 过程，电偶极算符为

$$
\boxed{\mathbf d=-e\sum_i\mathbf r_i,\qquad
\mathcal M_{fi}^{\rm E1}=\langle f|\mathbf d|i\rangle.}
$$

在相应近似下，E1 跃迁强度正比于 $|\mathcal M_{fi}^{\rm E1}|^2$。如果这个积分为零，E1 跃迁禁戒。这里“为什么要计算积分”的答案是：它**决定初末态能否被电偶极相互作用联系起来**。

**Parity rule 的推导**：位置算符 $\mathbf r$ 在空间反演下变号（奇宇称）；若初末态宇称相同，则被积函数 $\psi_f^*\mathbf r\psi_i$ 为奇函数，全空间积分为零。因此 E1 需要初末态**奇偶性相反**。

**One-electron jump rule（单电子跃迁规则）的定义**：$\mathbf d$ 是单电子算符的求和，故在单组态、独立轨道（Slater determinant）近似下，非零 E1 矩阵元至多连接一个电子改变 spin-orbital 的组态；两个电子同时改变轨道的直接 E1 矩阵元为零。真实原子中由于组态混合，这种“禁止”可能变成很弱的跃迁。

**LS-coupled E1 选择定则与条件：**

| 规则 | 必要条件 | 来源/物理意义 |
|---|---|---|
| 总宇称 | $P_iP_f=-1$ | $\mathbf d$ 是奇宇称算符 |
| 单电子轨道变化 | $\Delta l=\pm1$ | 单电子偶极积分的角向选择定则 |
| 单电子变化数 | 单组态模型中只变一个电子 | 偶极是单电子算符之和 |
| 总自旋 | $\Delta S=0$ | 电偶极算符不直接作用于电子自旋；严格 LS 限制 |
| 总轨道角动量 | $\Delta L=0,\pm1$；但 $L=0\leftrightarrow0$ 禁止 | 电偶极是秩 1 的球张量 |
| 总角动量 | $\Delta J=0,\pm1$；但 $J=0\leftrightarrow0$ 禁止 | 光子携带角动量 1 |
| 磁量子数（选定光偏振时） | $\Delta M_J=0,\pm1$ | 球张量分量 $q=0,\pm1$ |

**重要区分：**$\Delta l=0$ 与 $\Delta L=0$ 不是同一个量；后者可以允许，前者对单电子 E1 不允许。选择定则都是 E1 的**必要条件**，满足它们也不保证矩阵元绝不因其他对称性恰好为零。

**Multipole transition（多极跃迁）的定义**：光和原子相互作用按电荷/电流空间分布展开，E1 是最低阶；若 E1 禁戒，还可能有 magnetic dipole（M1，磁偶极）和 electric quadrupole（E2，电四极）过程。此处所说 forbidden lines 主要指 **E1 forbidden**，不是彻底不能发光。

---

## 10. 天文应用：禁线、[O III]、21 cm 线

### 10.1 Forbidden lines 到底是什么？

**Forbidden line（禁线）的定义**：在最主要的 E1 近似下对应矩阵元为零，却可由更弱的多极跃迁、态混合等机制产生的光谱线。**外观上与普通发射峰没有本质差异**；常以元素名称外的方括号标记，如 `[O III]`、`[N II]`、`[S II]`。

**Ionization-stage notation（电离级标法）**：元素后罗马数字 I 表示中性，II 表示失去一个电子，III 表示失去两个电子。所以 `[O III]` 是 O$^{2+}$，不是三价氧原子，更不是“三个电子的氧”。

**Metastable level（亚稳态）的定义**：由于主要辐射通道被选择定则抑制而具有较长辐射寿命的激发态。在稀薄星云里，碰撞少，亚稳态有机会通过慢的 M1/E2 跃迁发光；在致密介质中，碰撞退激发可能优先发生。

定义 $A_{ul}$ 为一个上能级粒子每秒自发辐射到下能级的 Einstein A 系数（单位 s$^{-1}$）；$q_{ul}$ 为碰撞退激发速率系数（单位 cm$^3$ s$^{-1}$），$n_e$ 为电子数密度。两条通道的速率比较是

$$
\underbrace{A_{ul}}_{\text{辐射退激发}}
\quad\text{vs.}\quad
\underbrace{n_eq_{ul}}_{\text{碰撞退激发}}.
$$

**Critical density（临界密度）的定义**：给定上能级向下各碰撞通道总速率与自发辐射总速率相当的电子密度；简化为两能级时 $n_{\rm crit}=A_{ul}/q_{ul}$。这是为何禁线强度比能作为电子密度诊断量，例如 [S II] $I(6716)/I(6731)$。

### 10.2 为什么会有两条 [O III]？

![O III 能级和 4959、5007 两条发射线示意](/learning/radiation/multi-electron-atoms/04_oiii_spectrum.png)

同一个 O$^{2+}$ 的 ${}^1D_2$ 上能级，可以衰变至 ${}^3P$ 项中两个不同 $J$ 的下能级：

$$
\begin{aligned}
[\mathrm{O\ III}]\ 5007\ \mathring{\mathrm A}:&\quad{}^1D_2\to{}^3P_2,\\
[\mathrm{O\ III}]\ 4959\ \mathring{\mathrm A}:&\quad{}^1D_2\to{}^3P_1.
\end{aligned}
$$

由于终态能量不同，光子能量 $h\nu=E_u-E_l$ 也不同。5007 与 4959 两条线的典型强度比约 $2.98:1$，由跃迁概率的分支比和频率修正决定。它们都是 E1 禁线，主要通过磁偶极等弱过程发射；在纯 LS 耦合时其 $\Delta S\ne0$，真实离子的相对论态混合使弱跃迁成为可能。另一条著名 [O III] 4363 Å 来自 ${}^1S_0\to{}^1D_2$，常与 5007、4959 联合诊断电子温度。

### 10.3 21 cm 线是 hyperfine，不是 fine structure

**Hyperfine structure（超精细结构）的定义**：电子总角动量 $\mathbf J$ 与原子核自旋 $\mathbf I$ 的相互作用引起的更细微能级分裂；总角动量 $\mathbf F=\mathbf J+\mathbf I$。

氢原子基态 $1s$ 的 $L=0,S=1/2,J=1/2$，质子核自旋 $I=1/2$，因此 $F=0,1$ 两能级。$F=1\to F=0$ 的磁偶极跃迁发出

$$
\boxed{\nu_{21}=1420.40575\ \mathrm{MHz},\qquad \lambda\simeq21.1\ \mathrm{cm}.}
$$

其 $A_{10}\simeq2.85\times10^{-15}\ \mathrm{s}^{-1}$，意味着孤立原子的自发辐射平均等待时间约 $1.1\times10^7$ 年。这不妨碍大规模星际 H I 气体呈现可观测的 21 cm 发射。

---

## 11. RL 9.2：所有允许的原子项

**题意（转述）**：按 LS coupling 找出给定组态的所有 allowed terms，必须包括 parity 和 $J$，并解释依据。注意是**所有允许的状态**，不是只求 Hund 规则选出的基态。

### (a) $2s^2$

两电子同属 2s 亚层，$l_1=l_2=0$，所以 $L=0$。相同空间轨道的空间波函数对称，反对称总波函数要求 singlet：$S=0$。于是 $J=0$，宇称 $(-1)^{0+0}=+1$。答案：

$$\boxed{2s^2\longrightarrow{}^1S_0\quad\text{(even)}.}$$

**为什么没有 triplet？** 若自旋对称，空间部分必须反对称；同一 s 空间轨道的反对称组合恒为零。

### (b) $2p3s$

不同亚层的两个电子，$l_1=1,l_2=0$，故 $L=1$（P），自旋可 $S=0$（singlet）或 $S=1$（triplet）。

- ${}^1P$：$J=1$；
- ${}^3P$：$J=0,1,2$；
- parity $=(-1)^{1+0}=-1$。

$$\boxed{2p3s\longrightarrow{}^1P_1^{\rm o},\ {}^3P_0^{\rm o},\ {}^3P_1^{\rm o},\ {}^3P_2^{\rm o}.}$$

### (c) $3p4p$

两个 p 电子的主量子数不同（**nonequivalent electrons，非等价电子**），不必应用同一 $nl$ 等价电子的附加排除条件。轨道耦合 $L=0,1,2$；自旋耦合 $S=0,1$，得到六种 LS term：

| Term | $L$ | $S$ | $J$ |
|---|---:|---:|---|
| ${}^1S$ | 0 | 0 | 0 |
| ${}^1P$ | 1 | 0 | 1 |
| ${}^1D$ | 2 | 0 | 2 |
| ${}^3S$ | 0 | 1 | 1 |
| ${}^3P$ | 1 | 1 | 0,1,2 |
| ${}^3D$ | 2 | 1 | 1,2,3 |

Parity $=(-1)^{1+1}=+1$，全部为 even：

$$\boxed{ {}^1S_0,\ {}^1P_1,\ {}^1D_2,\ {}^3S_1,\ {}^3P_{0,1,2},\ {}^3D_{1,2,3}.}$$

### (d) $2p^43p$

**Parent term（母项）的定义**：先将部分等价电子亚层耦合成具有确定 $L_p,S_p$ 的“子系统”，再与剩余电子的角动量相加。$2p^4$ 子系统可有母项 ${}^1S,{}^1D,{}^3P$；单个 3p 电子有 $l=1,s=1/2$。

| $2p^4$ 母项 | 与 3p 耦合后的 LS terms | 理由 |
|---|---|---|
| ${}^1S$（$L_p=0,S_p=0$） | ${}^2P$ | $L=1,S=1/2$ |
| ${}^1D$（$L_p=2,S_p=0$） | ${}^2P,{}^2D,{}^2F$ | $L=1,2,3$，$S=1/2$ |
| ${}^3P$（$L_p=1,S_p=1$） | ${}^2S,{}^2P,{}^2D,{}^4S,{}^4P,{}^4D$ | $L=0,1,2$，$S=1/2,3/2$ |

重要：${}^2P$ 来自三个不同母项，出现 **3 次**；${}^2D$ 出现 **2 次**。它们虽有相同 $L,S$，但对应独立的态；实际相互作用可以混合具有相同对称性的态，计数时不能删除重复项。

| LS term | $J$ | term 的个数 |
|---|---|---:|
| ${}^2S$ | $1/2$ | 1 |
| ${}^2P$ | $1/2,3/2$ | 3 |
| ${}^2D$ | $3/2,5/2$ | 2 |
| ${}^2F$ | $5/2,7/2$ | 1 |
| ${}^4S$ | $3/2$ | 1 |
| ${}^4P$ | $1/2,3/2,5/2$ | 1 |
| ${}^4D$ | $1/2,3/2,5/2,7/2$ | 1 |

总 parity $=(-1)^{4\cdot1+1}=-1$，全部带上标 $\rm o$。这是 **10 组带有母项标签的 LS terms**（若只数不同的字母+多重度名称有 7 种）。可用状态数 $90$ 检查（下一题）。

---

## 12. RL 9.3：简并度逐项核对

**题意（转述）**：分别从组态的 $l$、term 的 $L,S$、level 的 $J$ 计算简并度，验证三个角度得到相同状态总数。原题允许略去 9.2(d)，但这里也给出校验。

### 计算方法与前提

- 一个 $nl$ 亚层有 $2(2l+1)$ 个 spin-orbitals。
- 等价电子 $q$ 个在同一亚层的占据数为 $\binom{2(2l+1)}q$。
- 不同亚层可独立占据时，数量相乘。
- 一个 LS term 有 $(2L+1)(2S+1)$ 个态。
- 一个精细结构 level 有 $2J+1$ 个态。
- 不同 term 的态数**相加**；同一 term 的不同 $J$ level 也**相加**。

### (a) $2s^2$

$$
\underbrace{\binom22}_{\rm configuration}=1,\qquad
\underbrace{(2\cdot0+1)(2\cdot0+1)}_{{}^1S\ \rm term}=1,\qquad
\underbrace{2\cdot0+1}_{{}^1S_0\ \rm level}=1.
$$

### (b) $2p3s$

$$
\underbrace{6\cdot2}_{\rm configuration}=12,\quad
\underbrace{(3\cdot1)+(3\cdot3)}_{{}^1P+{}^3P}=12,\quad
\underbrace{3+(1+3+5)}_{J\rm\ levels}=12.
$$

### (c) $3p4p$

$$
\underbrace{6\cdot6}_{\rm configuration}=36.
$$

| LS term | $(2L+1)(2S+1)$ | 按 J 求和 |
|---|---:|---:|
| ${}^1S$ | 1 | $1$ |
| ${}^1P$ | 3 | $3$ |
| ${}^1D$ | 5 | $5$ |
| ${}^3S$ | 3 | $3$ |
| ${}^3P$ | 9 | $1+3+5=9$ |
| ${}^3D$ | 15 | $3+5+7=15$ |
| **总和** | **36** | **36** |

### 额外核对 (d) $2p^43p$

$$
\underbrace{\binom64\cdot6}_{\rm configuration}=90.
$$

按照第 11 节列表，term 简并度（重复 term 分别计算）：

$$
\underbrace{2}_{{}^2S}+
\underbrace{3\cdot6}_{3\times{}^2P}+
\underbrace{2\cdot10}_{2\times{}^2D}+
\underbrace{14}_{{}^2F}+
\underbrace{4}_{{}^4S}+
\underbrace{12}_{{}^4P}+
\underbrace{20}_{{}^4D}=90.
$$

### 一个抽象恒等式

对任意给定 $L,S$，角动量张量积空间的维数是 $(2L+1)(2S+1)$，按照总角动量 $J$ 分解为 $J=|L-S|,\ldots,L+S$ 的互斥表示，所以

$$
\boxed{(2L+1)(2S+1)=\sum_{J=|L-S|}^{L+S}(2J+1).}
$$

这就是 RL 9.3 的物理核心。

---

## 13. RL 10.1：精细结构谱线

**题意（转述）**：研究 ${}^3P$ 与 ${}^3S$ 原子项之间，在 LS 耦合 E1 角动量规则下有多少精细结构跃迁；画图并用 Landé interval rule 比较谱线间距。分别考虑 ${}^3P$ 的 normal/inverted 排列，以及它是上项还是下项。

### 13.1 先找 J

${}^3P$：$L=1,S=1\Rightarrow J=0,1,2$；${}^3S$：$L=0,S=1\Rightarrow J=1$。

三组角动量允许跃迁为

$$
{}^3P_0\leftrightarrow{}^3S_1,\quad
{}^3P_1\leftrightarrow{}^3S_1,\quad
{}^3P_2\leftrightarrow{}^3S_1.
$$

**适用前提**：原题只指定原子项而没有完整组态。仅凭这些标签可确定角动量定则允许的三组分支；要说它们实际都是 E1-allowed，仍须假定上下组态具有**相反宇称**且符合 one-electron jump rule。

### 13.2 Landé 间隔及光子能量

记 $C=|A|>0$ 为 ${}^3P$ 的自旋–轨道耦合幅度，则 $J=0,1$ 相隔 $C$，$J=1,2$ 相隔 $2C$；最高与最低共相隔 $3C$。${}^3S_1$ 只有一个 $J$，没有同一 term 内的 J 分裂。

设 $E_{\gamma,\min}$ 是三条线中最小的光子能量，则无论 ${}^3P$ 在上还是下，总谱线频率序列总是以下两种形式之一：

$$
\boxed{\text{模式 I：}\quad h\nu=E_{\gamma,\min},\ E_{\gamma,\min}+C,\ E_{\gamma,\min}+3C}
$$

（相邻频率差 $C/h,\ 2C/h$），或

$$
\boxed{\text{模式 II：}\quad h\nu=E_{\gamma,\min},\ E_{\gamma,\min}+2C,\ E_{\gamma,\min}+3C}
$$

（相邻频率差 $2C/h,\ C/h$）。

| ${}^3P$ 情形 | 频率从低到高对应的 P-level | 相邻频率差 |
|---|---|---|
| normal，P 为上项 | $J=0,1,2$ | $C/h,\ 2C/h$ |
| normal，P 为下项 | $J=2,1,0$ | $2C/h,\ C/h$ |
| inverted，P 为上项 | $J=2,1,0$ | $2C/h,\ C/h$ |
| inverted，P 为下项 | $J=0,1,2$ | $C/h,\ 2C/h$ |

**不要把频率间隔比当作波长间隔比**，因为 $\lambda=c/\nu$ 非线性。若三条线聚在很窄范围，波长间隔可一阶近似与频率间隔成比例（顺序反向），但这需要额外的窄间隔假设。

---

## 14. RL 10.2：十组 E1 允许/禁戒跃迁

**题意（转述）**：对原题的十组初末态，检查所有 LS-coupling electric-dipole 必要选择定则，说明任一被违反的规则。原题 (j) 的一项出现不符合 $L,S,J$ 合成的标签，需独立指出。

| 题号 | 跃迁（保留原题量子数） | 判定 | 违反/满足的关键规则 |
|---|---|---|---|
| a | $3s\ {}^2S_{1/2}\leftrightarrow4s\ {}^2S_{1/2}$ | **Forbidden** | $s\to s$，$\Delta l=0$；宇称同为偶；$L=0\leftrightarrow0$ 也禁止 |
| b | $2p\ {}^2P_{1/2}\leftrightarrow3d\ {}^2D_{5/2}$ | **Forbidden** | $\Delta J=2$，虽然 $p\to d$ 与宇称改变满足 |
| c | $3s3p\ {}^3P_1\leftrightarrow3p^2\ {}^1D_2$ | **Forbidden** | $S:1\to0$，违反 $\Delta S=0$；其余主要 E1 规则可满足 |
| d | $2p3p\ {}^3D_1\leftrightarrow3p4d\ {}^3F_2$ | **Allowed** | 一个电子 $2p\to4d$，$\Delta l=1$、宇称改变、$\Delta S=0,\Delta L=1,\Delta J=1$ |
| e | $2p^2\ {}^3P_0\leftrightarrow2p3s\ {}^3P_0$ | **Forbidden** | $J=0\leftrightarrow0$（虽单电子变化及宇称可满足） |
| f | $3s2p\ {}^1P_1\leftrightarrow2p3p\ {}^1P_1$ | **Allowed** | $3s\to3p$，宇称变，$\Delta S=0,\Delta L=0,\Delta J=0$ 均允许 |
| g | $2s3p\ {}^3P_0\leftrightarrow3p4d\ {}^3P_1$ | **Forbidden** | $2s\to4d$，$\Delta l=2$；宇称不变 |
| h | $1s^2\ {}^1S_0\leftrightarrow2s2p\ {}^1P_1$ | **Forbidden** | 两电子都需改变轨道，单组态 E1 的 one-electron jump rule 不满足 |
| i | $2p3p\ {}^3S_1\leftrightarrow2p4d\ {}^3D_2$ | **Forbidden** | $L:0\to2$，$\Delta L=2$；其他关键规则允许 |
| j | $2p^3\ {}^2D_{3/2}\leftrightarrow2p^3\ {}^2D_{1/2}$ | **Forbidden** | 同组态宇称不变；此外右态 ${}^2D_{1/2}$ **本身不是合法 LSJ level** |

**(j) 的原题异常说明**：已对照 RL 的可检索 PDF 文本，原题确实印有 $2p^3\ {}^2D_{1/2}$。但 $L=2,S=1/2$ 按角动量相加只能得到 $J=3/2,5/2$，所以 $J=1/2$ 不合法。答题时应指出这一点，并且即使把它改成合法的 $J=5/2$，同组态宇称不变仍足以判为 E1 禁戒。这里不擅自把原文当作已正式修正。

**逐步检查的建议顺序**：先看 parity（最快），再看能否由单电子 $\Delta l=\pm1$ 实现，再核对 $S,L,J$，最后检查 term 本身是否合法。对 Allowed 判定要确认**全部条件**；对 Forbidden 至少给一个明确违反的必要条件，能给多项更好。

---

## 15. English detailed solutions（习题英文详解）

> These are independently written, assignment-style explanations, not quotations from the textbook. Assumptions and exceptions are stated explicitly.

### Problem 9.2 — Spectroscopic terms

**(a) $2s^2$.** Both electrons occupy the same $2s$ spatial orbital, for which $l_1=l_2=0$. Consequently, $L=0$. Because the spatial wavefunction is symmetric, the Pauli principle requires an antisymmetric spin function. The two-electron spin state must therefore be the singlet, $S=0$. Coupling $L=0$ and $S=0$ gives $J=0$. The parity is $(-1)^{0+0}=+1$. Thus the only term and level are $\boxed{{}^1S_0}$, with even parity.

**(b) $2p3s$.** The two electrons are nonequivalent. Coupling their orbital angular momenta $l_1=1$ and $l_2=0$ yields $L=1$ only. Coupling two spin-$1/2$ electrons yields $S=0$ and $S=1$. Thus both ${}^1P$ and ${}^3P$ terms occur. The singlet has $J=1$, whereas the triplet has $J=0,1,2$. The parity is $(-1)^{1+0}=-1$. The levels are $\boxed{{}^1P_1^{\mathrm o},{}^3P_0^{\mathrm o},{}^3P_1^{\mathrm o},{}^3P_2^{\mathrm o}}$.

**(c) $3p4p$.** Although the electrons have the same orbital angular momentum $l=1$, they differ in principal quantum number and are therefore nonequivalent. The orbital angular momenta give $L=0,1,2$, and the spins give $S=0,1$. All six LS terms are present: ${}^1S,{}^1P,{}^1D,{}^3S,{}^3P,{}^3D$. Coupling $L$ and $S$ gives the respective J values $0;1;2;1;0,1,2;1,2,3$. Because $l_1+l_2=2$, every term has even parity. The full set of levels is $\boxed{{}^1S_0,{}^1P_1,{}^1D_2,{}^3S_1,{}^3P_{0,1,2},{}^3D_{1,2,3}}$.

**(d) $2p^43p$.** First construct the allowed parent terms of the $2p^4$ equivalent-electron subshell. The $p^4$ subshell is related to $p^2$ by particle–hole symmetry; its terms are ${}^1S$, ${}^1D$, and ${}^3P$. Coupling the $3p$ electron, with $l=1$ and $s=1/2$, to the ${}^1S$ parent produces ${}^2P$; coupling it to ${}^1D$ produces ${}^2P,{}^2D,{}^2F$; and coupling it to ${}^3P$ produces ${}^2S,{}^2P,{}^2D,{}^4S,{}^4P,{}^4D$. Repeated ${}^2P$ and ${}^2D$ terms must be counted separately because they originate from distinct parents. Their J values are $1/2$ for ${}^2S$; $1/2,3/2$ for ${}^2P$; $3/2,5/2$ for ${}^2D$; $5/2,7/2$ for ${}^2F$; $3/2$ for ${}^4S$; $1/2,3/2,5/2$ for ${}^4P$; and $1/2,3/2,5/2,7/2$ for ${}^4D$. The parity is $(-1)^5=-1$, so all these levels are odd. The complete state count is $90$, consistent with $\binom64\times6$.

### Problem 9.3 — Degeneracy consistency

A one-electron $nl$ subshell has $2(2l+1)$ spin-orbitals. For $q$ equivalent electrons, the number of allowed configurations of occupied spin-orbitals is $\binom{2(2l+1)}q$; for electrons in distinct subshells the corresponding numbers multiply. A term of given $L,S$ contains $(2L+1)(2S+1)$ states, while each level of total $J$ contains $2J+1$ states.

For **$2s^2$**, direct configuration counting gives $\binom22=1$. Its single ${}^1S$ term has degeneracy $1$, and its ${}^1S_0$ level has degeneracy $1$.

For **$2p3s$**, direct counting gives $6\times2=12$. The ${}^1P$ and ${}^3P$ terms have degeneracies $3$ and $9$, totaling $12$. Their levels contain $3$ and $1+3+5=9$ states, respectively. Thus the level sum also equals $12$.

For **$3p4p$**, direct counting gives $6\times6=36$. The ${}^1S,{}^1P,{}^1D,{}^3S,{}^3P,{}^3D$ terms contribute $1,3,5,3,9,15$ states, respectively, for a total of $36$. Decomposing these terms by J gives $1+3+5+3+(1+3+5)+(3+5+7)=36$.

As an optional extension, the **$2p^43p$** configuration contains $\binom64\times6=90$ states. The terms found in Problem 9.2(d) contribute $2+3(6)+2(10)+14+4+12+20=90$, including all repeated terms. Thus the configuration, term, and level counting schemes are mutually consistent.

### Problem 10.1 — Fine-structure components and line separations

For a ${}^3P$ term, $L=1$ and $S=1$, so $J=0,1,2$. For a ${}^3S$ term, $L=0$ and $S=1$, so $J=1$ only. The E1 angular-momentum rules allow ${}^3P_0\leftrightarrow{}^3S_1$, ${}^3P_1\leftrightarrow{}^3S_1$, and ${}^3P_2\leftrightarrow{}^3S_1$. **Assuming opposite parity and a permitted single-electron configuration change**, these give three lines.

Let $C=|A|>0$ denote the magnitude of the spin–orbit constant for ${}^3P$. From the Landé interval rule, $|E_{P,1}-E_{P,0}|=C$ and $|E_{P,2}-E_{P,1}|=2C$. If ${}^3P$ is normal and lies above ${}^3S$, the frequencies increase in the order $J=0,1,2$, and the consecutive separations are $C/h$ and $2C/h$. If ${}^3P$ is normal and lies below ${}^3S$, the frequencies increase in the order $J=2,1,0$, and the separations are $2C/h$ and $C/h$. An inverted upper ${}^3P$ term also produces $2C/h,C/h$, while an inverted lower term produces $C/h,2C/h$. These intervals are **frequency**, not exact wavelength, separations.

### Problem 10.2 — Selection rules (all ten parts)

**(a)** $3s\ {}^2S_{1/2}\leftrightarrow4s\ {}^2S_{1/2}$ is **forbidden**. The active electron undergoes $s\to s$ with $\Delta l=0$ and no change in parity. The term-level $L=0\leftrightarrow0$ prohibition also applies.

**(b)** $2p\ {}^2P_{1/2}\leftrightarrow3d\ {}^2D_{5/2}$ is **forbidden**. The single-electron change $p\to d$ and parity reversal are permitted, but the total angular momentum changes by $\Delta J=2$, outside the E1 range.

**(c)** $3s3p\ {}^3P_1\leftrightarrow3p^2\ {}^1D_2$ is **forbidden** in pure LS coupling. The total spin changes from $S=1$ to $S=0$, violating $\Delta S=0$, although an orbital change $3s\to3p$, opposite parity, and acceptable L and J changes are possible.

**(d)** $2p3p\ {}^3D_1\leftrightarrow3p4d\ {}^3F_2$ is **allowed** by the stated rules. One electron changes $2p\to4d$, satisfying $\Delta l=+1$ and reversing parity. Moreover, $\Delta S=0$, $\Delta L=+1$, and $\Delta J=+1$.

**(e)** $2p^2\ {}^3P_0\leftrightarrow2p3s\ {}^3P_0$ is **forbidden** because an E1 transition between $J=0$ and $J=0$ is excluded. The permissible single-electron change $2p\to3s$ does not remove this restriction.

**(f)** $3s2p\ {}^1P_1\leftrightarrow2p3p\ {}^1P_1$ is **allowed**. The changing electron undergoes $3s\to3p$ and parity reverses. Both states have $S=0,L=1,J=1$, so the total quantum-number selection rules are met.

**(g)** $2s3p\ {}^3P_0\leftrightarrow3p4d\ {}^3P_1$ is **forbidden**. The only spectator choice leaves $3p$ unchanged and requires $2s\to4d$ with $\Delta l=2$; both configurations also have odd parity.

**(h)** $1s^2\ {}^1S_0\leftrightarrow2s2p\ {}^1P_1$ is **forbidden** in the single-configuration electric-dipole approximation. Both occupied electrons would have to change orbitals; the one-electron dipole operator does not connect these two determinants directly.

**(i)** $2p3p\ {}^3S_1\leftrightarrow2p4d\ {}^3D_2$ is **forbidden** in LS coupling because $L=0\to2$ gives $\Delta L=2$, despite the allowed $3p\to4d$ single-electron change and opposite parity.

**(j)** $2p^3\ {}^2D_{3/2}\leftrightarrow2p^3\ {}^2D_{1/2}$ is **forbidden** under E1 rules because both states have the same configuration and parity. **The printed label ${}^2D_{1/2}$ is also formally inconsistent**: for $L=2,S=1/2$, only $J=3/2$ and $J=5/2$ exist. The selection-rule conclusion is independent of how this apparent typographical error is resolved.

Therefore **only (d) and (f)** are allowed by all the E1 selection rules in the stated single-configuration LS approximation.

---

## 16. 本章必记知识、易混点和自检

### 16.1 最重要的公式

$$
\boxed{\mathbf L=\sum_i\mathbf l_i,\qquad\mathbf S=\sum_i\mathbf s_i,\qquad\mathbf J=\mathbf L+\mathbf S}
$$

$$
\boxed{{}^{2S+1}L_J,\qquad J=|L-S|,|L-S|+1,\ldots,L+S}
$$

$$
\boxed{\hat{\mathbf J}^2\to J(J+1)\hbar^2,\qquad J_z\to M_J\hbar}
$$

$$
\boxed{P=(-1)^{\sum_i l_i}}
$$

$$
\boxed{g_{\rm term}=(2L+1)(2S+1),\qquad g_J=2J+1}
$$

$$
\boxed{g_{\rm term}=\sum_{J=|L-S|}^{L+S}(2J+1)}
$$

$$
\boxed{\Delta E_J=\tfrac A2[J(J+1)-L(L+1)-S(S+1)],\qquad E_J-E_{J-1}=AJ}
$$

$$
\boxed{\Delta E_{\rm Zeeman}=\mu_Bg_J M_JB\quad\text{(weak field, good LSJ)}}
$$

$$
\boxed{\text{E1: parity reverses},\quad\Delta S=0,\quad\Delta L=0,\pm1,\quad\Delta J=0,\pm1}
$$

上述 E1 摘要还需记：$L=0\leftrightarrow0$、$J=0\leftrightarrow0$ 禁止；单电子 $\Delta l=\pm1$；单组态近似下只有一个电子直接换轨道。

### 16.2 最易混淆的八对概念

| 容易混的概念 | 正确区分 |
|---|---|
| 单电子 p vs 整原子 P | p 对应 $l=1$；P 对应 $L=1$ |
| Pauli vs Hund | Pauli 限制**允许态**；Hund 判断允许态中**能量相对高低** |
| singlet vs 单纯 $\uparrow\downarrow$ | singlet 是**反对称线性组合**，triplet 的 $M_S=0$ 也涉及上下箭头 |
| LS term vs J level | term 定义 $L,S$；level 进一步固定 $J$ |
| $g_{\rm term}$ 乘法 vs level 加法 | 同时独立的 $M_L,M_S$ 选择相乘；不同 $J$ 分类相加 |
| $\Delta l$ vs $\Delta L$ | 单电子 $l$ 的 E1 跳跃要求 $\pm1$；整个原子的 $\Delta L=0$ 可以允许 |
| fine vs hyperfine | fine：电子 $\mathbf L$ 与 $\mathbf S$ 等；hyperfine：核 $\mathbf I$ 与电子 $\mathbf J$ |
| forbidden vs impossible | forbidden 常专指 E1 禁戒，M1/E2 等仍可能发生 |

### 16.3 自测（先做后看答案）

1. $2p3s$ 可以有 ${}^3P_2$ 吗？它的 parity 是什么？
2. 为什么 ${}^3P$ term 的 degeneracy 是 9，而三个 J levels 合起来也恰好是 9？
3. $2p^4$ 为什么与 $2p^2$ 有相同 LS term，但 Hund 最低 J 顺序可能不同？
4. $3s\to4s$ 作为 E1 单电子跃迁违反哪些条件？
5. [O III] 5007 和 4959 为何同时存在？21 cm 又是 fine 还是 hyperfine？

**参考答案**

1. 可以：${}^3P_2^{\rm o}$，因为 $L=S=1\Rightarrow J=0,1,2$，parity $=(-1)^{1+0}=-1$。
2. $M_L$ 有 3 种、$M_S$ 有 3 种，共 $3\times3=9$；重组为 $J=0,1,2$ 后是 $1+3+5=9$。
3. $p^4$ 有两个空穴，其状态分类与两个 p 电子相同；但超过半满，Hund 第三规则选最高 J 最低。
4. $\Delta l=0$、宇称不变、$L=0\leftrightarrow0$。
5. 同一 ${}^1D_2$ 可分别到 ${}^3P_2$ 和 ${}^3P_1$，终态能量不同；21 cm 来自质子—电子自旋超精细分裂。

### 16.4 复习建议

- 首先能独立解释 $L,S,J$ 和 ${}^{2S+1}L_J$ 的来源；不能只背符号。
- 然后手算 $2p3s$ 的 12 个态、$3p4p$ 的 36 个态。
- 再理解 $2p^4$ 的 2-hole 图景与 Hund 规则“选最低，而非筛掉其他项”。
- 最后按 parity → single-electron change → $S,L,J$ 的顺序检查 E1 选择定则，能从矩阵元为零的角度解释至少一条规则。

---

## 17. 参考资料

1. Marten van Kerkwijk, **AST1440 – Radiation (2026)**，2026-11-23 的阅读与习题安排：<https://www.astro.utoronto.ca/~mhvk/AST1440/>。
2. G. B. Rybicki & A. P. Lightman, *Radiative Processes in Astrophysics*，Chs. 9–10；§9.3、§9.4（止于 Zeeman effect）、§10.4；Problems 9.2、9.3、10.1、10.2。教材官方出版信息：<https://www.wiley.com/en-us/radiative-processes-in-astrophysics-p-9783527414499>。可检索教材 PDF（问题原文查核）：<https://www.bartol.udel.edu/~owocki/phys633/RadProc-RybLightman.pdf>。
3. Electron configuration：<https://en.wikipedia.org/wiki/Electron_configuration>；Term symbol：<https://en.wikipedia.org/wiki/Term_symbol>。
4. Storey & Zeippen, 2000, *MNRAS*, [O III] 5007/4959 branching ratio: <https://academic.oup.com/mnras/article/312/4/813/1017382>；[O III] 谱线的机制与数值例：<https://www.mdpi.com/2073-8994/14/2/266>。
5. NRAO, *Essential Radio Astronomy*，H I 21-cm hyperfine transition：<https://www.cv.nrao.edu/~sransom/web/Ch7.html>。

> **关于示意图**：本文插图由本次笔记重新绘制，均为概念图；能级距离、谱线峰高一般不按实际观测比例。
