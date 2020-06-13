<template>
    <div class="field">
        <label v-if="label">{{label}}</label>
        <select @input="updateValue" :value="value" v-bind="$attrs">
            <option 
                v-for="option in options" 
                :value="option"
                :key="option"
                :selected="option == value"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin.js';

export default {
    mixins: [ formFieldMixin ],
    props: {
        options: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>