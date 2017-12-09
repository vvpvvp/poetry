<template>
  <div class="poetry-vue">
    <div class="background" :style="bgimg"></div>
    <div class="page">
      <nuxt-link :to="'/poetry/'+ (parseInt(params.id)-1)">上一首</nuxt-link>
      <nuxt-link :to="'/poetry/'+ (parseInt(params.id)+1)">下一首</nuxt-link>
    </div>
    <div v-if="!poetry">
      <p class="not-found">不存在该首诗。</p>
    </div>
    <div v-else>
      <p class="show_title_pinyin"><span v-show="show.pinyin"> {{poetry.titlePinyin}}</span>&nbsp;</p>
      <p class="show_title">
        <span class="title">{{poetry.title}}</span>
        <span class="show-pinyin" :class="{'selected': show.pinyin}" @click="show.pinyin=!show.pinyin">拼音</span>
        <span class="show-zhushi" v-if="allDesc" :class="{'selected': show.zhushi}" @click="show.zhushi=!show.zhushi">注释</span>
        <span class="show-fanti" :class="{'selected': show.fanti}" @click="show.fanti=!show.fanti">{{show.fanti ? '繁体' : '简体'}}</span>
      </p>
      <p>朝代: {{poetry.dynasty}}</p>
      <p>作者：
        <nuxt-link :to="'/author/'+ poetry.author_id" v-if="poetry.author_id">{{poetry.author}}</nuxt-link>
        <span v-else>{{poetry.author}}</span>
      </p>
      <p class="keywords">
        <span v-for="k of poetry.keywords">{{k}}</span>
      </p>
      <ul>
        <li v-for="line of poetryList">
          <!--<p class="pinyin"><span v-for="w of line.pinyin">{{w}}</span></p>-->
          <p class="words" :class="{'pinyin-show': show.pinyin}">
            <span v-for="(w, $index) of line.words">
              <span class="pinyin">{{line.pinyin[$index]}}</span>
              <span v-if="!show.fanti">{{w}}</span>
              <span v-else>{{line.fantis[$index]}}</span>
            </span>
          </p>
          <p class="desc" :class="{'zhushi-show': show.zhushi}"><span>{{line.desc}}</span></p>
          <!--<p>{{line.notes}}</p>-->
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import utils from '../../src/js/utils';
import location from '../../src/js/location';
export default {
  transition: 'bounce',
  asyncData({ params, error }) {
    return axios.get(`${location()}/poetry?id=${params.id}`)
      .then((res) => {
        if (res.data.status == 200) {
          let allDesc = "";
          let poetryList = res.data.poetryList;
          for (let p of poetryList) {
            p.pinyin = utils.trans(p.words || '').split(/[\s|，|。|“|”|、|＿|？|：|)|(]|《|》|！|；/);
            p.fantis = utils.tranFanti(p.words || '');
            allDesc += p.desc;
          }
          res.data.poetry.titlePinyin = utils.trans(res.data.poetry.title || '');
          res.data.poetry.keywords = res.data.poetry.keywords == '' ? [] : res.data.poetry.keywords.split(",");
          return { allDesc, poetry: res.data.poetry, poetryList: poetryList, params: params };
        } else {
          return { poetry: null, poetryList: [], params: params };
        }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Not found' })
      })
  },
  data() {
    return {
      load: false,
      fantis: {},
      allDesc: '',
      show: {
        pinyin: false,
        zhushi: false,
        fanti: false
      }
    }
  },
  computed: {
    bgimg() {
      let s = {};
      if(!this.poetry){
        return s;
      }
      let images = {
        '春节': 'chunjie',
        '冬天': 'dong2',
        '边塞': 'biansai',
        '江南': 'jiangnan',
        '杭州': 'jiangnan2',
        '田园': 'jiangnan3',
        '女子': 'nvzi',
        '山': 'shanshui',
        '隐居': 'shanshui2',
        '桃花': 'taohua',
        '夏天': 'xiatian',
        '大雪': 'xue2',
        '写雪': 'xue3',
        '春': 'chuntian',
        '菊': 'juhua',
        '茶': 'cha',
        '冬': 'dong',
        '荷': 'he',
        '酒': 'jiu',
        '马': 'ma',
        '战': 'zhanzheng',
        '梅': 'mei',
        '童': 'tong',
        '夏': 'xia',
        '雨': 'xieyu',
        '雪': 'xue',
        '友': 'you',
        '鱼': 'yu',
        '乐': 'yue',
        '曲': 'yue',
        '竹': 'zhu',
        '女': 'nvzi2',
        '秋': 'qiu',
      };
      let image = '';
      let keywords = this.poetry.keywords.join("");
      for(let i in images){
        if(keywords.indexOf(i) != -1 || this.poetry.title.indexOf(i) != -1){
          image = images[i];
          break;
        }
      }
      if (image) {
        s['background-image'] = `url(/image/${image}.jpeg)`;
      }
      return s;
    }
  },
  head() {
    return {
      title: this.poetry ? this.poetry.title : '不存在'
    }
  }
}
</script>