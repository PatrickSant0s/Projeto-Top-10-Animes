import { setUsers } from "./utils/Users";
import { users } from "./utils/Users";

export default (await import('vue')).defineComponent({
name: "UserLogin",
data: () => ({
form: false,
email: null,
password: null,
loading: false,
}),

computed: {
users() {
return users;
},
},
mounted() {
setUsers(this.users);

},
methods: {
onSubmit() {
if (!this.form) return;
const IsvalidUser = this.validateUser(this.email, this.password);

}
}
});
