import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    const isAdmin = user.admin;

    if (!isAdmin) throw new Error('You do not have permission to list users!');

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
