# これは何？
`express-generator`で簡易的なREST APIを作ってみるの巻

### 参考記事
#### express-generator
* https://note.com/programmerk/n/n7f611a1cf0d9
* https://blog.mamansoft.net/2019/08/12/develop-express-with-typescript-cool-environment/
#### routing-controllers
https://github.com/typestack/routing-controllers

### 感想
* express-generatorのjsコードをTypeScriptに変換するのが面倒くさい
* expressでviewは要らないかなぁ
* routing-controllersでコントローラーが大分スッキリした
* routing-controllersのエラーハンドラが公式通りに動かずにハマった
```
{"name":"NotFoundError","stack":"Error: \n    at NotFoundError.HttpError [as constructor] (../src/http-error/HttpError.ts:19:22)\n    at new NotFoundError (../src/http-error/NotFoundError.ts:10:9)\n    at ExpressDriver.handleSuccess (../src/driver/express/ExpressDriver.ts:332:23)\n    at ../src/RoutingControllers.ts:160:45\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)"
```
