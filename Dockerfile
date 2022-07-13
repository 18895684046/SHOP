FROM hub.bilibili.co/lifajin/template-web:base as builder
WORKDIR /app
COPY . .
RUN npm run build-dev

FROM nginx:alpine
COPY  --from=builder /app/dist/ /usr/share/nginx/html/
COPY /nginx/default.conf /etc/nginx/conf.d/
EXPOSE 80