import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Spinner, SimpleModalContainer } from "common";
import { MemberProvider, UserProvider, switchRoutes } from "core";
import { IndexScene, MembersScene, FileMemberScene } from "scenes";

export const App: React.FunctionComponent = () => {
	return (
		<>
			<Spinner />

			<MemberProvider>
				<SimpleModalContainer />
				<HashRouter>
					<Switch>
						<Route
							exact={true}
							path={[switchRoutes.root, switchRoutes.index]}
							component={IndexScene}
						/>
						<Route
							exact={false}
							path={[switchRoutes.members]}
							component={MembersScene}
						/>
						<UserProvider>
							<Route
								exact={true}
								path={[switchRoutes.fileMember]}
								component={FileMemberScene}
							/>
						</UserProvider>
					</Switch>
				</HashRouter>
			</MemberProvider>
		</>
	);
};
