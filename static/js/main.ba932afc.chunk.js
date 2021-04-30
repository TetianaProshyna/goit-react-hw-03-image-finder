(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(7),o=a.n(c),s=(a(24),a(25),a(9)),i=a(3),l=a(4),u=a(6),h=a(5),d=a(18),m=a.n(d),g=a(0),b=function(e){var t=e.onClick,a=e.type,n=void 0===a?"button":a;return Object(g.jsx)("button",{onClick:t,className:"Button",type:n,children:"Load more"})},j=function(e){var t=e.src,a=e.srcLarge,n=e.onClick;return Object(g.jsx)("li",{className:"ImageGalleryItem",onClick:n,children:Object(g.jsx)("img",{src:t,"data-source":a,alt:"",className:"ImageGalleryItem-image"})})},p=function(e){var t=e.items,a=e.onClick,n=e.children;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(g.jsx)(j,{onClick:a,src:n,srcLarge:r},t)}))}),n]})},f=document.querySelector("#modal-root"),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(g.jsx)("div",{onClick:this.handleBackdropClick,className:"Overlay",children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{className:"Modal-img",src:this.props.src,alt:""})})}),f)}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{value:this.state.query,onChange:this.handleChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),v=a(19),x=a.n(v),C={fetchImg:function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,c=e.pageSize,o=void 0===c?12:c;return x.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=20619002-8fc642db62a2cbb864bfebfc1&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))}},k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,largeImg:""},e.handleOpenModal=function(t){e.setState({showModal:!0,largeImg:t.target.dataset.source})},e.handleCloseModal=function(){e.setState({showModal:!1,largeImg:""})},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a=t.currentPage,n=t.searchQuery;e.setState({isLoading:!0});var r={currentPage:a,searchQuery:n};C.fetchImg(r).then((function(t){e.setState((function(e){var a=e.images,n=e.currentPage;return{images:[].concat(Object(s.a)(a),Object(s.a)(t)),currentPage:n+1}}))})).then((function(){a>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.showModal,r=e.largeImg,c=t.length>0&&!a;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(O,{onSubmit:this.onChangeQuery}),Object(g.jsxs)(p,{onClick:this.handleOpenModal,items:t,children:[a&&Object(g.jsx)(m.a,{className:"spinner",type:"spin",color:"#303f9f",height:50,width:50}),c&&Object(g.jsx)(b,{onClick:this.fetchImages})]}),n&&Object(g.jsx)(y,{onClose:this.handleCloseModal,src:r})]})})}}]),a}(n.Component);o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.ba932afc.chunk.js.map