# angular 9.1.6 学习项目

### License

The GPL License

### 新增加的库 -g 全局安装的
```json
{
  "plupload": "^2.3.6",
  "protobufjs": "^6.9.0",
  "rxjs": "^6.5.5",
  "jquery": "^3.5.1"
}
```

### 新增模块以及菜单
* 使用命令新增module
* 在routes-routing.module.ts中配置新增module的路由，否则找不到路径404错误
* 在app-data.json中，添加菜单数据，当然如果这个数据是来自后台，那么就在后台添加
* 在app-data.json中使用到了i18n的数据和icon的数据。i18n的数据在tmp/i18n/下的文件中添加对应的i18n数据
* app-data.json数据还有i18n的数据在 StartupService中使用。本来应该从后台获取的，这是demo就从本地获取了。
* icon的图标使用插件的方式添加，运行 ng g ng-alain:plugin icon. 这个插件只从html和ts文件中寻找，如果是在json中使用了，要在style-icon.ts中自己引入
* icon可以在[iconfont](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=9402)中寻找
* icon图标，带outline后缀的，不需要写-outlone，Fill后缀的写-fill，TwoTone后缀的写-twotone

### 创建模块和业务组件
* ng g ng-alain:module trade，创建trade模块
* ng g ng-alain:edit edit -m=video，创建video模块的edit组件，edit目录在video目录下，edit模块的文件在edit目录下
* ng g ng-alain:curd list -m=trade，在trade/curd目录下，一次性创建list(在curd下)、view(在list下)、edit(在list下)模块，好像不能直接在trade目录下直接创建3个组件.
* ng g ng-alain:view view -m=video，所以，如果不喜欢上面的目录结构，可以自己单独创建。

### protobufjs的使用
* pbjs -t static-module -w commonjs -o bundled.js file1.proto file2.proto
将多个proto文件生成一个js文件
* pbjs -t static-module -w commonjs -o bundled.js account_detail.proto answer.proto content.proto follow.proto platform_detail.proto score_detail.proto user.proto account.proto article.proto dialogue.proto orders.proto images.proto score.proto answer_file.proto comment.proto favorite.proto platform_account.proto question.proto tags.proto equipment.proto characters.proto virtual_items.proto category.proto video.proto payment.proto
* pbts -o bundled.d.ts bundled.js
将生成的bundled.js 生成typescript的文件bundled.d.ts

### ng-alain的一些问题
* 如果类中注入了Modal，那么由Modal模式改为连接跳转，及时路由配置正确，也会报错。所以要去掉modal的注入
* 如果使用modal的方式打开，那么因为没有$(document).ready事件，uploader初始化时会找不到对应的browse_button的id，so无法浏览文件
* 新引入的第三方js或者jquery或者jquery插件，需要重启，新引入，需要重启动，否则无法检测到插件 https://blog.csdn.net/yhc0322/article/details/78796009
* modal模式，this.undefined就是穿过来的参数，但是table.js._btnClick中的bug，没有设置或取到参数名导致。可以使用click的方式避免
* angular中没有$(document).ready(function(){});的等价物，使用这种方法。window.onload = (() => {})这个好像也不对
* 关于标题显示出了注释中的内容，如果没有没有按照菜单的等级去显示，那么titleService.getByElement()778行(fesm2015/theme.js中)
使用firstChild会获取到注释，改为使用lastChild就可以了。但是最好还是使用菜单层级，那样，菜单选中也是显示正确的
* 路径和菜单不匹配，子路径匹配父路径也会打开对应的菜单。要多配置一个路由，参考video模块
* 关于面包屑菜单不能正确显示（父路径匹配子路径的情况），因为pageHeader.js是拿整个子路径去MenuService查询，因为没有配置子路径，所以查询不到。
在fesm2015/pageHeader.js中修改了，截取父路径再查询一次，在127行修改。

### angular 404 错误
* 拦截器中，重新clone request，可是这个clone总失败，导致404，是因为没有设置url。
* http 404错误，是后端真的是没有这个url，video/update

### url跳转和modal弹窗，以及plupload上传初始化的问题
- 如果类中注入了Modal，那么由Modal模式改为连接跳转，即使路由配置正确，也会报错。所以要去掉modal的注入
- 如果使用modal的方式打开，那么因为没有$(document).ready事件，uploader初始化时会找不到对应的browse_button的id，so浏览器无法浏览文件
