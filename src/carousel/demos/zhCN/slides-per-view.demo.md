# 每屏显示数量

```html
<n-alert title="注意" type="warning" style="margin-bottom: 16px;">
  该属性会与 `loop` 冲突，如果你需要自定义每屏显示数量，那么 `loop` 功能将被禁用。
</n-alert>
<n-carousel
  :slides-per-view="3"
  :space-between="20"
  :loop="false"
  draggable
>
  <img
    class="carousel-img"
    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
  />
  <img
    class="carousel-img"
    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
  />
  <img
    class="carousel-img"
    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
  />
  <img
    class="carousel-img"
    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
  />
</n-carousel>
```

```css
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
```
