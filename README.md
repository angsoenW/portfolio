# 重要事项

- 重要：不要更改程序架构，网站会在云端部署。加了依赖请告知。请务必在现有程序基础上开发。如果有任何困难请告知。
- 前端内容都在 Client 文件夹中，测试运行请输入 `npm start`（Terminal 须在 Client 文件夹目录中）。
- 最终效果测试需要在 Client 文件夹的 Terminal 中输入 `npm run build`，然后在主目录 Terminal 中输入 `npm start`。

## 已知 Bug

- 手机端打开排版错误，CSS 修改。
- 主页里板块边界不一样，有的白边明显有的没有白边，统一添加 border，以 `item.css` 为格式。
- About 页面里 Fun Fact 字体和别处不同，请修改。
- `npm run build`再 `npm start`之后，页面显示有些不同，比如主页的“Hi，You‘ve reached Shuoheng”卡片颜色丢失，方框也变得不圆润了， About里的字体颜色也丢失

## 已知需求

- 把主页的 “Hi， You've reached Shuoheng" 做成动画效果，想法是像 terminal 光标那样，一点一点打出来。
- 自适应，手机端网站排版合理，字体方便阅读。
- 主页的照片，鼠标放在上面有一个效果（preview），把这个去掉。
- 网站整体颜色：目前还算和谐，如果有提升空间或者不同配色，请告知。
- 字体颜色是否能清楚看到？如果不能，考虑加粗/重影等效果。
- Work 页面里各项卡片不够直观，考虑到还有一些内容需要添加。想做成类似小红书那种排版，顶部是图片，然后有标题和描述。每一个卡片上会有名字和描述，但描述会以... 结尾（当 text 无法全部展示时），点击卡片后，卡片会展开。

v: JasperWang_