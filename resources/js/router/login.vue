<script>
/**
 * Login component
 */
export default {
    data() {
        return {
            email: null,
            password: null,
            tryingToLogIn: false,
            isAuthError: false,
        };
    },
    props: {
        authError: {
            type: String,
            required: false,
            default: () => null,
        },
    },
    mounted() {
        this.isAuthError = !!this.authError;
    },
    methods: {
        loginReq() {}
    }
};
</script>

<template>
<div>
    <div class="account-pages my-5 pt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="text-center pb-4">
                        <img style="width: 25%" :src="require('@/assets/outshinery-logo.svg').default"/>
                    </div>
                    <div class="card overflow-hidden mb-1">
                        <div class="card-body p-0">
                            <div>
                                <div class="px-5 pt-5">
                                    <div class="text-primary">
                                        <h1 class="text-primary">Outshinery Portal</h1>
                                        <p>Enter your details below to login</p>
                                    </div>
                                    <b-alert
                                        v-model="isAuthError"
                                        variant="danger"
                                        class="mt-3"
                                        dismissible>{{ authError }}
                                    </b-alert>
                                </div>
                                <b-form>
                                    <div class="px-5 py-5">
                                        <slot/>
                                        <div class="mb-4">
                                            <b-form-input
                                                id="input-1"
                                                name="email"
                                                v-model="email"
                                                type="text"
                                                class="border-bt-only"
                                                placeholder="Email"></b-form-input>
                                        </div>
                                        <div class="mb-2">
                                            <b-form-input
                                                id="input-2"
                                                v-model="password"
                                                name="password"
                                                type="password"
                                                class="border-bt-only"
                                                placeholder="Password"></b-form-input>
                                        </div>
                                    </div>
                                    <div class="mt-3 d-grid">
                                        <b-button type="button" variant="primary"
                                                  @click="loginReq"
                                                  class="btn-block text-uppercase py-2 px-2 lgn-btn fs-2">Login
                                        </b-button>
                                    </div>
                                </b-form>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 text-end">
                        <p>
                            Don't have an account?
                            <a tag="a" to="/auth/register-1" class="fw-medium text-primary">Sign up here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss">
.lgn-btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin: 3px;
}

.border-bt-only {
    border: 0;
    border-radius: 0;
    padding-left: 0;
    border-bottom: 1px solid #ced4da;
}
</style>
