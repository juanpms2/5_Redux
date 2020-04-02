import { UserEntity } from "model";
import { actionsEnums } from "../actionsEnums";
import { getUser } from "common";
import { trackPromise } from "react-promise-tracker";

export const userRequest = (user: UserEntity) => ({
	type: actionsEnums.USER_REQUEST_COMPLETED,
	payload: user
});

export const loadUser = (idLogin: string) => (dispatcher) => {
	const promise = getUser(idLogin);
	trackPromise(promise.then((data) => dispatcher(userRequest(data))));

	return promise;
};
