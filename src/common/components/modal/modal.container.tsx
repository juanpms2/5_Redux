import React from "react";
import { connect } from "react-redux";
import { SimpleModalComponent } from "./modal.component";
import { GlobalState } from "core";

interface Props {
	booleanError: boolean;
	txtError: string;
	organization: string;
}

const InnerSimpleModalContainer = (props) => {
	const { organization, booleanError, txtError } = props;
	const [open, setOpen] = React.useState(booleanError);

	// Se ejecuta cada vez que cambia la propiedad y muestra el mensaje si el valor es true.
	React.useEffect(() => {
		setOpen(booleanError);
	}, [booleanError]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<SimpleModalComponent
			open={open}
			txtError={txtError}
			organization={organization}
			handleClose={handleClose}
			handleOpen={handleOpen}
		/>
	);
};

const MapStateToProps = (globalState: GlobalState) => {
	return {
		error: globalState.errorReducer
	};
};

const MapDispatchToProps = () => {};

export const SimpleModalContainer = connect(
	MapStateToProps,
	MapDispatchToProps
)(InnerSimpleModalContainer);
