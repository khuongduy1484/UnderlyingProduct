export interface ITemplateContract {
  code: string;
  name: string;
  description: string;
  createDate: Date;
  updateDate: Date;
  makerId: number;
  checkerId: number;
  activeVersion: string;
  status: string;
  id: string;
  content: string;
  checked: boolean;
}

export interface IGroupContract {
  code: string;
  name: string;
  description: string;
  createDate: Date;
  updateDate: Date;
  makerId: number;
  checkerId: number;
  status: string;
  id: string;
  content: string;
  checked: boolean;
  versionId: number;
  appliedDate: number;
  contTemplateDocDto: ITemplateContract;
}


export interface IContractGroup {
  code: string;
  description: string;
  createdDate: Date;
  updatedDate: Date;
  format: string;
  type: string;
  id: string;
}

export interface ISysParam {
  name: string;
  sysParamValue: {
    value: '';
  };
}

export interface IPropRuleApproval {
  code: string;
  condition: string;
  description: string;
  createdDate: Date;
  status: string;
  propRuleCondition: {
    dataValue: '';
    dataType: '';
    orderNo: '';
  };
  name: string;
}

export interface IPropRulePending {
  code: string;
  condition: string;
  description: string;
  createdDate: Date;
  status: string;
  dataValue: '';
  dataType: '';
  orderNo: '';
  name: string;
}

export interface IFormNotification {
  code: string;
  notiType: string;
  transType: string;
  description: string;
  content: string;
  createdDate: Date;
  updatedDate: Date;
  status: number;
  name: string;
  id: string;
}

export interface ICustomer {
  id: string;
  code: string;
  name: string;
  dob: Date;
  phone: string;
  email: string;
  gender: string;
  address: string;
  jd: string;
  occupation: string;
  nationality: string;
  taxCode: string;
  idCard: number;
  account: string;

  status: number;
  userName: string;

  stockAccount: string;
  vsdActivateAccount: number;
  subAccountNumber: number;
  statusAccount: number;
  vsdActivateStatus: number;

  accountName: string;
  bankCity: string;
  branchName: string;
  accountNumber: number;
  bankName: string;
}

export interface IGroupContract {
  name: string;
  sysParamValue: {
    value: '';
  };
}




