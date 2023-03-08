<template><div><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i sl-vue-template
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<h4 id="你可能会额外遇到-sass-的错误-所以你需要引入-sass" tabindex="-1"><a class="header-anchor" href="#你可能会额外遇到-sass-的错误-所以你需要引入-sass" aria-hidden="true">#</a> ⚡ 你可能会额外遇到 sass 的错误，所以你需要引入 sass</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>.vue 使用可能会遇到&lt;Button.Primary&gt;不存在的问题，这是因为 vue 文件不能这样使用组件
请按下面注入组件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> form <span class="token string">'sl-vue2-template'</span>

<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ButtonPrimary</span><span class="token operator">:</span> Button<span class="token punctuation">.</span>Primary
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">ButtonPrimary</span><span class="token operator">:</span> Button<span class="token punctuation">.</span>Primary
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div></template>


