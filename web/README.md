# docker-compose wordpress

## 設定ファイルを編集

```
vi .env
```

### 環境に合わせて書き換える

```
COMPOSE_PROJECT_NAME=dev <= コンテナにつくプレフィックス、一意になるように修正
```

## 起動

```
docker-compose pull
docker-compose up -d
docker-compose logs -f
```

## 停止

```
docker-compose down
```

## httpd コンテナに接続

```
docker-compose exec -u www-data httpd bash
```
