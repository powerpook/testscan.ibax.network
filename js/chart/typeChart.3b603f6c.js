import"../vue/vue.35a5c883.js";import{b as e,d as a,a as s}from"../../assets/index.cf3c5e35.js";import{P as t}from"../PrintChart/PrintChart.5d3e60d7.js";import{_ as r}from"../vue-qr/vue-qr.0ca12301.js";import{e as i,t as o,o as p,c,a as n,R as l,F as d}from"../@vue/@vue.077a65af.js";import"../@intlify/@intlify.d33e2919.js";import"../vue-axios/vue-axios.0d80ef0e.js";import"../element-plus/element-plus.ec3bfd4a.js";import"../@vueuse/@vueuse.57a4e826.js";import"../@element-plus/@element-plus.19eacc1c.js";import"../dayjs/dayjs.7a5f879f.js";import"../lodash-es/lodash-es.e287ec0c.js";import"../@ctrl/@ctrl.17547d95.js";import"../escape-html/escape-html.d572c0fd.js";import"../@popperjs/@popperjs.12a79995.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../decimal.js/decimal.js.77638b52.js";import"../vue-clipboard3/vue-clipboard3.f8057bcc.js";import"../clipboard/clipboard.eec53070.js";import"../vue-i18n/vue-i18n.e0b6e81d.js";import"../vuex/vuex.389a1fed.js";import"../axios/axios.3ae77db0.js";import"../vue-router/vue-router.62720988.js";import"../echarts/echarts.acca1833.js";import"../zrender/zrender.e63004cf.js";import"../tslib/tslib.e35f93b8.js";import"../echarts-gl/echarts-gl.c19cb34c.js";import"../claygl/claygl.59c2afb1.js";import"../centrifuge/centrifuge.c0d375ba.js";import"../vue-json-viewer/vue-json-viewer.32907f0d.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../js-binary-schema-parser/js-binary-schema-parser.f718aa23.js";import"../chartProcess/chartProcess.3894c095.js";import"../dist/html2canvas.1285d1cf.js";import"../jspdf/jspdf.330a9a43.js";import"../@babel/@babel.fd5c2a4f.js";import"../fflate/fflate.f62025b3.js";const m={class:"chain"},j={class:"panel-content-chart"},v=n("div",{class:"panel-content-chart-box"},[n("div",{id:"typeCharts",class:"ecolib-charts-item-line"})],-1);var u=r({setup(r){const u=i(e("chart.type")),b=o("axios"),f=i("typeCharts");return(async()=>{const t=await b.get("get_govern_model");if(0===t.code&&t.data){const r=[{name:e("chart.daoRatio"),key:"dao_ratio",label:e("chart.dao"),bond:"dao_governance"},{name:e("chart.manageRatio"),key:"creator_ratio",label:e("chart.manage"),bond:"creator_model"}].map((e=>({name:e.name,value:t.data[e.key],label:e.label,bond:t.data[e.bond]})));d((()=>{a.handleEchartPie(r,u.value,"50%",f.value,!0);a[f.value].setOption({legend:{top:30},tooltip:{trigger:"item",position:"right",formatter:e=>{const{data:a}=e;return`<div>\n          <div>\n          <span>${a.label}：</span>\n          <span>${s(a.bond)}</span>\n          </div>\n          <div>\n          <span>${a.name}：</span>\n          <span>${a.value} %</span>\n          </div>\n          </div>`}}})}))}})(),(e,a)=>(p(),c("div",m,[n("div",j,[l(t,{id:f.value,title:u.value},null,8,["id","title"]),v])]))}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/pages/chart/typeChart.vue"]]);export{u as default};
