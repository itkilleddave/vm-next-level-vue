<template>
    <div class="field">
        <label v-if="label">{{label}}</label>
        <!-- <input @input="updateValue" :value="value" :placeholder="placeholder" type="text" /> -->
        <input @input="updateValue" :value="value" v-bind="$attrs" />
    </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin.js';
export default {
    mixins: [ formFieldMixin ],
}
</script>

<style lang="scss" scoped>

</style>