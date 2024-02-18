import { getDocs, query, where } from 'firebase/firestore'
import { collectionClinics } from '@/config/firebase/collections'
import { ClinicsType } from '@/components/types/clinic-props'

const clinicServices = {
  get: async (uid: string) => {
    const clinicList: ClinicsType[] = []

    const queryClinics = query(collectionClinics, where('owner', '==', uid))

    const getClinics = await getDocs(queryClinics)

    getClinics.forEach((doc) => {
      clinicList.push({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        phone: doc.data().phone,
        cnpj: doc.data().cnpj,
        cep: doc.data().cep,
        corporateReason: doc.data().corporateReason,
        address: doc.data().address,
        createdAt: doc.data().createdAt,
        experts: doc.data().experts,
        owner: doc.data().owner,
      } as ClinicsType)
    })

    return clinicList
  },
}

export default clinicServices
