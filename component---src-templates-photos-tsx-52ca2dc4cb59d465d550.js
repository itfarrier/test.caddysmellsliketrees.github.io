webpackJsonp([0xdc92c52e78c1],{191:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var o=a(85),n=i(o),r=a(153),l=i(r),d=a(152),c=i(d),u=a(399),f=i(u),p=a(398),h=i(p),g=a(6),y=i(g),m=a(19),b=i(m),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,L=[],z=function(e,t){s().observe(e),L.push([e,t])},j=null,I=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",s=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+n+r+t+a+o+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},O=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,h.default)({},i,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};O.propTypes={style:b.default.object,onLoad:b.default.func};var T=function(e){function t(a){(0,n.default)(this,t);var i=(0,l.default)(this,e.call(this,a)),s=!0,o=!0,r=!1,d=S(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,o=!1,r=!0),"undefined"==typeof window&&(s=!1,o=!1),i.state={isVisible:s,imgLoaded:o,IOSupported:r},i.handleRef=i.handleRef.bind(i),i}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&z(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,s=t.className,o=t.outerWrapperClassName,n=t.style,r=void 0===n?{}:n,l=t.imgStyle,d=void 0===l?{}:l,c=t.placeholderStyle,u=void 0===c?{}:c,f=t.sizes,p=t.resolutions,g=t.backgroundColor,m=t.Tag,b=void 0;b="boolean"==typeof g?"lightgray":g;var w=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d,u),S=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(f){var E=f;return E.srcWebp&&E.srcSetWebp&&I()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),y.default.createElement(m,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},y.default.createElement(m,{className:(s?s:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},y.default.createElement(m,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&y.default.createElement(O,{alt:i,title:a,src:E.base64,style:w}),E.tracedSVG&&y.default.createElement(O,{alt:i,title:a,src:E.tracedSVG,style:w}),b&&y.default.createElement(m,{title:a,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(O,{alt:i,title:a,srcSet:E.srcSet,src:E.src,sizes:E.sizes,style:S,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,h.default)({alt:i,title:a},E))}})))}if(p){var L=p,z=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},r);return"inherit"===r.display&&delete z.display,L.srcWebp&&L.srcSetWebp&&I()&&(L.src=L.srcWebp,L.srcSet=L.srcSetWebp),y.default.createElement(m,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},y.default.createElement(m,{className:(s?s:"")+" gatsby-image-wrapper",style:z,ref:this.handleRef},L.base64&&y.default.createElement(O,{alt:i,title:a,src:L.base64,style:w}),L.tracedSVG&&y.default.createElement(O,{alt:i,title:a,src:L.tracedSVG,style:w}),b&&y.default.createElement(m,{title:a,style:{backgroundColor:b,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&y.default.createElement(O,{alt:i,title:a,width:L.width,height:L.height,srcSet:L.srcSet,src:L.src,style:S,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,h.default)({alt:i,title:a,width:L.width,height:L.height},L))}})))}return null},t}(y.default.Component);T.defaultProps={fadeIn:!0,alt:"",Tag:"div"},T.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=T},515:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(191),s=a(6),o=function(e){var t=e.data.allFile.edges,a=(e.i18nMessages,e.i18nMessages.pageNames),o=(a.lyrics,a.news,e.location.pathname),n=("images"+o.replace(/\/\w*\/\w*/,"")).slice(0,-1),r=t.filter(function(e){return e.node.relativeDirectory===n}),l=r.map(function(e){return s.createElement("a",{href:e.node.childImageSharp.original.src,key:e.node.childImageSharp.original.src},s.createElement(i.default,{sizes:e.node.childImageSharp.sizes}))});return s.createElement(s.Fragment,null,l)};t.PhotosQuery="** extracted graphql fragment **",t.default=o}});
//# sourceMappingURL=component---src-templates-photos-tsx-52ca2dc4cb59d465d550.js.map