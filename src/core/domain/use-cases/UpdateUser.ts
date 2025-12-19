import { User } from '../entities/User';
import { IUserRepository } from '../repositories/UserRepository';
import { Email } from '../value-objects/Email';
import { Password } from '../value-objects/Password';

export class UpdateUser {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(params: {
        id: string;
        email?: string;
        password?: string;
    }): Promise<User> {
        const { id, email } = params;

        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        const newEmail = email ? Email.create(email) : user.email;
        const newPassword = params.password ? Password.create(params.password) : user.password;

        const updatedUser = User.create(
            user.id,
            newEmail,
            newPassword,
        );

        await this.userRepository.update(updatedUser);

        return updatedUser;
    }
}