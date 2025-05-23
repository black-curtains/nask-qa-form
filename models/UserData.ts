export class UserData {
    constructor(
        public name: string,
        public surname: string,
        public email: string,
        public password: string,
        public birthDate: string,
        public language: string,
        public phoneNumber: string
    ) {}

    static createDefault(): UserData {
        return new UserData(
            'Markus',
            'Smith',
            'markus.smith@example.com',
            'SecurePass123!',
            '2007-05-14',
            'en',
            '777888999'
        );
    }
}
