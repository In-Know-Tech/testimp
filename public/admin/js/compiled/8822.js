(self.webpackChunk=self.webpackChunk||[]).push([[8822],{1423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".avatar-img[data-v-66e083e3]{height:60px;-o-object-fit:cover;object-fit:cover;width:60px}",""]);const l=o},2705:(e,t,n)=>{var r=n(5639).Symbol;e.exports=r},4239:(e,t,n)=>{var r=n(2705),o=n(9607),l=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):l(e)}},7561:(e,t,n)=>{var r=n(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},1957:(e,t,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:(e,t,n)=>{var r=n(2705),o=Object.prototype,l=o.hasOwnProperty,a=o.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=l.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[i]=n:delete e[i]),o}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:(e,t,n)=>{var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,l=r||o||Function("return this")();e.exports=l},7990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:(e,t,n)=>{var r=n(3218),o=n(7771),l=n(4841),a=Math.max,i=Math.min;e.exports=function(e,t,n){var c,s,u,d,m,p,f=0,v=!1,h=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=c,r=s;return c=s=void 0,f=t,d=e.apply(r,n)}function k(e){return f=e,m=setTimeout(b,t),v?g(e):d}function E(e){var n=e-p;return void 0===p||n>=t||n<0||h&&e-f>=u}function b(){var e=o();if(E(e))return N(e);m=setTimeout(b,function(e){var n=t-(e-p);return h?i(n,u-(e-f)):n}(e))}function N(e){return m=void 0,y&&c?g(e):(c=s=void 0,d)}function V(){var e=o(),n=E(e);if(c=arguments,s=this,p=e,n){if(void 0===m)return k(p);if(h)return clearTimeout(m),m=setTimeout(b,t),g(p)}return void 0===m&&(m=setTimeout(b,t)),d}return t=l(t)||0,r(n)&&(v=!!n.leading,u=(h="maxWait"in n)?a(l(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),V.cancel=function(){void 0!==m&&clearTimeout(m),f=0,c=p=s=m=void 0},V.flush=function(){return void 0===m?d:N(o())},V}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,t,n)=>{var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:(e,t,n)=>{var r=n(5639);e.exports=function(){return r.Date.now()}},4841:(e,t,n)=>{var r=n(7561),o=n(3218),l=n(3448),a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(l(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=i.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}},8822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>H});var r=n(821),o=function(e){return(0,r.pushScopeId)("data-v-66e083e3"),e=e(),(0,r.popScopeId)(),e},l={class:"row justify-content-center"},a={class:"col-12"},i={class:"card mt-3"},c={class:"card-header"},s={class:"d-flex justify-content-between"},u={class:"card-title"},d=o((function(){return(0,r.createElementVNode)("i",{class:"fa-solid fa-filter"},null,-1)})),m={key:0},p={key:1},f=o((function(){return(0,r.createElementVNode)("i",{class:"fa-solid fa-times"},null,-1)})),v={key:0,class:"card-body border-bottom d-flex justify-content-between"},h={class:"w-25"},y={class:"ml-auto w-15"},g={value:""},k=["value"],E={class:"card-body table-responsive p-0"},b={class:"table table-valign-middle"},N=["src"],V=["innerHTML"],B=["innerHTML"],x={class:"d-flex"},_=["onClick"],w={key:1},C={colspan:"5",class:"text-center"};var S=n(9418),D=n(3279),j=n.n(D),T=n(9680);const F={props:{companies:Object,countries:Array,filters:Object||Array},components:{Pagination:S.Z,Inertia:T.Inertia},data:function(){return{form:{search:this.filters.search,country:this.filters.country},showFilter:!1}},methods:{deleteCompany:function(e){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.isConfirmed&&t.$inertia.delete(route("companies.destroy",e))}))},filteringData:function(){this.showFilter=!this.showFilter,localStorage.setItem("adminCompany",this.showFilter)}},watch:{"form.search":j()((function(e){T.Inertia.get("companies",{search:e},{preserveState:!0,replace:!0})}),500),"form.country":j()((function(e){T.Inertia.get("companies",{country:e},{preserveState:!0,replace:!0})}),500)},mounted:function(){this.checkPagePermission("admin"),this.showFilter="true"==localStorage.getItem("adminCompany")}};var L=n(3379),I=n.n(L),M=n(1423),O={insert:"head",singleton:!1};I()(M.Z,O);M.Z.locals;const H=(0,n(3744).Z)(F,[["render",function(e,t,n,o,S,D){var j=(0,r.resolveComponent)("Head"),T=(0,r.resolveComponent)("Link"),F=(0,r.resolveComponent)("EyeIcon"),L=(0,r.resolveComponent)("DeleteIcon"),I=(0,r.resolveComponent)("Pagination"),M=(0,r.resolveDirective)("tooltip");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(j,{title:e.__("Company List")},null,8,["title"]),(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("h3",u,(0,r.toDisplayString)(e.__("Company List")),1),(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("button",{class:"btn btn-secondary ml-2",onClick:t[0]||(t[0]=function(){return D.filteringData&&D.filteringData.apply(D,arguments)})},[d,(0,r.createTextVNode)("   "),S.showFilter?((0,r.openBlock)(),(0,r.createElementBlock)("span",p,(0,r.toDisplayString)(e.__("Hide Filter")),1)):((0,r.openBlock)(),(0,r.createElementBlock)("span",m,(0,r.toDisplayString)(e.__("Show Filter")),1))]),S.form.search.length||S.form.country.length?((0,r.openBlock)(),(0,r.createBlock)(T,{key:0,href:e.route("companies.index"),class:"btn btn-danger ml-2"},{default:(0,r.withCtx)((function(){return[f,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.__("Clear")),1)]})),_:1},8,["href"])):(0,r.createCommentVNode)("",!0)])])]),S.showFilter?((0,r.openBlock)(),(0,r.createElementBlock)("div",v,[(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("label",null,(0,r.toDisplayString)(e.__("Search")),1),(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return S.form.search=e}),type:"text",placeholder:"Search...",class:"form-control"},null,512),[[r.vModelText,S.form.search]])]),(0,r.createElementVNode)("div",y,[(0,r.createElementVNode)("label",null,(0,r.toDisplayString)(e.__("Country")),1),(0,r.withDirectives)((0,r.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return S.form.country=e})},[(0,r.createElementVNode)("option",g,(0,r.toDisplayString)(e.__("All")),1),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.countries,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.id,key:e.id},(0,r.toDisplayString)(e.name),9,k)})),128))],512),[[r.vModelSelect,S.form.country]])])])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",E,[(0,r.createElementVNode)("table",b,[(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",null,[(0,r.createElementVNode)("th",null,(0,r.toDisplayString)(e.__("Company")),1),(0,r.createElementVNode)("th",null,(0,r.toDisplayString)(e.__("Email")),1),(0,r.createElementVNode)("th",null,(0,r.toDisplayString)(e.__("Country")),1),(0,r.createElementVNode)("th",null,(0,r.toDisplayString)(e.__("Action")),1)])]),(0,r.createElementVNode)("tbody",null,[n.companies&&n.companies.data.length?((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,{key:0},(0,r.renderList)(n.companies.data,(function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:n},[(0,r.createElementVNode)("td",null,[(0,r.createVNode)(T,{href:e.route("companies.show",t.id)},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("img",{src:t.avatar,alt:"img",class:"img-circle img-size-32 mr-2"},null,8,N),(0,r.createElementVNode)("span",{innerHTML:t.name},null,8,V)]})),_:2},1032,["href"])]),(0,r.createElementVNode)("td",{innerHTML:t.email},null,8,B),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(t.country),1),(0,r.createElementVNode)("td",x,[(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createBlock)(T,{href:e.route("companies.show",t.id),class:"btn btn-sm pl-0"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(F)]})),_:2},1032,["href"])),[[M,e.__("Details")]]),(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("button",{onClick:function(e){return D.deleteCompany(t.id)},class:"btn btn-sm"},[(0,r.createVNode)(L)],8,_)),[[M,e.__("Delete")]])])])})),128)):((0,r.openBlock)(),(0,r.createElementBlock)("tr",w,[(0,r.createElementVNode)("td",C,[(0,r.createElementVNode)("h6",null,(0,r.toDisplayString)(e.__("No Data Found")),1)])]))])]),(0,r.createVNode)(I,{links:n.companies.links},null,8,["links"])])])])])],64)}],["__scopeId","data-v-66e083e3"]])},9418:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(821),o={class:"pagination justify-content-center"},l=["innerHTML"];const a={props:{links:{type:Array,required:!0}}};const i=(0,n(3744).Z)(a,[["render",function(e,t,n,a,i,c){var s=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("nav",null,[(0,r.createElementVNode)("ul",o,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.links,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[e.url?((0,r.openBlock)(),(0,r.createElementBlock)("li",{class:(0,r.normalizeClass)(["page-item",{active:e.active}]),key:t},[(0,r.createVNode)(s,{class:"page-link d-inline",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"])],2)):((0,r.openBlock)(),(0,r.createElementBlock)("li",{class:"page-item disabled",key:t,style:{"margin-top":"-7px"}},[(0,r.createElementVNode)("a",{class:"page-link",href:"#",innerHTML:e.label},null,8,l)]))],64)})),256))])])}]])}}]);