<template>
    <div class="contact-form max-w-sm">
        <transition name="slide-right">
            <div v-if="sent" class="alert-sent mb-4">
                <p>Your message has been sent! I'll get in touch with you shortly.</p>
            </div>
        </transition>

        <p class="mb-4">Want to get in touch? Great! Use this form and I'll get back to you as soon as possible.</p>

        <form name="contact" method="POST" @submit.prevent="submitForm" netlify ref="form">
            <div class="input-group">
                <label for="name">Name: *</label>
                <input class="input" type="text" name="name" id="name" required :disabled="sending || sent">
            </div>

            <div class="input-group">
                <label for="email">Email: *</label>
                <input class="input" type="email" name="email" id="email" required :disabled="sending || sent">
            </div>

            <div class="input-group">
                <label for="message">Message: *</label>
                <textarea class="input resize-none" name="message" id="message" cols="30" rows="10" required :disabled="sending || sent" ref="message"></textarea>
            </div>

            <input class="submit-button bg-primary-dark text-white border border-primary-light py-2 px-4 cursor-pointer rounded shadow appearance-none" type="submit" value="Submit" :disabled="sending || sent">
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
                    this.$parent.$el.scrollTo(0, 0); // Scroll to top
                })
                .catch(error => alert(error));
            }
        }
    }
</script>
