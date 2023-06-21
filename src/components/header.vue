<template>
  <div class="app-header">
    <img
      class="logo"
      src="https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/spread/source/SPJS.svg"
      alt="logo"
    />
    <div class="items-container">
      <div class="header-item">
        <a href="https://www.grapecity.com.cn/developer/spreadjs">产品首页</a>
      </div>
      <div class="header-item">
        <a href="https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/"
          >SpreadJS实例</a
        >
      </div>
      <div class="header-item">
        <a href="https://demo.grapecity.com.cn/SpreadJS/WebDesigner/index.html"
          >在线表格编辑器</a
        >
      </div>
      <div class="header-item">
        <a href="https://demo.grapecity.com.cn/spreadjs/help/docs/overview"
          >产品文档</a
        >
      </div>
      <div class="header-item">
        <a
          href="https://demo.grapecity.com.cn/spreadjs/help/api/modules/GC.Data"
          >API文档</a
        >
      </div>
      <div class="header-item">
        <a href="https://gcdn.grapecity.com.cn/showforum-230-1.html"
          >产品支持论坛</a
        >
      </div>
      <div class="header-item">
        <a href="https://www.grapecity.com.cn/developer/spreadjs/help">更多</a>
      </div>
      <div class="header-item">
        <a href="https://www.grapecity.com.cn/developer/spreadjs/download"
          >立即试用</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.app-header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 60px;
  background-color: white;
  color: black;
  text-align: center;
  border-bottom: 2px solid #982271;
}
.items-container {
  height: 100%;
  display: flex;
  justify-content: center;
  padding-left: 200px;
}
.header-item {
  margin-left: 60px;
  margin-top: 20px;
  font-size: medium;
  cursor: pointer;
}
.header-item a:hover {
  color: #982271;
  text-decoration: underline;
}
.header-item a {
  color: black;
  text-decoration: none;
}
.logo {
  position: absolute;
  top: 40%;
  margin-top: -20px;
  width: 240px;
  left: 25px;
}
</style>
