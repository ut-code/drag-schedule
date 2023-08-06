# Schedule

[![React](https://img.shields.io/badge/React-555.svg?logo=react)](https://github.com/facebook/react)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white)](https://github.com/microsoft/TypeScript)
[![Vite](https://img.shields.io/badge/Vite-1e1e20.svg?logo=vite)](https://github.com/vitejs/vite)
[![CI](https://github.com/ut-code/drag-schedule/actions/workflows/ci.yml/badge.svg)](https://github.com/ut-code/drag-schedule/actions/workflows/ci.yml)

## 要件

### 必須

- [Node.js](https://nodejs.org/)

### 推奨

- [VS Code拡張機能](https://marketplace.visualstudio.com/VSCode)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## 環境構築(Dockerなし)

- 次のコマンドを実行する。
  ```shell
  npm run setup
  ```
- `backend/.env`に開発用のデータベースのURLを設定する。
- `backend`で次のコマンドを実行する。
  ```shell
  npm run db-push
  ```

## 開発(Dockerなし)

```shell
npm run dev
```

をして、`http://localhost:5173`にアクセスする。

## 環境構築(Dockerあり)

- 次のコマンドを実行する。
  ```shell
  docker compose build
  ```
- 次のコマンドを実行する。
  ```shell
  docker compose up
  ```
- 次のコマンドでデータベースに初期データを投入する。
  ```shell
  docker compose exec backend npm run seed:develop
  ```

## 開発(Dockerあり)

```shell
docker compose up
```

をして、`http://localhost:5173`にアクセスする。

## プルリクエストを出す前に

```shell
npm run lint && npm run type-check
```
