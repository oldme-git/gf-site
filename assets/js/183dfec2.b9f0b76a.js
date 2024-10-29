"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[19189],{84936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(74848),r=n(28453);const s={title:"ORM\u67e5\u8be2-AllAndCount",sidebar_position:2},l=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount",title:"ORM\u67e5\u8be2-AllAndCount",description:"\u8be5\u65b9\u6cd5\u4ece v2.5.0 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\uff0c\u7528\u4e8e\u540c\u65f6\u67e5\u8be2\u6570\u636e\u8bb0\u5f55\u5217\u8868\u53ca\u603b\u6570\u91cf\uff0c\u4e00\u822c\u7528\u4e8e\u5206\u9875\u67e5\u8be2\u573a\u666f\u4e2d\uff0c\u7b80\u5316\u5206\u9875\u67e5\u8be2\u903b\u8f91\u3002",source:"@site/versioned_docs/version-2.7.x/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/2-ORM\u67e5\u8be2-AllAndCount.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount",permalink:"/gf-site/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/2-ORM\u67e5\u8be2-AllAndCount.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:172999724e4,sidebarPosition:2,frontMatter:{title:"ORM\u67e5\u8be2-AllAndCount",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ORM\u67e5\u8be2-All/One/Array/Value/Count",permalink:"/gf-site/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllOneArrayValueCount"},next:{title:"ORM\u67e5\u8be2-Scan",permalink:"/gf-site/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Scan"}},d={},u=[];function a(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u8be5\u65b9\u6cd5\u4ece ",(0,o.jsx)(t.code,{children:"v2.5.0"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\uff0c\u7528\u4e8e\u540c\u65f6\u67e5\u8be2\u6570\u636e\u8bb0\u5f55\u5217\u8868\u53ca\u603b\u6570\u91cf\uff0c\u4e00\u822c\u7528\u4e8e\u5206\u9875\u67e5\u8be2\u573a\u666f\u4e2d\uff0c\u7b80\u5316\u5206\u9875\u67e5\u8be2\u903b\u8f91\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u65b9\u6cd5\u5b9a\u4e49\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'// AllAndCount retrieves all records and the total count of records from the model.\n// If useFieldForCount is true, it will use the fields specified in the model for counting;\n// otherwise, it will use a constant value of 1 for counting.\n// It returns the result as a slice of records, the total count of records, and an error if any.\n// The where parameter is an optional list of conditions to use when retrieving records.\n//\n// Example:\n//\n//\tvar model Model\n//\tvar result Result\n//\tvar count int\n//\twhere := []interface{}{"name = ?", "John"}\n//\tresult, count, err := model.AllAndCount(true)\n//\tif err != nil {\n//\t    // Handle error.\n//\t}\n//\tfmt.Println(result, count)\nfunc (m *Model) AllAndCount(useFieldForCount bool) (result Result, totalCount int, err error)\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u5728\u65b9\u6cd5\u5185\u90e8\u67e5\u8be2\u603b\u6570\u91cf\u65f6\uff0c\u5c06\u4f1a\u5ffd\u7565\u67e5\u8be2\u4e2d\u7684 ",(0,o.jsx)(t.code,{children:"Limit/Page"})," \u64cd\u4f5c\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(`uid`,`name`) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(true)\n\n// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(1) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(false)\n'})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);