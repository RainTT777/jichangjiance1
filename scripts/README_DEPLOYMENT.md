# 机场博客自动化监测探针 部署与配置指南

本套探针部署方案包含：
1. **`monitor_probe.py`**：Python 3 探针采集脚本。
2. **Systemd 常驻守护进程服务配置**：确保探针在 Linux VPS 上开机自启与异常自动重启。
3. **Nginx API 静态挂载与跨域 CORS 配置**：将生成的 `status-data.json` 暴露给前端博客安全调用。

---

## 1. 环境准备 (Linux VPS)

```bash
# 1. 更新系统包并安装 Python 3 & pip
sudo apt update && sudo apt install -y python3 python3-pip

# 2. 安装 requests 依赖 (可选，未安装脚本会自动回退至内置 urllib)
pip3 install requests

# 3. 创建探针部署目录并放置脚本
mkdir -p /var/www/probe
cp monitor_probe.py /var/www/probe/
cd /var/www/probe/
chmod +x monitor_probe.py
```

---

## 2. 部署方案 A：Systemd 常驻守护进程 (推荐)

创建 systemd 服务文件 `/etc/systemd/system/airport-probe.service`：

```ini
[Unit]
Description=Airport Blog Monitoring Probe Agent
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/var/www/probe
ExecStart=/usr/bin/python3 /var/www/probe/monitor_probe.py
Restart=always
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

**启动服务与设置开机自启：**

```bash
# 重新加载 systemd 配置
sudo systemctl daemon-reload

# 启动探针服务
sudo systemctl start airport-probe

# 设置开机自启动
sudo systemctl enable airport-probe

# 查看探针运行状态与实时日志
sudo systemctl status airport-probe
sudo journalctl -u airport-probe -f
```

---

## 3. 部署方案 B：Linux Crontab 定时运行 (备选)

若不想使用 systemd，也可通过 crontab 每分钟运行一次：

```bash
# 编辑定时任务
crontab -e

# 添加以下整行 (每分钟触发一次探针脚本)
* * * * * /usr/bin/python3 /var/www/probe/monitor_probe.py >> /var/log/airport-probe.log 2>&1
```

---

## 4. Nginx 静态 JSON 接口与跨域 CORS 挂载配置

编辑您的 Nginx 站点配置文件（例如 `/etc/nginx/sites-available/default` 或您的博客 Nginx 配置文件）：

```nginx
server {
    listen 80;
    server_name status.yourdomain.com; # 您的探针 API 域名或直接使用博客域名

    # 挂载 status-data.json 静态 API 路径
    location /api/status-data.json {
        alias /var/www/probe/status-data.json;
        
        # 允许前端 JavaScript 跨域读取 (CORS)
        add_header Access-Control-Allow-Origin * always;
        add_header Access-Control-Allow-Methods "GET, OPTIONS" always;
        add_header Access-Control-Allow-Headers "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range" always;

        # 禁用 Nginx 静态文件强缓存，确保前端获取最新实时数据
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires 0;

        default_type application/json;
    }
}
```

**检查并重新加载 Nginx：**

```bash
sudo nginx -t
sudo systemctl reload nginx
```

测试访问接口：
```bash
curl -i http://status.yourdomain.com/api/status-data.json
```

---

## 5. 输出数据 JSON 示例标准

探针脚本生成的 `status-data.json` 标准格式如下：

```json
{
  "node_id": "hk-iepl-01",
  "node_name": "香港 IEPL 01 [专线]",
  "last_updated": "2026-09-12T15:50:00Z",
  "next_refresh_seconds": 30,
  "telemetry": {
    "latency_ms": 24,
    "packet_loss_pct": 0.0,
    "peak_speed_mbps": 940,
    "uptime_pct": 99.9,
    "latency_history": [24, 25, 23, 26, 31, 28, 24]
  },
  "unlock_status": {
    "netflix": { "supported": true, "quality": "4K" },
    "chatgpt": { "supported": true, "label": "原生解锁" },
    "disney": { "supported": true, "quality": "4K" }
  },
  "protocols": ["IEPL纯专线", "VLESS", "Trojan", "Hysteria2"]
}
```
