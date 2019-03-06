<template>
    <div class="contact-form">
        <div v-if="sent" class="alert-sent">
            Your message has been sent!
        </div>

        <form v-if="!sent" name="contact" method="POST" @submit.prevent="submitForm" netlify ref="form">
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
                <textarea name="message" id="message" cols="30" rows="10" required :disabled="sending" ref="message"></textarea>
            </div>

            <input type="submit" value="Submit" :disabled="sending" class="submit-button">
        </form>
    </div>
</template>

<script>
    import autosize from 'autosize';

    export default {
        data: function () {
            return {
                sent: false,
                sending: false,
            }
        },

        mounted() {
            autosize(this.$refs.message);
        },

        methods: {
            encode(data) {
                return Object.keys(data)
                    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                    .join("&");
            },

            submitForm(event) {
                this.sending = true;
                let form = this.$refs.form;

                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: this.encode({
                        "form-name": form.getAttribute("name"),
                        "name": form.name.value,
                        "email": form.email.value,
                        "message": form.message.value,
                    })
                }).then(() => {
                    this.sent = true;
                    this.sending = false;
                })
                .catch(error => alert(error));
            }
        }
    }
</script>
