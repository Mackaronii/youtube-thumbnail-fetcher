(this["webpackJsonpyoutube-thumbnail-fetcher"]=this["webpackJsonpyoutube-thumbnail-fetcher"]||[]).push([[0],{31:function(e,t,n){e.exports=n(63)},37:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(16),r=n.n(i),l=n(6),u=n(7),c=n(9),s=n(8),h=n(12),d=n(14),p=n(28),m=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(p.a,{steps:["View thumbnails in various resolutions.",3e3,"Available resolutions include: Default (120x90)",1e3,"Available resolutions include: Medium (320x180)",1e3,"Available resolutions include: High (480x360)",1e3,"Available resolutions include: Standard (640x480)",1e3,"Available resolutions include: Maximum (1280x720)",2e3,"Enter a YouTube video URL below to get started!",3e3],loop:1/0,wrapper:"p"})}}]),n}(a.Component),b=n(29),f=n(30),v=n(15),y=(n(37),function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={input:""},a.onChange=a.onChange.bind(Object(h.a)(a)),a.onSubmit=a.onSubmit.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){this.setState({input:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.input)}},{key:"render",value:function(){return o.a.createElement("div",{className:"search-form"},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement(b.a,{size:"lg"},o.a.createElement(f.a,{onChange:this.onChange,placeholder:this.props.placeholderText})),o.a.createElement(v.a,{variant:"outline-light",size:"lg",type:"submit",disabled:this.props.isLoading},this.props.isLoading?"Fetching...":this.props.buttonText)))}}]),n}(a.Component)),E=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isLoading:!1},a.parseUserInput=a.parseUserInput.bind(Object(h.a)(a)),a.getVideoInfo=a.getVideoInfo.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"parseUserInput",value:function(e){if(e.includes("youtube.com/watch?v=")){var t=e.split("youtube.com/watch?v=")[1].split("&")[0];this.getVideoInfo(t)}else if(e.includes("youtu.be/")){var n=e.split("youtu.be/")[1];this.getVideoInfo(n)}else this.props.onBadUserInput()}},{key:"getVideoInfo",value:function(e){var t=this,n="".concat("https://www.googleapis.com/youtube/v3","/videos?key=").concat("AIzaSyDHXwLACnzxWVGqZgiBY9RBvNH5QB_NIHA","&part=snippet&id=").concat(e);this.setState({isLoading:!0},(function(){fetch(n).then((function(e){return e.json()})).then((function(e){return t.props.onVideoInfoFetched(e)})).then((function(){return t.setState({isLoading:!1})}))}))}},{key:"render",value:function(){return o.a.createElement(y,{placeholderText:"Enter a YouTube video URL",buttonText:"Get Thumbnails",isLoading:this.state.isLoading,onSubmit:this.parseUserInput})}}]),n}(a.Component),g=n(13),j=(n(43),n(18)),O=n(25),T=n(26),w=(n(44),function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"video-info"},o.a.createElement("h4",null,this.props.title),o.a.createElement("p",null,this.props.body))}}]),n}(a.Component)),I=n(24),k=(n(45),function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.thumbnails,t=[e.default,e.medium,e.high,e.standard,e.maxres].map((function(e,t){var n="".concat(e.width,"x").concat(e.height);return o.a.createElement(v.a,{key:t,variant:"light",href:e.url,target:"_blank"},n)}));return o.a.createElement("div",{className:"thumbnail-links"},o.a.createElement("h3",null,"Thumbnail Links"),o.a.createElement(I.a,null,t))}}]),n}(a.Component)),D=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.videoInfo.title,t=this.props.videoInfo.channelTitle,n=new Date(this.props.videoInfo.publishedAt).toUTCString(),a=this.props.videoInfo.thumbnails,i=a.maxres;return o.a.createElement(d.a,{className:"thumbnail-details-container"},o.a.createElement(O.a,null,o.a.createElement(j.a,{xs:12,md:6},o.a.createElement(g.Spring,{from:{opacity:0,marginTop:50},to:{opacity:1,marginTop:0},config:{duration:1e3}},(function(e){return o.a.createElement("div",{style:e},o.a.createElement(T.a,{src:i.url,thumbnail:!0,fluid:!0}))}))),o.a.createElement(j.a,{xs:12,md:6},o.a.createElement(g.Spring,{from:{opacity:0,marginTop:-50},to:{opacity:1,marginTop:0},config:{delay:1e3,duration:1e3}},(function(t){return o.a.createElement("div",{style:t},o.a.createElement(w,{title:"Video Title",body:e}))})),o.a.createElement(g.Spring,{from:{opacity:0,marginTop:-50},to:{opacity:1,marginTop:0},config:{delay:1500,duration:1e3}},(function(e){return o.a.createElement("div",{style:e},o.a.createElement(w,{title:"Channel Name",body:t}))})),o.a.createElement(g.Spring,{from:{opacity:0,marginTop:-50},to:{opacity:1,marginTop:0},config:{delay:2e3,duration:1e3}},(function(e){return o.a.createElement("div",{style:e},o.a.createElement(w,{title:"Publish Date",body:n}))})))),o.a.createElement(g.Spring,{from:{opacity:0},to:{opacity:1},config:{delay:3e3,duration:1e3}},(function(e){return o.a.createElement("div",{style:e},o.a.createElement(k,{thumbnails:a}))})))}}]),n}(a.Component),C=(n(61),function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(g.Spring,{from:{opacity:0,marginTop:-50},to:{opacity:1,marginTop:0},config:{duration:500}},(function(t){return o.a.createElement("div",{style:t},o.a.createElement("div",{className:"error-details"},o.a.createElement("h3",null,e.props.title),o.a.createElement("p",null,e.props.body)))}))}}]),n}(a.Component)),S=n(27),V=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e="#FF0000",t="cobweb",n=200;return o.a.createElement(S.a,{color:e,type:t,num:n,bg:!0})}}]),n}(a.Component),x=(n(62),function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).TYPICAL=o.a.createElement(m,null),a.state={showTypical:!0,showThumbnailDetails:!1,showErrorDetails:!1},a.onBadUserInput=a.onBadUserInput.bind(Object(h.a)(a)),a.onVideoNotFound=a.onVideoNotFound.bind(Object(h.a)(a)),a.onVideoInfoFetched=a.onVideoInfoFetched.bind(Object(h.a)(a)),a.showThumbnailDetails=a.showThumbnailDetails.bind(Object(h.a)(a)),a.showErrorDetails=a.showErrorDetails.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"onBadUserInput",value:function(){console.error("Failed to parse URL");var e=o.a.createElement(C,{title:"Failed to Parse URL",body:"The URL must contain either youtube.com/watch?v= or youtu.be/."});this.showErrorDetails(e)}},{key:"onVideoNotFound",value:function(){console.error("Video not found");var e=o.a.createElement(C,{title:"Video Not Found",body:"The provided URL does not go to a valid YouTube video."});this.showErrorDetails(e)}},{key:"onVideoInfoFetched",value:function(e){if(0===e.items.length)this.onVideoNotFound();else{var t=e.items[0].snippet,n=o.a.createElement(D,{videoInfo:t});this.showThumbnailDetails(n)}}},{key:"showThumbnailDetails",value:function(e){this.setState({thumbnailDetails:e,showTypical:!1,showThumbnailDetails:!0,showErrorDetails:!1})}},{key:"showErrorDetails",value:function(e){this.setState({errorDetails:e,showTypical:!0,showThumbnailDetails:!1,showErrorDetails:!0})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,{className:"home-container"},o.a.createElement("h1",null,"YouTube Thumbnail Fetcher"),this.state.showTypical&&this.TYPICAL,o.a.createElement(E,{onBadUserInput:this.onBadUserInput,onVideoInfoFetched:this.onVideoInfoFetched}),this.state.showThumbnailDetails&&this.state.thumbnailDetails,this.state.showErrorDetails&&this.state.errorDetails),o.a.createElement(V,null))}}]),n}(a.Component)),F=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#C4302B",document.body.style.padding="20px"}},{key:"render",value:function(){return o.a.createElement(x,null)}}]),n}(a.Component);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(F,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.79bb7cfe.chunk.js.map