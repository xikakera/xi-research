# win10 的 linux 子系统

## 安装 ubuntu 18.04 LTS

1. 打开 "`控制面板\程序\程序和功能`", 点击 "`启用或关闭 Windows 功能`", 勾选"`适用于 Linux 的 Windows 子系统`", 然后点击"确定",等待一段时间后重启电脑.

2. 在第一步等待时间里, 在 "`Microsoft Store`" 中搜索 "`ubunut`", 选择 "`Ubuntu 18.06 LTS`", 进去后点击安装,等待完成. ( ***ps1:*** 这个步骤和 1. 步骤不分先后, 可以先安装 ubuntu 之后再开启子系统. ***ps2:*** 这个子系统的命令行标识,即exe文件名为: `ubuntu1804` ).

3. 打开 "`PowerShell`", 使用命令 `wsl` 就可以进入 ubuntu , 第一次打开需要一段等待时间.

4. 第一次启动需要输入用户账号密码. 这个时候选择关闭"`PowerShell`",下次进入则直接使用 root 账号进入wsl. (***ps:*** `ubuntu1804 config --default-user root` 命令可以修改 `wsl` 命令进入 bash 环境的默认用户为 root)

5. 输入 `wsl` 或者 `ubuntu1804` 就可以进入 bash 命令行了.

## 一些实用命令

### 重启 WSL 服务

```powershell
# 重启 WSL 服务

# 关闭 WSL 服务
net stop LxssManager
# 开启 WSL 服务
net start LxssManager
```

`wslconfig`: wsl 的配置命令.

```powershell
# 查看 wslconfig 的用法
wslconfig /?
```

### 修改 ubuntu 的源为 阿里云

```bash
# 先备份 "配置文件"
sudo cp /etc/apt/sources.list /etc/apt/sources.list.20181013

# 打开 "配置文件"
sudo vi /etc/apt/sources.list

# 替换为阿里云
:%s/security.ubuntu/mirrors.aliyun/g
:%s/archive.ubuntu/mirrors.aliyun/g

# 保存
:wq

# 更新源
sudo apt update
```

### 使用 node 环境

#### 安装 nvm

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

#### 安装长支持 node 版本

```bash
# 安装长支持 node 版本
nvm install --lts
```

#### 安装 yarn

```bash
# 修改源
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

# 更新源并安装
sudo apt-get update && sudo apt-get install yarn
```

## 参考

1. [WSL+VSCODE体验UBUNTU环境下的开发](http://haijd.tech/tool/wsl+vscode%E4%BD%93%E9%AA%8Cubuntu%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84%E5%BC%80%E5%8F%91/)

2. [修改 WSL Ubuntu 18.04 默认源为阿里云镜像
](https://www.sunzhongwei.com/modify-the-wsl-ubuntu-1804-default-source-for-ali-cloud-images?from=sidebar_new)

3. [github nvm](https://github.com/nvm-sh/nvm#install-script)

4. [YARN 安装](https://yarn.bootcss.com/docs/install/#debian-stable)
