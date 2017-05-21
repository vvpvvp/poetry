<template>
  <div class="index-vue">
    <div class="keywords">
      <div class="tags">
        <p>朝代</p>
          <nuxt-link to="/search/?type=poetry&dynasty=%e5%85%88%e7%a7%a6">先秦</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e4%b8%a4%e6%b1%89">两汉</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e9%ad%8f%e6%99%8b">魏晋</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e5%8d%97%e5%8c%97%e6%9c%9d">南北朝</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e9%9a%8b%e4%bb%a3">隋代</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e5%94%90%e4%bb%a3">唐代</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e4%ba%94%e4%bb%a3">五代</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e5%ae%8b%e4%bb%a3">宋代</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e9%87%91%e6%9c%9d">金朝</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e5%85%83%e4%bb%a3">元代</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e6%98%8e%e4%bb%a3">明代</nuxt-link>
          <nuxt-link to="/search/?type=poetry&dynasty=%e6%b8%85%e4%bb%a3">清代</nuxt-link>
      </div>
      <div class="tags">
        <p>诗人</p>
        <nuxt-link to="/author/665">白居易</nuxt-link>
        <nuxt-link to="/author/474">杜甫</nuxt-link>
        <nuxt-link to="/author/247">李白</nuxt-link>
        <nuxt-link to="/author/2">齐己</nuxt-link>
        <nuxt-link to="/author/197">刘禹锡</nuxt-link>
        <nuxt-link to="/author/204">李商隐</nuxt-link>
        <nuxt-link to="/author/18">元稹</nuxt-link>
        <nuxt-link to="/author/217">辛弃疾</nuxt-link>
        <nuxt-link to="/author/564">韦应物</nuxt-link>
        <nuxt-link to="/author/694">贯休</nuxt-link>
        <nuxt-link to="/author/392">皎然</nuxt-link>
        <nuxt-link to="/author/335">陆龟蒙</nuxt-link>
      </div>
      <div class="tags">
        <p>分类</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8f%a4%e8%af%97%e5%8d%81%e4%b9%9d%e9%a6%96">古诗十九首</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8f%a4%e8%af%97%e4%b8%89%e7%99%be%e9%a6%96">古诗三百首</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%94%90%e8%af%97%e4%b8%89%e7%99%be%e9%a6%96">唐诗三百首</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ae%8b%e8%af%8d%e4%b8%89%e7%99%be%e9%a6%96">宋词三百首</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%b0%8f%e5%ad%a6%e5%8f%a4%e8%af%97">小学古诗</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%b0%8f%e5%ad%a6%e6%96%87%e8%a8%80%e6%96%87">小学文言文</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%88%9d%e4%b8%ad%e5%8f%a4%e8%af%97">初中古诗</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%88%9d%e4%b8%ad%e6%96%87%e8%a8%80%e6%96%87">初中文言文</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%ab%98%e4%b8%ad%e6%96%87%e8%a8%80%e6%96%87">高中文言文</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%ab%98%e4%b8%ad%e5%8f%a4%e8%af%97">高中古诗</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8f%a4%e6%96%87%e8%a7%82%e6%ad%a2">古文观止</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ae%8b%e8%af%8d%e7%b2%be%e9%80%89">宋词精选</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%be%9e%e8%b5%8b%e7%b2%be%e9%80%89">辞赋精选</nuxt-link>
      </div>
      <div class="tags">
        <p>节日</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%8a%82%e6%97%a5">节日</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%b8%ad%e7%a7%8b%e8%8a%82">中秋节</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%af%92%e9%a3%9f%e8%8a%82">寒食节</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b8%85%e6%98%8e%e8%8a%82">清明节</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%b8%83%e5%a4%95%e8%8a%82">七夕节</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%98%a5%e8%8a%82">春节</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%85%83%e5%ae%b5%e8%8a%82">元宵节</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%ab%af%e5%8d%88%e8%8a%82">端午节</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%87%8d%e9%98%b3%e8%8a%82">重阳节</nuxt-link>
      </div>
      <div class="tags">
        <p>季节</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%98%a5">春天</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%a4%8f">夏天</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a7%8b">秋天</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%ac">冬天</nuxt-link>
      </div>
      <div class="tags">
        <p>花草</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%8d%b7%e8%8a%b1">荷花</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b5%8f%e8%8a%b1">赏花</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%83%9c%e8%8a%b1">惜花</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%a1%83%e8%8a%b1">桃花</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%8f%8a%e8%8a%b1">菊花</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%99%bd%e8%8f%8a">白菊</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%a2%85%e8%8a%b1">梅花</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e8%8a%b1">写花</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%89%a1%e4%b8%b9">牡丹</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%ab%b9%e5%ad%90">竹子</nuxt-link>
      </div>
      <div class="tags">
        <p>景物</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e9%9b%aa">写雪</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e9%9b%a8">写雨</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e9%b1%bc">写鱼</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e5%b1%b1">写山</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e9%b8%9f">写鸟</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e9%85%92">写酒</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e8%8d%89">写草</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e8%8c%b6">写茶</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e6%b0%b4">写水</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e9%a9%ac">写马</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e6%99%af">写景</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e9%a3%8e">写风</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e4%ba%91">写云</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%99%e4%ba%ba">写人</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%9b%a8%e5%a4%9c">雨夜</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%9d%be%e6%a0%91">松树</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%9f%b3%e6%a0%91">柳树</nuxt-link>
      </div>
      <div class="tags">
        <p>相思</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%88%b1%e6%83%85">爱情</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%9d%e5%bf%b5">思念</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%ad%8c%e5%a5%b3">歌女</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%9d%9a%e8%b4%9e">坚贞</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%b0%91%e5%a6%87">少妇</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%b0%91%e5%a5%b3">少女</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%a5%b3%e5%ad%90">女子</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%88%b1%e6%85%95">爱慕</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%9b%b8%e6%80%9d">相思</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bf%a0%e8%b4%9e">忠贞</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%a6%87%e5%a5%b3">妇女</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%94%b7%e5%ad%90">男子</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bc%83%e5%a6%87">弃妇</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%97%ba%e6%80%a8">闺怨</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%96%b0%e5%a9%9a">新婚</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%be%8e%e4%ba%ba">美人</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%a9%9a%e5%a7%bb">婚姻</nuxt-link>
      </div>
      <div class="tags">
        <p>田园</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%b1%b1%e6%b0%b4">山水</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b0%b4%e4%b9%a1">水乡</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%90%91%e5%be%80">向往</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%94%b0%e5%9b%ad">田园</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8a%b3%e4%bd%9c">劳作</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bd%92%e4%b9%a1">归乡</nuxt-link>
      </div>
      <div class="tags">
        <p>壮志未酬</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bf%a7%e5%9b%bd%e5%bf%a7%e6%b0%91">忧国忧民</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%80%9f%e5%8f%a4%e8%ae%bd%e4%bb%8a">借古讽今</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%80%e6%89%8d%e4%b8%8d%e9%81%87">怀才不遇</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%a3%ae%e5%bf%97%e6%9c%aa%e9%85%ac">壮志未酬</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%a3%ae%e5%bf%97%e9%9a%be%e9%85%ac">壮志难酬</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%90%8a%e5%8f%a4%e4%bc%a4%e4%bb%8a">吊古伤今</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%80%9f%e6%99%af%e6%8a%92%e6%83%85">借景抒情</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%92%8f%e5%8f%b2%e6%80%80%e5%8f%a4">咏史怀古</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%80%e5%8f%a4%e4%bc%a4%e4%bb%8a">怀古伤今</nuxt-link>
      </div>
      <div class="tags">
        <p>忧思</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bf%a7%e6%80%9d">忧思</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%93%80%e6%80%a8">哀怨</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%87%ad%e5%90%8a">凭吊</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ae%ab%e6%80%a8">宫怨</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%a8%e5%88%ba">怨刺</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%a4%e6%87%91">愤懑</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%a8%e6%84%a4">怨愤</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%83%86%e6%80%85">惆怅</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%85%e6%83%98">怅惘</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%a4%e6%85%a8">愤慨</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bf%a7%e6%84%81">忧愁</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a6%bb%e5%88%ab">离别</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%82%bc%e4%ba%a1">悼亡</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%ae%bd%e5%88%ba">讽刺</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%93%80%e6%84%81">哀愁</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%bc%a4%e5%88%ab">伤别</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%a8%e5%88%ab">怨别</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bf%a7%e4%bc%a4">忧伤</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%82%b2%e6%84%a4">悲愤</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%89%b9%e5%88%a4">批判</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bf%a7%e6%84%a4">忧愤</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%83%8b%e6%83%9c">惋惜</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%82%b2%e7%a7%8b">悲秋</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%9f%e5%8f%b9">感叹</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%bc%a4%e6%84%9f">伤感</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%81%e6%80%9d">愁思</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%a4%b1%e6%84%8f">失意</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%8a%92%e6%84%a4">抒愤</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%ae%bd%e5%96%bb">讽喻</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%bc%a4%e6%80%80">伤怀</nuxt-link>
      </div>
      <div class="tags">
        <p>乐</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%b9%90%e6%9b%b2">乐曲</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%b9%90%e6%ad%8c">乐歌</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%b9%90%e5%ba%9c">乐府</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%9f%b3%e4%b9%90">音乐</nuxt-link>
      </div>
      <div class="tags">
        <p>游历</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b8%b8%e5%8e%86">游历</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%98%a5%e6%b8%b8">春游</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b8%b8%e4%be%a0">游侠</nuxt-link>
      </div>
      <div class="tags">
        <p>追忆</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%bf%bd%e5%bf%86">追忆</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%80%e5%8f%a4">怀古</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%83%9c%e6%97%b6">惜时</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%b2%81%e6%9c%88">岁月</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%92%8f%e5%8f%b2">咏史</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bf%86%e6%97%a7">忆旧</nuxt-link>
      </div>
      <div class="tags">
        <p>国家</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%b0%86%e5%86%9b">将军</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%b0%86%e5%a3%ab">将士</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%88%98%e5%a3%ab">战士</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bf%a7%e5%9b%bd">忧国</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%88%98%e4%ba%89">战争</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%ba%ba%e6%b0%91">人民</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%9b%e6%97%85">军旅</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%a4%96%e4%ba%a4">外交</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%be%b9%e5%a1%9e">边塞</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b0%8b%e7%95%a5">谋略</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%a1%8c%e5%86%9b">行军</nuxt-link>
      </div>
      <div class="tags">
        <p>隐居</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%9a%90%e5%b1%85">隐居</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%80%80%e9%9a%90">退隐</nuxt-link>
      </div>
      <div class="tags">
        <p>思乡</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%84%bf%e7%ab%a5">儿童</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%b0%91%e5%b9%b4">少年</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%af%8d%e4%ba%b2">母亲</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b8%b8%e5%ad%90">游子</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%9d%e4%ba%b2">思亲</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%ba%b2%e6%83%85">亲情</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%88%b6%e6%af%8d">父母</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%b9%a6%e4%bf%a1">书信</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ad%9d%e9%81%93">孝道</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%ba%b2%e4%ba%ba">亲人</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%9d%e4%b9%a1">思乡</nuxt-link>
      </div>
      <div class="tags">
        <p>文体</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%af%97%e7%bb%8f">诗经</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%92%8c%e8%af%97">和诗</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%93%80%e6%ad%8c">哀歌</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%95%85%e4%ba%8b">故事</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%a3%8e%e4%bf%97">风俗</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%95%a3%e6%9b%b2">散曲</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%9c%e4%ba%8b">农事</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%a8%80%e5%bf%97">言志</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ba%8f%e6%96%87">序文</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%af%93%e8%a8%80">寓言</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%bc%a0%e8%ae%b0">传记</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a5%9d%e7%a6%8f">祝福</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%85%b8%e6%95%85">典故</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a5%9e%e8%af%9d">神话</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b0%91%e8%b0%a3">民谣</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b0%91%e6%ad%8c">民歌</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%85%ac%e6%96%87">公文</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%96%87%e5%ad%a6">文学</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%a5%9a%e8%be%9e">楚辞</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a5%ad%e6%96%87">祭文</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%95%a3%e6%96%87">散文</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%af%93%e7%90%86">寓理</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8f%b2%e8%ae%ba">史论</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b8%b8%e8%ae%b0">游记</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%90%8a%e5%8f%a4">吊古</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%92%8f%e7%89%a9">咏物</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%89%98%e5%bf%97">托志</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b5%a0%e5%ba%8f">赠序</nuxt-link>
      </div>
      <div class="tags">
        <p>其他</p>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8f%8b%e6%83%85">友情</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%80%81%e5%88%ab">送别</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%85%b0%e5%8b%89">慰勉</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8b%89%e5%8a%b1">勉励</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8a%b1%e5%bf%97">励志</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%bb%84%e6%b2%b3">黄河</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%a7%84%e5%8a%9d">规劝</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%bb%95%e9%80%94">仕途</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8f%99%e6%a2%a6">叙梦</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%9c%e6%9d%91">农村</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a5%9d%e5%af%bf">祝寿</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8a%9d%e6%85%b0">劝慰</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%91%bd%e8%bf%90">命运</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b8%a1%e6%b1%9f">渡江</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%a1%8c%e8%88%9f">行舟</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8d%b3%e6%99%af">即景</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%8b%a9%e7%8c%8e">狩猎</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%95%99%e6%81%8b">留恋</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%9c%b7%e6%81%8b">眷恋</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%9f%e6%81%a9">感恩</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%90%86%e6%83%b3">理想</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%bf%e6%9c%9b">愿望</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%ba%ba%e6%a0%bc">人格</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%9d%e5%9b%bd">思国</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%be%81%e6%97%85">羁旅</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%97%85%e9%80%94">旅途</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ad%a6%e4%b9%a0">学习</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%88%9e%e8%b9%88">舞蹈</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b8%94%e4%ba%ba">渔人</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%9d%92%e6%98%a5">青春</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%93%b2%e7%90%86">哲理</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ad%a4%e7%8b%ac">孤独</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a5%9d%e6%84%bf">祝愿</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%94%9f%e6%ad%bb">生死</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%95%99%e8%82%b2">教育</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%86%9c%e6%b0%91">农民</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%9d%e6%83%b3">思想</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b1%aa%e6%94%be">豪放</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%80%91%e5%b8%83">瀑布</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%af%bb%e8%ae%bf">寻访</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%97%b6%e5%85%89">时光</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b1%82%e8%b4%a4">求贤</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%ba%aa%e8%a1%8c">纪行</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%80%e6%97%a7">怀旧</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%87%84%e5%87%89">凄凉</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%96%9c%e7%88%b1">喜爱</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%9a%90%e9%80%b8">隐逸</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b4%ab%e5%9b%b0">贫困</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a5%9e%e4%bb%99">神仙</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%83%9c%e6%98%a5">惜春</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%96%9c%e6%82%a6">喜悦</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%87%aa%e7%99%bd">自白</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8e%86%e5%8f%b2">历史</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%a3%b0%e9%9f%b3">声音</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%ae%bf%e5%8f%8b">访友</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%93%81%e8%b4%a8">品质</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%90%86%e8%ae%ba">理论</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%96%9d%e9%85%92">喝酒</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a5%ad%e7%a5%80">祭祀</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%a2%98%e7%94%bb">题画</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bd%92%e9%9a%90">归隐</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a5%9d%e8%b4%ba">祝贺</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%8a%92%e6%80%80">抒怀</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8a%b3%e5%8a%a8">劳动</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%83%9c%e5%88%ab">惜别</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%9f%e6%80%80">感怀</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%9c%88%e4%ba%ae">月亮</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ae%bd%e6%85%b0">宽慰</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%90%8c%e6%83%85">同情</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%bf%b0%e5%bf%97">述志</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%80%83%e8%af%95">考试</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%97%b7%e8%be%be">旷达</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b8%8f%e9%9d%92">踏青</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%9f%e6%97%b6">感时</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%af%9a%e4%bf%a1">诚信</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%95%bf%e8%af%97">长诗</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%8a%92%e6%83%85">抒情</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%83%b3%e8%b1%a1">想象</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8a%a8%e7%89%a9">动物</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%9a%ae%e6%98%a5">暮春</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bf%a7%e6%b0%91">忧民</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b1%aa%e8%bf%88">豪迈</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%af%92%e5%a4%9c">寒夜</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%87%aa%e7%94%b1">自由</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%9b%9e%e5%bf%86">回忆</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b5%9e%e7%be%8e">赞美</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b5%9e%e9%a2%82">赞颂</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%9f%e6%bf%80">感激</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%9f%e6%85%a8">感慨</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%b9%a1%e6%9d%91">乡村</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%80%e4%b9%a1">怀乡</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%80%9d%e5%bd%92">思归</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%99%bb%e9%ab%98">登高</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8a%9d%e8%af%ab">劝诫</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b5%a0%e5%88%ab">赠别</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%9f%e6%82%9f">感悟</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%99%bb%e6%a5%bc">登楼</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8f%99%e4%ba%8b">叙事</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%ba%aa%e6%b8%b8">纪游</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%ae%ae%e8%ae%ba">议论</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%8a%b1%e8%b4%9f">抱负</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b5%8f%e6%9c%88">赏月</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%94%a8%e4%ba%ba">用人</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%bf%bd%e6%b1%82">追求</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%af%bb%e4%b9%a6">读书</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%b5%a0%e7%ad%94">赠答</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%a1%8c%e8%b7%af">行路</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b9%96%e6%b0%b4">湖水</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%be%a0%e5%ae%a2">侠客</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%9c%9b%e8%bf%9c">望远</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%95%bf%e6%b1%9f">长江</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%94%9f%e6%b4%bb">生活</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8a%9d%e8%b0%8f">劝谏</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ae%b4%e4%bc%9a">宴会</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%be%b9%e7%96%86">边疆</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%82%bc%e5%bf%b5">悼念</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%97%a0%e5%a5%88">无奈</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%ad%8c%e8%be%9e">歌辞</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%a5%bf%e6%b9%96">西湖</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%a2%82%e6%ad%8c">颂歌</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%bf%97%e5%90%91">志向</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%a3%ae%e5%bf%97">壮志</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ae%b4%e9%a5%ae">宴饮</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e8%80%81%e5%b8%88">老师</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%88%b1%e5%9b%bd">爱国</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%a4%8d%e7%89%a9">植物</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%b1%b1%e6%9d%91">山村</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ba%90%e5%b1%b1">庐山</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%8f%8b%e4%ba%ba">友人</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%9e%82%e9%92%93">垂钓</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%84%9f%e4%bc%a4">感伤</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e7%a6%bb%e6%84%81">离愁</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%ba%ba%e7%94%9f">人生</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%af%93%e4%ba%ba">寓人</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%ae%ab%e5%bb%b7">宫廷</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e9%97%b2%e9%80%82">闲适</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e5%93%81%e6%a0%bc">品格</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e4%be%9d%e6%81%8b">依恋</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b1%9f%e5%8d%97">江南</nuxt-link>
        <nuxt-link to="/search/?type=poetry&keyword=%e6%b8%b8%e4%bb%99">游仙</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keywords: [

      ]
    }
  },
  head() {
    return {
      title: '首页'
    }
  }
}
</script>