
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
  createDate: Date;
  updateDate: Date;
  format: string;
  type: string;
  id: string;
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

export interface IGroupContract {
  name: string;
  sysParamValue: {
    value: '';
  };
}


