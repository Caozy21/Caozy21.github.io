---
title: "Loss cone：从轨道几何到扩散、恒星尖峰与盘耗散"
description: "从 Kepler 轨道与损失锥几何出发，系统推导角动量扩散、恒星尖峰、捕获通量与穿盘耗散。"
tags: [Dynamics, Loss cone, Stellar dynamics]
order: 1
---

# Loss cone：从轨道几何到扩散、恒星尖峰与盘耗散

> 本文以《loss cone.pdf》手写笔记为主线，统一符号、补全中间步骤，并区分严格恒等式、受控近似与模型假设。主要讨论黑洞主导的 Kepler 势、单质量恒星和非共振两体弛豫；最后扩展到二维能量—角动量演化及恒星穿盘耗散。

核心问题是：**哪些轨道会被中心移除，恒星如何扩散进入这些轨道，以及移除与补给如何共同改变恒星分布？**

推导顺序为

$$
\text{轨道几何}
\longrightarrow \mathcal R_{\rm lc}
\longrightarrow (A_{\mathcal R},B_{\mathcal R\mathcal R})
\longrightarrow \text{角动量扩散}
\longrightarrow \mathcal F_{\rm lc}
\longrightarrow \overline N(\mathcal E,t)
\longrightarrow n(r,t).
$$

这里有两条相互关联但不能混同的演化链：能量弛豫决定恒星在不同半长轴上的分布；角动量弛豫决定同一能量层内有多少恒星进入损失锥。

阅读路线：

- **第 1–3 节：背景与变量。** 从 Kepler 轨道进入损失锥几何，再建立尖峰密度、能量分布和半长轴分布之间的联系。
- **第 4–5 节：核心推导。** 从随机速度踢动推到角动量 Fokker–Planck 方程、对数分布和空损失锥通量。
- **第 6–8 节：有限周期与捕获率。** 理解 $q$、有效边界、归一化及捕获率随半长轴的变化。
- **第 9 节：采样与密度重建。** 将解析分布转换为轨道样本和可比较的空间密度。
- **第 10–13 节：时间演化。** 处理二维倾斜边界、一维 sink 闭合、盘漂移及耗散率标度。
- **第 14–16 节：实现与一致性。** 明确守恒、边界处理以及笔记中需要区分的概念。

## 1. 符号、分布函数与适用范围

### 1.1 统一采用正的束缚能

设黑洞质量为 $M_\bullet$，单颗恒星质量、半径分别为 $m_\star,R_\star$。忽略恒星自引力对轨道势的贡献时，

$$
\Phi(r)=-\frac{GM_\bullet}{r},\qquad
\psi(r)\equiv-\Phi(r)=\frac{GM_\bullet}{r}.
$$

比机械能 $E$ 为负，而正的比束缚能定义为

$$
E=\frac{v^2}{2}+\Phi=-\frac{GM_\bullet}{2a},
\qquad
\boxed{\mathcal E\equiv-E=\psi-\frac{v^2}{2}=\frac{GM_\bullet}{2a}>0.}
\tag{1}
$$

因此 $a$ 减小意味着 $\mathcal E$ 增大。后文所有能量通量均以增大 $\mathcal E$ 为正方向；若改用 $E<0$，必须同步转换导数、漂移和通量的符号。

比角动量记作 $J=|\boldsymbol r\times\boldsymbol v|$，对应手写笔记中的 $L$。同能量圆轨道满足

$$
J_c^2(\mathcal E)=GM_\bullet a=\frac{(GM_\bullet)^2}{2\mathcal E}.
$$

引入无量纲角动量

$$
\boxed{\mathcal R\equiv\frac{J^2}{J_c^2}=1-e^2,\qquad 0\leq\mathcal R\leq1.}
\tag{2}
$$

用 $r$ 表示空间半径，用 $a$ 表示半长轴，用 $\mathcal R$ 表示角动量变量，避免将三者写成同一个 $R$。

径向周期在 Kepler 势中等于轨道周期，且与 $\mathcal R$ 无关：

$$
\boxed{P(\mathcal E)=2\pi\sqrt{\frac{a^3}{GM_\bullet}}
=\frac{2\pi GM_\bullet}{(2\mathcal E)^{3/2}}.}
\tag{3}
$$

### 1.2 $f$、$N$ 和 $\overline N$ 不是同一个量

采用数目相空间分布函数 $f$，使

$$
dN_\star=f(\boldsymbol r,\boldsymbol v,t)\,d^3r\,d^3v.
$$

在球对称且已对轨道相位平均的描述中，

$$
\boxed{
N(\mathcal E,\mathcal R,t)
=\mathcal J(\mathcal E,\mathcal R)f(\mathcal E,\mathcal R,t),
\qquad
\mathcal J=4\pi^2P J_c^2.
}
\tag{4}
$$

其中 $N\,d\mathcal E\,d\mathcal R$ 是该轨道区间内的恒星数。因而：

| 量 | 定义／含义 |
|---|---|
| $f$ | 每单位六维相空间体积的恒星数 |
| $N(\mathcal E,\mathcal R)$ | 每单位 $d\mathcal E\,d\mathcal R$ 的恒星数 |
| $\overline N_{\rm out}(\mathcal E)$ | 损失锥外每单位 $d\mathcal E$ 的恒星数 |
| $\mathcal F_{\rm lc}(\mathcal E)$ | 每单位时间、每单位 $d\mathcal E$ 的移除数，规定为正 |
| $n(r)$ | 每单位空间体积的恒星数 |

特别地，本文始终定义

$$
\boxed{
\overline N_{\rm out}(\mathcal E,t)
=\int_{\mathcal R_{\rm lc}(\mathcal E)}^1N(\mathcal E,\mathcal R,t)\,d\mathcal R.
}
\tag{5}
$$

它是角动量积分，不是除以区间长度之后的平均。后面处理有效边界时，这个积分下限不能随意改成 $\mathcal R_0$。

## 2. 从近心点条件得到损失锥边界

### 2.1 空间移除尺度

潮汐破坏尺度由黑洞潮汐加速度与恒星自引力比较得到：

$$
\frac{GM_\bullet R_\star}{r_t^3}\sim\frac{Gm_\star}{R_\star^2}
\quad\Longrightarrow\quad
r_t\sim R_\star\left(\frac{M_\bullet}{m_\star}\right)^{1/3}.
$$

精确系数取决于恒星内部结构和潮汐破坏判据。用 $r_{\rm cap}$ 表示与直接捕获相对应的有效尺度，可以在牛顿轨道模型中写

$$
r_{\rm lc}=\max(r_t,r_{\rm cap}).
$$

若关注强相对论捕获，应直接采用适当的临界角动量 $J_{\rm cap}$，而不能把事件视界半径直接代入牛顿公式。人为设置的近心点截断也可用同样的数学边界描述，但不能自动解释为真实潮汐破坏尺度。

### 2.2 临界角动量

刚好擦过移除球面的轨道在近心点满足 $r_p=r_{\rm lc}$、$v_r=0$，因此

$$
-\mathcal E=\frac{J_{\rm lc}^2}{2r_{\rm lc}^2}-\frac{GM_\bullet}{r_{\rm lc}},
$$

从而

$$
\boxed{
J_{\rm lc}^2=2GM_\bullet r_{\rm lc}-2\mathcal E r_{\rm lc}^2
=GM_\bullet\left(2r_{\rm lc}-\frac{r_{\rm lc}^2}{a}\right).
}
\tag{6}
$$

在 $a\gg r_{\rm lc}$ 时，第二项相对较小，于是

$$
J_{\rm lc}^2\simeq2GM_\bullet r_{\rm lc}.
$$

也可以直接从 $r_p=a(1-e)$ 得到

$$
e_{\rm lc}=1-\frac{r_{\rm lc}}a,
$$

$$
\boxed{
\mathcal R_{\rm lc}(a)
=1-e_{\rm lc}^2
=2\frac{r_{\rm lc}}a-\left(\frac{r_{\rm lc}}a\right)^2
\simeq\frac{2r_{\rm lc}}a.
}
\tag{7}
$$

式 (7) 的精确表达适用于 $a\geq r_{\rm lc}$。当 $a<r_{\rm lc}$ 时，所有轨道的近心点都已小于移除半径，不存在通常意义上的存活角动量区间，不能继续外推这个表达式。

损失锥轨道满足

$$
\boxed{\mathcal R<\mathcal R_{\rm lc}\quad\Longleftrightarrow\quad r_p<r_{\rm lc}.}
$$

注意右边是近心点条件，不是恒星此刻的空间位置条件 $r<r_{\rm lc}$。位于较大半径的恒星也可以已经处在损失锥轨道上。

### 2.3 速度空间中的“锥”

在给定位置 $r$，令速度与径向的夹角为 $\theta$，则

$$
J=rv\sin\theta.
$$

小角度时

$$
\theta_{\rm lc}^2\simeq\frac{J_{\rm lc}^2}{r^2v^2}.
$$

在黑洞主导区，取 $v^2\sim GM_\bullet/r$，得到 $\theta_{\rm lc}^2\sim r_{\rm lc}/r$，这里仅表示尺度关系，具体系数取决于采用的速度。低角动量区域在速度空间呈锥状，这就是 loss cone 名称的来源。

## 3. 恒星尖峰、能量分布与半长轴分布

这一节建立后续损失锥计算所需的背景恒星库。仅给出 $n(r)$，并不等于已经给出了 $N(\mathcal E,\mathcal R)$。

### 3.1 从 $f(\mathcal E)\propto\mathcal E^p$ 推出 $n(r)$

先考虑各向同性背景

$$
f(\mathcal E)=f_0\mathcal E^p,\qquad p>-1.
$$

对速度积分：

$$
n(r)=4\pi\int_0^{\sqrt{2\psi}}
f_0\left(\psi-\frac{v^2}{2}\right)^p v^2\,dv.
$$

取 $x=v^2/(2\psi)$，有

$$
v^2dv=\sqrt2\,\psi^{3/2}x^{1/2}dx.
$$

故

$$
n(r)=4\pi\sqrt2 f_0\psi^{p+3/2}
\int_0^1x^{1/2}(1-x)^pdx
=4\pi\sqrt2 f_0 B\left(\frac32,p+1\right)\psi^{p+3/2}.
$$

由于 $\psi\propto r^{-1}$，

$$
\boxed{n(r)\propto r^{-\gamma},\qquad \gamma=p+\frac32.}
\tag{8}
$$

于是 $p=1/4$ 对应

$$
\boxed{f(\mathcal E)\propto\mathcal E^{1/4},\qquad n(r)\propto r^{-7/4}.}
\tag{9}
$$

这个关系要求 Kepler 势、各向同性和足够宽的幂律区间；有限的内外截断会改变边缘附近的密度形状。

### 3.2 为什么弛豫背景会出现 $7/4$ 指数

先作尺度估计。两体弛豫时间满足

$$
t_r\sim\frac{v^3}{G^2m_\star^2 n\ln\Lambda}.
$$

在 $v\propto r^{-1/2}$、$n\propto r^{-\gamma}$ 的情况下，

$$
t_r\propto r^{\gamma-3/2}.
$$

每个对数半径区间的恒星数为 $dN_\star/d\ln r\propto nr^3$，每颗星的束缚能尺度为 $GM_\bullet m_\star/r$。若通过弛豫传递的能量流近似与半径无关，

$$
\dot E_{\rm heat}\sim
\frac{(nr^3)(GM_\bullet m_\star/r)}{t_r}
\propto r^{7/2-2\gamma}.
$$

令指数为零得到 $\gamma=7/4$。

这是对指数的物理解释，不代替完整能量空间 Fokker–Planck 稳态解。它也没有假定数目流很大：尖峰的能量输运、近似零的能量空间数目流，以及角动量空间的有限捕获流，可以在相应近似下共存。

### 3.3 从能量分布到半长轴分布

各向同性时，固定 $\mathcal E$ 的 $N$ 与 $\mathcal R$ 无关。Kepler 势下由式 (3)、(4)，

$$
\mathcal J(\mathcal E)
=\sqrt2\pi^3(GM_\bullet)^3\mathcal E^{-5/2}.
$$

对完整角动量区间积分，

$$
\frac{dN_\star}{d\mathcal E}=\mathcal J f
\propto\mathcal E^{p-5/2}.
$$

利用 $\mathcal E=GM_\bullet/(2a)$ 和绝对 Jacobian

$$
\left|\frac{d\mathcal E}{da}\right|=\frac{GM_\bullet}{2a^2},
$$

得到

$$
\boxed{
\frac{dN_\star}{da}
=\frac{dN_\star}{d\mathcal E}\left|\frac{d\mathcal E}{da}\right|
\propto a^{1/2-p}.
}
\tag{10}
$$

所以 $p=1/4$ 时

$$
\boxed{\frac{dN_\star}{da}\propto a^{1/4},\qquad
\frac{dN_\star}{d\ln a}\propto a^{5/4}.}
$$

虽然 $4\pi r^2n(r)\propto r^{1/4}$ 具有相同指数，但它描述空间壳层计数，不能用“令 $r=a$”来替代上述轨道相空间推导。两者的归一化和边界效应一般不同。

### 3.4 热偏心率分布

固定能量的各向同性分布满足 $p(\mathcal R\mid a)=1$。由 $\mathcal R=1-e^2$，

$$
p(e\mid a)\,de=p(\mathcal R\mid a)|d\mathcal R|,
\qquad
\boxed{p(e\mid a)=2e,\quad0\leq e<1.}
\tag{11}
$$

因此“热偏心率”并不是令 $e$ 均匀，而是令 $e^2$ 或 $\mathcal R$ 均匀。引入损失锥以后，存活恒星的偏心率分布还会发生改变。

## 4. 从随机散射到 Fokker–Planck 方程

### 4.1 二阶展开为何产生 drift 和 diffusion

暂时固定能量，记 $w(y\mid\mathcal R)$ 为在短时间 $\Delta t$ 内角动量变量变化 $y=\Delta\mathcal R$ 的转移概率密度。粒子数守恒给出

$$
N(\mathcal R,t+\Delta t)
=\int N(\mathcal R-y,t)w(y\mid\mathcal R-y)\,dy.
$$

将乘积在 $\mathcal R$ 处展开：

$$
N(\mathcal R-y)w(y\mid\mathcal R-y)
=Nw-y\,\partial_{\mathcal R}(Nw)
+\frac{y^2}{2}\partial_{\mathcal R}^2(Nw)+\cdots.
$$

对 $y$ 积分，并用 $\int w\,dy=1$，得到

$$
\frac{N(t+\Delta t)-N(t)}{\Delta t}
=-\partial_{\mathcal R}\left(N\frac{\langle\Delta\mathcal R\rangle}{\Delta t}\right)
+\frac12\partial_{\mathcal R}^2
\left(N\frac{\langle(\Delta\mathcal R)^2\rangle}{\Delta t}\right)+\cdots.
$$

在弱散射、Markov 和扩散近似下，定义单位时间矩

$$
A_{\mathcal R}=\lim_{\Delta t\to0}\frac{\langle\Delta\mathcal R\rangle}{\Delta t},
\qquad
B_{\mathcal R\mathcal R}=\lim_{\Delta t\to0}
\frac{\langle(\Delta\mathcal R)^2\rangle}{\Delta t},
$$

得到

$$
\boxed{
\frac{\partial N}{\partial t}
=-\frac{\partial}{\partial\mathcal R}(A_{\mathcal R}N)
+\frac12\frac{\partial^2}{\partial\mathcal R^2}(B_{\mathcal R\mathcal R}N).
}
\tag{12}
$$

这里的 drift 是一阶矩项；它可以来自变量变换的几何性质，并不一定意味着有外加耗散力。

### 4.2 低角动量时的一阶矩

在固定 $r$ 的局部散射中，令 $\boldsymbol v_t$ 为相对径向方向的二维切向速度。暂时忽略能量改变对 $J_c$ 的影响，

$$
\mathcal R=\frac{r^2v_t^2}{J_c^2},
$$

$$
\Delta\mathcal R
=\frac{r^2}{J_c^2}
\left(2\boldsymbol v_t\cdot\Delta\boldsymbol v_t+|\Delta\boldsymbol v_t|^2\right).
$$

在 $\mathcal R\ll1$ 的领先阶，切向踢动近似各向同性。定义

$$
B_{v_t}\equiv\lim_{\Delta t\to0}
\frac{\langle|\Delta\boldsymbol v_t|^2\rangle}{\Delta t}.
$$

若忽略更高阶的系统切向漂移，线性项平均为零，故

$$
\boxed{A_{\mathcal R}^{\rm local}\simeq\frac{r^2}{J_c^2}B_{v_t}.}
\tag{13}
$$

即使 $\langle\Delta\boldsymbol v_t\rangle=0$，平方变量 $v_t^2$ 的平均增量仍然为正。这就是一阶漂移不能直接删去的原因。

### 4.3 二阶矩以及关键的因子 2

计算 $(\Delta\mathcal R)^2$ 时，只保留平均后为 $O(\Delta t)$ 的项：

$$
B_{\mathcal R\mathcal R}^{\rm local}
\simeq\frac{4r^4}{J_c^4}
\lim_{\Delta t\to0}
\frac{\langle(\boldsymbol v_t\cdot\Delta\boldsymbol v_t)^2\rangle}{\Delta t}.
$$

二维切向各向同性意味着沿任一切向轴的方差为总方差的一半，所以

$$
\langle(\boldsymbol v_t\cdot\Delta\boldsymbol v_t)^2\rangle
=\frac{v_t^2}{2}\langle|\Delta\boldsymbol v_t|^2\rangle.
$$

代入 $r^2v_t^2/J_c^2=\mathcal R$，得到

$$
\boxed{
B_{\mathcal R\mathcal R}^{\rm local}
\simeq2\mathcal R\frac{r^2}{J_c^2}B_{v_t}
=2\mathcal R A_{\mathcal R}^{\rm local}.
}
\tag{14}
$$

这些是小 $\mathcal R$、固定能量约化下的领先阶结果。包含能量变化的完整坐标变换还会产生额外漂移和交叉扩散项，不能由式 (13)、(14) 直接推定。

### 4.4 轨道平均与 $D(\mathcal E)$

轨道平均按恒星在不同半径的停留时间加权：

$$
\langle X\rangle_{\rm orb}
=\frac1P\oint X\,dt
=\frac2P\int_{r_p}^{r_a}\frac{X(r)}{|v_r|}\,dr.
$$

定义

$$
\boxed{
D(\mathcal E)
\equiv\lim_{\mathcal R\to0}\frac{B_{\mathcal R\mathcal R}^{\rm orb}}{2\mathcal R}
=\lim_{\mathcal R\to0}\frac{2}{P J_c^2}
\int_{r_p}^{r_a}\frac{r^2 B_{v_t}}{|v_r|}\,dr.
}
\tag{15}
$$

于是

$$
A_{\mathcal R}^{\rm orb}\simeq D,\qquad
B_{\mathcal R\mathcal R}^{\rm orb}\simeq2D\mathcal R.
$$

$D$ 的量纲为时间的倒数，通常满足 $D\sim t_r^{-1}$，但比例系数由轨道平均和背景分布决定。

### 4.5 drift 如何与扩散项组合

将上式代入式 (12)，在固定能量下 $D$ 与 $\mathcal R$ 无关：

$$
\begin{aligned}
\partial_tN
&=-D\partial_{\mathcal R}N
+D\partial_{\mathcal R}^2(\mathcal R N)\\
&=-D\partial_{\mathcal R}N
+D\left(2\partial_{\mathcal R}N+\mathcal R\partial_{\mathcal R}^2N\right)\\
&=D\partial_{\mathcal R}\left(\mathcal R\partial_{\mathcal R}N\right).
\end{aligned}
$$

因此

$$
\boxed{\partial_tN=D(\mathcal E)\partial_{\mathcal R}
\left(\mathcal R\partial_{\mathcal R}N\right).}
\tag{16}
$$

drift 没有消失，而是已经包含在这个保守形式中。若直接删去一阶矩，反而会多出错误的 $D\partial_{\mathcal R}N$。

## 5. 通量、空损失锥与对数稳态

### 5.1 先固定通量符号

写成连续性方程

$$
\partial_tN=-\partial_{\mathcal R}F_{\mathcal R},
\qquad
\boxed{F_{\mathcal R}=-D\mathcal R\partial_{\mathcal R}N.}
\tag{17}
$$

若 $N$ 随 $\mathcal R$ 增大，则 $F_{\mathcal R}<0$：恒星向更低角动量流动。定义正的损失率

$$
\boxed{\mathcal F_{\rm lc}=-F_{\mathcal R}(\mathcal R_{\rm lc})>0.}
\tag{18}
$$

### 5.2 空损失锥的吸收边界

若恒星一旦进入损失锥，在被散射出来之前就先经过近心点并被移除，可近似取

$$
N(\mathcal R_{\rm lc})=0.
$$

准稳态角动量分布满足

$$
\partial_{\mathcal R}(\mathcal R\partial_{\mathcal R}N)=0,
$$

逐次积分得到

$$
\mathcal R\partial_{\mathcal R}N=C,\qquad
N=C\ln\mathcal R+B.
$$

利用吸收边界，$B=-C\ln\mathcal R_{\rm lc}$，故

$$
N=C\ln\frac{\mathcal R}{\mathcal R_{\rm lc}}.
$$

再用式 (5) 归一化，

$$
\begin{aligned}
\overline N_{\rm out}
&=C\int_{\mathcal R_{\rm lc}}^1\ln\frac{\mathcal R}{\mathcal R_{\rm lc}}\,d\mathcal R\\
&=C\left[\mathcal R\ln\frac{\mathcal R}{\mathcal R_{\rm lc}}-\mathcal R\right]_{\mathcal R_{\rm lc}}^1\\
&=C\left[\ln\frac1{\mathcal R_{\rm lc}}-1+\mathcal R_{\rm lc}\right].
\end{aligned}
$$

因此

$$
\boxed{
N(\mathcal R\mid\mathcal E)
=\frac{\overline N_{\rm out}\ln(\mathcal R/\mathcal R_{\rm lc})}
{\ln(1/\mathcal R_{\rm lc})-1+\mathcal R_{\rm lc}}.
}
\tag{19}
$$

这一归一化在所采用的对数模型内是精确的；将小 $\mathcal R$ 扩散系数一直外推到 $\mathcal R=1$ 本身仍是一种近似。

### 5.3 空损失锥通量

由 $\partial_{\mathcal R}N=C/\mathcal R$，

$$
\boxed{
\mathcal F_{\rm lc}=DC
=\frac{D\overline N_{\rm out}}
{\ln(1/\mathcal R_{\rm lc})-1+\mathcal R_{\rm lc}}
\simeq\frac{D\overline N_{\rm out}}{\ln(1/\mathcal R_{\rm lc})}.
}
\tag{20}
$$

末式要求 $\ln(1/\mathcal R_{\rm lc})\gg1$。它表示：一个弛豫时间内，进入损失锥的只是能量层中大约 $1/\ln(1/\mathcal R_{\rm lc})$ 的恒星。

### 5.4 “稳态”需要补给，或只能理解为局部准稳态

式 (19) 有非零的恒定向内通量，因此也要求大角动量端有补给。若同时要求封闭系统的 $F_{\mathcal R}(1)=0$、没有源项且 $\partial_tN=0$，则恒定通量只能为零；再结合吸收边界，只剩零解。

因此应区分：固定外部恒星库支持的真正稳态；以及总恒星数缓慢减少、低角动量区已经接近对数形状的局部准稳态。不能将非零通量的严格稳态与封闭反射边界同时使用。

## 6. 空／满损失锥：时间尺度与 $q$

### 6.1 角动量改变时间可以比能量弛豫时间短

由 $B_{\mathcal R\mathcal R}=2D\mathcal R$，要使 $\mathcal R$ 改变自身量级，所需时间约为

$$
t_{\mathcal R}\sim\frac{\mathcal R^2}{B_{\mathcal R\mathcal R}}
\sim\frac{\mathcal R}{D}\sim\mathcal R t_r,
$$

这里省略了定义依赖的阶一系数。于是损失锥边缘有

$$
t_{\mathcal R,\rm lc}\sim\frac{\mathcal R_{\rm lc}}D\ll t_r.
$$

这解释了为什么一个系统的能量分布尚未充分弛豫，低角动量分布仍可能已接近准稳态。

### 6.2 定义与物理意义

定义

$$
\boxed{q(\mathcal E)\equiv\frac{P(\mathcal E)D(\mathcal E)}{\mathcal R_{\rm lc}(\mathcal E)}.}
\tag{21}
$$

在边界附近，一个周期内的方差为

$$
\langle(\delta\mathcal R)^2\rangle_P
\simeq2D\mathcal R_{\rm lc}P=2q\mathcal R_{\rm lc}^2.
$$

因此 $q$ 衡量单次轨道周期内的扩散相对于损失锥宽度的强弱，也有尺度关系

$$
q\sim\left(\frac{\delta J}{J_{\rm lc}}\right)^2
\sim\frac{P}{t_{\mathcal R,\rm lc}}.
$$

| 区间 | 物理图像 | 边界处理 |
|---|---|---|
| $q\ll1$ | 单周期扩散小；进入后通常先被移除 | 近似 $N(\mathcal R_{\rm lc})=0$ |
| $q\gg1$ | 单周期可反复跨过边界；角动量补给较快 | 需有限周期边界层 |

满损失锥不表示黑洞持续吞掉所有恒星，而表示低角动量区的占据接近未耗尽的分布。

### 6.3 满损失锥率与有限区间归一化

若固定能量层的各向同性分布为 $N_{\rm iso}$，损失锥内共有 $N_{\rm iso}\mathcal R_{\rm lc}\,d\mathcal E$ 颗恒星。每个周期移除一次的估计给出

$$
\mathcal F_{\rm full}\simeq\frac{N_{\rm iso}\mathcal R_{\rm lc}}P.
$$

因为 $\overline N_{\rm out}=N_{\rm iso}(1-\mathcal R_{\rm lc})$，若用锥外总数归一化，则

$$
\boxed{
\mathcal F_{\rm full}\simeq
\frac{\overline N_{\rm out}}P
\frac{\mathcal R_{\rm lc}}{1-\mathcal R_{\rm lc}}
\simeq\frac{\overline N_{\rm out}\mathcal R_{\rm lc}}P.
}
\tag{22}
$$

末式是窄损失锥近似。由于 $\mathcal R=J^2/J_c^2$ 已经是角动量的平方，锥内比例是 $\mathcal R_{\rm lc}$，不再额外平方。

## 7. 有效边界与统一通量公式

### 7.1 $\mathcal R_0$ 是外侧解的外推零点

有限周期效应允许 $N(\mathcal R_{\rm lc})>0$。常用匹配方法保留锥外对数形式，令

$$
N(\mathcal R)=C\ln\frac{\mathcal R}{\mathcal R_0},
\qquad
\mathcal R_0<\mathcal R_{\rm lc}.
$$

定义

$$
\alpha(q)\equiv\ln\frac{\mathcal R_{\rm lc}}{\mathcal R_0},
\qquad
\boxed{\mathcal R_0=\mathcal R_{\rm lc}e^{-\alpha(q)}.}
\tag{23}
$$

$\mathcal R_0$ 不是新的物理捕获半径，也不意味着可以将对数外侧解在整个锥内当作真实分布。

笔记采用的边界层表达为

$$
\boxed{
\alpha(q)=\frac q{\xi(q)},\qquad
\xi(q)=1-4\sum_{m=1}^{\infty}\frac{e^{-j_{0,m}^2q/4}}{j_{0,m}^2},
}
\tag{24}
$$

其中 $j_{0,m}$ 为 $J_0$ 的第 $m$ 个正零点。这一特殊函数关系来自轨道相位分辨的边界层问题，不能仅由轨道平均的式 (16) 推出；这里将它作为匹配输入。其形式可与 [Merritt 的综述式 (28)](https://arxiv.org/pdf/1307.3268) 对照。

### 7.2 小 $q$ 极限为什么出现 $\sqrt q$

在 $q\to0$ 时，需要大量 Bessel 模式。由 $j_{0,m}$ 的大阶间隔约为 $\pi$，对式 (24) 求导有

$$
\xi'(q)=\sum_{m=1}^{\infty}e^{-j_{0,m}^2q/4}
\simeq\frac1\pi\int_0^\infty e^{-x^2q/4}dx
=\frac1{\sqrt{\pi q}}.
$$

结合 $\xi(0)=0$，

$$
\xi(q)\simeq\frac2{\sqrt\pi}\sqrt q,
\qquad
\alpha(q)\simeq\frac{\sqrt\pi}{2}\sqrt q.
$$

因此

$$
q\ll1:\quad\mathcal R_0\to\mathcal R_{\rm lc};
\qquad
q\gg1:\quad\xi\to1,\quad\alpha\to q,\quad
\mathcal R_0\simeq\mathcal R_{\rm lc}e^{-q}.
$$

数值实现时，大 $q$ 下宜直接保存 $\alpha$ 和 $\ln\mathcal R_0=\ln\mathcal R_{\rm lc}-\alpha$，避免计算极小的指数导致下溢。小 $q$ 时应使用渐近式或足够多的模式，防止 $1-$级数的消减误差。

### 7.3 必须保持物理积分下限不变

仍定义锥外数目为式 (5)。则

$$
\begin{aligned}
\overline N_{\rm out}
&=C\int_{\mathcal R_{\rm lc}}^1\ln\frac{\mathcal R}{\mathcal R_0}\,d\mathcal R\\
&=C\left[\ln\frac1{\mathcal R_0}-1
-\mathcal R_{\rm lc}\ln\frac{\mathcal R_{\rm lc}}{\mathcal R_0}
+\mathcal R_{\rm lc}\right].
\end{aligned}
$$

记

$$
\boxed{
Z(\mathcal E)
=\ln\frac1{\mathcal R_{\rm lc}}-1+\mathcal R_{\rm lc}
+(1-\mathcal R_{\rm lc})\alpha(q).
}
\tag{25}
$$

则锥外归一化后的结果为

$$
\boxed{
N(\mathcal E,\mathcal R)
=\frac{\overline N_{\rm out}}Z
\left[\ln\frac{\mathcal R}{\mathcal R_{\rm lc}}+\alpha\right],
\quad\mathcal R_{\rm lc}\leq\mathcal R\leq1.
}
\tag{26}
$$

只有当归一化定义改成对数学区间 $[\mathcal R_0,1]$ 积分时，分母才是 $\ln(1/\mathcal R_0)-1+\mathcal R_0$。这与式 (5) 是不同的定义，不能将 $\mathcal R_{\rm lc}$ 机械地全部替换为 $\mathcal R_0$。

### 7.4 通量与耗尽时间

对数解有 $\mathcal F_{\rm lc}=DC$，所以

$$
\boxed{
\mathcal F_{\rm lc}=\frac{D\overline N_{\rm out}}Z,
\qquad
t_{\rm loss}\equiv\frac{\overline N_{\rm out}}{\mathcal F_{\rm lc}}=\frac ZD.
}
\tag{27}
$$

该表达将边界层匹配与锥外对数近似结合；保留 $Z$ 的有限区间项并不使整个模型超出小损失锥近似的适用范围。

边界值为

$$
N(\mathcal R_{\rm lc})=\frac{\overline N_{\rm out}\alpha}Z.
$$

利用 $D=q\mathcal R_{\rm lc}/P$ 和 $\alpha=q/\xi$，可重写为

$$
\boxed{
\mathcal F_{\rm lc}
=\frac{\xi(q)\mathcal R_{\rm lc}}P N(\mathcal R_{\rm lc}).
}
\tag{28}
$$

等价的 Robin 边界条件是

$$
\boxed{
N(\mathcal R_{\rm lc})
=\alpha\mathcal R_{\rm lc}
\left.\partial_{\mathcal R}N\right|_{\rm lc}.
}
\tag{29}
$$

### 7.5 两个不同的“过渡条件”

窄损失锥且只保留主要项时，

$$
Z\simeq\ln(1/\mathcal R_{\rm lc})+\frac q{\xi(q)}.
$$

相对于式 (22) 的满锥率，

$$
\boxed{
\frac{\mathcal F_{\rm lc}}{\mathcal F_{\rm full}}
\simeq\frac{q}{\ln(1/\mathcal R_{\rm lc})+q/\xi(q)}.
}
\tag{30}
$$

因此应区分：$q\sim1$ 表示单周期扩散已能跨越损失锥；而捕获通量要接近满损失锥极限，通常需 $q\gtrsim\ln(1/\mathcal R_{\rm lc})$。当这个对数很大时，两种条件并不相同。

另外 $N(\mathcal R_{\rm lc})/\overline N_{\rm out}=\alpha/Z$ 是边界分布值相对角动量积分的比值，不是“处在损失锥内的恒星比例”。后者必须对真实锥内分布积分。

## 8. 弛豫系数与捕获通量的半长轴标度

### 8.1 Coulomb logarithm 的来源

弱引力散射在冲量近似下给出

$$
\delta v\sim\frac{Gm_\star}{bv},
\qquad
d\Gamma\sim2\pi b\,db\,nv.
$$

因而

$$
\frac{d\langle(\delta v)^2\rangle}{dt}
\sim\int(\delta v)^2d\Gamma
\sim\frac{G^2m_\star^2n}{v}\int_{b_{\min}}^{b_{\max}}\frac{db}{b}.
$$

定义

$$
\ln\Lambda=\ln\frac{b_{\max}}{b_{\min}},\qquad
t_r\sim\frac{v^2}{d\langle(\delta v)^2\rangle/dt}
\sim\frac{v^3}{G^2m_\star^2n\ln\Lambda}.
$$

若 $b_{\max}\sim r$、$b_{\min}\sim Gm_\star/v^2$ 且 $v^2\sim GM_\bullet/r$，则 $\Lambda\sim M_\bullet/m_\star$。这是量级估计，不是所有背景都严格成立的常数处方。

### 8.2 $7/4$ 尖峰中的 $q(a)$

在无边界效应的单质量尺度区间内，

$$
n\propto r^{-7/4}
\quad\Longrightarrow\quad
t_r\propto r^{1/4}.
$$

若轨道平均保留相同尺度行为，$D(a)\propto a^{-1/4}$。结合 $P\propto a^{3/2}$ 和 $\mathcal R_{\rm lc}\simeq2r_{\rm lc}/a$，

$$
\boxed{q(a)\propto a^{9/4}.}
\tag{31}
$$

因此小半长轴通常更接近空损失锥，大半长轴更容易进入快速补给区域。但靠近 $a\sim r_{\rm lc}$、势不再 Kepler 化或背景明显耗尽时，这个标度不能继续使用。

### 8.3 哪些半长轴贡献较多捕获事件

要比较每个对数半长轴区间的事件率，应写

$$
\frac{d\dot N_{\rm lc}}{d\ln a}
=a\left|\frac{d\mathcal E}{da}\right|\mathcal F_{\rm lc}
=\mathcal E\mathcal F_{\rm lc}.
$$

对于尚未显著耗尽的背景，$dN_\star/d\ln a\propto a^{5/4}$。于是

$$
\left.\frac{d\dot N_{\rm lc}}{d\ln a}\right|_{\rm empty}
\sim\frac{D}{\ln(1/\mathcal R_{\rm lc})}\frac{dN_\star}{d\ln a}
\propto\frac a{\ln[a/(2r_{\rm lc})]},
$$

$$
\left.\frac{d\dot N_{\rm lc}}{d\ln a}\right|_{\rm full}
\sim\frac{\mathcal R_{\rm lc}}P\frac{dN_\star}{d\ln a}
\propto a^{-5/4}.
$$

在两个渐近区间之间，通量往往在过渡附近较大；峰值位置还取决于边界、背景归一化与真实扩散系数，不能仅凭 $q=1$ 精确定位。

## 9. 从理论分布到轨道采样和空间密度

### 9.1 三种角动量样本代表不同模型

固定 $a$，记 $b=\mathcal R_{\rm lc}(a)$。三种常见条件分布为

$$
p_{\rm iso}(\mathcal R\mid a)=1,\qquad0\leq\mathcal R\leq1;
$$

$$
p_{\rm cut}(\mathcal R\mid a)=\frac1{1-b},\qquad b\leq\mathcal R\leq1;
$$

$$
\boxed{
p_{\rm log}(\mathcal R\mid a)
=\frac{\ln(\mathcal R/b)+\alpha}{Z},\qquad b\leq\mathcal R\leq1.
}
\tag{32}
$$

它们分别表示原始各向同性样本、在各向同性样本中条件化保留存活轨道、以及受扩散补给影响的锥外准稳态样本。硬截断没有包含边界附近的对数耗尽。

由 Jacobian，

$$
p(e\mid a)=2e\,p(1-e^2\mid a),\qquad
0\leq e\leq1-r_{\rm lc}/a.
$$

如果从原始样本直接删除损失锥恒星，$dN_\star/da$ 也会乘上存活比例；如果为每个 $a$ 重采样直到凑满固定数量，则保持了原来的能量层数目。二者回答的问题不同，归一化方式必须事先说明。

### 9.2 可直接用于采样的累积分布

若 $dN_\star/da\propto a^{1/4}$，在 $[a_{\min},a_{\max}]$ 内令 $u\sim U(0,1)$，则

$$
\boxed{
a=\left[a_{\min}^{5/4}+u(a_{\max}^{5/4}-a_{\min}^{5/4})\right]^{4/5}.
}
\tag{33}
$$

对数角动量分布的 CDF 为

$$
\boxed{
G(\mathcal R)
=\frac{\mathcal R\ln(\mathcal R/b)-\mathcal R+b
+\alpha(\mathcal R-b)}Z.
}
\tag{34}
$$

它满足 $G(b)=0$、$G(1)=1$ 且单调。可用二分法求解 $G(\mathcal R)=u$；使用 $\alpha$ 的表达无需显式计算 $\mathcal R_0$。

### 9.3 轨道相位必须按时间采样

生成空间快照时应令平近点角 $M\sim U(0,2\pi)$，然后解 Kepler 方程

$$
M=u_e-e\sin u_e,\qquad r=a(1-e\cos u_e),
$$

其中 $u_e$ 是偏近点角。不能令真近点角或空间半径均匀，因为恒星在远心点附近停留更久。

等价地，一条轨道在 $dr$ 内的时间概率为

$$
\boxed{
p(r\mid a,e)\,dr=\frac{2\,dr}{P|v_r|},\qquad
v_r^2=2\left(\frac{GM_\bullet}{r}-\mathcal E\right)-\frac{J^2}{r^2}.
}
\tag{35}
$$

其支持区间为 $a(1-e)\leq r\leq a(1+e)$。

### 9.4 从 $N$ 重建 $n(r)$

在球平均意义下，

$$
\boxed{
n(r,t)=\frac1{4\pi r^2}
\int d\mathcal E\int d\mathcal R\,
N(\mathcal E,\mathcal R,t)
\frac{2}{P|v_r|}\,\boldsymbol1_{\{r_p\leq r\leq r_a\}}.
}
\tag{36}
$$

一个高偏心率轨道同时贡献多个空间半径，因此 $\overline N(\mathcal E,t)$ 的局部耗尽不会在 $n(r,t)$ 中表现为同位置的一对一截断。解释密度曲线时，应先弄清楚改变的是能量层数目、角动量条件分布，还是轨道相位采样。

## 10. 完整二维方程与随能量变化的边界

### 10.1 二维 Fokker–Planck 的保守形式

令 $x_i=(\mathcal E,\mathcal R)$，定义 $A_i=\langle\Delta x_i\rangle/\Delta t$ 和 $B_{ij}=\langle\Delta x_i\Delta x_j\rangle/\Delta t$。完整方程为

$$
\partial_tN=-\sum_i\partial_i(A_iN)
+\frac12\sum_{i,j}\partial_i\partial_j(B_{ij}N)
=-\partial_{\mathcal E}F_{\mathcal E}-\partial_{\mathcal R}F_{\mathcal R}.
\tag{37}
$$

其中

$$
F_i=A_iN-\frac12\sum_j\partial_j(B_{ij}N).
$$

用 $N=\mathcal Jf$ 也可写成

$$
\boxed{
F_i=-\sum_j\mathscr D_{ij}\partial_jf-\mathscr D_i f,
}
\tag{38}
$$

其中

$$
\mathscr D_{ij}=\frac12\mathcal J B_{ij},\qquad
\mathscr D_i=\frac12\sum_j\partial_j(\mathcal J B_{ij})-\mathcal J A_i.
$$

这里 $\mathscr D_{ij}$ 是通量形式的系数，$B_{ij}$ 是单位时间二阶矩，而第 4 节的 $D(\mathcal E)$ 是约化角动量扩散率。三者不能混用。由二阶矩的定义，$\mathscr D_{\mathcal E\mathcal R}=\mathscr D_{\mathcal R\mathcal E}$。

### 10.2 对角动量积分时的 Leibniz 项

记 $b(\mathcal E)=\mathcal R_{\rm lc}(\mathcal E)$，并令

$$
\overline F_{\mathcal E}=\int_{b(\mathcal E)}^1F_{\mathcal E}\,d\mathcal R.
$$

对式 (37) 在物理存活区间积分，假设边界不显含时间，

$$
\partial_t\overline N_{\rm out}
=-\int_b^1\partial_{\mathcal E}F_{\mathcal E}\,d\mathcal R
-F_{\mathcal R}(1)+F_{\mathcal R}(b).
$$

Leibniz 法则给出

$$
\partial_{\mathcal E}\overline F_{\mathcal E}
=\int_b^1\partial_{\mathcal E}F_{\mathcal E}\,d\mathcal R
-b'F_{\mathcal E}(b).
$$

因此若圆轨道端无外流，$F_{\mathcal R}(1)=0$，有

$$
\boxed{
\partial_t\overline N_{\rm out}
=-\partial_{\mathcal E}\overline F_{\mathcal E}
-\mathcal S_{\rm lc},
\qquad
\mathcal S_{\rm lc}=b'F_{\mathcal E}(b)-F_{\mathcal R}(b).
}
\tag{39}
$$

$\mathcal S_{\rm lc}$ 才是穿过倾斜边界的总损失率。只写 $-F_{\mathcal R}(b)$ 会遗漏能量漂移或扩散跨越边界的贡献。若 $b=b(\mathcal E,t)$，还需在演化方程右边加入 $-N(b)\partial_tb$。

### 10.3 边界斜率

由式 (7) 与 $a=GM_\bullet/(2\mathcal E)$，

$$
b(\mathcal E)
=\frac{4\mathcal E r_{\rm lc}}{GM_\bullet}
-\frac{4\mathcal E^2r_{\rm lc}^2}{(GM_\bullet)^2},
$$

$$
\boxed{
b'(\mathcal E)=\frac{4r_{\rm lc}}{GM_\bullet}
\left(1-\frac{2\mathcal E r_{\rm lc}}{GM_\bullet}\right)
=\frac{4r_{\rm lc}}{GM_\bullet}\left(1-\frac{r_{\rm lc}}a\right).
}
\tag{40}
$$

### 10.4 吸收边界上的有效法向扩散系数

若采用严格吸收边界 $f(\mathcal E,b(\mathcal E),t)=0$，沿边界求导得

$$
\boxed{
\left.\partial_{\mathcal E}f\right|_b
=-b'\left.\partial_{\mathcal R}f\right|_b.
}
\tag{41}
$$

边界上的 $\mathscr D_i f$ 消失，将式 (41) 代入式 (38)、(39)，可得

$$
\boxed{
\mathcal S_{\rm lc}
=K_\perp\left.\partial_{\mathcal R}f\right|_b,
}
\tag{42}
$$

$$
\boxed{
K_\perp
=\left[
\mathscr D_{\mathcal R\mathcal R}
-b'(\mathscr D_{\mathcal E\mathcal R}+\mathscr D_{\mathcal R\mathcal E})
+(b')^2\mathscr D_{\mathcal E\mathcal E}
\right]_b.
}
\tag{43}
$$

对称扩散矩阵时，中间项为 $-2b'\mathscr D_{\mathcal E\mathcal R}$。这个组合是协方差在横跨边界方向上的二次型，因此对物理的半正定扩散矩阵必有 $K_\perp\geq0$。

式 (41) 只在吸收边界上成立，不能未经假设就把它推广到整个 $\mathcal R$ 区间。对有限 $q$ 的 Robin 边界，$f(b)$ 一般非零，也不能直接沿用这组吸收边界化简。

## 11. 怎样得到一维能量方程中的 sink

### 11.1 最简准稳态闭合

若角动量分布随能量层数目的改变快速调整，且能量—角动量耦合可以忽略，则用式 (27) 写

$$
\boxed{
\partial_t\overline N_{\rm out}
=-\partial_{\mathcal E}\overline F_{\mathcal E}
-\frac{\overline N_{\rm out}}{t_{\rm loss}(\mathcal E)},
\qquad t_{\rm loss}=Z/D.
}
\tag{44}
$$

这是闭合模型：$t_{\rm loss}$ 不是随意指定的寿命，而是由角动量扩散、轨道周期和边界匹配导出的有效耗尽时间。

若忽略能量通量且 $t_{\rm loss}$ 固定，则

$$
\overline N_{\rm out}(\mathcal E,t)
=\overline N_{\rm out}(\mathcal E,0)e^{-t/t_{\rm loss}(\mathcal E)}.
$$

这个指数式只适用于固定背景系数、无能量补给的闭合近似。若恒星本身提供散射背景，密度改变还会反馈到 $D$，便不是固定时间尺度的简单指数。

### 11.2 笔记中积分耗尽时间的成立条件

若某个一维约化问题满足

$$
\mathcal F=k(\mathcal R)\partial_{\mathcal R}f,
\qquad f(b)=0,
$$

且 $\mathcal F$ 在区间内近似不变，则

$$
f(\mathcal R)=\mathcal F\int_b^{\mathcal R}\frac{d\mathcal R'}{k(\mathcal R')}.
$$

代入 $\overline N_{\rm out}=\int_b^1\mathcal Jf\,d\mathcal R$，得到

$$
\boxed{
T=\int_b^1\mathcal J(\mathcal E,\mathcal R)
\left[\int_b^{\mathcal R}\frac{d\mathcal R'}{k(\mathcal E,\mathcal R')}\right]d\mathcal R,
\qquad
\mathcal F=\frac{\overline N_{\rm out}}T.
}
\tag{45}
$$

在 Kepler 势、固定能量、小角动量扩散模型中，$\mathcal J$ 与 $\mathcal R$ 无关，$k=\mathcal JD\mathcal R$，于是

$$
T=\frac1D\int_b^1\ln(\mathcal R/b)\,d\mathcal R
=\frac{\ln(1/b)-1+b}{D},
$$

与空损失锥结果一致。

如果引入倾斜边界坐标 $u=\mathcal R-b(\mathcal E)$，相应法向通量是

$$
F_u=F_{\mathcal R}-b'F_{\mathcal E}.
$$

只有再额外假设沿边界的梯度及漂移贡献可忽略，才可能用法向扩散系数构造类似的一维阻力积分。**边界上的导数关系本身不足以证明全区间的一维闭合。** 对强能量耦合、强耗散或瞬态演化，应保留二维方程。

## 12. 恒星穿盘耗散：从冲量到轨道漂移

盘作用引入方向性。以下先给单次穿盘的局部估计，再说明如何进入轨道演化方程。

### 12.1 穿盘冲量与扫掠柱密度

设气体速度为 $\boldsymbol v_g$，恒星相对气体速度为 $\boldsymbol v_{\rm rel}=\boldsymbol v-\boldsymbol v_g$。采用几何截面的阻力模型，

$$
\boldsymbol F_{\rm drag}
=-C_D A_{\rm eff}\rho_d v_{\rm rel}\boldsymbol v_{\rm rel}.
$$

其中 $C_D$ 为无量纲系数，$A_{\rm eff}\simeq\pi R_\star^2$ 是一种选择；引力聚焦或气体尾迹显著时需要修改。

若穿越过程中速度和盘结构变化不大，垂直穿盘速度为 $v_z$，则

$$
\int\rho_d\,dt\simeq\frac\Sigma{|v_z|}.
$$

因此

$$
\boxed{
\Delta\boldsymbol v\simeq-\lambda\boldsymbol v_{\rm rel},\qquad
\lambda=C_D\frac{A_{\rm eff}\Sigma}{m_\star}
\frac{v_{\rm rel}}{|v_z|}.
}
\tag{46}
$$

它要求 $\lambda\ll1$、穿越时间短于周期，以及明确的两次离散穿盘几何。对近共面嵌入轨道，$|v_z|\to0$ 所导致的形式发散意味着近似失效，而不是阻力真的无穷大。

### 12.2 由冲量推到能量和角动量变化

冲量过程中位置近似不变，因此

$$
\Delta E=\boldsymbol v\cdot\Delta\boldsymbol v
+\frac12|\Delta\boldsymbol v|^2,
\qquad
\Delta\mathcal E=-\Delta E,
$$

$$
\Delta\boldsymbol J=\boldsymbol r\times\Delta\boldsymbol v.
$$

一阶近似给出

$$
\Delta\mathcal E\simeq
\lambda\,\boldsymbol v\cdot(\boldsymbol v-\boldsymbol v_g).
$$

阻力消耗相对气体的动能，但恒星自身的轨道能变化还涉及气体的运动，因此不应对所有交会几何都先验指定 $\Delta\mathcal E>0$。

轨道平均漂移可由一个周期内各次穿盘相加：

$$
\dot{\mathcal E}_{d}=\frac1P\sum_k\Delta\mathcal E_k,
\qquad
\dot{\boldsymbol J}_{d}=\frac1P\sum_k\Delta\boldsymbol J_k.
$$

由 $\mathcal E\propto a^{-1}$，

$$
\boxed{\dot{\mathcal E}_{d}=-\mathcal E\frac{\dot a_d}{a}.}
\tag{47}
$$

再由 $\mathcal R=J^2/(GM_\bullet a)$，

$$
\boxed{
\dot{\mathcal R}_{d}
=\mathcal R\left(\frac{1}{J^2}\frac{d(J^2)}{dt}\bigg|_d-\frac{\dot a_d}{a}\right)
=\mathcal R\left(2\frac{\dot J_d}{J}-\frac{\dot a_d}{a}\right),
}
\tag{48}
$$

其中 $\dot J_d$ 表示角动量大小的变化率；$d(J^2)/dt$ 是角动量平方的导数。也可直接使用向量形式

$$
\dot{\mathcal R}_{d}
=\frac{2\boldsymbol J\cdot\dot{\boldsymbol J}_d}{GM_\bullet a}
-\mathcal R\frac{\dot a_d}{a}.
$$

这说明耗散并不必然只沿低角动量方向输运；$a$ 与 $J$ 同时改变，偏心率可能减小，也可能在特定几何下增大。

### 12.3 弛豫与盘漂移的联合方程

确定性盘作用应作为平流通量加入：

$$
\boxed{
\partial_tN
=-\partial_{\mathcal E}
\left(F_{\mathcal E}^{\rm rel}+\dot{\mathcal E}_{d}N\right)
-\partial_{\mathcal R}
\left(F_{\mathcal R}^{\rm rel}+\dot{\mathcal R}_{d}N\right)
-S_{\rm remove}.
}
\tag{49}
$$

无边界外流、无 $S_{\rm remove}$ 时，盘漂移本身守恒恒星总数，只重新分配轨道。

二维 $(\mathcal E,\mathcal R)$ 不能完整描述盘作用：穿盘冲量还依赖轨道倾角、交点位置以及近心点方向。因此需要显式演化这些变量，或规定并检验对它们的平均方案。此时重建的 $n(r)$ 通常只是球平均密度。

### 12.4 为什么不能直接把 $2f_v/P$ 当作恒星死亡率

令 $f_v=|\Delta v|/v$ 表示单次穿盘速度的相对改变。若每周期穿盘两次，则

$$
t_v^{-1}\sim\frac{2f_v}{P}
$$

是速度变化率的量级；它并不是恒星数目的移除概率率。

若模型只追踪尚未被盘捕获的球状恒星族，可以另外引入

$$
S_{\rm remove}=\frac{N}{t_{\rm cap,d}},
$$

但 $t_{\rm cap,d}$ 需由明确的捕获判据与轨道演化计算决定。将它估成 $P/(2f_v)$ 是额外处方，不是从冲量力学自动得到的结论。若既显式演化盘漂移，又用同一耗散过程设置额外 sink，还需避免重复移除。

## 13. 自引力调节的盘：检查耗散率标度

### 13.1 从 $Q$ 推出 $\Sigma$ 和 $\rho_d$

设盘柱半径为 $\varpi$，$\Omega^2=GM_\bullet/\varpi^3$，$h=H/\varpi$。薄盘近似中，

$$
Q=\frac{c_s\Omega}{\pi G\Sigma},\qquad c_s=H\Omega.
$$

因此

$$
\boxed{
\Sigma=\frac{H\Omega^2}{\pi GQ}
=\frac{hM_\bullet}{\pi Q\varpi^2},
\qquad
\rho_d\simeq\frac\Sigma{2H}
=\frac{M_\bullet}{2\pi Q\varpi^3}.
}
\tag{50}
$$

这里 $\rho_d\simeq\Sigma/(2H)$ 采用简单垂直厚度估计；真实垂直结构会改变阶一系数。

### 13.2 速度冲量和耗散时间的径向依赖

在 $A_{\rm eff}=\pi R_\star^2$、几何速度比为阶一的条件下，式 (46) 给出

$$
\boxed{
f_v\sim\frac{C_Dh}{Q}\frac{M_\bullet}{m_\star}
\left(\frac{R_\star}{\varpi}\right)^2
\times\text{几何因子}.
}
\tag{51}
$$

若 $h,Q$、恒星参数和几何因子固定，并以 $a$ 代表穿盘半径的尺度，

$$
f_v\propto a^{-2},\qquad P\propto a^{3/2}.
$$

所以每单位时间的速度耗散率满足

$$
\boxed{t_v^{-1}\sim\frac{2f_v}P\propto a^{-7/2},\qquad t_v\propto a^{7/2}.}
\tag{52}
$$

若只记“每次穿盘冲量”的指数而遗漏再除以 $P$，就会得到错误的时间率标度。对于偏心轨道，应分别使用真实穿盘半径计算各次冲量，不能在定量计算中直接以 $a$ 替代。

### 13.3 稳态 $\alpha_{\rm SS}$ 盘与 $h(\varpi)$

用 $\alpha_{\rm SS}$ 表示黏滞参数，与第 7 节的 $\alpha(q)$ 区分。远离内边界、忽略内边界修正时，

$$
\dot M=3\pi\nu\Sigma,\qquad
\nu=\alpha_{\rm SS}c_sH=\alpha_{\rm SS}H^2\Omega.
$$

代入式 (50)，

$$
\dot M=\frac{3\alpha_{\rm SS}H^3\Omega^3}{GQ}
=\frac{3\alpha_{\rm SS}h^3M_\bullet\Omega}{Q}.
$$

因此

$$
\boxed{
Q=\frac{3\alpha_{\rm SS}h^3M_\bullet\Omega}{\dot M},
\qquad
h=\left(\frac{Q\dot M}{3\alpha_{\rm SS}M_\bullet\Omega}\right)^{1/3}.
}
\tag{53}
$$

若自引力调节区内 $Q,\dot M,\alpha_{\rm SS}$ 近似常数，则 $h\propto\varpi^{1/2}$。此时式 (51) 改为 $f_v\propto\varpi^{-3/2}$，对应 $t_v^{-1}\propto a^{-3}$；不能继续使用常 $h$ 模型的 $a^{-7/2}$。

一种连续的分段模型是：内区指定 $h_{\rm in}(\varpi)$，由式 (53) 求 $Q_{\rm in}$；在 $Q_{\rm in}(\varpi_{\rm sg})=Q_{\rm sg}$ 处与外区 $Q=Q_{\rm sg}$ 匹配。改变内外区黏滞参数时，还需重新检查接点的 $h$、$\Sigma$ 连续性。

有效温度若由局部黏滞辐射估计，则

$$
\sigma_{\rm SB}T_{\rm eff}^4
=\frac{3GM_\bullet\dot M}{8\pi\varpi^3}
\left(1-\sqrt{\frac{\varpi_{\rm in}}\varpi}\right).
$$

$T_{\rm eff}$ 不是直接决定 $c_s$ 的中面温度；用它进一步推导盘厚度需要辐射转移与垂直结构模型。

### 13.4 与弛豫竞争

在常 $h,Q$ 的尺度模型中，$t_v\propto a^{7/2}$，而未耗尽尖峰的 $t_r\propto a^{1/4}$，所以

$$
\frac{t_v}{t_r}\propto a^{13/4}.
$$

盘作用相对于两体弛豫可能在内区迅速增强。但决定分布是否耗尽，应比较同一自由度的输运／捕获时间：能量漂移时间对能量补给时间，角动量或倾角变化时间对相应弛豫时间。仅比较一个速度变化时间与 $t_r$，只能作初步定位。

## 14. 数值实现：让方程、边界与守恒一致

### 14.1 有限体积更新

对 $(\mathcal E_i,\mathcal R_j)$ 网格，若 $N_{ij}$ 是单元平均的坐标空间数密度，则

$$
\frac{dN_{ij}}{dt}
=-\frac{F_{\mathcal E,i+1/2,j}-F_{\mathcal E,i-1/2,j}}{\Delta\mathcal E_i}
-\frac{F_{\mathcal R,i,j+1/2}-F_{\mathcal R,i,j-1/2}}{\Delta\mathcal R_j}
-S_{ij}.
\tag{54}
$$

盘漂移通量使用迎风侧状态。例如在能量界面，

$$
F_{\mathcal E}^{d}=\dot{\mathcal E}_{d}
\begin{cases}
N_{\rm left},&\dot{\mathcal E}_{d}>0,\\
N_{\rm right},&\dot{\mathcal E}_{d}<0.
\end{cases}
$$

要注意：$\dot{\mathcal E}>0$ 对应更束缚的轨道、即更小的 $a$。若网格改成 $a$ 或 $\ln a$，方向、单元体积和分布函数 Jacobian 都需同步转换。

### 14.2 不能只检查平流 CFL

一个常见的显式平流限制是

$$
\Delta t\lesssim C_{\rm CFL}
\min\left(\frac{\Delta\mathcal E}{|\dot{\mathcal E}_{d}|},
\frac{\Delta\mathcal R}{|\dot{\mathcal R}_{d}|}\right).
$$

多维合并更新需考虑两个方向的总流出率。若扩散也显式处理，还需满足形如

$$
\Delta t\lesssim C_{\rm diff}
\min\left(\frac{\Delta\mathcal E^2}{B_{\mathcal E\mathcal E}},
\frac{\Delta\mathcal R^2}{B_{\mathcal R\mathcal R}}
\right)
$$

的限制；具体常数及交叉扩散约束由离散方法决定。对显式 sink，还要避免单步移除超过单元内现存恒星数。

### 14.3 损失锥必须用一种一致的移除机制

可选择以下描述：

1. **锥外二维域**：以吸收或有限周期匹配边界移除恒星，统计穿越物理边界的通量。
2. **包含锥内的域**：以与轨道相位／周期相容的机制在锥内移除，再由扩散补给。
3. **一维能量闭合**：不显式解析角动量方向，用 $\overline N_{\rm out}/t_{\rm loss}$ 作为 sink。

若同时施加二维吸收通量与描述同一损失的全能量层 sink，就会重复计数。对倾斜边界还要用式 (39) 的法向通量，而不是只累计矩形网格的角动量方向通量。

### 14.4 有物理意义的核对

| 核对项 | 应满足的结果 |
|---|---|
| 轨道边界 | 用 $e=1-r_{\rm lc}/a$ 算得的 $1-e^2$ 与式 (7) 一致 |
| 角动量归一化 | 式 (32) 对物理存活区间积分为 1 |
| 空损失锥 | $q\to0$ 时 $N(b)\to0$，且通量趋向式 (20) |
| 满损失锥 | $q\to\infty$ 时锥外分布趋于均匀，通量趋向式 (22) |
| 无吸收的纯盘漂移 | 无外边界流出时总恒星数守恒 |
| 二维总守恒 | 恒星数变化等于边界净通量加体积源／汇 |
| 基准尖峰 | 在远离采样截断的尺度区间恢复 $n\propto r^{-7/4}$ |
| 坐标变换 | $dN/da=(dN/d\mathcal E)|d\mathcal E/da|$，积分总数不变 |
| 扩散矩阵 | 对称、半正定，并给出非负的 $K_\perp$ |

密度曲线出现内区下降，只说明某些轨道对该空间区域的贡献减少。要归因于 loss cone、盘捕获或能量迁移，必须同时检查各过程的通量、总数和边界预算。

## 15. 需要从笔记中明确区分的几点

| 容易混淆的写法或解释 | 本文采用的处理 |
|---|---|
| $E$ 有时表示负机械能，有时表示正束缚能 | 全文使用 $\mathcal E=-E>0$ |
| $R$ 同时表示空间半径与角动量变量 | 空间用 $r$ 或 $\varpi$，角动量用 $\mathcal R$ |
| 将 $\rho(r)4\pi r^2dr$ 直接写成半长轴分布 | 由 $f$、相空间体积和能量 Jacobian 推导 $dN/da$ |
| 认为零平均速度踢动意味着无 drift | 平方变量产生非零一阶矩；式 (13) 是其来源 |
| 认为 $\mathcal R<\mathcal R_{\rm lc}$ 等于当前 $r<r_{\rm lc}$ | 它对应的是近心点将进入移除区域 |
| 将有效零点代入公式，同时仍使用原归一化定义 | 固定积分下限，重新得到式 (25) 的 $Z$ |
| 把 $N(b)/\overline N_{\rm out}$ 当作锥内恒星比例 | 它只是边界值与积分的比，锥内比例需单独积分 |
| 把 $q\sim1$ 当作通量完全达到满锥值 | 通量饱和还受 $\ln(1/b)$ 控制 |
| 严格对数稳态同时使用封闭反射外边界 | 必须明确外部补给，或采用局部准稳态解释 |
| 积分二维 FP 时忽略下限随能量变化 | 保留 $b'F_{\mathcal E}$，计算边界法向流 |
| 用吸收边界导数关系消去全区间的能量梯度 | 只能在边界使用；内部闭合须另作假设 |
| 将穿盘速度衰减直接写成恒星数目 sink | 首先作为轨道漂移；只有明确移出所追踪族群时才设 sink |
| 用静态采样差异解释时间演化 | 条件分布改变、恒星数减少与时间演化分别处理 |

## 16. 公式之间的完整联系

给定 $M_\bullet,m_\star,r_{\rm lc}$ 和背景 $f$ 后，先由轨道几何求 $\mathcal R_{\rm lc}$，由两体散射及轨道平均求 $D$，再计算 $q=PD/\mathcal R_{\rm lc}$。边界匹配给出 $\alpha(q)$，锥外归一化给出 $Z$，最终得到

$$
\boxed{
\mathcal F_{\rm lc}(\mathcal E,t)
=\frac{D(\mathcal E,t)}{Z(\mathcal E,t)}\overline N_{\rm out}(\mathcal E,t).
}
$$

它可以进入一维能量方程，也可以作为二维计算的极限检验。若加入盘耗散，则先从真实穿盘冲量求 $\dot{\mathcal E}_d$、$\dot{\mathcal R}_d$ 及必要的倾角演化，再与弛豫通量共同推进分布。最后用轨道停留时间加权，将 $N(\mathcal E,\mathcal R,t)$ 转换为空间密度。

由此，尖峰背景提供恒星库，弛豫提供能量与角动量输运，损失锥规定中心吸收边界，而盘耗散提供额外的定向轨道演化。每一部分都有自己的变量、时间尺度和守恒关系；把这些接口写清楚，才能一致地解释中心密度的保持、削弱或重建。

## 附录：原笔记对应与参考依据

本文主体推导来自《loss cone.pdf》，按物理依赖关系重排，没有将笔记中的探索性图形或参数试验当成已验证结果。

| 原 PDF 页码 | 本文位置 |
|---|---|
| 1–2、5–9 | 第 1–2、4–7 节：轨道边界、随机散射、角动量扩散与损失通量 |
| 3–4 | 第 3、9 节：尖峰背景、热偏心率、硬截断与对数采样 |
| 10–12 | 第 3、6–8、11 节：归一化、时间尺度、$q$ 与弛豫系数 |
| 13–15 | 第 10–11 节：二维通量、倾斜边界与一维闭合的条件 |
| 16–19 | 第 12–13 节：穿盘耗散、自引力盘结构与径向标度 |
| 20–21 | 第 12、14–15 节：盘漂移、有限体积格式及诊断 |
| 22 | 空白页 |

特殊函数边界匹配的外部核对来源：David Merritt, *Loss Cone Dynamics* (2013), §2.2，尤其式 (28)。[论文全文](https://arxiv.org/pdf/1307.3268)。本文的物理区间归一化、Jacobian、边界法向通量和耗散率标度均在正文中展开计算，以所声明的定义和假设为准。
