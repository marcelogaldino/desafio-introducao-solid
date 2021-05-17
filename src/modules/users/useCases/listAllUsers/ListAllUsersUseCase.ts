import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User doesn't exists");
    }

    if (user.admin === false) {
      throw new Error("You aren't an admin user");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
