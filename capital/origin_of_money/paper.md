# The Origin of Money: An Agent-Based Model of Carl Menger's Theory

Eugene Callahan and Peiwen Tang

## Introduction

Carl Menger famously, in his 1892 paper, "On the Origin of Money,"
offered an *emergent phenomenon*
theory of how humans came to employ a *medium of exchange* (money) for most
transactions: it is unlikely, he held, that people with no experience with some
good gradually *emerging* as a medium of exchange could simply invent money *ab
nihilo*. Instead, one good would, over time, come to be understood as widely
exchangeable: and that recognition, in itself, would make the good a more
attractive acquisition in future possible exchanges.

But Mener went further, and analyzed *why* certain goods were particularly
suited to take on the role of medium of exchange. Such properties as
*divisibility*, *durability*, and *ease of transport* would all increase the
likelihood that a good would emerge as a medium of exchange.

It is not easy to test a theory like Menger's: it is unlikely that society will
allow the interested scientist to wipe clean all members knowledge of a money
and wait to see if a medium of exchange spontaneously emerges. (Examples like
the WWII POWs who used cigarettes as money are somewhat tarnished by the fact
that such prisoners already had experience with using money.) However,
*agent-based models* (ABMs), while certainly not real societies, can be
programmed so that the *agents* they contain "act like" real economic agents in
some important respects. And, as a leading tool in exploring emergent
phenomena, it seems appropriate to use an ABM as a way to explore the
plausibility of Menger's theory.

## Menger

I. Intro: 

Examples of medium of exchange: 
cattle, skins, cubes of tea, slabs of salt, cowrie-shells, *precious metals

II. attempts at solution hitherto:

III. The Problem of the genesis of a Medium of exchange:
exchange just such goods as he directly needs; reject no need at all, or already sufficiently provided.
supply and demand do not quantitatively coincide
different degrees of sale - ableness (Absatzfahigkeit) of commodities.

IV. Commodities as More or Less saleable:
error: definite
*The price at which any one can at pleasure buy a commodity at a given market and a given point of time, 
and the price at which he can dispose of the same at pleasure, are two essentially different magnitudes*
wholesale && retail prices
saleable: facility, diminution
height of saleableness: not the fact that it may be disposed of
at any price whatever -> (all equally saleable)
-> at every moment be easily and surely disposed of at a price corresponding to

V. Concerning the Causes of the Different Degrees of saleableness in Commodities:
circumstances (commodity command a sale):
1. number of persons in want; extent and intensity (unsupplied/constantly recurring)
2. purchasing power
3. available quantity - unsupplied want realation
4. divisibility
5. development of the market (speculation)
6. number of the limitations (regulation)

spatial limits of saleableness:
1. want of the commodities is disturbed in space.
2. goods lend themselves to transport & cost of transport incurred in proportion to their value
3. the means of transport and of commerce generally are
developed with respect to different classes of commodities
4. local extension of organised markets and their inter-communication by “arbitrage”
5. differences in the restrictions imposed upon commercial inter-communication

****time limits
1. permanence in the need of them (their independence of fluctuation in the same).
2. Their durability
3. The cost of preserving and storing them. 
4. The rate of interest.
5. The periodicity of a market for the same.
6. The development of speculation and in particular of time-bargains in connection with the same.
7. The restrictions imposed politically and socially on their
being transferred from one period of time to another.

VI. On the genesis of Media of exchange:
not highly saleable -> exchange
more surely and economically
traffic in space & intervals of time
*These wares would be qualified by their costliness, easy transportability, and fitness for preservation*
in the interest of every one to accept in exchange for his own less saleable goods
those he actually does readily accept.

VII. The Process of Differentiation between Commodities which have become Media of exchange and the rest:
"money" -> increasing their originally high saleableness
brings other wares than money to market -> disadvantage
individual bargainer has no control
forthwith into other goods supplied at that market
Compulsory purchase & sales
difference in salebalness: gradual, certain aspect as something absolute
superiority of the buyer over the seller

VIII. how the Precious Metals Became Money:
limits of the effective desire
wide limits in time and space of the saleableness of the precious metals
unlimited distribution in space of the need for them
low cost of transport

"The proportionately strong, persistent, and omnipresent desire on
the part of the most effective bargainers has gone farther to
exclude prices of the moment, of emergency, of acci- dent, in the
case of the precious metals, than in the case of any other goods
whatever, especially since these, by reason of their costliness,
dura- bility, and easy preservation, had become the most popular
vehicle for hoarding as well as the goods most highly favoured in
commerce.  in the intention of exchanging them subsequently for
other goods directly profitable to him"

production, consumption, and exchange of the precious metals
connected by: intrinsic grounds determining their exchange value

- homogeneity of precious metals
- serve as obligation
- not difficult to recognise
- easily controlled as to quality and weight

IX. Influence of the Sovereign Power:
social
high saleableness

## Translating Menger into an Agent-Based Model

Why we reduced Menger's criteria to only three factors.

- Each "Menger factor" can be turned on or off.
- We track how many times each good trades.
- A good "becomes money" as it comes close to being 
  one side of every trade.

Divisibility: homogeneous
in terms of standard unit

## The Design of Our Model

- Elements and Functionalities
    
    Our main files are money.py and trade_utils.py, with test files test_money.py and test_trade_utils.py. In our model, we apply three main factors mentioned in Carl Menger's essay, *On the Origins of Money*. Each attribute for each good is represented in a decimal number greater than zero and less and equal to one. 
    - **Divisibility** identifies how seperatable a good is. A cow is less divisible than a chunk of gold because if a cow is cut into a half, it's not tradeable anymore as a livestock. Smaller the number, more divisible the good. 
    - **Durability** determines how long an item can be stored. Foods are generally less durable than metals, and the decayed food would be less valuable than the fresh ones. Goods like livestock have their own lifespans, and if a cow is dead, it is unlikely to be traded in the market. Having a durability close to 1 meaning that the good is very durable, not easily corrupted (like diamond). 
    - **Transportability** shows whether an item is easy to be carried. It's easy for us to carry some avocados but not milk because milk could be split out while avocados can be put in anywhere. 
These three key attributes will determine which good is likely to emergence into money in the process of trading. 

    In our model, the nature holds 8 different goods, each having 10 units. The
    user can choose at most 8 agents to trade with each other, and each "Menger
    factor" can be turned on or off so that the user can view the effect of
    each attribute on the number of trades (**?? and user can also choose
    whether to give all units of one item to one agent or allocate the number
    randomly**). We track the numbers how many times each good trades, and the
    most traded good becomes money. In our model, *utility*, how eager a trader
    wants to own the good, is a representation of the *value* of a good. For
    each agent, when trading, only when gaining the offered good can provide a
    larger utility than losing the good he/she holds can continue the trade.
    Otherwise, this offer will be rejected by the agent or the agent may ask
    for more units. We have line graph representing the trend of number of
    trades for each good and once the trade is idle for **(?? 4 to be
    changed)** periods, there will be an alert that the equilibrium in our
    environment may be reached, meaning that maybe there will be no trade
    happened during the following periods, reminding the user that the current
    result is likely to be the final result. 

- Design Process 
    - Utility Function
        
        Utility is our important determinate for a trader to accept or reject
        an offer, and it is a representation of the value of a good - only when
        the trader wants to own the good and worth losing the good being
        requested is the offered good valuable. We initially used a linear
        utility function.

        ```python
        def gen_util_func(qty):
            return max_util - qty
        ```

        The *max_util* can be set by the model. However, the law of
        **Diminishing Marginal Utility** states that "all else equal as
        consumption increases the marginal utility derived from each additional
        unit declines" (Gossen's First Law *citation needed*). So, we updated
        our utility function.

        ```python
        def gen_util_func(qty):
            return max_util * (DIM_UTIL_BASE ** (-qty))
        ```

        The use of exponential function makes our utility function fit closer to the real-life trading.
        **?? MAX_UTIL AND DIM_UTIL_BASE TO BE TESTED**

    - Offering and Responding
        
        During one trade, we have one an initiator offering one good (*good A*)
        at a time and a receiver being asked to trade one good (*good B*). The
        initiator starts with offering one unit of *good A*, which is the
        divided amount of that good (one times the divisibility of that good). 

        For the receiver, he/she will evaluate the utilities of gaining *good
        A* and losing *good B*. If the gain (the utility of getting *good A*)
        is smaller than the loss (the absolute value of the utility of losing
        *good B*), the receiver will tell the initiator that the offered amount
        of *good A* is inadequate so that that the initiator can increase the
        amount offered. The receiver can re-determine the gain and loss with
        the new amount. If the initiator offers all the available amount but
        the receiver thinks that he/she still can't gain utility, the trade
        will be rejected. If the gain is larger than the loss, the receiver
        will wait for the initiator to evaluator his/her gain and loss. If both
        parties can achieve larger gain than loss, the receiver will accept the
        offer, meaning that the trade is made. Our record will increment the
        trade_count of the both goods by one. Otherwise, if the initiator can't
        gain in this trade, he/she will reject the trade because the receiver
        is always trading with one unit of good, meaning that there's no room
        to increase the amount. 

        The initiator will loop through all the available goods he/she has to seek trades.

    - Randomization in Trading
        
        During the implementation of our divisibility attribute, we found that the first good of the natures_good dictionary is always traded the most. We solved the problem by using these two lines of code:
        ```python
        goods_list = list(goods_dict.keys())
        good = random.choice(goods_list)
        ```
        so that the first good in the dictionary will not have the priority when endowed to the agents by the nature.
    **TODO**
    - Implementation of Durability
    - Transportability and Grid
- Attributes that not being applied (having similarities with our current elements)

## Results

[Here we will discuss experiments with different parameters and so on.]
- Isolation of Durability
When a good is too decayed, its `amt_avaliable` will be set to zero by using the followinng code:
```python
if math.exp(-(1-trader["goods"][good]["durability"]) *
           (trader["goods"][good]["age"]/10)) < 0.0001:
            trader["goods"][good][AMT_AVAIL] = 0
```
Without this adjustment on `amt_avaliable`, when only applying the functionality of durability, we see that gold is traded very often (which is not surprising), but banana and milk are also extensively traded. The reason is that when these two items are too decayed, their utility delta will be very similar, and a lot of tradings will be exculsively between them, while gold, having a very optimal utility delta, can be too good for the banana holders to trade for.

## Conclusion

Our efforts are certainly not an attempt to "prove" Menger's theory of the
origin of money is correct, if such a thing is even possible. Rather, the fact
that Menger's theory can be implemented in a formal system, such as an ABM,
instead is only put forward as increasing its plausibility: if the theory
"works" in the simplified world of our model, then the possibility it reflects
how money really emerged is made more likely.

## Bibliography

Menger, Carl, "On the Origin of Money" (English translation by Caroline A.
Foley), *Economic Journal*, Volume 2 (1892), pp. 239–55.  

