# Integration Guide

## Step 1: Deploy
Deploy the points-rewards contract.

## Step 2: Create Rewards
```clarity
(contract-call? .points-rewards create-reward u"Premium Badge" u100)
```

## Step 3: Mint Points
```clarity
(contract-call? .points-rewards mint-points 'SP... u50)
```

## Step 4: Redeem
```clarity
(contract-call? .points-rewards redeem-reward u1)
```
