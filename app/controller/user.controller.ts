import { Request, Response } from "express";
import { User } from "../models";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await User.create(req.body);
      res.status(200).send(user);
    } catch (err) {
      console.log(err.message);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const user = await User.findAll();
      if (user == null) {
        res.status(404).send("User not found");
      } else {
        res.status(200).send(user);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user = await User.findByPk(id);

      if (user == null) {
        res.status(404).send("Not found");
      } else {
        res.status(200).send(user);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user1 = await User.findByPk(id);
      if (user1 == null) {
        res.status(404).send("Not found");
      } else {
        await user1.update(req.body);
        res.status(200).send(user1);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user = await User.findByPk(id);
      if (user == null) {
        res.status(404).send("Not found");
      } else {
        await user.destroy();
        res.status(200);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}
export default UserController;
