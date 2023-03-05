type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    user_type: string;
}
/*
graphQL schema reference
type User {
    id: ID!
    first_name: String! """ ID? """
    last_name: String! """ ID? """
    email: String!
    user_type: String!
}
 */
export default User;