export class Bug{
  id:any;
  name:string = 'Bug';
  priority:string = 'LOW';
  type:string = 'UNITLEVEL';
  status:string = '';
  module:string = 'module';
  buildVersion:string = 'v1';
  severity:string = 'LOW';
  projectId:string = 'project1';
  testerId:string = 'tester1';
  developerId:any;
  product:string = 'product1';
  synopsis:string = '';
  description:string = '';
  submittedOn:Date = new Date();
  etaDate:string = '';
}
