<template>
    <div class="swiper" @mouseover="stop()" @mouseout="play()">
        <div class="slide-img">
            <ul class="ul-imgs" :style="{width: ulWidth, left: -parseInt(liWidth) + 'px'}">
                <li :index="imgs.length">
                    <img :src="imgs[imgs.length - 1]" class="img" :style="{width: liWidth}">
                </li>
                <li v-for="(item, index) in imgs" :key="index + 1" :index="index + 1">
                    <img :src="item" class="img" :style="{width: liWidth}">
                </li>
                <li :index="1">
                    <img :src="imgs[0]" class="img" :style="{width: liWidth}">
                </li>
            </ul>
        </div>
        <ul class="slide-icon">
            <li v-for="(item, index) in imgs" :key="index" @click="toIndex(index + 1)" :class="{on: index + 1 == nowIndex}" class="btn">
            </li>
        </ul>
        <div class="prevnext">
            <div @click="run(0)" class="prev">
            </div>
            <div @click="run(1)" class="next">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Swiper',
    data () {
        return {
            imgs: null,
            interval: 30,
            nowIndex: 1,
            move: true,
            speed: 10,
            target: 0,
            timer: null,
            ishoverNext: false,
            ishoverPrev: false,
            liWidth: 0,
            ulWidth: 0,
            realWidth: 0,
            n: 0
        }
    },
    props: {
        Imgs: {
            type: Array,
            default: []
        },
        Interval: {
            type: Number,
            default: 30
        }
    },
    created() {
        this.imgs = this.$props.Imgs;
        this.interval = this.$props.Interval;
        this.n = this.imgs.length;
    },
    mounted() {
        this.liWidth = (document.querySelector('.slide-img').clientWidth) + 'px';
        this.ulWidth = (document.querySelector('.slide-img').clientWidth) * (this.imgs.length + 2) + 'px';
        this.realWidth = document.querySelector('.slide-img').clientWidth;
        this.play();
        window.onfocus = this.play();
        window.onblur = this.stop();
    },
    beforeDestroy() {
    },
    destroyed() {
        clearInterval(this.timer);
    },
    methods: {
        animate: function (offset) {
            let pic = document.querySelector('.ul-imgs');
            this.speed = offset / this.interval;
            this.target = parseInt(pic.style.left) + offset;
            this.go();
        },
        go: function (target) {
            let pic = document.querySelector('.ul-imgs');
            this.move = false;
            if ((this.speed > 0 && parseInt(pic.style.left) < this.target) || (this.speed < 0 && parseInt(pic.style.left) > this.target)) {
                pic.style.left = parseInt(pic.style.left) + this.speed + "px";
                setTimeout(this.go, 10);
            } else {
                this.move = true;
                pic.style.left = this.target + "px";
                if (this.target > -(this.realWidth)) {
                    pic.style.left = - (this.n * this.realWidth) + "px";
                } else if (this.target < -(this.n * this.realWidth)) {
                    pic.style.left = -parseInt(this.realWidth) + "px";
                }
                this.target = 0;
            }
        },
        run: function (num) {
            if (this.move && num == 0) {
                this.animate(this.realWidth);
                if (this.nowIndex == 1) {
                    this.nowIndex = this.n;
                }
                else {
                    this.nowIndex -= 1;
                }
                this.showBtn(this.nowIndex);

            } else if (this.move && num == 1) {
                this.animate(-(this.realWidth));
                if (this.nowIndex == this.n) {
                    this.nowIndex = 1;
                }
                else {
                    this.nowIndex += 1;
                }
                this.showBtn(this.nowIndex);
            } else {
                return false;
            }
        },
        showBtn: function (index) {
            let btn = document.querySelectorAll('.btn');
            for(let i = 0; i < this.imgs.length; i++) {
                btn[i].className = "btn";
            }
            btn[index - 1].className = "btn on";
        },
        toIndex: function (index) {
            let offset = (this.nowIndex - index) * this.realWidth;
            this.nowIndex = index;
            this.animate(offset);
            this.showBtn(index);
        },
        play: function () {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
            this.timer = setInterval(() => {
                this.run(1);
            }, 3000);
        },
        stop: function () {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
</script>

<style scoped>
.swiper {
    position: relative;
    width: 100%;
    height: 485px;
    overflow: hidden;
}

.slide-img {
    height: 485px;
}

.ul-imgs {
    position: relative;
    height: 485px;
}

.ul-imgs li {
    height: 485px;
    float: left;
}

.img {
    position: relative;
    height: 485px;
}

.prevnext {
    position: relative;
    top: -300px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1010px;
    height: 68px;
    z-index: 2;
}

.prev {
    display: inline-block;
    width: 90.8px;
    height: 68px;
    background: url(../assets/prev.png);
    background-size: 90.8px 68px;
    cursor: pointer;
}

.prev:hover {
    background: url(../assets/hprev.png);
    background-size: 90.8px 68px;
}

.next {
    display: inline-block;
    width: 90.8px;
    height: 68px;
    background: url(../assets/next.png);
    background-size: 90.8px 68px;
    cursor: pointer;
}

.next:hover {
    background: url(../assets/hnext.png);
    background-size: 90.8px 68px;
}

.slide-icon {
    position: relative;
    display: flex;
    justify-content: center;
    bottom: 35px;
    height: 15px;
    width: 100%;
    z-index: 90;
}

.slide-icon li {
    width: 15px;
    height: 15px;
    margin-right: 38px;
    background: #ffffff;
    border-radius: 15px;
    float: left;
    cursor: pointer;
}

.slide-icon li:last-child {
    margin-right: 0;
}

.slide-icon .on {
    background: #fbd437;
}
</style>
