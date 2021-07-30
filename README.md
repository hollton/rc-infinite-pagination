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

### 基本 Basic

Example: https://codesandbox.io/s/rc-infinite-pagination-y3xt2

```tsx
import React from 'react'
import InfinitePagination from 'rc-infinite-pagination'

const App = () => {
  return (
    <InfinitePagination
      current={current}
      onChange={handleChange}
      pageLength={pageData?.length}
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
| pageLength    | Number            | 每页数据条数 Number of data items per page                                | 0                      |
| wrapClassName | String            | 分页容器类名 The class name of the container of the pagination n          | 'pagination'           |
| itemClassName | String            | 页项类名 The class name of the page item                                  | 'pagination-item'      |
| onChange      | (current) => void | 页码改变的回调 The callback executed when the page number is changed       | -                      |
| disableChange | boolean           | 是否禁用翻页，请求时，可设为true Whether to disable page turning for fetch  | false                  |
| prevText      | ReactNode         | 上一页文字 The text of the previous page                                  | `<span>&lt;</span>`     |
| nextText      | ReactNode         | 下一页文字 The text of the next page                                      | `<span>&gt;</span>`     |
| prev          | ReactNode         | 自定义渲染上一页按钮 The component to render the previous button           | -                      |
| next          | ReactNode         | 自定义渲染下一页按钮 The component to render the next button               | -                      |
