# これは何？
`express-generator`で簡易的なREST APIを作ってみるの巻

### 実行方法
DBマイグレーション実行
```
$ npx sequelize db:migrate
```
アプリ起動
```
$ npm start
```

### 参考記事
#### express-generator
* https://note.com/programmerk/n/n7f611a1cf0d9
* https://blog.mamansoft.net/2019/08/12/develop-express-with-typescript-cool-environment/
#### routing-controllers
* https://github.com/typestack/routing-controllers
#### inversifyJS
* https://github.com/inversify/InversifyJS

### 感想
* express-generatorのjsコードをTypeScriptに変換するのが面倒くさい
* expressでviewは要らないかなぁ
* routing-controllersでコントローラーが大分スッキリした
* routing-controllersのエラーハンドラが公式通りに動かずにハマった
* DIコンテナは[inversifyが鉄板っぽい](https://www.npmtrends.com/inversify-vs-tsyringe-vs-typedi-vs-typescript-ioc)
* inversifyはインターフェースと実装のバインドをいちいち定義しないといけないのかな？（調べ中）
* O/RMapperはsequelizeがメジャーだけど、[今後typeormに抜かれそう](https://www.npmtrends.com/sequelize-vs-typeorm)
* sequelize-cliでモデル生成できるけどjsファイル・・・。sequelize-cli-typescriptという素晴らしいモジュールがあったけど随分前からメンテされていない。
* CLIはともかく普通にTypeScriptは[公式サポート](https://sequelize.org/master/manual/typescript)されているので、問題ないかな。
* サーバーサイドJSのプロミス地獄がイケてない

### sequelize-cliの使い方
初期化とテーブル作成
```
$ npx sequelize init
$ npx sequelize model:create --name User --attributes id:number,name:string,age:number
```
シード作成
```
$ npx sequelize seed:generate --name User
$ npx sequelize db:seed:all
```
おまけ：sqliteに接続
```
$ sqlite3 ./data/development.sqlite3
```
