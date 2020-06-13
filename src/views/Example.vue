<template>
    <div>
        <form @submit.prevent="submit">
            <h1>Example Page</h1>
            <div class="field">
                <input 
                    type="text"
                    v-model="email" 
                    placeholder="What's your email?"
                    :class="{error: $v.email.$error}" 
                    @blur="$v.email.$touch()"
                />
                <div v-if="$v.email.$error">
                    <p class="error-message" v-if="!$v.email.required">Email is required</p>
                    <p class="error-message" v-if="!$v.email.email">Must be valid email</p>
                </div>
            </div>
            <hr>
            <button :disabled="$v.$invalid" type="submit">Submit</button>
            <p class="error-message" v-if="$v.$anyError">Please fill out the required forms</p>
        </form>
    </div>
</template>

<script>

import {required, email} from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            email: null
        }
    },
    validations: {
        email: {
            required,
            email
        }
    },
    methods: {
        submit() {
            this.$v.$touch()
            if(!this.$v.$invalid) {
                console.log('form submitted', this.email)
            }
            
        }
    },
}
</script>

<style scoped>
    .error-message {
        color: red;
    }
    .error {
        border-color: red;
    }
</style>