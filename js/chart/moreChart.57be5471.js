import"../vue/vue.35a5c883.js";import{b as e,d as a,a as s}from"../../assets/index.a97c9431.js";import{P as r}from"../PrintChart/PrintChart.c5bac4e0.js";import{_ as t}from"../vue-qr/vue-qr.0ca12301.js";import{e as i,t as o,o as c,c as p,a as n,R as m,F as l}from"../@vue/@vue.077a65af.js";import"../@intlify/@intlify.d33e2919.js";import"../vue-axios/vue-axios.0d80ef0e.js";import"../element-plus/element-plus.ec3bfd4a.js";import"../@vueuse/@vueuse.57a4e826.js";import"../@element-plus/@element-plus.19eacc1c.js";import"../dayjs/dayjs.7a5f879f.js";import"../lodash-es/lodash-es.e287ec0c.js";import"../@ctrl/@ctrl.17547d95.js";import"../escape-html/escape-html.d572c0fd.js";import"../@popperjs/@popperjs.12a79995.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../decimal.js/decimal.js.77638b52.js";import"../vue-clipboard3/vue-clipboard3.f8057bcc.js";import"../clipboard/clipboard.eec53070.js";import"../vue-i18n/vue-i18n.e0b6e81d.js";import"../vuex/vuex.389a1fed.js";import"../axios/axios.3ae77db0.js";import"../vue-router/vue-router.62720988.js";import"../echarts/echarts.acca1833.js";import"../zrender/zrender.e63004cf.js";import"../tslib/tslib.e35f93b8.js";import"../echarts-gl/echarts-gl.c19cb34c.js";import"../claygl/claygl.59c2afb1.js";import"../centrifuge/centrifuge.c0d375ba.js";import"../vue-json-viewer/vue-json-viewer.32907f0d.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../js-binary-schema-parser/js-binary-schema-parser.f718aa23.js";import"../chartProcess/chartProcess.f29b05c2.js";import"../dist/html2canvas.1285d1cf.js";import"../jspdf/jspdf.330a9a43.js";import"../@babel/@babel.fd5c2a4f.js";import"../fflate/fflate.f62025b3.js";const d={class:"chain"},j={class:"panel-content-chart"},u=n("div",{class:"panel-content-chart-box"},[n("div",{id:"moreCharts",class:"ecolib-charts-item-line"})],-1);var b=t({setup(t){const b=i("moreCharts"),v=i(`${e("chart.more")}`),f=o("axios");return(async()=>{const r=await f.get("get_max_key_ecosystem");if(0===r.code){const t=r.data.map((e=>[e.name,e.number,e])),i=`${e("chart.more")}`,o={legend:[e("ecolib.addnum")],series:[t]};l((()=>{a.handleEchartBarData(o,i,"moreCharts",!0),a.moreCharts.setOption({grid:{left:0,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}},formatter:a=>{const{data:r}=a[0],t=r[2];return`<div>\n          <div>\n          <span>${t.name}</span>\n          </div>\n          <div>\n          <span>${e("ecolib.addnum")}：</span>\n          <span>${s(t.number)}</span>\n          </div>\n          <div>\n          <span>${e("panel.proportion")}：</span>\n          <span>${t.ratio} %</span>\n          </div>\n          </div>`}}})}))}})(),(e,a)=>(c(),p("div",d,[n("div",j,[m(r,{id:b.value,title:v.value},null,8,["id","title"]),u])]))}},[["__file","C:/gitrepo/lib.venas.io/IBAX/scan.ibax.io/src/pages/chart/moreChart.vue"]]);export{b as default};
