const obj = {
  code: 200,
  message: "ok",
  data: {
    title: "理想三旬",
    author: "陈鸿宇",
    duration: "04:20",
    pic: "./images/lixiang.jpg",
    audio: "./audios/理想三旬.m4a",
    lyric:
      "[00:00.000] 作词 : 唐映枫\n[00:00.113] 作曲 : 陈鸿宇\n[00:00.226] 编曲 : 陈鸿宇/马雨阳\n[00:00.340]混音：马雨阳\n[00:01.340]雨后有车驶来\n[00:03.510]驶过暮色苍白\n[00:06.090]旧铁皮往南开 恋人已不在\n[00:10.890]收听浓烟下的 诗歌电台\n[00:15.700]不动情的咳嗽 至少看起来\n[00:20.420]归途也还可爱\n[00:22.870]琴弦少了姿态\n[00:25.160]再不见那夜里 听歌的小孩\n[00:30.170]时光匆匆独白\n[00:32.380]将颠沛磨成卡带\n[00:34.810]已枯卷的情怀 踏碎成年代\n[00:39.970]\n[00:49.170]就老去吧 孤独别醒来\n[00:54.650]\n[00:55.310]你渴望的离开\n[00:59.540]只是无处停摆\n[01:03.700]就歌唱吧 眼睛眯起来\n[01:09.858]而热泪的崩坏\n[01:14.218]只是没抵达的存在\n[01:18.650]\n[01:37.090]青春又醉倒在\n[01:39.840]籍籍无名的怀\n[01:42.200]靠嬉笑来虚度 聚散得慷慨\n[01:46.989]辗转却去不到 对的站台\n[01:51.890]如果漂泊是成长 必经的路牌\n[01:56.530]你迷醒岁月中\n[01:58.840]那贫瘠的未来\n[02:01.418]像遗憾季节里 未结果的爱\n[02:05.808]弄脏了每一页诗\n[02:08.310]吻最疼痛的告白\n[02:10.859]而风声吹到这 已不需要释怀\n[02:15.718]就老去吧 孤独别醒来\n[02:20.598]\n[02:21.869]你渴望的离开\n[02:26.000]只是无处停摆\n[02:30.138]就歌唱吧 眼睛眯起来\n[02:36.000]而热泪的崩坏\n[02:40.220]只是没抵达的存在\n[02:47.239]\n[03:06.019]就甜蜜地忍耐\n[03:08.459]繁星润湿窗台\n[03:10.878]光影跳动着像在 困倦里说爱\n[03:15.679]再无谓的感慨\n[03:18.348]以为明白\n[03:20.418]梦倒塌的地方 今已爬满青苔\n"
,
  },
};

const API = {
  queryLyric() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(obj);
      }, Math.round(Math.random() * (2000 - 500) + 500));
    });

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(obj);
    //   }, 0);
    // });
  },
};
