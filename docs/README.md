# Hello VuePress
```shell
for(i=0; i<8; i++) {
    printf("这是代码块测试代码");
    delay_ms(1000);                 /* 延时1s */
}
```

```ts
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default {
  plugins: [
    shikiPlugin({
      // 配置项
    }),
  ],
}
```