#!/bin/bash

sudo apt update
sudo apt install certbot python3-certbot-nginx -y


EMAIL="teyyub392@gmail.com"

DOMAINS=(
  "mercap-aze.com"
  "www.mercap-aze.com"
  "qolum.az"
  "www.qolum.az"
)

sudo certbot \
  --nginx \
  --non-interactive \
  --agree-tos \
  --email "$EMAIL" \
  $(printf -- "-d %s " "${DOMAINS[@]}")
