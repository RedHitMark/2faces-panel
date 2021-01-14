import Api from '@/services/Api'

export default {
    fetchAttacks() {
        return Api().get('attacks')
    },
    fetchAttack(attack_id) {
        return Api().get('attacks?attack_id=' + attack_id)
    },
    deleteAttack(attack_id) {
        return Api().delete('attacks?attack_id=' + attack_id)
    }
}
