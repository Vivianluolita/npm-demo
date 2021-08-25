# -[npm-demo](https://juejin.cn/post/6844903679162581005)

## npm
- vpay文件夹的位置，然后终端运行npm init命令来初始化一个npm包配置文件，此时他会问你一些列问题来完成配置文件：
```
npm init
```
- 将vpay文件夹直接放入Node_module中

```
 // 直接引入vpay,不需要写路径
import vpay from 'vpay'

Vue.use(vpay);
```

- 切回npm镜像

```
npm config set registry http://registry.npmjs.org 
```

- 在vpay文件夹中执行命令

```
npm login
```
- [npm login报错](https://blog.csdn.net/baozhuona/article/details/82734120)
```
npm publish 发布失败 无法连接 https://registry.npmjs.org

npm login -d

```
- 发布

```
npm publish
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
