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

export interface Issuer {
  code: string;
  address: string;
  description: string;
  fax: string;
  email: string;
  phone: string;
  createdDate: Date;
  contractPoint: string;
  active: string;
  businessSector: string;
  name: string;
  groupName: string;
  businessNumber: string;
  businessGroupId: number;
  id: number;
}

export interface IPolicesProduct {
  code: string;
  holdingPeriod: number;
  description: string;
  repurchase: number;
  autoSell: number;
  holdMoney: number;
  holdAsset: Date;
  discount: number;
  discountRate: number;
  name: string;
  mortgage: number;
  transfer: number;
  id: number;
  createdDate: Date;
  status: number;
}


export interface IPrimaryProduct {
  code: string;
  name: string;
  issueDate: string;
  createDate: Date;
  maturityDate: Date;
  par: number;
  listedCode: number;
  issueType: string;
  id: string;
  issuePurpose: string;
  status: number;
  issuerId: number;
  bondType: string;
  collateral: string;
  guarantee: string;
  guaranteeInfo: number;
  collateralValue: number;
  guaranteeValue: string;
  callBack: string;
}

export interface IProdVanillaBond {
  id: string;
  callBack: string;
  collateral: string;
  bondType: string;
  guarantee: string;
  guaranteeInfo: number;
  collateralValue: number;
  guaranteeValue: string;
}

export interface IProdDerivative {
  id: number;
  name: string;
  agreementId: number;
  vanillaId: number;
  startDate: Date;
  endDate: Date;
  status: number;
  createdDate: Date;
}


export interface IProdVariable {
  id: number;
  name: string;
  propVariableValue: {
    appliedDate: Date;
    value: '';
    createdDate: Date;
    status: number;
    description: string;
  };
}


