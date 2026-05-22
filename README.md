Sakai is an application template for Vue based on the [create-vue](https://github.com/vuejs/create-vue), the recommended way to start a Vite-powered Vue projects.

Visit the [documentation](https://sakai.primevue.org/documentation) to get started.

https://teyyub.github.io/mercap-aze/

http://delphixglobal.com/

sudo vi  /etc/nginx/sites-available/delphixglobal.conf



server {
listen 80;
server_name delphixglobal.com;

    location / {
        proxy_pass http://127.0.0.1:4001;  # Docker container portu
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}


sudo ln -s /etc/nginx/sites-available/delphixglobal.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

sudo tail -f /var/log/nginx/error.log

sudo tail -f /var/log/nginx/access.log


sudo mv /etc/nginx/sites-enabled/default /etc/nginx/sites-enabled/default1
sudo systemctl reload nginx


/etc/nginx/nginx.conf


ls -l /etc/nginx/sites-enabled/

sudo unlink /etc/nginx/sites-enabled/default

👉
“SEO 0 → 100 checklist (Google-da rank almaq üçün)”
