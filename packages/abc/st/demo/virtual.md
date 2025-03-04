---
order: 11
title:
  zh-CN: 虚拟滚动
  en-US: Virtual Scroll
---

## zh-CN

虚拟滚动，结合 [cdk scrolling](https://material.angular.io/cdk/scrolling/overview) 的虚拟滚动，用于巨量数据加载。可以通过获得 `cdkVirtualScrollViewport` 进行进一步操作，见本示例及 [API](https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport)。

## en-US

Virtual scrolling combine with [cdk scrolling](https://material.angular.io/cdk/scrolling/overview) used to display large data, you can get `cdkVirtualScrollViewport` in `STComponent` and find more API [here](https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport).

```ts
import { AfterViewInit, Component, DestroyRef, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { STColumn, STComponent, STModule, STPage } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="scrollToIndex(200)">Scroll To Index 200</button>
    <st #st [data]="data" [columns]="columns" [page]="page" virtualScroll [scroll]="{ x: '1300px', y: '240px' }" />
  `,
  imports: [STModule, NzButtonModule]
})
export class DemoComponent implements AfterViewInit {
  private destroy$ = inject(DestroyRef);
  @ViewChild('st', { static: false }) st!: STComponent;

  page: STPage = {
    front: false,
    show: false
  };
  data: Array<{ id: number; price: number }> = Array(2000)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      price: ~~(Math.random() * 100)
    }));
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 100 },
    { title: '价格1', index: 'price', width: 100 },
    { title: '价格2', index: 'price', width: 100 },
    { title: '价格3', index: 'price', width: 100 },
    { title: '价格4', index: 'price', width: 100 },
    { title: '价格5', index: 'price', width: 100 },
    { title: '价格6', index: 'price', width: 100 },
    { title: '价格7', index: 'price', width: 100 },
    { title: '价格8', index: 'price', width: 100 },
    { title: '价格9', index: 'price', width: 100 },
    { title: '价格10', index: 'price', width: 100 }
  ];

  scrollToIndex(index: number): void {
    this.st.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  ngAfterViewInit(): void {
    this.st.cdkVirtualScrollViewport?.scrolledIndexChange.pipe(takeUntilDestroyed(this.destroy$)).subscribe(data => {
      console.log('scroll index to', data);
    });
  }
}
```
