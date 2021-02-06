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

export interface ISysParam {
  name: string;
  sysParamValue: {
    value: '';
  };
}




