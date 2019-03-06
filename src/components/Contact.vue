<template>
    <div class="contact-form">
        <div v-if="sent" class="alert-sent">
            Your message has been sent!
        </div>

        <form v-if="!sent" action="" name="contact" method="POST" @submit.prevent="submitForm" netlify ref="form">
            <div class="input-group">
                <label for="name">Name: *</label>
                <input type="text" name="name" id="name" required :disabled="sending">
            </div>

            <div class="input-group">
                <label for="email">Email: *</label>
                <input type="email" name="email" id="email" required :disabled="sending">
            </div>

            <div class="input-group">
                <label for="message">Message: *</label>
                <textarea name="message" id="message" cols="30" rows="10" required :disabled="sending"></textarea>
            </div>

            <input type="submit" value="Submit" :disabled="sending">
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                sent: false,
                sending: false,
            }
        },
        methods: {
            submitForm(event) {
                this.sending = true;

                let data = new FormData();
                data.append('name', this.$refs.form.name.value);
                data.append('email', this.$refs.form.email.value);
                data.append('message', this.$refs.form.message.value);

                let xhr = new XMLHttpRequest();
                xhr.open('POST', this.$refs.form.action, true);
                xhr.onload = () => {
                    // do something to response
                    if (xhr.statusText === "OK") {
                        this.sent = true;
                        this.sending = false;
                    }
                };
                xhr.send(data);
            }
        }
    }
</script>
