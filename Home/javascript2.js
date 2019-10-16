"use strict";Array.from||(Array.from=function(){var e=Object.prototype.toString,l=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},n=Math.pow(2,53)-1,d=function(t){var e,a=(e=Number(t),isNaN(e)?0:0!==e&&isFinite(e)?(0<e?1:-1)*Math.floor(Math.abs(e)):e);return Math.min(Math.max(a,0),n)};return function(t){var e=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a,n=1<arguments.length?arguments[1]:void 0;if(void 0!==n){if(!l(n))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(a=arguments[2])}for(var s,o=d(e.length),r=l(this)?Object(new this(o)):new Array(o),i=0;i<o;)s=e[i],r[i]=n?void 0===a?n(s,i):n.call(a,s,i):s,i+=1;return r.length=o,r}}());var almGetParameterByName=function(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var a=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},almGetAjaxParams=function(t,e,a){var n={action:e,nonce:alm_localize.alm_nonce,query_type:a,id:t.id,post_id:t.post_id,slug:t.slug,canonical_url:t.canonical_url,posts_per_page:t.posts_per_page,page:t.page,offset:t.offset,post_type:t.post_type,repeater:t.repeater,seo_start_page:t.start_page};return t.theme_repeater&&(n.theme_repeater=t.theme_repeater),t.paging&&(n.paging=t.paging),t.preloaded&&(n.preloaded=t.preloaded,n.preloaded_amount=t.preloaded_amount),"true"===t.cache&&(n.cache_id=t.cache_id,n.cache_logged_in=t.cache_logged_in),t.acf_array&&(n.acf=t.acf_array),t.cta_array&&(n.cta=t.cta_array),t.comments_array&&(n.comments=t.comments_array),t.nextpage_array&&(n.nextpage=t.nextpage_array),t.single_post_array&&(n.single_post=t.single_post_array),t.users_array&&(n.users=t.users_array),t.content.attr("data-lang")&&(n.lang=t.content.attr("data-lang")),t.content.attr("data-sticky-posts")&&(n.sticky_posts=t.content.attr("data-sticky-posts")),t.content.attr("data-post-format")&&(n.post_format=t.content.attr("data-post-format")),t.content.attr("data-category")&&(n.category=t.content.attr("data-category")),t.content.attr("data-category-and")&&(n.category__and=t.content.attr("data-category-and")),t.content.attr("data-category-not-in")&&(n.category__not_in=t.content.attr("data-category-not-in")),t.content.attr("data-tag")&&(n.tag=t.content.attr("data-tag")),t.content.attr("data-tag-and")&&(n.tag__and=t.content.attr("data-tag-and")),t.content.attr("data-tag-not-in")&&(n.tag__not_in=t.content.attr("data-tag-not-in")),t.content.attr("data-taxonomy")&&(n.taxonomy=t.content.attr("data-taxonomy")),t.content.attr("data-taxonomy-terms")&&(n.taxonomy_terms=t.content.attr("data-taxonomy-terms")),t.content.attr("data-taxonomy-operator")&&(n.taxonomy_operator=t.content.attr("data-taxonomy-operator")),t.content.attr("data-taxonomy-relation")&&(n.taxonomy_relation=t.content.attr("data-taxonomy-relation")),t.content.attr("data-meta-key")&&(n.meta_key=t.content.attr("data-meta-key")),t.content.attr("data-meta-value")&&(n.meta_value=t.content.attr("data-meta-value")),t.content.attr("data-meta-compare")&&(n.meta_compare=t.content.attr("data-meta-compare")),t.content.attr("data-meta-relation")&&(n.meta_relation=t.content.attr("data-meta-relation")),t.content.attr("data-meta-type")&&(n.meta_type=t.content.attr("data-meta-type")),t.content.attr("data-author")&&(n.author=t.content.attr("data-author")),t.content.attr("data-year")&&(n.year=t.content.attr("data-year")),t.content.attr("data-month")&&(n.month=t.content.attr("data-month")),t.content.attr("data-day")&&(n.day=t.content.attr("data-day")),t.content.attr("data-order")&&(n.order=t.content.attr("data-order")),t.content.attr("data-orderby")&&(n.orderby=t.content.attr("data-orderby")),t.content.attr("data-post-status")&&(n.post_status=t.content.attr("data-post-status")),t.content.attr("data-post-in")&&(n.post__in=t.content.attr("data-post-in")),t.content.attr("data-post-not-in")&&(n.post__not_in=t.content.attr("data-post-not-in")),t.content.attr("data-exclude")&&(n.exclude=t.content.attr("data-exclude")),t.content.attr("data-search")&&(n.search=t.content.attr("data-search")),t.content.attr("data-s")&&(n.search=t.content.attr("data-s")),t.content.attr("data-custom-args")&&(n.custom_args=t.content.attr("data-custom-args")),n},almGetRestParams=function(t){return{id:t.id,post_id:t.post_id,posts_per_page:t.posts_per_page,page:t.page,offset:t.offset,slug:t.slug,canonical_url:t.canonical_url,post_type:t.post_type,post_format:t.content.attr("data-post-format"),category:t.content.attr("data-category"),category__not_in:t.content.attr("data-category-not-in"),tag:t.content.attr("data-tag"),tag__not_in:t.content.attr("data-tag-not-in"),taxonomy:t.content.attr("data-taxonomy"),taxonomy_terms:t.content.attr("data-taxonomy-terms"),taxonomy_operator:t.content.attr("data-taxonomy-operator"),taxonomy_relation:t.content.attr("data-taxonomy-relation"),meta_key:t.content.attr("data-meta-key"),meta_value:t.content.attr("data-meta-value"),meta_compare:t.content.attr("data-meta-compare"),meta_relation:t.content.attr("data-meta-relation"),meta_type:t.content.attr("data-meta-type"),author:t.content.attr("data-author"),year:t.content.attr("data-year"),month:t.content.attr("data-month"),day:t.content.attr("data-day"),post_status:t.content.attr("data-post-status"),order:t.content.attr("data-order"),orderby:t.content.attr("data-orderby"),post__in:t.content.attr("data-post-in"),post__not_in:t.content.attr("data-post-not-in"),search:t.content.attr("data-search"),custom_args:t.content.attr("data-custom-args"),lang:t.lang,preloaded:t.preloaded,preloaded_amount:t.preloaded_amount,seo_start_page:t.start_page}};function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}var alm_is_filtering=!1;!function(o){o.fn.almFilter=function(a,n,s){s.target?o(".ajax-load-more-wrap[data-id='"+s.target+"']").each(function(t){var e=o(this);o.fn.almFilterTransition(a,n,s,e)}):o(".ajax-load-more-wrap").each(function(t){var e=o(this);o.fn.almFilterTransition(a,n,s,e)})},o.fn.almFilterTransition=function(t,e,a,n){"slide"===t?n.slideUp(e,function(){s(e,a,n)}):"fade"===t||"masonry"===t?n.fadeOut(e,function(){s(e,a,n)}):s(e,a,n)};var s=function(t,e,a){var n=a.get(0),s=n.querySelectorAll(".alm-listing");[].concat(_toConsumableArray(s)).forEach(function(t){t.innerHTML=""});var o=n.querySelector(".alm-load-more-btn");o&&o.classList.remove("done"),r(t,e,a)},r=function(t,e,a){o.each(e,function(t,e){t=t.replace(/\W+/g,"-").replace(/([a-z\d])([A-Z])/g,"$1-$2"),o(".alm-listing",a).attr("data-"+t,e)}),a.fadeIn(t),alm_is_filtering=!0,e.target?o(".ajax-load-more-wrap[data-id="+e.target+"]").ajaxloadmore():o(".ajax-load-more-wrap").ajaxloadmore()}}(jQuery);var almMasonry=function t(n,e,s,o,a,r,i,l,d,p){var c=(i+100)/1e3+"s",g="scale(0.5)",_="scale(1)";"zoom-out"===a&&(g="translateY(-20px) scale(1.25)",_="translateY(0) scale(1)"),"slide-up"===a&&(g="translateY(50px)",_="translateY(0)"),"slide-down"===a&&(g="translateY(-50px)",_="translateY(0)"),"none"===a&&(_=g="translateY(0)"),o?isNaN(o)||(o=parseInt(o)):o=s,r="true"===r,p?(n.masonry("destroy"),n[0].parentNode.style.opacity=0,n.append(e),t(n,e,s,o,a,r,i,!0,!0,!1)):l&&d?n.imagesLoaded(function(){var e={itemSelector:s,transitionDuration:c,columnWidth:o,horizontalOrder:r,hiddenStyle:{transform:g,opacity:0},visibleStyle:{transform:_,opacity:1}},a=window.alm_masonry_vars;a&&Object.keys(a).forEach(function(t){e[t]=a[t]}),n.masonry(e),almMasonryFadeIn(n[0].parentNode,i)}):e.imagesLoaded(function(){n.append(e).masonry("appended",e)})},almMasonryFadeIn=function(t,e){e/=10;var a=parseInt(t.style.opacity),n=setInterval(function(){.9<a&&(t.style.opacity=1,clearInterval(n)),t.style.opacity=a,a+=.1},e)},almResultsText=function(t){if(!t.resultsText)return!1;var e="standard";e=t.nextpage&&t.resultsText?"nextpage":t.paging?"paging":"true"===t.preloaded?"preloaded":"standard",almGetResultsText(t,e)},almRenderResultsText=function(t,e,a){var n=alm_localize.display_results;n=(n=n.replace("{num}",e)).replace("{total}",a),t.innerHTML=n},almGetResultsText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"standard";if(!t.resultsText)return!1;var a=0,n=0;switch(e){case"nextpage":a=t.page+1+parseInt(t.nextpage_startpage),n=parseInt(t.totalposts)+parseInt(t.nextpage_startpage),almRenderResultsText(t.resultsText,a,n);break;case"preloaded":console.log(t),a=parseInt(t.posts)+parseInt(t.preloaded_amount),n=parseInt(t.totalposts)+parseInt(t.preloaded_amount),almRenderResultsText(t.resultsText,a,n);break;case"paging":var s=parseInt(t.page)*parseInt(t.posts_per_page)+1;a=s+" - "+(parseInt(s)-1+parseInt(t.posts)),n=parseInt(t.totalposts)+parseInt(t.preloaded_amount),almRenderResultsText(t.resultsText,a,n);break;default:a=t.posts,n=parseInt(t.totalposts),almRenderResultsText(t.resultsText,a,n)}},almInitResultsText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"standard";if(!t.resultsText)return!1;var a=0,n=0,s="";switch(e){case"nextpage":a=t.page+parseInt(t.nextpage_startpage),(n=t.localize.total_posts)&&almRenderResultsText(t.resultsText,a,n);break;case"preloaded":a=parseInt(t.posts)+parseInt(t.preloaded_amount),(n=t.localize.total_posts)&&almRenderResultsText(t.resultsText,a,n);break;case"paging":var o=parseInt(t.page)*parseInt(t.posts_per_page)+1;a=o+" - "+(parseInt(o)-1+parseInt(t.posts_per_page)),(s=t.container.get(0).querySelector(".alm-preloaded"))&&almRenderResultsText(t.resultsText,a,s.dataset.totalPosts);break;default:console.log("nothing")}};function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}!function(b){var a=function(h,t){"true"===alm_localize.scrolltop&&window.scrollTo(0,0);var v=this;v.AjaxLoadMore={},v.window=window,v.timer="",v.page=0,v.posts=0,v.totalposts=0,v.proceed=!1,v.disable_ajax=!1,v.init=!0,v.loading=!0,v.finished=!1,v.el=b(h),v.container=b(h),v.master_id=h.id,h.classList.add("alm-"+t),h.setAttribute("data-alm-id",t),v.master_id=v.master_id.replace(/-/g,"_"),v.localize=window[v.master_id+"_vars"];var e=h;if(v.listing=e.querySelector(".alm-listing")||e.querySelector(".alm-comments"),v.content=b(e.querySelector(".alm-ajax")),v.content_preloaded=b(e.querySelector(".alm-preloaded")),v.canonical_url=h.dataset.canonicalUrl,v.nested=h.dataset.nested,v.is_search=h.dataset.search,v.slug=h.dataset.slug,v.post_id=h.dataset.postId,v.id=h.dataset.id?h.dataset.id:"",v.repeater=v.listing.dataset.repeater,v.theme_repeater=v.listing.dataset.themeRepeater,v.post_type=v.listing.dataset.postType?v.listing.dataset.postType.split(","):"post",v.sticky_posts=v.listing.dataset.stickyPosts,v.btnWrap=b("> .alm-btn-wrap",v.container),v.btnWrap.get(0).style.visibility="visible",v.button_label=v.listing.dataset.buttonLabel,v.button_loading_label=v.listing.dataset.buttonLoadingLabel,v.scroll_distance=v.listing.dataset.scrollDistance,v.scroll_distance=v.scroll_distance?parseInt(v.scroll_distance):100,v.scroll_container=v.listing.dataset.scrollContainer,v.max_pages=v.listing.dataset.maxPages,v.max_pages=v.max_pages?parseInt(v.max_pages):0,v.pause_override=v.listing.dataset.pauseOverride,v.pause=v.listing.dataset.pause,v.transition=v.listing.dataset.transition,v.transition_container=v.listing.dataset.transitionContainer,v.tcc=v.listing.dataset.transitionContainerClasses,v.speed=250,v.images_loaded=v.listing.dataset.imagesLoaded,v.destroy_after=v.listing.dataset.destroyAfter,v.orginal_posts_per_page=v.listing.dataset.postsPerPage,v.posts_per_page=v.listing.dataset.postsPerPage,v.offset=v.listing.dataset.offset,v.cache=v.listing.dataset.cache,v.cache_id=v.listing.dataset.cacheId,v.cache_path=v.listing.dataset.cachePath,v.cache_logged_in=v.listing.dataset.cacheLoggedIn,v.cta=v.listing.dataset.cta,v.cta_position=v.listing.dataset.ctaPosition,v.cta_repeater=v.listing.dataset.ctaRepeater,v.cta_theme_repeater=v.listing.dataset.ctaThemeRepeater,v.acf=v.listing.dataset.acf,v.acf_field_type=v.listing.dataset.acfFieldType,v.acf_field_name=v.listing.dataset.acfFieldName,v.acf_post_id=v.listing.dataset.acfPostId,v.nextpage=v.listing.dataset.nextpage,v.nextpage_urls=v.listing.dataset.nextpageUrls,v.nextpage_scroll=v.listing.dataset.nextpageScroll,v.nextpage_pageviews=v.listing.dataset.nextpagePageviews,v.nextpage_post_id=v.listing.dataset.nextpagePostId,v.nextpage_startpage=v.listing.dataset.nextpageStartpage,v.single_post=v.listing.dataset.singlePost,v.single_post_id=v.listing.dataset.singlePostId,v.single_post_order=v.listing.dataset.singlePostOrder,v.single_post_init_id=v.listing.dataset.singlePostId,v.single_post_taxonomy=v.listing.dataset.singlePostTaxonomy,v.single_post_excluded_terms=v.listing.dataset.singlePostExcludedTerms,v.comments=v.listing.dataset.comments,"true"===v.comments&&(v.content=b(".alm-comments",v.container)),v.comments_post_id=v.listing.dataset.comments_post_id,v.comments_per_page=v.listing.dataset.comments_per_page,v.comments_type=v.listing.dataset.comments_type,v.comments_style=v.listing.dataset.comments_style,v.comments_template=v.listing.dataset.comments_template,v.comments_callback=v.listing.dataset.comments_callback,v.filters=v.listing.dataset.filters,v.restapi=v.listing.dataset.restapi,v.restapi_base_url=v.listing.dataset.restapiBaseUrl,v.restapi_namespace=v.listing.dataset.restapiNamespace,v.restapi_endpoint=v.listing.dataset.restapiEndpoint,v.restapi_template_id=v.listing.dataset.restapiTemplateId,v.restapi_debug=v.listing.dataset.restapiDebug,v.seo=v.listing.dataset.seo,v.preloaded=v.listing.dataset.preloaded,v.preloaded_amount=v.listing.dataset.preloadedAmount,v.is_preloaded="true"===v.listing.dataset.isPreloaded,v.paging=v.listing.dataset.paging,v.users="true"===v.listing.dataset.users,v.users&&(v.orginal_posts_per_page=v.listing.dataset.usersPerPage,v.posts_per_page=v.listing.dataset.usersPerPage),"true"===v.filters){v.filters=!0,v.filters_analtyics=v.listing.dataset.filtersAnaltyics,v.filters_debug=v.listing.dataset.filtersDebug,v.filters_startpage=0;var a=almGetParameterByName("pg");null!==a&&(v.filters_startpage=parseInt(a),v.page=v.filters_startpage),v.isPaged=!1,0<v.filters_startpage&&(v.isPaged=!0,v.page=v.filters_startpage-1)}else v.filters=!1;if("true"===v.restapi?(v.restapi=!0,void 0===v.restapi_debug&&(v.restapi_debug=!1),""===v.restapi_template_id&&(v.restapi=!1)):v.restapi=!1,"true"===v.paging?(v.paging=!0,v.paging_controls=!!v.listing.dataset.pagingControls,v.paging_show_at_most=v.listing.dataset.pagingShowAtMost,v.paging_classes=v.listing.dataset.pagingClasses,v.paging_init=!0,v.paging_show_at_most=void 0===v.paging_show_at_most?7:v.paging_show_at_most,v.pause="true"===v.preloaded||v.pause):v.paging=!1,void 0===v.cache&&(v.cache=!1),void 0===v.cache_logged_in&&(v.cache_logged_in=!1),void 0===v.comments_per_page&&(v.comments_per_page="5"),"true"===v.preloaded?(v.preloaded_amount=void 0===v.preloaded_amount?v.posts_per_page:v.preloaded_amount,v.localize&&v.localize.total_posts&&parseInt(v.localize.total_posts)<=parseInt(v.preloaded_amount)&&(v.preloaded_total_posts=v.localize.total_posts,v.disable_ajax=!0)):v.preloaded="false",void 0===v.seo&&(v.seo=!1),"true"===v.seo&&(v.seo=!0),void 0===v.is_search&&(v.is_search=!1),v.search_value="true"===v.is_search?v.slug:"",v.permalink=v.listing.dataset.seoPermalink,v.pageview=v.listing.dataset.seoPageview,v.start_page=v.listing.dataset.seoStartPage,v.seo_trailing_slash="false"===v.listing.dataset.seoTrailingSlash?"":"/",v.seo_leading_slash="true"===v.listing.dataset.seoLeadingSlash?"/":"",v.start_page?(v.seo_scroll=v.listing.dataset.seoScroll,v.seo_scroll_speed=v.listing.dataset.seoScrollSpeed,v.seo_scrolltop=v.listing.dataset.seoScrolltop,v.seo_controls=v.listing.dataset.seoControls,v.isPaged=!1,1<v.start_page&&(v.isPaged=!0,v.posts_per_page=v.start_page*v.posts_per_page),v.paging&&(v.posts_per_page=v.orginal_posts_per_page)):v.start_page=1,"true"===v.nextpage?(v.nextpage=!0,v.posts_per_page=1):v.nextpage=!1,void 0===v.nextpage_urls&&(v.nextpage_urls="true"),void 0===v.nextpage_scroll&&(v.nextpage_scroll="250:30"),void 0===v.nextpage_pageviews&&(v.nextpage_pageviews="true"),void 0===v.nextpage_post_id&&(v.nextpage=!1,v.nextpage_post_id=null),void 0===v.nextpage_startpage&&(v.nextpage_startpage=1),1<v.nextpage_startpage&&(v.isPaged=!0),v.acf="true"===v.acf,void 0!==v.acf_field_type&&void 0!==v.acf_field_name&&void 0!==v.acf_post_id||(v.acf=!1),"true"===v.single_post?(v.single_post=!0,v.single_post_permalink="",v.single_post_title="",v.single_post_slug=""):v.single_post=!1,void 0===v.single_post_id&&(v.single_post_id="",v.single_post_init_id=""),v.single_post_order=void 0===v.single_post_order?"previous":v.single_post_order,v.single_post_taxonomy=void 0===v.single_post_taxonomy?"":v.single_post_taxonomy,v.single_post_excluded_terms=void 0===v.single_post_excluded_terms?"":v.single_post_excluded_terms,v.single_post_title_template=v.listing.dataset.singlePostTitleTemplate,v.siteTitle=v.listing.dataset.singlePostSiteTitle,v.siteTagline=v.listing.dataset.singlePostSiteTagline,v.single_post_pageview=v.listing.dataset.singlePostPageview,v.single_post_scroll=v.listing.dataset.singlePostScroll,v.single_post_scroll_speed=v.listing.dataset.singlePostScrollSpeed,v.single_post_scroll_top=v.listing.dataset.singlePostScrolltop,v.single_post_controls=v.listing.dataset.singlePostControls,v.offset=void 0===v.offset?0:v.offset,(void 0===v.pause||v.seo&&1<v.start_page)&&(v.pause=!1),"true"===v.preloaded&&v.seo&&0<v.start_page&&(v.pause=!1),"true"===v.preloaded&&v.paging&&(v.pause=!0),void 0===v.repeater&&(v.repeater="default"),v.theme_repeater=void 0!==v.theme_repeater&&v.theme_repeater,v.max_pages=void 0===v.max_pages||0===v.max_pages?1e4:v.max_pages,v.scroll_distance=void 0===v.scroll_distance?150:v.scroll_distance,v.scroll_container=void 0===v.scroll_container?"":v.scroll_container,v.transition=void 0===v.transition?"fade":v.transition,v.tcc=void 0===v.tcc?"":v.tcc,v.is_masonry_preloaded=!1,"masonry"===v.transition&&(v.masonry_init=!0,v.masonry_selector=v.listing.dataset.masonrySelector,v.masonry_columnwidth=v.listing.dataset.masonryColumnwidth,v.masonry_animation=v.listing.dataset.masonryAnimation,v.masonry_animation=void 0===v.masonry_animation?"standard":v.masonry_animation,v.masonry_horizontalorder=v.listing.dataset.masonryHorizontalorder,v.masonry_horizontalorder=void 0===v.masonry_horizontalorder?"true":v.masonry_horizontalorder,v.masonry_wrap=v.content,v.transition_container=!1,v.is_masonry_preloaded="true"===v.preloaded||v.is_masonry_preloaded),void 0===v.listing.dataset.scroll?v.scroll=!0:"false"===v.listing.dataset.scroll?v.scroll=!1:v.scroll=!0,v.transition_container=void 0===v.transition_container||"true"===v.transition_container,v.images_loaded=void 0===v.images_loaded?"false":v.images_loaded,v.button_label=void 0===v.button_label?"Older Posts":v.button_label,v.button_loading_label=void 0!==v.button_loading_label&&v.button_loading_label,v.paging)v.content.parent().addClass("loading");else{var n=e.childNodes;if(n){var s=Array.prototype.slice.call(n).filter(function(t){return t.classList.contains("alm-btn-wrap")});v.button=s?s[0].querySelector(".alm-load-more-btn"):e.querySelector(".alm-btn-wrap .alm-load-more-btn")}else v.button=e.querySelector(".alm-btn-wrap .alm-load-more-btn")}if(v.resultsText=document.querySelector(".alm-results-text"),v.resultsText?v.resultsText.innerHTML=alm_localize.display_results:v.resultsText=!1,v.AjaxLoadMore.loadPosts=function(){if(!v.disable_ajax)if(v.paging||(v.button.classList.add("loading"),!1!==v.button_loading_label&&(v.button.innerHTML=v.button_loading_label)),v.container.addClass("alm-loading"),v.loading=!0,"true"!==v.cache||v.cache_logged_in)v.AjaxLoadMore.ajax("standard");else{var t;if(v.init&&v.seo&&v.isPaged){t=v.cache_path+v.cache_id+"/page-1-"+v.start_page+".html"}else if(v.nextpage){var e;v.paging?e=parseInt(v.page)+1:(e=parseInt(v.page)+2,v.isPaged&&(e=parseInt(v.page)+parseInt(v.nextpage_startpage)+1)),t=v.cache_path+v.cache_id+"/page-"+e+".html"}else t=v.single_post?v.cache_path+v.cache_id+"/"+v.single_post_id+".html":v.cache_path+v.cache_id+"/page-"+(v.page+1)+".html";b.get(t,function(t){v.AjaxLoadMore.success(t,!0)}).fail(function(){v.AjaxLoadMore.ajax("standard")})}},v.AjaxLoadMore.ajax=function(e){var t="alm_query_posts";if(v.acf_array="",v.acf&&("relationship"!==v.acf_field_type&&(t="alm_acf_query"),v.acf_array={acf:"true",post_id:v.acf_post_id,field_type:v.acf_field_type,field_name:v.acf_field_name}),v.nextpage_array="",v.nextpage&&(t="alm_nextpage_query",v.nextpage_array={nextpage:"true",urls:v.nextpage_urls,scroll:v.nextpage_scroll,pageviews:v.nextpage_pageviews,post_id:v.nextpage_post_id,startpage:v.nextpage_startpage}),v.single_post_array="",v.single_post&&(v.single_post_array={single_post:"true",id:v.single_post_id,slug:v.single_post_slug}),v.comments_array="","true"===v.comments&&(t="alm_comments_query",v.posts_per_page=v.comments_per_page,v.comments_array={comments:"true",post_id:v.comments_post_id,per_page:v.comments_per_page,type:v.comments_type,style:v.comments_style,template:v.comments_template,callback:v.comments_callback}),v.users_array="",v.users&&(t="alm_users_query",v.users_array={users:"true",role:v.listing.dataset.usersRole,include:v.listing.dataset.usersInclude,exclude:v.listing.dataset.usersExclude,per_page:v.posts_per_page,order:v.listing.dataset.usersOrder,orderby:v.listing.dataset.usersOrderby}),v.cta_array="","true"===v.cta&&(v.cta_array={cta:"true",cta_position:v.cta_position,cta_repeater:v.cta_repeater,cta_theme_repeater:v.cta_theme_repeater}),v.restapi){var i=wp.template(v.restapi_template_id),a=v.restapi_base_url+"/"+v.restapi_namespace+"/"+v.restapi_endpoint,n=almGetRestParams(v);b.ajax({type:"GET",url:a,data:n,dataType:"JSON",beforeSend:function(){1==v.page||v.paging||v.button.classList.add("loading")},success:function(t){var a="",n=t.html,e=t.meta,s=e.postcount,o=e.totalposts;b.each(n,function(t){var e=n[t];"true"===v.restapi_debug&&console.log(e),a+=i(e)});var r={html:a,meta:{postcount:s,totalposts:o}};v.AjaxLoadMore.success(r,!1)}})}else{var s=almGetAjaxParams(v,t,e);b.ajax({type:"GET",url:alm_localize.ajaxurl,dataType:"JSON",data:s,beforeSend:function(){1==v.page||v.paging||v.button.classList.add("loading")},success:function(t){"standard"===e?v.AjaxLoadMore.success(t,!1):"totalpages"===e&&v.paging&&v.nextpage?b.isFunction(b.fn.almBuildPagination)&&b.fn.almBuildPagination(t,v):"totalposts"===e&&v.paging&&b.isFunction(b.fn.almBuildPagination)&&b.fn.almBuildPagination(t,v)},error:function(t,e,a){v.AjaxLoadMore.error(t,e,a)}})}},v.paging&&(v.nextpage?v.AjaxLoadMore.ajax("totalpages"):v.AjaxLoadMore.ajax("totalposts")),v.AjaxLoadMore.success=function(t,e){v.single_post&&v.AjaxLoadMore.getPreviousPost();var a,n,s,o='style="opacity: 0; height: 0;"';if(e?a=t:(a=t.html,n=t.meta,v.posts=v.paging?n.postcount:v.posts+n.postcount,s=n.postcount,v.totalposts=n.totalposts,"true"===v.preloaded&&(v.totalposts=v.totalposts-v.preloaded_amount)),v.setlocalizedVars("viewing",v.posts),v.setlocalizedVars("total_posts",v.totalposts),almResultsText(v),v.data=b(a),s=e?v.data.length:s,v.init&&(n&&n.totalposts&&v.el.attr("data-total-posts",n.totalposts),v.paging?0<s&&(v.el=b('<div class="alm-reveal" '+o+"/>"),v.el.append('<div class="alm-paging-content'+v.tcc+'"></div><div class="alm-paging-loading"></div>'),b(".alm-paging-content",v.el).append(v.data),v.content.append(v.el),v.AjaxLoadMore.fadeIn(v.el.get(0),v.speed),v.content.parent().removeClass("loading"),v.AjaxLoadMore.resetBtnText(),setTimeout(function(){b(".alm-paging-content",v.el).fadeIn(v.speed,"alm_easeInOutQuad",function(){var t=parseInt(v.content.css("padding-top")),e=parseInt(v.content.css("padding-bottom"));v.content.css("height",v.el.height()+t+e+"px"),b.isFunction(b.fn.almFadePageControls)&&b.fn.almFadePageControls(v.btnWrap)})},v.speed)):v.button.innerHTML=v.button_label,0===s&&(v.paging&&b.isFunction(b.fn.almPagingEmpty)&&b.fn.almPagingEmpty(v),b.isFunction(b.fn.almEmpty)&&b.fn.almEmpty(v)),v.isPaged&&(v.posts_per_page=v.users?v.listing.dataset.usersPerPage:v.listing.dataset.postsPerPage,v.page=v.start_page?v.start_page-1:v.page,v.filters&&v.filters_startpage&&(v.page=v.filters_startpage-1,v.posts_per_page=v.listing.dataset.postsPerPage))),0<s){if(v.paging)v.init?(v.container.removeClass("alm-loading"),v.AjaxLoadMore.triggerAddons(v)):b(".alm-paging-content",v.el).html("").append(v.data).almWaitForImages().done(function(){b(".alm-paging-loading",v.el).fadeOut(v.speed),b.isFunction(b.fn.almOnPagingComplete)&&setTimeout(function(){b.fn.almOnPagingComplete(v)},v.speed),v.container.removeClass("alm-loading"),v.AjaxLoadMore.triggerAddons(v)});else{if(v.single_post)v.el=b('<div class="alm-reveal alm-single-post post-'+v.single_post_id+'" '+o+' data-id="'+v.single_post_id+'" data-title="'+v.single_post_title+'" data-url="'+v.single_post_permalink+'" data-page="'+v.page+'"/>'),v.el.append(v.data);else if(v.transition_container){var r=void 0,i=window.location.search;if(v.init&&1<v.start_page){var l=[],d=[],p=parseInt(v.posts_per_page);Math.ceil(s/p);v.el=v.content,"true"===v.cta&&(p+=1,s=Math.ceil(s/p)+s);for(var c=0;c<s;c+=p)l.push(v.data.slice(c,p+c));for(var g=0;g<l.length;g++){var _="true"===v.preloaded?1:0,m=void 0;if(0<g||"true"===v.preloaded)r=g+1+_,m="default"===v.permalink?b('<div class="alm-reveal alm-seo'+v.tcc+'" data-url="'+v.canonical_url+v.search_value+"&paged="+r+'" data-page="'+r+'" />'):b('<div class="alm-reveal alm-seo'+v.tcc+'" data-url="'+v.canonical_url+v.seo_leading_slash+"page/"+r+v.seo_trailing_slash+v.search_value+'" data-page="'+r+'" />');else{var u=v.is_preloaded?" alm-preloaded":"";m=b('<div class="alm-reveal alm-seo'+u+v.tcc+'" data-url="'+v.canonical_url+v.search_value+'" data-page="1" />')}d.push(m.append(l[g]))}for(var f=0;f<d.length;f++)v.el.append(d[f]);v.el.get(0).style.opacity=0,v.el.get(0).style.height=0}else{if(v.seo&&0<v.page||"true"===v.preloaded){var y="true"===v.preloaded?1:0;r=v.page+1+y,v.seo?"default"===v.permalink?v.el=b('<div class="alm-reveal alm-seo'+v.tcc+'" '+o+' data-url="'+v.canonical_url+v.search_value+"&paged="+r+'" data-page="'+r+'" />'):v.el=b('<div class="alm-reveal alm-seo'+v.tcc+'" '+o+' data-url="'+v.canonical_url+v.seo_leading_slash+"page/"+r+v.seo_trailing_slash+v.search_value+'" data-page="'+r+'" />'):v.filters?v.el=b('<div class="alm-reveal alm-filters'+v.tcc+'" '+o+' data-url="'+v.canonical_url+i+'" data-page="'+r+'" />'):v.el=b('<div class="alm-reveal'+v.tcc+'" '+o+" />")}else v.filters?v.el=b('<div class="alm-reveal alm-filters'+v.tcc+'" '+o+' data-url="'+v.canonical_url+i+'" data-page="'+(v.page+1)+'" />'):v.seo?v.el=b('<div class="alm-reveal alm-seo'+v.tcc+'" '+o+' data-url="'+v.canonical_url+v.search_value+'" data-page="1" />'):v.el=b('<div class="alm-reveal'+v.tcc+'" '+o+" />");v.el.append(v.data)}}else v.el=v.data;("masonry"!==v.transition||v.init&&!v.is_masonry_preloaded)&&v.content.append(v.el),"masonry"===v.transition?(almMasonry(v.masonry_wrap,v.el,v.masonry_selector,v.masonry_columnwidth,v.masonry_animation,v.masonry_horizontalorder,v.speed,v.masonry_init,v.init,alm_is_filtering),v.masonry_init=!1,v.AjaxLoadMore.transitionEnd()):"none"===v.transition?(v.AjaxLoadMore.fadeIn(v.el.get(0),0),v.AjaxLoadMore.transitionEnd()):"true"===v.images_loaded?v.el.almWaitForImages().done(function(){v.transition_container&&v.AjaxLoadMore.fadeIn(v.el.get(0),v.speed),v.AjaxLoadMore.transitionEnd()}):(v.transition_container&&v.AjaxLoadMore.fadeIn(v.el.get(0),v.speed),v.AjaxLoadMore.transitionEnd())}b.isFunction(b.fn.almComplete)&&("true"===v.images_loaded?v.el.almWaitForImages().done(function(){b.fn.almComplete(v)}):b.fn.almComplete(v)),v.cache?s<v.posts_per_page&&v.AjaxLoadMore.triggerDone():v.posts>=v.totalposts&&!v.single_post&&v.AjaxLoadMore.triggerDone()}else v.paging||(setTimeout(function(){v.button.classList.remove("loading"),v.button.classList.add("done")},v.speed),v.AjaxLoadMore.resetBtnText()),v.AjaxLoadMore.triggerDone();if(b.isFunction(b.fn.almFilterComplete)&&b.fn.almFilterComplete(),"function"==typeof almFiltersAddonComplete&&almFiltersAddonComplete(h),void 0!==v.destroy_after&&""!==v.destroy_after){var x=v.page+1;"true"===v.preloaded&&x++,x==v.destroy_after&&v.AjaxLoadMore.destroyed()}alm_is_filtering=v.init=!1},v.AjaxLoadMore.pagingPreloadedInit=function(t){t=null==t?"":t,v.el=b('<div class="alm-reveal'+v.tcc+'"/>'),v.el.append('<div class="alm-paging-content">'+t+'</div><div class="alm-paging-loading"></div>'),v.content.append(v.el),v.content.parent().removeClass("loading"),v.AjaxLoadMore.resetBtnText();var e=parseInt(v.content.css("padding-top")),a=parseInt(v.content.css("padding-bottom"));v.content.css("height",v.el.height()+e+a+"px"),""===t&&(b.isFunction(b.fn.almPagingEmpty)&&b.fn.almPagingEmpty(v),b.isFunction(b.fn.almEmpty)&&b.fn.almEmpty(v)),setTimeout(function(){b.isFunction(b.fn.almFadePageControls)&&b.fn.almFadePageControls(v.btnWrap)},v.speed)},v.AjaxLoadMore.pagingNextpageInit=function(t){v.el=b('<div class="alm-reveal alm-nextpage"/>'),v.el.append('<div class="alm-paging-content">'+t+'</div><div class="alm-paging-loading"></div>'),v.el.appendTo(v.content),v.content.parent().removeClass("loading"),v.AjaxLoadMore.resetBtnText();var e=parseInt(v.content.css("padding-top")),a=parseInt(v.content.css("padding-bottom"));v.content.css("height",v.el.height()+e+a+"px"),b.isFunction(b.fn.almSetNextPageVars)&&b.fn.almSetNextPageVars(v),setTimeout(function(){b.isFunction(b.fn.almFadePageControls)&&b.fn.almFadePageControls(v.btnWrap),b.isFunction(b.fn.almOnWindowResize)&&b.fn.almOnWindowResize(v)},v.speed)},v.single_post_id&&(v.fetchingPreviousPost=!1,v.single_post_init=!0),v.AjaxLoadMore.getPreviousPost=function(){v.fetchingPreviousPost=!0;var t={action:"alm_query_single_post",init:v.single_post_init,id:v.single_post_id,initial_id:v.single_post_init_id,order:v.single_post_order,taxonomy:v.single_post_taxonomy,excluded_terms:v.single_post_excluded_terms,post_type:v.post_type};b.ajax({type:"GET",dataType:"JSON",url:alm_localize.ajaxurl,data:t,success:function(t){t.has_previous_post?(v.listing.setAttribute("data-single-post-id",t.prev_id),v.single_post_id=t.prev_id,v.single_post_permalink=t.prev_permalink,v.single_post_title=t.prev_title,v.single_post_slug=t.prev_slug):t.has_previous_post||v.AjaxLoadMore.triggerDone(),"function"==typeof window.almSetSinglePost&&window.almSetSinglePost(v,t.current_id,t.permalink,t.title),v.fetchingPreviousPost=!1,v.single_post_init=!1},error:function(t,e,a){v.AjaxLoadMore.error(t,e,a),v.fetchingPreviousPost=!1}})},v.AjaxLoadMore.triggerAddons=function(t){b.isFunction(b.fn.almSEO)&&t.seo&&b.fn.almSEO(t,!1),b.isFunction(b.fn.almSetNextPage)&&b.fn.almSetNextPage(t)},v.AjaxLoadMore.triggerDone=function(){v.loading=!1,v.finished=!0,v.paging||v.button.classList.add("done"),b.isFunction(b.fn.almDone)&&setTimeout(function(){b.fn.almDone(v)},v.speed+10)},v.AjaxLoadMore.resetBtnText=function(){!1===v.button_loading_label||v.paging||(v.button.innerHTML=v.button_label)},v.AjaxLoadMore.error=function(t,e,a){v.loading=!1,v.paging||(v.button.classList.remove("loading"),v.AjaxLoadMore.resetBtnText()),console.log(a)},v.AjaxLoadMore.click=function(t){var e=t.target||t.currentTarget;"true"===v.pause&&(v.pause=!1,v.pause_override=!1,v.AjaxLoadMore.loadPosts()),v.loading||v.finished||e.classList.contains("done")||(v.loading=!0,v.page++,v.AjaxLoadMore.loadPosts()),v.filters&&"function"==typeof almFiltersPaged&&almFiltersPaged(v)},v.paging||v.fetchingPreviousPost||(v.button.onclick=v.AjaxLoadMore.click),v.paging){var o=void 0;v.window.onresize=function(){clearTimeout(o),o=setTimeout(function(t){b.isFunction(b.fn.almOnWindowResize)&&b.fn.almOnWindowResize(v)},v.speed)}}v.AjaxLoadMore.isVisible=function(){return v.visible=!1,v.el.is(":visible")&&(v.visible=!0),v.visible},v.AjaxLoadMore.scroll=function(){v.timer&&clearTimeout(v.timer),v.timer=setTimeout(function(){if(v.AjaxLoadMore.isVisible()&&!v.fetchingPreviousPost){var t=v.button.getBoundingClientRect(),e=Math.round(t.top-v.window.innerHeight)+v.scroll_distance<=0;if(v.window!==window)e=v.window.querySelector(".ajax-load-more-wrap").offsetHeight<=Math.round(v.window.scrollTop+v.window.offsetHeight-v.scroll_distance);!v.loading&&!v.finished&&e&&v.page<v.max_pages-1&&v.proceed&&"true"===v.pause&&"true"===v.pause_override?v.button.click():!v.loading&&!v.finished&&e&&v.page<v.max_pages-1&&v.proceed&&"true"!==v.pause&&v.button.click()}},25)},v.scroll&&!v.paging&&(""!==v.scroll_container&&(v.window=document.querySelector(v.scroll_container)?document.querySelector(v.scroll_container):v.window),v.window.addEventListener("scroll",v.AjaxLoadMore.scroll),v.window.addEventListener("touchstart",v.AjaxLoadMore.scroll)),v.AjaxLoadMore.destroyed=function(){v.disable_ajax=!0,v.paging||(setTimeout(function(){v.button.fadeOut(v.speed)},v.speed),b.isFunction(b.fn.almDestroyed)&&b.fn.almDestroyed(v))},v.AjaxLoadMore.fadeIn=function(t,e){if(0==e)t.style.opacity=1,t.style.height="auto";else{e/=10;var a=0,n=setInterval(function(){.9<a&&(t.style.opacity=1,clearInterval(n)),t.style.opacity=a,a+=.1},e);t.style.height="auto"}},v.AjaxLoadMore.transitionEnd=function(){setTimeout(function(){v.loading=!1,v.container.removeClass("alm-loading"),v.AjaxLoadMore.triggerAddons(v),v.paging||(setTimeout(function(){v.button.classList.remove("loading")},v.speed),v.AjaxLoadMore.resetBtnText())},v.speed)},v.setlocalizedVars=function(t,e){v.localize&&t&&e&&(v.localize[t]=e,window[v.master_id+"_vars"][t]=e)},v.AjaxLoadMore.init=function(){if("true"===v.preloaded&&1==v.destroy_after&&v.AjaxLoadMore.destroyed(),v.paging||v.single_post||(v.disable_ajax?(v.finished=!0,v.button.classList.add("done")):"true"===v.pause?(v.button.innerHTML=v.button_label,v.loading=!1):v.AjaxLoadMore.loadPosts()),v.single_post&&(v.AjaxLoadMore.getPreviousPost(),v.loading=!1),"true"===v.preloaded&&v.seo&&!v.paging&&(setTimeout(function(){b.isFunction(b.fn.almSEO)&&v.start_page<1&&b.fn.almSEO(v,!0)},v.speed),v.resultsText&&almInitResultsText(v,"preloaded")),"true"!==v.preloaded||v.paging||(setTimeout(function(){v.preloaded_total_posts<=parseInt(v.preloaded_amount)&&v.AjaxLoadMore.triggerDone(),0==v.preloaded_total_posts&&b.isFunction(b.fn.almEmpty)&&b.fn.almEmpty(v)},v.speed),v.resultsText&&almInitResultsText(v,"preloaded")),v.paging&&v.resultsText&&almInitResultsText(v,"paging"),v.nextpage){if(b(".alm-nextpage",v.container).length)b(".alm-nextpage",v.container).length==b(".alm-nextpage",v.container).eq(0).data("total-posts")&&v.AjaxLoadMore.triggerDone();v.resultsText&&almInitResultsText(v,"nextpage")}v.window.addEventListener("load",function(){v.is_masonry_preloaded&&(almMasonry(v.masonry_wrap,v.el,v.masonry_selector,v.masonry_columnwidth,v.masonry_animation,v.masonry_horizontalorder,v.speed,v.masonry_init,!0,!1),v.masonry_init=!1)})},v.AjaxLoadMore.init(),setTimeout(function(){v.proceed=!0},150),b.fn.almUpdateCurrentPage=function(t,e,a){a.page=t,a.page=a.nextpage&&!a.paging?a.page-1:a.page;var n="";a.paging_init&&"true"===a.preloaded?(n=b(".alm-reveal",a.el).html(),b(".alm-reveal",a.el).remove(),a.preloaded_amount=0,a.AjaxLoadMore.pagingPreloadedInit(n),a.paging_init=!1,a.init=!1):a.paging_init&&a.nextpage?(n=b(".alm-nextpage",a.el).html(),b(".alm-nextpage",a.el).remove(),a.AjaxLoadMore.pagingNextpageInit(n),a.paging_init=!1,a.init=!1):a.AjaxLoadMore.loadPosts()},b.fn.almGetParentContainer=function(){return v.el.closest("#ajax-load-more")},b.fn.almGetObj=function(){return v},b.fn.almTriggerClick=function(){v.button.click()},b.easing.alm_easeInOutQuad=function(t,e,a,n,s){return(e/=s/2)<1?n/2*e*e+a:-n/2*(--e*(e-2)-1)+a}};b.fn.ajaxloadmore=function(){return this.each(function(t){new a(this,t)})};var t=document.querySelectorAll(".ajax-load-more-wrap");t.length&&[].concat(_toConsumableArray(t)).forEach(function(t,e){new a(t,e)})}(jQuery);var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t(require("jquery")):t(jQuery)}(function(_){var m="almWaitForImages";_.almWaitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},_.expr[":"]["has-src"]=function(t){return _(t).is('img[src][src!=""]')},_.expr[":"].uncached=function(t){return!!_(t).is(":has-src")&&!t.complete},_.fn.almWaitForImages=function(){var l,d,a,p=0,c=0,g=_.Deferred();if(_.isPlainObject(arguments[0])?(a=arguments[0].waitForAll,d=arguments[0].each,l=arguments[0].finished):a=1===arguments.length&&"boolean"===_.type(arguments[0])?arguments[0]:(l=arguments[0],d=arguments[1],arguments[2]),l=l||_.noop,d=d||_.noop,a=!!a,!_.isFunction(l)||!_.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var o=_(this),r=[],t=_.almWaitForImages.hasImageProperties||[],e=_.almWaitForImages.hasImageAttributes||[],i=/url\(\s*(['"]?)(.*?)\1\s*\)/g;a?o.find("*").addBack().each(function(){var s=_(this);s.is("img:has-src")&&r.push({src:s.attr("src"),element:s[0]}),_.each(t,function(t,e){var a,n=s.css(e);if(!n)return!0;for(;a=i.exec(n);)r.push({src:a[2],element:s[0]})}),_.each(e,function(t,e){var a,n=s.attr(e);if(!n)return!0;a=n.split(","),_.each(a,function(t,e){e=_.trim(e).split(" ")[0],r.push({src:e,element:s[0]})})})}):o.find("img:has-src").each(function(){r.push({src:this.src,element:this})}),p=r.length,(c=0)===p&&(l.call(o[0]),g.resolveWith(o[0])),_.each(r,function(t,n){var e=new Image,s="load."+m+" error."+m;_(e).one(s,function t(e){var a=[c,p,"load"==e.type];if(c++,d.apply(n.element,a),g.notifyWith(n.element,a),_(this).off(s,t),c==p)return l.call(o[0]),g.resolveWith(o[0]),!1}),e.src=n.src})}),g.promise()}});
;!function($){"use strict";var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},hasOwn=Object.prototype.hasOwnProperty;$.toJSON="object"==typeof JSON&&JSON.stringify?JSON.stringify:function(t){if(null===t)return"null";var e,r,n,o,i=$.type(t);if("undefined"!==i){if("number"===i||"boolean"===i)return String(t);if("string"===i)return $.quoteString(t);if("function"==typeof t.toJSON)return $.toJSON(t.toJSON());if("date"===i){var f=t.getUTCMonth()+1,u=t.getUTCDate(),s=t.getUTCFullYear(),a=t.getUTCHours(),l=t.getUTCMinutes(),c=t.getUTCSeconds(),p=t.getUTCMilliseconds();return f<10&&(f="0"+f),u<10&&(u="0"+u),a<10&&(a="0"+a),l<10&&(l="0"+l),c<10&&(c="0"+c),p<100&&(p="0"+p),p<10&&(p="0"+p),'"'+s+"-"+f+"-"+u+"T"+a+":"+l+":"+c+"."+p+'Z"'}if(e=[],$.isArray(t)){for(r=0;r<t.length;r++)e.push($.toJSON(t[r])||"null");return"["+e.join(",")+"]"}if("object"==typeof t){for(r in t)if(hasOwn.call(t,r)){if("number"===(i=typeof r))n='"'+r+'"';else{if("string"!==i)continue;n=$.quoteString(r)}"function"!==(i=typeof t[r])&&"undefined"!==i&&(o=$.toJSON(t[r]),e.push(n+":"+o))}return"{"+e.join(",")+"}"}}},$.evalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){return eval("("+str+")")},$.secureEvalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered))return eval("("+str+")");throw new SyntaxError("Error parsing JSON, source is not valid.")},$.quoteString=function(t){return t.match(escape)?'"'+t.replace(escape,function(t){var e=meta[t];return"string"==typeof e?e:(e=t.charCodeAt(),"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16))})+'"':'"'+t+'"'}}(jQuery);