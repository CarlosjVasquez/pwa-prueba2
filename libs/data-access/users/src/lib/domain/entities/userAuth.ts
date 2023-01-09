export type MembersOnboardingType = {
  identification: string;
  fingerPrintCode?: string;
};

export default class UserAuthEntities {
  userId: string;
  addresses: address[];

  constructor(userId = '') {
    this.userId = userId;
    this.addresses = [];
  }
}

export type address = {
  state: string;
  city: string;
  reference: string;
  address: string;
  build_type: string;
  address_type: string;
};

export class UserEntities {
  id?: string;
  first_name: string;
  last_name: string;
  identification_number: string;
  identification_type: string;
  birthday: string;
  civil_status: string;
  nationality: string;
  phone: string;
  fingerprint_code: string;
  country: string;
  email: string;
  addresses: address[];
  company_name: string;
  economic_activity: string;
  profession: string;
  position: string;
  work_phone: string;

  constructor() {
    this.first_name = '';
    this.last_name = '';
    this.identification_number = '';
    this.identification_type = '';
    this.birthday = '';
    this.civil_status = '';
    this.nationality = '';
    this.phone = '';
    this.fingerprint_code = '';
    this.country = '';
    this.email = '';
    this.addresses = [];
    this.company_name = '';
    this.economic_activity = '';
    this.profession = '';
    this.position = '';
    this.work_phone = '';
  }
}
