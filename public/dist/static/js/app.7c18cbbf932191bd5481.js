webpackJsonp([0],[function(t,e,s){s(9);var n=s(1)(s(4),s(15),null,null);t.exports=n.exports},,,function(t,e,s){"use strict";var n=s(2),r=s(18),o=s(11),i=s.n(o);n.a.use(r.a);var a=new r.a.Store({state:{myTunes:[],results:[]},mutations:{searchResults:function(t,e){t.results=e},saveTunes:function(t,e){t.myTunes.push(e)},removeTunes:function(t,e){var s=t.myTunes.indexOf(e);t.myTunes.splice(s,1)},promoteSong:function(t,e){var s=t.myTunes[e.index];n.a.set(t.myTunes,e.index,t.myTunes[e.newIndex]),n.a.set(t.myTunes,e.newIndex,s)}},actions:{getMusicByArtist:function(t,e){var s=t.commit,n=(t.dispatch,e.query);console.log(n);var r="https://itunes.apple.com/search?term="+n,o="//bcw-getter.herokuapp.com/?url="+encodeURIComponent(r);i.a.get(o).then(function(t){var e=JSON.parse(t);s("searchResults",e.results)})},searchResults:function(t){t.commit,t.dispatch},getMyTunes:function(t){t.commit,t.dispatch},addToMyTunes:function(t,e){var s=t.commit;t.dispatch;s("saveTunes",e)},removeTrack:function(t,e){var s=t.commit;t.dispatch;s("removeTunes",e)},promoteTrack:function(t,e){var s=t.commit;t.dispatch;s("promoteSong",e)}}});e.a=a},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(12),r=s.n(n),o=s(13),i=s.n(o);e.default={name:"App",components:{itunes:r.a,mytunes:i.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(0);s.n(n);e.default={data:function(){return{query:"",searchOffset:0,lastQuery:""}},methods:{searchResults:function(){this.searchOffset=0,this.lastQuery=this.query,this.$store.dispatch("getMusicByArtist",{query:this.query,offset:this.searchOffset})},addToMyTunes:function(t){-1==this.$store.state.myTunes.indexOf(t)&&this.$store.dispatch("addToMyTunes",t)}},computed:{songs:function(){return this.$store.state.results}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(0);s.n(n);e.default={data:function(){return{query:"",searchOffset:0,lastQuery:""}},methods:{removeTrack:function(t){this.$store.dispatch("removeTrack",t)},promoteTrack:function(t){var e=this.$store.state.myTunes,s=e.indexOf(t),n=s-1;n>=0&&this.$store.dispatch("promoteTrack",{index:s,newIndex:n})},demoteTrack:function(t){var e=this.$store.state.myTunes,s=e.indexOf(t),n=s+1;n<e.length&&this.$store.dispatch("promoteTrack",{index:s,newIndex:n})}},computed:{songs:function(){return this.$store.state.myTunes}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),r=s(0),o=s.n(r),i=s(3);new n.a({el:"#app",store:i.a,template:"<App/>",components:{App:o.a}})},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){s(10);var n=s(1)(s(5),s(16),"data-v-3a3c4cc8",null);t.exports=n.exports},function(t,e,s){s(8);var n=s(1)(s(6),s(14),"data-v-3112f5a9",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},t._l(t.songs,function(e){return s("div",[s("div",{staticClass:"col-xs-12"},[s("h3",[t._v(t._s(e.artistName))]),t._v(" "),s("img",{staticClass:"img-responsive",staticStyle:{margin:"0 auto"},attrs:{height:"100px",width:"100px",src:e.artworkUrl100}}),t._v(" "),s("div",[t._v(t._s(e.trackName))]),t._v(" "),s("div",[t._v("Album title: "+t._s(e.collectionName))]),t._v(" "),s("div",[t._v("Price: "+t._s(e.collectionPrice))]),t._v(" "),s("audio",{attrs:{controls:"",id:"audio-box-song.trackId"}},[s("source",{attrs:{src:e.previewUrl,type:"audio/mp4"}})]),t._v(" "),s("button",{on:{click:function(s){t.removeTrack(e)}}},[t._v("Remove from MyTunes")]),t._v(" "),s("button",{on:{click:function(s){t.promoteTrack(e)}}},[t._v("Promote Track")]),t._v(" "),s("button",{on:{click:function(s){t.demoteTrack(e)}}},[t._v("Demote Track")])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("mytunes",{staticClass:"mytunes"}),t._v(" "),s("itunes",{staticClass:"itunes"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SearchForm"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("form",{on:{submit:function(e){e.preventDefault(),t.searchResults()}}},[s("div",{staticClass:"col md12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),t._m(0)])]),t._v(" "),t._l(t.songs,function(e){return s("div",[s("div",{staticClass:"col-xs-12"},[s("h3",[t._v(t._s(e.artistName))]),t._v(" "),s("img",{staticClass:"img-responsive",staticStyle:{margin:"0 auto"},attrs:{height:"100px",width:"100px",src:e.artworkUrl100}}),t._v(" "),s("div",[t._v(t._s(e.trackName))]),t._v(" "),s("div",[t._v("Album title: "+t._s(e.collectionName))]),t._v(" "),s("div",[t._v("Price: "+t._s(e.collectionPrice))]),t._v(" "),s("audio",{attrs:{controls:"",id:"audio-box-song.trackId"}},[s("source",{attrs:{src:e.previewUrl,type:"audio/mp4"}})]),t._v(" "),s("button",{on:{click:function(s){t.addToMyTunes(e)}}},[t._v("Add to MyTunes")])])])})],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col md2"},[s("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v(" search")])])}]}}],[7]);
//# sourceMappingURL=app.7c18cbbf932191bd5481.js.map