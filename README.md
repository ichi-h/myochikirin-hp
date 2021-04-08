# めうちきりんのメトロポリス 公式サイト

URL: [https://myochikirin.ippee-music.com/](https://myochikirin.ippee-music.com/)  

![めうちきりんのメトロポリス 公式サイト](./img/app_img.jpg)

デスクトップ用サウンドノベルゲーム [「めうちきりんのメトロポリス」](https://github.com/ippee/novel_game)の公式サイトのリポジトリです。  
ゲームのダウンロード、お知らせ、世界観等を閲覧することができます。  

## 使用技術
### 概要
- フロントエンド
  - React
  - CSS
    - レスポンシブ対応
- バックエンド
  - Firebase
    - Hosting
    - Storage
- その他
  - GitHub Actions
    - Masterブランチの変更と、Firebaseへのデプロイを連動させる

### 構成
- フロントエンド (./src/)
  - assets/
    - 静的なファイルをまとめたフォルダ
  - components
    - 各ページのコンポーネントをまとめたフォルダ
  - App.js
    - ページトランジションやrouterの管理するコンポーネント
  - index.js
    - ReactDOMのレンダリングを管理するコンポーネント
  - firebase.js
    - Firebaseの設定を管理するファイル