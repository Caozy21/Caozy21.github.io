---
title: "AST1440｜原子结构、电偶极跃迁、选择定则与习题 RL 9.1 / 10.6"
description: "从 Schrödinger 方程出发，讲解原子轨道、宇称、Pauli 原理和交换关联，并推导电偶极跃迁、Einstein 系数与选择定则，含 RL 习题 9.1 和 10.6 的完整解答。"
date: "2026-11-23"
tags: ["AST1440","Atomic structure","Electric dipole transitions","Selection rules","Exercises"]
order: 20
draft: false
---

# AST1440｜原子结构、电偶极跃迁、选择定则与习题 RL 9.1 / 10.6

> **课程**：AST1440 — Radiation\
> **预习日期**：2026-11-23（对应 2026-11-19 的 *Atoms and dipole transitions* 阅读安排）\
> **教材**：Rybicki & Lightman，*Radiative Processes in Astrophysics*，§9.1–9.2、§9.3 开头约 1.2 页、§10.1–10.4。\
> **指定习题**：RL **9.1**、**10.6**（注意：**Problem 10.6** 不是 **§10.6 Line Broadening**）。\
> **学习方式**：先建立物理图像，再看公式从哪里来；数学推导保留关键步骤，不要求一开始就熟练掌握所有量子力学技术。含示意图、所有追问要点、中文逐步解答和英文详细答案。\
> **图片说明**：原笔记的插图已嵌入下文。

---

## 0. 本节的主线：从电子云到光谱线

1. **Schrödinger equation → atomic orbitals**：原子有哪些允许的电子量子态？
2. **Antisymmetrization → exchange correlation**：多电子原子为什么必须考虑 Pauli 原理？
3. **Interaction with light → radiative transitions**：原子与光子如何耦合？
4. **Matrix elements + symmetry → selection rules**：为什么有的谱线会出现、有的跃迁在 E1 近似下不允许？
5. **Einstein coefficients → transition rates**：一个允许的跃迁以多大的速率发生？

最核心的区分：

- **能级差**决定光子的频率：$h\nu=E_i-E_f$（发射时 $E_i>E_f$）。
- **跃迁矩阵元**决定电偶极耦合是否为零及其强弱。
- **Einstein 系数**描述自发辐射、吸收和受激辐射的速率。

---

## 1. RL §9.1–9.2：原子轨道是怎么来的？

### 1.1 电子不是沿一条确定轨道绕核运动的小球

量子态由波函数 $\psi(\mathbf r)$ 描述；$|\psi(\mathbf r)|^2$ 是空间概率密度。归一化要求

$$
\int |\psi(\mathbf r)|^2\,d^3r=1.
$$

定态满足时间无关 Schrödinger 方程：

$$
\boxed{\hat H\psi=E\psi},\qquad
\hat H=-\frac{\hbar^2}{2m_e}\nabla^2+V(r).
$$

这里我们先考虑中心势 $V(r)$，也就是势能只与离核距离 $r$ 有关。**允许的边界条件**使束缚态能量离散，类似乐器琴弦的驻波只有某些允许的振动模式。

对于类氢原子（单电子、纯 Coulomb 势），忽略精细结构等修正：

$$
\boxed{E_n=-\frac{13.6 Z^2}{n^2}\ \mathrm{eV}}.
$$

这里 $Z$ 为核电荷数。相同 $n$ 的不同 $l,m$ 态在这个理想模型中简并；多电子原子及更精细的相互作用会打破某些简并。

### 1.2 三个空间量子数，以及一个自旋量子数

中心势中可分离变量：

$$
\boxed{\psi_{nlm}(r,\theta,\phi)=R_{nl}(r)Y_l^m(\theta,\phi)}.
$$

| 量子数 | 取值 | 作用 | 常见记法 |
|---|---|---|---|
| $n$ | $1,2,3,\ldots$ | 能级与典型尺度 | 1s、2p、3d 中的数字 |
| $l$ | $0,1,\ldots,n-1$ | 轨道角动量与角向结构 | $0=s,\ 1=p,\ 2=d,\ 3=f$ |
| $m$ | $-l,\ldots,l$ | $L_z=m\hbar$；绕 $z$ 轴的相位结构 | $2l+1$ 种取值 |
| $m_s$ | $\pm\tfrac12$ | 电子自旋投影 | $\uparrow,\downarrow$ |

角动量满足 $L^2=l(l+1)\hbar^2$。球谐函数具有重要形式：

$$
\boxed{Y_l^m(\theta,\phi)=F_{lm}(\theta)e^{im\phi}}.
$$

**后面推导 $\Delta m$ 的选择定则，几乎全靠这个 $e^{im\phi}$。**

### 1.3 s、p、d 轨道究竟是什么形状？

![s、p、d 轨道的定性示意图](/learning/radiation/atomic-structure/atomic_orbitals.svg)

**注意图中颜色表示波函数的正负相位，不是电子电荷的正负。** 轨道不是经典运行轨迹，而是一个单电子量子态；绘制出来的瓣状图一般是固定波函数大小的等值面或定性示意。

### 1.4 追问：为什么有 $d_{x^2-y^2}$，却只写 $d_{z^2}$？

这个疑问很重要：球对称原子并没有理由“偏爱” $z$ 轴。**我们只是选了一组方便的轨道基底**。

五个常用的实 $d$ 轨道，其角向部分（忽略常数与公共 $1/r^2$ 因子）可写作：

$$
\begin{aligned}
d_{xy}&\propto xy,\\
d_{xz}&\propto xz,\\
d_{yz}&\propto yz,\\
d_{x^2-y^2}&\propto x^2-y^2,\\
d_{z^2}&\propto 3z^2-r^2=2z^2-x^2-y^2.
\end{aligned}
$$

最后一个轨道通常简称 $d_{z^2}$，**但它不是简单的 $z^2$ 函数**。

你提出的 $z^2-x^2$ 完全可以用作 $d$ 型角向波函数，因为

$$
\boxed{
 z^2-x^2=\tfrac12[(2z^2-x^2-y^2)-(x^2-y^2)].
}
$$

它只是标准基底的线性组合，不是第六个独立的 $d$ 轨道。因为 $l=2$ 的空间维数只有 $2l+1=5$。同理，$2x^2-y^2-z^2$ 与 $2y^2-x^2-z^2$ 也可以定义；三者相加为零，因此不能当作三个相互独立的新方向。

我们常选 $z$ 轴来定义 $L_z$ 本征态，是**坐标约定**。对于孤立球对称原子，整体旋转只是等价描述。

---

## 2. 宇称 parity：为什么波函数的正负号如此重要？

### 2.1 从一维函数开始

所谓宇称，就是把空间坐标同时反过来，观察**函数本身**是否变号。

- 偶宇称：$f(-x)=f(x)$，例如 $x^2$。
- 奇宇称：$f(-x)=-f(x)$，例如 $x$。
- $x+1$ 则不具有确定宇称。

![偶、奇与无确定宇称的函数示意](/learning/radiation/atomic-structure/parity.svg)

三维空间反演是：

$$
(x,y,z)\longmapsto(-x,-y,-z).
$$

对中心势轨道，球谐函数有

$$
\boxed{\psi_{nlm}(-\mathbf r)=(-1)^l\psi_{nlm}(\mathbf r)}.
$$

所以 s、d 为**偶**宇称，p、f 为**奇**宇称。

### 2.2 为什么 p 波函数是奇宇称，概率云看起来仍对称？

因为概率密度的符号被平方掉：

$$
|\psi(-\mathbf r)|^2=|\psi(\mathbf r)|^2.
$$

所以即使 p 轨道两个瓣代表相反相位，两个瓣的**概率密度**依然关于原点对称。**计算量子跃迁时不能仅看 $|\psi|^2$；必须看带相位的 $\psi$。**

### 2.3 最有用的积分结论

奇函数在对称区间的积分为零：

$$
\boxed{\int_{-a}^{a}f_{\rm odd}(x)\,dx=0}.
$$

物理上：左右位置的贡献符号相反，因此**相干抵消**。这将直接解释 s→s 的 E1 跃迁为什么消失。

---

## 3. RL §9.3 开头：Pauli 原理与多电子波函数

### 3.1 电子是全同费米子

交换两个电子的**所有标签（位置与自旋）**，总波函数要反号：

$$
\boxed{\Psi(1,2)=-\Psi(2,1)}.
$$

设两个正交、归一化的单电子自旋轨道为 $u_a,u_b$，则

$$
\boxed{\Psi(1,2)=\frac1{\sqrt2}[u_a(1)u_b(2)-u_b(1)u_a(2)]}.
$$

这就是最简单的 Slater determinant（Slater 行列式）。如果 $a=b$，右边为零：不能有两个费米子占据完全相同的单粒子自旋轨道。

![两个电子交换分配及反对称组合](/learning/radiation/atomic-structure/exchange_assignments.svg)

**记号解释**：$u_a(1)$ 就是把轨道 $a$ 的波函数在电子 1 的坐标处求值；$u_b(2)$ 则是轨道 $b$ 在电子 2 的坐标处求值。它们并不意味着电子具有可追踪的固定标签。

### 3.2 Exchange hole 不是另一种电磁力

对于自旋相同的两电子，空间部分必须反对称。两电子位置相同时，空间反对称波函数为零：

$$
\Psi(\mathbf r,\mathbf r)=0
\qquad\text{（对相同自旋而言）}.
$$

所以相同位置附近会出现**联合概率的亏损**，称为 exchange hole。即使完全忽略电子间 Coulomb repulsion，也有这种统计关联；它来自波函数反对称化，而不是新的经典斥力。

这里不要把两个概念混淆：

- **Coulomb repulsion**：真实的电荷相互作用。
- **Exchange correlation**：全同费米子波函数的量子统计效应。

---

## 4. RL §10.1–10.2：原子怎样与光相互作用？E1 到底是什么？

### 4.1 发射光子的能量来自能级差

一个初态 $|i\rangle$ 变到末态 $|f\rangle$，若 $E_i>E_f$，发射光子：

$$
\boxed{h\nu=E_i-E_f}.
$$

**但能级差允许某个光子频率，并不保证该跃迁可以发生。** 是否能发生、发生多快，还要看原子与电磁场的相互作用。

### 4.2 Electric dipole（电偶极）是什么意思？

对电荷分布，偶极矩定义为

$$
\mathbf d=\sum_i q_i\mathbf r_i.
$$

以氢原子的原子核为原点，电子贡献为 $\mathbf d=-e\mathbf r$。在光的波长远大于原子尺度时，原子大小范围内的电场几乎不变化：

$$
ka_0\ll1,\qquad k=\frac{2\pi}{\lambda}.
$$

于是相互作用 Hamiltonian 近似为

$$
\boxed{H_{\rm int}\simeq-\mathbf d\cdot\mathbf E(t)}.
$$

这叫 **electric dipole approximation**，简称 **E1**：它是原子与辐射电场耦合的最低阶、通常最强的一类多极相互作用。

**E1 不是“自发辐射”的另一个名字。** E1 描述的是*耦合机制*，自发辐射 / 受激辐射 / 吸收描述的是*发生过程*。

### 4.3 跃迁矩阵元：量子态之间“能否耦合”

量子力学里，相互作用导致 $i\to f$ 的跃迁振幅正比于

$$
\boxed{
\mathbf d_{fi}=\langle f|\mathbf d|i\rangle
=-e\int\psi_f^*(\mathbf r)\,\mathbf r\,\psi_i(\mathbf r)\,d^3r.
}
$$

**为什么积分？** 因为电子不是位于一个确定点；它的波函数遍布空间。每个位置对跃迁提供一个**有相位的振幅**。我们必须把整个空间所有位置的贡献**相干相加**，数学操作就是积分。某些位置的振幅可能互相抵消，使结果恰好为零。

- 若 $\mathbf d_{fi}=0$：这两个态之间的 E1 耦合为零，E1 跃迁禁止。
- 若 $\mathbf d_{fi}\ne0$：E1 跃迁在对称性上可能允许；速率与矩阵元平方有关。

**常见误区**：两态的平均静态偶极矩 $\langle i|\mathbf d|i\rangle$、$\langle f|\mathbf d|f\rangle$ 可以都为零，但**跃迁偶极矩** $\langle f|\mathbf d|i\rangle$ 仍可以不为零。

### 4.4 用宇称理解 2s→1s 和 2p→1s

E1 的矩阵元含 $\psi_f^*\mathbf r\psi_i$，其中 $\mathbf r$ 是奇宇称。

- **2s→1s**：偶 × 奇 × 偶 = 奇，全空间积分为零，**E1 禁止**。
- **2p→1s**：偶 × 奇 × 奇 = 偶，宇称不迫使它为零；若其他条件满足，则 **E1 允许**。

E1 禁止并不等于“绝对不会衰变”。例如氢原子的 2s→1s 可以通过**双光子衰变**；另有 M1（磁偶极）、E2（电四极）等更高阶单光子辐射机制（是否允许取决于相应选择定则）。

---

## 5. RL §10.3：Einstein A/B coefficients 快速复习

![自发辐射、吸收、受激辐射三种过程](/learning/radiation/atomic-structure/einstein_processes.svg)

令 $E_2>E_1$，相应谱线频率满足 $h\nu=E_2-E_1$。若 $u_\nu$ 表示**单位频率的辐射能量密度**，那么在窄谱线近似下，对一个处于对应能级的原子：

| 物理过程 | 单原子速率 | 是否可属于 E1？ |
|---|---|---|
| 自发辐射 $2\to1$ | $A_{21}$ | 可以 |
| 吸收 $1\to2$ | $B_{12}u_\nu$ | 可以 |
| 受激辐射 $2\to1$ | $B_{21}u_\nu$ | 可以 |

严格考虑有限谱线轮廓时，要对频率加权积分。这里的定义与 RL 中采用的 $u_\nu$ 约定一致。

热平衡中，上跃迁与下跃迁数目相等：

$$
n_1 B_{12}u_\nu=n_2(A_{21}+B_{21}u_\nu).
$$

同时 Boltzmann 分布给出

$$
\frac{n_2}{n_1}=\frac{g_2}{g_1}e^{-h\nu/k_BT}.
$$

与 Planck 黑体能量密度比较，得到 Einstein relations：

$$
\boxed{g_1B_{12}=g_2B_{21}},\qquad
\boxed{\frac{A_{21}}{B_{21}}=\frac{8\pi h\nu^3}{c^3}}.
$$

对真空中单个初、末态的电偶极自发辐射：

$$
\boxed{A_{if}^{\rm(E1)}=\frac{\omega_{if}^3}{3\pi\epsilon_0\hbar c^3}|\mathbf d_{fi}|^2},\qquad \omega_{if}=\frac{E_i-E_f}{\hbar}>0.
$$

因此 selection rules 与 Einstein coefficients 联系在一起：**矩阵元为零意味着这一路 E1 的 A/B 耦合为零**。对于存在多个衰变通道的上能级，总自发衰变率为 $\sum_f A_{if}$，对应平均寿命约为 $\tau=1/\sum_f A_{if}$。

黑体辐射中，单个上能级原子的受激辐射与自发辐射速率之比：

$$
\boxed{\frac{B_{21}u_\nu}{A_{21}}=\frac{1}{e^{h\nu/k_BT}-1}}.
$$

这就是对应模式的平均光子占据数；相对而言低频 / 高光子占据时受激辐射更重要。

**Oscillator strength** $f_{if}$ 是描述谱线强度的无量纲量；对单电子、单个态间的吸收跃迁（频率 $\omega_{fi}>0$），常用写法为

$$
f_{if}=\frac{2m_e\omega_{fi}}{3\hbar e^2}|\mathbf d_{fi}|^2.
$$

不同教材可能对简并态求和或平均，需留意所用约定。预习阶段只需理解：**频率由能级差定，强弱由跃迁矩阵元定**。

> **进一步提醒**：RL §10.1 的半经典理论将原子量子化、辐射场经典化，可直接计算吸收和受激过程；要从头解释“无外来光场时为何还会自发辐射”，需要量子化辐射场。半经典结果可以通过 Einstein relations 获得相应的 A 系数。

---

## 6. RL §10.4：E1 selection rules 为什么是这样？

对于中心势中的单电子轨道，E1 必要的角向选择定则为

$$
\boxed{\Delta l=\pm1,\qquad \Delta m=0,\pm1}.
$$

这两条是**不同的对称性约束**，最好分开理解。

### 6.1 先理解 $\Delta m$：为什么特别计算 $\phi$ 积分？

从位置矩阵元出发：

$$
\langle f|z|i\rangle
=\int\psi_f^*(r,\theta,\phi)\,(r\cos\theta)\,\psi_i(r,\theta,\phi)\,r^2dr\sin\theta\,d\theta\,d\phi.
$$

又因 $Y_l^m\propto e^{im\phi}$，其中末态有复共轭 $e^{-im_f\phi}$，而 $z=r\cos\theta$ **没有** $\phi$ 依赖，所以 $\phi$ 方向的积分独立分离为

$$
\boxed{I_\phi=\int_0^{2\pi}e^{i(m_i-m_f)\phi}\,d\phi}.
$$

**为什么要看积分，而不是看某一个 $\phi$ 处的数值？**

- 跃迁矩阵元是在整个三维空间上求和；$\phi$ 是其中一个角坐标。
- 不同方位的波函数有不同**复数相位**。
- 把 $\phi=0\to2\pi$ 的一整圈贡献加在一起，才知道相位是否完全抵消。

![方位角相位累加及抵消示意](/learning/radiation/atomic-structure/phi_phase_cancellation.svg)

设 $k=m_i-m_f$，这是整数。分别考虑：

若 $k=0$：

$$
\int_0^{2\pi}1\,d\phi=2\pi.
$$

若 $k\ne0$：

$$
\int_0^{2\pi}e^{ik\phi}\,d\phi
=\left[\frac{e^{ik\phi}}{ik}\right]_0^{2\pi}
=\frac{e^{i2\pi k}-1}{ik}=0.
$$

所以

$$
\boxed{I_\phi=2\pi\,\delta_{m_i,m_f}}.
$$

**结论：$z$ 分量要求 $\Delta m=0$。**

那为什么还允许 $\pm1$？因为

$$
x\pm iy=r\sin\theta e^{\pm i\phi}.
$$

于是对 $x\pm iy$ 的角向积分，其相位因子变成

$$
e^{-im_f\phi}e^{\pm i\phi}e^{im_i\phi}
=e^{i(m_i-m_f\pm1)\phi}.
$$

为避免相消，就要求 $m_f=m_i\pm1$。合并三种电偶极算符分量：

$$
\boxed{\Delta m=0,\pm1}.
$$

注意：$\phi$ 积分不为零只是必要条件，$r$ 和 $\theta$ 的其他积分仍有可能为零。

### 6.2 再理解 $\Delta l$：parity + angular momentum

角动量 $l$ 为确定值的轨道宇称为 $(-1)^l$，而 $\mathbf r$ 为奇宇称。矩阵元要不被宇称强制为零，必须满足

$$
(-1)^{l_f}\cdot(-1)\cdot(-1)^{l_i}=+1,
$$

即 $l_f+l_i$ 为奇数。它排除 $\Delta l=0,\pm2,\ldots$，但单靠 parity **还不能**排除 $\Delta l=\pm3,\pm5,\ldots$。

第二条限制来自 $\mathbf r$ 的角向结构是**秩 1 球张量**，或者说与一个角动量 $1$ 的球谐函数 $Y_1^q$ 相关。耦合角动量要求三角条件：

$$
|l_i-1|\le l_f\le l_i+1.
$$

即只剩 $l_f=l_i-1,l_i,l_i+1$。再结合**宇称必须翻转**，排除 $l_f=l_i$，得到

$$
\boxed{\Delta l=\pm1}.
$$

若暂时不熟悉角动量耦合，可以记住如下球谐函数性质：

$$
\cos\theta\,Y_l^m
=a_{l+1,m}Y_{l+1}^m+a_{l-1,m}Y_{l-1}^m,
$$

其中 $a$ 是由 $l,m$ 决定的系数（有些边界情况下某一项为零）。这表示 **乘上 $z/r=\cos\theta$ 之后，角向模式只连接 $l\pm1$**。这是同一选择定则的更具体数学表达。

### 6.3 判断例子

| 跃迁 | $\Delta l$ | E1 是否允许？ | 原因 |
|---|---:|---|---|
| $2s\to1s$ | $0$ | 不允许 | 宇称不变，E1 矩阵元为零 |
| $2p\to1s$ | $-1$ | 允许 | 存在满足 $\Delta m$ 条件的子态 |
| $3d\to2p$ | $-1$ | 允许 | 存在满足 $\Delta m$ 条件的子态 |
| $3d\to1s$ | $-2$ | 不允许 | 不满足 $\Delta l=\pm1$ |
| $3p\to1s$ | $-1$ | 允许 | 尽管 $\Delta n=-2$，但 E1 不限制 $\Delta n=\pm1$ |

这里“允许”指**存在允许的磁子态组合**；对于指定 $m_i,m_f$ 的跃迁还需要逐一检查。允许不等于保证径向矩阵元必定非零。

---

## 7. RL Problem 9.1：双电子的平均平方距离与交换项（中文详细推导）

### 7.1 先把题意讲清楚

两个电子占据正交单电子自旋轨道 $a,b$。忽略二者间静电斥力，计算其平均**平方**间距

$$
\boxed{R^2=|\mathbf r_1-\mathbf r_2|^2=r_1^2+r_2^2-2\mathbf r_1\cdot\mathbf r_2}.
$$

题目 (a)–(d) 要求你证明交换项、用宇称把单轨道平均位置消去、分析不同自旋情形，再比较平均平方间距。严格比较的是 $\langle R^2\rangle$，不能未经额外证明直接替换为 $\langle R\rangle$。

### 7.2 前置：$u_a(1)u_b(2)$ 和“期望值”是什么？

$u_a(1)=u_a(\mathbf r_1,s_1)$、$u_b(2)=u_b(\mathbf r_2,s_2)$。若把 $s$ 暂时略去，就像概率论中的联合振幅；归一化后 $|\Psi(\mathbf r_1,\mathbf r_2)|^2$ 才是两电子联合概率密度。

对单粒子，普通位置期望值是

$$
\langle x\rangle=\int\psi^*(x)x\psi(x)\,dx
=\int x|\psi(x)|^2dx.
$$

对两个粒子，$\langle x_1x_2\rangle$ 就是对 $x_1,x_2$ **都积分**。用 $d\tau$ 表示位置积分与离散自旋求和的总操作。

### 7.3 (a) 为什么展开后会出现 Direct 和 Exchange 两种项？

定义两种分配振幅：

$$
A=u_a(1)u_b(2),\qquad B=u_b(1)u_a(2),
$$

并取反对称波函数

$$
\Psi=\frac{A-B}{\sqrt2}.
$$

我们最需要算的是交叉位置期望值 $\langle\mathbf r_1\cdot\mathbf r_2\rangle$。为简化记号，先把算符记作 $O=\mathbf r_1\cdot\mathbf r_2$。那么

$$
\begin{aligned}
\langle O\rangle
&=\int\Psi^*O\Psi\,d\tau_1d\tau_2\\
&=\tfrac12\int(A^*-B^*)O(A-B)\,d\tau_1d\tau_2\\
&=\tfrac12\big(I_{AA}-I_{AB}-I_{BA}+I_{BB}\big).
\end{aligned}
$$

**为什么四项？** 仅仅是普通代数 $(a-b)(c-d)=ac-ad-bc+bd$。这里 $I_{AB}=\int A^*OB$ 等。

#### Direct term：$A^*OA$ 与 $B^*OB$

先看 $I_{AA}$：

$$
\begin{aligned}
I_{AA}
&=\int u_a^*(1)u_b^*(2)(\mathbf r_1\cdot\mathbf r_2)u_a(1)u_b(2)\,d\tau_1d\tau_2\\
&=\Big(\int u_a^*(1)\mathbf r_1u_a(1)\,d\tau_1\Big)
 \cdot\Big(\int u_b^*(2)\mathbf r_2u_b(2)\,d\tau_2\Big)\\
&=\mathbf r_a\cdot\mathbf r_b.
\end{aligned}
$$

这里 $\mathbf r_a\equiv\langle a|\mathbf r|a\rangle$，$\mathbf r_b\equiv\langle b|\mathbf r|b\rangle$。**为什么能分成两重积分的乘积？** 因为一个因子只含粒子 1 的变量，另一个只含粒子 2 的变量。类似概率论里独立随机变量乘积的期望值分解。

显然 $I_{BB}=\mathbf r_a\cdot\mathbf r_b$。

#### Exchange term：$A^*OB$ 与 $B^*OA$

这回一边是 $A$，另一边是 **交换过标签的** $B$：

$$
\begin{aligned}
I_{AB}
&=\int u_a^*(1)u_b^*(2)(\mathbf r_1\cdot\mathbf r_2)u_b(1)u_a(2)\,d\tau_1d\tau_2\\
&=\left(\int u_a^*\mathbf r u_b\,d\tau\right)
\cdot\left(\int u_b^*\mathbf r u_a\,d\tau\right).
\end{aligned}
$$

定义**非对角**位置矩阵元

$$
\mathbf r_{ab}=\langle a|\mathbf r|b\rangle,
\qquad
\mathbf r_{ba}=\langle b|\mathbf r|a\rangle.
$$

由于 $\mathbf r$ 是 Hermitian operator，$\mathbf r_{ba}=\mathbf r_{ab}^*$，故

$$
I_{AB}=\mathbf r_{ab}\cdot\mathbf r_{ab}^*=|\mathbf r_{ab}|^2,
\qquad I_{BA}=|\mathbf r_{ab}|^2.
$$

**一定注意负号**：$I_{AB}$ 自身是正的模平方，但它在 $(A^*-B^*)O(A-B)$ 的展开式里带负号。因此

$$
\begin{aligned}
\langle\mathbf r_1\cdot\mathbf r_2\rangle
&=\tfrac12\left[2\mathbf r_a\cdot\mathbf r_b-2|\mathbf r_{ab}|^2\right]\\
&=\boxed{\mathbf r_a\cdot\mathbf r_b-|\mathbf r_{ab}|^2}.
\end{aligned}
$$

另外，单粒子平方项给出

$$
\langle r_1^2+r_2^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b.
$$

所以 (a) 最终结果：

$$
\boxed{
\langle R^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b
-2\mathbf r_a\cdot\mathbf r_b+2|\mathbf r_{ab}|^2.
}
$$

**最朴素的解释**：直接项表示轨道与自身的平均位置；交换项表示两个“粒子-轨道分配方案”之间的**量子干涉**。经典相加概率没有这一项；只有先把**振幅** $A-B$ 相减，再取模平方 / 求期望值，才有交叉项。

### 7.4 (b) 用宇称证明 $\mathbf r_a=\mathbf r_b=0$

若轨道 $a$ 有确定宇称，$|u_a(\mathbf r)|^2$ 在反演下不变，位置 $\mathbf r$ 则反号，因此

$$
\mathbf r_a=\int u_a^*\mathbf r u_a\,d\tau=0.
$$

对 $b$ 同理，于是

$$
\boxed{\langle R^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b+2|\mathbf r_{ab}|^2}.
$$

### 7.5 (c) 为什么不同自旋使 $\mathbf r_{ab}=0$？

令 $u_a=\phi_a(\mathbf r)|\uparrow\rangle$、$u_b=\phi_b(\mathbf r)|\downarrow\rangle$。因为位置算符不改变自旋，

$$
\begin{aligned}
\mathbf r_{ab}
&=\langle\phi_a|\mathbf r|\phi_b\rangle\langle\uparrow|\downarrow\rangle\\
&=0.
\end{aligned}
$$

其中 $\langle\uparrow|\downarrow\rangle=0$ 是正交性。于是

$$
\boxed{\langle R^2\rangle_{\rm opposite}=\langle r^2\rangle_a+\langle r^2\rangle_b}.
$$

这里并不是说不同自旋的**总电子波函数不必反对称**；仍然反对称，只是此算符对应的交叉项因自旋正交而消失。

### 7.6 (d) 比较同自旋与反向自旋

在相同空间轨道分布、其余条件一致的比较下：

$$
\boxed{
\langle R^2\rangle_{\rm same}-\langle R^2\rangle_{\rm opposite}
=2|\mathbf r_{ab}|^2\ge0.
}
$$

这是 exchange correlation 使同自旋电子的**平均平方间距**不小于对应反向自旋情形的具体例子。$\mathbf r_{ab}$ 在特定对称性下也可能为零，所以是 $\ge0$，不必总是严格大于零。

**联系下一题**：$\mathbf r_{ab}=\langle a|\mathbf r|b\rangle$ 与 E1 矩阵元 $\langle f|\mathbf r|i\rangle$ 在数学上是同一类对象，不过它们在两题中的物理意义不同。

---

## 8. RL Problem 10.6：推导 E1 selection rules（中文详细推导）

题意：推导 RL Eq. (10.40) 的

$$
\Delta l=\pm1,\qquad \Delta m=0,\pm1.
$$

**步骤一：写出位置矩阵元，分离径向、角向积分。**

$$
\begin{aligned}
\langle f|\mathbf r|i\rangle
&=\int_0^\infty R_f^*(r)R_i(r)r^3\,dr\\
&\quad\times\int Y_{l_f}^{m_f*}(\theta,\phi)\,\hat{\mathbf r}\,Y_{l_i}^{m_i}(\theta,\phi)\,d\Omega.
\end{aligned}
$$

径向部分中的 $r^3$ 来自体积元 $r^2drd\Omega$ 与位置算符额外的一个 $r$。**选择定则主要由角向积分控制。**

**步骤二：考虑 $z$ 分量。** $z/r=\cos\theta$ 不含 $\phi$，故

$$
\int_0^{2\pi}e^{i(m_i-m_f)\phi}\,d\phi=2\pi\delta_{m_f,m_i}.
$$

所以 $\Delta m=0$。

**步骤三：考虑 $x\pm iy$ 分量。** 因为 $(x\pm iy)/r=\sin\theta e^{\pm i\phi}$，积分只在 $m_f=m_i\pm1$ 时可能非零。所以

$$
\boxed{\Delta m=0,\pm1}.
$$

**步骤四：利用宇称。** $\mathbf r$ 奇宇称，而 $\psi_{lm}$ 宇称为 $(-1)^l$；非零矩阵元要求 $l_f+l_i$ 为奇数，因此 $\Delta l$ 为奇数。

**步骤五：利用秩 1 球张量的角动量三角条件。** 由于电偶极算符的角向部分等效于 $Y_1^q$，

$$
|l_i-1|\le l_f\le l_i+1.
$$

因此 $\Delta l=0,\pm1$，再与宇称条件取交集，得到

$$
\boxed{\Delta l=\pm1}.
$$

**最终答案：**

$$
\boxed{\Delta l=\pm1,\qquad\Delta m=0,\pm1}.
$$

**可选的高阶写法（无需在预习阶段背诵）**：利用球谐函数的 Gaunt integral，角积分正比于

$$
\begin{pmatrix}l_f&1&l_i\\0&0&0\end{pmatrix}
\begin{pmatrix}l_f&1&l_i\\-m_f&q&m_i\end{pmatrix},\quad q=0,\pm1.
$$

第一个 $3j$ 符号要求三角条件且 $l_f+1+l_i$ 为偶数；第二个要求 $-m_f+q+m_i=0$。它一次性给出相同的两条规则。

---

## 9. Detailed worked solutions in English

> The following are independently written worked explanations of the assigned problem goals, **not verbatim reproductions of the textbook questions**. The mathematical conventions assume normalized, orthogonal spin-orbitals and ordinary electric-dipole coupling between central-potential one-electron states.

### RL Problem 9.1 — Exchange correlation and mean squared separation

**(a) Derive the two-electron mean squared separation.**

Let $u_a$ and $u_b$ be two orthonormal spin-orbitals. The normalized antisymmetric two-electron wavefunction is

$$
\Psi(1,2)=\frac{u_a(1)u_b(2)-u_b(1)u_a(2)}{\sqrt2}.
$$

Define

$$
\mathbf r_a=\langle a|\mathbf r|a\rangle,\quad
\mathbf r_b=\langle b|\mathbf r|b\rangle,\quad
\mathbf r_{ab}=\langle a|\mathbf r|b\rangle.
$$

The squared electron separation is $R^2=r_1^2+r_2^2-2\mathbf r_1\cdot\mathbf r_2$. The expectation value of the one-electron terms is

$$
\langle r_1^2+r_2^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b.
$$

For the two-electron cross term, expand the antisymmetric wavefunction:

$$
\begin{aligned}
\langle\mathbf r_1\cdot\mathbf r_2\rangle
&=\frac12\big[\langle ab|O|ab\rangle-\langle ab|O|ba\rangle\\
&\quad-\langle ba|O|ab\rangle+\langle ba|O|ba\rangle\big],
\quad O=\mathbf r_1\cdot\mathbf r_2.
\end{aligned}
$$

The two direct terms factorize:

$$
\langle ab|O|ab\rangle=\langle ba|O|ba\rangle
=\mathbf r_a\cdot\mathbf r_b.
$$

The two exchange terms also factorize:

$$
\begin{aligned}
\langle ab|O|ba\rangle
&=\langle a|\mathbf r|b\rangle\cdot\langle b|\mathbf r|a\rangle\\
&=\mathbf r_{ab}\cdot\mathbf r_{ab}^*=|\mathbf r_{ab}|^2.
\end{aligned}
$$

The other exchange term is identical. Thus,

$$
\langle\mathbf r_1\cdot\mathbf r_2\rangle
=\mathbf r_a\cdot\mathbf r_b-|\mathbf r_{ab}|^2.
$$

Combining the contributions yields

$$
\boxed{\langle R^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b
-2\mathbf r_a\cdot\mathbf r_b+2|\mathbf r_{ab}|^2.}
$$

The last term originates from interference between the exchanged assignments in the antisymmetric fermion wavefunction.

**(b) Apply definite parity.**

For a central-field orbital with quantum numbers $n,l,m,m_s$, the spatial wavefunction has parity $(-1)^l$. Since the position operator $\mathbf r$ is odd under inversion,

$$
\mathbf r_a=\sum_s\int u_a^*(\mathbf r,s)\,\mathbf r\,u_a(\mathbf r,s)\,d^3r=0,
$$

and similarly $\mathbf r_b=0$. Hence

$$
\boxed{\langle R^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b+2|\mathbf r_{ab}|^2.}
$$

**(c) Consider opposite electron spins.**

Suppose $u_a=\phi_a|\uparrow\rangle$ and $u_b=\phi_b|\downarrow\rangle$. The position operator acts on the spatial part but not on spin. Therefore

$$
\begin{aligned}
\mathbf r_{ab}
&=\langle\phi_a|\mathbf r|\phi_b\rangle
\langle\uparrow|\downarrow\rangle=0,
\end{aligned}
$$

because the opposite spin states are orthogonal. It follows that

$$
\boxed{\langle R^2\rangle_{\rm opposite}
=\langle r^2\rangle_a+\langle r^2\rangle_b.}
$$

This is the result for the corresponding uncorrelated spatial distributions.

**(d) Interpret the exchange correction.**

When the same spatial orbitals are compared, the parallel-spin case has an exchange contribution that is absent from the opposite-spin calculation:

$$
\boxed{\langle R^2\rangle_{\rm parallel}
-\langle R^2\rangle_{\rm opposite}=2|\mathbf r_{ab}|^2\ge0.}
$$

The conclusion concerns the **mean squared separation**. The nonnegative correction illustrates an exchange correlation produced by fermionic antisymmetry, even when electrostatic repulsion is neglected. The correction can vanish for orbital pairs whose position matrix element is zero by symmetry.

### RL Problem 10.6 — Electric dipole selection rules

The one-electron dipole operator is $\mathbf d=-e\mathbf r$. A transition can be electric-dipole allowed only if at least one component of

$$
\langle f|\mathbf r|i\rangle
=\int\psi_{n_fl_fm_f}^*(\mathbf r)\,\mathbf r\,\psi_{n_il_im_i}(\mathbf r)\,d^3r
$$

is nonzero. For a central potential, separate the radial and angular parts using $\psi_{nlm}=R_{nl}Y_l^m$.

**Magnetic quantum number.** The spherical harmonics have $\phi$ dependence $Y_l^m\propto e^{im\phi}$. For $z=r\cos\theta$, the azimuthal integral becomes

$$
\int_0^{2\pi}e^{i(m_i-m_f)\phi}d\phi
=2\pi\delta_{m_i,m_f},
$$

so the $z$ component requires $\Delta m=0$. For the spherical combinations $x\pm iy=r\sin\theta e^{\pm i\phi}$, the corresponding phase integral vanishes unless $m_f=m_i\pm1$. Hence

$$
\boxed{\Delta m=0,\pm1.}
$$

**Orbital angular momentum.** The initial and final spherical harmonics have parities $(-1)^{l_i}$ and $(-1)^{l_f}$. Since the dipole operator has odd parity, a nonvanishing angular integral requires

$$
(-1)^{l_f+l_i+1}=+1,
$$

which implies $l_f+l_i$ is odd. Moreover, each spherical component of the position operator transforms as a rank-one spherical tensor (equivalently, its angular part is proportional to $Y_1^q$). Angular-momentum coupling imposes

$$
|l_i-1|\le l_f\le l_i+1.
$$

This permits $l_f=l_i-1,l_i,l_i+1$, but the parity condition eliminates $l_f=l_i$. Therefore,

$$
\boxed{\Delta l=\pm1.}
$$

Combining the two independent restrictions gives the standard central-field E1 selection rules:

$$
\boxed{\Delta l=\pm1,\qquad\Delta m=0,\pm1.}
$$

These are angular selection rules: satisfying them means the angular factor is not forbidden by these symmetries. The radial integral and other physical constraints must still be considered when evaluating an actual transition strength.

---

## 10. 常见疑问的一句话版

**Q1：$d_{z^2}$ 为什么不与 $d_{x^2-y^2}$ 对称？**\
因为 $d_{z^2}$ 的实际角向形式是 $3z^2-r^2$，只是五个 $d$ 轨道独立基底中的一种选法；$z^2-x^2$ 也合法，不过可写成已有基底的线性组合。

**Q2：电偶极跃迁 E1 就是自发辐射吗？**\
不是。E1 是相互作用的多极类型；自发辐射、吸收与受激辐射是三个不同的过程，均可通过 E1 耦合发生。

**Q3：宇称是什么？**\
空间反演 $\mathbf r\to-\mathbf r$ 后，波函数是保持不变（偶）还是反号（奇）。中心势轨道宇称是 $(-1)^l$。

**Q4：为什么选定则中要算积分？**\
因为跃迁振幅需要把整个空间的波函数贡献相干叠加；一整圈 $\phi$ 的相位若抵消，角向积分就是零，矩阵元也就为零。

**Q5：为什么同自旋电子更“远”？**\
反对称波函数的交叉项使某些相近位置的联合概率相互抵消，形成 exchange hole；这是统计关联，不是额外静电力。

**Q6：为什么 $3d\to1s$ 禁止而 $3d\to2p$ 允许？**\
前者 $\Delta l=-2$，后者 $\Delta l=-1$。E1 的主要角向规则是 $\Delta l=\pm1$。

---

## 11. 本节课必须记住的内容与公式

### 物理主线

- **定态与原子轨道**：Schrödinger 方程、$n,l,m,m_s$、轨道是波函数不是轨迹。
- **宇称**：s/d 偶，p/f 奇；$\mathbf r$ 奇。
- **Pauli 原理**：两个电子的总波函数必须反对称；交换项来自量子振幅的交叉项。
- **E1**：通过电偶极与辐射场耦合；不是自发辐射的同义词。
- **选择定则**：波函数矩阵元的角向积分与对称性决定 E1 能否耦合。
- **A/B**：Einstein 系数给不同辐射过程的跃迁速率。

### 公式速查表

$$
\begin{aligned}
&\boxed{\hat H\psi=E\psi},\qquad
\boxed{\psi_{nlm}=R_{nl}Y_l^m},\\[4pt]
&\boxed{\psi_{nlm}(-\mathbf r)=(-1)^l\psi_{nlm}(\mathbf r)},\\[4pt]
&\boxed{\Psi(1,2)=\frac{u_a(1)u_b(2)-u_b(1)u_a(2)}{\sqrt2}},\\[4pt]
&\boxed{h\nu=E_i-E_f},\qquad
\boxed{H_{\rm int}\simeq-\mathbf d\cdot\mathbf E},\\[4pt]
&\boxed{\mathbf d_{fi}=\langle f|\mathbf d|i\rangle},\\[4pt]
&\boxed{\Delta l=\pm1,\quad\Delta m=0,\pm1},\\[4pt]
&\boxed{g_1B_{12}=g_2B_{21}},\qquad
\boxed{A_{21}/B_{21}=8\pi h\nu^3/c^3},\\[4pt]
&\boxed{\langle R^2\rangle=\langle r^2\rangle_a+\langle r^2\rangle_b-2\mathbf r_a\cdot\mathbf r_b+2|\mathbf r_{ab}|^2}.
\end{aligned}
$$

**一句话收尾**：**能量差决定光子的颜色；矩阵元决定能不能跃迁及其强弱；矩阵元为什么为零，往往可以从对称性看出来。**

---

## 参考资料与本笔记定位

- [U of T AST1440 课程页面（2026-11-19 的阅读范围和两道习题）](https://www.astro.utoronto.ca/~mhvk/AST1440/)
- Rybicki & Lightman, *Radiative Processes in Astrophysics*，§9.1–9.3、§10.1–10.4，Problems 9.1 and 10.6（本笔记为独立整理和推导，不复制教材长段落）。
- [Wikipedia — Atomic orbital](https://en.wikipedia.org/wiki/Atomic_orbital)（用于直观理解轨道和实球谐函数）。

**复习建议**：先看第 1–6 节和图，再用 7、8 节复现计算。RL 9.1 最重要的是理解四项为什么出现和交换项的符号；RL 10.6 最重要的是区分 $\phi$ 正交性、宇称限制和角动量三角条件各自的作用。
