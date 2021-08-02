(self.webpackChunkdelon=self.webpackChunkdelon||[]).push([[13],{5517:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CacheModule:()=>k});var o=n(3423),c=n(1337),i=n(7465),s=n(7716),d=n(3965),r=n(6704),a=n(3289),l=n(303),u=n(8058),h=n(4453),p=n(9374),g=n(4514),y=n(8583);let m=(()=>{class e{constructor(e,t){this.srv=e,this.msg=t,this.key="demo"}get newValue(){return+new Date}getByHttp(){this.srv.get("https://randomuser.me/api/?results=1").subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{null!=e?this.msg.warning(`"${this.key}" new status: ${e.type}`):this.msg.success("register success")})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(l.Q),s.Y36(u.dD))},e.\u0275cmp=s.Xpm({type:e,selectors:[["cache-getting-started-simple"]],decls:23,vars:3,consts:[[1,"pt-sm"],["nz-button","",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1),s.ALo(2,"json"),s.qZA(),s.TgZ(3,"div",0),s._uU(4," Basic: "),s.TgZ(5,"button",1),s.NdJ("click",function(){return t.srv.set(t.key,t.newValue)}),s._uU(6,"Set"),s.qZA(),s.TgZ(7,"button",1),s.NdJ("click",function(){return t.value=t.srv.getNone(t.key)}),s._uU(8,"Get"),s.qZA(),s.TgZ(9,"button",1),s.NdJ("click",function(){return t.srv.remove(t.key)}),s._uU(10,"Remove"),s.qZA(),s.TgZ(11,"button",1),s.NdJ("click",function(){return t.srv.clear()}),s._uU(12,"Clear"),s.qZA(),s.qZA(),s.TgZ(13,"div",0),s._uU(14," Key is valid request: "),s.TgZ(15,"button",1),s.NdJ("click",function(){return t.getByHttp()}),s._uU(16,"Get"),s.qZA(),s.qZA(),s.TgZ(17,"div",0),s._uU(18," Notify: "),s.TgZ(19,"button",1),s.NdJ("click",function(){return t.registerNotify()}),s._uU(20,"Register"),s.qZA(),s.TgZ(21,"button",1),s.NdJ("click",function(){return t.unRegisterNotify()}),s._uU(22,"UnRegister"),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.hij("value: ",s.lcZ(2,1,t.value),""))},directives:[h.ix,p.dQ,g.w],pipes:[y.Ts],encapsulation:2}),e})(),v=(()=>{class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/cache/docs/getting-started.md"},content:{"zh-CN":{content:'<section class="markdown"><h2 id="\u5199\u5728\u524d\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524d\u9762"></i></a>\u5199\u5728\u524d\u9762</h2><p>\u901a\u5e38\u628a\u4e00\u4e9b\u8fdc\u7a0b\u6570\u636e\u7f13\u5b58\u5728\u5185\u5b58\u6216 <code>localStorage</code> \u6301\u4e45\u5316\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u51cf\u5c11 Http \u8bf7\u6c42\u7684\u6210\u672c\uff1b\u8fd9\u6837\u7684\u6570\u636e\u901a\u5e38\u662f\u5b57\u5178\u3001\u57ce\u5e02\u6570\u636e\u7b49\u3002</p><p>\u7f13\u5b58\u7684\u83b7\u53d6\u5e94\u8be5\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u6211\u4eec\u4e0d\u5e94\u8be5\u628a\u65f6\u95f4\u6d6a\u8d39\u5728\u5982\u4f55\u4fdd\u8bc1\u52a0\u8f7d\u8fd9\u4ef6\u4e8b\u60c5\u4e0a\uff0c\u56e0\u6b64 <code>@delon/cache</code> \u66f4\u591a\u662f\u4ee5<strong>\u7ea6\u5b9a</strong>\u4e3a\u524d\u63d0\u3002<code>key</code> \u4f5c\u4e3a\u7f13\u5b58\u7684\u552f\u4e00\u952e\u503c\uff0c\u5b83\u4e0d\u5e94\u8be5\u53ea\u662f\u5355\u7eaf\u7684\u4e00\u4e2a\u6807\u8bc6\u7b26\uff0c\u5982\u679c\u9075\u5b88\u67d0\u79cd\u7ea6\u5b9a\u5b83\u7684\u5b58\u5728\u4f1a\u66f4\u6709\u4ef7\u503c\u3002<code>@delon/cache</code> \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u5149\u628a <code>key</code> \u5f53\u4f5c\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u540c\u65f6\u5b83\u8fd8\u662f\u4e00\u4e2a\u7528\u4e8e\u83b7\u53d6\u8fdc\u7a0b\u6570\u636e\u7684\u6709\u6548HTTP\uff0c\u4f8b\u5982\uff1a</p><pre class="hljs language-ts"><code>cacheService.get(\'/data/unit\');</code></pre><p>\u5728\u4ee5\u5f80\u6211\u4eec\u4f1a\u8ba4\u4e3a\uff0c\u5728\u5b83\u4e4b\u524d\u5e94\u8be5\u9700\u8981\u52a0\u4e00\u4e2a\uff1a</p><pre class="hljs language-ts"><code>cacheService.set(\'/data/unit\', [ \'\u4e2a\', \'\u4ef6\' ]);</code></pre><p>\u624d\u80fd\u591f\u786e\u4fdd\u83b7\u53d6\u5230\u7f13\u5b58\u6570\u636e\u3002</p><p>\u800c\u5bf9\u4e8e <code>@delon/cache</code> \u800c\u8a00\uff0c\u4f60\u65e0\u987b <code>set</code> \u65b9\u6cd5\uff0c\u76f4\u63a5\u4f7f\u7528 <code>get</code> \u83b7\u53d6\u5230\u5355\u4f4d\u5b57\u5178\uff0c\u56e0\u4e3a\u6211\u4eec\u6709\u4e00\u79cd<strong>\u7ea6\u5b9a</strong>\uff0c\u5f53\u7f13\u5b58\u4e0d\u5b58\u5728\u900f\u8fc7 <code>key</code> \u4f5c\u4e3aHTTP\u8bf7\u6c42\u6570\u636e\u7f13\u5b58\u540e\u518d\u8fd4\u56de\u3002</p><p>\u7f13\u5b58\u7684\u83b7\u53d6\u4e0e\u8bbe\u7f6e\u90fd\u662f\u901a\u8fc7 <a href="/cache/service" data-url="/cache/service">CacheService</a> \u6765\u64cd\u4f5c\uff0c\u4f60\u53ea\u9700\u8981\u5c06 <code>CacheService</code> \u5bfc\u5165\u5bf9\u5e94\u7684\u7c7b\u5f53\u4e2d\u5373\u53ef\u3002</p><h2 id="\u5982\u4f55\u4f7f\u7528"><a class="lake-link"><i data-anchor="\u5982\u4f55\u4f7f\u7528"></i></a>\u5982\u4f55\u4f7f\u7528</h2><p><strong>\u5b89\u88c5</strong></p><pre class="hljs language-bash"><code>yarn add @delon/cache</code></pre><p><strong>\u6ce8\u518c</strong></p><p>\u5728\u6839\u6a21\u5757 <code>AppModule</code> \u5bfc\u5165 <code>DelonCacheModule</code>\uff1b</p><pre class="hljs language-ts"><code>import { DelonCacheModule } from \'@delon/cache\';\n\n@NgModule({\n  imports: [\n    DelonCacheModule\n  ]\n})</code></pre><p><strong>\u6ce8</strong> \u5efa\u8bae\u5728\u6839\u6a21\u5757\u4e2d\u5bfc\u5165\uff0c\u56e0\u4e3a\u5b83\u53ea\u6709 Service \u4e3a\u4e86\u9632\u6b62\u91cd\u590d\u88ab\u5bfc\u5165\u3002</p><h3 id="\u53c2\u6570"><a class="lake-link"><i data-anchor="\u53c2\u6570"></i></a>\u53c2\u6570</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8bf4\u660e</th><th>\u7c7b\u578b</th><th>\u9ed8\u8ba4\u503c</th><th>\u5168\u5c40\u914d\u7f6e</th></tr></thead><tbody><tr><td><code>[mode]</code></td><td><code>promise,none</code></td><td><code>promise</code></td><td>\u7f13\u5b58\u6a21\u5f0f\uff1b<code>promise</code> \u7ea6\u5b9a\u6a21\u5f0f\uff0c\u5141\u8bb8 <code>key</code> \u4f5c\u4e3a http \u83b7\u53d6\u6570\u636e\uff1b<code>none</code> \u6b63\u5e38\u6a21\u5f0f</td><td>\u2705</td></tr><tr><td><code>[reName]</code></td><td><code>string</code></td><td>-</td><td>\u91cd\u547d\u540d\u8fd4\u56de\u53c2\u6570\uff0c\u4f8b\u5982\uff1a<br> <code>null</code> \u8fd4\u56de\u4f53\u4e3a\u5185\u5bb9<br><code>list</code> \u8fd4\u56de\u4f53\u5e94 <code>{ list: [] }</code><br><code>result.list</code> \u8fd4\u56de\u4f53\u5e94 <code>{ result: { list: [] } }</code></td><td>\u2705</td></tr><tr><td><code>[expire]</code></td><td><code>number</code></td><td>-</td><td>\u8bbe\u7f6e\u9ed8\u8ba4\u8fc7\u671f\u65f6\u95f4\u503c\uff08\u5355\u4f4d\uff1a\u79d2\uff09</td><td>\u2705</td></tr><tr><td><code>[prefix]</code></td><td><code>string</code></td><td>-</td><td>\u6301\u4e45\u5316\u6570\u636e\u952e\u503c\u524d\u7f00</td><td>\u2705</td></tr><tr><td><code>[meta_key]</code></td><td><code>string</code></td><td><code>__cache_meta</code></td><td>\u6301\u4e45\u5316\u6570\u636e\u5143\u6570\u636e\u5b58\u50a8\u952e\u540d</td><td>\u2705</td></tr><tr><td><code>[request]</code></td><td><code>(key: string) => Observable&lt;unknown></code></td><td>-</td><td>\u81ea\u5b9a\u4e49\u8bf7\u6c42\u4f53</td><td>\u2705</td></tr></tbody></table><blockquote><p>\u53ef\u4ee5\u901a\u8fc7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5c40\u914d\u7f6e</a>\u8986\u76d6\u5b83\u4eec\u3002</p></blockquote></section>',meta:{order:1,title:"\u5f00\u59cb\u4f7f\u7528",type:"Documents"},toc:[{id:"\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762",h:2},{id:"\u5982\u4f55\u4f7f\u7528",title:"\u5982\u4f55\u4f7f\u7528",h:2,children:[{id:"\u53c2\u6570",title:"\u53c2\u6570",h:3}]}]}},demo:!0},this.codes=[{id:"cache-getting-started-simple",meta:{title:{"zh-CN":"\u57fa\u7840\u6837\u4f8b","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:'import { Component, OnDestroy } from \'@angular/core\';\nimport { CacheService } from \'@delon/cache\';\nimport { NzMessageService } from \'ng-zorro-antd/message\';\nimport { Subscription } from \'rxjs\';\n\n@Component({\n  selector: \'cache-getting-started-simple\',\n  template: `\n    <p>value: {{ value | json }}</p>\n    <div class="pt-sm">\n      Basic:\n      <button nz-button (click)="srv.set(key, newValue)">Set</button>\n      <button nz-button (click)="value = srv.getNone(key)">Get</button>\n      <button nz-button (click)="srv.remove(key)">Remove</button>\n      <button nz-button (click)="srv.clear()">Clear</button>\n    </div>\n    <div class="pt-sm">\n      Key is valid request:\n      <button nz-button (click)="getByHttp()">Get</button>\n    </div>\n    <div class="pt-sm">\n      Notify:\n      <button nz-button (click)="registerNotify()">Register</button>\n      <button nz-button (click)="unRegisterNotify()">UnRegister</button>\n    </div>\n  `,\n})\nexport class CacheGettingStartedSimpleComponent implements OnDestroy {\n  value: any;\n  key = \'demo\';\n  private notify$: Subscription;\n\n  get newValue(): number {\n    return +new Date();\n  }\n\n  constructor(public srv: CacheService, private msg: NzMessageService) {}\n\n  getByHttp(): void {\n    this.srv.get(`https://randomuser.me/api/?results=1`).subscribe(res => {\n      this.value = res;\n    });\n  }\n\n  registerNotify(): void {\n    if (this.notify$) this.notify$.unsubscribe();\n    this.notify$ = this.srv.notify(this.key).subscribe(res => {\n      if (res == null) {\n        this.msg.success(\'register success\');\n        return;\n      }\n      this.msg.warning(`"${this.key}" new status: ${res.type}`);\n    });\n  }\n\n  unRegisterNotify(): void {\n    this.srv.cancelNotify(this.key);\n  }\n\n  ngOnDestroy(): void {\n    if (this.notify$) this.notify$.unsubscribe();\n  }\n}',name:"simple",urls:"packages/cache/docs/demo/simple.md",type:"demo",lang:"ts",componentName:"CacheGettingStartedSimpleComponent",point:0}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-cache-getting-started"]],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){1&e&&(s.TgZ(0,"app-docs",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"code-box",3),s._UZ(4,"cache-getting-started-simple"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.Q6J("codes",t.codes)("item",t.item),s.xp6(1),s.Q6J("nzGutter",16),s.xp6(2),s.Q6J("item",t.codes[0]),s.uIk("id",t.codes[0].id))},directives:[d.P,r.SK,r.t3,a.e,m],styles:["[_nghost-%COMP%]{display:block}"]}),e})(),b=(()=>{class e{constructor(e,t){this.srv=e,this.msg=t,this.key="demo"}get newValue(){return+new Date}getByHttp(){this.srv.get("https://randomuser.me/api/?results=1").subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{null!=e?this.msg.warning(`"${this.key}" new status: ${e.type}`):this.msg.success("register success")})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(l.Q),s.Y36(u.dD))},e.\u0275cmp=s.Xpm({type:e,selectors:[["cache-service-simple"]],decls:23,vars:3,consts:[[1,"pt-sm"],["nz-button","",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1),s.ALo(2,"json"),s.qZA(),s.TgZ(3,"div",0),s._uU(4," Basic: "),s.TgZ(5,"button",1),s.NdJ("click",function(){return t.srv.set(t.key,t.newValue)}),s._uU(6,"Set"),s.qZA(),s.TgZ(7,"button",1),s.NdJ("click",function(){return t.value=t.srv.getNone(t.key)}),s._uU(8,"Get"),s.qZA(),s.TgZ(9,"button",1),s.NdJ("click",function(){return t.srv.remove(t.key)}),s._uU(10,"Remove"),s.qZA(),s.TgZ(11,"button",1),s.NdJ("click",function(){return t.srv.clear()}),s._uU(12,"Clear"),s.qZA(),s.qZA(),s.TgZ(13,"div",0),s._uU(14," Key is valid request: "),s.TgZ(15,"button",1),s.NdJ("click",function(){return t.getByHttp()}),s._uU(16,"Get"),s.qZA(),s.qZA(),s.TgZ(17,"div",0),s._uU(18," Notify: "),s.TgZ(19,"button",1),s.NdJ("click",function(){return t.registerNotify()}),s._uU(20,"Register"),s.qZA(),s.TgZ(21,"button",1),s.NdJ("click",function(){return t.unRegisterNotify()}),s._uU(22,"UnRegister"),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.hij("value: ",s.lcZ(2,1,t.value),""))},directives:[h.ix,p.dQ,g.w],pipes:[y.Ts],encapsulation:2}),e})();const f=[{path:"",component:i.S,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:v},{path:"service",redirectTo:"service/zh",pathMatch:"full"},{path:"service/:lang",component:(()=>{class e{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/cache/docs/service.md"},content:{"zh-CN":{content:'<section class="markdown"></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="set"><a class="lake-link"><i data-anchor="set"></i></a>set()</h3><table><thead><tr><th>\u53c2\u6570\u540d</th><th>\u7c7b\u578b</th><th>\u63cf\u8ff0</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>string</code></td><td>\u7f13\u5b58\u552f\u4e00\u6807\u8bc6\u7b26</td></tr><tr><td><code>data</code></td><td><code>any | Observable&lt;any></code></td><td>\u7f13\u5b58\u6570\u636e\u6e90\uff0c\u6570\u636e\u6e90\u4e3a <code>Observable</code> \u65f6\uff0c\u4f9d\u7136\u8fd4\u56de <code>Observable</code>\uff0c\u5426\u5219\u8fd4\u56de <code>void</code></td></tr><tr><td><code>options</code></td><td><code>{ type?: \'m\' | \'s\', expire?: number }</code></td><td><code>type</code> \u5b58\u50a8\u7c7b\u578b\uff0c\'m\' \u8868\u793a\u5185\u5b58\uff0c\'s\' \u8868\u793a\u6301\u4e45<br><code>expire</code> \u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4d <code>\u79d2</code></td></tr></tbody></table><h3 id="get"><a class="lake-link"><i data-anchor="get"></i></a>get()</h3><table><thead><tr><th>\u53c2\u6570\u540d</th><th>\u7c7b\u578b</th><th>\u63cf\u8ff0</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>string</code></td><td>\u7f13\u5b58\u552f\u4e00\u6807\u8bc6\u7b26</td></tr><tr><td><code>options</code></td><td><code>{ mode?: \'promise\' | \'none\', type?: \'m\' | \'s\', expire?: number }</code></td><td><code>mode</code> \u6307\u5b9a\u83b7\u53d6\u7f13\u5b58\u7684\u6a21\u5f0f\uff1a<br>1\u3001<code>promise</code> \u8868\u793a\u82e5\u4e0d\u5b58 <code>key</code> \u5219\u628a <code>key</code> \u5f53URL\u53d1\u8d77\u8bf7\u6c42\u5e76\u7f13\u5b58\u4e14\u8fd4\u56de Observable<br>2\u3001<code>none</code> \u8868\u793a\u76f4\u63a5\u8fd4\u56de\u6570\u636e\u82e5KEY\u4e0d\u5b58\u5728\u5219\u76f4\u63a5\u8fd4\u56de <code>null</code><br><br><code>type</code> \u5b58\u50a8\u7c7b\u578b\uff0c\'m\' \u8868\u793a\u5185\u5b58\uff0c\'s\' \u8868\u793a\u6301\u4e45<br><code>expire</code> \u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4d <code>\u79d2</code></td></tr></tbody></table><h3 id="getNone"><a class="lake-link"><i data-anchor="getNone"></i></a>getNone()</h3><p>\u83b7\u53d6\u7f13\u5b58\u6570\u636e\uff0c\u82e5 <code>key</code> \u4e0d\u5b58\u5728\u6216\u5df2\u8fc7\u671f\u5219\u8fd4\u56de null\u3002</p><h3 id="tryGet"><a class="lake-link"><i data-anchor="tryGet"></i></a>tryGet()</h3><p>\u83b7\u53d6\u7f13\u5b58\uff0c\u82e5\u4e0d\u5b58\u5728\u5219\u8bbe\u7f6e\u7f13\u5b58\u5bf9\u8c61\uff0c\u53c2\u6570\u7b49\u540c <code>set()</code>\u3002</p><h3 id="has"><a class="lake-link"><i data-anchor="has"></i></a>has()</h3><p>\u662f\u5426\u7f13\u5b58 <code>key</code>\u3002</p><h3 id="remove"><a class="lake-link"><i data-anchor="remove"></i></a>remove()</h3><p>\u79fb\u9664\u7f13\u5b58 <code>key</code>\u3002</p><h3 id="clear"><a class="lake-link"><i data-anchor="clear"></i></a>clear()</h3><p>\u6e05\u7a7a\u6240\u6709\u7f13\u5b58\u3002</p><h3 id="notify"><a class="lake-link"><i data-anchor="notify"></i></a>notify()</h3><p><code>key</code> \u76d1\u542c\uff0c\u5f53 <code>key</code> \u53d8\u66f4\u3001\u8fc7\u671f\u3001\u79fb\u9664\u65f6\u901a\u77e5\uff0c\u6ce8\u610f\u4ee5\u4e0b\u82e5\u5e72\u7ec6\u8282\uff1a</p><ul><li><p>\u8c03\u7528\u540e\u9664\u518d\u6b21\u8c03\u7528 <code>cancelNotify</code> \u5426\u5219\u6c38\u8fdc\u4e0d\u8fc7\u671f</p></li><li><p>\u76d1\u542c\u5668\u6bcf <code>freq</code> (\u9ed8\u8ba4\uff1a3\u79d2) \u6267\u884c\u4e00\u6b21\u8fc7\u671f\u68c0\u67e5</p></li></ul><h3 id="cancelNotify"><a class="lake-link"><i data-anchor="cancelNotify"></i></a>cancelNotify()</h3><p>\u53d6\u6d88 <code>key</code> \u76d1\u542c</p><h3 id="hasNotify"><a class="lake-link"><i data-anchor="hasNotify"></i></a>hasNotify()</h3><p><code>key</code> \u662f\u5426\u5df2\u7ecf\u76d1\u542c</p><h3 id="clearNotify"><a class="lake-link"><i data-anchor="clearNotify"></i></a>clearNotify()</h3><p>\u6e05\u7a7a\u6240\u6709 <code>key</code> \u7684\u76d1\u542c</p><h3 id="freq"><a class="lake-link"><i data-anchor="freq"></i></a>freq()</h3><p>\u8bbe\u7f6e\u76d1\u542c\u9891\u7387\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\u4e14\u6700\u4f4e <code>20ms</code>\uff0c\u9ed8\u8ba4\uff1a<code>3000ms</code>\u3002</p><h2 id="get\u548ctryGet\u7684\u533a\u522b"><a class="lake-link"><i data-anchor="get\u548ctryGet\u7684\u533a\u522b"></i></a><code>get</code> \u548c <code>tryGet</code> \u7684\u533a\u522b</h2><p>\u672c\u8d28\u90fd\u662f\u83b7\u53d6\u5e76\u8fd4\u56de\u7f13\u5b58\u6570\u636e\uff0c<code>get</code> \u76f8\u6bd4 <code>tryGet</code> \u66f4\u7b80\u5316\uff0c\u524d\u8005\u6309KEY\u5373\u662fURL\u7ea6\u5b9a\u7684\u98ce\u683c\uff0c\u540e\u8005\u9700\u6307\u5b9a\u6570\u636e\u6e90\u5bf9\u8c61\u3002</p><h2 id="\u9177\u64cd\u4f5c"><a class="lake-link"><i data-anchor="\u9177\u64cd\u4f5c"></i></a>\u9177\u64cd\u4f5c</h2><h3 id="async\u7ba1\u9053"><a class="lake-link"><i data-anchor="async\u7ba1\u9053"></i></a>async \u7ba1\u9053</h3><p>RxJS \u548c <code>async</code> \u7ba1\u9053\u4e8c\u8005\u7684\u914d\u5408\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u975e\u5e38\u53cb\u597d\u7684\u4f7f\u7528\u7f13\u5b58\u6570\u636e\uff0c\u4f8b\u5982\uff1a</p><pre class="hljs language-ts"><code>@Component({\n  template: `&lt;li *ngFor="let unit of units | async"&gt;{{unit}}&lt;/li&gt;`\n})\nexport class Component {\n  units: this.srv.get(\'/data/unit\')\n}</code></pre><h3 id="\u7f13\u5b58\u4e0e\u8bf7\u6c42"><a class="lake-link"><i data-anchor="\u7f13\u5b58\u4e0e\u8bf7\u6c42"></i></a>\u7f13\u5b58\u4e0e\u8bf7\u6c42</h3><p>\u6709\u65f6\u9700\u8981\u4f9d\u8d56\u5b57\u5178\u83b7\u53d6\u8fdc\u7a0b\u6570\u636e\u65f6\uff1a</p><pre class="hljs language-ts"><code>this.srv\n  .get(\'/data/unit\')\n  .pipe(\n    map(units => this.http.get(`/trade?unit=${units}`))\n  );</code></pre>',meta:{order:2,title:"CacheService",type:"Documents"},toc:[{id:"API",title:"API",h:2,children:[{id:"set",title:"set()",h:3},{id:"get",title:"get()",h:3},{id:"getNone",title:"getNone()",h:3},{id:"tryGet",title:"tryGet()",h:3},{id:"has",title:"has()",h:3},{id:"remove",title:"remove()",h:3},{id:"clear",title:"clear()",h:3},{id:"notify",title:"notify()",h:3},{id:"cancelNotify",title:"cancelNotify()",h:3},{id:"hasNotify",title:"hasNotify()",h:3},{id:"clearNotify",title:"clearNotify()",h:3},{id:"freq",title:"freq()",h:3}]},{id:"get\u548ctryGet\u7684\u533a\u522b",title:"get \u548c tryGet \u7684\u533a\u522b",h:2},{id:"\u9177\u64cd\u4f5c",title:"\u9177\u64cd\u4f5c",h:2,children:[{id:"async\u7ba1\u9053",title:"async \u7ba1\u9053",h:3},{id:"\u7f13\u5b58\u4e0e\u8bf7\u6c42",title:"\u7f13\u5b58\u4e0e\u8bf7\u6c42",h:3}]}]}},demo:!0},this.codes=[{id:"cache-service-simple",meta:{title:{"zh-CN":"\u57fa\u7840\u6837\u4f8b","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:'import { Component, OnDestroy } from \'@angular/core\';\nimport { CacheService } from \'@delon/cache\';\nimport { NzMessageService } from \'ng-zorro-antd/message\';\nimport { Subscription } from \'rxjs\';\n\n@Component({\n  selector: \'cache-service-simple\',\n  template: `\n    <p>value: {{ value | json }}</p>\n    <div class="pt-sm">\n      Basic:\n      <button nz-button (click)="srv.set(key, newValue)">Set</button>\n      <button nz-button (click)="value = srv.getNone(key)">Get</button>\n      <button nz-button (click)="srv.remove(key)">Remove</button>\n      <button nz-button (click)="srv.clear()">Clear</button>\n    </div>\n    <div class="pt-sm">\n      Key is valid request:\n      <button nz-button (click)="getByHttp()">Get</button>\n    </div>\n    <div class="pt-sm">\n      Notify:\n      <button nz-button (click)="registerNotify()">Register</button>\n      <button nz-button (click)="unRegisterNotify()">UnRegister</button>\n    </div>\n  `,\n})\nexport class CacheServiceSimpleComponent implements OnDestroy {\n  value: any;\n  key = \'demo\';\n  private notify$: Subscription;\n\n  get newValue(): number {\n    return +new Date();\n  }\n\n  constructor(public srv: CacheService, private msg: NzMessageService) {}\n\n  getByHttp(): void {\n    this.srv.get(`https://randomuser.me/api/?results=1`).subscribe(res => {\n      this.value = res;\n    });\n  }\n\n  registerNotify(): void {\n    if (this.notify$) this.notify$.unsubscribe();\n    this.notify$ = this.srv.notify(this.key).subscribe(res => {\n      if (res == null) {\n        this.msg.success(\'register success\');\n        return;\n      }\n      this.msg.warning(`"${this.key}" new status: ${res.type}`);\n    });\n  }\n\n  unRegisterNotify(): void {\n    this.srv.cancelNotify(this.key);\n  }\n\n  ngOnDestroy(): void {\n    if (this.notify$) this.notify$.unsubscribe();\n  }\n}',name:"simple",urls:"packages/cache/docs/demo/simple.md",type:"demo",lang:"ts",componentName:"CacheServiceSimpleComponent",point:0}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-cache-service"]],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(e,t){1&e&&(s.TgZ(0,"app-docs",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"code-box",3),s._UZ(4,"cache-service-simple"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.Q6J("codes",t.codes)("item",t.item),s.xp6(1),s.Q6J("nzGutter",16),s.xp6(2),s.Q6J("item",t.codes[0]),s.uIk("id",t.codes[0].id))},directives:[d.P,r.SK,r.t3,a.e,b],styles:["[_nghost-%COMP%]{display:block}"]}),e})()}]}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[c.m,o.Bz.forChild(f)]]}),e})()}}]);