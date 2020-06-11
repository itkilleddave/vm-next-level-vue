<template>
    <div class="field">
        <label v-if="label">{{label}}</label>
        <!-- <input @input="updateValue" :value="value" :placeholder="placeholder" type="text" /> -->
        <input @input="updateValue" :value="value" v-bind="$attrs" />
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            label: {
                type: String,
                default: ''
            },
            value: [String, Number],
            // placeholder: {
            //     type: String,
            //     default: ''
            // },
        },
        methods: {
            updateValue(event) {
                this.$emit('input', event.target.value)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>