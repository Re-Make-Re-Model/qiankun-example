import React from 'react';
function App({ loading }) {
	return (
		<div>
			{loading ? <h1>Loading...</h1> : <h1>QianKun Home</h1>}
			<button onClick={() => history.pushState(null, '/sub1', '/sub1')}>Sub1</button>
			<button onClick={() => history.pushState(null, '/sub2', '/sub2')}>Sub2</button>
			<div id="subapp-viewport" />
		</div>
	)

}

export default App;
