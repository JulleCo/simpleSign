import UserService from './userService'
import { Response, Request} from 'express'

class UserController {
    private userService : UserService
    constructor(userService : UserService) {
      this.userService = userService;
    }
  
    getAll = async (_ : Request, res :  Response) => {
      try {
        let users = await this.userService.getAll();
        res.status(200).json(users);
      } catch (err) {
        console.error(err);
        res.status(400).json(`error occured —————>> ${err}`);
      }
    }
}
export default UserController;