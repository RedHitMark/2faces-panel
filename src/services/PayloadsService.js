import Api from '@/services/Api'

export default {
    fetchPayloads() {
        return Api().get('payload')
    },
    fetchPayload(payload_id) {
        return Api().get('payload?payload_id=' + payload_id)
    },
    createPayload(newPayload) {
        return Api().post('payload', newPayload)
    },
    editPayload(payload_id, newPayload) {
        return Api().put('payload?payload_id=' + payload_id, newPayload)
    },
    deletePayload(payload_id) {
        return Api().delete('payload?payload_id=' + payload_id)
    }
}
