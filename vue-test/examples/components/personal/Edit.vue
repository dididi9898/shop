<template>
    <div>
        <Header :msg_title=title msg_right="确定" type="0"></Header>
        <van-cell-group>
            <van-field
                    v-model="message"
                    type="textarea"
                    rows="1"
                    autosize
            />
        </van-cell-group>
    </div>
</template>

<script>
    import Header from '../public/Header'
    export default {
        components: {
            Header,
        },
        data() {
            return {
                title:'',
                message:''
            };
        },
        created(){
            this.title=this.$route.query.title;
        },
        methods: {
        },
    };
</script>