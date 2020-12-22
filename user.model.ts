export class User {
    public fullName: string;
    public birthDate: string;
    public languages: any;
    public gender: string;
    public about:string;
    
  
    constructor(fullName: string, birthDate: string, languages: string, gender: string,about:string) {
      this.fullName = fullName;
      this.birthDate = birthDate;
      this.languages = languages;
      this.gender = gender;
      this.about=about;
    }
}
