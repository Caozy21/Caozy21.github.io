---
title: "AST1440：RL Eq. 8.18——折射率梯度、波前倾斜与射线弯曲"
description: "完整推导 RL Eq. 8.18：从冷等离子体折射率、相速度与等相位面出发，解释波前倾斜如何导致射线弯曲，并连接 Fermat 原理、等离子体透镜和薄相位屏偏折角。"
date: "2026-10-05"
tags: ["AST1440","Ray bending","Refractive index","Cold plasma","Geometrical optics"]
order: 8
draft: false
---

# AST1440：RL Eq. 8.18——折射率梯度、波前倾斜与射线弯曲

> 课程：AST1440 — Radiation
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§8.1，印刷页 224–228；Eq. 8.18 位于印刷页 227。
> 整理日期：2026 年 10 月 5 日。
> 本文集中推导 RL Eq. 8.18，并把推导中容易跳过的步骤完整展开：冷等离子体折射率为什么带有平方根、相速度如何描述波前传播、为什么 $dl/dt=v_{\rm ph}$、$\nabla F$ 和 $\nabla_\perp$ 的含义、相速度梯度如何改变波前法线，以及怎样得到完整的几何光学射线方程。

## 目录

1. [本次任务与逻辑主线](#1-本次任务与逻辑主线)
2. [符号、假设与需要区分的物理量](#2-符号假设与需要区分的物理量)
3. [从冷等离子体色散关系得到折射率](#3-从冷等离子体色散关系得到折射率)
4. [相速度、等相位面与 $dl/dt=v_{\rm ph}$](#4-相速度等相位面与-dldtv_rm-ph)
5. [用标量函数描述波前：$F=0$ 与 $\nabla F$](#5-用标量函数描述波前f0-与-nabla-f)
6. [横向相速度梯度为什么使射线转弯](#6-横向相速度梯度为什么使射线转弯)
7. [从相速度梯度得到方向方程](#7-从相速度梯度得到方向方程)
8. [完整推导 RL Eq. 8.18](#8-完整推导-rl-eq-818)
9. [Eq. 8.18 的物理意义与等离子体应用](#9-eq-818-的物理意义与等离子体应用)
10. [量纲检查、极限检验与常见混淆](#10-量纲检查极限检验与常见混淆)
11. [English assignment-ready derivation](#11-english-assignment-ready-derivation)
12. [复习清单与参考资料](#12-复习清单与参考资料)

---

## 1. 本次任务与逻辑主线

RL Eq. 8.18 是

$$
\boxed{
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=\nabla n_r
}.
\tag{8.18}
$$

这条式子描述折射率随空间变化时，射线方向怎样连续改变。整条推导可以压缩为

$$
\boxed{
n_e(\mathbf r)
\longrightarrow
\omega_p(\mathbf r)
\longrightarrow
n_r(\mathbf r)
\longrightarrow
v_{\rm ph}(\mathbf r)
\longrightarrow
\text{波前倾斜}
\longrightarrow
\text{射线弯曲}
}.
$$

其中最关键的几何事实有两个：

1. 射线方向 $\hat{\mathbf k}$ 是等相位面的法线方向。
2. 波前上不同横向位置若具有不同相速度，经过相同时间后便会前进不同距离，使波前倾斜，法线方向也随之改变。

---

## 2. 符号、假设与需要区分的物理量

### 2.1 符号表

| 符号 | 含义 | 说明 |
|---|---|---|
| $n_e$ | 自由电子数密度 | 不要与折射率混淆 |
| $n_r$ | 折射率 | RL Eq. 8.18 原文写作 $n$ |
| $\omega_p$ | 等离子体角频率 | cgs 中 $\omega_p^2=4\pi n_e e^2/m_e$ |
| $\omega$ | 电磁波角频率 | 静止介质中沿射线保持不变 |
| $\mathbf k$ | 局部波矢 | 垂直于等相位面 |
| $k$ | 波数 $|\mathbf k|$ | $k=2\pi/\lambda_{\rm medium}$ |
| $\hat{\mathbf k}$ | 波矢的单位方向 | $\hat{\mathbf k}=\mathbf k/k=d\mathbf r/dl$ |
| $l$ | 沿射线测量的弧长 | $|d\mathbf r/dl|=1$ |
| $v_{\rm ph}$ | 相速度 | $v_{\rm ph}=\omega/k=c/n_r$ |
| $v_g$ | 群速度 | $v_g=d\omega/dk$ |
| $\nabla$ | 三维空间梯度 | 包含沿射线和平行于波前的变化 |
| $\nabla_\perp$ | 垂直于射线方向的梯度 | 只负责改变射线方向 |

### 2.2 本文使用的近似

- 介质各向同性，因此折射率 $n_r$ 是标量。
- 介质静止，没有显式时间变化，因此波的频率 $\omega$ 沿射线不变。
- 折射率在一个波长范围内变化很小，可以使用几何光学或 WKB 近似。
- 波前局部近似为平面；所有方向变化均在一阶小量下计算。
- 忽略强吸收、强反射和不连续界面；Eq. 8.18 描述的是平滑介质中的连续折射。

一般情况下，任意标量 $f$ 的横向梯度定义为

$$
\boxed{
\nabla_\perp f
=
\nabla f
-
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla f\right)
}.
$$

它从完整梯度中减去了沿射线方向的部分。

---

## 3. 从冷等离子体色散关系得到折射率

### 3.1 色散关系

冷、非磁化、无碰撞等离子体中的电磁波满足

$$
\boxed{
\omega^2=\omega_p^2+c^2k^2
},
$$

其中

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e}
\qquad\text{(Gaussian-cgs)}.
$$

折射率定义为

$$
\boxed{
n_r\equiv\frac{ck}{\omega}
}.
$$

由色散关系移项：

$$
c^2k^2=\omega^2-\omega_p^2.
$$

两边除以 $\omega^2$：

$$
\frac{c^2k^2}{\omega^2}
=1-\frac{\omega_p^2}{\omega^2}.
$$

左边正好是 $n_r^2$，因此

$$
\boxed{
n_r^2=1-\frac{\omega_p^2}{\omega^2}
},
$$

从而

$$
\boxed{
n_r
=\sqrt{1-\frac{\omega_p^2}{\omega^2}}
}.
$$

对于正频率、正波数并沿所选方向传播的普通模式，取正根。

### 3.2 为什么看起来像勾股定理

它之所以具有“平方和”的外观，是因为色散关系可以写成

$$
\omega^2=\omega_p^2+(ck)^2.
$$

三个量都具有角频率的单位：

- $\omega_p$ 是电子集体振荡的固有频率尺度；
- $ck$ 是空间传播产生的频率尺度；
- $\omega$ 是电磁波最终的时间振荡频率。

形式上可以把它画成一个“频率三角形”，但这只是代数类比，并不表示三个真实空间矢量互相垂直。

### 3.3 相速度和群速度

相速度为

$$
\boxed{
v_{\rm ph}=\frac{\omega}{k}=\frac{c}{n_r}>c
}.
$$

群速度为

$$
\boxed{
v_g=\frac{d\omega}{dk}
=c\sqrt{1-\frac{\omega_p^2}{\omega^2}}
=cn_r<c
}.
$$

因此

$$
v_{\rm ph}v_g=c^2.
$$

$v_{\rm ph}>c$ 不代表信息超光速；波前相位以 $v_{\rm ph}$ 移动，而有限波包、能量和信息由 $v_g$ 传播。

---

## 4. 相速度、等相位面与 $dl/dt=v_{\rm ph}$

### 4.1 相速度的定义

考虑局部一维平面波

$$
E(l,t)=E_0\cos(kl-\omega t).
$$

相位为

$$
\Phi(l,t)=kl-\omega t.
$$

跟随某一个固定相位，例如某个波峰时，$\Phi$ 保持不变：

$$
d\Phi=0.
$$

因此

$$
k\,dl-\omega\,dt=0.
$$

整理得到

$$
\boxed{
\frac{dl}{dt}=\frac{\omega}{k}=v_{\rm ph}
}.
$$

所以

$$
\boxed{
dl=v_{\rm ph}\,dt
}
$$

只是“波前前进距离 = 相速度 × 时间”的微分形式。

### 4.2 为什么这里不是群速度

本推导追踪的是等相位面如何移动和倾斜，因此使用相速度。若追踪脉冲包络、能量或信息的位置，则应使用群速度。

在各向同性介质中，群速度方向与 $\mathbf k$ 平行，因此相位和能量沿同一空间射线方向传播，但二者沿路径前进的速率不同。

---

## 5. 用标量函数描述波前：$F=0$ 与 $\nabla F$

### 5.1 经过短时间后的波前

设初始波前是

$$
z=0,
$$

并沿 $+z$ 方向传播。初始射线方向为

$$
\hat{\mathbf k}=\hat{\mathbf z}.
$$

允许相速度在波前横向缓慢变化：

$$
v_{\rm ph}=v_{\rm ph}(x,y).
$$

经过短时间 $dt$，位于 $(x,y)$ 的波前部分前进

$$
dz=v_{\rm ph}(x,y)\,dt.
$$

因此新波前满足

$$
z=v_{\rm ph}(x,y)\,dt.
$$

把所有项移到一边并定义标量函数

$$
\boxed{
F(x,y,z)=z-v_{\rm ph}(x,y)\,dt
}.
$$

新波前就是等值面

$$
F(x,y,z)=0.
$$

### 5.2 $\nabla$ 与 $\nabla_\perp$ 的含义

三维梯度算符是

$$
\boxed{
\nabla
=
\hat{\mathbf x}\frac{\partial}{\partial x}
+
\hat{\mathbf y}\frac{\partial}{\partial y}
+
\hat{\mathbf z}\frac{\partial}{\partial z}
}.
$$

作用在标量 $F$ 上得到

$$
\nabla F
=
\hat{\mathbf x}\frac{\partial F}{\partial x}
+
\hat{\mathbf y}\frac{\partial F}{\partial y}
+
\hat{\mathbf z}\frac{\partial F}{\partial z}.
$$

对于

$$
F=z-v_{\rm ph}(x,y)\,dt,
$$

三个偏导数分别是

$$
\frac{\partial F}{\partial x}
=-dt\frac{\partial v_{\rm ph}}{\partial x},
$$

$$
\frac{\partial F}{\partial y}
=-dt\frac{\partial v_{\rm ph}}{\partial y},
$$

$$
\frac{\partial F}{\partial z}=1.
$$

所以

$$
\begin{aligned}
\nabla F
&=
-dt\frac{\partial v_{\rm ph}}{\partial x}\hat{\mathbf x}
-dt\frac{\partial v_{\rm ph}}{\partial y}\hat{\mathbf y}
+\hat{\mathbf z}\\
&=
\hat{\mathbf z}
-dt\left(
\hat{\mathbf x}\frac{\partial v_{\rm ph}}{\partial x}
+
\hat{\mathbf y}\frac{\partial v_{\rm ph}}{\partial y}
\right).
\end{aligned}
$$

因为当前传播方向是 $z$，横向梯度为

$$
\boxed{
\nabla_\perp
=
\hat{\mathbf x}\frac{\partial}{\partial x}
+
\hat{\mathbf y}\frac{\partial}{\partial y}
}.
$$

于是

$$
\boxed{
\nabla F
=
\hat{\mathbf z}
-dt\,\nabla_\perp v_{\rm ph}
}.
$$

这只是把分量表达式压缩成矢量记号。

### 5.3 为什么 $\nabla F$ 垂直于波前

在波前 $F=0$ 上做任意微小切向位移 $d\mathbf r$，仍然停留在同一个等值面，因此

$$
dF=0.
$$

多变量微积分给出

$$
dF=\nabla F\cdot d\mathbf r.
$$

所以

$$
\nabla F\cdot d\mathbf r=0.
$$

这说明 $\nabla F$ 与波前上的所有切向位移都垂直，因此 $\nabla F$ 就是波前的法线方向。局部波矢也垂直于等相位面，所以

$$
\boxed{
\mathbf k\parallel\nabla F
}.
$$

---

## 6. 横向相速度梯度为什么使射线转弯

### 6.1 新波前的单位法线

新波前的一个未归一化法线是

$$
\nabla F
=
\hat{\mathbf z}-dt\,\nabla_\perp v_{\rm ph}.
$$

因此新单位法线为

$$
\hat{\mathbf k}_{\rm new}
=
\frac{
\hat{\mathbf z}-dt\,\nabla_\perp v_{\rm ph}
}{
\sqrt{1+dt^2|\nabla_\perp v_{\rm ph}|^2}
}.
$$

当 $dt$ 很小时，分母与 $1$ 的差是二阶小量：

$$
\sqrt{1+dt^2|\nabla_\perp v_{\rm ph}|^2}
\simeq1.
$$

因此保留一阶小量：

$$
\hat{\mathbf k}_{\rm new}
\simeq
\hat{\mathbf z}-dt\,\nabla_\perp v_{\rm ph}.
$$

又因为

$$
\hat{\mathbf k}_{\rm new}
=\hat{\mathbf k}+d\hat{\mathbf k},
\qquad
\hat{\mathbf k}=\hat{\mathbf z},
$$

所以

$$
d\hat{\mathbf k}
=-dt\,\nabla_\perp v_{\rm ph}.
$$

两边除以 $dt$：

$$
\boxed{
\frac{d\hat{\mathbf k}}{dt}
=-\nabla_\perp v_{\rm ph}
}.
\tag{6.1}
$$

### 6.2 负号的几何意义

若相速度向 $+x$ 方向增加，波前右侧在相同时间内前进得更多。新波前向右上方倾斜，但它的法线向左偏转。因此射线向相速度较小的一侧弯曲。

由于

$$
v_{\rm ph}=\frac{c}{n_r},
$$

相速度较小的一侧就是折射率较大的一侧。因此

$$
\boxed{
\text{射线向较大的折射率方向弯曲}
}.
$$

### 6.3 为什么只出现横向梯度

若相速度只沿射线方向改变，而同一波前上的所有横向位置具有相同速度，那么波前整体一起前进，不会倾斜。此时局部波长可以变化，但射线方向不变。

因此只有

$$
\nabla_\perp v_{\rm ph}
$$

能够改变 $\hat{\mathbf k}$。

---

## 7. 从相速度梯度得到方向方程

### 7.1 把时间导数换成路径导数

由第 4 节，波前在时间 $dt$ 内沿射线前进

$$
dl=v_{\rm ph}\,dt,
$$

即

$$
\frac{dl}{dt}=v_{\rm ph}.
$$

链式法则给出

$$
\frac{d\hat{\mathbf k}}{dt}
=
\frac{d\hat{\mathbf k}}{dl}
\frac{dl}{dt}
=
v_{\rm ph}
\frac{d\hat{\mathbf k}}{dl}.
$$

结合式 (6.1)：

$$
\boxed{
\frac{d\hat{\mathbf k}}{dl}
=
-\frac{1}{v_{\rm ph}}
\nabla_\perp v_{\rm ph}
}.
\tag{7.1}
$$

### 7.2 从相速度改写成折射率

由

$$
v_{\rm ph}=\frac{c}{n_r},
$$

可得

$$
\begin{aligned}
\nabla_\perp v_{\rm ph}
&=
\nabla_\perp\left(cn_r^{-1}\right)\\
&=-\frac{c}{n_r^2}\nabla_\perp n_r\\
&=-\frac{v_{\rm ph}}{n_r}\nabla_\perp n_r.
\end{aligned}
$$

代入式 (7.1)：

$$
\begin{aligned}
\frac{d\hat{\mathbf k}}{dl}
&=-\frac{1}{v_{\rm ph}}
\left(
-\frac{v_{\rm ph}}{n_r}\nabla_\perp n_r
\right)\\
&=\frac{\nabla_\perp n_r}{n_r}.
\end{aligned}
$$

因此

$$
\boxed{
\frac{d\hat{\mathbf k}}{dl}
=\frac{\nabla_\perp n_r}{n_r}
=\nabla_\perp\ln n_r
}.
\tag{7.2}
$$

左边是射线的曲率矢量，描述射线每前进单位距离，方向改变多少。

---

## 8. 完整推导 RL Eq. 8.18

### 8.1 把完整梯度分解为平行和垂直部分

折射率的完整梯度可以分解为

$$
\boxed{
\nabla n_r
=
\nabla_\perp n_r
+
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla n_r\right)
}.
\tag{8.1}
$$

沿射线的折射率变化率是

$$
\boxed{
\frac{dn_r}{dl}
=
\frac{d\mathbf r}{dl}\cdot\nabla n_r
=
\hat{\mathbf k}\cdot\nabla n_r
}.
\tag{8.2}
$$

### 8.2 展开乘积导数

对 $n_r\hat{\mathbf k}$ 沿路径求导：

$$
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=
n_r\frac{d\hat{\mathbf k}}{dl}
+
\hat{\mathbf k}\frac{dn_r}{dl}.
$$

利用式 (7.2)：

$$
n_r\frac{d\hat{\mathbf k}}{dl}
=\nabla_\perp n_r.
$$

再利用式 (8.2)：

$$
\hat{\mathbf k}\frac{dn_r}{dl}
=
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla n_r\right).
$$

所以

$$
\begin{aligned}
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
&=
\nabla_\perp n_r
+
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla n_r\right)\\
&=\nabla n_r.
\end{aligned}
$$

最终得到

$$
\boxed{
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=\nabla n_r
}.
\tag{8.18}
$$

### 8.3 用 Fermat 原理交叉检查

光学路径为

$$
\mathcal S=\int n_r(\mathbf r)\,dl.
$$

若用任意参数 $u$ 描述路径，$dl=|d\mathbf r/du|du$，则

$$
\mathcal S
=
\int n_r(\mathbf r)
\left|\frac{d\mathbf r}{du}\right|du.
$$

把被积函数视为 Lagrangian，Euler–Lagrange 方程给出

$$
\frac{d}{du}
\left(
n_r
\frac{d\mathbf r/du}{|d\mathbf r/du|}
\right)
=
\left|\frac{d\mathbf r}{du}\right|
\nabla n_r.
$$

选择弧长本身作为参数 $u=l$，便有

$$
\left|\frac{d\mathbf r}{dl}\right|=1,
\qquad
\frac{d\mathbf r}{dl}=\hat{\mathbf k}.
$$

于是再次得到

$$
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=\nabla n_r.
$$

波前推导给出直观图像，Fermat 原理则提供独立的变分推导；二者完全一致。

---

## 9. Eq. 8.18 的物理意义与等离子体应用

### 9.1 射线曲率

方向方程

$$
\frac{d\hat{\mathbf k}}{dl}
=\frac{\nabla_\perp n_r}{n_r}
$$

表明射线曲率大小为

$$
\boxed{
\frac{1}{R}
=
\left|\frac{d\hat{\mathbf k}}{dl}\right|
=
\frac{|\nabla_\perp n_r|}{n_r}
}.
$$

因此：

- $\nabla_\perp n_r=0$：射线不弯曲；
- 横向折射率梯度越大：弯曲越强；
- 射线向 $n_r$ 较大、$v_{\rm ph}$ 较小的一侧弯曲；
- 纯纵向梯度改变局部波长，但不改变射线方向。

### 9.2 冷等离子体中的梯度方向

冷等离子体折射率为

$$
n_r
=
\sqrt{1-\frac{\omega_p^2}{\omega^2}}.
$$

固定频率 $\omega$ 时，

$$
\nabla n_r
=
-\frac{1}{2n_r\omega^2}
\nabla\omega_p^2.
$$

在 Gaussian-cgs 中

$$
\omega_p^2=\frac{4\pi e^2}{m_e}n_e,
$$

所以

$$
\boxed{
\nabla n_r
=
-\frac{2\pi e^2}{m_e\omega^2n_r}
\nabla n_e
}.
$$

因此

$$
\boxed{
\nabla n_r\ \text{与}\ \nabla n_e\ \text{方向相反}
}.
$$

电子过密区域具有较小折射率和较大相速度。射线向较大折射率方向弯曲，所以通常远离电子过密区：

$$
\boxed{
\text{电子过密结构通常表现为发散等离子体透镜}
}.
$$

### 9.3 高频极限与薄相位屏

当 $\omega\gg\omega_p$ 时，

$$
n_r
\simeq
1-\frac{\omega_p^2}{2\omega^2}
=
1-\frac{r_e\lambda^2}{2\pi}n_e.
$$

方向方程的小角度形式为

$$
\frac{d\hat{\mathbf k}}{dl}
\simeq
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp n_e.
$$

沿薄等离子体屏积分，定义电子柱密度

$$
N_e=\int n_e\,dl,
$$

得到偏折角

$$
\boxed{
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e
}.
$$

因此等离子体折射近似满足

$$
|\boldsymbol\alpha|\propto\lambda^2.
$$

低频、长波长射电波的折射、散射和 scintillation 更明显。

---

## 10. 量纲检查、极限检验与常见混淆

### 10.1 量纲检查

Eq. 8.18 左边：

$$
\left[
\frac{d}{dl}
\left(n_r\hat{\mathbf k}\right)
\right]
=L^{-1},
$$

因为 $n_r$ 和 $\hat{\mathbf k}$ 都无量纲。

右边：

$$
[\nabla n_r]=L^{-1}.
$$

两边一致。

波前转动方程中

$$
[dt\,\nabla v_{\rm ph}]
=T\frac{L/T}{L}=1,
$$

与无量纲方向变化 $d\hat{\mathbf k}$ 一致。

### 10.2 极限检验

1. 均匀介质：

   $$
   \nabla n_r=0
   \quad\Rightarrow\quad
   \frac{d\hat{\mathbf k}}{dl}=0,
   $$

   射线为直线。

2. 梯度完全平行于射线：

   $$
   \nabla_\perp n_r=0,
   $$

   方向不变，但局部波数和波长可以改变。

3. 真空极限：

   $$
   n_e\to0
   \Rightarrow
   \omega_p\to0
   \Rightarrow
   n_r\to1,
   $$

   恢复真空直线传播。

4. 高频极限：

   $$
   \omega\to\infty
   \Rightarrow
   n_r\to1,
   $$

   等离子体偏折趋于零。

5. 接近截止频率：

   $$
   \omega\to\omega_p^+,
   $$

   $n_r\to0$，几何光学近似可能失效，不能无条件继续使用高频展开。

### 10.3 常见混淆

1. $n_e$ 是电子数密度，$n_r$ 是折射率。
2. $\nabla F$ 是标量场 $F$ 的梯度，也是等值面 $F=0$ 的法线方向。
3. $\nabla_\perp$ 不是额外的物理力，而是完整梯度中垂直于射线的部分。
4. $d\hat{\mathbf k}/dl$ 改变的是方向；$dn_r/dl$ 改变的是沿路径的折射率大小。
5. 相速度描述波前，群速度描述波包、能量和信息。
6. $v_{\rm ph}>c$ 不违反相对论，因为单独的相位点不携带独立信息。
7. Eq. 8.18 需要介质在波长尺度上平滑变化；遇到尖锐界面时通常直接使用 Snell 定律并考虑反射。
8. 射线向较大折射率弯曲；在冷等离子体中，较大的电子密度反而对应较小的折射率。

---

## 11. English assignment-ready derivation

Let $n_r(\mathbf r)$ be the refractive index and let $\hat{\mathbf k}$ denote the local ray direction, normal to the wavefront. Consider an initially plane wavefront propagating in the $+z$ direction. If the phase velocity varies across the wavefront, then after a short time $dt$ the new wavefront is

$$
F(x,y,z)
=z-v_{\rm ph}(x,y)dt=0.
$$

Its normal is

$$
\nabla F
=\hat{\mathbf z}-dt\,\nabla_\perp v_{\rm ph}.
$$

To first order in $dt$, the corresponding change in ray direction is therefore

$$
\frac{d\hat{\mathbf k}}{dt}
=-\nabla_\perp v_{\rm ph}.
$$

Because a surface of constant phase propagates with the phase velocity,

$$
\frac{dl}{dt}=v_{\rm ph}.
$$

Using the chain rule gives

$$
\frac{d\hat{\mathbf k}}{dl}
=-\frac{1}{v_{\rm ph}}
\nabla_\perp v_{\rm ph}.
$$

Since $v_{\rm ph}=c/n_r$,

$$
\nabla_\perp v_{\rm ph}
=-\frac{v_{\rm ph}}{n_r}
\nabla_\perp n_r,
$$

and hence

$$
\boxed{
\frac{d\hat{\mathbf k}}{dl}
=\frac{\nabla_\perp n_r}{n_r}
}.
$$

The full refractive-index gradient can be decomposed as

$$
\nabla n_r
=
\nabla_\perp n_r
+
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla n_r\right),
$$

while

$$
\frac{dn_r}{dl}
=\hat{\mathbf k}\cdot\nabla n_r.
$$

Therefore,

$$
\begin{aligned}
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
&=
n_r\frac{d\hat{\mathbf k}}{dl}
+
\hat{\mathbf k}\frac{dn_r}{dl}\\
&=
\nabla_\perp n_r
+
\hat{\mathbf k}
\left(\hat{\mathbf k}\cdot\nabla n_r\right)\\
&=\nabla n_r.
\end{aligned}
$$

Thus,

$$
\boxed{
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=\nabla n_r
}.
$$

Only the component of the refractive-index gradient perpendicular to the ray changes its direction. The parallel component changes the local wavelength but does not bend the ray.

---

## 12. 复习清单与参考资料

### 12.1 应该能够独立推导

- 从 $\omega^2=\omega_p^2+c^2k^2$ 推出 $n_r=\sqrt{1-\omega_p^2/\omega^2}$。
- 从固定相位条件 $d(kl-\omega t)=0$ 推出 $dl/dt=v_{\rm ph}$。
- 从 $F=z-v_{\rm ph}(x,y)dt=0$ 计算 $\nabla F$。
- 解释为什么 $\nabla F$ 垂直于波前。
- 从波前法线变化推出 $d\hat{\mathbf k}/dt=-\nabla_\perp v_{\rm ph}$。
- 用链式法则和 $v_{\rm ph}=c/n_r$ 推出 $d\hat{\mathbf k}/dl=\nabla_\perp n_r/n_r$。
- 展开乘积导数并恢复 RL Eq. 8.18。
- 说明为什么冷等离子体过密区通常表现为发散透镜。

### 12.2 可以直接记住的核心结论

$$
\boxed{
\omega^2=\omega_p^2+c^2k^2,
\qquad
n_r=\frac{ck}{\omega}
=\sqrt{1-\frac{\omega_p^2}{\omega^2}}
}
$$

$$
\boxed{
v_{\rm ph}=\frac{c}{n_r},
\qquad
\frac{dl}{dt}=v_{\rm ph}
}
$$

$$
\boxed{
\frac{d\hat{\mathbf k}}{dl}
=\frac{\nabla_\perp n_r}{n_r}
}
$$

$$
\boxed{
\frac{d}{dl}\left(n_r\hat{\mathbf k}\right)
=\nabla n_r
}
$$

$$
\boxed{
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e
}
$$

### 12.3 参考资料

1. G. B. Rybicki & A. P. Lightman, *Radiative Processes in Astrophysics*, §8.1，尤其是印刷页 227 的 Eq. 8.15–8.18。
2. 同课程目录中的 `AST1440_电磁波_冷等离子体色散与习题2.2_8.1_8.2详解.md`：冷等离子体色散、相速度和群速度。
3. 同课程目录中的 `AST1440_偏振_Faraday旋转_等离子体折射与闪烁_习题8.3详解.md`：等离子体相位屏、偏折角、散射与 scintillation。
