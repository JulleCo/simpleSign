import UserController from './userController';

class UserRouter {
    private router : any
    constructor(router : any, userController: UserController) {
      this.router = router;
      this.initializeRoutes(userController);

      return this.router;
    }
  
    initializeRoutes(userController : UserController) {
      this.router.route('/users')
        .get(userController.getAll)
        // .post(userController.register);
    }
}

export default UserRouter;