<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="modal-header">
                <slot name="header"></slot>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-close" @click="close">
                    关闭
                </button>
                <button type="button" class="btn-confirm" @click="confirm">
                    确认
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal {
    background-color: #fff;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    /* width: 500px; */
}
.modal-header {
    border-bottom: 1px solid #eee;
    color: #313131;
    justify-content: space-between;
    padding: 10px;
    display: flex;
}
.modal-footer {
    border-top: 1px solid #eee;
    justify-content: flex-end;
    padding: 10px;
    display: flex;
}
.modal-body {
    position: relative;
    /* padding: 20px 10px; */
}
.btn-close,
.btn-confirm {
    margin-left: 16px;
    width: 56px;
    height: 36px;
    border: none;
    cursor: pointer;
}
.btn-close {
    color: #313131;
    background-color: transparent;
}
.btn-confirm {
    color: #fff;
    background-color: #888;
}
</style>

<script>
export default {
    name: 'Modal',
    props: {
        headerText: {
            type: String,
        },
    },
    data() {
        return {};
    },
    methods: {
        close() {
            this.$emit('close');
        },
        confirm() {
            this.$emit('confirm');
        },
    },
};
</script>
