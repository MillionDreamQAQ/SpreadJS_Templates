<template>
  <div class="app-header">
    <img
      class="logo"
      src="https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/spread/source/SPJS.svg"
      alt="logo"
    />
    <div class="items-container">
      <div class="header-item">
        <a href="https://www.grapecity.com.cn/developer/spreadjs">产品官网</a>
      </div>
      <div class="header-item">
        <a
          href="https://www.grapecity.com.cn/developer/spreadjs/getstart-zero-based"
          >新手入门路径</a
        >
      </div>
      <div class="header-item">
        <a href="https://demo.grapecity.com.cn/spreadjs/help/docs/overview"
          >产品文档</a
        >
      </div>
      <div class="header-item">
        <a href="https://www.grapecity.com.cn/developer/spreadjs/applyonline"
          >预约技术顾问</a
        >
      </div>
      <div class="header-item">
        <a href="https://www.grapecity.com.cn/developer/spreadjs/deploy"
          >申请临时部署授权</a
        >
      </div>
      <div class="header-item">
        <a href="https://www.grapecity.com.cn/developer/spreadjs/demo"
          >更多在线产品 Demo</a
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
