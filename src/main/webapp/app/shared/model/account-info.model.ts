export interface IAccountInfo {
  id?: number;
  accountId?: number | null;
  companyName?: string | null;
  socialCreditCode?: string | null;
  entityLegalPerson?: string | null;
  password?: string | null;
  fullyAddress?: string | null;
  companyContact?: string | null;
  mobileNumber?: string | null;
  accountStatus?: number | null;
  createTime?: Date | null;
  updateTime?: Date | null;
}

export class AccountInfo implements IAccountInfo {
  constructor(
    public id?: number,
    public accountId?: number | null,
    public companyName?: string | null,
    public socialCreditCode?: string | null,
    public entityLegalPerson?: string | null,
    public password?: string | null,
    public fullyAddress?: string | null,
    public companyContact?: string | null,
    public mobileNumber?: string | null,
    public accountStatus?: number | null,
    public createTime?: Date | null,
    public updateTime?: Date | null,
  ) {}
}
