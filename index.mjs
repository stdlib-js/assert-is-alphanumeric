// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";var t=r.isPrimitive;var e=function(r){var e,i,s;if(!t(r))return!1;if(0===(e=r.length))return!1;for(s=0;s<e;s++)if(((i=r.charCodeAt(s))<48||i>57)&&(i<97||i>122)&&(i<65||i>90))return!1;return!0};export{e as default};
//# sourceMappingURL=index.mjs.map
