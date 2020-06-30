import Api from '@/services/Api'

export default {
    fetchPayloads() {
        return Api().get('payloads')
    },
    fetchPayload(payload_id) {
        return Api().get('payloads?payload_id=' + payload_id)
    },
    createPayload(newPayload) {
        return Api().post('payloads', newPayload)
    },
    editPayload(payload_id, newPayload) {
        return Api().put('payloads?payload_id=' + payload_id, newPayload)
    },
    deletePayload(payload_id) {
        return Api().delete('payloads?payload_id=' + payload_id)
    }
}
