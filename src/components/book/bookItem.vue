<!-- 列表页图书item -->
<template>
  <li class="h-bookitem">
    <van-row>
        <van-col span="8" class="pic">
          <img src="http://new.crup.cn/ShowPic/Show?vpath=/fzfm/xiao/45731-(WBS)-sl.jpg&vtag=1&ptype=1" alt="">
        </van-col>
        <van-col span="16" class="content">
          <p class="booktilte"><a href="">改革开放与当代中国智库（“认识中国·了解中国”书系）</a></p>
          <p class="dsg">清华大学朱旭峰教授的《改革开放与当代中国智库》一书立足于中国改革开放40年，系统审视了中国智库在改革
            开放过程中的发展历程和现实作用，并深入分析了新时代多元化的中国智库体系及智库运行体系中的新主体，
            以期全面认识中国特色新型智库的现状、问题及未来的发展方向。本书提出了新时代中国智库建设的十大关键词，
            即专业、影响、独立、创新、务实、竞争、合作、激励、监督、国际化，对于建设中国特色新型智库具有重要的
            启发意义。
          </p>
          <p><span>作者：朱旭峰</span><span>出版时间：2018-12</span></p>
        </van-col>
      </van-row>
  </li>
</template>

<script>
export default {
  data () {
    return {
    };
  }
}

</script>
<style lang='less' scoped>
  .h-bookitem{
    margin:0 .9375rem;
    padding: .9375rem 0;
    border-bottom: 1px solid #ccc;
    .pic {
      padding-right: .9375rem;
      img {
        height: 8.4375rem;
      }
    }
    .content {
      .booktilte {
        font-size: .875rem;
        a {
          line-height: 1.6em;
        }
      }
      p {
        font-size: .75rem;
        line-height: 1.5em;
      }
      .dsg {
        max-height: 4.6875rem;
        color: #ccc;
        overflow: hidden;
      }
    }
  }
</style>
