import getUserById from './getUserById';
import createUser from './createUser';
import deleteUser from "./deleteUser";
import User from './User';
type AppSyncEvent = {
    info: {
        fieldName: string
    },
    arguments: {
        user: User,
        userId: number
    }
}

exports.handler = async (event:AppSyncEvent) => {
    switch (event.info.fieldName) {
        case 'createUser':
            return await createUser(event.arguments.user);
        case 'getUserById':
            return await getUserById(event.arguments.userId);
        case 'deleteUser':
            return await deleteUser(event.arguments.userId);
        default:
            return null;
    }
}