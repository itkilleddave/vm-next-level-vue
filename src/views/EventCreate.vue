<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">

      <BaseSelect 
        v-model="event.category" 
        label="Select a Category" 
        :options="categories" 
        :class="{error: $v.event.category.$error }"
        @blur="$v.event.category.$touch()"
      />
      <template class="error-message" v-if="$v.event.category.$error">
        <p v-if="$v.event.category.required">Category is required.</p>
      </template>

      <h3>Name & describe your event</h3>
      <BaseInput v-model="event.title" label="Title" placeholder="Add a title" type="text" />
      <BaseInput v-model="event.description" label="Description" placeholder="Add a description" type="text" />

      <h3>Where is your event?</h3>
      <BaseInput v-model="event.location" label="Location" placeholder="Add a location" type="text" />

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>

      <BaseSelect v-model="event.time" label="Select a Time" :options="times" />

      <!-- <input type="submit" class="button -fill-gradient" value="Submit"/> -->
      
      <BaseButton type="submit" button-class="-fill-gradient" >Submitto!</BaseButton>

    </form>
  </div>
</template>


<script>
import Datepicker from 'vuejs-datepicker'
import {required} from 'vuelidate/lib/validators'

export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  validations: {
    event: {
        category: { required },
        title: { required },
        description: { required },
        location: { required },
        date: { required },
        time: { required }
    }
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {})
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
