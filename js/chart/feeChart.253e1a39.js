import"../vue/vue.35a5c883.js";import{b as e,d as a,a as s}from"../../assets/index.a8db8e2d.js";import{P as t}from"../PrintChart/PrintChart.6aa15f25.js";import{_ as r}from"../vue-qr/vue-qr.0ca12301.js";import{e as i,t as o,o as l,c as p,a as n,R as c,F as m}from"../@vue/@vue.077a65af.js";import"../@intlify/@intlify.d33e2919.js";import"../vue-axios/vue-axios.0d80ef0e.js";import"../element-plus/element-plus.bab642f5.js";import"../@vueuse/@vueuse.57a4e826.js";import"../@element-plus/@element-plus.19eacc1c.js";import"../dayjs/dayjs.7a5f879f.js";import"../lodash-es/lodash-es.e287ec0c.js";import"../@ctrl/@ctrl.17547d95.js";import"../escape-html/escape-html.d572c0fd.js";import"../@popperjs/@popperjs.12a79995.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../decimal.js/decimal.js.77638b52.js";import"../vue-clipboard3/vue-clipboard3.f8057bcc.js";import"../clipboard/clipboard.eec53070.js";import"../vue-i18n/vue-i18n.e0b6e81d.js";import"../vuex/vuex.389a1fed.js";import"../axios/axios.3ae77db0.js";import"../vue-router/vue-router.92daffe0.js";import"../echarts/echarts.cc448593.js";import"../zrender/zrender.a8917a70.js";import"../tslib/tslib.e35f93b8.js";import"../echarts-gl/echarts-gl.4fe9f180.js";import"../claygl/claygl.59c2afb1.js";import"../centrifuge/centrifuge.c0d375ba.js";import"../vue-json-viewer/vue-json-viewer.32907f0d.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../js-binary-schema-parser/js-binary-schema-parser.f718aa23.js";import"../chartProcess/chartProcess.be0012c1.js";import"../dist/html2canvas.1285d1cf.js";import"../jspdf/jspdf.330a9a43.js";import"../@babel/@babel.fd5c2a4f.js";import"../fflate/fflate.f62025b3.js";const d={class:"chain"},f={class:"panel-content-chart"},u=n("div",{class:"panel-content-chart-box"},[n("div",{id:"feeCharts",class:"ecolib-charts-item-line"})],-1);var j=r({setup(r){const j=i(e("chart.fee")),b=o("axios"),v=i("feeCharts");return(async()=>{const t=await b.get("get_multi_fee_ecosystem");if(0===t.code&&t.data){const r=[{name:e("chart.feeRatio"),key:"multi_fee_ratio",label:e("chart.feeNum"),bond:"multi_fee"},{name:e("chart.noRatio"),key:"un_multi_fee_ratio",label:e("chart.feeNo"),bond:"un_multi_fee"}].map((e=>({name:e.name,value:t.data[e.key],label:e.label,bond:t.data[e.bond]})));m((()=>{a.handleEchartPie(r,j.value,"50%",v.value,!0);a[v.value].setOption({legend:{top:30},tooltip:{trigger:"item",position:"right",formatter:e=>{const{data:a}=e;return`<div>\n          <div>\n          <span>${a.label}：</span>\n          <span>${s(a.bond)}</span>\n          </div>\n          <div>\n          <span>${a.name}：</span>\n          <span>${a.value} %</span>\n          </div>\n          </div>`}}})}))}})(),(e,a)=>(l(),p("div",d,[n("div",f,[c(t,{id:v.value,title:j.value},null,8,["id","title"]),u])]))}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/pages/chart/feeChart.vue"]]);export{j as default};
