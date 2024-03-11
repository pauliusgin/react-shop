import React from "react";

function Button({ action, children }) {
	return <button onClick={action}>{children}</button>;
}

export { Button };
