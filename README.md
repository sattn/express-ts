# これは何？
`express-generator`で簡易的なREST APIを作ってみるの巻

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
