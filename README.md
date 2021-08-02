# rc-infinite-pagination

![](https://flat.badgen.net/npm/v/rc-infinite-pagination)
![](https://flat.badgen.net/bundlephobia/minzip/rc-infinite-pagination)
![](https://flat.badgen.net/npm/license/rc-infinite-pagination)
![](https://flat.badgen.net/npm/dt/rc-infinite-pagination)

rc-infinite-pagination is a infinite pagination component for React that doesn't require total page or count. You don't care about how many pages in a given list view, and just go-to-next and so forth till there's no data shown.

![](screenshot.gif)

## 安装 Install

```shell
npm install rc-infinite-pagination -S
# or with yarn
yarn add rc-infinite-pagination
```

## 示例 Usage

Example: https://codesandbox.io/s/rc-infinite-pagination-y3xt2

### 基本 Basic

```tsx
import InfinitePagination from 'rc-infinite-pagination'

const App = () => {
  return (
    <InfinitePagination
      current={current}
      onChange={handleChange}
      pageData={pageData}
    />
  );
};
```

### 自定义文本 Customize text

```tsx
import InfinitePagination from 'rc-infinite-pagination'

const App = () => {
  return (
    <InfinitePagination
      current={current}
      onChange={handleChange}
      pageData={pageData}
      pageSize={pageSize}
      prevText="prev"
      nextText="next"
    />
  );
};
```

### 自定义上、下页结构 Customize prev and next

```tsx
import InfinitePagination from 'rc-infinite-pagination'

const App = () => {
  return (
    <InfinitePagination
      current={current}
      onChange={handleChange}
      pageData={pageData}
      pageSize={pageSize}
      prev={prev}
      next={next}
    />
  );
};
```

### 自定义类名 Customize className

```tsx
import InfinitePagination from 'rc-infinite-pagination'

const App = () => {
  return (
    <InfinitePagination
      current={current}
      onChange={handleChange}
      pageData={pageData}
      pageSize={pageSize}
      className="fr"
    />
  );
};
```

## API

### 参数 Props

| 名称 Name      | 类型Type          | 描述 Description                                                         | 默认值 Default         |
| ------------- | ----------------- | ------------------------------------------------------------------------ | ---------------------- |
| current       | Number            | 当前页数 The current number of pages                                      | 1                      |
| pageSize      | Number            | 每页应展示条数 The number of items should be displayed per page           | 10                     |
| pageData      | Array             | 每页数据 data items per page                                              | []                     |
| className     | String            | 分页容器类名 The class name of the container of the pagination n          | -                      |
| onChange      | (current) => void | 页码改变的回调 The callback executed when the page number is changed       | -                      |
| prevText      | ReactNode         | 上一页文字 The text of the previous page                                  | `<span>&lt;</span>`     |
| nextText      | ReactNode         | 下一页文字 The text of the next page                                      | `<span>&gt;</span>`     |
| prev          | ReactNode         | 自定义渲染上一页按钮 The component to render the previous button           | -                      |
| next          | ReactNode         | 自定义渲染下一页按钮 The component to render the next button               | -                      |
