<template>
  <div class="resume-container">
    <h1 class="title">个人简历</h1>
    <div class="basic-info-wrapper">
      <div class="wrapper-title">个人情况</div>
      <div class="info-row">
        <div class="info-col" v-for="(item, index) in basicInfoList" :key="index">
          <div class="info-label-cell">{{item.label}}</div>
          <div class="info-value-cell">{{item.value}}</div>
        </div>
      </div>
    </div>
    <div class="basic-info-wrapper">
      <div class="wrapper-title">求职意向</div>
      <div class="info-row">
        <div class="info-col" v-for="(item, index) in targetInfoList" :key="index">
          <div class="info-label-cell">{{item.label}}</div>
          <div class="info-value-cell">{{item.value}}</div>
        </div>
      </div>
    </div>
    <div class="basic-info-wrapper">
      <div class="wrapper-title">职业经历</div>
      <div class="company-list-wrapper">
        <ul>
          <li>2016.07 - 2019.08 就职于上海群硕软件，从事公司项目开发的前台和后台代码的开发</li>
          <li>2019.08 - 至今 就职于上海米赢文化传播有限公司，从事公司的前台开发</li>
        </ul>
      </div>
    </div>
    <div class="basic-info-wrapper">
      <div class="wrapper-title">专业技能</div>
      <div class="company-list-wrapper">
        <ol>
          <li>熟练使用JS、CSS、HTML开发PC和移动端页面</li>
          <li>熟练使用vue框架进行项目开发</li>
          <li>对混合应用开发有一定的研究和项目产出</li>
          <li>有桌面应用开发的项目产出</li>
          <li>熟练使用git管理项目</li>
        </ol>
      </div>
    </div>
    <div class="basic-info-wrapper">
      <div class="wrapper-title">项目经历</div>
      <h3 class="cmp-desc">
        2019年 - 至今（上海米赢文化传播有限公司）
      </h3>
      <ol>
        <li class="project-wrapper">
          <div class="project-title">金链ERP(企业资源管理)项目, 主要工作内容有：</div>
          <ul class="project-desc">
            <li>项目基础框架的研究和搭建，使用vue + ant design</li>
            <li>crm,oms,wms模块的开发</li>
            <li>对热敏打印机，针式打印机，喷墨打印机，进行适配打印</li>
            <li>接入扫码枪</li>
            <li>集成腾讯地图，实现地图打点功能</li>
            <li>集成微信生态，实现微信扫码登录，公众号授权登录</li>
            <li>在原有vue项目基础上集成electron，打包成桌面应用</li>
          </ul>
          <div class="result-wrapper">
            <span class="result-label">项目收益：</span>
            <span>公司通过这套系统，实现在仓库工作台作业打包发货的流程，减少装箱出错率，提高作业效率，准确定位员工的工作进行绩效考核</span>
          </div>
        </li>
        <li class="project-wrapper">
          <div class="project-title">金链PDA(仓库作业)项目, 主要工作内容有：</div>
          <ul class="project-desc">
            <li>项目基础框架的研究和搭建，使用vue + vant ui</li>
            <li>仓库内部作业需要的各个模块的开发</li>
            <li>嵌入安卓系统，并集成PDA的扫码功能，以及android的部分原生功能</li>
          </ul>
          <div class="result-wrapper">
            <span class="result-label">项目收益：</span>
            <span>公司通过这套系统，实现了目前库内作业的所有基本流程，大大加快了库内作业的速率和准确度</span>
          </div>
        </li>
        <li class="project-wrapper">
          <div class="project-title">金开团(社区团购)小程序项目, 主要工作内容有：</div>
          <ul class="project-desc">
            <li>协助金开团组进行部分功能开发，发布团购，sku的操作，以及用户提现等功能</li>
          </ul>
          <div class="result-wrapper">
            <span class="result-label">项目收益：</span>
            <span>实现了项目从初至今，将近142000用户量的授权使用</span>
          </div>
        </li>
        <li class="project-wrapper">
          <div class="project-title">声梦商城(电商)小程序项目, 主要工作内容有：</div>
          <ul class="project-desc">
            <li>迭代商城的后期需求，通过分销卖货，红包裂变等功能获取用户流量</li>
          </ul>
          <div class="result-wrapper">
            <span class="result-label">项目收益：</span>
            <span>在抢红包功能上线之后，经过地推人员的推广，在5天内，达到了最高一天一千多用户的新增访问量</span>
          </div>
        </li>
      </ol>
      <h3 class="cmp-desc">
        2016年 - 2019年（上海群硕软件开发有限公司）
      </h3>
      <ol>
        <li class="project-wrapper">
          <div class="project-title">银联的生活缴费项目(移动web项目), 主要工作内容有：</div>
          <ul class="project-desc">
            <li>项目基础框架的研究和搭建，使用vue + scss</li>
            <li>水电煤线上缴费的功能开发</li>
          </ul>
        </li>
        <li class="project-wrapper">
          <div class="project-title">车险报价项目(移动web项目), 主要工作内容有：</div>
          <ul class="project-desc">
            <li>项目基础框架的研究和搭建，使用vue + scss + 百度AI</li>
            <li>实现输入车牌号，以及相关险种选项，给客户提供更多车险公司的报价功能</li>
            <li>使用百度AI，识别系统拍照或上传的车牌照片，识别车牌号</li>
          </ul>
        </li>
        <li class="project-wrapper">
          <div class="project-title">ACCA 中国, 主要工作内容有：</div>
          <ul class="project-desc">
            <li>使用技术：jquery, bootstrap</li>
            <li>ACCA的部分内容的优化，和后期的新需求的迭代开发</li>
            <li>可配置的SEO优化</li>
            <li>集成 vhall(微吼)视频，在后台管理系统中管理视频的增删改</li>
            <li>使用媒体查询，实现pc,mobile两端样式的兼容</li>
          </ul>
          <div class="result-wrapper">
            <span class="result-label">项目收益：</span>
            <span>
              方便用户在线观看视频，不用跳转到第三方页面；<br>
              mobile实现样式兼容，提高了用户体验感
            </span>
          </div>
        </li>
        <li class="project-wrapper">
          <div class="project-title">联合利华LiveChat，实时客服聊天系统, 主要工作内容有：</div>
          <ul class="project-desc">
            <li>使用技术：jquery + websocket</li>
            <li>实现用户和客服之间的工作时间内的实时沟通，和非工作时间的留言功能</li>
          </ul>
          <div class="result-wrapper">
            <span class="result-label">项目收益：</span>
            <span>给联合利华的用户提供了用户咨询的线上入口</span>
          </div>
        </li>
        <li class="project-wrapper">
          <div class="project-title">家藏网，电商web项目, 主要工作内容有：</div>
          <ul class="project-desc">
            <li>使用技术：jquery + bootstrap</li>
            <li>实现灵活的用户新增和编辑内容的编辑器页面，提供酒店住宿，小众大家的商品的线上预订和购买等功能</li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  props: {
  },
  data() {
    return {
      basicInfoList: [
        {
          label: '姓名',
          value: '黄海啸'
        }, {
          label: '性别',
          value: '男'
        }, {
          label: '年龄',
          value: '27'
        }, {
          label: '籍贯',
          value: '江苏'
        }, {
          label: '电话',
          value: '18918813817'
        }, {
          label: '邮箱',
          value: '18918813817@163.com'
        }, {
          label: '学历',
          value: '本科'
        }, {
          label: '毕业院校',
          value: '南通大学'
        },
      ],
      targetInfoList: [{
        label: '目标岗位',
        value: '前端开发工程师'
      }, {
        label: '期望薪资',
        value: '25k'
      }],
      description: '从事软件开放行业5年，曾就职于上海群硕软件开发，先'
    }
  }
}
</script>

<style lang="scss" scoped>
@media print {
  @page {
    margin: 10px;
  }
}
.resume-container {
  border: 1px solid $border-color;
  width: 800px;
  margin: auto;
  font-size: 1.2rem;
  .basic-info-wrapper {
    text-align: left;
  }
  .wrapper-title {
    font-size: 1.4rem;
    font-weight: bold;
    background-color: $bg-color;
    border-bottom: 1px solid $border-color;
    padding: 2px 4px;
  }
  .info-row {
    display: flex;
    flex-wrap: wrap;
    .info-col {
      display: flex;
      width: 50%;
    }
    .info-label-cell {
      border-right: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      flex: 1;
      padding: 2px 4px;
    }
    .info-value-cell {
      border-right: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      flex: 2;
      padding: 2px 4px;
    }
    .info-col:nth-child(2n) {
      .info-value-cell {
        border-right: 0;
      }
    }
  }
  .cmp-desc {
    padding-left: 20px;
  }
  .project-desc {
    padding-left: 20px;
  }
  .project-wrapper {
    margin-bottom: 10px;
    .project-title {
      font-size: 1.4rem;
      margin-bottom: 5px;
    }
    .result-wrapper {
      margin-top: 5px;
    }
  }
}
</style>
