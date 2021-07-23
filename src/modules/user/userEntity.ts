import { UserTypes } from './userType';

class UserEntity implements UserTypes{
    public id : number
    public email : string
    public password : string
    public lastName : string | null
    public firstName : string | null
    public isAdmin : boolean

    constructor({ id, email, password, lastName, firstName, isAdmin } : UserTypes) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
    // validateEmail() {
    //   const email_format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   (this.user.email != email_format) ? false : true
    // }
  
    validateProfile() {
      if (!this.firstName || !this.lastName)
        return false;
      else
        return true;
    }
  
    validateLogin() {
      if (!this.email || !this.password)
        return false;
      else
        return true;
    }
  }
  export default UserEntity;