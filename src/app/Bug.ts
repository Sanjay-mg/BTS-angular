export class Bug{
  name:string = 'Bug';
  priority:string = 'LOW';
  type:string = 'UNITLEVEL';
  status:string = 'NEW';
  module:string = 'module';
  buildVersion:string = 'v1';
  severity:string = 'LOW';
  projectId:string = 'project1';
  testerId:string = 'tester1';
  product:string = 'product1';
  synopsis:string = '';
  description:string = '';
  submittedOn:Date = new Date();
  etaDate:Date = new Date();
}
