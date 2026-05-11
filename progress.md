# Progress

## 2026-05-12

### 実施済み事項
- デザインを「ガジェット感・ダーク」→「ボールド・ポップ・カラーブロック」に全面刷新
- カラーパレット: クリーム/#F5EDDA・マルーン/#2b1507・オレンジ・ピンク・ライム・ブルー・イエロー
- TOOLSセクションを立体ボタン風（3Dシャドウ）に変更
- NOTE.LOGを4行に拡張
- ローカルプレビューを python-http（port 5173）で運用
- 各種実データを反映：
  - Xボタン: https://x.com/zeroichi_code
  - noteボタン: https://note.com/zeroichi_python
  - Android Appカード: アプリ名・URL・icon.png設定済み
  - NOTE.LOG: 4記事のタイトル・日付・URLを設定
  - TOOLSボタン1番: 楽天利益計算ツールのURL設定済み

### 現在のステータス
- `index.html` 1ファイルで完結、ローカルプレビュー動作中
- TOOLSボタン 2〜4番のURLは未設定（`#` のまま）
- デプロイ未実施

### 次回のタスク
- TOOLSボタン 4番のURL・名前・説明文の設定
- XプロフィールにURL（https://zeroichi-code.github.io/website/）を貼り付け

### デプロイ情報
- URL: https://zeroichi-code.github.io/website/
- GitHub: https://github.com/zeroichi-code/website
- 更新方法: index.html を編集 → git add / commit / push → 自動反映

### アカウント情報
- GitHub: あり
- X: https://x.com/zeroichi_code
- note: https://note.com/zeroichi_python
- メール: clockworkorange1019@gmail.com

## 2026-05-10

### 実施済み事項
- Xプロフィール用サイトの初版を作成（コンセプト「遊び心とガジェット感」／Glassmorphism＋ネオン）
- React + Tailwind CSS + lucide-react で実装
- 構成: Header / Android App Card（メインディスプレイ）/ Tool Grid / Note Log / SNS Links
- ファイル構成:
  - `ProfileSite.jsx` … claude.ai Artifacts 貼り付け用の単体コンポーネント
  - `index.html` … ローカルプレビュー用（Babel Standalone でJSXを変換、1ファイル完結）
- 白い霞みを軽減する調整を実施（背景を `#03050b` に、グロー不透明度 0.20 → 0.06、デバイスフレーム `bg-black/80 + backdrop-blur-md`）

### 現在のステータス
- ローカルでのプレビューはClaude Codeの Launch preview パネルから `index.html` を表示する形で動作確認中
- Artifactsでのプレビューは表示確認済み
- コンテンツ（PROFILE オブジェクト）は仮データのまま（アプリ名・ツール名・noteタイトル・SNSリンクすべてダミー）

### 次回のタスク
- `PROFILE` オブジェクトの実データ差し替え（Androidアプリ名、楽天利益計算ツールのURL、note記事リンク、X/GitHub/noteのURL）
- デザインの細かい調整（必要に応じて）
- デプロイ（Vite化 → Vercel/Netlify など）の検討
- `ProfileSite.jsx` と `index.html` の内容が分離しているので、本格運用時はVite化して一本化するのが望ましい
