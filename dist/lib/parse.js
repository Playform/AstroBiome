import m from"fast-glob";import*as r from"fs";var d=async(a,n=2,t,l=async i=>i,c=async i=>await r.promises.readFile(i,"utf-8"))=>{const i=await m(a),e={files:0,total:0};let s=new Set;if(typeof t<"u")if(t instanceof Array)for(const f of t)s.add(f);else s.add(t);for(const f of s){if(typeof f=="string")for(const o of i)o.match(f)&&i.splice(i.indexOf(o),1);if(typeof f=="function")for(const o of i)f(o)&&i.splice(i.indexOf(o),1)}for(const f of i)try{const o=await l(await c(f),f);if(!o)continue;await r.promises.writeFile(f,o,"utf-8"),e.files++,n>1&&console.info(`\x1B[32mFormatted ${f.replace(/^.*[\\\/]/,"")}.\x1B[39m`)}catch{console.log(`Error: Cannot format file ${f}!`)}n>0&&e.files>0&&console.info(`\x1B[32mSuccessfully formatted a total of ${e.files} ${e.files===1?"file":"files"}.\x1B[39m`)};export{d as default};
