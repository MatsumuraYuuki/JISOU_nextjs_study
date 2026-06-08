# tech-blog

Next.js の基礎を学ぶためのチュートリアル用リポジトリです。

参考：[【初心者完全版】0からNext.jsを2時間で基礎をマスターする最強チュートリアル【図解解説】](https://qiita.com/Sicut_study)

---

## 技術スタック

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Axios

---

## 学んだこと

- App Router によるファイルベースルーティング
- 動的ルーティング（`[id]`）と `params` の受け取り方
- サーバーコンポーネントと `async/await` によるデータ取得
- 外部 API 連携（Qiita API）
- `next/image` による画像最適化

---

## 環境構築

### 必要なもの

- Node.js 18以上

### セットアップ

```bash
git clone https://github.com/MatsumuraYuuki/tech-blog.git
cd tech-blog
npm install
```

### 環境変数

ルートに `.env.local` を作成し、以下を設定してください。

```
QIITA_API_KEY=your_qiita_api_key
```

### 起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。