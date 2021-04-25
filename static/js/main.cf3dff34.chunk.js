(this["webpackJsonpimage-uploader-app"]=this["webpackJsonpimage-uploader-app"]||[]).push([[0],{18:function(e,a,n){},21:function(e,a,n){"use strict";n.r(a);var t=n(2),o=n.n(t),c=n(12),r=n.n(c),i=(n(18),n(11)),l=n(5),s=n.n(l),d=n(6),p=n.n(d),u=n(0),m=function(e){var a=e.fileLoadHandler;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:"secondary-text-color text-center py-1",children:[Object(u.jsxs)("div",{className:p.a.dragAndDrogContainer,onDragOver:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},onDrop:function(e){e.stopPropagation(),e.preventDefault();var n=e.dataTransfer.files[0];a(n)},"data-testid":"draganddrog-container",children:[Object(u.jsx)("span",{className:"material-icons ".concat(p.a.iconFolderUpload),children:"drive_folder_upload"}),Object(u.jsx)("p",{children:"Drag & Drop your image here"})]}),Object(u.jsx)("p",{children:"or"}),Object(u.jsx)("button",{type:"button",className:p.a.buttonWrapper,children:Object(u.jsxs)("label",{htmlFor:"input-file",className:p.a.labelButton,children:["Choose a file",Object(u.jsx)("input",{type:"file",id:"input-file",className:p.a.inputFile,onChange:function(e){var n=e.target.files[0];a(n)}})]})})]})})},j=n(7),g=n.n(j),b=function(e){var a=e.imgName,n=e.classes;return Object(u.jsx)("section",{className:"py-1 ".concat(n),"data-testid":"image-loader-element",children:Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)("span",{className:"material-icons-round ".concat(g.a.iconFileUpload),children:"upload_file"}),Object(u.jsxs)("div",{className:g.a.flexGrow,children:[Object(u.jsxs)("p",{className:"d-flex ".concat(g.a.nameFile),children:[a,Object(u.jsx)("span",{id:"load-counter",children:"0%"})]}),Object(u.jsx)("div",{className:g.a.loaderBar,children:Object(u.jsx)("div",{className:g.a.progress,id:"progress-bar"})})]})]})})},h=b;b.defaultProps={imgName:""};var f=function(e){var a=new FormData;return a.append("image",e,e.name),fetch("http://localhost:8080/images",{method:"POST",body:a}).then((function(e){return e.json()})).catch((function(){return new Error("There was an error, try again")}))},_=n(10);n(22);_.a.initializeApp({apiKey:"AIzaSyBCisdp2nhZ-zKTLxY29rLiAFvwjtDfIPY",authDomain:"image-uploader-dace2.firebaseapp.com",projectId:"image-uploader-dace2",storageBucket:"image-uploader-dace2.appspot.com",messagingSenderId:"419170088208",appId:"1:419170088208:web:91bb151d3c4793c253a195"});var x=function(e){return _.a.storage().ref().child("images/".concat(e.name)).put(e).then((function(e){return e.ref.getDownloadURL()})).then((function(a){return{name:e.name,url:a,_id:2}}))},O=n(8),v=n.n(O),y=function(e){e.target.previousSibling.select(),document.execCommand("copy")},N=function(e){var a=e.images;return Object(u.jsxs)("section",{className:"container flex-column section w-50",children:[Object(u.jsx)("div",{children:Object(u.jsx)("span",{className:"material-icons-round ".concat(v.a.iconDone),children:"check_circle"})}),Object(u.jsx)("h3",{children:"Uploaded Successfully!"}),Object(u.jsx)("figure",{className:"my-1",children:Object(u.jsx)("img",{className:"w100 ".concat(v.a.imgHeight),src:a[0].url,alt:a[0].name})}),Object(u.jsx)("form",{className:"w100 ",children:a.map((function(e,a){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{className:v.a.label,children:["Option",a+1]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:v.a.input,value:e.url,readOnly:!0}),Object(u.jsx)("button",{type:"button",className:v.a.buttonCopyLink,onClick:y,children:"Copy"})]})]},e._id)}))})]})},w=function(){var e,a=Object(t.useState)(null),n=Object(i.a)(a,2),o=n[0],c=n[1],r=Object(t.useState)(null),l=Object(i.a)(r,2),d=l[0],p=l[1],j=0,g=function(){e=setInterval((function(){55===j||100===j?clearInterval(e):(j+=1,document.querySelector("#load-counter").textContent="".concat(j,"%"))}),50)};return Object(t.useEffect)((function(){var e;o&&(p(null),g(),document.querySelector("#progress-bar").style.width="55%",(e=o,Promise.all([x(e),f(e)])).then((function(e){j+=1,g(),document.querySelector("#progress-bar").style.transitionDuration="2.5s",document.querySelector("#progress-bar").style.width="100%",setTimeout((function(){c(null),p(e),document.querySelector("#progress-bar").style.width="0"}),2800)})))}),[o]),Object(u.jsxs)("div",{className:"container flex-column",children:[Object(u.jsx)("h1",{className:s.a.h1,children:"Upload your image"}),Object(u.jsx)("p",{className:s.a.p,children:"File should be Jpg, Png ..."}),Object(u.jsxs)("div",{className:"container flex-column section flex-row",children:[Object(u.jsxs)("div",{className:"section w-50 ".concat(s.a.overflowHidden),children:[Object(u.jsx)(m,{fileLoadHandler:c}),Object(u.jsx)(h,{classes:"".concat(s.a.loaderHide," ").concat(o&&s.a.loaderShow),imgName:(o||{}).name})]}),d&&Object(u.jsx)(N,{images:d}),!d&&Object(u.jsx)("div",{className:"container flex-column section w-50 minHeight",children:Object(u.jsx)("p",{children:"A\xfan no hay una imagen subida"})})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(a){var n=a.getCLS,t=a.getFID,o=a.getFCP,c=a.getLCP,r=a.getTTFB;n(e),t(e),o(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),C()},5:function(e,a,n){e.exports={h1:"App_h1__26v8a",overflowHidden:"App_overflowHidden__RFo6h",loaderHide:"App_loaderHide__1LdpC",loaderShow:"App_loaderShow__1p5jB"}},6:function(e,a,n){e.exports={iconFolderUpload:"UploadImageContainer_iconFolderUpload__3Qnc7",dragAndDrogContainer:"UploadImageContainer_dragAndDrogContainer__238pc",buttonWrapper:"UploadImageContainer_buttonWrapper__3v0pS",labelButton:"UploadImageContainer_labelButton__1jxCn",inputFile:"UploadImageContainer_inputFile__1_Zz1"}},7:function(e,a,n){e.exports={iconFileUpload:"ImageLoader_iconFileUpload__8c3LZ",nameFile:"ImageLoader_nameFile__2YPtk",flexGrow:"ImageLoader_flexGrow__36cXo",loaderBar:"ImageLoader_loaderBar__4OrMT",progress:"ImageLoader_progress__38l_m"}},8:function(e,a,n){e.exports={iconDone:"ImageUploaded_iconDone__2MCk5",label:"ImageUploaded_label__1sQ7P",input:"ImageUploaded_input__1whgh",buttonCopyLink:"ImageUploaded_buttonCopyLink__3kR2k",imgHeight:"ImageUploaded_imgHeight__AvbOi"}}},[[21,1,2]]]);
//# sourceMappingURL=main.cf3dff34.chunk.js.map