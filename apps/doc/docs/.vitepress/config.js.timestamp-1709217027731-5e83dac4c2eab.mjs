// docs/.vitepress/config.js
import VueJsx from "file:///D:/frontEnd/project/custom-component/app/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue-jsx@3.0.2_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { defineConfig } from "file:///D:/frontEnd/project/custom-component/app/node_modules/.pnpm/vitepress@1.0.0-rc.4_@algolia+client-search@4.19.1_axios@1.5.0_change-case@4.1.2_sass@1.66.1_search-insights@2.13.0/node_modules/vitepress/dist/node/index.js";
import { demoblockPlugin, demoblockVitePlugin } from "file:///D:/frontEnd/project/custom-component/app/node_modules/.pnpm/vitepress-theme-demoblock@3.0.3_@algolia+client-search@4.19.1_axios@1.5.0_change-case@4.1.2_s_r7n5372dggfqn5h7tfo34c7sia/node_modules/vitepress-theme-demoblock/dist/node/index.mjs";

// docs/.vitepress/config/nav.js
var nav = [
  { text: "\u9996\u9875", link: "/" },
  { text: "\u6587\u6863", link: "/doc/" },
  { text: "\u7EC4\u4EF6", link: "/components/" }
];

// docs/.vitepress/config/sidebar.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///D:/frontEnd/project/custom-component/app/apps/doc/docs/.vitepress/config/sidebar.js";
var __dirname = path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
console.log("__dirname", __dirname);
var rootDirectory = path.resolve(__dirname, "../../");
var docsPath = path.dirname(rootDirectory);
function generateSidebarConfig(docsPath2, link = "", depth = 0) {
  const sidebarConfig = depth === 0 ? {} : { items: [] };
  const files = fs.readdirSync(docsPath2).filter((file) => !file.startsWith("."));
  files.forEach((filename) => {
    const filepath = path.join(docsPath2, filename);
    if (isDirectory(filepath)) {
      handleDirectory(filepath, filename, depth, sidebarConfig, link);
    } else {
      handleFile(filepath, filename, depth, sidebarConfig, link);
    }
  });
  return sidebarConfig;
}
function isDirectory(filepath) {
  return fs.statSync(filepath).isDirectory();
}
function handleDirectory(filepath, filename, depth, sidebarConfig, link) {
  const newLink = depth === 0 ? `/${filename}/` : `${link}${filename}/`;
  const config = generateSidebarConfig(filepath, newLink, depth + 1);
  if (depth === 0) {
    sidebarConfig[newLink] = [config];
  } else {
    sidebarConfig.items.push(config);
  }
}
function handleFile(filepath, filename, depth, sidebarConfig, link) {
  if (filename === "index.md" && depth > 0) {
    sidebarConfig.text = path.basename(path.dirname(filepath));
    sidebarConfig.link = link;
  } else if (path.extname(filename) === ".md" && filename !== "index.md") {
    const basename = path.basename(filename, ".md");
    sidebarConfig.items.push({
      text: basename,
      link: `${link}${basename}`
    });
  }
}
console.log(generateSidebarConfig(docsPath));
var sidebar = generateSidebarConfig(docsPath);

// docs/.vitepress/config.js
var config_default = defineConfig({
  title: "zjwmmx\u4E2A\u4EBA\u535A\u5BA2",
  titleTemplate: ":title - \u6587\u6863\u5E93",
  description: "\u57FA\u4E8Evitepress\u5F00\u53D1\u7684\u6587\u6863\u5E93",
  cleanUrls: true,
  // 访问路径,去掉.html扩展名
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/zjwmmx/mmx-ui" }]
  },
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin);
    }
  },
  vite: {
    plugins: [VueJsx(), demoblockVitePlugin()]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5qcyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL25hdi5qcyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3NpZGViYXIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxmcm9udEVuZFxcXFxwcm9qZWN0XFxcXGN1c3RvbS1jb21wb25lbnRcXFxcYXBwXFxcXGFwcHNcXFxcZG9jXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZnJvbnRFbmRcXFxccHJvamVjdFxcXFxjdXN0b20tY29tcG9uZW50XFxcXGFwcFxcXFxhcHBzXFxcXGRvY1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9mcm9udEVuZC9wcm9qZWN0L2N1c3RvbS1jb21wb25lbnQvYXBwL2FwcHMvZG9jL2RvY3MvLnZpdGVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgVnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXG5pbXBvcnQgeyBkZW1vYmxvY2tQbHVnaW4sIGRlbW9ibG9ja1ZpdGVQbHVnaW4gfSBmcm9tICd2aXRlcHJlc3MtdGhlbWUtZGVtb2Jsb2NrJ1xuaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi9jb25maWcvbmF2J1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJy4vY29uZmlnL3NpZGViYXInXG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRpdGxlOiAnemp3bW14XHU0RTJBXHU0RUJBXHU1MzVBXHU1QkEyJyxcbiAgdGl0bGVUZW1wbGF0ZTogJzp0aXRsZSAtIFx1NjU4N1x1Njg2M1x1NUU5MycsXG4gIGRlc2NyaXB0aW9uOiAnXHU1N0ZBXHU0RThFdml0ZXByZXNzXHU1RjAwXHU1M0QxXHU3Njg0XHU2NTg3XHU2ODYzXHU1RTkzJyxcbiAgY2xlYW5VcmxzOiB0cnVlLCAvLyBcdThCQkZcdTk1RUVcdThERUZcdTVGODQsXHU1M0JCXHU2Mzg5Lmh0bWxcdTYyNjlcdTVDNTVcdTU0MERcbiAgaGVhZDogW1snbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvZmF2aWNvbi5wbmcnIH1dXSxcblxuICB0aGVtZUNvbmZpZzoge1xuICAgIG5hdixcbiAgICBzaWRlYmFyLFxuICAgIHNvY2lhbExpbmtzOiBbeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS96andtbXgvbW14LXVpJyB9XVxuICB9LFxuICBtYXJrZG93bjoge1xuICAgIGNvbmZpZzogKG1kKSA9PiB7XG4gICAgICBtZC51c2UoZGVtb2Jsb2NrUGx1Z2luKVxuICAgIH1cbiAgfSxcbiAgdml0ZToge1xuICAgIHBsdWdpbnM6IFtWdWVKc3goKSwgZGVtb2Jsb2NrVml0ZVBsdWdpbigpXVxuICB9XG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxmcm9udEVuZFxcXFxwcm9qZWN0XFxcXGN1c3RvbS1jb21wb25lbnRcXFxcYXBwXFxcXGFwcHNcXFxcZG9jXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGZyb250RW5kXFxcXHByb2plY3RcXFxcY3VzdG9tLWNvbXBvbmVudFxcXFxhcHBcXFxcYXBwc1xcXFxkb2NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxuYXYuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Zyb250RW5kL3Byb2plY3QvY3VzdG9tLWNvbXBvbmVudC9hcHAvYXBwcy9kb2MvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9uYXYuanNcIjtleHBvcnQgY29uc3QgbmF2ID0gW1xyXG4gIHsgdGV4dDogJ1x1OTk5Nlx1OTg3NScsIGxpbms6ICcvJyB9LFxyXG4gIHsgdGV4dDogJ1x1NjU4N1x1Njg2MycsIGxpbms6ICcvZG9jLycgfSxcclxuICB7IHRleHQ6ICdcdTdFQzRcdTRFRjYnLCBsaW5rOiAnL2NvbXBvbmVudHMvJyB9XHJcbl1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxmcm9udEVuZFxcXFxwcm9qZWN0XFxcXGN1c3RvbS1jb21wb25lbnRcXFxcYXBwXFxcXGFwcHNcXFxcZG9jXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGZyb250RW5kXFxcXHByb2plY3RcXFxcY3VzdG9tLWNvbXBvbmVudFxcXFxhcHBcXFxcYXBwc1xcXFxkb2NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxzaWRlYmFyLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9mcm9udEVuZC9wcm9qZWN0L2N1c3RvbS1jb21wb25lbnQvYXBwL2FwcHMvZG9jL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvc2lkZWJhci5qc1wiO2ltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCdcclxuXHJcbmNvbnN0IF9fZGlybmFtZSA9IHBhdGguZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpXHJcbmNvbnNvbGUubG9nKCdfX2Rpcm5hbWUnLCBfX2Rpcm5hbWUpXHJcblxyXG4vLyBcdTgzQjdcdTUzRDZcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdThERUZcdTVGODRcclxuY29uc3Qgcm9vdERpcmVjdG9yeSA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8nKVxyXG5jb25zdCBkb2NzUGF0aCA9IHBhdGguZGlybmFtZShyb290RGlyZWN0b3J5KSAvLyBkb2NzIFx1NzZFRVx1NUY1NVx1OERFRlx1NUY4NFxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTaWRlYmFyQ29uZmlnKGRvY3NQYXRoLCBsaW5rID0gJycsIGRlcHRoID0gMCkge1xyXG4gIGNvbnN0IHNpZGViYXJDb25maWcgPSBkZXB0aCA9PT0gMCA/IHt9IDogeyBpdGVtczogW10gfVxyXG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoZG9jc1BhdGgpLmZpbHRlcigoZmlsZSkgPT4gIWZpbGUuc3RhcnRzV2l0aCgnLicpKVxyXG5cclxuICBmaWxlcy5mb3JFYWNoKChmaWxlbmFtZSkgPT4ge1xyXG4gICAgY29uc3QgZmlsZXBhdGggPSBwYXRoLmpvaW4oZG9jc1BhdGgsIGZpbGVuYW1lKVxyXG4gICAgaWYgKGlzRGlyZWN0b3J5KGZpbGVwYXRoKSkge1xyXG4gICAgICBoYW5kbGVEaXJlY3RvcnkoZmlsZXBhdGgsIGZpbGVuYW1lLCBkZXB0aCwgc2lkZWJhckNvbmZpZywgbGluaylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhhbmRsZUZpbGUoZmlsZXBhdGgsIGZpbGVuYW1lLCBkZXB0aCwgc2lkZWJhckNvbmZpZywgbGluaylcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gc2lkZWJhckNvbmZpZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RpcmVjdG9yeShmaWxlcGF0aCkge1xyXG4gIHJldHVybiBmcy5zdGF0U3luYyhmaWxlcGF0aCkuaXNEaXJlY3RvcnkoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEaXJlY3RvcnkoZmlsZXBhdGgsIGZpbGVuYW1lLCBkZXB0aCwgc2lkZWJhckNvbmZpZywgbGluaykge1xyXG4gIGNvbnN0IG5ld0xpbmsgPSBkZXB0aCA9PT0gMCA/IGAvJHtmaWxlbmFtZX0vYCA6IGAke2xpbmt9JHtmaWxlbmFtZX0vYFxyXG4gIGNvbnN0IGNvbmZpZyA9IGdlbmVyYXRlU2lkZWJhckNvbmZpZyhmaWxlcGF0aCwgbmV3TGluaywgZGVwdGggKyAxKVxyXG5cclxuICBpZiAoZGVwdGggPT09IDApIHtcclxuICAgIHNpZGViYXJDb25maWdbbmV3TGlua10gPSBbY29uZmlnXVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzaWRlYmFyQ29uZmlnLml0ZW1zLnB1c2goY29uZmlnKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRmlsZShmaWxlcGF0aCwgZmlsZW5hbWUsIGRlcHRoLCBzaWRlYmFyQ29uZmlnLCBsaW5rKSB7XHJcbiAgaWYgKGZpbGVuYW1lID09PSAnaW5kZXgubWQnICYmIGRlcHRoID4gMCkge1xyXG4gICAgc2lkZWJhckNvbmZpZy50ZXh0ID0gcGF0aC5iYXNlbmFtZShwYXRoLmRpcm5hbWUoZmlsZXBhdGgpKVxyXG4gICAgc2lkZWJhckNvbmZpZy5saW5rID0gbGlua1xyXG4gIH0gZWxzZSBpZiAocGF0aC5leHRuYW1lKGZpbGVuYW1lKSA9PT0gJy5tZCcgJiYgZmlsZW5hbWUgIT09ICdpbmRleC5tZCcpIHtcclxuICAgIGNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSwgJy5tZCcpXHJcbiAgICBzaWRlYmFyQ29uZmlnLml0ZW1zLnB1c2goe1xyXG4gICAgICB0ZXh0OiBiYXNlbmFtZSxcclxuICAgICAgbGluazogYCR7bGlua30ke2Jhc2VuYW1lfWBcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmNvbnNvbGUubG9nKGdlbmVyYXRlU2lkZWJhckNvbmZpZyhkb2NzUGF0aCkpXHJcbmV4cG9ydCBjb25zdCBzaWRlYmFyID0gZ2VuZXJhdGVTaWRlYmFyQ29uZmlnKGRvY3NQYXRoKVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZYLE9BQU8sWUFBWTtBQUNoWixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGlCQUFpQiwyQkFBMkI7OztBQ0ZnVyxJQUFNLE1BQU07QUFBQSxFQUMvWixFQUFFLE1BQU0sZ0JBQU0sTUFBTSxJQUFJO0FBQUEsRUFDeEIsRUFBRSxNQUFNLGdCQUFNLE1BQU0sUUFBUTtBQUFBLEVBQzVCLEVBQUUsTUFBTSxnQkFBTSxNQUFNLGVBQWU7QUFDckM7OztBQ0pzWixPQUFPLFFBQVE7QUFDcmEsT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCO0FBRnlPLElBQU0sMkNBQTJDO0FBSXhULElBQU0sWUFBWSxLQUFLLFFBQVEsY0FBYyx3Q0FBZSxDQUFDO0FBQzdELFFBQVEsSUFBSSxhQUFhLFNBQVM7QUFHbEMsSUFBTSxnQkFBZ0IsS0FBSyxRQUFRLFdBQVcsUUFBUTtBQUN0RCxJQUFNLFdBQVcsS0FBSyxRQUFRLGFBQWE7QUFFM0MsU0FBUyxzQkFBc0JBLFdBQVUsT0FBTyxJQUFJLFFBQVEsR0FBRztBQUM3RCxRQUFNLGdCQUFnQixVQUFVLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDckQsUUFBTSxRQUFRLEdBQUcsWUFBWUEsU0FBUSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxXQUFXLEdBQUcsQ0FBQztBQUU3RSxRQUFNLFFBQVEsQ0FBQyxhQUFhO0FBQzFCLFVBQU0sV0FBVyxLQUFLLEtBQUtBLFdBQVUsUUFBUTtBQUM3QyxRQUFJLFlBQVksUUFBUSxHQUFHO0FBQ3pCLHNCQUFnQixVQUFVLFVBQVUsT0FBTyxlQUFlLElBQUk7QUFBQSxJQUNoRSxPQUFPO0FBQ0wsaUJBQVcsVUFBVSxVQUFVLE9BQU8sZUFBZSxJQUFJO0FBQUEsSUFDM0Q7QUFBQSxFQUNGLENBQUM7QUFFRCxTQUFPO0FBQ1Q7QUFFQSxTQUFTLFlBQVksVUFBVTtBQUM3QixTQUFPLEdBQUcsU0FBUyxRQUFRLEVBQUUsWUFBWTtBQUMzQztBQUVBLFNBQVMsZ0JBQWdCLFVBQVUsVUFBVSxPQUFPLGVBQWUsTUFBTTtBQUN2RSxRQUFNLFVBQVUsVUFBVSxJQUFJLElBQUksUUFBUSxNQUFNLEdBQUcsSUFBSSxHQUFHLFFBQVE7QUFDbEUsUUFBTSxTQUFTLHNCQUFzQixVQUFVLFNBQVMsUUFBUSxDQUFDO0FBRWpFLE1BQUksVUFBVSxHQUFHO0FBQ2Ysa0JBQWMsT0FBTyxJQUFJLENBQUMsTUFBTTtBQUFBLEVBQ2xDLE9BQU87QUFDTCxrQkFBYyxNQUFNLEtBQUssTUFBTTtBQUFBLEVBQ2pDO0FBQ0Y7QUFFQSxTQUFTLFdBQVcsVUFBVSxVQUFVLE9BQU8sZUFBZSxNQUFNO0FBQ2xFLE1BQUksYUFBYSxjQUFjLFFBQVEsR0FBRztBQUN4QyxrQkFBYyxPQUFPLEtBQUssU0FBUyxLQUFLLFFBQVEsUUFBUSxDQUFDO0FBQ3pELGtCQUFjLE9BQU87QUFBQSxFQUN2QixXQUFXLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxhQUFhLFlBQVk7QUFDdEUsVUFBTSxXQUFXLEtBQUssU0FBUyxVQUFVLEtBQUs7QUFDOUMsa0JBQWMsTUFBTSxLQUFLO0FBQUEsTUFDdkIsTUFBTTtBQUFBLE1BQ04sTUFBTSxHQUFHLElBQUksR0FBRyxRQUFRO0FBQUEsSUFDMUIsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUNBLFFBQVEsSUFBSSxzQkFBc0IsUUFBUSxDQUFDO0FBQ3BDLElBQU0sVUFBVSxzQkFBc0IsUUFBUTs7O0FGaERyRCxJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxlQUFlO0FBQUEsRUFDZixhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUE7QUFBQSxFQUNYLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxlQUFlLENBQUMsQ0FBQztBQUFBLEVBRXRELGFBQWE7QUFBQSxJQUNYO0FBQUEsSUFDQTtBQUFBLElBQ0EsYUFBYSxDQUFDLEVBQUUsTUFBTSxVQUFVLE1BQU0sbUNBQW1DLENBQUM7QUFBQSxFQUM1RTtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsUUFBUSxDQUFDLE9BQU87QUFDZCxTQUFHLElBQUksZUFBZTtBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUyxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztBQUFBLEVBQzNDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZG9jc1BhdGgiXQp9Cg==