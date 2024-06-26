import { getDocs, query, where } from 'firebase/firestore'
import { collectionClinics } from '@/config/firebase/collections'
import { ClinicProps } from '@/components/types/clinic-props'

const clinicServices = {
  get: async (uid: string) => {
    const clinicList: ClinicProps[] = []

    const queryClinics = query(collectionClinics, where('owner', '==', uid))

    const getClinics = await getDocs(queryClinics)

    getClinics.forEach((doc) => {
      clinicList.push({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        phone: doc.data().phone,
        cnpj: doc.data().cnpj,
        corporateReason: doc.data().corporateReason,
        address: doc.data().address,
        createdAt: doc.data().createdAt,
        owner: doc.data().owner,
      } as ClinicProps)
    })

    return clinicList
  },
}

export default clinicServices
