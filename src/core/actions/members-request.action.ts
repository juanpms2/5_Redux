import { MemberEntity, ErrorEntity } from "model";
import { actionsEnums } from "../actionsEnums";
import { getAllMembers } from "common";
import { trackPromise } from "react-promise-tracker";

export const membersRequest = (members: MemberEntity[]) => ({
	type: actionsEnums.MEMBERS_REQUEST,
	payload: members
});

export const errorRequest = (error: ErrorEntity) => ({
	type: actionsEnums.ERROR_REQUEST,
	payload: error
});

export const loadMembers = (organization) => (dispatcher) => {
	const promise = getAllMembers(organization);
	const error: ErrorEntity = {
		organization,
		booleanError: false,
		txtError: "",
		nameLogin: ""
	};
	trackPromise(
		promise
			.then((members) => {
				dispatcher(membersRequest(members));
				dispatcher(errorRequest(error));
				return members;
			})
			.catch((error) => {
				error.booleanError = true;
				error.txtError = error;
				dispatcher(errorRequest(error));
				return error;
			})
	);

	return promise;
};
