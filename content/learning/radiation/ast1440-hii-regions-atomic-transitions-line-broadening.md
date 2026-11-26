---
title: "AST1440 H II Regions、原子跃迁与谱线展宽：RL §9.4、§10.3、§10.5–10.6 与习题详解"
description: "H II 区的电离、复合、热平衡与谱线诊断，结合 Zeeman 效应、Einstein 系数、振子强度和 Doppler、自然及碰撞展宽，附 RL 习题 10.3、10.4、10.5、10.7 详解。"
date: "2026-11-26"
tags: ["AST1440","H II regions","Atomic transitions","Line broadening","Exercises"]
order: 22
draft: false
---

# AST1440 H II Regions、原子跃迁与谱线展宽：RL §9.4、§10.3、§10.5–10.6 与习题详解

> 课程：University of Toronto，AST1440 — Radiation\
> 课堂：2026-11-26（Thursday）\
> 指定阅读：Rybicki & Lightman（RL）§9.4 剩余、§10.5、§10.6，复习 §10.3。\
> 指定习题：RL 10.3、10.5、10.7；10.4 选做。\
> 整理日期：2026-11-26；基于本次预习、课堂安排更新及用户上传的 398 页原书扫描 PDF。\
> 阅读约定：全文采用 RL 的 Gaussian cgs 单位制（另行标注除外）；$e$ 表示正的基本电荷量。H II 的温度为电子温度，Doppler 展宽中的温度为发射/吸收粒子的动力学温度。

## 本节课的学习路线

教师调整后的课程安排：12:00 同学讨论；12:30 老师讲解 10.5、10.7，强调物理图景，Zeeman 与 fine structure 留给教材和讲义；13:00 介绍 H II regions，主要遵循 Osterbrock & Ferland。**重点是 H II regions 与谱线展宽；原子结构的量子细节作为复习。**

逻辑主线：原子能级 → 跃迁强度 → 电离与复合 → 电离区大小和温度 → 星云发射线 → 谱线宽度 → 天文诊断。

## 原书核对记录

印刷页码 = PDF 文件页码 − 16。本文使用原书章节、题目和书后 Solutions 核对；英文解答为独立推导。H II regions 为本次课堂新增的标准电离星云理论预习（老师未指定 Osterbrock & Ferland 的具体章节，本文不声称逐页复现该书或讲义）。所有图为根据课堂讨论重新制作的原创静态示意图或标明参数的数值图，不是原书扫描插图。

| 内容 | RL 印刷页码 | 核对重点 |
|---|---|---|
| §9.4 剩余 | 256–259 | Eqs. 9.32–9.37、正常/反常 Zeeman、核自旋与 21 cm |
| §10.3 | 274–277 | 振子强度、Eqs. 10.29–10.34 |
| §10.5 | 280–287 | Eqs. 10.42–10.45、10.52–10.55、吸收边、多重线 |
| §10.6 | 287–291 | Eqs. 10.66–10.79、Fig. 10.3 |
| Problems | 292 | 10.3、10.4、10.5、10.7 原文 |
| Solutions | 363–369 | 四题书后推导；10.5 末步系数存在差异，见详解 |

## 目录

1. [Zeeman 与超精细结构](#1-rl-94zeeman精细及超精细结构)
2. [Einstein 系数、振子强度与跃迁](#2-rl-103105einstein-系数振子强度跃迁速率)
3. [H II regions：电离、复合、半径与演化](#3-h-ii-regions形成复合大小和演化)
4. [加热与冷却](#4-heating-and-cooling)
5. [发射线与观测诊断](#5-发射谱线及观测诊断)
6. [谱线展宽](#6-rl-106谱线展宽)
7. [习题及英文详解](#7-rl-习题英文原题中文题意及英文详解)
8. [必记知识点与公式](#8-章末必记知识与公式)

---

## 1. RL 9.4：Zeeman、精细及超精细结构

从总轨道角动量 $\mathbf L$、总自旋 $\mathbf S$、$\mathbf J=\mathbf L+\mathbf S$ 开始。磁矩是粒子与外磁场相互作用的强度和方向；磁相互作用能 $U=-\boldsymbol\mu\cdot\mathbf B$。电子带负电，轨道磁矩与角动量方向相反。Gaussian cgs：

$$
\mu_B=\frac{e\hbar}{2m_ec},\quad \boldsymbol\mu_L=-\mu_B\frac{\mathbf L}{\hbar},\quad \boldsymbol\mu_S\simeq-2\mu_B\frac{\mathbf S}{\hbar}.
$$

自旋 g 因子近似 2，忽略 QED 修正；磁矩总和 $\boldsymbol\mu=-\mu_B(\mathbf L+2\mathbf S)/\hbar$。磁场沿 z，线性磁相互作用 Hamiltonian：

$$
H_B=\frac{\mu_B B}{\hbar}(L_z+2S_z).
$$

### 用户追问：$\Delta E=g_J\mu_B BM_J$ 怎么来的？什么叫远小于精细结构分裂？

一阶微扰：原子内部 spin-orbit coupling 主导，磁场对不同 J 能级的混合很小，在 $|LSJM_J\rangle$ 内取 $H_B$ 期望（在简并 M 子空间按 z 方向对角）。角动量投影定理的半经典图景是 L,S 围绕 J 进动，横向平均为零；量子力学投影系数由标量积决定。

$$
g_J=\frac{\langle(\mathbf L+2\mathbf S)\cdot\mathbf J\rangle}{\langle J^2\rangle}=1+\frac{\langle\mathbf S\cdot\mathbf J\rangle}{\langle J^2\rangle}.
$$

从 $\mathbf L=\mathbf J-\mathbf S$ 平方得到 $\mathbf S\cdot\mathbf J=(J^2+S^2-L^2)/2$；角动量平方本征值 $J(J+1)\hbar^2$ 等，所以

$$
g_J=1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}.
$$

$$
\langle L_z+2S_z\rangle=g_J\langle J_z\rangle=g_JM_J\hbar,\qquad \Delta E=g_J\mu_B BM_J.
$$

$M_J=-J,\ldots,J$，共 $2J+1$ 态；$J=0$ 没有一阶 Zeeman 分裂，不能直接代入 Landé 公式。不同能量使跃迁频率变化 $h\nu=E_u-E_l$，据此测磁场。

RL p.256–257 区分 normal Zeeman effect（正常塞曼效应，简单三分量）与 anomalous Zeeman effect（反常塞曼效应，由自旋磁矩及不同 Landé 因子带来复杂分裂）。对两个能级的跃迁，

$$
\delta\nu=\frac{\mu_BB}{h}(g_uM_u-g_lM_l).
$$

电偶极选择定则允许 $\Delta M=0,\pm1$（另有其他选择定则）。当上下态 $g=1$ 时，相邻频移为 $\mu_BB/h$，得到中心及两侧分量；实际观察到的偏振与观测方向相关。反常情况下 $g_u,g_l$ 不同，谱线可有更多分量。

精细结构来自 spin-orbit、相对论等修正，例如氢 2p 的 $J=1/2,3/2$ 间隔 $\Delta E_{\rm FS}=E_{2p_{3/2}}-E_{2p_{1/2}}$。弱场的尺度条件 $\mu_B B\ll\Delta E_{\rm FS}$（角动量数量级为 1；严格比较混合矩阵元与能级间隔），不是指 B 的绝对大小。强场但未改变轨道结构时，$\mu_B B\gg\Delta E_{\rm FS}$，Paschen–Back effect，L/S 分别与 B 耦合，近似好量子数 $M_L,M_S$，$\Delta E\simeq\mu_BB(M_L+2M_S)$。中间区域需联合对角化 spin-orbit 与磁项。以上忽略核磁矩、超精细结构、极强场轨道变化；若考虑 HFS，磁场相对 HFS 的大小也决定适用量子数。

Hyperfine structure：核自旋 $\mathbf I$ 和电子角动量耦合，$\mathbf F=\mathbf J+\mathbf I$，$F=|J-I|,\ldots,J+I$。氢 1s 基态 J=I=1/2，F=1 triplet 在 F=0 singlet 上方，21 cm/1420 MHz 磁偶极跃迁；不改变主量子数 $n$ 或轨道角动量量子数 $l$。单个氢原子自发产生这一谱线的时间尺度约 $10^7$ 年（RL p.259），大量中性氢使其可观测。核质量/大小带来同位素位移，勿与核自旋超精细分裂混为一谈。

![磁矩取向、角动量投影以及氢 2p 精细结构在弱磁场中的进一步分裂（能量不按比例）。](/learning/radiation/hii-regions/01_zeeman.svg)

*图 1：磁矩取向、角动量投影以及氢 2p 精细结构在弱磁场中的进一步分裂（能量不按比例）。*

![LS 耦合主导与 Paschen–Back 极限；氢基态超精细分裂。矢量为半经典图景。](/learning/radiation/hii-regions/02_hyperfine.svg)

*图 2：LS 耦合主导与 Paschen–Back 极限；氢基态超精细分裂。矢量为半经典图景。*

## 2. RL 10.3、10.5：Einstein 系数、振子强度、跃迁速率

吸收 $B_{lu}\bar J$，自发辐射 $A_{ul}$，受激辐射 $B_{ul}\bar J$。$\bar J=\int J_\nu\phi(\nu)d\nu$，$g_lB_{lu}=g_uB_{ul}$，$A_{ul}=2h\nu_0^3B_{ul}/c^2$（B 按平均强度 J 定义）。单一衰变寿命 $1/A$；多个渠道 $1/\sum A$。统计权重 g 为简并子态数。电偶极近似（光波长远大于原子尺寸）下 $\mathbf d_{ul}=-e\langle u|\mathbf r|l\rangle$，非简并态 $A_{ul}=4\omega^3|\mathbf d_{ul}|^2/(3\hbar c^3)$；有简并时初态平均、末态求和。矩阵元是光场连接两量子态能力，不是普通波函数重叠；为零表示 E1 禁戒，并不排除弱机制。

![吸收、自发辐射和受激辐射的两能级示意。](/learning/radiation/hii-regions/03_einstein.svg)

*图 3：吸收、自发辐射和受激辐射的两能级示意。*

振子强度 $f$（oscillator strength）无量纲，是积分吸收截面相对于经典电子谐振子的比值，不是跃迁概率。

$$
f_{lu}=\frac{2m_e(E_u-E_l)}{3\hbar^2g_l}\sum_{l,u}|\langle u|\mathbf r|l\rangle|^2.
$$

Lyα 的 $f=0.4162$，$gf=0.8324$，基态 g=2。LS 耦合下两精细结构分量 2:1，gf 便于合并子态。

### 用户追问：$\sigma_\nu=\pi e^2 f_{lu}\phi(\nu)/(m_ec)$ 怎么推出来？

吸收截面是有效吸收面积，不是原子几何尺寸。单原子吸收概率率等于光子数通量乘截面。定义 $S=\int\sigma_\nu d\nu$，$\phi=\sigma_\nu/S$，因此 $\int\phi d\nu=1$，$\sigma_\nu=S\phi$。经典谐振束缚电子（RL 3.6 及 10.30–31）积分截面 $S_{\rm classical}=\pi e^2/(m_ec)$；定义 $f=S/S_{\rm classical}$，即得目标公式。

另一推导：比较同一过程的 Einstein rate $B_{lu}\int J_\nu\phi d\nu$ 与截面 rate $\int 4\pi J_\nu\sigma_\nu/(h\nu)d\nu$，窄线 $\nu\simeq\nu_0$ 得 $\sigma_\nu=h\nu_0 B_{lu}\phi/(4\pi)$；由 $B_{lu}=4\pi^2e^2f/(m_ec h\nu_0)$ 得同一结论。假设无受激辐射净修正、窄线、展宽不改变积分强度。量纲：$\pi e^2/(m_ec)$ 为 cm² Hz，$\phi$ 为 Hz⁻¹，$\sigma$ 为 cm²。宽度增大时峰值减小，积分面积保持不变。

Bound-bound：氢 $E_n=-\mathrm{Ry}/n^2$，Ry=13.6 eV，$h\nu=\mathrm{Ry}(n_l^{-2}-n_u^{-2})$；Lyα 121.6nm、Lyβ 102.6nm、Hα 656.3nm、Hβ 486.1nm。Bound-free photoionization：$h\nu=\chi_n+m_ev^2/2$（忽略核反冲）；自由态连续、Lyman limit 91.2nm。近阈值截面大致 $\nu^{-3}$（Gaunt factor 修正，RL Fig.10.2 p.283 多吸收边）；高能 Born 极限 $\nu^{-7/2}$。真实吸收系数 $n_n\sigma_\nu$，净吸收需处理受激过程。Free-bound radiative recombination 为逆过程，Milne relations 利用详细平衡联系两截面。

![束缚态和连续态跃迁；光电离吸收边与两种频率幂律的示意。高能渐近式不能直接外推到阈值。](/learning/radiation/hii-regions/04_transitions.svg)

*图 4：束缚态和连续态跃迁；光电离吸收边与两种频率幂律的示意。高能渐近式不能直接外推到阈值。*

## 3. H II regions：形成、复合、大小和演化

H I 中性氢，H II 单电离氢/质子，H₂ 分子；He I/II/III 类似。O 型和较早 B 型高温恒星提供紫外光，氢基态电离阈值 13.6 eV。恒星近似黑体 $B_\nu=2h\nu^3/[c^2(e^{h\nu/kT_*}-1)]$，太阳 5800 K 与 O 星 40000 K 对应阈值指数约27.2和3.95，高频尾部差别极大。真实电离光子数还取决于半径和恒星大气。

![不同恒星温度的峰值归一化黑体谱及单电子扫过的有效碰撞体积。](/learning/radiation/hii-regions/05_ionization.svg)

*图 5：不同恒星温度的峰值归一化黑体谱及单电子扫过的有效碰撞体积。*

光电离 $H+h\nu\to p+e$，辐射复合 $p+e\to H+h\nu$。定义 $n_H=n_{HI}+n_p$，纯氢电中性 $n_e=n_p$，完全电离近似 $n_p\simeq n_H$。电子在 dt 内扫有效体积 $\sigma vdt$，单电子复合率 $n_p\sigma v$，对电子速度平均且乘 $n_e$：

$$
\alpha(T)=\langle\sigma_{rec}v\rangle,\qquad \dot n_{rec}=\alpha n_en_p.
$$

### 用户追问：为什么 Maxwell–Boltzmann 分布下复合系数主要是电子温度的函数？

经典非相对论 Maxwell 三维速率概率密度

$$
P(v;T_e)=4\pi\left(\frac{m_e}{2\pi k_BT_e}\right)^{3/2}v^2e^{-m_ev^2/(2k_BT_e)},\quad \alpha=\int_0^\infty\sigma_{rec}(v)vP(v;T_e)dv.
$$

v 是相对速度；质子温度相近、质量远大，先忽略其速度。给定离子和复合渠道，截面函数固定，积分变量 v 消失，归一化速度分布由 T 决定，故在低密度、无显著受激复合等条件下 α 主要由 T 决定。密度是粒子相遇数，已经在 $n_en_p$ 中。氢的辐射复合截面通常随 v 下降，热平均后 α 下降（并非单凭碰撞次数能判断）。Case B 近 $10^4$ K：$\alpha_B\simeq2.6\times10^{-13}(T/10^4\,K)^{-0.7}$ cm³/s。

![Maxwell 速率分布随电子温度的变化；Case B 系数的近似温度依赖。](/learning/radiation/hii-regions/06_recombination.svg)

*图 6：Maxwell 速率分布随电子温度的变化；Case B 系数的近似温度依赖。*

### Case A / B

复合到 n 能级发出 $h\nu=\mathrm{Ry}/n^2+mv^2/2$。直接到基态的光子必有 ≥13.6eV；到激发态通常低于阈值（典型 Te=10⁴K，kT≈0.86eV），之后 cascade。Case A 对复合电离光子光学薄，$\alpha_A=\sum_{n\ge1}\alpha_n\simeq4.2\times10^{-13}$ cm³/s。Case B 对电离连续谱光学厚，基态复合光子在附近重新电离另一氢，净电离数变化0；$\alpha_B=\alpha_A-\alpha_1=\sum_{n\ge2}\alpha_n\simeq2.6\times10^{-13}$ cm³/s。on-the-spot approximation 在光子平均自由程远小于尺度时适用；Case B 复合线计算还通常假设 Lyman 系列光子被俘获、Balmer 等能逃逸。

![Case A 的复合电离光子逃逸与 Case B 的再吸收；对系统的净电离数贡献不同。](/learning/radiation/hii-regions/07_case_ab.svg)

*图 7：Case A 的复合电离光子逃逸与 Case B 的再吸收；对系统的净电离数贡献不同。*

### Strömgren sphere

中心恒星每秒产生 $Q_H=\int_{\nu_0}^{\infty}L_\nu/(h\nu)d\nu$（光子数而非能量）。均匀静态纯氢、固定温度、清晰电离前沿、内部近完全电离、Case B、无尘且电离光子不逃逸；球壳 $dV=4\pi r^2dr$，积分净复合等于恒星电离光子：

$$
Q_H=\int_0^{R_S}4\pi r^2\alpha_Bn_en_pdr=\frac{4\pi}{3}R_S^3\alpha_Bn_en_p,
$$
$$
R_S=\left(\frac{3Q_H}{4\pi\alpha_Bn_H^2}\right)^{1/3}.
$$

典型 Q=10⁴⁹ s⁻¹、n=100 cm⁻³、T=10⁴ K 得约 3.15 pc。密度8倍半径1/4，Q 8倍半径2倍。

### 用户追问：交互实验里温度为何影响半径？

固定 Q 和 n，$\alpha_B\propto T_e^{-0.7}$，$R_S\propto Q_H^{1/3}n_H^{-2/3}T_e^{0.7/3}$。温度高→复合效率低→相同光子供给维持更大体积。Q、n、Te 分别加倍，R 变为1.26、0.63、1.18倍。区别恒星表面温度 T*（改变 Q）和气体电子温度 Te（改变 α），实际 Te 由热平衡决定。

![理想球对称电离区及半径随密度、电子温度的变化（固定电离光子产生率）。](/learning/radiation/hii-regions/08_stromgren.svg)

*图 8：理想球对称电离区及半径随密度、电子温度的变化（固定电离光子产生率）。*

### 用户追问：为何 $N_i(t)=4\pi R(t)^3n_H/3$ 只有 nH？

$N_i$ 是电离氢数，即质子数，不是复合率；严格 $N_i=\int n_pdV=4\pi\int x(r,t)n_H(r,t)r^2dr$，$x=n_p/n_H$，前沿内 x≈1、外 x≈0、密度均匀时得上述式子。电子和质子一一对应，无需再乘 ne。图 9 左侧比较阶跃近似和示意性的连续电离前沿。

### 用户追问：为何 $dN_i/dt=Q_H-\alpha_Bn_eN_i$ 的 Ni 前面是 αB 和 ne？

$$
\dot N_{rec}=\alpha_Bn_en_pV=\alpha_Bn_eN_i.
$$

$\alpha_Bn_e$ 是单质子的有效复合概率率（s⁻¹），乘以质子总数。Case B 扣除无净变化的基态复合。固定密度而电离体积增长，$n_e=N_i/V\simeq n_H$ 常数，故损失项线性；固定体积、复合使密度下降时，$\dot N_{rec}=\alpha_BN_i^2/V$ 非线性。

$$
t_{rec}=1/(\alpha_Bn_e),\quad dN_i/dt+N_i/t_{rec}=Q_H.
$$

初始中性、恒定 Q、n、T，解为 $N_i=Q_Ht_{rec}(1-e^{-t/t_{rec}})$，

$$
R(t)=R_S(1-e^{-t/t_{rec}})^{1/3}.
$$

n=100、T=10⁴K，t_rec≈1220yr，远小于 O 星 Myr 寿命。忽略有限光速、气体动力学和压力；真实电离区随后可膨胀，早期不能超光速。若中心恒星关掉，固定体积/温度下 $dx/dt=-\alpha_Bn_Hx^2$，从 x=1 得 $x=1/(1+t/t_{rec,0})$，高密度更快，不是整体指数衰减。

![电离比例的阶跃近似与平滑前沿；静态密度模型的电离区增长与关星后固定体积复合。](/learning/radiation/hii-regions/09_evolution.svg)

*图 9：电离比例的阶跃近似与平滑前沿；静态密度模型的电离区增长与关星后固定体积复合。*

## 4. Heating and cooling

区分 T*=40000K、Te≈10000K、13.6eV/kB≈158000K。气体 kT≈0.86eV 仍高度电离是外部 UV 非LTE，Saha 方程要求热力学平衡，不能用 Te 单独决定此处电离程度。这里 Maxwellian 速度分布仅表示粒子的动能已热化，并不保证电离布居也达到 LTE。局部电离平衡可写 $n_{HI}\zeta_{ph}=\alpha_Bn_en_p$（on-the-spot 条件）。

光电子获得超出束缚能的动能 $h\nu-\chi_H$，如18eV光子→4.4eV热能，经 Coulomb collisions thermalization。平均辐射强度 $J_\nu=(4\pi)^{-1}\int I_\nu d\Omega$；光电离截面 $\sigma_\nu$ 为有效吸收面积。设 $\nu_0=\chi_H/h$，

$$
\zeta_{ph}=\int_{\nu_0}^\infty \frac{4\pi J_\nu}{h\nu}\sigma_\nu d\nu,
$$
$$
\mathcal H=n_{HI}\int_{\nu_0}^\infty \frac{4\pi J_\nu}{h\nu}\sigma_\nu(h\nu-\chi_H)d\nu.
$$

加热率单位 erg cm⁻³ s⁻¹，=电离速率×每次平均超额能量。复合冷却只计电子原有动能损失，不能把束缚能全部算为热损失；free-free（轫致辐射）光学薄非相对论纯氢 $\mathcal C_{ff}\propto n_en_pT_e^{1/2}$，Gaunt 弱依赖。碰撞激发冷却：自由电子把动能给 O²⁺ 的束缚电子，随后自发辐射，光子逃逸，离子可反复充当冷却剂。热平均碰撞激发 $q_{lu}\propto\Upsilon(T)T^{-1/2}e^{-\Delta E/kT}$，有效碰撞强度 Υ 解释为截面热平均相关无量纲量。H I 第一激发能10.2eV vs [O III] 相关激发能2.51eV，后者指数抑制弱得多；不能仅指数比推实际总冷却，还需离子丰度、碰撞强度。金属元素指比 He 重的元素，低金属一般冷却弱、平衡温度高。热平衡 $\mathcal H=\mathcal C_{rec}+\mathcal C_{ff}+\mathcal C_{line}+\cdots$，定性负反馈，典型数千至两万 K，非普适定值。

![18 eV 光子的能量分配，以及加热和冷却的定性平衡。右图为归一化示意，不是实际冷却曲线。](/learning/radiation/hii-regions/10_thermal.svg)

*图 10：18 eV 光子的能量分配，以及加热和冷却的定性平衡。右图为归一化示意，不是实际冷却曲线。*

![碰撞激发后辐射逃逸的冷却路径，以及氢和氧离子激发阈值的指数因子（非总速率比）。](/learning/radiation/hii-regions/11_excitation.svg)

*图 11：碰撞激发后辐射逃逸的冷却路径，以及氢和氧离子激发阈值的指数因子（非总速率比）。*

## 5. 发射谱线及观测诊断

Recombination lines vs collisionally excited lines，前者自由电子复合级联，后者自由电子保持自由而激发离子。Hα 3→2，656.3nm，1.89eV。不是每次复合都产生 Hα，定义 $\alpha_{H\alpha}^{eff}$ 计直接和级联贡献。各向同性全方向、积分谱线体积辐射率

$$
\epsilon_{H\alpha}=h\nu\alpha_{H\alpha}^{eff}n_en_p,
$$

RL 的每立体角 j 需除4π并乘谱线轮廓。Case B、Te=10⁴K低密度，$\alpha_{H\alpha}^{eff}/\alpha_B\simeq0.45$，每100净电离产生约45个 Hα 光子。电离有界、无尘、温度均匀：

$$
L_{H\alpha}=h\nu(\alpha_{H\alpha}^{eff}/\alpha_B)Q_H\simeq1.36\times10^{-12}Q_H\ \mathrm{erg\,s^{-1}}.
$$

固定 Q/T，密度高时单位体积亮但体积小，总光度近似相同；Hα 可追踪近期恒星形成，需考虑 IMF、尘埃和光子逃逸。Hα/Hβ 与 Case B 理论比对用于尘埃消光（低密度、约 10⁴ K 时本征比约 2.86；随温度和密度略变）。

Forbidden lines：E1 矩阵元为0（如违反 Δl=±1），仍可 M1 或 E2；亚稳态 A 小寿命长。示例 A=10⁻² s⁻¹ 寿命100s，低密度碰撞间隔10000s容易发光，高密度1s退激发占优。方括号 [O III] 表示禁戒线，O III=O²⁺。

Critical density：$q_{ul}=\langle\sigma v\rangle$ cm³/s，单上态自发率 A，碰撞退激发率 $n_eq_{ul}$，$n_{crit}=A/q_{ul}$（多通道用相应总率），$t_{rad}=1/A,t_{col}=1/(n_eq_{ul})$；两渠道竞争时

$$
P_{rad}=\frac{A}{A+n_eq_{ul}}=\frac1{1+n_e/n_{crit}}.
$$

$n_e=n_{crit}$ 为50%；n>ncrit 并不完全消失。例 A=10⁻²,q=10⁻⁸→ncrit=10⁶ cm⁻³，ne=10³→约99.9%辐射。

![两能级原子中的三种过程；临界密度处辐射与碰撞退激发概率各为一半。](/learning/radiation/hii-regions/12_critical_density.svg)

*图 12：两能级原子中的三种过程；临界密度处辐射与碰撞退激发概率各为一半。*

Two-level atom（忽略光激发和受激辐射、光学薄）：$dn_u/dt=n_ln_eq_{lu}-n_u(A+n_eq_{ul})$，统计平衡 $dn_u/dt=0$，

$$
n_u/n_l=\frac{n_eq_{lu}}{A+n_eq_{ul}},\quad \epsilon_{ul}=n_uAh\nu=\frac{n_ln_eq_{lu}h\nu}{1+n_e/n_{crit}}.
$$

低密度 A 抵消，每次碰撞激发最终发光，需达稳态；高密度 $n_u/n_l=q_{lu}/q_{ul}=(g_u/g_l)e^{-\Delta E/kT}$（Maxwellian 碰撞详细平衡），趋 Boltzmann 但电离状态未必 Saha。固定元素丰度、离子比例、温度时，低密度 ε∝n²，高密度 ε∝n；碰撞猝灭指相对平方律抑制，不意味着绝对 ε 下降。

Density diagnostic：[S II] 6716/6731，两激发能近似、临界密度不同（10³与几×10³ cm⁻³），比值随 n 变，低/高密度极限饱和；图 13 的曲线是示意性的，精确反演需要多能级计算和适当的原子数据。

Temperature diagnostic：[O III] 4363/(4959+5007)，¹S₀≈5.35eV，¹D₂≈2.51eV，差2.84eV，4363为¹S₀→¹D₂，4959/5007来自¹D₂→³P 精细结构分量。低密度近似，忽略 Υ 温度依赖和级联修正，$R\propto e^{-2.84\,eV/(k_BT_e)}$。高温 4363 相对增强。金属线与 H 复合线比较可推离子丰度（总元素丰度需电离修正），free-free 射电连续谱追踪电离气体。

![S II 比值的密度敏感区和饱和极限（仅示意）；O III 比值的近似温度敏感性（相对于 10⁴ K）。](/learning/radiation/hii-regions/13_diagnostics.svg)

*图 13：[S II] 比值的密度敏感区和饱和极限（仅示意）；O III 比值的近似温度敏感性（相对于 10⁴ K）。*

![氢复合级联产生 Hα，以及 O III 的三条温度诊断禁戒线。合并了基态细分能级。](/learning/radiation/hii-regions/14_emission_lines.svg)

*图 14：氢复合级联产生 Hα，以及 O III 的三条温度诊断禁戒线。合并了基态细分能级。*

## 6. RL 10.6：谱线展宽

$\phi(\nu)d\nu$ 是整条谱线在该频带的比例；实际正频率积分=1，窄线近似把 detuning 延伸到全实轴。前面已推吸收截面公式。$f$ 决定总面积，$\phi$ 决定形状。

### Doppler

非相对论 $\nu-\nu_0=\nu_0v_z/c$（正向朝观测者）。一维 Maxwell $P(v_z)=\sqrt{m_a/(2\pi kT)}e^{-m_av_z^2/(2kT)}$，不同于复合所用三维速率。变量变换 $\phi_Dd\nu=Pdv_z$，$dv_z=c\,d\nu/\nu_0$，得

$$
\phi_D=\frac{1}{\sqrt\pi\Delta\nu_D}e^{-[(\nu-\nu_0)/\Delta\nu_D]^2},\quad \Delta\nu_D=\frac{\nu_0}{c}\sqrt{2kT/m_a}.
$$

HWHM $w_D=\sqrt{\ln2}\Delta\nu_D$，FWHM=2w_D。$\Delta v_D=\sqrt{2kT/m_a}$，用整个原子质量，10⁴K时 H≈12.8km/s，O≈3.2，S≈2.27。microturbulence（小于光子平均自由程的湍流尺度），独立 Gaussian 时 RL 10.72 $\Delta\nu_D=(\nu_0/c)\sqrt{2kT/m_a+\xi^2}$，ξ 为 RL 的宽度参数；若用一维速度标准差则需 $2\sigma_{turb}^2$。质量依赖可区分热运动与共同非热速度场，同一气体不同离子温度和宏观分布需可比。

![相同积分面积的宽、窄高斯线；在 10⁴ K 时氢、氧、硫的峰值归一化热 Doppler 轮廓。](/learning/radiation/hii-regions/15_line_strength_doppler.svg)

*图 15：相同积分面积的宽、窄高斯线；在 10⁴ K 时氢、氧、硫的峰值归一化热 Doppler 轮廓。*

### Natural

有限激发态寿命→有限相干时间，频谱宽。$\Delta\omega\Delta t\sim1$、$\Delta E\Delta t\sim\hbar$ 是数量级而非严格标准差。$\gamma_u=\sum_lA_{ul}$，$dN_u/dt=-\gamma_uN_u$，概率 $e^{-\gamma_ut}$，寿命 $1/\gamma_u$。概率为振幅模平方，故振幅 $e^{-\gamma_ut/2}$。稳定下态，电场模型 $E(t)=E_0e^{-\gamma t/2}e^{-i\omega_0t}$（t≥0）。Fourier：

$$
\widetilde E\propto\int_0^\infty e^{-[\gamma/2-i(\omega-\omega_0)]t}dt=\frac1{\gamma/2-i(\omega-\omega_0)}.
$$

模平方并以 ν=ω/(2π) 归一化：

$$
\phi_L=\frac{\gamma/(4\pi^2)}{(\nu-\nu_0)^2+(\gamma/4\pi)^2},\quad w_L=\gamma/(4\pi),\quad \mathrm{FWHM}=\gamma/(2\pi).
$$

上下态都有限寿命则 $\gamma=\gamma_u+\gamma_l$（独立衰减模型，RL 10.74）。相干时间越短，频谱越宽。

### Collisional

碰撞可以只扰乱相位而不退激发，区别 HII 中的 collisional de-excitation。Poisson 发生且每次完全随机化相位，碰撞率 νcol。零次事件概率 $P_0=e^{-\nu_{col}t}$；相位平均 $\langle e^{i\theta}\rangle=\int_0^{2\pi}e^{i\theta}d\theta/(2\pi)=0$，有碰撞的历史对平均相干性贡献0而不是电场本身为0。$C(t)\propto e^{-(\gamma/2+\nu_{col})|t|}e^{-i\omega_0t}$，$\Gamma=\gamma+2\nu_{col}$，代入 Lorentz 公式。相干时间 $2/\Gamma$。压力展宽在该 impact/random-phase 模型下随碰撞率增加；其他机制未必 Lorentz。

![有限寿命的阻尼振荡、随机相位中断、半高宽定义，以及碰撞率对面积归一化谱线的影响。](/learning/radiation/hii-regions/16_coherence.svg)

*图 16：有限寿命的阻尼振荡、随机相位中断、半高宽定义，以及碰撞率对面积归一化谱线的影响。*

### Voigt 和用户追问：Gaussian 与 Lorentz 分别对应什么？

| 轮廓 | 机制 | 数学来源 | 远离线芯 |
|---|---|---|---|
| Gaussian | 热 Doppler（也可包含 Gaussian 微湍流） | 一维 Maxwell 速度分布 | 指数衰减 |
| Lorentz | 自然展宽、独立随机相位碰撞 | 指数相干性衰减的 Fourier 频谱 | 平方反比 |
| Voigt | 两种机制同时存在 | Gaussian 与 Lorentz 卷积 | 弱阻尼时 Lorentz 翼 |

Gaussian 对应 Maxwellian Doppler 展宽（不同原子的速度不同）；Lorentz 对应自然展宽及上述碰撞展宽（单个原子相干时间有限）。等峰值等 HWHM 曲线比较：Gaussian 远翼指数衰减，Lorentz 远翼 $(\nu-\nu_0)^{-2}$。两者并存不是直接相加，而是卷积：每个视向速度贡献中心移动的 Lorentz 线，按速度概率加权。

$$
\phi_V(\nu)=\int P(v_z)\phi_L(\nu-\nu_0v_z/c)dv_z,
$$
$$
a=\frac{\Gamma}{4\pi\Delta\nu_D},\quad u=\frac{\nu-\nu_0}{\Delta\nu_D},\quad H(a,u)=\frac a\pi\int_{-\infty}^{\infty}\frac{e^{-y^2}}{a^2+(u-y)^2}dy,
$$
$$
\phi_V=\frac{H(a,u)}{\sqrt\pi\Delta\nu_D}.
$$

$a\ll1$ 时 Gaussian core、Lorentz wings。

![Gaussian、Lorentz 与 Voigt 的峰值归一化比较；阻尼参数 a=0.1。对数图展示远翼。](/learning/radiation/hii-regions/17_voigt.svg)

*图 17：Gaussian、Lorentz 与 Voigt 的峰值归一化比较；阻尼参数 a=0.1。对数图展示远翼。*

## 7. RL 习题：英文原题、中文题意及英文详解

以下英文题目均与 RL 印刷 p.292 核对。英文详解为独立推导，并对照书后 Solutions p.363–369。按老师强调的优先级排序：10.5、10.7、10.3、10.4（选做）。

### Problem 10.5 — Natural vs. Doppler broadening

**Original:** Line radiation is emitted from an optically thin, thermal source. Assuming that the only broadening mechanisms are Doppler and natural broadening, show that the observed half-width of the line is independent of the temperature $T$ for $T\ll T_c$ and increases as the square root of $T$ for $T\gg T_c$, where $T_c$ is some critical temperature. For the Lyman-$\alpha$ line of hydrogen estimate $T_c$ in terms of fundamental constants, and give its numerical value.

**中文题意：** 光学薄热源仅有热 Doppler 和自然展宽，证明低温半宽不依赖 T、高温半宽正比于 $\sqrt T$；用基本常数估算 Lyα 的临界温度。核心是比较两种半高半宽，不需要求完整 Voigt 积分；Tc 只是过渡尺度而非相变。

![氢 Lyα 两种半高半宽与数值 Voigt 半高半宽；交点为按 HWHM 约定定义的临界温度。](/learning/radiation/hii-regions/18_crossover.svg)

*图 18：氢 Lyα 两种半高半宽与数值 Voigt 半高半宽；交点为按 HWHM 约定定义的临界温度。*

**English solution.** For the Lorentz profile in Eq. (10.73), the half-width at half maximum is $w_L=\gamma/(4\pi)$, which is independent of temperature. For the Gaussian Doppler profile in Eqs. (10.68–69), the half-width at half maximum is

$$
w_D=\sqrt{\ln2}\Delta\nu_D=\frac{\nu_0}{c}\sqrt{\frac{2k_BT\ln2}{m_H}}.
$$

The observed line is a convolution of these two profiles, since the source is optically thin. When $w_D\ll w_L$, the Gaussian approaches a delta function relative to the Lorentz width, and the Voigt profile approaches the Lorentz profile. Thus $w\simeq w_L\propto T^0$. Conversely, when $w_D\gg w_L$, the Lorentz profile approaches a delta function relative to the Gaussian width near line center, and $w\simeq w_D\propto T^{1/2}$. Define the crossover by equality of the two half-widths:

$$
\frac{\gamma}{4\pi}=\frac{\nu_0}{c}\sqrt{\frac{2k_BT_c\ln2}{m_H}},\qquad T_c=\frac{m_Hc^2}{2k_B\ln2}\left(\frac{\gamma}{4\pi\nu_0}\right)^2.
$$

For hydrogen Lyman-α, the lower 1s state is stable and the upper 2p state decays predominantly by the allowed transition, so $\gamma=A_{21}$. From RL Eq. (10.34), in Gaussian cgs units,

$$
A_{21}=\frac{8\pi^2e^2\nu_0^2}{m_ec^3}\frac{g_1}{g_2}f_{12},\qquad g_1=2,\quad g_2=6,\quad f_{12}=\frac{2^{13}}{3^9}.
$$

Introduce the fine-structure constant $\alpha_{fs}=e^2/(\hbar c)$. Neglecting reduced-mass corrections, the hydrogen energy separation is $h\nu_0=3m_ec^2\alpha_{fs}^2/8$. Therefore,

$$
\frac{A_{21}}{4\pi\nu_0}=\alpha_{fs}\frac{h\nu_0}{m_ec^2}\frac{g_1}{g_2}f_{12}=\frac{2^{10}}{3^9}\alpha_{fs}^3,
$$
$$
\boxed{T_c=\frac{2^{19}}{3^{18}\ln2}\frac{m_Hc^2}{k_B}\alpha_{fs}^6\simeq3.2\times10^{-3}\,\mathrm K.}
$$

Equivalently use $A_{21}\simeq6.27\times10^8\,\mathrm{s^{-1}}$ and $\nu_0\simeq2.47\times10^{15}\,\mathrm{Hz}$. If the Doppler e-folding width $\Delta\nu_D$ is equated to the Lorentz HWHM instead of using the two HWHMs, the result is $T_c\simeq2.2\times10^{-3}$ K; both estimates have the same physical interpretation. At 10⁴ K, $w_L\simeq49.9$ MHz and $w_D\simeq88$ GHz. Doppler broadening dominates the core but Lorentz wings remain important. The exercise treats an isolated idealized Lyα component and ignores fine-structure splitting and optical-depth effects.

**原书答案对照（重要）：** RL Solutions p.367 明确令 $\Delta\nu_D(T_c)=\gamma/(4\pi)$，所以原书采用的过渡条件不是严格 HWHM 相等。按其 Eq. (1)，

$$
k_BT_c=\frac18\left(\frac{\gamma}{\omega_0}\right)^2m_Hc^2.
$$

由 $g_1f_{12}=2^{14}/3^9$、$g_2=6$、$\hbar\omega_0=3m_ec^2\alpha_{\rm fs}^2/8$ 和 $\gamma=2e^2\omega_0^2(g_1f_{12}/g_2)/(m_ec^3)$，可直接得到

$$
\frac{\gamma}{\omega_0}=\frac{2^{11}}{3^9}\alpha_{\rm fs}^3,\qquad k_BT_c^{\rm RL\ convention}=\frac{2^{19}}{3^{18}}m_Hc^2\alpha_{\rm fs}^6.
$$

独立代入常数得到约 $2.22\times10^{-3}$ K；HWHM 相等得到约 $3.20\times10^{-3}$ K。书后最后一式印作 $2^{21}/3^{18}$，并给出 $8.5\times10^{-3}$ K；该系数比按其 Eq. (1) 独立推导的值大 4 倍，疑为代数或排印错误，并非仅由 HWHM 与 Doppler width 定义差异造成。用书中公式和实际 $A_{21},\nu_0$ 交叉校验支持上述独立结果。课堂若采用 RL 的数值，需注明教材原值和推导差异；物理结论不变。

### Problem 10.7 — Collisional broadening

**Original:** Derive the profile function, Eq. (10.75), when phase-destroying collisions occur with frequency $\nu_{col}$.

**中文题意：** 随机碰撞以平均速率 νcol 发生并完全破坏相位，推导 RL 10.75 的 Lorentz 轮廓及 Γ=γ+2νcol。关键是概率衰减和相干振幅衰减不同，碰撞并非一定退激发。

**English solution.** Assume independent phase-destroying collisions at constant rate $\nu_{col}$ (a homogeneous Poisson process). In an infinitesimal interval $dt$ the probability of no collision is $1-\nu_{col}dt+o(dt)$. Let $P_0(t)$ be the probability of no collision over time $t\ge0$. Then

$$
P_0(t+dt)=P_0(t)(1-\nu_{col}dt)+o(dt),
$$
$$
\frac{dP_0}{dt}=-\nu_{col}P_0,\quad P_0(0)=1,\quad P_0(t)=e^{-\nu_{col}t}.
$$

Each collision randomizes the phase independently and uniformly. Hence $\langle e^{i\theta}\rangle=(2\pi)^{-1}\int_0^{2\pi}e^{i\theta}d\theta=0$. Histories with at least one collision contribute zero to the ensemble-averaged phase correlation. This does not imply the field itself vanishes after a collision.

The normalized stationary electric-field autocorrelation is $C(t)=\langle E^*(0)E(t)\rangle/\langle|E(0)|^2\rangle$. Natural damping alone produces $e^{-\gamma|t|/2}e^{-i\omega_0t}$; for independent collision-induced dephasing, multiply by the no-collision probability:

$$
C(t)=e^{-\gamma|t|/2}e^{-\nu_{col}|t|}e^{-i\omega_0t}=e^{-\Gamma|t|/2}e^{-i\omega_0t},\qquad \boxed{\Gamma=\gamma+2\nu_{col}}.
$$

The Wiener–Khinchin theorem relates the power spectrum of a stationary process to the Fourier transform of the autocorrelation. Using ordinary frequency ν,

$$
\begin{aligned}\phi(\nu)&=\int_{-\infty}^{\infty}C(t)e^{2\pi i\nu t}dt\\&=2\operatorname{Re}\int_0^\infty e^{-[\Gamma/2-2\pi i(\nu-\nu_0)]t}dt\\&=2\operatorname{Re}\frac1{\Gamma/2-2\pi i(\nu-\nu_0)}\\&=\frac{\Gamma}{(\Gamma/2)^2+4\pi^2(\nu-\nu_0)^2}\\&=\boxed{\frac{\Gamma/(4\pi^2)}{(\nu-\nu_0)^2+(\Gamma/4\pi)^2}}.\end{aligned}
$$

This is Eq. (10.75a); the above definition of Γ is Eq. (10.75b). The profile is normalized over all detunings by $\int_{-\infty}^{\infty}(x^2+a^2)^{-1}dx=\pi/a$. The HWHM is $\Gamma/(4\pi)$ and FWHM is $\Gamma/(2\pi)$. When $\nu_{col}=0$, the natural profile is recovered. The factor two arises because γ is a population decay parameter, whereas $\gamma/2$ and $\nu_{col}$ are coherence decay rates. The result assumes independent Poisson collisions and complete phase randomization; a collision frequency alone would not specify the profile without these statistical assumptions.

**Alternative derivation following the textbook solution (pp. 368–369).** For one finite radiation pulse write $E(t)=E_0e^{-\gamma t/2}e^{-i\omega_0t+i\theta(t)}$ for $t\ge0$. Taking the ensemble average of its squared Fourier amplitude yields

$$
\langle|\widetilde E(\omega)|^2\rangle=|E_0|^2\int_0^\infty\!dt_1\int_0^\infty\!dt_2\,e^{-\gamma(t_1+t_2)/2}e^{i(\omega-\omega_0)(t_1-t_2)}e^{-\nu_{\rm col}|t_1-t_2|}.
$$

Split the domain into $t_1\ge t_2$ and its complex conjugate. For the first half set $s=t_2\ge0$ and $\tau=t_1-t_2\ge0$ (Jacobian 1). Thus

$$
\begin{aligned}\langle|\widetilde E(\omega)|^2\rangle&=2|E_0|^2\operatorname{Re}\int_0^\infty e^{-\gamma s}ds\int_0^\infty e^{-[\gamma/2+\nu_{\rm col}-i(\omega-\omega_0)]\tau}d\tau\\&=\frac{2|E_0|^2}{\gamma}\frac{\gamma/2+\nu_{\rm col}}{(\gamma/2+\nu_{\rm col})^2+(\omega-\omega_0)^2}.\end{aligned}
$$

Normalizing the spectrum in ordinary frequency gives exactly Eq. (10.75). Unlike the stationary-correlation argument above, this calculation explicitly treats a single finite pulse and averages its power spectrum; it is the same method as the book, with the remaining double integral evaluated.

### Problem 10.3 — Lyman-α oscillator strength

**Original:** Derive Eq. (10.45) for the Lyman-$\alpha$ oscillator strength.

**中文题意：** 推导 $gf=2^{14}/3^9=0.8324$（p.280）；计算 1s→2p 电偶极矩。重点掌握波函数→矩阵元→f→A/B/截面的流程。

![1s 和 2p 波函数形状（颜色表示符号）；Born 近似将高能出射电子描述为平面波。](/learning/radiation/hii-regions/19_matrix_elements.svg)

*图 19：1s 和 2p 波函数形状（颜色表示符号）；Born 近似将高能出射电子描述为平面波。*

**English solution.** Use normalized conventional radial wave functions (defined by $\psi=R_{nl}Y_{lm}$ and $\int|R_{nl}|^2r^2dr=1$), neglecting fine structure and reduced-mass corrections:

$$
R_{10}=2a_0^{-3/2}e^{-r/a_0},\qquad R_{21}=\frac{1}{2\sqrt6a_0^{3/2}}\frac{r}{a_0}e^{-r/(2a_0)}.
$$

Here $a_0=\hbar^2/(m_ee^2)$ in Gaussian units. RL uses a reduced radial function (Eqs. 9.14–9.15a, p. 241), $R_{nl}^{\rm RL}=rR_{nl}$, normalized with $dr$ rather than $r^2dr$. Consequently RL Eq. (10.44), $\int R_{21}^{\rm RL}R_{10}^{\rm RL}r\,dr$, is identical to the integral below (up to arbitrary state phases). The radial dipole integral is

$$
\begin{aligned}D&=\int_0^\infty R_{21}R_{10}r^3dr\\&=\frac1{\sqrt6a_0^4}\int_0^\infty r^4e^{-3r/(2a_0)}dr\\&=\frac{4!}{\sqrt6a_0^4}\left(\frac{2a_0}{3}\right)^5=\frac{256a_0}{81\sqrt6}.\end{aligned}
$$

We used $\int_0^\infty r^ne^{-br}dr=n!/b^{n+1}$. The factor $r^3$ arises from the dipole operator r and the volume element $r^2drd\Omega$. The z matrix element is

$$
\begin{aligned}\langle210|z|100\rangle&=D\int Y_{10}^*\cos\theta\,Y_{00}d\Omega\\&=\frac{D\sqrt3}{4\pi}\int_0^{2\pi}d\varphi\int_0^\pi\cos^2\theta\sin\theta d\theta\\&=D/\sqrt3,\end{aligned}
$$

using $Y_{00}=1/\sqrt{4\pi}$ and $Y_{10}=\sqrt{3/(4\pi)}\cos\theta$. By rotational symmetry, the squared matrix elements summed over x,y,z and all three final orbital magnetic substates give $D^2$; the spin is unchanged by the electric dipole operator, so the sum over the two initial spin states cancels the lower-state statistical weight $g_1=2$ in the oscillator-strength average. With $\Delta E=3\hbar^2/(8m_ea_0^2)$,

$$
f_{12}=\frac{2m_e\Delta E}{3\hbar^2}D^2=\frac{1}{4a_0^2}\left(\frac{256a_0}{81\sqrt6}\right)^2=\frac{2^{13}}{3^9}\simeq0.4162.
$$

Thus $\boxed{g_1f_{12}=2^{14}/3^9\simeq0.8324}$, reproducing Eq. (10.45).

### Problem 10.4 (optional) — Photoionization cross section

**Original:** Derive Eq. (10.53) for the bound-free cross section, using the nonrelativistic Born approximation.

**中文题意：** 采用非相对论 Born 近似推高频光电离截面。初态为类氢基态，末态高能自由电子近似平面波（库仑畸变小），$Z^2\mathrm{Ry}\ll\hbar\omega\ll m_ec^2$，电子动量远大于光子动量。图 19 右侧展示这一近似。

**English solution.** Starting from RL Eq. (10.52), in which αfs denotes the fine-structure constant,

$$
\frac{d\sigma_{bf}}{d\Omega}=\frac{\alpha_{fs}vV}{2\pi\omega}\left|\langle f|e^{i\mathbf k\cdot\mathbf r}\boldsymbol\epsilon\cdot\nabla|i\rangle\right|^2.
$$

Here V is a plane-wave normalization volume, k is the photon wave vector, ε the polarization unit vector, v the outgoing electron speed, and Ω its solid angle. Let $\beta=Z/a_0$ and $\mathbf q=\mathbf p/\hbar$. The hydrogenic ground-state wave function and Born final state are

$$
\psi_i=\sqrt{\beta^3/\pi}e^{-\beta r},\qquad \psi_f=V^{-1/2}e^{i\mathbf q\cdot\mathbf r}.
$$

In the nonrelativistic high-energy limit $q\gg\beta$ and $k\ll q$. Neglect k relative to q in the matrix element at leading order. By integration by parts, the surface term vanishes because the bound wave function decays at infinity:

$$
M\simeq\langle f|\boldsymbol\epsilon\cdot\nabla|i\rangle=\frac{i\boldsymbol\epsilon\cdot\mathbf q}{\sqrt V}\int e^{-i\mathbf q\cdot\mathbf r}\psi_i d^3r.
$$

Align the polar axis with q to perform the spherical Fourier integral:

$$
\int e^{-i\mathbf q\cdot\mathbf r}e^{-\beta r}d^3r=\frac{4\pi}{q}\int_0^\infty re^{-\beta r}\sin(qr)dr=\frac{8\pi\beta}{(q^2+\beta^2)^2}.
$$

The last integral follows by differentiating $\int_0^\infty e^{-\beta r}\sin(qr)dr=q/(\beta^2+q^2)$ with respect to β. For linear polarization, θ is the angle between q and ε, so

$$
|M|^2=\frac{64\pi\beta^5}{V}\frac{q^2\cos^2\theta}{(q^2+\beta^2)^4}.
$$

Substituting into Eq. (10.52) and integrating over all electron directions, with $\int\cos^2\theta d\Omega=4\pi/3$, yields

$$
\frac{d\sigma_{bf}}{d\Omega}=\frac{32\alpha_{fs}v\beta^5}{\omega}\frac{q^2\cos^2\theta}{(q^2+\beta^2)^4},
$$
$$
\sigma_{bf}=\frac{128\pi\alpha_{fs}v\beta^5}{3\omega}\frac{q^2}{(q^2+\beta^2)^4}\simeq\frac{128\pi\alpha_{fs}v\beta^5}{3\omega q^6}.
$$

At photon energies much greater than the binding energy, $q^2\simeq2m_e\omega/\hbar$ and $v=\hbar q/m_e$. Using $\hbar/m_e=\alpha_{fs}ca_0$ and $\beta=Z/a_0$ gives

$$
\begin{aligned}\sigma_{bf}&\simeq\frac{128\pi\alpha_{fs}}{3}\frac{\hbar}{m_e}\frac{(Z/a_0)^5}{\omega}\left(\frac{\hbar}{2m_e\omega}\right)^{5/2}\\&=\boxed{\frac{(2\alpha_{fs})^{9/2}\pi Z^5c^{7/2}}{3a_0^{3/2}\omega^{7/2}}},\end{aligned}
$$

which is RL Eq. (10.53). Thus $\sigma_{bf}\propto Z^5\omega^{-7/2}$ in the stated high-energy nonrelativistic regime, distinct from the approximately $\nu^{-3}$ near-threshold behavior. The normalization volume cancels, and the dimensions of the final expression are area.

## 8. 章末必记知识与公式

- 弱场 $\Delta E=g_J\mu_BBM_J$；强场 Paschen–Back 与适用条件；21cm 超精细。
- $\int\sigma d\nu=\pi e^2f/(m_ec)$；$\sigma_\nu=\pi e^2f\phi/(m_ec)$；$g_l B_{lu}=g_uB_{ul}$；$A_{ul}=8\pi^2e^2\nu_0^2(g_l/g_u)f/(m_ec^3)$。
- $\alpha=\langle\sigma v\rangle$；$\dot n_{rec}=\alpha_Bn_en_p$；Case A/B；$R_S=[3Q_H/(4\pi\alpha_B n_H^2)]^{1/3}$；$t_{rec}=1/(\alpha_Bn_e)$；$R(t)=R_S(1-e^{-t/t_{rec}})^{1/3}$。
- H II thermal balance、$h\nu-\chi_H$ 加热、金属碰撞激发冷却、非LTE区别 Saha；$L_{H\alpha}=h\nu\alpha_{H\alpha}^{eff}Q_H/\alpha_B$；$n_{crit}=A/q$；低密度禁戒线 A 抵消、高密度 Boltzmann；[S II] 密度和 [O III] 温度诊断。
- Gaussian Doppler：$\Delta\nu_D=(\nu_0/c)\sqrt{2k_BT/m_a}$；Lorentz natural/collisional：$w_L=\Gamma/(4\pi)$，$\Gamma=\gamma+2\nu_{col}$；Voigt 是卷积，弱阻尼 Gaussian core、Lorentz wings。$\tau_{coh}=2/\Gamma$。
- Lyα $f=0.4162,gf=0.8324,T_c\simeq3.2$ mK（HWHM约定）；Born 高频 $\sigma\propto\nu^{-7/2}$。

### 8.1 物理直觉自检（课堂互动问题）

| 问题 | 答案与理由 |
|---|---|
| 同一颗 O 星处在 $n_H=10$ 或 $100\,\mathrm{cm^{-3}}$ 的气体中，哪边电离区更大？ | 低密度。$R_S\propto n_H^{-2/3}$，半径约大 $10^{2/3}=4.64$ 倍。 |
| 中心恒星停止提供电离光子后如何变化？ | 电离氢逐渐复合，高密度区域初始复合时间更短；固定体积时电离比例按 $1/(1+t/t_{\rm rec,0})$ 减少。 |
| 同恒星、同密度的低金属星云还是高金属星云更热？ | 通常低金属星云，因为金属碰撞激发冷却较弱。 |
| $A=10^{-2}\,\mathrm{s^{-1}}$、$q=10^{-8}\,\mathrm{cm^3s^{-1}}$、$n_e=10^3\,\mathrm{cm^{-3}}$，哪种退激发主导？ | $n_{\rm crit}=10^6\,\mathrm{cm^{-3}}$，自发辐射概率约 99.9%。 |
| 氢、铁谱线在速度单位下几乎等宽，是否仍能归因于同温热运动？ | 单独热运动不合理（宽度随 $m^{-1/2}$）；考虑共同宏观速度场、湍流和仪器展宽，也需确认离子采样同一区域。 |
| 原子静止、无碰撞而激发态寿命有限，谱线形状如何？ | Lorentz，不是 delta function。 |

## 参考资料与适用边界

- Rybicki, G. B. & Lightman, A. P., *Radiative Processes in Astrophysics*, §§9.4, 10.3, 10.5, 10.6；Problems p.292；Solutions pp.363–369。印刷页码与扫描 PDF 相差 16 页。
- Osterbrock, D. E. & Ferland, G. J., *Astrophysics of Gaseous Nebulae and Active Galactic Nuclei*：教师推荐的 H II regions 理论背景。本笔记的 H II 扩展内容依据本次讨论和标准电离星云模型，未逐页核对这本书。
- 所有数值近似及模型条件均在正文标明；谱线轮廓以单个孤立跃迁、窄线、无宏观光学厚转移的情况为主。图中峰值归一化不等于积分归一化。
