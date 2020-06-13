export const formFieldMixin = {
    inheritttrs: false,
    props: {
        label: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number]

        }
    },        
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value)
        }
    },
    mounted() {
        console.log('hello from mixin!');
    },
};