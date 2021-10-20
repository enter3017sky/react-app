---
title: GitHub 不支援密碼驗證
tags: git, github, ssh
---

# GitHub 不支援密碼驗證之解法

## 前言

> ![](https://i.imgur.com/nPMIBUi.png)
> 因為 Github 不支援個人密碼認證了，所以使用 git push 提示 `Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.`

## 1. 建立訪問 Token

> ref: [Mac 上改變 Git 認證模式](https://myctw.github.io/post/bd72.html)
> 官方文件延伸閱讀：[Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)


1. 在 Github/settings/[Personal access tokens](https://github.com/settings/tokens)，點擊 **Generate new token**
      > ![](https://i.imgur.com/oaw6Bej.png)

2. 設定名稱、時效、權限
      > ![](https://i.imgur.com/tgvFbnC.png)
      > 
      > Note: 知道幹嘛用的名稱，e.g. login_git 等
      > Expiration: 調整會過期的時間，定期操作熟悉熟悉(除非非常怕麻煩...)。
      > Select scopes: 需求是能推能拉就行啦

3 終端機上使用 token

```
> git clone https://github.com/username/repo.git
Username: your_username
Password: your_token
```

## 2. Github SSH 設定

ref: [GitHub不再支援密碼驗證解決方案：SSH免密與Token登入配置 | IT人](https://iter01.com/611820.html)
### SSH Key

1. 移動到 **.ssh** 內：`cd  ~/.ssh`

2. 查看有沒有生成過： **id_rsa, id_rsa.pub**

> 如果沒有以上兩個檔案，輸入 `ssh-keygen` 生成(Enter 按到底)。
> 延伸閱讀: [建立 SSH 金鑰組的詳細步驟 - Azure Virtual Machines | Microsoft Docs](https://docs.microsoft.com/zh-tw/azure/virtual-machines/linux/create-ssh-keys-detailed)

3. 將 **Key**(id_rsa.pub) 打印出來：`cat id_rsa.pub`

4. 在 Github/settings/[SSH and GPG keys](https://github.com/settings/keys)，點擊 **New SHH Key**。

    > ![](https://i.imgur.com/K9hnIox.png)
    > Title: 隨意
    > Key: 則填入 `cat id_rsa.pub` 的內容。

### Github remote 設定

> 延伸閱讀: [Switching remote URLs from SSH to HTTPS](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-ssh-to-https)

1. 先確認一下 remote 的 origin 設定: `git remote get-url --all origin`
    > 原先會是 `https://github.com/<username>/<repository_name>.git`

2. 將 remote 的 origin 設定成 **SSH key** `git remote set-url origin git@github.com:<username>/<repository_name>.git`

3. 重新 Push 看看吧
![](https://i.imgur.com/jFuxHMq.png)
